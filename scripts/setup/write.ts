/**
 * Write what brain's skills assume is in a repo, and the one file Codex needs on this machine.
 *
 *   bun run scripts/setup/write.ts --root <repo> --layout single|multi [--codex-scope global|project] [--codex-home <dir> | --no-codex] [--rename-glossary] [--dry-run | --check] [--brain <plugin root>]
 *   bun run scripts/setup/write.ts --root <repo> --migrate [--plan-spec <spec>|none] [--ideas <path>,<path>|none] [--tracker-files remove|keep] [--adr-folder move|keep] [--rename-glossary] [--dry-run] [--brain <plugin root>]
 *
 * --migrate runs the migrate mode for a repo on brain 0.8 (see migrate.ts) instead of the
 * writes below, and prints the commit it wrote. Each other flag is the user's answer to one
 * question of setup-brain:
 * --plan-spec, when the repo has several specs: the 0.8 spec that tasks/plan.md and
 * tasks/todo.md belong to, or none.
 * --ideas, when docs/intent/ holds Markdown files: the ones that become ideas, comma-separated,
 * or none.
 * --tracker-files, when docs/agents/issue-tracker.md or triage-labels.md exists: remove, after
 * the user's yes, or keep.
 * --adr-folder, when the repo has an ADR folder of another tool, such as doc/adr/: move its ADRs
 * into the decisions folder, after the user's yes, or keep it as read-only history.
 * --rename-glossary, after the user's yes: the glossary move goes into the migrate mode's commit.
 * A run that lacks an answer it needs exits 2 and names each one, as does an answer that names
 * no file the run found.
 *
 * docs/agents/domain.md gets the consumer rules with the layout named, and a line for each ADR
 * folder the repo keeps as history.
 * docs/agents/workspace.md gets the workspace template; a re-run keeps the folder paths and the
 * max_parallel that the repo's own file sets, and brings the rest of the template's text. On a
 * repo on the brain 0.8 layout that is not migrated yet, it is skipped: its `layout: 2` marks a
 * migrated repo, so the migrate mode writes it, and --check exits 1 until then.
 * docs/STATUS.md gets the seed once; after that it is the agent's handoff note and is never written.
 * <codex home>/AGENTS.md gets the plain-talk block and the protocol block, each between its own
 * markers, when the Codex home directory exists ($CODEX_HOME, else ~/.codex); a symlink there is
 * written through and kept. At project scope the blocks go into the repo's AGENTS.md instead and the
 * global file is left alone; the skill passes that scope only after the user's explicit yes.
 * CLAUDE.md and GEMINI.md are never touched: Claude Code, Gemini CLI and Antigravity get the text
 * from the plugin. Every change is listed; --dry-run lists and writes nothing; --check lists, writes
 * nothing, and exits 1 when a file differs from what a run would write, or when a run skips a file
 * until the user fixes it by hand. A missing Codex home is not drift.
 */
import { mkdir } from "node:fs/promises";
import { homedir } from "node:os";

import { isDirectory, readIfPresent } from "../lib/files";
import { git } from "../lib/git";
import { replaceBlock } from "../plain-talk/block";
import { readConfig } from "../workspace/config";
import type { Paths } from "../workspace/config";
import {
  currentLayout,
  findAdrFolders,
  findToMigrate,
  recordedLayout,
} from "../workspace/old-layout";
import { planGlossaryMoves } from "./glossary";
import { migrate, UsageError } from "./migrate";
import { workspaceText } from "./workspace-config";

export type Layout = "single" | "multi";
export type CodexScope = "global" | "project";
export type TrackerAnswer = "remove" | "keep";
export type AdrFolderAnswer = "move" | "keep";
export type Change = {
  path: string;
  action: "created" | "updated" | "unchanged" | "skipped" | "moved" | "removed";
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
  /** The user's answer for the migrate mode: the 0.8 spec that `tasks/` belongs to, or `none`. */
  planSpec?: string;
  /** The user's answer for the migrate mode: the intent docs that become ideas, comma-separated, or `none`. */
  ideas?: string;
  /** The user's answer for the migrate mode: `remove` the 0.8 tracker files, after a yes, or `keep` them. */
  trackerFiles?: TrackerAnswer;
  /** The user's answer for the migrate mode: `move` the ADR folder's ADRs into the decisions folder, after a yes, or `keep` it. */
  adrFolder?: AdrFolderAnswer;
  /** Report drift: list what a run would change, write nothing, exit 1 when anything would. */
  check?: boolean;
};

/**
 * Move each root glossary file to its new name with `git mv`, so it keeps its history.
 * Every outcome is decided before the first move, so a dry run reports what a real run
 * does, and a file that cannot move never leaves the others half moved.
 */
async function moveGlossaryFiles(input: SetupInput): Promise<Change[]> {
  const plan = await planGlossaryMoves(input.root);
  const planned = plan.map(({ from, to, stays }): Change => {
    const path = `${from} -> ${to}`;
    return stays === null ? { path, action: "moved" } : { path, action: "skipped", note: stays };
  });
  if (input.dryRun) {
    return planned;
  }
  const done: string[] = [];
  for (const { from, to, stays } of plan) {
    if (stays !== null) {
      continue;
    }
    const moved = git(input.root, "mv", "--", from, to);
    if (!moved.ok) {
      const before = done.length > 0 ? `; already moved: ${done.join(", ")}` : "";
      throw new Error(`git mv ${from} ${to} failed: ${moved.error}${before}`);
    }
    done.push(from);
  }
  return planned;
}

export function defaultCodexHome(): string {
  return process.env.CODEX_HOME ?? `${homedir()}/.codex`;
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

/** The note on the Codex file when this machine has no Codex home: no drift, since a run skips the file too. */
const noCodexHome = "no Codex home directory";

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
    return { path, action: "skipped", note: noCodexHome };
  }
  const current = (await readIfPresent(path)) ?? "";
  return put(input, path, path, withBlocks(current, blocks, path));
}

/** The repo's workspace folders; null when its `workspace.md` cannot be read, which the workspace step reports. */
function repoPaths(root: string): Promise<Paths | null> {
  return readConfig(root).then(
    (config) => config.paths,
    () => null,
  );
}

/**
 * What the migrate mode still has to move in `root`, as a report names it: none when the repo's
 * `workspace.md` records the current layout, since the migrate mode wrote it.
 */
async function toMigrate(root: string, paths: Paths | null): Promise<string[]> {
  const layout = await recordedLayout(root);
  if (paths === null || (layout !== null && layout >= currentLayout)) {
    return [];
  }
  return findToMigrate(root, paths);
}

/** Write the workspace config, keeping the repo's own settings; skip a file it cannot read, and a repo to migrate. */
async function writeWorkspace(
  input: SetupInput,
  template: string,
  waiting: string[],
): Promise<Change> {
  const path = "docs/agents/workspace.md";
  const full = `${input.root}/${path}`;
  if (waiting.length > 0) {
    const why =
      "the repo is on layout 1 (brain 0.9 and earlier): the migrate mode writes this file";
    return { path, action: "skipped", note: why };
  }
  const next = workspaceText(template, await readIfPresent(full));
  if (next === null) {
    const why = "its frontmatter is not valid YAML; fix it, then run setup-brain again";
    return { path, action: "skipped", note: why };
  }
  return put(input, path, full, next);
}

/**
 * The domain doc: the template with the layout named, and after the decisions line one line for
 * each ADR folder the repo keeps, which the migrate mode offered to move and the user kept.
 */
function domainText(template: string, layout: Layout, adrFolders: string[]): string {
  const text = template.replaceAll(
    "{{layout}}",
    layout === "single" ? "single-context" : "multi-context",
  );
  const kept = adrFolders.map(
    (folder) =>
      `- \`${folder}/\`: older architecture decisions (ADRs), kept as read-only history. Read the ones that touch your area. Record each new decision in a decision record.`,
  );
  return kept.length === 0
    ? text
    : text.replace(/^- `docs\/decisions\/`.*$/mu, (line) => [line, ...kept].join("\n"));
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
  const paths = await repoPaths(input.root);
  const adrFolders = paths === null ? [] : await findAdrFolders(input.root, paths);
  const waiting = await toMigrate(input.root, paths);
  // The glossary move runs first, so the change list shows it at the top.
  const changes: Change[] = input.renameGlossary === true ? await moveGlossaryFiles(input) : [];

  const codex = await writeCodex(input, blocks);
  if (codex !== null) {
    changes.push(codex);
  }

  const domain = domainText(
    await template("skills/setup-brain/domain.md"),
    input.layout,
    adrFolders,
  );
  const domainPath = "docs/agents/domain.md";
  changes.push(
    await put(input, domainPath, `${input.root}/${domainPath}`, domain),
    await writeWorkspace(input, await template("skills/setup-brain/workspace.md"), waiting),
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
  "--plan-spec": (input, value) => {
    input.planSpec = value;
    return true;
  },
  "--ideas": (input, value) => {
    input.ideas = value;
    return true;
  },
  "--tracker-files": (input, value) => {
    if (!oneOf(["remove", "keep"] as const, value)) {
      return false;
    }
    input.trackerFiles = value;
    return true;
  },
  "--adr-folder": (input, value) => {
    if (!oneOf(["move", "keep"] as const, value)) {
      return false;
    }
    input.adrFolder = value;
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
  const answers = [
    ["--plan-spec", input.planSpec],
    ["--ideas", input.ideas],
    ["--tracker-files", input.trackerFiles],
    ["--adr-folder", input.adrFolder],
  ];
  const stray = answers.find(([, value]) => value !== undefined && input.migrate !== true);
  if (stray !== undefined) {
    throw new Error(`${stray[0]} answers the migrate mode; add --migrate`);
  }
  return input;
}

function note(change: Change, dryRun: boolean): string {
  if (change.note !== undefined) {
    return `  (${change.note})`;
  }
  return dryRun ? "  (dry run)" : "";
}

/**
 * The closing line of `--check`, and its exit code: 1 when a run would change a file, when a run
 * skips a file until the user fixes it by hand, or when the repo is on the brain 0.8 layout and
 * the migrate mode has files to move. That last case skips `workspace.md` too, and its line says so.
 * A machine with no Codex home is no drift: no run writes a Codex file there.
 */
function checkSummary(changes: Change[], waiting: string[]): { line: string; code: number } {
  if (waiting.length > 0) {
    const found = waiting.join(", ");
    return {
      line: `the repo is on layout 1 (brain 0.9 and earlier): run setup-brain to migrate. Found: ${found}`,
      code: 1,
    };
  }
  const drift = changes.filter((c) => c.action !== "unchanged" && c.note !== noCodexHome);
  if (drift.length === 0) {
    return { line: "every file is in place", code: 0 };
  }
  const files = drift.length === 1 ? "1 file differs" : `${drift.length} files differ`;
  const fix = drift.some((c) => c.action === "skipped")
    ? "fix each skipped file by hand, then run setup-brain"
    : "run setup-brain";
  return { line: `${files} from what setup-brain writes: ${fix}`, code: 1 };
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
      const summary = checkSummary(
        result.changes,
        await toMigrate(input.root, await repoPaths(input.root)),
      );
      console.log(summary.line);
      return summary.code;
    }
    return 0;
  } catch (error) {
    console.error((error as Error).message);
    return error instanceof UsageError ? 2 : 1;
  }
}

if (import.meta.main) {
  process.exit(await main(process.argv.slice(2)));
}
