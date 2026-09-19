import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { endMarker, startMarker } from "../block";
import { blockTargets, render, renderAll, targets as realTargets } from "../render";
import type { BlockTarget, Target } from "../render";

let work: string;

const body = "Line one.\n\n## Part\n\n- item\n";
const targets: readonly Target[] = [
  { template: "templates/a.md", out: "out/a.md" },
  { template: "templates/b.md", out: "b.md" },
  { template: "templates/c.md", out: "out/deep/c.md" },
];
const blocks: readonly BlockTarget[] = [{ block: "out/deep/c.md", into: "AGENTS.md" }];

async function fixture(name: string, agents?: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(`${root}/templates`, { recursive: true });
  await Bun.write(`${root}/SOURCE.md`, body);
  await Bun.write(`${root}/templates/a.md`, "---\nname: a\n---\n\n{{body}}\n");
  await Bun.write(`${root}/templates/b.md`, "# b\n\n{{body}}\n");
  await Bun.write(`${root}/templates/c.md`, `${startMarker}\n{{body}}\n${endMarker}\n`);
  if (agents !== undefined) {
    await Bun.write(`${root}/AGENTS.md`, agents);
  }
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-render-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("render", () => {
  test("puts the trimmed body where the slot is and ends with one newline", () => {
    expect(render("# h\n\n{{body}}\n", "x\n\n")).toBe("# h\n\nx\n");
  });

  test("a template without the slot is an error naming it", () => {
    expect(() => render("no slot\n", "x", "templates/z.md")).toThrow(
      "templates/z.md has no {{body}} slot",
    );
  });
});

describe("renderAll", () => {
  test("writes every target, creating folders, and the body is byte-identical in all", async () => {
    const root = await fixture("write");
    const changed = await renderAll(root, "SOURCE.md", targets, [], false);
    expect(changed.toSorted()).toEqual(["b.md", "out/a.md", "out/deep/c.md"]);
    const a = await Bun.file(`${root}/out/a.md`).text();
    const b = await Bun.file(`${root}/b.md`).text();
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    const trimmed = body.trimEnd();
    expect(a).toContain(trimmed);
    expect(b).toContain(trimmed);
    expect(c).toContain(trimmed);
    expect(a.startsWith("---\nname: a\n---\n\n")).toBe(true);
  });

  test("check mode lists drift and writes nothing; clean after a render", async () => {
    const root = await fixture("check");
    const drift = await renderAll(root, "SOURCE.md", targets, [], true);
    expect(drift).toHaveLength(3);
    await renderAll(root, "SOURCE.md", targets, [], false);
    expect(await renderAll(root, "SOURCE.md", targets, [], true)).toEqual([]);
    await Bun.write(`${root}/b.md`, "edited\n");
    expect(await renderAll(root, "SOURCE.md", targets, [], true)).toEqual(["b.md"]);
    expect(await Bun.file(`${root}/b.md`).text()).toBe("edited\n");
  });

  test("a second render is byte-identical", async () => {
    const root = await fixture("stable");
    await renderAll(root, "SOURCE.md", targets, [], false);
    const first = await Bun.file(`${root}/out/a.md`).text();
    await renderAll(root, "SOURCE.md", targets, [], false);
    expect(await Bun.file(`${root}/out/a.md`).text()).toBe(first);
  });
});

describe("renderAll, block targets", () => {
  test("the block lands between the markers of a hand-written file, text outside kept", async () => {
    const root = await fixture(
      "block",
      `# Repo rules\n\nKeep.\n\n${startMarker}\nold\n${endMarker}\n\nTail.\n`,
    );
    const changed = await renderAll(root, "SOURCE.md", targets, blocks, false);
    expect(changed).toContain("AGENTS.md");
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      `# Repo rules\n\nKeep.\n\n${c}\nTail.\n`,
    );
  });

  test("a file without markers gets the block appended; a missing file is created", async () => {
    const root = await fixture("block-append", "# Repo rules\n");
    await renderAll(root, "SOURCE.md", targets, blocks, false);
    const c = await Bun.file(`${root}/out/deep/c.md`).text();
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(`# Repo rules\n\n${c}`);
    const missing = await fixture("block-missing");
    await renderAll(missing, "SOURCE.md", targets, blocks, false);
    expect(await Bun.file(`${missing}/AGENTS.md`).text()).toBe(c);
  });

  test("check mode reports an edited block as drift and leaves the file alone", async () => {
    const root = await fixture("block-check", "# Repo rules\n");
    await renderAll(root, "SOURCE.md", targets, blocks, false);
    expect(await renderAll(root, "SOURCE.md", targets, blocks, true)).toEqual([]);
    const edited = `# Repo rules\n\n${startMarker}\nedited\n${endMarker}\n`;
    await Bun.write(`${root}/AGENTS.md`, edited);
    expect(await renderAll(root, "SOURCE.md", targets, blocks, true)).toEqual(["AGENTS.md"]);
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(edited);
  });

  test("the block is taken from the fresh render, so an edited output does not leak into the file", async () => {
    const root = await fixture("block-fresh", "# Repo rules\n");
    await renderAll(root, "SOURCE.md", targets, blocks, false);
    await Bun.write(`${root}/out/deep/c.md`, `${startMarker}\nstale\n${endMarker}\n`);
    const drift = await renderAll(root, "SOURCE.md", targets, blocks, true);
    expect(drift).toEqual(["out/deep/c.md"]);
  });
});

describe("the real target lists", () => {
  test("four host outputs, and the block goes into brain's own AGENTS.md", () => {
    expect(realTargets.map((t) => t.out)).toEqual([
      "output-styles/talk-plain.md",
      "GEMINI.md",
      "rules/talk-plain.md",
      "plain-talk/AGENTS-block.md",
    ]);
    expect(blockTargets).toEqual([{ block: "plain-talk/AGENTS-block.md", into: "AGENTS.md" }]);
  });
});
