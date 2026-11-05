import { afterEach, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { writeSetup } from "../write";

const roots: string[] = [];
const brain = `${import.meta.dir}/../../..`;

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test("setup creates no status note and preserves a legacy note as history", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-retire-note-`);
  roots.push(root);
  const input = { root, brain, layout: "single" as const, dryRun: false, codexHome: null };
  await writeSetup(input);
  expect(await Bun.file(`${root}/docs/STATUS.md`).exists()).toBe(false);

  const note =
    "# Status\n\nNext: review the pending report.\nWaiting on the user: approve the report.\n";
  await Bun.write(`${root}/docs/STATUS.md`, note);
  const changes = await writeSetup(input);
  expect(changes).toContainEqual({
    path: "docs/STATUS.md -> docs/agents/history/STATUS.md",
    action: "moved",
  });
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).text()).toBe(note);
  expect(await Bun.file(`${root}/docs/STATUS.md`).exists()).toBe(false);
  const again = await writeSetup(input);
  expect(again.every((change) => change.action === "unchanged")).toBe(true);
});

test("a dry run leaves the legacy note in place and reports the move", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-retire-note-dry-`);
  roots.push(root);
  await Bun.write(`${root}/docs/STATUS.md`, "Next: review.\n");
  const changes = await writeSetup({
    root,
    brain,
    layout: "single",
    dryRun: true,
    codexHome: null,
  });
  expect(changes).toContainEqual({
    path: "docs/STATUS.md -> docs/agents/history/STATUS.md",
    action: "moved",
  });
  expect(await Bun.file(`${root}/docs/STATUS.md`).text()).toBe("Next: review.\n");
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).exists()).toBe(false);
});

test("different history keeps both notes and reports the collision", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-retire-note-collision-`);
  roots.push(root);
  await Bun.write(`${root}/docs/STATUS.md`, "Next: current review.\n");
  await Bun.write(`${root}/docs/agents/history/STATUS.md`, "Next: previous review.\n");
  const changes = await writeSetup({
    root,
    brain,
    layout: "single",
    dryRun: false,
    codexHome: null,
  });
  expect(changes).toContainEqual({
    path: "docs/STATUS.md",
    action: "skipped",
    note: "docs/agents/history/STATUS.md already holds different history; preserve both before retiring the note",
  });
  expect(await Bun.file(`${root}/docs/STATUS.md`).text()).toBe("Next: current review.\n");
  expect(await Bun.file(`${root}/docs/agents/history/STATUS.md`).text()).toBe(
    "Next: previous review.\n",
  );
});
