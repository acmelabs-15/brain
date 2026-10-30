/**
 * The setup writer's migrate mode, for a repo on brain 0.8 (`write.ts --migrate`).
 *
 * Every change is decided before the first write, so a dry run lists what a real run does.
 * Each answer the run needs from the user is read first: when one is missing or names no file
 * the run found, the run names every such answer in one UsageError and changes nothing.
 * A real run writes one commit of its own, which holds the migrated files and nothing else;
 * if a move, a removal, a write or the commit fails, every file goes back to its old place and
 * bytes. After the commit, each folder a move left empty is removed.
 *
 * A migrated file gains frontmatter and nothing else: no byte below the frontmatter changes.
 * The frontmatter holds only what the file's name, its place and git's history can tell: its
 * ID, `migrated: 0.8`, in a DEC or RES the date of its first commit (`decided` or `date`), and
 * in a former ADR `kind: architecture`. Every other field stays absent. A file git does not
 * track, or one with uncommitted changes, is skipped with the reason, so the commit holds moves
 * and frontmatter lines only. The folders come from `docs/agents/workspace.md`.
 *
 * The glossary step moves a root `CONTEXT.md` and `CONTEXT-MAP.md` to their GLOSSARY names with
 * `git mv`, as the install writes do (`glossary.ts`), when the user said yes (`renameGlossary`).
 *
 * The spec step moves each 0.8 spec, the root `SPEC.md` or a `SPEC.md` or `SPEC-<slug>.md` in
 * `spec/`, with `git mv` to `spec.md` in a new spec folder `SPEC-NNN-<slug>/`, so its history
 * follows it. The slug is the module id from `SPEC-<slug>.md`, else the title in the spec's H1.
 * `tasks/plan.md` and `tasks/todo.md` move into the `tasks/` folder of the spec they belong to:
 * the one spec, or the spec the user names (`planSpec`) when there are several. The capability
 * map, the file in `spec/` whose H1 opens with "Capability Map", moves to a DEC file: an
 * approved map is the user's decision. Any other file in `spec/` stays where it is.
 *
 * The ADR step moves each ADR, `0001-<slug>.md`, to a DEC file `DEC-NNN-<slug>.md` in the
 * decisions folder: the ADRs that brain 0.8 wrote into the decisions folder, and the ADRs in an
 * ADR folder of another tool (`doc/adr/` and the like) when the user said yes to that move
 * (`adrFolder: move`). The capability map takes the first free DEC number, then the ADRs in
 * path order. A kept ADR folder stays as read-only history, which `domain.md` points to.
 *
 * The frontmatter step gives each DEC and RES file in place that has no frontmatter its own.
 *
 * The intent step moves each 0.8 intent doc in `docs/intent/` that the user picks (`ideas`) with
 * `git mv` to an IDEA file, `IDEA-NNN-<slug>.md`, whose slug comes from the doc's file name. Its
 * frontmatter holds its ID and `migrated: 0.8` only: no status, since a guessed one would hide
 * that nobody set it. A doc the user did not pick stays where it is.
 *
 * The tracker step takes setup-brain 0.8's tracker files, `docs/agents/issue-tracker.md` and
 * `docs/agents/triage-labels.md`, out with `git rm` when the user said yes (`trackerFiles:
 * remove`); brain no longer reads them. It is the one step that deletes, and only on that yes.
 *
 * The workspace step writes `docs/agents/workspace.md` from the plugin's template, with the
 * repo's own settings kept, into the same commit. Its `layout: 2` marks the repo as migrated:
 * from then on a run changes nothing. A run that skips a file until it is committed leaves the
 * marker out, so the run after that commit can still move the file.
 */
import { mkdir, rm, rmdir } from "node:fs/promises";
import path from "node:path";

import { fileNames } from "../lib/files";
import { git } from "../lib/git";
import { claim, claimsFolder, peek } from "../workspace/claims";
import { configFile, findRepo, readConfig } from "../workspace/config";
import type { Paths } from "../workspace/config";
import {
  adrName,
  currentLayout,
  filesNamed,
  findAdrFolders,
  intentFolder,
  planFiles,
  recordedLayout,
  rootSpec,
  specFolder,
  trackerFiles,
} from "../workspace/old-layout";
import { readFrontmatter } from "../workspace/schema";
import { planGlossaryMoves } from "./glossary";
import { workspaceText } from "./workspace-config";
import type { AdrFolderAnswer, Change, SetupInput, TrackerAnswer } from "./write";

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

/** What a migrate run reads: the repo, the user's answers, and the plugin that holds the templates. */
export type MigrateInput = Pick<
  SetupInput,
  "root" | "dryRun" | "planSpec" | "ideas" | "trackerFiles" | "adrFolder" | "renameGlossary"
> & {
  /** The brain plugin's folder, for the workspace template; this script's own plugin when absent. */
  brain?: string;
};

type Write = {
  path: string;
  full: string;
  before: Uint8Array;
  /** The file's bytes after the run; null when the run takes the file out with `git rm`. */
  after: Uint8Array | null;
  /** The path the file moves from with `git mv`; absent when the file stays in its place. */
  from?: string;
  /** True when the run creates the file, which `git add` then puts in the commit. */
  isNew?: boolean;
};
type Step = { changes: Change[]; writes: Write[] };
type Undo = () => Promise<void> | void;

const commitTitle = "chore: migrate to the brain workspace layout";
const commitBody =
  "Move each layout 1 file to its place in the workspace with git mv, and give each migrated file its frontmatter: its ID, migrated: 0.8, in a DEC or RES the date of its first commit, and in a former ADR kind: architecture. No byte below the frontmatter changes.";
const removalBody =
  "Remove the tracker files of layout 1 with git rm, after the user's yes: brain no longer reads them.";
const layoutBody = "Record layout: 2 in docs/agents/workspace.md: the repo is migrated.";

const recordTypes = [
  { type: "DEC", folder: "decisions", dateField: "decided" },
  { type: "RES", folder: "research", dateField: "date" },
] as const satisfies readonly { type: string; folder: keyof Paths; dateField: string }[];

/** The answer that keeps the plan and the todo where they are. */
const noSpec = "none";

/** The answer that keeps every intent doc where it is. */
const noIdeas = "none";

/** Why a file waits: git does not hold it as it is, so a commit by the user lets it move. */
const notTracked = "not tracked by git; commit it first";
const uncommitted = "has uncommitted changes; commit them first";
const noHistory = "git history has no first commit for it";
const waits = new Set([notTracked, uncommitted, noHistory]);

const notPicked = "the user did not pick it as an idea; it stays where it is";
const kept = "the user chose to keep it; it stays where it is";
const glossaryKept = "the user kept the old name; --rename-glossary moves it after a yes";
const adrFolderKept = "the user chose to keep the ADR folder; it stays as read-only history";
const notAdr = "not an ADR (0001-<slug>.md); it stays where it is";

/** The date of the file's first commit, following renames; null when git has none. */
function firstCommitDate(root: string, file: string): string | null {
  const log = git(root, "log", "--follow", "--diff-filter=A", "--format=%as", "--", file);
  const dates = log.ok ? log.out.trim().split("\n") : [];
  return dates.findLast((date) => date !== "") ?? null;
}

/** Why the file cannot go into the commit as frontmatter only, or null when git holds it as it is. */
function skipReason(root: string, file: string): string | null {
  if (!git(root, "ls-files", "--error-unmatch", "--", file).ok) {
    return notTracked;
  }
  if (!git(root, "diff", "--quiet", "HEAD", "--", file).ok) {
    return uncommitted;
  }
  return null;
}

/** Lowercase words joined by hyphens, as a workspace name takes them; empty when none is left. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/gu, "-")
    .replaceAll(/^-+|-+$/gu, "");
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

/** Move each root glossary file to its GLOSSARY name on the user's yes; list each other one with why it stays. */
async function glossaryStep(root: string, rename: boolean): Promise<Step> {
  const step: Step = { changes: [], writes: [] };
  for (const { from, to, stays } of await planGlossaryMoves(root)) {
    const name = `${from} -> ${to}`;
    const note = rename ? (stays ?? skipReason(root, from)) : glossaryKept;
    if (note === null) {
      addMove(step, root, from, to, "", await Bun.file(`${root}/${from}`).bytes());
    } else {
      step.changes.push({ path: name, action: "skipped", note });
    }
  }
  return step;
}

async function frontmatterStep(root: string, paths: Paths): Promise<Step> {
  const step: Step = { changes: [], writes: [] };
  for (const { type, folder, dateField } of recordTypes) {
    const named = new RegExp(`^(?<id>${type}-\\d{3})-.+\\.md$`, "u");
    for (const name of await fileNames(`${root}/${paths[folder]}`)) {
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
        step.changes.push({ path: file, action: "skipped", note: reason ?? noHistory });
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

/** The text of the file's first H1, without its `# `; empty when it has none. */
function titleOf(text: string): string {
  return /^# (?<title>.+)$/mu.exec(text)?.groups?.title?.trim() ?? "";
}

/** What a 0.8 file in the spec step is, from its path and its H1, with the slug it moves under. */
function classify(file: string, bytes: Uint8Array): Found {
  const title = titleOf(new TextDecoder().decode(bytes));
  const fromTitle = slugify(title.replace(/^spec:/iu, "")) || "spec";
  const name = path.basename(file);
  if (file !== rootSpec && /^capability map\b/iu.test(title)) {
    return { kind: "map", path: file, bytes, slug: slugify(title) };
  }
  const module = /^SPEC-(?<module>.+)\.md$/u.exec(name)?.groups?.module;
  if (name === rootSpec || module !== undefined) {
    return { kind: "spec", path: file, bytes, slug: slugify(module ?? "") || fromTitle };
  }
  const stays = "not a spec or a capability map; it stays where it is";
  return { kind: "other", path: file, bytes, slug: "", stays };
}

/** The files of `files` that exist under `root`, in the same order. */
async function existing(root: string, files: readonly string[]): Promise<string[]> {
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
  const inSpec = await fileNames(`${root}/${specFolder}`);
  const files = [
    ...(await existing(root, [rootSpec])),
    ...inSpec.filter((name) => name.endsWith(".md")).map((name) => `${specFolder}/${name}`),
  ];
  return Promise.all(
    files.map(async (file) => classify(file, await Bun.file(`${root}/${file}`).bytes())),
  );
}

/** The spec the plan and the todo move beside, or the note that says why they stay. */
type Owner = { spec: string } | { note: string };

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
function planOwner(specs: string[], plans: string[], answer: string | undefined): Owner | null {
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

const specHead = (id: string) => `---\nspec: ${id}\nmigrated: 0.8\n---\n`;

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
    return date === null ? { ...file, stays: noHistory } : { ...file, date };
  });
}

/** The frontmatter of a decision record that a capability map or an ADR becomes. */
function decisionHead(id: string, date: string, architecture: boolean): string {
  const kind = architecture ? "kind: architecture\n" : "";
  return `---\nid: ${id}\nmigrated: 0.8\n${kind}decided: ${date}\n---\n`;
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
      const head = decisionHead(id, file.date ?? "", false);
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
  owner: Owner,
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

/** The 0.8 files of the spec step, each with why it stays, and the spec the plan belongs to. */
type SpecFiles = { found: Found[]; plans: string[]; owner: Owner | null };

async function specStep(
  root: string,
  dryRun: boolean,
  paths: Paths,
  { found, plans, owner }: SpecFiles,
  mapIds: string[],
): Promise<Step> {
  const moving = found.filter((file) => file.kind === "spec" && file.stays === undefined).length;
  const ids = { spec: await nextIds(root, "SPEC", paths.specs, moving, dryRun), map: mapIds };
  const step: Step = { changes: [], writes: [] };
  const folders = moveSpecs(step, root, paths, found, ids);
  if (owner !== null) {
    await movePlans(step, root, plans, owner, folders);
  }
  return step;
}

/** An ADR, `0001-<slug>.md`, that the ADR step moves to a DEC file, or lists with why it stays. */
type Adr = { path: string; bytes: Uint8Array; slug: string; stays: string | null; date: string };

/** An ADR with why it stays, or with the date of its first commit, which its `decided` takes. */
async function readAdr(root: string, file: string): Promise<Adr> {
  const bytes = await Bun.file(`${root}/${file}`).bytes();
  const slug = slugify(adrName.exec(path.basename(file))?.groups?.slug ?? "") || "decision";
  const reason = whyStays(root, file, bytes);
  const date = reason === null ? firstCommitDate(root, file) : null;
  return {
    path: file,
    bytes,
    slug,
    stays: date === null ? (reason ?? noHistory) : null,
    date: date ?? "",
  };
}

/** The ADRs and the kept files of the ADR step, all read before any number is claimed. */
type AdrFiles = { adrs: Adr[]; others: Change[] };

/**
 * The ADRs the ADR step moves or lists: those in the decisions folder, then, on the user's yes,
 * those in each ADR folder of another tool. A kept folder, and a file in a moved folder that is
 * no ADR, is listed with why it stays.
 */
async function findAdrs(
  root: string,
  paths: Paths,
  folders: string[],
  answer: AdrFolderAnswer | null,
): Promise<AdrFiles> {
  const files = await filesNamed(root, paths.decisions, adrName);
  const others: Change[] = [];
  for (const folder of folders) {
    if (answer !== "move") {
      others.push({ path: `${folder}/`, action: "skipped", note: adrFolderKept });
      continue;
    }
    for (const name of await fileNames(`${root}/${folder}`)) {
      if (adrName.test(name)) {
        files.push(`${folder}/${name}`);
      } else {
        others.push({ path: `${folder}/${name}`, action: "skipped", note: notAdr });
      }
    }
  }
  return { adrs: await Promise.all(files.map((file) => readAdr(root, file))), others };
}

/** Move each ADR to a DEC file with the IDs in `ids`; list each one that stays, with why. */
function adrStep(root: string, paths: Paths, { adrs, others }: AdrFiles, ids: string[]): Step {
  const step: Step = { changes: [], writes: [] };
  for (const adr of adrs) {
    if (adr.stays !== null) {
      step.changes.push({ path: adr.path, action: "skipped", note: adr.stays });
      continue;
    }
    const id = ids.shift() ?? "";
    const to = `${paths.decisions}/${id}-${adr.slug}.md`;
    addMove(step, root, adr.path, to, decisionHead(id, adr.date, true), adr.bytes);
  }
  step.changes.push(...others);
  return step;
}

/** The 0.8 intent docs: the Markdown files directly in `docs/intent/`, in name order. */
async function findIntentDocs(root: string): Promise<string[]> {
  const names = await fileNames(`${root}/${intentFolder}`);
  return names.filter((name) => name.endsWith(".md")).map((name) => `${intentFolder}/${name}`);
}

/** What an `--ideas` answer can be, as the end of a sentence. */
function ideaChoices(docs: string[]): string {
  return docs.length === 0
    ? `there is no intent doc, so pass ${noIdeas}`
    : `pass paths from (${docs.join(", ")}), comma-separated, or ${noIdeas}`;
}

/**
 * The intent docs the user picked to become ideas, from `answer`: their paths, comma-separated,
 * or `none`. Throws a UsageError when intent docs exist and the answer is absent, or when the
 * answer names a file that is no intent doc.
 */
function pickedIdeas(docs: string[], answer: string | undefined): string[] {
  if (answer === undefined) {
    if (docs.length === 0) {
      return [];
    }
    throw new UsageError(
      `the user picks which intent docs become ideas (${docs.join(", ")}): pass --ideas with the paths the user picked, comma-separated, or ${noIdeas}`,
    );
  }
  if (answer === noIdeas) {
    return [];
  }
  const named = answer
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry !== "")
    .map((entry) => path.normalize(entry));
  const wrong = named.length === 0 ? [answer] : named.filter((doc) => !docs.includes(doc));
  if (wrong.length > 0) {
    throw new UsageError(
      `--ideas ${wrong.join(",")}: no intent doc by that name; ${ideaChoices(docs)}`,
    );
  }
  return named;
}

/**
 * The user's answer on the tracker files that exist, or null when none exists. Throws a
 * UsageError when one exists and the answer is absent: only the user's yes takes them out.
 */
function trackerAnswer(files: string[], answer: TrackerAnswer | undefined): TrackerAnswer | null {
  if (files.length === 0) {
    return null;
  }
  if (answer === undefined) {
    throw new UsageError(
      `the tracker files (${files.join(", ")}) go only on the user's yes: pass --tracker-files remove after a yes, else keep`,
    );
  }
  return answer;
}

/**
 * The user's answer on the ADR folders of other tools, or null when there is none. Throws a
 * UsageError when one exists and the answer is absent: only the user's yes moves it.
 */
function adrFolderAnswer(
  folders: string[],
  answer: AdrFolderAnswer | undefined,
): AdrFolderAnswer | null {
  if (folders.length === 0) {
    return null;
  }
  if (answer === undefined) {
    const named = folders.map((folder) => `${folder}/`).join(", ");
    throw new UsageError(
      `the ADR folder (${named}) moves into the decisions folder only on the user's yes: pass --adr-folder move after a yes, else keep`,
    );
  }
  return answer;
}

/** Move each intent doc the user picked to an IDEA file; list each other doc as skipped, with why. */
async function intentStep(
  root: string,
  dryRun: boolean,
  paths: Paths,
  docs: string[],
  picked: string[],
): Promise<Step> {
  const found = await Promise.all(
    docs.map(async (doc) => {
      const bytes = await Bun.file(`${root}/${doc}`).bytes();
      const stays = picked.includes(doc) ? whyStays(root, doc, bytes) : notPicked;
      return { doc, bytes, stays };
    }),
  );
  const moving = found.filter((file) => file.stays === null).length;
  const ids = await nextIds(root, "IDEA", paths.ideas, moving, dryRun);
  const step: Step = { changes: [], writes: [] };
  for (const { doc, bytes, stays } of found) {
    if (stays !== null) {
      step.changes.push({ path: doc, action: "skipped", note: stays });
      continue;
    }
    const id = ids.shift() ?? "";
    const slug = slugify(path.basename(doc, ".md")) || "idea";
    const head = `---\nid: ${id}\nmigrated: 0.8\n---\n`;
    addMove(step, root, doc, `${paths.ideas}/${id}-${slug}.md`, head, bytes);
  }
  return step;
}

/** Take out each tracker file on the user's yes; list each one kept or skipped, with why. */
async function trackerStep(
  root: string,
  files: string[],
  answer: TrackerAnswer | null,
): Promise<Step> {
  const step: Step = { changes: [], writes: [] };
  for (const file of files) {
    const note = answer === "keep" ? kept : skipReason(root, file);
    if (note !== null) {
      step.changes.push({ path: file, action: "skipped", note });
      continue;
    }
    const full = `${root}/${file}`;
    step.writes.push({ path: file, full, before: await Bun.file(full).bytes(), after: null });
    step.changes.push({ path: file, action: "removed" });
  }
  return step;
}

/**
 * Write the workspace config, whose `layout: 2` marks the repo as migrated, from the plugin's
 * template with the repo's settings kept. When `changes` holds a file that waits for a commit,
 * leave it out, so that the run after the commit can still move that file.
 */
async function workspaceStep(root: string, brain: string, changes: Change[]): Promise<Step> {
  const step: Step = { changes: [], writes: [] };
  const waiting = changes.some(
    (change) => change.action === "skipped" && waits.has(change.note ?? ""),
  );
  const full = `${root}/${configFile}`;
  const isNew = !(await Bun.file(full).exists());
  let reason = isNew ? null : skipReason(root, configFile);
  if (waiting) {
    reason =
      "it marks the repo as migrated, so it waits for the files above to be committed; then run the migrate mode again";
  }
  if (reason !== null) {
    step.changes.push({ path: configFile, action: "skipped", note: reason });
    return step;
  }
  const before = isNew ? new Uint8Array() : await Bun.file(full).bytes();
  const template = await Bun.file(`${brain}/skills/setup-brain/workspace.md`).text();
  const next = workspaceText(template, isNew ? null : new TextDecoder().decode(before));
  if (next === null) {
    const why = "its frontmatter is not valid YAML; fix it, then run the migrate mode again";
    step.changes.push({ path: configFile, action: "skipped", note: why });
    return step;
  }
  const after = new TextEncoder().encode(next);
  step.writes.push({ path: configFile, full, before, after, isNew });
  step.changes.push({ path: configFile, action: isNew ? "created" : "updated" });
  return step;
}

/** What `read` returns, or the UsageError it throws, so that a run can name every bad answer at once. */
function settle<T>(read: () => T): T | UsageError {
  try {
    return read();
  } catch (error) {
    if (error instanceof UsageError) {
      return error;
    }
    throw error;
  }
}

function gitMove(root: string, from: string, to: string): void {
  const moved = git(root, "mv", "--", from, to);
  if (!moved.ok) {
    throw new Error(`git mv ${from} ${to} failed: ${moved.error}`);
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

/** Take the file out with `git rm`; push what puts it back in the index and on disk. */
function gitRemove(root: string, write: Write, undo: Undo[]): void {
  const removed = git(root, "rm", "--quiet", "--", write.path);
  if (!removed.ok) {
    throw new Error(`git rm ${write.path} failed: ${removed.error}`);
  }
  undo.push(async () => {
    const reset = git(root, "reset", "--quiet", "--", write.path);
    if (!reset.ok) {
      throw new Error(`git reset ${write.path} failed: ${reset.error}`);
    }
    await mkdir(path.dirname(write.full), { recursive: true });
    await Bun.write(write.full, write.before);
  });
}

/** Write a file the run creates and `git add` it; push what takes it out of the index and off the disk. */
async function addNew(root: string, write: Write, after: Uint8Array, undo: Undo[]): Promise<void> {
  undo.push(async () => {
    git(root, "reset", "--quiet", "--", write.path);
    await rm(write.full, { force: true });
  });
  await Bun.write(write.full, after);
  const added = git(root, "add", "--", write.path);
  if (!added.ok) {
    throw new Error(`git add ${write.path} failed: ${added.error}`);
  }
}

/** Make one write: a removal, a new file, or a move with `git mv` first when the file moves; push what takes it back. */
async function apply(root: string, write: Write, undo: Undo[]): Promise<void> {
  const { after, from } = write;
  if (after === null) {
    gitRemove(root, write, undo);
    return;
  }
  if (from !== undefined || write.isNew === true) {
    const folder = path.dirname(write.full);
    const made = await mkdir(folder, { recursive: true });
    if (made !== undefined) {
      undo.push(() => removeFolders(made, folder));
    }
  }
  if (write.isNew === true) {
    await addNew(root, write, after, undo);
    return;
  }
  if (from !== undefined) {
    gitMove(root, from, write.path);
    undo.push(() => gitMove(root, write.path, from));
  }
  undo.push(async () => {
    await Bun.write(write.full, write.before);
  });
  await Bun.write(write.full, after);
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

/** Write every change and the one commit; on a failure, put every file back and throw. */
async function commitWrites(root: string, writes: Write[]): Promise<void> {
  const undo: Undo[] = [];
  try {
    for (const write of writes) {
      await apply(root, write, undo);
    }
    const committed = writes.flatMap((write) =>
      write.from === undefined ? [write.path] : [write.from, write.path],
    );
    const bodies = [
      commitBody,
      ...(writes.some((write) => write.after === null) ? [removalBody] : []),
      ...(writes.some((write) => write.path === configFile) ? [layoutBody] : []),
    ];
    const message = [commitTitle, ...bodies].flatMap((part) => ["-m", part]);
    const commit = git(root, "commit", "--quiet", ...message, "--", ...committed);
    if (!commit.ok) {
      throw new Error(`git commit failed: ${commit.error}`);
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
  // git mv leaves a folder it emptied on disk; git keeps no folders, so remove each one.
  for (const write of writes) {
    if (write.from !== undefined) {
      await removeFolders(root, path.dirname(`${root}/${write.from}`));
    }
  }
}

/** Run the migrate mode in `input.root`: list each change, and on a real run write one commit. */
export async function migrate(input: MigrateInput): Promise<MigrateResult> {
  const root = path.resolve(input.root);
  const { dryRun } = input;
  const { paths } = await readConfig(root);
  const layout = await recordedLayout(root);
  if (layout !== null && layout >= currentLayout) {
    const note = `records layout: ${layout}; the repo is migrated, so nothing moves`;
    return { changes: [{ path: configFile, action: "unchanged", note }], commit: null };
  }
  const classified = await findSpecFiles(root);
  const plans = await existing(root, planFiles);
  const docs = await findIntentDocs(root);
  const trackers = await existing(root, trackerFiles);
  const adrFolders = await findAdrFolders(root, paths);
  const specPaths = classified.filter((file) => file.kind === "spec").map((file) => file.path);
  // Every answer is read before the first claim, so a refused run leaves no trace.
  const owner = settle(() => planOwner(specPaths, plans, input.planSpec));
  const picked = settle(() => pickedIdeas(docs, input.ideas));
  const removal = settle(() => trackerAnswer(trackers, input.trackerFiles));
  const adrMove = settle(() => adrFolderAnswer(adrFolders, input.adrFolder));
  const answers = [owner, picked, removal, adrMove];
  if (
    owner instanceof UsageError ||
    picked instanceof UsageError ||
    removal instanceof UsageError ||
    adrMove instanceof UsageError
  ) {
    const refused = answers.flatMap((answer) =>
      answer instanceof UsageError ? [answer.message] : [],
    );
    throw new UsageError(refused.join("\n"));
  }
  // Every reason to stay is known before a number is claimed, so no claim goes to a file that stays.
  const found = withReasons(root, classified);
  const adrs = await findAdrs(root, paths, adrFolders, adrMove);
  const maps = found.filter((file) => file.kind === "map" && file.stays === undefined).length;
  const decisions = maps + adrs.adrs.filter((adr) => adr.stays === null).length;
  const decIds = await nextIds(root, "DEC", paths.decisions, decisions, dryRun);
  const steps = [
    await glossaryStep(root, input.renameGlossary === true),
    await specStep(root, dryRun, paths, { found, plans, owner }, decIds.slice(0, maps)),
    adrStep(root, paths, adrs, decIds.slice(maps)),
    await frontmatterStep(root, paths),
    await intentStep(root, dryRun, paths, docs, picked),
    await trackerStep(root, trackers, removal),
  ];
  const before = steps.flatMap((step) => step.changes);
  steps.push(await workspaceStep(root, input.brain ?? `${import.meta.dir}/../..`, before));
  const changes = steps.flatMap((step) => step.changes);
  const writes = steps.flatMap((step) => step.writes);
  if (dryRun || writes.length === 0) {
    return { changes, commit: null };
  }
  await commitWrites(root, writes);
  return { changes, commit: git(root, "rev-parse", "HEAD").out.trim() };
}
