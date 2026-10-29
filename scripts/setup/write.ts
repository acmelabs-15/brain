/**
 * Write what brain's skills assume is in a repo, and the one file Codex needs on this machine.
 *
 *   bun run scripts/setup/write.ts --root <repo> --layout single|multi [--codex-scope global|project] [--codex-home <dir> | --no-codex] [--rename-glossary] [--dry-run | --check] [--brain <plugin root>]
 *   bun run scripts/setup/write.ts --root <repo> --migrate [--dry-run]
 *
 * --migrate runs the migrate mode for a repo on brain 0.8 (see migrate.ts) instead of the
 * writes below, and prints the commit it wrote.
 *
 * docs/agents/domain.md gets the consumer rules with the layout named.
 * docs/agents/workspace.md gets the workspace template; a re-run keeps the folder paths and the
 * max_parallel that the repo's own file sets, and brings the rest of the template's text.
 * docs/STATUS.md gets the seed once; after that it is the agent's handoff note and is never written.
 * <codex home>/AGENTS.md gets the plain-talk block and the protocol block, each between its own
 * markers, when the Codex home directory exists ($CODEX_HOME, else ~/.codex); a symlink there is
 * written through and kept. At project scope the blocks go into the repo's AGENTS.md instead and the
 * global file is left alone; the skill passes that scope only after the user's explicit yes.
 * CLAUDE.md and GEMINI.md are never touched: Claude Code, Gemini CLI and Antigravity get the text
 * from the plugin. Every change is listed; --dry-run lists and writes nothing; --check lists, writes
 * nothing, and exits 1 when a file differs from what a run would write.
 */
import { mkdir, stat } from "node:fs/promises";
import { homedir } from "node:os";

import { replaceBlock } from "../plain-talk/block";
import { readFrontmatter } from "../workspace/schema";
import { migrate } from "./migrate";

export type Layout = "single" | "multi";
export type CodexScope = "global" | "project";
export type Change = {
  path: string;
  action: "created" | "updated" | "unchanged" | "skipped" | "moved";
  /** Why a change was skipped, printed beside it. */
  note?: string;
};
export type SetupInput = {
  brain: string;
  root: string;
  layout: Layout;
  dryRun: boolean;
  /** The Codex home directory; `undefined` means the default, `null` leaves the Codex step out. */
  codexHome?: string | null;
  /** Where the Codex block goes: the global file (default) or this repo's AGENTS.md. */
  codexScope?: CodexScope;
  /** Move a root CONTEXT.md and CONTEXT-MAP.md to the GLOSSARY names with `git mv`. */
  renameGlossary?: boolean;
  /** Run the migrate mode for a repo on brain 0.8 instead of the install writes. */
  migrate?: boolean;
  /** Report drift: list what a run would change, write nothing, exit 1 when anything would. */
  check?: boolean;
};

const glossaryMoves = [
  ["CONTEXT.md", "GLOSSARY.md"],
  ["CONTEXT-MAP.md", "GLOSSARY-MAP.md"],
] as const;

function tracked(root: string, path: string): boolean {
  return Bun.spawnSync(["git", "ls-files", "--error-unmatch", path], { cwd: root }).exitCode === 0;
}

/**
 * Move each root glossary file to its new name with `git mv`, so it keeps its history.
 * Every outcome is decided before the first move, so a dry run reports what a real run
 * does, and a file that cannot move never leaves the others half moved. Per-context
 * files that a map lists stay where they are.
 */
async function moveGlossaryFiles(input: SetupInput): Promise<Change[]> {
  const planned: Change[] = [];
  for (const [from, to] of glossaryMoves) {
    if (!(await Bun.file(`${input.root}/${from}`).exists())) {
      continue;
    }
    const path = `${from} -> ${to}`;
    if (await Bun.file(`${input.root}/${to}`).exists()) {
      planned.push({ path, action: "skipped", note: `${to} already exists` });
    } else if (tracked(input.root, from)) {
      planned.push({ path, action: "moved" });
    } else {
      planned.push({ path, action: "skipped", note: "not tracked by git; move it by hand" });
    }
  }
  if (input.dryRun) {
    return planned;
  }
  const done: string[] = [];
  for (const [from, to] of glossaryMoves) {
    if (!planned.some((c) => c.path === `${from} -> ${to}` && c.action === "moved")) {
      continue;
    }
    const moved = Bun.spawnSync(["git", "mv", from, to], { cwd: input.root });
    if (moved.exitCode !== 0) {
      const before = done.length > 0 ? `; already moved: ${done.join(", ")}` : "";
      throw new Error(`git mv ${from} ${to} failed: ${moved.stderr.toString().trim()}${before}`);
    }
    done.push(from);
  }
  return planned;
}

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

/** `text` with each block put between its own markers, in order; the text around them is kept. */
function withBlocks(text: string, blocks: string[], fileName: string): string {
  let next = text;
  for (const block of blocks) {
    next = replaceBlock(next, block, fileName);
  }
  return next;
}

async function writeCodex(input: SetupInput, blocks: string[]): Promise<Change | null> {
  if (input.codexScope === "project") {
    const path = `${input.root}/AGENTS.md`;
    const current = (await readIfPresent(path)) ?? "";
    return put(input, "AGENTS.md", path, withBlocks(current, blocks, "AGENTS.md"));
  }
  if (input.codexHome === null) {
    return null;
  }
  const home = input.codexHome ?? defaultCodexHome();
  const path = `${home}/AGENTS.md`;
  if (!(await isDirectory(home))) {
    return { path, action: "skipped", note: "no Codex home directory" };
  }
  const current = (await readIfPresent(path)) ?? "";
  return put(input, path, path, withBlocks(current, blocks, path));
}

/** The settings in `docs/agents/workspace.md` that belong to the repo: a re-run keeps each one set. */
const repoSettings = [
  ...["decisions", "research", "ideas", "specs"].map((key) => ({ key, line: `  ${key}` })),
  { key: "max_parallel", line: "max_parallel" },
];

/** A setting's value as YAML: as it is when it is a number or a plain path, else quoted. */
function yamlScalar(value: string | number): string {
  const text = String(value);
  return typeof value === "number" || /^[\w./-]+$/u.test(text) ? text : JSON.stringify(text);
}

/**
 * The workspace config to write: the template, with each repo setting that `current` already
 * sets put in place of the template's value. Null when `current`'s frontmatter cannot be read,
 * since a run would then lose the repo's settings.
 */
function workspaceText(template: string, current: string | null): string | null {
  const frontmatter = current === null ? null : readFrontmatter(current);
  if (frontmatter !== null && "error" in frontmatter) {
    return null;
  }
  const data = frontmatter?.data ?? {};
  const paths = typeof data.paths === "object" && data.paths !== null ? data.paths : {};
  const set: Record<string, unknown> = { ...paths, max_parallel: data.max_parallel };
  // Only the frontmatter holds settings; the body is the template's, as it is.
  const end = template.indexOf("\n---\n", 3);
  let head = template.slice(0, end);
  for (const { key, line } of repoSettings) {
    const value = set[key];
    if (typeof value === "string" || typeof value === "number") {
      head = head.replace(new RegExp(`^${line}: .*$`, "mu"), () => `${line}: ${yamlScalar(value)}`);
    }
  }
  return `${head}${template.slice(end)}`;
}

/** Write the workspace config, keeping the repo's own settings; skip a file it cannot read. */
async function writeWorkspace(input: SetupInput, template: string): Promise<Change> {
  const path = "docs/agents/workspace.md";
  const full = `${input.root}/${path}`;
  const next = workspaceText(template, await readIfPresent(full));
  if (next === null) {
    const why = "its frontmatter is not valid YAML; fix it, then run setup-brain again";
    return { path, action: "skipped", note: why };
  }
  return put(input, path, full, next);
}

/** Write the STATUS.md seed once. After that the file is the agent's handoff note, kept as it is. */
async function writeSeed(input: SetupInput, seed: string): Promise<Change> {
  const path = "docs/STATUS.md";
  const full = `${input.root}/${path}`;
  if (await Bun.file(full).exists()) {
    return { path, action: "unchanged" };
  }
  return put(input, path, full, seed);
}

/** Write every install file, or with `dryRun` only list it; return one change per file. */
export async function writeSetup(input: SetupInput): Promise<Change[]> {
  const template = (name: string) => Bun.file(`${input.brain}/${name}`).text();
  const blocks = [
    await template("plain-talk/AGENTS-block.md"),
    await template("protocol/AGENTS-block.md"),
  ];
  const domainTemplate = await template("skills/setup-brain/domain.md");
  const layoutName = input.layout === "single" ? "single-context" : "multi-context";
  // The glossary move runs first, so the change list shows it at the top.
  const changes: Change[] = input.renameGlossary === true ? await moveGlossaryFiles(input) : [];

  const codex = await writeCodex(input, blocks);
  if (codex !== null) {
    changes.push(codex);
  }

  const domain = domainTemplate.replaceAll("{{layout}}", layoutName);
  const domainPath = "docs/agents/domain.md";
  changes.push(
    await put(input, domainPath, `${input.root}/${domainPath}`, domain),
    await writeWorkspace(input, await template("skills/setup-brain/workspace.md")),
    await writeSeed(input, await template("skills/setup-brain/STATUS.md")),
  );
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
    if (flag === "--rename-glossary") {
      input.renameGlossary = true;
      continue;
    }
    if (flag === "--migrate") {
      input.migrate = true;
      continue;
    }
    if (flag === "--check") {
      input.check = true;
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
  if (input.check === true && input.migrate === true) {
    throw new Error("--check reports the install files; it does not apply to --migrate");
  }
  return input;
}

function note(change: Change, dryRun: boolean): string {
  if (change.note !== undefined) {
    return `  (${change.note})`;
  }
  return dryRun ? "  (dry run)" : "";
}

/** The closing line of `--check`, and its exit code: 1 when a run would change a file. */
function checkSummary(changes: Change[]): { line: string; code: number } {
  const drift = changes.filter((c) => c.action !== "unchanged" && c.action !== "skipped").length;
  if (drift === 0) {
    return { line: "every file is in place", code: 0 };
  }
  const files = drift === 1 ? "1 file differs" : `${drift} files differ`;
  return { line: `${files} from what setup-brain writes: run setup-brain`, code: 1 };
}

/** Run the mode the flags pick, print each change, and return the exit code. */
async function main(argv: string[]): Promise<number> {
  let input: SetupInput;
  try {
    input = parseArgs(argv);
  } catch (error) {
    console.error((error as Error).message);
    return 2;
  }
  try {
    const result =
      input.migrate === true
        ? await migrate(input)
        : { changes: await writeSetup(input), commit: null };
    const check = input.check === true;
    for (const change of result.changes) {
      console.log(
        `${change.action.padEnd(9)} ${change.path}${note(change, input.dryRun && !check)}`,
      );
    }
    if (result.commit !== null) {
      console.log(`committed ${result.commit}`);
    }
    if (check) {
      const summary = checkSummary(result.changes);
      console.log(summary.line);
      return summary.code;
    }
    return 0;
  } catch (error) {
    console.error((error as Error).message);
    return 1;
  }
}

if (import.meta.main) {
  process.exit(await main(process.argv.slice(2)));
}
