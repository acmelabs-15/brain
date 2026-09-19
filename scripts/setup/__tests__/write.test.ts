import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

import { endMarker, startMarker, writeSetup } from "../write";

let work: string;
let brain: string;

const block = `${startMarker}\n## Talk plain\n\nBody v2.\n${endMarker}\n`;
const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

async function repo(name: string, files: Record<string, string> = {}): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-setup-`);
  brain = `${work}/brain`;
  await mkdir(`${brain}/plain-talk`, { recursive: true });
  await mkdir(`${brain}/skills/setup-brain`, { recursive: true });
  await Bun.write(`${brain}/plain-talk/AGENTS-block.md`, block);
  await Bun.write(
    `${brain}/skills/setup-brain/domain.md`,
    "# Domain docs\n\nLayout: {{layout}}.\n",
  );
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("writeSetup", () => {
  test("in an empty repo it creates AGENTS.md with the block and docs/agents/domain.md", async () => {
    const root = await repo("empty");
    const changes = await writeSetup({ brain, root, layout: "single", dryRun: false });
    expect(changes).toEqual([
      { path: "AGENTS.md", action: "created" },
      { path: "docs/agents/domain.md", action: "created" },
    ]);
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(block);
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe(
      "# Domain docs\n\nLayout: single-context.\n",
    );
    expect(await exists(`${root}/CLAUDE.md`)).toBe(false);
    expect(await exists(`${root}/GEMINI.md`)).toBe(false);
  });

  test("it keeps every line outside the markers and replaces an old block in place", async () => {
    const before = `# My repo\n\nKeep this.\n\n${startMarker}\n## Talk plain\n\nBody v1.\n${endMarker}\n\nAnd this.\n`;
    const root = await repo("existing", { "AGENTS.md": before });
    const changes = await writeSetup({ brain, root, layout: "single", dryRun: false });
    expect(changes[0]).toEqual({ path: "AGENTS.md", action: "updated" });
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(
      `# My repo\n\nKeep this.\n\n${block}\nAnd this.\n`,
    );
  });

  test("an AGENTS.md without the block gets it appended after one blank line", async () => {
    const root = await repo("append", { "AGENTS.md": "# My repo\n\nKeep this.\n" });
    await writeSetup({ brain, root, layout: "single", dryRun: false });
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(`# My repo\n\nKeep this.\n\n${block}`);
  });

  test("CLAUDE.md and GEMINI.md get an import line when present and lacking it, and are never created", async () => {
    const root = await repo("imports", {
      "CLAUDE.md": "# Claude\n",
      "GEMINI.md": "@AGENTS.md\n# Gemini\n",
    });
    const changes = await writeSetup({ brain, root, layout: "single", dryRun: false });
    expect(changes).toContainEqual({ path: "CLAUDE.md", action: "updated" });
    expect(changes).toContainEqual({ path: "GEMINI.md", action: "unchanged" });
    expect(await Bun.file(`${root}/CLAUDE.md`).text()).toBe("# Claude\n\n@AGENTS.md\n");
    expect(await Bun.file(`${root}/GEMINI.md`).text()).toBe("@AGENTS.md\n# Gemini\n");
  });

  test("a second run reports every file unchanged and writes nothing", async () => {
    const root = await repo("twice", { "CLAUDE.md": "# Claude\n" });
    await writeSetup({ brain, root, layout: "single", dryRun: false });
    const agents = await Bun.file(`${root}/AGENTS.md`).text();
    const changes = await writeSetup({ brain, root, layout: "single", dryRun: false });
    expect(changes.every((c) => c.action === "unchanged")).toBe(true);
    expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(agents);
  });

  test("dry run lists every change and writes nothing", async () => {
    const root = await repo("dry", { "CLAUDE.md": "# Claude\n" });
    const changes = await writeSetup({ brain, root, layout: "single", dryRun: true });
    expect(changes.map((c) => `${c.action} ${c.path}`)).toEqual([
      "created AGENTS.md",
      "updated CLAUDE.md",
      "created docs/agents/domain.md",
    ]);
    expect(await exists(`${root}/AGENTS.md`)).toBe(false);
    expect(await Bun.file(`${root}/CLAUDE.md`).text()).toBe("# Claude\n");
  });

  test("multi layout names the map in domain.md", async () => {
    const root = await repo("multi");
    await writeSetup({ brain, root, layout: "multi", dryRun: false });
    expect(await Bun.file(`${root}/docs/agents/domain.md`).text()).toBe(
      "# Domain docs\n\nLayout: multi-context.\n",
    );
  });

  test("a start marker without an end marker is an error naming AGENTS.md", async () => {
    const root = await repo("broken", { "AGENTS.md": `${startMarker}\nno end\n` });
    await expect(writeSetup({ brain, root, layout: "single", dryRun: false })).rejects.toThrow(
      "AGENTS.md has a start marker without an end marker",
    );
  });
});
