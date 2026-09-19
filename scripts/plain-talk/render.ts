/**
 * Render the plain-talk source text into each host's every-turn file.
 *
 *   bun run plain-talk:render            write the outputs
 *   bun run plain-talk:render -- --check exit 1 if any output differs from a fresh render
 */
import { mkdir } from "node:fs/promises";

export type Target = { template: string; out: string };

export const source = "plain-talk/PLAIN-TALK.md";

export const targets: readonly Target[] = [
  { template: "plain-talk/templates/output-style.md", out: "output-styles/talk-plain.md" },
  { template: "plain-talk/templates/gemini.md", out: "GEMINI.md" },
  { template: "plain-talk/templates/agents-block.md", out: "plain-talk/AGENTS-block.md" },
];

const slot = "{{body}}";

export function render(template: string, body: string, name = "template"): string {
  if (!template.includes(slot)) {
    throw new Error(`${name} has no ${slot} slot`);
  }
  return `${template.replace(slot, body.trimEnd()).trimEnd()}\n`;
}

/** Returns the targets that differ from a fresh render. Writes them unless `check`. */
export async function renderAll(
  root: string,
  sourcePath: string,
  list: readonly Target[],
  check: boolean,
): Promise<string[]> {
  const body = await Bun.file(`${root}/${sourcePath}`).text();
  const changed: string[] = [];
  for (const target of list) {
    const template = await Bun.file(`${root}/${target.template}`).text();
    const rendered = render(template, body, target.template);
    const outFile = Bun.file(`${root}/${target.out}`);
    const current = (await outFile.exists()) ? await outFile.text() : null;
    if (current === rendered) {
      continue;
    }
    changed.push(target.out);
    if (!check) {
      await mkdir(`${root}/${target.out}`.replace(/\/[^/]+$/u, ""), { recursive: true });
      await Bun.write(outFile, rendered);
    }
  }
  return changed;
}

if (import.meta.main) {
  const check = process.argv.includes("--check");
  const changed = await renderAll(process.cwd(), source, targets, check);
  for (const out of changed) {
    console.log(`${check ? "drift  " : "written"} ${out}`);
  }
  if (check && changed.length > 0) {
    console.log(`${changed.length} output(s) differ from the source text`);
    process.exit(1);
  }
  if (changed.length === 0) {
    console.log("every output matches the source text");
  }
}
