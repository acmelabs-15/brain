/**
 * brain check: check the workspace against its rules, one line per finding. The rules are the
 * intent doc's Checks: each file's name and number, its frontmatter and H1 (through the shared
 * schema), each map and plan row, every link to another file (a map row's result, a spec's
 * sources, a superseded-by, a done idea's result), the edges of each plan's checkpoint rows, and
 * each plan's "Parallel waves" section, which must be what `brain plan` prints for its rows now.
 * The folders come from the workspace config. A file with `migrated: 0.8` keeps its old body, so
 * its rows and H1 are not checked; a migrated decision with no `kind` gets one informational line,
 * which leaves the exit code alone.
 * Exit codes: 0 clean, 1 a finding or a config it cannot use, 2 bad usage.
 */
import { realpath } from "node:fs/promises";
import path from "node:path";

import { isDirectory } from "../lib/files";
import { tableCells } from "../lib/table";
import { findRepo, readConfig } from "./config";
import type { Paths } from "./config";
import { blockersOf, findCycle } from "./graph";
import { readRows } from "./map";
import type { Row, Table } from "./map";
import { cycleProblem, parallelWaves, renderParallelWaves } from "./plan";
import { checkDoc, readFrontmatter } from "./schema";
import type { DocType } from "./schema";

const usage = `usage: brain check

  Check the workspace against its rules. It prints one line per finding and exits 1 on any.`;

const slug = "[a-z0-9]+(?:-[a-z0-9]+)*";

/** The fixed files of a spec folder, by their path inside it. */
const specFiles: Record<string, DocType> = {
  "spec.md": "spec",
  "tasks/plan.md": "plan",
  "tasks/todo.md": "todo",
};

/**
 * Each workspace folder, the name a file in it must have, and the shape a finding names. In a
 * name, `id` is the ID the file gets, `unit` the file or spec folder that holds the number, and
 * `file` a spec folder's fixed file. A numbered file has the folder's `type`; a spec folder's
 * file has the type of its fixed name.
 */
const folders: { key: keyof Paths; name: RegExp; shape: string; type?: DocType }[] = [
  {
    key: "decisions",
    name: new RegExp(`^(?<unit>(?<id>DEC-\\d{3})-${slug}\\.md)$`, "u"),
    shape: "DEC-NNN-<slug>.md",
    type: "DEC",
  },
  {
    key: "research",
    name: new RegExp(`^(?<unit>(?<id>RES-\\d{3})-${slug}\\.md)$`, "u"),
    shape: "RES-NNN-<slug>.md",
    type: "RES",
  },
  {
    key: "ideas",
    name: new RegExp(`^(?<unit>(?<id>IDEA-\\d{3})-${slug}\\.md)$`, "u"),
    shape: "IDEA-NNN-<slug>.md",
    type: "IDEA",
  },
  {
    key: "specs",
    name: new RegExp(
      `^(?<unit>(?<id>SPEC-\\d{3})-${slug})/(?<file>spec\\.md|tasks/plan\\.md|tasks/todo\\.md)$`,
      "u",
    ),
    shape: "SPEC-NNN-<slug>/spec.md, tasks/plan.md or tasks/todo.md",
  },
];

/** A workspace file whose name gives it a type. Paths are relative to the repo's root. */
type Doc = { path: string; type: DocType; id: string; unit: string };
type Finding = { path: string; problem: string };
type Result = {
  findings: Finding[];
  /** How many files the workspace folders hold, named well or not. */
  files: number;
  /** The migrated decisions that have no `kind`, by ID. */
  unclassified: string[];
};

/** The row table a file type holds: an idea's map, a plan's task rows. */
const tablesOf: Partial<Record<DocType, Table>> = { IDEA: "map", plan: "plan" };

/** The files under `folder`, relative to it and sorted; none when it is absent. Dotfiles stay out. */
async function filesUnder(folder: string): Promise<string[]> {
  if (!(await isDirectory(folder))) {
    return [];
  }
  const found = await Array.fromAsync(new Bun.Glob("**").scan({ cwd: folder }));
  return found.toSorted();
}

/** Every file in the workspace folders: a typed doc, or a finding for its name. */
async function scan(
  root: string,
  paths: Paths,
): Promise<{ docs: Doc[]; findings: Finding[]; files: number }> {
  const docs: Doc[] = [];
  const findings: Finding[] = [];
  let files = 0;
  for (const { key, name, shape, type: numbered } of folders) {
    const folder = paths[key];
    for (const file of await filesUnder(path.join(root, folder))) {
      files += 1;
      const groups = name.exec(file)?.groups;
      const where = path.join(folder, file);
      if (groups?.id === undefined || groups.unit === undefined) {
        findings.push({ path: where, problem: `name: not ${shape}` });
        continue;
      }
      // The name allows only a spec folder's fixed files, so the lookup always finds one.
      const type = numbered ?? specFiles[groups.file ?? ""];
      if (type !== undefined) {
        docs.push({ path: where, type, id: groups.id, unit: path.join(folder, groups.unit) });
      }
    }
  }
  return { docs, findings, files };
}

/** One finding for each file or spec folder past the first that takes an ID already taken. */
function duplicates(docs: Doc[]): Finding[] {
  const units = new Map<string, Set<string>>();
  for (const doc of docs) {
    units.set(doc.id, (units.get(doc.id) ?? new Set()).add(doc.unit));
  }
  const findings: Finding[] = [];
  for (const [id, held] of units) {
    const [first, ...others] = [...held].toSorted();
    for (const other of others) {
      findings.push({ path: other, problem: `number: ${id} is also ${first}` });
    }
  }
  return findings;
}

/**
 * The problems with a file's links to other files: a superseded-by decision, a spec's sources,
 * the decision a done idea names as its result.
 */
function linkProblems(type: DocType, data: Record<string, unknown>, known: Set<string>): string[] {
  const problems: string[] = [];
  const superseded =
    typeof data.status === "string"
      ? /^superseded by (?<by>DEC-\d{3})$/u.exec(data.status)?.groups?.by
      : undefined;
  if (type === "DEC" && superseded !== undefined && !known.has(superseded)) {
    problems.push(`status: superseded by ${superseded}, which does not exist`);
  }
  // A commit SHA is not checked: a rebase or a squash can change it after the idea is done.
  const result = type === "IDEA" && typeof data.result === "string" ? data.result : "";
  if (/^DEC-\d{3}$/u.test(result) && !known.has(result)) {
    problems.push(`result: ${result} does not exist`);
  }
  if (type === "spec" && Array.isArray(data.sources)) {
    for (const source of data.sources) {
      // A source that is not an ID is the schema's finding; only a valid ID can be missing.
      if (
        typeof source === "string" &&
        /^(?:IDEA|DEC|RES)-\d{3}$/u.test(source) &&
        !known.has(source)
      ) {
        problems.push(`sources: ${source} does not exist`);
      }
    }
  }
  return problems;
}

/** The problem with an H1 whose title is still a template placeholder, such as `<title>`. */
function placeholderTitle(body: string): string[] {
  const heading = body.split("\n").find((line) => line.startsWith("# ")) ?? "";
  const title = /^# [^:]+: (?<title>.+)$/u.exec(heading)?.groups?.title?.trim() ?? "";
  return /^<[^<>]+>$/u.test(title)
    ? [`H1: ${JSON.stringify(heading)} has a placeholder, not a title`]
    : [];
}

function isTask(row: Row): boolean {
  return row.type === "task";
}

/**
 * The problems with a plan's checkpoint rows, each naming the task whose blocked-by to fix. A
 * checkpoint's phase is the tasks that block it. It must block every later task that depends on a
 * task in its phase, and no other task. A task depends on another through task rows alone, since
 * a checkpoint does no work; a checkpoint blocks a task through any rows. A superseded row drops out.
 */
function checkpointProblems(plan: readonly Row[]): string[] {
  const rows = plan.filter((row) => row.status !== "superseded");
  const tasks = rows.filter(isTask);
  const checkpoints = rows
    .filter((row) => row.type === "checkpoint")
    .map((checkpoint) => ({
      id: checkpoint.id,
      phase: tasks.filter((task) => checkpoint.blockedBy.includes(task.id)).map((task) => task.id),
      // The rows a checkpoint waits on come before it, so it cannot block them.
      before: blockersOf(rows, checkpoint),
    }));
  const problems: string[] = [];
  for (const task of tasks) {
    const dependsOn = blockersOf(rows, task, isTask);
    const waitsOn = blockersOf(rows, task);
    for (const { id, phase, before } of checkpoints) {
      const needed = phase.find((phaseTask) => dependsOn.has(phaseTask));
      if (task.blockedBy.includes(id) && needed === undefined) {
        problems.push(
          `row ${task.id}: blocked by checkpoint ${id}, but depends on no task in the phase of ${id}`,
        );
      } else if (needed !== undefined && !waitsOn.has(id) && !before.has(task.id)) {
        problems.push(
          `row ${task.id}: depends on ${needed}, in the phase of checkpoint ${id}, but ${id} does not block it`,
        );
      }
    }
  }
  return problems;
}

/**
 * The problems with the rows of a map or plan. A map row's result must name an existing DEC or
 * RES, and its blocked-by edges must hold no cycle; a plan's checkpoints must block the right
 * tasks (a plan's cycle is the waves check's finding, as `brain plan` names it).
 */
function rowProblems(table: Table, body: string, known: Set<string>): string[] {
  const { rows, problems } = readRows(table, body);
  if (table === "plan") {
    // A row that breaks the format is left out of `rows`, so its edges would be missing.
    return problems.length > 0 ? problems : checkpointProblems(rows);
  }
  for (const row of rows) {
    const links = row.result.match(/\b(?:DEC|RES)-\d{3}\b/gu) ?? [];
    if (row.status === "resolved" && links.length === 0) {
      problems.push(`row ${row.id}: resolved, but its result names no DEC or RES file`);
    }
    for (const link of links.filter((id) => !known.has(id))) {
      problems.push(`row ${row.id}: result ${link} does not exist`);
    }
  }
  // A row left out for its format only takes edges away, so a cycle in the rest is a real one.
  const cycle = findCycle(rows);
  if (cycle !== null) {
    problems.push(cycleProblem(cycle));
  }
  return problems;
}

const wavesHeading = "## Parallel waves";

/** The lines of a plan's "Parallel waves" section, below its heading; null when it has none. */
function wavesSection(body: string): string[] | null {
  const lines = body.split("\n");
  const start = lines.findIndex((line) => line.trimEnd() === wavesHeading);
  if (start === -1) {
    return null;
  }
  const below = lines.slice(start + 1);
  // The section ends at the next heading of its level or higher.
  const end = below.findIndex((line) => /^#{1,2} /u.test(line));
  return end === -1 ? below : below.slice(0, end);
}

/**
 * Lines of Markdown, read past what a formatter changes: the spaces around each line and inside
 * each table cell, the dashes of a table's delimiter row, and runs of blank lines.
 */
function plainText(lines: readonly string[]): string {
  const plain = lines.map((line) => {
    const cells = tableCells(line);
    if (cells === null) {
      return line.trim();
    }
    const delimiter = cells.every((cell) => /^:?-+:?$/u.test(cell));
    return `| ${cells.map((cell) => (delimiter ? "---" : cell)).join(" | ")} |`;
  });
  return plain
    .join("\n")
    .replaceAll(/\n{3,}/gu, "\n\n")
    .trim();
}

/**
 * The problem with a plan's "Parallel waves" section: missing, or stale, which is different from
 * what `brain plan` prints above its cap for the rows and task blocks now. A plan whose rows
 * `brain plan` cannot put in order gets the problems `brain plan` names instead.
 */
function wavesProblems(spec: string, body: string, todo: string): string[] {
  const { rows, problems } = readRows("plan", body);
  // A row that breaks the format is the row check's finding; a plan with no rows has no waves.
  if (problems.length > 0 || rows.length === 0) {
    return [];
  }
  const parallel = parallelWaves(body, todo);
  if ("problems" in parallel) {
    return parallel.problems;
  }
  const source = `the lines that brain plan ${spec} prints above its Cap line`;
  const section = wavesSection(body);
  if (section === null) {
    return [`Parallel waves: missing; add the section: ${source}`];
  }
  const current = plainText(section) === plainText(renderParallelWaves(parallel).split("\n"));
  return current ? [] : [`Parallel waves: stale; replace the section with ${source}`];
}

/** Findings in the byte order of their paths, as `git ls-files` lists files. */
function byPath(a: Finding, b: Finding): number {
  if (a.path === b.path) {
    return 0;
  }
  return a.path < b.path ? -1 : 1;
}

/** Check every workspace file under `root`, with the folders from `paths`. */
export async function checkWorkspace(root: string, paths: Paths): Promise<Result> {
  const { docs, findings, files } = await scan(root, paths);
  findings.push(...duplicates(docs));
  const known = new Set(docs.map((doc) => doc.id));
  const unclassified: string[] = [];
  for (const doc of docs) {
    const text = await Bun.file(path.join(root, doc.path)).text();
    const problems = checkDoc(doc.type, text, doc.id);
    const frontmatter = readFrontmatter(text);
    // Without fields to read, the schema's one finding says all there is to say.
    if (frontmatter !== null && !("error" in frontmatter)) {
      const { data, body } = frontmatter;
      const migrated = Object.hasOwn(data, "migrated");
      problems.push(...linkProblems(doc.type, data, known));
      if (migrated && doc.type === "DEC" && (data.kind === undefined || data.kind === null)) {
        unclassified.push(doc.id);
      }
      const table = tablesOf[doc.type];
      if (!migrated) {
        problems.push(...placeholderTitle(body));
        if (table !== undefined) {
          problems.push(...rowProblems(table, body, known));
        }
        if (doc.type === "plan") {
          const todo = Bun.file(path.join(root, doc.unit, "tasks", "todo.md"));
          const blocks = (await todo.exists()) ? await todo.text() : "";
          problems.push(...wavesProblems(doc.id, body, blocks));
        }
      }
    }
    findings.push(...problems.map((problem) => ({ path: doc.path, problem })));
  }
  // The sort is stable, so each file's findings keep the order they were found in.
  findings.sort(byPath);
  return { findings, files, unclassified: unclassified.toSorted() };
}

function counted(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

/** Run `brain check` and return the exit code. */
export async function check(args: string[]): Promise<number> {
  if (args.length > 0) {
    console.error(usage);
    return 2;
  }
  try {
    const cwd = await realpath(process.cwd());
    const repo = await findRepo(cwd);
    const config = await readConfig(repo.root);
    const { findings, files, unclassified } = await checkWorkspace(repo.root, config.paths);
    for (const { path: where, problem } of findings) {
      console.log(`${path.relative(cwd, path.join(repo.root, where))}: ${problem}`);
    }
    if (unclassified.length > 0) {
      const have = unclassified.length === 1 ? "decision has" : "decisions have";
      console.log(`${unclassified.length} migrated ${have} no kind: ${unclassified.join(", ")}`);
    }
    const checked = counted(files, "workspace file", "workspace files");
    console.log(
      findings.length === 0
        ? `no finding in ${checked}`
        : `${counted(findings.length, "finding", "findings")} in ${checked}`,
    );
    return findings.length === 0 ? 0 : 1;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }
}
