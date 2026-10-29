/**
 * brain plan [<spec>] [--json]: print what can run at once in a spec's plan. It reads the row
 * table of `tasks/plan.md` and the "Files likely touched" of each block in `tasks/todo.md`, and
 * prints the waves, the critical path, the files that more than one task in a wave touches, and
 * the phases that share a wave. A phase is the tasks its checkpoint row is blocked by. Then it
 * prints the cap (`max_parallel`, or `BRAIN_MAX_PARALLEL` over it) and how many of each wave's
 * tasks start at once. It writes nothing. The spec is a SPEC ID or a path; without one, it is the
 * active effort.
 * Exit codes: 0 clean, 1 a plan it cannot put in order (a cycle, an unknown blocker) or a bad
 * cap, 2 bad usage.
 */
import { realpath } from "node:fs/promises";
import path from "node:path";

import { configFile, findRepo, readConfig } from "./config";
import type { Paths, WorkspaceConfig } from "./config";
import { activeEffort, listEfforts } from "./effort";
import { criticalPath, findCycle, layWaves } from "./graph";
import { readRows } from "./map";
import type { Row } from "./map";

const usage = `usage: brain plan [SPEC-NNN | <spec folder>] [--json]

  Print the waves of a spec's plan: each wave is the rows that can start at once when the waves
  above it are done. Then the critical path, the files that tasks in one wave share, the
  phases that share a wave, and the cap: max_parallel in docs/agents/workspace.md (default 8),
  or BRAIN_MAX_PARALLEL over it, with how many of each wave's tasks start at once. Without a
  spec, it reads the plan of the active effort.

  --json   print the same data as JSON`;

/** A row in a wave, with the files its task block names. */
export type PlannedRow = Pick<Row, "id" | "title" | "type" | "status"> & { files: string[] };

/** What `brain plan` prints, as data. Every list is in wave order, then table order. */
export type ParallelWaves = {
  waves: { wave: number; rows: PlannedRow[] }[];
  /** The row numbers of the critical path, first row first. */
  criticalPath: string[];
  /** Each file that more than one task in a wave touches, with those tasks. */
  sharedFiles: { wave: number; file: string; rows: string[] }[];
  /** Each two phases whose tasks share a wave, named by their checkpoint rows. */
  overlaps: { phases: [string, string]; waves: number[] }[];
};

const heading = /^#{1,6} /u;
const blockHeading = /^## (?:Task|Checkpoint) (?<id>\d{2}):/u;

/** The files each block of `todo.md` names under "Files likely touched", by row number. */
function filesByRow(todo: string): Map<string, string[]> {
  const files = new Map<string, string[]>();
  let row: string | null = null;
  let listing = false;
  for (const line of todo.split("\n").map((text) => text.trim())) {
    if (heading.test(line)) {
      row = blockHeading.exec(line)?.groups?.id ?? null;
      listing = false;
    } else if (line === "**Files likely touched:**") {
      listing = row !== null;
    } else if (listing && row !== null && line.startsWith("- ")) {
      const item = line.slice(2).trim();
      // A path in backticks, as the template writes it; else the whole item.
      const file = /^`(?<file>[^`]+)`/u.exec(item)?.groups?.file ?? item;
      const listed = files.get(row) ?? [];
      files.set(row, listed.includes(file) ? listed : [...listed, file]);
    } else if (line !== "") {
      listing = false;
    }
  }
  return files;
}

/** The text that names a cycle: `["02", "04", "03", "02"]` is "02 is blocked by 04, 04 by 03, 03 by 02". */
function cycleProblem(cycle: string[]): string {
  const [row, blocker, ...rest] = cycle;
  const later = rest.map((next, at) => `${cycle[at + 1]} by ${next}`);
  return `cycle: ${[`${row} is blocked by ${blocker}`, ...later].join(", ")}`;
}

/** Each file that more than one task in a wave touches, in wave order, then path order. */
function sharedFiles(waves: PlannedRow[][]): ParallelWaves["sharedFiles"] {
  return waves.flatMap((rows, at) => {
    const touched = new Map<string, string[]>();
    for (const row of rows) {
      for (const file of row.files) {
        touched.set(file, [...(touched.get(file) ?? []), row.id]);
      }
    }
    return [...touched]
      .filter(([, by]) => by.length > 1)
      .toSorted(([a], [b]) => (a < b ? -1 : 1))
      .map(([file, by]) => ({ wave: at + 1, file, rows: by }));
  });
}

/** Each two phases whose tasks share a wave. A phase is the tasks its checkpoint row is blocked by. */
function overlaps(rows: readonly Row[], waves: Row[][]): ParallelWaves["overlaps"] {
  const waveOf = new Map(waves.flatMap((wave, at) => wave.map((row) => [row.id, at + 1] as const)));
  const tasks = new Set(rows.filter((row) => row.type === "task").map((row) => row.id));
  const phases = rows
    .filter((row) => row.type === "checkpoint" && row.status !== "superseded")
    .map((checkpoint) => ({
      id: checkpoint.id,
      waves: new Set(
        checkpoint.blockedBy.filter((id) => tasks.has(id)).flatMap((id) => waveOf.get(id) ?? []),
      ),
    }));
  return phases.flatMap((phase, at) =>
    phases.slice(at + 1).flatMap((later) => {
      const shared = [...phase.waves]
        .filter((wave) => later.waves.has(wave))
        .toSorted((a, b) => a - b);
      return shared.length === 0
        ? []
        : [{ phases: [phase.id, later.id] as [string, string], waves: shared }];
    }),
  );
}

/**
 * Work out the waves of a plan from the text of its `tasks/plan.md` and `tasks/todo.md`. Returns
 * the problems instead, one line each, when the rows break the table format, a blocker names no
 * row, the blocked-by edges hold a cycle, or a superseded row blocks a row still to do.
 */
export function parallelWaves(
  planText: string,
  todoText: string,
): ParallelWaves | { problems: string[] } {
  const { rows, problems } = readRows("plan", planText);
  if (problems.length > 0) {
    return { problems };
  }
  const cycle = findCycle(rows);
  if (cycle !== null) {
    return { problems: [cycleProblem(cycle)] };
  }
  const { waves, stuck } = layWaves(rows);
  if (stuck.length > 0) {
    return {
      problems: stuck.map(
        ({ row, blocker }) =>
          `row ${row.id}: blocked by ${blocker.id}, which is superseded by ${blocker.supersededBy}`,
      ),
    };
  }
  const files = filesByRow(todoText);
  const planned = waves.map((wave) =>
    wave.map(({ id, title, type, status }) => ({
      id,
      title,
      type,
      status,
      files: files.get(id) ?? [],
    })),
  );
  return {
    waves: planned.map((wave, at) => ({ wave: at + 1, rows: wave })),
    criticalPath: criticalPath(rows, waves).map((row) => row.id),
    sharedFiles: sharedFiles(planned),
    overlaps: overlaps(rows, waves),
  };
}

function counted(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

/**
 * The waves as Markdown: the text a plan's "Parallel waves" section holds, line for line. It
 * names rows by number and marks checkpoints, and leaves statuses out.
 */
export function renderParallelWaves(parallel: ParallelWaves): string {
  if (parallel.waves.length === 0) {
    return "No open rows: every row is resolved or superseded.\n";
  }
  const lines = ["| Wave | Rows |", "|---|---|"];
  for (const { wave, rows } of parallel.waves) {
    const named = rows.map(({ id, type }) => (type === "checkpoint" ? `${id} (checkpoint)` : id));
    lines.push(`| ${wave} | ${named.join(", ")} |`);
  }
  const chain = parallel.criticalPath;
  lines.push(
    "",
    `Critical path, ${counted(chain.length, "row", "rows")}: ${chain.join(", ")}.`,
    "",
  );
  const files = "Files that more than one task in a wave touches";
  if (parallel.sharedFiles.length === 0) {
    lines.push(`${files}: none.`);
  } else {
    lines.push(`${files}:`);
    for (const { wave, file, rows } of parallel.sharedFiles) {
      lines.push(`- Wave ${wave}: \`${file}\` (${rows.join(", ")})`);
    }
  }
  lines.push("");
  if (parallel.overlaps.length === 0) {
    lines.push("Phases that share a wave: none.");
  } else {
    lines.push("Phases that share a wave, each named by its checkpoint row:");
    for (const { phases, waves } of parallel.overlaps) {
      const shared = waves.length === 1 ? "wave" : "waves";
      lines.push(`- ${phases[0]} and ${phases[1]}: ${shared} ${waves.join(", ")}`);
    }
  }
  return lines.map((line) => `${line}\n`).join("");
}

/** The tasks in a wave. A checkpoint is not a task: the main session runs it, not a sub-agent. */
function taskCount(rows: readonly PlannedRow[]): number {
  return rows.filter((row) => row.type === "task").length;
}

/** How many of a wave's tasks start at once: every task, up to the cap. */
function startAtOnce(rows: readonly PlannedRow[], cap: number): number {
  return Math.min(taskCount(rows), cap);
}

const capSources = {
  default: "the default",
  max_parallel: `max_parallel in ${configFile}`,
  BRAIN_MAX_PARALLEL: "BRAIN_MAX_PARALLEL",
} as const;

/** The cap and where it comes from, then how many of each wave's tasks start at once, as text. */
function renderCap(parallel: ParallelWaves, config: WorkspaceConfig): string {
  const cap = counted(config.maxParallel, "task", "tasks");
  const lines = ["", `Cap: ${cap} at once (${capSources[config.maxParallelFrom]}).`];
  if (parallel.waves.length > 0) {
    lines.push("", "Tasks that start at once, by wave:");
  }
  for (const { wave, rows } of parallel.waves) {
    const tasks = taskCount(rows);
    const start = startAtOnce(rows, config.maxParallel);
    lines.push(`- Wave ${wave}: ${tasks === 0 ? "no task" : `${start} of ${tasks}`}`);
  }
  return lines.map((line) => `${line}\n`).join("");
}

/** The spec folder to read: the one `arg` names, else the active effort; or why there is none. */
async function specFolder(
  cwd: string,
  root: string,
  paths: Paths,
  arg: string | undefined,
): Promise<{ folder: string } | { error: string }> {
  const ask = "name the spec to plan";
  let folder: string;
  if (arg === undefined) {
    const active = await activeEffort(root, paths);
    if ("none" in active) {
      return { error: `no active effort; ${ask}` };
    }
    if ("several" in active) {
      const ids = active.several.map((effort) => effort.id).join(", ");
      return { error: `several efforts are not finished: ${ids}; ${ask}` };
    }
    if (active.effort.kind === "idea") {
      return {
        error: `the active effort is ${active.effort.id}, an idea, which has no plan; ${ask}`,
      };
    }
    folder = path.join(root, active.effort.path);
  } else if (/^SPEC-\d{3}$/u.test(arg)) {
    const efforts = await listEfforts(root, paths);
    const specs = efforts.filter((effort) => effort.kind === "spec" && effort.id === arg);
    const [spec] = specs;
    if (spec === undefined) {
      return { error: `no spec ${arg} in ${paths.specs}` };
    }
    if (specs.length > 1) {
      const where = specs.map((effort) => effort.path).join(", ");
      return { error: `${arg} names more than one spec folder (${where}); name the folder` };
    }
    folder = path.join(root, spec.path);
  } else {
    const full = path.resolve(cwd, arg);
    // A path to the plan itself names its spec folder, two folders up.
    const isPlan =
      path.basename(full) === "plan.md" && path.basename(path.dirname(full)) === "tasks";
    folder = isPlan ? path.dirname(path.dirname(full)) : full;
  }
  const found = await Bun.file(path.join(folder, "tasks", "plan.md")).exists();
  return found ? { folder } : { error: `no tasks/plan.md in ${arg}` };
}

/** Run `brain plan [<spec>] [--json]` and return the exit code. */
export async function plan(args: string[]): Promise<number> {
  const json = args.includes("--json");
  const specs = args.filter((arg) => arg !== "--json");
  if (specs.length > 1 || specs.some((arg) => arg.startsWith("-"))) {
    console.error(usage);
    return 2;
  }
  try {
    const cwd = await realpath(process.cwd());
    const repo = await findRepo(cwd);
    const config = await readConfig(repo.root);
    const chosen = await specFolder(cwd, repo.root, config.paths, specs[0]);
    if ("error" in chosen) {
      console.error(chosen.error);
      console.error(usage);
      return 2;
    }
    const planFile = path.join(chosen.folder, "tasks", "plan.md");
    const todoFile = Bun.file(path.join(chosen.folder, "tasks", "todo.md"));
    const todo = (await todoFile.exists()) ? await todoFile.text() : "";
    const result = parallelWaves(await Bun.file(planFile).text(), todo);
    const shown = path.relative(cwd, planFile);
    if ("problems" in result) {
      for (const problem of result.problems) {
        console.error(`${shown}: ${problem}`);
      }
      return 1;
    }
    if (!json) {
      await Bun.write(Bun.stdout, renderParallelWaves(result) + renderCap(result, config));
      return 0;
    }
    const { maxParallel, maxParallelFrom } = config;
    const waves = result.waves.map((wave) => ({
      ...wave,
      startAtOnce: startAtOnce(wave.rows, maxParallel),
    }));
    const data = { plan: shown, maxParallel, maxParallelFrom, ...result, waves };
    await Bun.write(Bun.stdout, `${JSON.stringify(data, null, 2)}\n`);
    return 0;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }
}
