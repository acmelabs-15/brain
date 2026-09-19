/** Write one upstream's units into brain's tree and update the lock. */
import { mkdir, rm, readdir, rmdir } from "node:fs/promises";
import type { Lock } from "./lock";
import { expandUnit, type PlannedFile, type Unit } from "./plan";

export type ApplyInput = {
  name: string;
  units: Unit[];
  tree: string;
  license?: string;
  lock: Lock;
  root: string;
};

export type ApplyResult = { written: string[]; deleted: string[] };

export function sha256(data: string | Uint8Array): string {
  return new Bun.CryptoHasher("sha256").update(data).digest("hex");
}

/** Remove a directory and every now-empty parent, stopping at root. */
async function pruneEmptyParents(root: string, target: string): Promise<void> {
  let dir = target.split("/").slice(0, -1).join("/");
  while (dir !== "") {
    const full = `${root}/${dir}`;
    const entries = await readdir(full).catch(() => null);
    if (entries === null || entries.length > 0) return;
    await rmdir(full);
    dir = dir.split("/").slice(0, -1).join("/");
  }
}

export async function applyUpstream(input: ApplyInput): Promise<ApplyResult> {
  const { name, units, tree, license, lock, root } = input;
  const planned: PlannedFile[] = [];
  for (const unit of units) planned.push(...(await expandUnit(unit)));
  if (license !== undefined) {
    planned.push({ source: `${tree}/${license}`, target: `licenses/${name}.LICENSE` });
  }

  const before = Object.entries(lock.files)
    .filter(([, entry]) => entry.upstream === name)
    .map(([path]) => path);
  const after = new Set(planned.map((f) => f.target));

  const deleted: string[] = [];
  for (const path of before) {
    if (after.has(path)) continue;
    await rm(`${root}/${path}`, { force: true });
    await pruneEmptyParents(root, path);
    delete lock.files[path];
    deleted.push(path);
  }

  const written: string[] = [];
  for (const file of planned) {
    const bytes = new Uint8Array(await Bun.file(file.source).arrayBuffer());
    await mkdir(`${root}/${file.target}`.replace(/\/[^/]+$/, ""), { recursive: true });
    await Bun.write(`${root}/${file.target}`, bytes);
    lock.files[file.target] = { upstream: name, sha256: sha256(bytes) };
    written.push(file.target);
  }
  return { written, deleted };
}
