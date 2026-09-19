import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { mkdtemp, rm, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";

import { applyUpstream } from "../lib/apply";
import { checkTree } from "../lib/check";
import { emptyLock } from "../lib/lock";
import { planUnits } from "../lib/plan";

let work: string;

async function tree(name: string, files: Record<string, string>): Promise<string> {
  const root = `${work}/${name}`;
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-check-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

async function synced(name: string) {
  const up = await tree(`${name}-up`, {
    "skills/a/SKILL.md": "a\n",
    "skills/a/ref.md": "r\n",
    "references/x.md": "x\n",
  });
  const root = `${work}/${name}-brain`;
  await mkdir(`${root}/skills/own`, { recursive: true });
  await Bun.write(`${root}/skills/own/SKILL.md`, "mine\n");
  const lock = emptyLock();
  const units = await planUnits(
    "addy",
    [
      { from: "skills", to: "skills" },
      { from: "references", to: "references" },
    ],
    up,
  );
  await applyUpstream({ name: "addy", units, tree: up, lock, root });
  return { root, lock };
}

describe("checkTree", () => {
  test("a clean tree has no drift", async () => {
    const { root, lock } = await synced("clean");
    expect(await checkTree(root, lock)).toEqual([]);
  });

  test("an edited vendored file is changed", async () => {
    const { root, lock } = await synced("edited");
    await Bun.write(`${root}/skills/a/SKILL.md`, "edited\n");
    expect(await checkTree(root, lock)).toEqual([{ kind: "changed", path: "skills/a/SKILL.md" }]);
  });

  test("a deleted vendored file is missing", async () => {
    const { root, lock } = await synced("deleted");
    await rm(`${root}/references/x.md`);
    expect(await checkTree(root, lock)).toEqual([{ kind: "missing", path: "references/x.md" }]);
  });

  test("an extra file inside a vendored directory is unlisted", async () => {
    const { root, lock } = await synced("extra");
    await Bun.write(`${root}/skills/a/SYNC.md`, "provenance\n");
    expect(await checkTree(root, lock)).toEqual([{ kind: "unlisted", path: "skills/a/SYNC.md" }]);
  });

  test("a brain-owned file beside vendored file units is not drift", async () => {
    const { root, lock } = await synced("beside");
    await Bun.write(`${root}/references/mine.md`, "mine\n");
    expect(await checkTree(root, lock)).toEqual([]);
  });

  test("findings come sorted by path", async () => {
    const { root, lock } = await synced("sorted");
    await Bun.write(`${root}/skills/a/ref.md`, "z\n");
    await rm(`${root}/references/x.md`);
    const drift = await checkTree(root, lock);
    expect(drift.map((d) => d.path)).toEqual(["references/x.md", "skills/a/ref.md"]);
  });
});
