/**
 * File helpers that brain's scripts share: list a folder, read a file that may be absent, and
 * test for a folder. An absent path gives an empty answer, never an error.
 */
import type { Dirent } from "node:fs";
import { readdir, stat } from "node:fs/promises";

/** The names of the entries directly in `folder` that `keep` accepts, sorted; none when it is absent. */
async function entryNames(folder: string, keep: (entry: Dirent) => boolean): Promise<string[]> {
  const entries = await readdir(folder, { withFileTypes: true }).catch(() => []);
  return entries
    .filter(keep)
    .map((entry) => entry.name)
    .toSorted();
}

/** The names of the files directly in `folder`, sorted; none when it is absent. A symlink is left out. */
export function fileNames(folder: string): Promise<string[]> {
  return entryNames(folder, (entry) => entry.isFile());
}

/** The names of the folders directly in `folder`, sorted; none when it is absent. A symlink is left out. */
export function folderNames(folder: string): Promise<string[]> {
  return entryNames(folder, (entry) => entry.isDirectory());
}

/** The text of the file at `path`, or null when there is none. */
export async function readIfPresent(path: string): Promise<string | null> {
  const file = Bun.file(path);
  return (await file.exists()) ? file.text() : null;
}

/** True when `path` is a folder, or a symlink to one; false when it is absent. */
export function isDirectory(path: string): Promise<boolean> {
  return stat(path).then(
    (found) => found.isDirectory(),
    () => false,
  );
}
