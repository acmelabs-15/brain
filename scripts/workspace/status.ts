/**
 * brain status: report the active work in five lines: the phase, the last completed step, the
 * next step, the red items, and the decisions waiting on the user. The active effort comes from
 * `effort.ts`, the one place that finds it: the effort the git branch names, else every effort
 * that is not finished. `docs/STATUS.md`, the handoff note the agent rewrites at task end, feeds
 * the next-step and waiting lines when it names them. It is read-only: it writes no file.
 * Exit codes: 0 a report, 1 a config it cannot use, 2 bad usage.
 */
import { realpath } from "node:fs/promises";
import path from "node:path";

import { checkWorkspace } from "./check";
import { configFile, findRepo, readConfig } from "./config";
import { activeEffort, listEfforts } from "./effort";
import type { Active, Effort } from "./effort";
import { frontier, readRows } from "./map";
import type { Row, Table } from "./map";
import { readFrontmatter, schemas } from "./schema";
import type { DocType } from "./schema";

const usage = `usage: brain status [--json]

  Report the active work in five lines: phase, last step, next step, red items and the
  decisions waiting on the user. --json gives the same data, the full docs/STATUS.md text and
  the specs each idea produced. It changes no file.`;

/** The handoff note, relative to the repo's root. */
const noteFile = "docs/STATUS.md";

/** The row types the user resolves: a map's decide rows. */
const decideTypes = new Set(["interview", "prototype", "ideate"]);

/** Each glossary file's name on the 0.8 layout, beside the name setup-brain moves it to. */
const glossaryMoves = [
  ["CONTEXT.md", "GLOSSARY.md"],
  ["CONTEXT-MAP.md", "GLOSSARY-MAP.md"],
] as const;

/**
 * The files of the brain 0.8 layout, as the report names them, and the pattern that finds each.
 * A folder counts only with a Markdown file in it: a Ruby repo's `spec/` holds tests.
 */
const oldLayout: [shown: string, pattern: string][] = [
  ...glossaryMoves.map(([old]): [string, string] => [old, old]),
  ["SPEC.md", "SPEC.md"],
  ["spec/", "spec/*.md"],
  ["tasks/plan.md", "tasks/plan.md"],
  ["tasks/todo.md", "tasks/todo.md"],
  ["docs/intent/", "docs/intent/*.md"],
  ["docs/agents/issue-tracker.md", "docs/agents/issue-tracker.md"],
];

/** One map or plan row, cited with its file's ID: `IDEA-001#06`. */
type Step = { ref: string; title: string; type: string; status: Row["status"]; result: string };

/** The state of one effort the report names. */
type EffortState = {
  id: string;
  kind: Effort["kind"];
  /** An idea in define, a spec in build; `finished` when the branch names a finished effort. */
  phase: "define" | "build" | "finished";
  title: string;
  /** The idea file, or the spec folder. */
  path: string;
  /** The highest-numbered resolved row; null when no row is resolved. */
  lastStep: Step | null;
  frontier: Step[];
  inProgress: Step[];
  /** The decide rows on the frontier. */
  waiting: Step[];
};

/** An idea in any status, and the specs whose `sources:` name it. */
type Idea = { id: string; title: string; status: string | null; path: string; specs: string[] };

/** The handoff note, and the next step and waiting decisions it names. */
type Note = { path: string; text: string; next: string | null; waiting: string | null };

type Status = {
  /** The 0.8-layout files found in a repo with no workspace config; null when there are none. */
  migrate: string[] | null;
  /** The five lines; one line on a repo to migrate. */
  report: string[];
  efforts: EffortState[];
  ideas: Idea[];
  /** One line per red item: each `brain check` finding, and a missing workspace config. */
  red: string[];
  note: Note | null;
};

/** The title after a file's H1 prefix (`# IDEA-001: `), or after `# ` when the prefix differs. */
function titleOf(body: string, prefix: string): string {
  const heading = body.split("\n").find((line) => line.startsWith("# ")) ?? "";
  return (heading.startsWith(prefix) ? heading.slice(prefix.length) : heading.slice(2)).trim();
}

/** A workspace file's frontmatter fields, body and title; null when the file is absent. */
async function readDoc(root: string, where: string, type: DocType, id: string) {
  const file = Bun.file(path.join(root, where));
  if (!(await file.exists())) {
    return null;
  }
  const text = await file.text();
  const frontmatter = readFrontmatter(text);
  const { data, body } =
    frontmatter === null || "error" in frontmatter ? { data: {}, body: text } : frontmatter;
  return {
    data: data as Record<string, unknown>,
    body,
    title: titleOf(body, schemas[type].heading(id)),
    // A migrated file keeps its old body, which holds no row table.
    migrated: Object.hasOwn(data, "migrated"),
  };
}

/** The rows of a file's table; none for an absent or a migrated file. */
function rowsOf(table: Table, doc: { body: string; migrated: boolean } | null): Row[] {
  return doc === null || doc.migrated ? [] : readRows(table, doc.body).rows;
}

/** An effort's state, worked out from its rows. */
function stateFrom(effort: Effort, title: string, rows: Row[]): EffortState {
  const step = (row: Row): Step => ({
    ref: `${effort.id}#${row.id}`,
    title: row.title,
    type: row.type,
    status: row.status,
    result: row.result,
  });
  const open = frontier(rows);
  const last = rows
    .filter((row) => row.status === "resolved")
    .toSorted((a, b) => Number(a.id) - Number(b.id))
    .at(-1);
  let phase: EffortState["phase"] = effort.kind === "idea" ? "define" : "build";
  if (effort.finished) {
    phase = "finished";
  }
  return {
    id: effort.id,
    kind: effort.kind,
    phase,
    title,
    path: effort.path,
    lastStep: last === undefined ? null : step(last),
    frontier: open.map(step),
    inProgress: rows.filter((row) => row.status === "in-progress").map(step),
    waiting: open.filter((row) => decideTypes.has(row.type)).map(step),
  };
}

/** The state of one effort: an idea's map, or a spec's plan with the spec's title. */
async function readEffort(root: string, effort: Effort): Promise<EffortState> {
  if (effort.kind === "idea") {
    const idea = await readDoc(root, effort.path, "IDEA", effort.id);
    return stateFrom(effort, idea?.title ?? "", rowsOf("map", idea));
  }
  const spec = await readDoc(root, path.join(effort.path, "spec.md"), "spec", effort.id);
  const plan = await readDoc(root, path.join(effort.path, "tasks/plan.md"), "plan", effort.id);
  // The spec's own title wins over the plan's, which repeats it.
  const title = spec?.title === undefined || spec.title === "" ? (plan?.title ?? "") : spec.title;
  return stateFrom(effort, title, rowsOf("plan", plan));
}

/** The efforts the report names: the active one, or the several that are not finished. */
function reported(active: Active): Effort[] {
  if ("effort" in active) {
    return [active.effort];
  }
  return "several" in active ? active.several : [];
}

/** Every idea, with the specs whose `sources:` name it, in name order. */
async function readIdeas(root: string, efforts: Effort[]): Promise<Idea[]> {
  const ideas: Idea[] = [];
  for (const effort of efforts.filter((each) => each.kind === "idea")) {
    const idea = await readDoc(root, effort.path, "IDEA", effort.id);
    const state = typeof idea?.data.status === "string" ? idea.data.status : null;
    ideas.push({
      id: effort.id,
      title: idea?.title ?? "",
      status: state,
      path: effort.path,
      specs: [],
    });
  }
  for (const effort of efforts.filter((each) => each.kind === "spec")) {
    const spec = await readDoc(root, path.join(effort.path, "spec.md"), "spec", effort.id);
    const sources: unknown[] = Array.isArray(spec?.data.sources) ? spec.data.sources : [];
    for (const idea of ideas.filter((each) => sources.includes(each.id))) {
      idea.specs.push(effort.id);
    }
  }
  return ideas;
}

/** The 0.8-layout files under `root`, as the report names them. */
async function oldLayoutFiles(root: string): Promise<string[]> {
  const found: string[] = [];
  for (const [name, pattern] of oldLayout) {
    const first = await new Bun.Glob(pattern).scan({ cwd: root }).next();
    if (first.done !== true) {
      found.push(name);
    }
  }
  return found;
}

/** The note's text, and the next step and waiting decisions it names on a labelled line. */
async function readNote(root: string): Promise<Note | null> {
  const file = Bun.file(path.join(root, noteFile));
  if (!(await file.exists())) {
    return null;
  }
  const text = await file.text();
  const note: Note = { path: noteFile, text, next: null, waiting: null };
  for (const line of text.split("\n")) {
    const named = /^(?:[-*] +)?(?<label>[^:]+?): +(?<value>\S.*)$/u.exec(line.trim())?.groups;
    const label = named?.label?.toLowerCase();
    const value = named?.value?.trim() ?? "";
    if ((label === "next" || label === "next step") && note.next === null) {
      note.next = value;
    } else if ((label === "waiting on the user" || label === "waiting") && note.waiting === null) {
      note.waiting = value;
    }
  }
  return note;
}

function shown(step: Step): string {
  return step.title === "" ? step.ref : `${step.ref}: ${step.title}`;
}

function effortName(effort: EffortState): string {
  return effort.title === "" ? effort.id : `${effort.id}: ${effort.title}`;
}

function joined(parts: string[]): string {
  return parts.length === 0 ? "none" : parts.join("; ");
}

/** The next step the rows give: each effort's first frontier row, then its rows in progress. */
function computedNext(efforts: EffortState[]): string[] {
  return efforts.flatMap((effort) => {
    const parts = effort.frontier.slice(0, 1).map(shown);
    if (effort.inProgress.length > 0) {
      parts.push(`in progress: ${effort.inProgress.map(shown).join(", ")}`);
    }
    return parts;
  });
}

/** The next-step line: the note's, else the rows', else the note's first line of text. */
function nextLine(efforts: EffortState[], note: Note | null): string {
  if (note?.next !== null && note?.next !== undefined) {
    return note.next;
  }
  const computed = computedNext(efforts);
  if (computed.length > 0) {
    return computed.join("; ");
  }
  const first = note?.text
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line !== "" && !line.startsWith("#"));
  return first === undefined ? "none" : `none in the workspace; ${noteFile} says: ${first}`;
}

/** The five lines, from the efforts, the red items and the note. */
function fiveLines(
  efforts: EffortState[],
  red: { setup: boolean; findings: number },
  note: Note | null,
): string[] {
  const phase =
    efforts.length === 0
      ? "no active work"
      : efforts.map((effort) => `${effort.phase} (${effortName(effort)})`).join("; ");
  const last = efforts.flatMap((effort) => {
    const step = effort.lastStep;
    if (step === null) {
      return [];
    }
    return [step.result === "" ? shown(step) : `${shown(step)} (${step.result})`];
  });
  const redItems: string[] = [];
  if (red.setup) {
    redItems.push(`no ${configFile}: run setup-brain`);
  }
  if (red.findings > 0) {
    const findings = red.findings === 1 ? "finding" : "findings";
    redItems.push(`${red.findings} brain check ${findings}: run brain check`);
  }
  const waiting = note?.waiting ?? joined(efforts.flatMap((effort) => effort.waiting.map(shown)));
  return [
    `Phase: ${phase}`,
    `Last step: ${joined(last)}`,
    `Next step: ${nextLine(efforts, note)}`,
    `Red: ${joined(redItems)}`,
    `Waiting on the user: ${waiting}`,
  ];
}

/**
 * The state of the workspace under `root`. A repo with no workspace config but with 0.8-layout
 * files gets one line instead of five: run setup-brain to migrate.
 */
async function readStatus(root: string): Promise<Status> {
  const setup = !(await Bun.file(path.join(root, configFile)).exists());
  const note = await readNote(root);
  const old = setup ? await oldLayoutFiles(root) : [];
  if (old.length > 0) {
    const line = `This repo is on the brain 0.8 layout: run setup-brain to migrate. Found: ${old.join(", ")}.`;
    return { migrate: old, report: [line], efforts: [], ideas: [], red: [], note };
  }
  const { paths } = await readConfig(root);
  const { findings } = await checkWorkspace(root, paths);
  const efforts: EffortState[] = [];
  for (const effort of reported(await activeEffort(root, paths))) {
    efforts.push(await readEffort(root, effort));
  }
  const red = [
    ...(setup ? [`no ${configFile}: run setup-brain`] : []),
    ...findings.map((finding) => `${finding.path}: ${finding.problem}`),
  ];
  return {
    migrate: null,
    report: fiveLines(efforts, { setup, findings: findings.length }, note),
    efforts,
    ideas: await readIdeas(root, await listEfforts(root, paths)),
    red,
    note,
  };
}

/** Run `brain status` and return the exit code. */
export async function status(args: string[]): Promise<number> {
  const json = args.length === 1 && args[0] === "--json";
  if (args.length > 0 && !json) {
    console.error(usage);
    return 2;
  }
  try {
    const repo = await findRepo(await realpath(process.cwd()));
    const state = await readStatus(repo.root);
    console.log(json ? JSON.stringify(state, null, 2) : state.report.join("\n"));
    return 0;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }
}
