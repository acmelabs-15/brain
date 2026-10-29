/**
 * Render each source text into each host's every-turn files.
 *
 *   bun run plain-talk:render            write the outputs
 *   bun run plain-talk:render -- --check exit 1 if any output differs from a fresh render
 *
 * Each source text has its own targets, of two kinds. A template target is a whole generated
 * file. A block target is a hand-written file that carries one generated block between the
 * plain-talk markers; the block is one of the same source's template targets.
 */
import { mkdir } from "node:fs/promises";

import { replaceBlock } from "./block";

export type Target = { template: string; out: string };
export type BlockTarget = { block: string; into: string };
export type Source = {
  path: string;
  targets: readonly Target[];
  blockTargets: readonly BlockTarget[];
};

export const sources: readonly Source[] = [
  {
    path: "plain-talk/PLAIN-TALK.md",
    targets: [
      { template: "plain-talk/templates/output-style.md", out: "output-styles/talk-plain.md" },
      { template: "plain-talk/templates/gemini.md", out: "GEMINI.md" },
      { template: "plain-talk/templates/antigravity-rule.md", out: "rules/talk-plain.md" },
      { template: "plain-talk/templates/agents-block.md", out: "plain-talk/AGENTS-block.md" },
    ],
    blockTargets: [{ block: "plain-talk/AGENTS-block.md", into: "AGENTS.md" }],
  },
];

const slot = "{{body}}";

export function render(template: string, body: string, name = "template"): string {
  if (!template.includes(slot)) {
    throw new Error(`${name} has no ${slot} slot`);
  }
  return `${template.replace(slot, body.trimEnd()).trimEnd()}\n`;
}

async function readIfPresent(path: string): Promise<string | null> {
  const file = Bun.file(path);
  return (await file.exists()) ? file.text() : null;
}

/** Write `next` to `path` unless it already holds it. Returns whether it differed. */
async function settle(root: string, path: string, next: string, check: boolean): Promise<boolean> {
  const full = `${root}/${path}`;
  if ((await readIfPresent(full)) === next) {
    return false;
  }
  if (!check) {
    await mkdir(full.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(full, next);
  }
  return true;
}

/** Throws when two targets write one file, since each render would undo the other. */
function assertOneWriterPerFile(list: readonly Source[]): void {
  const writer = new Map<string, string>();
  for (const source of list) {
    const outputs = [
      ...source.targets.map((target) => target.out),
      ...source.blockTargets.map((target) => target.into),
    ];
    for (const out of outputs) {
      const first = writer.get(out);
      if (first !== undefined) {
        throw new Error(`${out} is written from both ${first} and ${source.path}`);
      }
      writer.set(out, source.path);
    }
  }
}

/** Returns the targets of one source that differ from a fresh render. Writes them unless `check`. */
async function renderSource(root: string, source: Source, check: boolean): Promise<string[]> {
  const body = await Bun.file(`${root}/${source.path}`).text();
  const rendered = new Map<string, string>();
  const changed: string[] = [];
  for (const target of source.targets) {
    const template = await Bun.file(`${root}/${target.template}`).text();
    const text = render(template, body, target.template);
    rendered.set(target.out, text);
    if (await settle(root, target.out, text, check)) {
      changed.push(target.out);
    }
  }
  for (const target of source.blockTargets) {
    const block = rendered.get(target.block);
    if (block === undefined) {
      throw new Error(
        `${target.into} takes its block from ${target.block}, which is not a target of ${source.path}`,
      );
    }
    const current = (await readIfPresent(`${root}/${target.into}`)) ?? "";
    if (await settle(root, target.into, replaceBlock(current, block, target.into), check)) {
      changed.push(target.into);
    }
  }
  return changed;
}

/** Returns every source's targets that differ from a fresh render. Writes them unless `check`. */
export async function renderAll(
  root: string,
  list: readonly Source[],
  check: boolean,
): Promise<string[]> {
  assertOneWriterPerFile(list);
  const changed: string[] = [];
  for (const source of list) {
    changed.push(...(await renderSource(root, source, check)));
  }
  return changed;
}

if (import.meta.main) {
  const check = process.argv.includes("--check");
  const changed = await renderAll(process.cwd(), sources, check);
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
