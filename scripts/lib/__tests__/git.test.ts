import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { git } from "../git";

let root: string;

beforeAll(async () => {
  root = await mkdtemp(`${tmpdir()}/brain-lib-git-`);
  await Bun.write(`${root}/a[1].md`, "# a[1]\n");
  await Bun.write(`${root}/a1.md`, "# a1\n");
  git(root, "init", "-q");
  git(root, "add", "--", "a[1].md", "a1.md");
});

afterAll(async () => {
  await rm(root, { recursive: true, force: true });
});

describe("git", () => {
  test("reads a path with glob characters as that one file, not as a glob", () => {
    expect(git(root, "ls-files", "--", "a[1].md")).toEqual({
      ok: true,
      out: "a[1].md\n",
      error: "",
    });
  });

  test("gives back git's error text when git exits with a failure", () => {
    const run = git(root, "ls-files", "--error-unmatch", "--", "missing.md");
    expect(run.ok).toBe(false);
    expect(run.error).toContain("missing.md");
  });

  test("returns the error as data, and never throws, when git cannot start", () => {
    const run = git(`${root}/no-such-folder`, "status");
    expect(run.ok).toBe(false);
    expect(run.out).toBe("");
    expect(run.error).not.toBe("");
  });
});
