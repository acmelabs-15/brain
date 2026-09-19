import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { mkdtemp, rm, mkdir, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

import { applyUpstream, sha256 } from "../lib/apply";
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

const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-apply-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("applyUpstream", () => {
  test("writes every planned file, the licence, and a lock entry per file", async () => {
    const v1 = await tree("v1", {
      "skills/a/SKILL.md": "a1\n",
      "skills/b/SKILL.md": "b1\n",
      LICENSE: "MIT\n",
    });
    const root = `${work}/brain1`;
    await mkdir(root, { recursive: true });
    const lock = emptyLock();
    const units = await planUnits("addy", [{ from: "skills", to: "skills" }], v1);
    const result = await applyUpstream({
      name: "addy",
      units,
      tree: v1,
      license: "LICENSE",
      lock,
      root,
    });
    expect(await Bun.file(`${root}/skills/a/SKILL.md`).text()).toBe("a1\n");
    expect(await Bun.file(`${root}/licenses/addy.LICENSE`).text()).toBe("MIT\n");
    expect(lock.files["skills/a/SKILL.md"]).toEqual({ upstream: "addy", sha256: sha256("a1\n") });
    expect(lock.files["licenses/addy.LICENSE"]?.upstream).toBe("addy");
    expect(result.written.toSorted()).toEqual([
      "licenses/addy.LICENSE",
      "skills/a/SKILL.md",
      "skills/b/SKILL.md",
    ]);
    expect(result.deleted).toEqual([]);
  });

  test("a second apply updates changed files, adds new ones, deletes dropped ones, and leaves brain-owned files alone", async () => {
    const v1 = await tree("v1b", { "skills/a/SKILL.md": "a1\n", "skills/b/SKILL.md": "b1\n" });
    const v2 = await tree("v2b", { "skills/a/SKILL.md": "a2\n", "skills/c/SKILL.md": "c1\n" });
    const root = `${work}/brain2`;
    await mkdir(`${root}/skills/own`, { recursive: true });
    await Bun.write(`${root}/skills/own/SKILL.md`, "mine\n");
    const lock = emptyLock();
    await applyUpstream({
      name: "addy",
      units: await planUnits("addy", [{ from: "skills", to: "skills" }], v1),
      tree: v1,
      lock,
      root,
    });
    const result = await applyUpstream({
      name: "addy",
      units: await planUnits("addy", [{ from: "skills", to: "skills" }], v2),
      tree: v2,
      lock,
      root,
    });
    expect(await Bun.file(`${root}/skills/a/SKILL.md`).text()).toBe("a2\n");
    expect(await Bun.file(`${root}/skills/c/SKILL.md`).text()).toBe("c1\n");
    expect(await exists(`${root}/skills/b`)).toBe(false);
    expect(await Bun.file(`${root}/skills/own/SKILL.md`).text()).toBe("mine\n");
    expect(result.deleted).toEqual(["skills/b/SKILL.md"]);
    expect(Object.keys(lock.files).toSorted()).toEqual(["skills/a/SKILL.md", "skills/c/SKILL.md"]);
  });

  test("touches nothing of another upstream", async () => {
    const addy = await tree("addy3", { "skills/a/SKILL.md": "a\n" });
    const matt = await tree("matt3", { "eng/dm/SKILL.md": "dm\n" });
    const root = `${work}/brain3`;
    await mkdir(root, { recursive: true });
    const lock = emptyLock();
    await applyUpstream({
      name: "addy",
      units: await planUnits("addy", [{ from: "skills", to: "skills" }], addy),
      tree: addy,
      lock,
      root,
    });
    await applyUpstream({
      name: "matt",
      units: await planUnits("matt", [{ from: "eng/dm", to: "skills/domain-modeling" }], matt),
      tree: matt,
      lock,
      root,
    });
    const empty = await tree("addy3-empty", { "skills/.keep": "" });
    await rm(`${empty}/skills/.keep`);
    await applyUpstream({
      name: "addy",
      units: await planUnits("addy", [{ from: "skills", to: "skills" }], empty),
      tree: empty,
      lock,
      root,
    });
    expect(await exists(`${root}/skills/a`)).toBe(false);
    expect(await Bun.file(`${root}/skills/domain-modeling/SKILL.md`).text()).toBe("dm\n");
    expect(Object.keys(lock.files)).toEqual(["skills/domain-modeling/SKILL.md"]);
  });
});
