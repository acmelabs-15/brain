import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { render, renderAll } from "../render";
import type { Target } from "../render";

let work: string;

const body = "Line one.\n\n## Part\n\n- item\n";
const targets: readonly Target[] = [
  { template: "templates/a.md", out: "out/a.md" },
  { template: "templates/b.md", out: "b.md" },
  { template: "templates/c.md", out: "out/deep/c.md" },
];

async function fixture(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(`${root}/templates`, { recursive: true });
  await Bun.write(`${root}/SOURCE.md`, body);
  await Bun.write(`${root}/templates/a.md`, "---\nname: a\n---\n\n{{body}}\n");
  await Bun.write(`${root}/templates/b.md`, "# b\n\n{{body}}\n");
  await Bun.write(`${root}/templates/c.md`, "<!-- start -->\n{{body}}\n<!-- end -->\n");
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
    const changed = await renderAll(root, "SOURCE.md", targets, false);
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
    const drift = await renderAll(root, "SOURCE.md", targets, true);
    expect(drift).toHaveLength(3);
    await renderAll(root, "SOURCE.md", targets, false);
    expect(await renderAll(root, "SOURCE.md", targets, true)).toEqual([]);
    await Bun.write(`${root}/b.md`, "edited\n");
    expect(await renderAll(root, "SOURCE.md", targets, true)).toEqual(["b.md"]);
    expect(await Bun.file(`${root}/b.md`).text()).toBe("edited\n");
  });

  test("a second render is byte-identical", async () => {
    const root = await fixture("stable");
    await renderAll(root, "SOURCE.md", targets, false);
    const first = await Bun.file(`${root}/out/a.md`).text();
    await renderAll(root, "SOURCE.md", targets, false);
    expect(await Bun.file(`${root}/out/a.md`).text()).toBe(first);
  });
});
