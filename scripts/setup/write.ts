/**
 * Write what brain's skills assume is in a repo, and the one file Codex needs on this machine.
 *
 *   bun run scripts/setup/write.ts --root <repo> --layout single|multi [--tracker local|github|gitlab] [--repo owner/name] [--codex-scope global|project] [--codex-home <dir> | --no-codex] [--dry-run] [--brain <plugin root>]
 *
 * docs/agents/domain.md gets the consumer rules with the layout named.
 * docs/agents/issue-tracker.md and docs/agents/triage-labels.md come from the templates, local tracker by default.
 * <codex home>/AGENTS.md gets the plain-talk block between its markers when the Codex home directory
 * exists ($CODEX_HOME, else ~/.codex); a symlink there is written through and kept. At project scope
 * the block goes into the repo's AGENTS.md instead and the global file is left alone. CLAUDE.md and
 * GEMINI.md are never touched: Claude Code, Gemini CLI and Antigravity get the text from the plugin.
 * Every change is listed; --dry-run lists and writes nothing.
 */
import { mkdir, stat } from "node:fs/promises";
import { homedir } from "node:os";

import { replaceBlock } from "../plain-talk/block";

export type Layout = "single" | "multi";
export type Tracker = "local" | "github" | "gitlab";
export type CodexScope = "global" | "project";
export type Change = { path: string; action: "created" | "updated" | "unchanged" | "skipped" };
export type SetupInput = {
  brain: string;
  root: string;
  layout: Layout;
  dryRun: boolean;
  tracker?: Tracker;
  repoSlug?: string;
  /** The Codex home directory; `undefined` means the default, `null` leaves the Codex step out. */
  codexHome?: string | null;
  /** Where the Codex block goes: the global file (default) or this repo's AGENTS.md. */
  codexScope?: CodexScope;
};

export function defaultCodexHome(): string {
  return process.env.CODEX_HOME ?? `${homedir()}/.codex`;
}

async function readIfPresent(path: string): Promise<string | null> {
  const file = Bun.file(path);
  return (await file.exists()) ? file.text() : null;
}

function isDirectory(path: string): Promise<boolean> {
  return stat(path).then(
    (s) => s.isDirectory(),
    () => false,
  );
}

/** Write `next` to `full` unless it already holds it. `path` is how the change is reported. */
async function put(input: SetupInput, path: string, full: string, next: string): Promise<Change> {
  const current = await readIfPresent(full);
  if (current === next) {
    return { path, action: "unchanged" };
  }
  if (!input.dryRun) {
    await mkdir(full.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(full, next);
  }
  return { path, action: current === null ? "created" : "updated" };
}

async function writeCodex(input: SetupInput, block: string): Promise<Change | null> {
  if (input.codexScope === "project") {
    const path = `${input.root}/AGENTS.md`;
    const current = (await readIfPresent(path)) ?? "";
    return put(input, "AGENTS.md", path, replaceBlock(current, block, "AGENTS.md"));
  }
  if (input.codexHome === null) {
    return null;
  }
  const home = input.codexHome ?? defaultCodexHome();
  const path = `${home}/AGENTS.md`;
  if (!(await isDirectory(home))) {
    return { path, action: "skipped" };
  }
  const current = (await readIfPresent(path)) ?? "";
  return put(input, path, path, replaceBlock(current, block, path));
}

export async function writeSetup(input: SetupInput): Promise<Change[]> {
  const block = await Bun.file(`${input.brain}/plain-talk/AGENTS-block.md`).text();
  const domainTemplate = await Bun.file(`${input.brain}/skills/setup-brain/domain.md`).text();
  const layoutName = input.layout === "single" ? "single-context" : "multi-context";
  const changes: Change[] = [];

  const codex = await writeCodex(input, block);
  if (codex !== null) {
    changes.push(codex);
  }

  const inRepo = (path: string, next: string) => put(input, path, `${input.root}/${path}`, next);
  const domain = domainTemplate.replaceAll("{{layout}}", layoutName);
  changes.push(await inRepo("docs/agents/domain.md", domain));

  const tracker = input.tracker ?? "local";
  const trackerTemplate = await Bun.file(
    `${input.brain}/skills/setup-brain/issue-tracker-${tracker}.md`,
  ).text();
  const trackerText = trackerTemplate.replaceAll("{{repo}}", input.repoSlug ?? "<owner>/<name>");
  changes.push(await inRepo("docs/agents/issue-tracker.md", trackerText));
  const labels = await Bun.file(`${input.brain}/skills/setup-brain/triage-labels.md`).text();
  changes.push(await inRepo("docs/agents/triage-labels.md", labels));
  return changes;
}

type Setter = (input: SetupInput, value: string) => boolean;

function oneOf<T extends string>(allowed: readonly T[], value: string): value is T {
  return (allowed as readonly string[]).includes(value);
}

/** Flags that take a value. Each setter returns false when the value is not one it accepts. */
const valued: Record<string, Setter> = {
  "--root": (input, value) => {
    input.root = value;
    return true;
  },
  "--brain": (input, value) => {
    input.brain = value;
    return true;
  },
  "--repo": (input, value) => {
    input.repoSlug = value;
    return true;
  },
  "--codex-home": (input, value) => {
    input.codexHome = value;
    return true;
  },
  "--layout": (input, value) => {
    if (!oneOf(["single", "multi"] as const, value)) {
      return false;
    }
    input.layout = value;
    return true;
  },
  "--tracker": (input, value) => {
    if (!oneOf(["local", "github", "gitlab"] as const, value)) {
      return false;
    }
    input.tracker = value;
    return true;
  },
  "--codex-scope": (input, value) => {
    if (!oneOf(["global", "project"] as const, value)) {
      return false;
    }
    input.codexScope = value;
    return true;
  },
};

function parseArgs(argv: string[]): SetupInput {
  const input: SetupInput = {
    brain: `${import.meta.dir}/../..`,
    root: process.cwd(),
    layout: "single",
    dryRun: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i] as string;
    if (flag === "--dry-run") {
      input.dryRun = true;
      continue;
    }
    if (flag === "--no-codex") {
      input.codexHome = null;
      continue;
    }
    const set = valued[flag];
    const value = argv[i + 1];
    if (set === undefined || value === undefined || !set(input, value)) {
      throw new Error(`unknown or incomplete flag ${flag}`);
    }
    i += 1;
  }
  return input;
}

function note(change: Change, dryRun: boolean): string {
  if (change.action === "skipped") {
    return "  (no Codex home directory)";
  }
  return dryRun ? "  (dry run)" : "";
}

if (import.meta.main) {
  try {
    const input = parseArgs(process.argv.slice(2));
    const changes = await writeSetup(input);
    for (const change of changes) {
      console.log(`${change.action.padEnd(9)} ${change.path}${note(change, input.dryRun)}`);
    }
  } catch (error) {
    console.error((error as Error).message);
    process.exit(2);
  }
}
