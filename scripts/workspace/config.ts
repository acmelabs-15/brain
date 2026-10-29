/**
 * Where the workspace is: the repo's root, git's common folder, and the layout that
 * `docs/agents/workspace.md` records in its frontmatter.
 */
import { realpath } from "node:fs/promises";
import path from "node:path";

import { readFrontmatter } from "./schema";

export type Paths = { decisions: string; research: string; ideas: string; specs: string };
export type WorkspaceConfig = { layout: number; paths: Paths };
export type Repo = {
  /** The folder that holds `docs/agents/workspace.md`: the git work tree's top, else the current folder. */
  root: string;
  /** Git's common folder, shared by every worktree of the repo; null outside git. */
  gitCommonDir: string | null;
};

/** The file that records the layout, relative to the repo's root. */
export const configFile = "docs/agents/workspace.md";

/** The layout a repo gets when its `workspace.md`, or a key in it, is absent. */
const defaults: WorkspaceConfig = {
  layout: 2,
  paths: {
    decisions: "docs/decisions",
    research: "docs/research",
    ideas: "docs/ideas",
    specs: "docs/specs",
  },
};

function git(cwd: string, ...args: string[]): string[] | null {
  try {
    const run = Bun.spawnSync(["git", ...args], { cwd, stdout: "pipe", stderr: "pipe" });
    return run.exitCode === 0 ? run.stdout.toString().trim().split("\n") : null;
  } catch {
    // No git on this machine: the folder is not in a repo git can see.
    return null;
  }
}

/** Find the repo that `cwd` is in: its root and git's common folder, or `cwd` itself outside git. */
export async function findRepo(cwd: string): Promise<Repo> {
  const here = await realpath(cwd);
  const [top, common] = git(here, "rev-parse", "--show-toplevel", "--git-common-dir") ?? [];
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

/**
 * Read the workspace layout from the frontmatter of the repo's `docs/agents/workspace.md`,
 * with the default for an absent file, frontmatter or key. Throws on a value it cannot use,
 * one line per problem, each naming the file.
 */
export async function readConfig(root: string): Promise<WorkspaceConfig> {
  const file = Bun.file(`${root}/${configFile}`);
  const frontmatter = (await file.exists()) ? readFrontmatter(await file.text()) : null;
  if (frontmatter === null) {
    return { layout: defaults.layout, paths: { ...defaults.paths } };
  }
  if ("error" in frontmatter) {
    throw new Error(`${configFile}: frontmatter is ${frontmatter.error}`);
  }
  const problems: string[] = [];
  const layout = frontmatter.data.layout ?? defaults.layout;
  const whole = typeof layout === "number" && Number.isInteger(layout) && layout >= 1;
  if (!whole) {
    problems.push(`layout: ${show(layout)} is not a whole number`);
  }
  const given = frontmatter.data.paths ?? {};
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
  if (problems.length > 0) {
    throw new Error(problems.map((problem) => `${configFile}: ${problem}`).join("\n"));
  }
  return { layout: whole ? layout : defaults.layout, paths };
}
