/**
 * The graph of a plan's rows: each row points to the rows that block it. This module holds the
 * graph logic that `brain plan` and the plan checks share: a cycle of blocked-by edges, the
 * waves, the critical path, and the rows a row waits on. A row still to do is open or in
 * progress; a resolved row is done, and a superseded row drops out.
 */
import type { Row } from "./map";

/** The rows still to do, put in order: each wave, and the rows that can never start. */
export type Waves = {
  /** Each wave is the frontier once the waves above it are done; rows keep their table order. */
  waves: Row[][];
  /** Each row still to do that a superseded row blocks, so it never reaches a wave. */
  stuck: { row: Row; blocker: Row }[];
};

/** Whether a row is still to do: open, or in progress. */
export function stillToDo(row: Row): boolean {
  return row.status === "open" || row.status === "in-progress";
}

/**
 * One cycle of blocked-by edges, as row numbers from a row through its blockers back to itself
 * (`["02", "04", "03", "02"]`: 02 is blocked by 04, 04 by 03, 03 by 02); null when there is
 * none. Every row and every edge counts, whatever its status.
 */
export function findCycle(rows: readonly Row[]): string[] | null {
  const blockers = new Map(rows.map((row) => [row.id, row.blockedBy]));
  const finished = new Set<string>();
  const path: string[] = [];
  const visit = (id: string): string[] | null => {
    if (finished.has(id)) {
      return null;
    }
    const at = path.indexOf(id);
    if (at !== -1) {
      return [...path.slice(at), id];
    }
    path.push(id);
    for (const blocker of blockers.get(id) ?? []) {
      const cycle = visit(blocker);
      if (cycle !== null) {
        return cycle;
      }
    }
    path.pop();
    finished.add(id);
    return null;
  };
  for (const row of rows) {
    const cycle = visit(row.id);
    if (cycle !== null) {
      return cycle;
    }
  }
  return null;
}

/**
 * The numbers of the rows that block `row`, directly or through other rows. A path steps only
 * onto rows that `through` accepts, so `(other) => other.type === "task"` gives the tasks `row`
 * depends on through tasks alone. A blocker that names no row is left out; a cycle ends.
 */
export function blockersOf(
  rows: readonly Row[],
  row: Row,
  through: (other: Row) => boolean = () => true,
): Set<string> {
  const byId = new Map(rows.map((other) => [other.id, other]));
  const found = new Set<string>();
  const next = [row];
  for (let current = next.pop(); current !== undefined; current = next.pop()) {
    for (const blocker of current.blockedBy.flatMap((id) => byId.get(id) ?? [])) {
      if (!found.has(blocker.id) && through(blocker)) {
        found.add(blocker.id);
        next.push(blocker);
      }
    }
  }
  return found;
}

/**
 * Put the rows still to do into waves: wave 1 is every row whose blockers are all resolved, and
 * each later wave is every row whose blockers are resolved or in a wave above it. Call it only
 * on rows with no cycle.
 */
export function layWaves(rows: readonly Row[]): Waves {
  const resolved = new Set(rows.filter((row) => row.status === "resolved").map((row) => row.id));
  const placed = new Set<string>();
  const waves: Row[][] = [];
  let pending = rows.filter(stillToDo);
  while (pending.length > 0) {
    const ready = pending.filter((row) =>
      row.blockedBy.every((blocker) => resolved.has(blocker) || placed.has(blocker)),
    );
    if (ready.length === 0) {
      break;
    }
    for (const row of ready) {
      placed.add(row.id);
    }
    waves.push(ready);
    pending = pending.filter((row) => !placed.has(row.id));
  }
  const byId = new Map(rows.map((row) => [row.id, row]));
  const stuck = pending.flatMap((row) =>
    row.blockedBy
      .map((id) => byId.get(id))
      .filter((blocker): blocker is Row => blocker?.status === "superseded")
      .map((blocker) => ({ row, blocker })),
  );
  return { waves, stuck };
}

/**
 * The critical path: the longest chain of rows still to do, one row from each wave, each row
 * blocked by the one before it. On a tie, the first row in table order.
 */
export function criticalPath(rows: readonly Row[], waves: readonly Row[][]): Row[] {
  const waveOf = new Map(waves.flatMap((wave, at) => wave.map((row) => [row.id, at] as const)));
  let current = waves.at(-1)?.[0];
  const path: Row[] = [];
  while (current !== undefined) {
    path.unshift(current);
    const { blockedBy } = current;
    const above = (waveOf.get(current.id) ?? 0) - 1;
    // A row in wave n > 1 has a blocker in wave n - 1, or it would sit in an earlier wave.
    current = rows.find((row) => blockedBy.includes(row.id) && waveOf.get(row.id) === above);
  }
  return path;
}
