/**
 * The setup writer's migrate mode, for a repo on brain 0.8 (`write.ts --migrate`).
 *
 * Every change is decided before the first write, so a dry run lists what a real run does.
 * A real run writes one commit of its own, which holds the migrated files and nothing else;
 * if a move, a write or the commit fails, every file goes back to its old place and bytes.
 *
 * A migrated file gains frontmatter and nothing else: no byte below the frontmatter changes.
 * The frontmatter holds only what the file's name, its place and git's history can tell: its
 * ID, `migrated: 0.8`, and in a DEC or RES the date of its first commit (`decided` or `date`).
 * Every other field stays absent. A file git does not track, or one with uncommitted changes,
 * is skipped with the reason, so the commit holds moves and frontmatter lines only. The folders
 * come from `docs/agents/workspace.md`.
 *
 * The spec step moves each 0.8 spec, the root `SPEC.md` or a `SPEC.md` or `SPEC-<slug>.md` in
 * `spec/`, with `git mv` to `spec.md` in a new spec folder `SPEC-NNN-<slug>/`, so its history
 * follows it. The slug is the module id from `SPEC-<slug>.md`, else the title in the spec's H1.
 * `tasks/plan.md` and `tasks/todo.md` move into the `tasks/` folder of the spec they belong to:
 * the one spec, or the spec the user names (`planSpec`) when there are several. The capability
 * map, the file in `spec/` whose H1 opens with "Capability Map", moves to a DEC file: an
 * approved map is the user's decision. Any other file in `spec/` stays where it is.
 *
 * The frontmatter step gives each DEC and RES file in place that has no frontmatter its own.
 */
import { mkdir, readdir, rmdir } from "node:fs/promises";
import path from "node:path";

import { claim, claimsFolder, peek } from "../workspace/claims";
import { findRepo, readConfig } from "../workspace/config";
import type { Paths } from "../workspace/config";
import { readFrontmatter } from "../workspace/schema";
import type { Change, SetupInput } from "./write";

/** An answer the run cannot use, or one it needs and lacks: write.ts exits 2 on it. */
export class UsageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UsageError";
  }
}

export type MigrateResult = {
  changes: Change[];
  /** The SHA of the commit a real run wrote; null after a dry run or when nothing changed. */
  commit: string | null;
};

type Write = {
  path: string;
  full: string;
  before: Uint8Array;
  after: Uint8Array;
  /** The path the file moves from with `git mv`; absent when the file stays in its place. */
  from?: string;
};
type Step = { changes: Change[]; writes: Write[] };
type Undo = () => Promise<void> | void;

const commitTitle = "chore: migrate to the brain workspace layout";
const commitBody =
  "Move each brain 0.8 file to its place in the workspace with git mv, and give each migrated file its frontmatter: its ID, migrated: 0.8 and, in a DEC or RES, the date of its first commit. No byte below the frontmatter changes.";

const recordTypes = [
  { type: "DEC", folder: "decisions", dateField: "decided" },
  { type: "RES", folder: "research", dateField: "date" },
] as const satisfies readonly { type: string; folder: keyof Paths; dateField: string }[];

/** The plan and the todo of the 0.8 layout, which move into the spec folder they belong to. */
const planFiles = ["tasks/plan.md", "tasks/todo.md"];

/** The answer that keeps the plan and the todo where they are. */
const noSpec = "none";

function git(root: string, ...args: string[]) {
  return Bun.spawnSync(["git", ...args], { cwd: root, stdout: "pipe", stderr: "pipe" });
}

/** The date of the file's first commit, following renames; null when git has none. */
function firstCommitDate(root: string, file: string): string | null {
  const log = git(root, "log", "--follow", "--diff-filter=A", "--format=%as", "--", file);
  const dates = log.exitCode === 0 ? log.stdout.toString().trim().split("\n") : [];
  return dates.findLast((date) => date !== "") ?? null;
}

/** Why the file cannot go into the commit as frontmatter only, or null when git holds it as it is. */
function skipReason(root: string, file: string): string | null {
  if (git(root, "ls-files", "--error-unmatch", "--", file).exitCode !== 0) {
    return "not tracked by git; commit it first";
  }
  if (git(root, "diff", "--quiet", "HEAD", "--", file).exitCode !== 0) {
    return "has uncommitted changes; commit them first";
  }
  return null;
}

/** The names of the files directly in `folder`, sorted; none when the folder is absent. */
async function filesIn(folder: string): Promise<string[]> {
  const entries = await readdir(folder, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .toSorted();
}

async function frontmatterStep(root: string, paths: Paths): Promise<Step> {
  const step: Step = { changes: [], writes: [] };
  for (const { type, folder, dateField } of recordTypes) {
    const named = new RegExp(`^(?<id>${type}-\\d{3})-.+\\.md$`, "u");
    for (const name of await filesIn(`${root}/${paths[folder]}`)) {
      const id = named.exec(name)?.groups?.id;
      if (id === undefined) {
        continue;
      }
      const file = `${paths[folder]}/${name}`;
      const full = `${root}/${file}`;
      const before = await Bun.file(full).bytes();
      if (readFrontmatter(new TextDecoder().decode(before)) !== null) {
        step.changes.push({ path: file, action: "unchanged" });
        continue;
      }
      const reason = skipReason(root, file);
      const date = reason === null ? firstCommitDate(root, file) : null;
      if (date === null) {
        const note = reason ?? "git history has no first commit for it";
        step.changes.push({ path: file, action: "skipped", note });
        continue;
      }
      const head = `---\nid: ${id}\nmigrated: 0.8\n${dateField}: ${date}\n---\n`;
      const after = new Uint8Array([...new TextEncoder().encode(head), ...before]);
      step.writes.push({ path: file, full, before, after });
      step.changes.push({ path: file, action: "updated" });
    }
  }
  return step;
}

/** A 0.8 file of the spec step: a spec, the capability map, or another file in `spec/`. */
type Found = {
  kind: "spec" | "map" | "other";
  path: string;
  bytes: Uint8Array;
  /** The words of the file's new name after its ID. */
  slug: string;
  /** Why the file stays in its place; absent when it moves. */
  stays?: string;
  /** The date of a capability map's first commit, which its DEC file's `decided` takes. */
  date?: string;
};

/** A spec folder the step makes: the spec's ID and the folder's path. */
type SpecFolder = { id: string; folder: string };

/** Lowercase words joined by hyphens, as a workspace name takes them; empty when none is left. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/gu, "-")
    .replaceAll(/^-+|-+$/gu, "");
}

/** The text of the file's first H1, without its `# `; empty when it has none. */
function titleOf(text: string): string {
  return /^# (?<title>.+)$/mu.exec(text)?.groups?.title?.trim() ?? "";
}

/** What a 0.8 file in the spec step is, from its path and its H1, with the slug it moves under. */
function classify(file: string, bytes: Uint8Array): Found {
  const title = titleOf(new TextDecoder().decode(bytes));
  const fromTitle = slugify(title.replace(/^spec:/iu, "")) || "spec";
  const name = path.basename(file);
  if (file !== "SPEC.md" && /^capability map\b/iu.test(title)) {
    return { kind: "map", path: file, bytes, slug: slugify(title) };
  }
  const module = /^SPEC-(?<module>.+)\.md$/u.exec(name)?.groups?.module;
  if (name === "SPEC.md" || module !== undefined) {
    return { kind: "spec", path: file, bytes, slug: slugify(module ?? "") || fromTitle };
  }
  const stays = "not a spec or a capability map; it stays where it is";
  return { kind: "other", path: file, bytes, slug: "", stays };
}

/** The files of `files` that exist under `root`, in the same order. */
async function existing(root: string, files: string[]): Promise<string[]> {
  const found: string[] = [];
  for (const file of files) {
    const there = await Bun.file(`${root}/${file}`).exists();
    if (there) {
      found.push(file);
    }
  }
  return found;
}

/** The root `SPEC.md` and the Markdown files in `spec/`, in path order, each classified. */
async function findSpecFiles(root: string): Promise<Found[]> {
  const inSpec = await filesIn(`${root}/spec`);
  const files = [
    ...(await existing(root, ["SPEC.md"])),
    ...inSpec.filter((name) => name.endsWith(".md")).map((name) => `spec/${name}`),
  ];
  return Promise.all(
    files.map(async (file) => classify(file, await Bun.file(`${root}/${file}`).bytes())),
  );
}

/** The specs a `--plan-spec` answer can name, then `none`, as a list a sentence ends with. */
function choices(specs: string[]): string {
  const all = [...specs, noSpec];
  return `${all.slice(0, -1).join(", ")}${all.length > 1 ? " or " : ""}${all.at(-1)}`;
}

/**
 * The 0.8 spec that the plan and the todo move beside, or the note that says why they stay; null
 * when there is no plan or todo. The one spec settles it; with several, `answer` is the user's:
 * a spec's path, or `none`. Throws a UsageError when the answer names no spec, or when several
 * specs need one and it is absent.
 */
function planOwner(
  specs: string[],
  plans: string[],
  answer: string | undefined,
): { spec: string } | { note: string } | null {
  const named = answer === undefined || answer === noSpec ? answer : path.normalize(answer);
  if (named !== undefined && named !== noSpec && !specs.includes(named)) {
    throw new UsageError(`--plan-spec ${answer} names no spec: pass ${choices(specs)}`);
  }
  if (plans.length === 0) {
    return null;
  }
  if (named === noSpec) {
    return { note: "the user named no spec for it; it stays where it is" };
  }
  const [only] = specs;
  const spec = named ?? (specs.length === 1 ? only : undefined);
  if (spec !== undefined) {
    return { spec };
  }
  if (specs.length === 0) {
    return { note: "no spec to move it beside; it stays where it is" };
  }
  const verb = plans.length === 1 ? "belongs" : "belong";
  throw new UsageError(
    `${plans.join(" and ")} ${verb} to one of ${specs.length} specs, and only the user can say which: pass --plan-spec with ${choices(specs)}`,
  );
}

/** Why a file stays in its place instead of moving, or null when it can move. */
function whyStays(root: string, file: string, bytes: Uint8Array): string | null {
  if (readFrontmatter(new TextDecoder().decode(bytes)) !== null) {
    return "has frontmatter already; move it by hand";
  }
  return skipReason(root, file);
}

/** The IDs of the next `count` numbers of `type`: claimed on a real run, only read on a dry run. */
async function nextIds(
  root: string,
  type: string,
  folder: string,
  count: number,
  dryRun: boolean,
): Promise<string[]> {
  if (count === 0) {
    return [];
  }
  const claims = claimsFolder(await findRepo(root));
  const files = `${root}/${folder}`;
  const numbers: number[] = dryRun ? await peek(claims, type, files, count) : [];
  // A real run claims each number, so that an agent's `brain new-doc` cannot take it too.
  while (numbers.length < count) {
    numbers.push(await claim(claims, type, files));
  }
  return numbers.map((number) => `${type}-${String(number).padStart(3, "0")}`);
}

const specHead = (id: string) => `---\nspec: ${id}\nmigrated: 0.8\n---\n`;

/** Add a move to `step`: the file goes from `from` to `to` with `head` above its old bytes. */
function addMove(
  step: Step,
  root: string,
  from: string,
  to: string,
  head: string,
  before: Uint8Array,
) {
  const after = new Uint8Array([...new TextEncoder().encode(head), ...before]);
  step.writes.push({ path: to, full: `${root}/${to}`, before, after, from });
  step.changes.push({ path: `${from} -> ${to}`, action: "moved" });
}

/** Each spec and capability map with why it stays in its place, or with the date a map moves with. */
function withReasons(root: string, found: Found[]): Found[] {
  return found.map((file) => {
    const stays = file.stays ?? whyStays(root, file.path, file.bytes);
    if (stays !== null) {
      return { ...file, stays };
    }
    if (file.kind !== "map") {
      return file;
    }
    const date = firstCommitDate(root, file.path);
    return date === null
      ? { ...file, stays: "git history has no first commit for it" }
      : { ...file, date };
  });
}

/** Add each spec and capability map to `step`, moved or skipped; return each moved spec's folder. */
function moveSpecs(
  step: Step,
  root: string,
  paths: Paths,
  found: Found[],
  ids: { spec: string[]; map: string[] },
): Map<string, SpecFolder> {
  const folders = new Map<string, SpecFolder>();
  for (const file of found) {
    if (file.stays !== undefined) {
      step.changes.push({ path: file.path, action: "skipped", note: file.stays });
    } else if (file.kind === "spec") {
      const id = ids.spec.shift() ?? "";
      const folder = `${paths.specs}/${id}-${file.slug}`;
      folders.set(file.path, { id, folder });
      addMove(step, root, file.path, `${folder}/spec.md`, specHead(id), file.bytes);
    } else {
      const id = ids.map.shift() ?? "";
      const head = `---\nid: ${id}\nmigrated: 0.8\ndecided: ${file.date}\n---\n`;
      addMove(step, root, file.path, `${paths.decisions}/${id}-${file.slug}.md`, head, file.bytes);
    }
  }
  return folders;
}

/** Add the plan and the todo to `step`: moved into the folder of their spec, or skipped with why. */
async function movePlans(
  step: Step,
  root: string,
  plans: string[],
  owner: { spec: string } | { note: string },
  folders: Map<string, SpecFolder>,
): Promise<void> {
  const target =
    "note" in owner
      ? owner
      : (folders.get(owner.spec) ?? { note: `its spec ${owner.spec} is skipped` });
  for (const plan of plans) {
    if ("note" in target) {
      step.changes.push({ path: plan, action: "skipped", note: target.note });
      continue;
    }
    const bytes = await Bun.file(`${root}/${plan}`).bytes();
    const note = whyStays(root, plan, bytes);
    if (note === null) {
      addMove(step, root, plan, `${target.folder}/${plan}`, specHead(target.id), bytes);
    } else {
      step.changes.push({ path: plan, action: "skipped", note });
    }
  }
}

async function specStep(
  input: Pick<SetupInput, "root" | "dryRun" | "planSpec">,
  paths: Paths,
): Promise<Step> {
  const { root, dryRun } = input;
  const classified = await findSpecFiles(root);
  const plans = await existing(root, planFiles);
  const specPaths = classified.filter((file) => file.kind === "spec").map((file) => file.path);
  const owner = planOwner(specPaths, plans, input.planSpec);
  // Every reason to stay is known before a number is claimed, so no claim goes to a file that stays.
  const found = withReasons(root, classified);
  const moving = (kind: Found["kind"]) =>
    found.filter((file) => file.kind === kind && file.stays === undefined).length;
  const ids = {
    spec: await nextIds(root, "SPEC", paths.specs, moving("spec"), dryRun),
    map: await nextIds(root, "DEC", paths.decisions, moving("map"), dryRun),
  };
  const step: Step = { changes: [], writes: [] };
  const folders = moveSpecs(step, root, paths, found, ids);
  if (owner !== null) {
    await movePlans(step, root, plans, owner, folders);
  }
  return step;
}

function gitMove(root: string, from: string, to: string): void {
  const moved = git(root, "mv", "--", from, to);
  if (moved.exitCode !== 0) {
    throw new Error(`git mv ${from} ${to} failed: ${moved.stderr.toString().trim()}`);
  }
}

/** Remove `folder` and each folder above it up to `made`, the first one mkdir made, while empty. */
async function removeFolders(made: string, folder: string): Promise<void> {
  for (let at = folder; ; at = path.dirname(at)) {
    const removed = await rmdir(at).then(
      () => true,
      () => false,
    );
    if (!removed || at === made || at === path.dirname(at)) {
      return;
    }
  }
}

/** Make one write, a move with `git mv` first when the file moves; push what takes it back. */
async function apply(root: string, write: Write, undo: Undo[]): Promise<void> {
  const { from } = write;
  if (from !== undefined) {
    const folder = path.dirname(write.full);
    const made = await mkdir(folder, { recursive: true });
    if (made !== undefined) {
      undo.push(() => removeFolders(made, folder));
    }
    gitMove(root, from, write.path);
    undo.push(() => gitMove(root, write.path, from));
  }
  undo.push(async () => {
    await Bun.write(write.full, write.before);
  });
  await Bun.write(write.full, write.after);
}

/** Run each undo, the last first; return what went wrong on the way. */
async function undoAll(undo: Undo[]): Promise<string[]> {
  const problems: string[] = [];
  for (const step of undo.toReversed()) {
    try {
      await step();
    } catch (error) {
      problems.push(error instanceof Error ? error.message : String(error));
    }
  }
  return problems;
}

/** Run the migrate mode in `input.root`: list each change, and on a real run write one commit. */
export async function migrate(
  input: Pick<SetupInput, "root" | "dryRun" | "planSpec">,
): Promise<MigrateResult> {
  const root = path.resolve(input.root);
  const { paths } = await readConfig(root);
  const steps = [await specStep({ ...input, root }, paths), await frontmatterStep(root, paths)];
  const changes = steps.flatMap((step) => step.changes);
  const writes = steps.flatMap((step) => step.writes);
  if (input.dryRun || writes.length === 0) {
    return { changes, commit: null };
  }
  const undo: Undo[] = [];
  try {
    for (const write of writes) {
      await apply(root, write, undo);
    }
    const committed = writes.flatMap((write) =>
      write.from === undefined ? [write.path] : [write.from, write.path],
    );
    const message = ["-m", commitTitle, "-m", commitBody];
    const commit = git(root, "commit", "--quiet", ...message, "--", ...committed);
    if (commit.exitCode !== 0) {
      throw new Error(`git commit failed: ${commit.stderr.toString().trim()}`);
    }
  } catch (error) {
    const problems = await undoAll(undo);
    const reason = error instanceof Error ? error.message : String(error);
    const after =
      problems.length === 0
        ? "Every file is back as it was."
        : `Putting the files back failed too:\n${problems.join("\n")}`;
    throw new Error(`${reason}\n${after}`, { cause: error });
  }
  return { changes, commit: git(root, "rev-parse", "HEAD").stdout.toString().trim() };
}
