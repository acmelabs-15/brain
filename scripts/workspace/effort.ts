/**
 * The efforts in a workspace and the active one, as `docs/agents/workspace.md` defines them. An
 * effort is an idea or a spec. It is not finished while it is an idea with `status: define`, or a
 * spec whose `tasks/plan.md` has a row that is open or in progress; a specced, done or parked idea
 * is finished. The active effort is the one the git branch names, else the only effort that is not
 * finished; a command that takes a slug checks that first, and with none of these the user names
 * it.
 */
import path from "node:path";

import { fileNames, folderNames, readIfPresent } from "../lib/files";
import { git } from "../lib/git";
import type { Paths } from "./config";
import { stillToDo } from "./graph";
import { readRows } from "./map";
import { readFrontmatter } from "./schema";

export type Effort = {
  kind: "idea" | "spec";
  /** `IDEA-001` or `SPEC-001`. */
  id: string;
  /** The file name without `.md`, or the folder name: `SPEC-001-invoice-csv-export`. */
  name: string;
  /** The words after the ID: `invoice-csv-export`. */
  slug: string;
  /** The idea file or the spec folder, relative to the repo's root. */
  path: string;
  finished: boolean;
};

/** The active effort; or none, or the several efforts that are not finished. */
export type Active = { effort: Effort } | { none: true } | { several: Effort[] };

const slug = "[a-z0-9]+(?:-[a-z0-9]+)*";
const ideaName = new RegExp(`^(?<name>(?<id>IDEA-\\d{3})-(?<slug>${slug}))\\.md$`, "u");
const specName = new RegExp(`^(?<name>(?<id>SPEC-\\d{3})-(?<slug>${slug}))$`, "u");

/** Every idea and spec in the workspace: ideas first, each kind in name order. */
export async function listEfforts(root: string, paths: Paths): Promise<Effort[]> {
  const found: Effort[] = [];
  for (const name of await fileNames(path.join(root, paths.ideas))) {
    const groups = ideaName.exec(name)?.groups;
    if (groups?.id === undefined) {
      continue;
    }
    const where = path.join(paths.ideas, name);
    const frontmatter = readFrontmatter((await readIfPresent(path.join(root, where))) ?? "");
    const define =
      frontmatter !== null && !("error" in frontmatter) && frontmatter.data.status === "define";
    found.push({
      kind: "idea",
      id: groups.id,
      name: groups.name ?? "",
      slug: groups.slug ?? "",
      path: where,
      finished: !define,
    });
  }
  for (const name of await folderNames(path.join(root, paths.specs))) {
    const groups = specName.exec(name)?.groups;
    if (groups?.id === undefined) {
      continue;
    }
    const where = path.join(paths.specs, name);
    const plan = await readIfPresent(path.join(root, where, "tasks/plan.md"));
    const { rows } = plan === null ? { rows: [] } : readRows("plan", plan);
    found.push({
      kind: "spec",
      id: groups.id,
      name: groups.name ?? "",
      slug: groups.slug ?? "",
      path: where,
      finished: !rows.some(stillToDo),
    });
  }
  return found;
}

/** The current branch's name; null on a detached head, outside git, or with no git. */
function branch(root: string): string | null {
  const run = git(root, "symbolic-ref", "--quiet", "--short", "HEAD");
  return run.ok ? run.out.trim() : null;
}

/**
 * Find the active effort. The branch names an effort when its last part (after any `/`) is the
 * effort's name, ID or slug: `feat/invoice-csv-export` names `SPEC-001-invoice-csv-export`.
 */
export async function activeEffort(root: string, paths: Paths): Promise<Active> {
  const efforts = await listEfforts(root, paths);
  const named = branch(root)?.split("/").at(-1);
  const matches = efforts.filter((effort) =>
    [effort.name, effort.id, effort.slug].includes(named ?? ""),
  );
  const [match] = matches;
  if (matches.length === 1 && match !== undefined) {
    return { effort: match };
  }
  const open = efforts.filter((effort) => !effort.finished);
  const [only] = open;
  if (open.length === 1 && only !== undefined) {
    return { effort: only };
  }
  return open.length === 0 ? { none: true } : { several: open };
}
