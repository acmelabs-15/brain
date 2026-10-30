import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import { fileNames, folderNames, isDirectory, readIfPresent } from "../files";

let root: string;

beforeAll(async () => {
  root = await mkdtemp(`${tmpdir()}/brain-lib-files-`);
  await Bun.write(`${root}/b.md`, "b\n");
  await Bun.write(`${root}/a.md`, "a\n");
  await mkdir(`${root}/sub`);
  await mkdir(`${root}/other`);
  await symlink("a.md", `${root}/link.md`);
  await symlink("sub", `${root}/link-folder`);
});

afterAll(async () => {
  await rm(root, { recursive: true, force: true });
});

describe("fileNames", () => {
  test("names the files directly in the folder, sorted, without folders or symlinks", async () => {
    expect(await fileNames(root)).toEqual(["a.md", "b.md"]);
  });

  test("names none for an absent folder", async () => {
    expect(await fileNames(`${root}/absent`)).toEqual([]);
  });
});

describe("folderNames", () => {
  test("names the folders directly in the folder, sorted, without files or symlinks", async () => {
    expect(await folderNames(root)).toEqual(["other", "sub"]);
  });

  test("names none for an absent folder", async () => {
    expect(await folderNames(`${root}/absent`)).toEqual([]);
  });
});

describe("readIfPresent", () => {
  test("gives the text of a file", async () => {
    expect(await readIfPresent(`${root}/a.md`)).toBe("a\n");
  });

  test("gives null for an absent file", async () => {
    expect(await readIfPresent(`${root}/absent.md`)).toBeNull();
  });
});

describe("isDirectory", () => {
  test("is true for a folder and for a symlink to one", async () => {
    expect(await isDirectory(`${root}/sub`)).toBe(true);
    expect(await isDirectory(`${root}/link-folder`)).toBe(true);
  });

  test("is false for a file and for an absent path", async () => {
    expect(await isDirectory(`${root}/a.md`)).toBe(false);
    expect(await isDirectory(`${root}/absent`)).toBe(false);
  });
});
