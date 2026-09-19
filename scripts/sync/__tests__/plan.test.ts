import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { mkdtemp, rm, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { emptyLock, type Lock } from "../lib/lock";
import { planUnits, findCollisions, expandUnit, type Unit } from "../lib/plan";

let work: string;
let tree: string;

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-plan-`);
  tree = `${work}/tree`;
  for (const d of ["skills/alpha", "skills/beta/references", "references", "engineering/dm"]) {
    await mkdir(`${tree}/${d}`, { recursive: true });
  }
  await Bun.write(`${tree}/skills/alpha/SKILL.md`, "alpha\n");
  await Bun.write(`${tree}/skills/beta/SKILL.md`, "beta\n");
  await Bun.write(`${tree}/skills/beta/references/deep.md`, "deep\n");
  await Bun.write(`${tree}/references/x.md`, "x\n");
  await Bun.write(`${tree}/references/y.md`, "y\n");
  await Bun.write(`${tree}/engineering/dm/SKILL.md`, "dm\n");
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

const byTarget = (units: Unit[]) => units.map((u) => `${u.kind}:${u.target}`).sort();

describe("planUnits", () => {
  test("a take of a folder of skills yields one directory unit per child", async () => {
    const units = await planUnits("addy", [{ from: "skills", to: "skills" }], tree);
    expect(byTarget(units)).toEqual(["dir:skills/alpha", "dir:skills/beta"]);
  });

  test("a take of a flat folder yields one file unit per file", async () => {
    const units = await planUnits("addy", [{ from: "references", to: "references" }], tree);
    expect(byTarget(units)).toEqual(["file:references/x.md", "file:references/y.md"]);
  });

  test("a take of one skill directory yields one directory unit at the renamed target", async () => {
    const units = await planUnits("matt", [{ from: "engineering/dm", to: "skills/domain-modeling" }], tree);
    expect(byTarget(units)).toEqual(["dir:skills/domain-modeling"]);
  });

  test("a take of a path that does not exist upstream is an error naming it", async () => {
    await expect(planUnits("addy", [{ from: "nope", to: "skills" }], tree)).rejects.toThrow(
      'upstream "addy": take source "nope" does not exist at the pinned commit',
    );
  });
});

describe("expandUnit", () => {
  test("lists every file of a directory unit with its target path", async () => {
    const [unit] = await planUnits("addy", [{ from: "skills", to: "skills" }], tree);
    const beta = (await planUnits("addy", [{ from: "skills", to: "skills" }], tree)).find((u) => u.target === "skills/beta");
    expect(unit).toBeDefined();
    const files = await expandUnit(beta!);
    expect(files.map((f) => f.target).sort()).toEqual(["skills/beta/SKILL.md", "skills/beta/references/deep.md"]);
  });
});

describe("findCollisions", () => {
  test("a target that exists on disk and is not in the lock is a collision", async () => {
    const root = `${work}/brain1`;
    await mkdir(`${root}/skills/alpha`, { recursive: true });
    await Bun.write(`${root}/skills/alpha/SKILL.md`, "brain's own\n");
    await Bun.write(`${root}/references/x.md`, "brain's own\n");
    const units = await planUnits("addy", [{ from: "skills", to: "skills" }, { from: "references", to: "references" }], tree);
    const collisions = await findCollisions(units, emptyLock(), root);
    expect(collisions.sort()).toEqual(["references/x.md", "skills/alpha"]);
  });

  test("a target in the lock under the same upstream is not a collision", async () => {
    const root = `${work}/brain2`;
    await mkdir(`${root}/skills/alpha`, { recursive: true });
    await Bun.write(`${root}/skills/alpha/SKILL.md`, "vendored before\n");
    const lock: Lock = { files: { "skills/alpha/SKILL.md": { upstream: "addy", sha256: "0" } }, seeds: {} };
    const units = await planUnits("addy", [{ from: "skills", to: "skills" }], tree);
    expect(await findCollisions(units, lock, root)).toEqual([]);
  });

  test("a target in the lock under another upstream is a collision", async () => {
    const root = `${work}/brain3`;
    await mkdir(`${root}/skills/alpha`, { recursive: true });
    await Bun.write(`${root}/skills/alpha/SKILL.md`, "vendored from matt\n");
    const lock: Lock = { files: { "skills/alpha/SKILL.md": { upstream: "matt", sha256: "0" } }, seeds: {} };
    const units = await planUnits("addy", [{ from: "skills", to: "skills" }], tree);
    expect(await findCollisions(units, lock, root)).toEqual(["skills/alpha"]);
  });
});
