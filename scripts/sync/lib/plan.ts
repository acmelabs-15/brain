/** Turn take-lists into units, and check them against what brain already owns. */
import { readdir, stat } from "node:fs/promises";

import type { Mapping } from "./config";
import type { Lock } from "./lock";

/**
 * A unit is what sync copies as one thing: a skill directory or a single file.
 * `source` is absolute, inside the extracted upstream tree. `target` is relative to brain's root.
 */
export type Unit = { upstream: string; kind: "dir" | "file"; source: string; target: string };

export type PlannedFile = { source: string; target: string };

function exists(path: string): Promise<boolean> {
  return stat(path).then(
    () => true,
    () => false,
  );
}

function isDir(path: string): Promise<boolean> {
  return stat(path).then(
    (s) => s.isDirectory(),
    () => false,
  );
}

function byName(a: { name: string }, b: { name: string }): number {
  return a.name < b.name ? -1 : 1;
}

/**
 * A take of a directory that holds a SKILL.md is one directory unit at `to`.
 * A take of any other directory yields one unit per child: a directory child is a
 * directory unit, a file child is a file unit. A take of a file is one file unit.
 */
export async function planUnits(upstream: string, takes: Mapping[], tree: string): Promise<Unit[]> {
  const units: Unit[] = [];
  for (const { from, to, except = [] } of takes) {
    const source = `${tree}/${from}`;
    if (!(await exists(source))) {
      throw new Error(
        `upstream "${upstream}": take source "${from}" does not exist at the pinned commit`,
      );
    }
    if (!(await isDir(source))) {
      units.push({ upstream, kind: "file", source, target: to });
      continue;
    }
    if (await exists(`${source}/SKILL.md`)) {
      units.push({ upstream, kind: "dir", source, target: to });
      continue;
    }
    const children = await readdir(source);
    for (const skipped of except) {
      if (!children.includes(skipped)) {
        throw new Error(`upstream "${upstream}": except "${skipped}" is not a child of "${from}"`);
      }
    }
    for (const child of children.toSorted()) {
      if (except.includes(child)) {
        continue;
      }
      const childSource = `${source}/${child}`;
      const kind = (await isDir(childSource)) ? "dir" : "file";
      units.push({ upstream, kind, source: childSource, target: `${to}/${child}` });
    }
  }
  return units;
}

/** Every file a unit carries, with its target path. */
export async function expandUnit(unit: Unit): Promise<PlannedFile[]> {
  if (unit.kind === "file") {
    return [{ source: unit.source, target: unit.target }];
  }
  const files: PlannedFile[] = [];
  const walk = async (dir: string, rel: string): Promise<void> => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries.toSorted(byName)) {
      const source = `${dir}/${entry.name}`;
      const target = rel === "" ? entry.name : `${rel}/${entry.name}`;
      if (entry.isDirectory()) {
        await walk(source, target);
      } else {
        files.push({ source, target: `${unit.target}/${target}` });
      }
    }
  };
  await walk(unit.source, "");
  return files;
}

/**
 * A unit collides when its target exists in brain's tree and the lock does not
 * record it as vendored from the same upstream. Returns every colliding target.
 */
export async function findCollisions(units: Unit[], lock: Lock, root: string): Promise<string[]> {
  const collisions: string[] = [];
  for (const unit of units) {
    if (!(await exists(`${root}/${unit.target}`))) {
      continue;
    }
    const owned = Object.entries(lock.files).some(
      ([path, entry]) =>
        entry.upstream === unit.upstream &&
        (unit.kind === "file" ? path === unit.target : path.startsWith(`${unit.target}/`)),
    );
    if (!owned) {
      collisions.push(unit.target);
    }
  }
  return collisions;
}
