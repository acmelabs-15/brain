/**
 * A generated block between its two markers, inside a file that other text also lives in.
 * Shared by the renderer (brain's own AGENTS.md, GEMINI.md) and the setup writer (the Codex
 * AGENTS.md). Each block has a name, and its markers carry it, so blocks of different names
 * live side by side in one file: plain talk and the brain protocol in the Codex file.
 */

export type Markers = { start: string; end: string };

/** The start and end markers of the block named `name`. */
export function markersFor(name: string): Markers {
  return { start: `<!-- brain:${name}:start -->`, end: `<!-- brain:${name}:end -->` };
}

export const { start: startMarker, end: endMarker } = markersFor("plain-talk");

const markerLine = /^<!-- brain:(?<name>[a-z0-9-]+):(?<edge>start|end) -->$/u;

/** The name of a block, read from its first and last lines, which must be the markers of one name. */
export function blockName(block: string, fileName: string): string {
  const lines = block.trim().split("\n");
  const first = markerLine.exec(lines[0] ?? "")?.groups;
  const last = markerLine.exec(lines.at(-1) ?? "")?.groups;
  if (
    lines.length < 2 ||
    first?.edge !== "start" ||
    last?.edge !== "end" ||
    first.name !== last.name
  ) {
    throw new Error(
      `the block for ${fileName} does not open and close with the markers of one name`,
    );
  }
  return first.name as string;
}

/**
 * Insert `block` between the markers it opens and closes with, or append it after one blank
 * line. Text outside those markers, other blocks included, is kept.
 */
export function replaceBlock(text: string, block: string, fileName: string): string {
  const { start, end } = markersFor(blockName(block, fileName));
  const from = text.indexOf(start);
  const to = text.indexOf(end);
  if (from === -1 && to === -1) {
    return text.trim() === "" ? block : `${text.trimEnd()}\n\n${block}`;
  }
  if (from === -1 || to === -1 || to < from) {
    throw new Error(
      `${fileName} has a start marker without an end marker, or the markers are out of order`,
    );
  }
  const after = text.slice(to + end.length).replace(/^\n/u, "");
  return `${text.slice(0, from)}${block}${after}`;
}
