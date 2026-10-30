/**
 * Where the workspace is: the repo's root, git's common folder, and the layout that
 * `docs/agents/workspace.md` records in its frontmatter, with the cap on sub-agents at once that
 * `BRAIN_MAX_PARALLEL` overrides.
 */
import { realpath } from "node:fs/promises";
import path from "node:path";

import { git } from "../lib/git";
import { readFrontmatter } from "./schema";

export type Paths = { decisions: string; research: string; ideas: string; specs: string };
/** The setting the cap comes from: the default, `max_parallel` in the config, or the variable. */
export type CapSource = "default" | "max_parallel" | "BRAIN_MAX_PARALLEL";
export type WorkspaceConfig = {
  layout: number;
  paths: Paths;
  /** The most sub-agents that run at once: tasks in a build, or research rows in an interview. */
  maxParallel: number;
  maxParallelFrom: CapSource;
};
export type Repo = {
  /** The folder that holds `docs/agents/workspace.md`: the git work tree's top, else the current folder. */
  root: string;
  /** Git's common folder, shared by every worktree of the repo; null outside git. */
  gitCommonDir: string | null;
};

/** The file that records the layout, relative to the repo's root. */
export const configFile = "docs/agents/workspace.md";

/** The environment variable that overrides `max_parallel`. */
const capVariable = "BRAIN_MAX_PARALLEL";

/** The layout a repo gets when its `workspace.md`, or a key in it, is absent. */
const defaults: WorkspaceConfig = {
  layout: 2,
  paths: {
    decisions: "docs/decisions",
    research: "docs/research",
    ideas: "docs/ideas",
    specs: "specs",
  },
  maxParallel: 8,
  maxParallelFrom: "default",
};

/** Find the repo that `cwd` is in: its root and git's common folder, or `cwd` itself outside git. */
export async function findRepo(cwd: string): Promise<Repo> {
  const here = await realpath(cwd);
  // With no git on this machine, the folder is not in a repo git can see.
  const run = git(here, "rev-parse", "--show-toplevel", "--git-common-dir");
  const [top, common] = run.ok ? run.out.trim().split("\n") : [];
  if (top === undefined || common === undefined) {
    return { root: here, gitCommonDir: null };
  }
  // git prints the common folder relative to the folder it runs in, or as an absolute path.
  return { root: top, gitCommonDir: path.resolve(here, common) };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function show(value: unknown): string {
  return JSON.stringify(value) ?? String(value);
}

/** A folder from the config, cleaned; or the problem when it does not name a folder in the repo. */
function folderPath(value: unknown): { folder: string } | { error: string } {
  if (typeof value !== "string" || value === "") {
    return { error: `${show(value)} is not a folder path` };
  }
  const folder = path.normalize(value).replace(/(?<=.)\/+$/u, "");
  if (path.isAbsolute(folder) || folder === ".." || folder.startsWith("../")) {
    return { error: `${show(value)} is not a folder inside the repo` };
  }
  return { folder };
}

/** True for a whole number of 1 or more. */
function isCount(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 1;
}

type Cap = Pick<WorkspaceConfig, "maxParallel" | "maxParallelFrom">;

/**
 * The cap on sub-agents at once: `BRAIN_MAX_PARALLEL` when it is set and not empty, else `set`
 * (the config's `max_parallel`), else the default. `problems` holds one line for each value it
 * cannot use, naming the file or the variable.
 */
function readCap(set: unknown): { cap: Cap; problems: string[] } {
  const problems: string[] = [];
  if (set !== undefined && set !== null && !isCount(set)) {
    problems.push(`${configFile}: max_parallel: ${show(set)} is not a whole number of 1 or more`);
  }
  const variable = process.env[capVariable];
  const text = variable?.trim() ?? "";
  const fromVariable = /^\d+$/u.test(text) ? Number(text) : Number.NaN;
  if (text !== "" && !isCount(fromVariable)) {
    problems.push(`${capVariable}: ${show(variable)} is not a whole number of 1 or more`);
  }
  if (isCount(fromVariable)) {
    return { cap: { maxParallel: fromVariable, maxParallelFrom: capVariable }, problems };
  }
  if (isCount(set)) {
    return { cap: { maxParallel: set, maxParallelFrom: "max_parallel" }, problems };
  }
  const { maxParallel, maxParallelFrom } = defaults;
  return { cap: { maxParallel, maxParallelFrom }, problems };
}

/**
 * Read the workspace layout from the frontmatter of the repo's `docs/agents/workspace.md`,
 * with the default for an absent file, frontmatter or key, and the cap that `BRAIN_MAX_PARALLEL`
 * sets over `max_parallel`. Throws on a value it cannot use, one line per problem, each naming
 * the file or the variable.
 */
export async function readConfig(root: string): Promise<WorkspaceConfig> {
  const file = Bun.file(`${root}/${configFile}`);
  const frontmatter = (await file.exists()) ? readFrontmatter(await file.text()) : null;
  if (frontmatter !== null && "error" in frontmatter) {
    throw new Error(`${configFile}: frontmatter is ${frontmatter.error}`);
  }
  const data = frontmatter?.data ?? {};
  const problems: string[] = [];
  const layout = data.layout ?? defaults.layout;
  const whole = typeof layout === "number" && Number.isInteger(layout) && layout >= 1;
  if (!whole) {
    problems.push(`layout: ${show(layout)} is not a whole number`);
  }
  const given = data.paths ?? {};
  if (!isRecord(given)) {
    problems.push(`paths: ${show(given)} is not a map of folders`);
  }
  const paths = { ...defaults.paths };
  for (const key of Object.keys(paths) as (keyof Paths)[]) {
    const value = isRecord(given) ? given[key] : undefined;
    if (value === undefined || value === null) {
      continue;
    }
    const checked = folderPath(value);
    if ("error" in checked) {
      problems.push(`paths.${key}: ${checked.error}`);
    } else {
      paths[key] = checked.folder;
    }
  }
  const cap = readCap(data.max_parallel);
  const lines = [...problems.map((problem) => `${configFile}: ${problem}`), ...cap.problems];
  if (lines.length > 0) {
    throw new Error(lines.join("\n"));
  }
  return { layout: whole ? layout : defaults.layout, paths, ...cap.cap };
}
