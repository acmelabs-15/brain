/** Markdown tables, as brain's maps, plans and router write them. */

/**
 * The cells of a Markdown table line, each trimmed; null when the line is not a table line. A
 * cell may hold an escaped pipe, `\|`, as Markdown allows; it stays in the cell as written.
 */
export function tableCells(line: string): string[] | null {
  const text = line.trim();
  if (!text.startsWith("|")) {
    return null;
  }
  return text
    .slice(1)
    .replace(/(?<!\\)\|$/u, "")
    .split(/(?<!\\)\|/u)
    .map((cell) => cell.trim());
}
