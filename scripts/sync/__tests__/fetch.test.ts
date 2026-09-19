import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { mkdtemp, rm, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { fetchTree, tarballUrl } from "../lib/fetch";

const sha = "0123456789abcdef0123456789abcdef01234567";
let work: string;
let tarball: string;

/** Build a tarball shaped like GitHub's: one top folder named <repo>-<sha>. */
beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-fetch-`);
  const top = `${work}/src/agent-skills-${sha}`;
  await mkdir(`${top}/skills/tdd`, { recursive: true });
  await Bun.write(`${top}/skills/tdd/SKILL.md`, "---\nname: tdd\n---\n");
  await Bun.write(`${top}/LICENSE`, "MIT\n");
  tarball = `${work}/fixture.tar.gz`;
  const tar = Bun.spawn(["tar", "-czf", tarball, "-C", `${work}/src`, `agent-skills-${sha}`]);
  await tar.exited;
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("tarballUrl", () => {
  test("points at GitHub's codeload for a repo and sha", () => {
    expect(tarballUrl("addyosmani/agent-skills", sha)).toBe(
      `https://codeload.github.com/addyosmani/agent-skills/tar.gz/${sha}`,
    );
  });
});

describe("fetchTree", () => {
  test("downloads and extracts, returning the repo root with the top folder stripped", async () => {
    const dest = `${work}/out1`;
    const root = await fetchTree(`file://${tarball}`, dest);
    expect(await Bun.file(`${root}/skills/tdd/SKILL.md`).text()).toBe("---\nname: tdd\n---\n");
    expect(await Bun.file(`${root}/LICENSE`).text()).toBe("MIT\n");
  });

  test("a missing tarball is an error naming the url", async () => {
    const url = `file://${work}/nope.tar.gz`;
    await expect(fetchTree(url, `${work}/out2`)).rejects.toThrow(`fetch failed for ${url}`);
  });
});
