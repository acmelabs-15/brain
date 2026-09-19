/** Compare brain's tree to the lock: what changed, went missing, or crept in. */
import { readdir } from "node:fs/promises";
import { sha256 } from "./apply";
import type { Lock } from "./lock";

export type Drift =
  | { kind: "changed"; path: string }
  | { kind: "missing"; path: string }
  | { kind: "unlisted"; path: string };

/**
 * A vendored directory is the directory of a locked file whose parent chain
 * includes a directory with a SKILL.md in the lock, or the top directory unit.
 * Simpler and equivalent here: every directory that holds a locked file and sits
 * below one of the skill roots is checked for unlisted files.
 */
function vendoredDirs(lock: Lock): Set<string> {
  const dirs = new Set<string>();
  for (const path of Object.keys(lock.files)) {
    const parts = path.split("/");
    // skills/<name>/... : every directory from skills/<name> down is vendored.
    if (parts[0] === "skills" && parts.length >= 3) {
      for (let depth = 2; depth < parts.length; depth += 1) dirs.add(parts.slice(0, depth).join("/"));
    }
  }
  return dirs;
}

async function listFiles(dir: string, rel: string, out: string[]): Promise<void> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${rel}/${entry.name}`;
    if (entry.isDirectory()) await listFiles(`${dir}/${entry.name}`, path, out);
    else out.push(path);
  }
}

export async function checkTree(root: string, lock: Lock): Promise<Drift[]> {
  const drift: Drift[] = [];
  for (const [path, entry] of Object.entries(lock.files)) {
    const file = Bun.file(`${root}/${path}`);
    if (!(await file.exists())) {
      drift.push({ kind: "missing", path });
      continue;
    }
    if (sha256(new Uint8Array(await file.arrayBuffer())) !== entry.sha256) drift.push({ kind: "changed", path });
  }
  for (const dir of vendoredDirs(lock)) {
    const present: string[] = [];
    await listFiles(`${root}/${dir}`, dir, present).catch(() => undefined);
    for (const path of present) {
      if (!(path in lock.files) && path.split("/").length === dir.split("/").length + 1) {
        drift.push({ kind: "unlisted", path });
      }
    }
  }
  return drift.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}
