/**
 * Render each source text into each host's every-turn files.
 *
 *   bun run plain-talk:render            write the outputs
 *   bun run plain-talk:render -- --check exit 1 if any output differs from a fresh render
 *
 * Each source text has its own targets, of two kinds. A template target is a whole generated
 * file. A block target is a file that carries one generated block between the markers of the
 * block's name; the block is one of the same source's template targets. The file can be
 * hand-written, or another source's template target: the block then goes after that source's
 * text. Every output is composed in memory first, then written once.
 */
import { mkdir } from "node:fs/promises";

import { readIfPresent } from "../lib/files";
import { blockName, replaceBlock } from "./block";

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
  {
    // The brain protocol. Claude Code gets it from the session-start hook, which reads the
    // source text itself; setup-brain writes the block into the Codex AGENTS.md.
    path: "protocol/PROTOCOL.md",
    targets: [
      { template: "plain-talk/templates/protocol-rule.md", out: "rules/protocol.md" },
      { template: "plain-talk/templates/protocol-block.md", out: "protocol/AGENTS-block.md" },
    ],
    blockTargets: [{ block: "protocol/AGENTS-block.md", into: "GEMINI.md" }],
  },
];

const slot = "{{body}}";

export function render(template: string, body: string, name = "template"): string {
  if (!template.includes(slot)) {
    throw new Error(`${name} has no ${slot} slot`);
  }
  return `${template.replace(slot, body.trimEnd()).trimEnd()}\n`;
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

/** Throws when two template targets write one file, since each render would undo the other. */
function assertOneWriterPerFile(list: readonly Source[]): void {
  const writer = new Map<string, string>();
  for (const source of list) {
    for (const { out } of source.targets) {
      const first = writer.get(out);
      if (first !== undefined) {
        throw new Error(`${out} is written from both ${first} and ${source.path}`);
      }
      writer.set(out, source.path);
    }
  }
}

/** Every output path once, in the order the source list first names it. */
function outputOrder(list: readonly Source[]): string[] {
  const seen = new Set<string>();
  for (const source of list) {
    for (const target of source.targets) {
      seen.add(target.out);
    }
    for (const target of source.blockTargets) {
      seen.add(target.into);
    }
  }
  return [...seen];
}

/** One source's template targets, rendered from its body: output path to text. */
async function renderTargets(root: string, source: Source): Promise<Map<string, string>> {
  const body = await Bun.file(`${root}/${source.path}`).text();
  const rendered = new Map<string, string>();
  for (const target of source.targets) {
    const template = await Bun.file(`${root}/${target.template}`).text();
    rendered.set(target.out, render(template, body, target.template));
  }
  return rendered;
}

/**
 * The fresh text of every output: each template target first, then each block put into its
 * file, which is a template target's fresh text or else the file on disk. Throws when a file
 * would take two blocks of one name, since the second would undo the first.
 */
async function composeOutputs(root: string, list: readonly Source[]): Promise<Map<string, string>> {
  const perSource = await Promise.all(list.map((source) => renderTargets(root, source)));
  const next = new Map(perSource.flatMap((rendered) => [...rendered]));
  const blockSource = new Map<string, string>();
  for (const [index, source] of list.entries()) {
    for (const target of source.blockTargets) {
      const block = perSource[index]?.get(target.block);
      if (block === undefined) {
        throw new Error(
          `${target.into} takes its block from ${target.block}, which is not a target of ${source.path}`,
        );
      }
      const name = blockName(block, target.into);
      const first = blockSource.get(`${target.into}\n${name}`);
      if (first !== undefined) {
        throw new Error(
          `${target.into} takes two blocks named ${name}, from ${first} and ${source.path}`,
        );
      }
      blockSource.set(`${target.into}\n${name}`, source.path);
      const current =
        next.get(target.into) ?? (await readIfPresent(`${root}/${target.into}`)) ?? "";
      next.set(target.into, replaceBlock(current, block, target.into));
    }
  }
  return next;
}

/** Returns every output that differs from a fresh render. Writes them unless `check`. */
export async function renderAll(
  root: string,
  list: readonly Source[],
  check: boolean,
): Promise<string[]> {
  assertOneWriterPerFile(list);
  const next = await composeOutputs(root, list);
  const changed: string[] = [];
  for (const out of outputOrder(list)) {
    if (await settle(root, out, next.get(out) as string, check)) {
      changed.push(out);
    }
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
