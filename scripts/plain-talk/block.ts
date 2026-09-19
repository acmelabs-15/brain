/**
 * The plain-talk block between its two markers, inside a file that other text also lives in.
 * Shared by the renderer (brain's own AGENTS.md) and the setup writer (the Codex global AGENTS.md).
 */

export const startMarker = "<!-- brain:plain-talk:start -->";
export const endMarker = "<!-- brain:plain-talk:end -->";

/** Insert `block` between the markers, or append it after one blank line. Text outside the markers is kept. */
export function replaceBlock(text: string, block: string, fileName: string): string {
  const from = text.indexOf(startMarker);
  const to = text.indexOf(endMarker);
  if (from === -1 && to === -1) {
    return text.trim() === "" ? block : `${text.trimEnd()}\n\n${block}`;
  }
  if (from === -1 || to === -1 || to < from) {
    throw new Error(
      `${fileName} has a start marker without an end marker, or the markers are out of order`,
    );
  }
  const after = text.slice(to + endMarker.length).replace(/^\n/u, "");
  return `${text.slice(0, from)}${block}${after}`;
}
