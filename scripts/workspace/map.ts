/**
 * The rows of a map or a plan, which share one table format: an idea's map holds its design
 * tree, and a spec's `tasks/plan.md` holds its task graph. Each row has a two-digit number local
 * to its file, a question or task, a type, a status, the rows that block it, and a result. The
 * frontier is worked out from the rows each time, never written down.
 */
import { rowStatus, tables } from "./schema";

/** Which table a file holds: a map (an idea) or a plan (a spec's `tasks/plan.md`). */
export type Table = keyof typeof tables;

export type Row = {
  /** The row's number, local to its file: `03`. Other files cite it as `IDEA-004#03`. */
  id: string;
  /** The question of a map row, or the task of a plan row. */
  title: string;
  type: string;
  status: "open" | "in-progress" | "resolved" | "superseded";
  /** The row that replaced this one, when the status is `superseded by NN`; else null. */
  supersededBy: string | null;
  /** The rows that block this one; none when the cell is `—`. */
  blockedBy: string[];
  /** The result cell as written; empty when it is `—`. */
  result: string;
};

export type Rows = {
  /** Every row that follows the format, in table order. */
  rows: Row[];
  /** One line per problem, each naming its row (`row 07: ...`) or the table. */
  problems: string[];
};

/** The cell values that mean "nothing here". */
const empty = new Set(["", "—", "-"]);
const rowNumber = /^\d{2}$/u;

function show(value: string): string {
  return JSON.stringify(value);
}

function listed(items: readonly string[]): string {
  return `${items.slice(0, -1).join(", ")} or ${items.at(-1)}`;
}

/** The cells of a Markdown table line, or null when the line is not one. */
function cells(line: string): string[] | null {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|")) {
    return null;
  }
  const inner =
    trimmed.length > 1 && trimmed.endsWith("|") ? trimmed.slice(1, -1) : trimmed.slice(1);
  // A cell may hold an escaped pipe, `\|`, as Markdown allows.
  return inner.split(/(?<!\\)\|/u).map((cell) => cell.trim());
}

/** The lines below the header of the first table whose header is `columns`; null when none is. */
function tableLines(text: string, columns: readonly string[]): string[][] | null {
  const lines = text.split("\n");
  const start = lines.findIndex((line) => {
    const header = cells(line);
    return header?.length === columns.length && header.every((cell, at) => cell === columns[at]);
  });
  if (start === -1) {
    return null;
  }
  const found: string[][] = [];
  for (const [at, line] of lines.slice(start + 1).entries()) {
    const row = cells(line);
    if (row === null) {
      break;
    }
    const delimiter = row.every((cell) => /^:?-+:?$/u.test(cell));
    if (!(at === 0 && delimiter)) {
      found.push(row);
    }
  }
  return found;
}

/** One table line as a row, or the problems that keep it from being one. */
function readRow(table: Table, line: string[]): { row: Row } | { problems: string[] } {
  const { columns, types } = tables[table];
  const [id = "", title = "", type = "", status = "", blockedBy = "", result = ""] = line;
  if (!rowNumber.test(id)) {
    return { problems: [`row ${show(id)}: the number is not two digits`] };
  }
  if (line.length !== columns.length) {
    return { problems: [`row ${id}: ${line.length} cells, not ${columns.length}`] };
  }
  const problems: string[] = [];
  if (!(types as readonly string[]).includes(type)) {
    problems.push(`row ${id}: type ${show(type)} is not ${listed(types)}`);
  }
  if (!rowStatus.test(status)) {
    problems.push(
      `row ${id}: status ${show(status)} is not open, in-progress, resolved or superseded by NN`,
    );
  }
  const blockers = empty.has(blockedBy) ? [] : blockedBy.split(",").map((cell) => cell.trim());
  for (const blocker of blockers.filter((cell) => !rowNumber.test(cell))) {
    problems.push(`row ${id}: blocked by ${show(blocker)} is not a two-digit row number`);
  }
  if (problems.length > 0) {
    return { problems };
  }
  const supersededBy = /^superseded by (?<by>\d{2})$/u.exec(status)?.groups?.by ?? null;
  return {
    row: {
      id,
      title,
      type,
      status: supersededBy === null ? (status as Row["status"]) : "superseded",
      supersededBy,
      blockedBy: blockers,
      result: empty.has(result) ? "" : result,
    },
  };
}

/**
 * Read the rows of the map or plan table in a file's text: the first table whose header is the
 * table's columns. A row that breaks the format is left out of `rows` and named in `problems`,
 * as is a `blocked by` or `superseded by` that names no row in the same table.
 */
export function readRows(table: Table, text: string): Rows {
  const { columns } = tables[table];
  const lines = tableLines(text, columns);
  if (lines === null) {
    return { rows: [], problems: [`${table}: no table with the columns ${columns.join(" | ")}`] };
  }
  const rows: Row[] = [];
  const problems: string[] = [];
  // Every row number in the table, a malformed row's too, so a reference to it is not dangling.
  const numbers = new Set<string>();
  for (const line of lines) {
    const id = line[0] ?? "";
    if (numbers.has(id)) {
      problems.push(`row ${id}: an earlier row has the same number`);
      continue;
    }
    if (rowNumber.test(id)) {
      numbers.add(id);
    }
    const read = readRow(table, line);
    if ("row" in read) {
      rows.push(read.row);
    } else {
      problems.push(...read.problems);
    }
  }
  for (const row of rows) {
    for (const blocker of row.blockedBy.filter((other) => !numbers.has(other))) {
      problems.push(`row ${row.id}: blocked by ${blocker}, which is not a row in this ${table}`);
    }
    if (row.supersededBy !== null && !numbers.has(row.supersededBy)) {
      problems.push(
        `row ${row.id}: superseded by ${row.supersededBy}, which is not a row in this ${table}`,
      );
    }
  }
  return { rows, problems };
}

/** The frontier: every open row whose blocking rows are all resolved, in table order. */
export function frontier(rows: readonly Row[]): Row[] {
  const resolved = new Set(rows.filter((row) => row.status === "resolved").map((row) => row.id));
  return rows.filter(
    (row) => row.status === "open" && row.blockedBy.every((blocker) => resolved.has(blocker)),
  );
}
