/** Seeded paths: copied from an upstream once, then owned and edited by brain. */
import { mkdir, readdir, stat } from "node:fs/promises";

import type { Mapping, Upstream } from "./config";
import type { Lock } from "./lock";

type SeedFile = { from: string; target: string };

function exists(path: string): Promise<boolean> {
  return stat(path).then(
    () => true,
    () => false,
  );
}

/** Every file under the seed mappings, as upstream-relative `from` and brain-relative `target`. */
async function seedFiles(name: string, seeds: Mapping[], tree: string): Promise<SeedFile[]> {
  const files: SeedFile[] = [];
  const walk = async (from: string, target: string): Promise<void> => {
    const source = `${tree}/${from}`;
    const info = await stat(source).catch(() => null);
    if (info === null) {
      throw new Error(
        `upstream "${name}": seed source "${from}" does not exist at the pinned commit`,
      );
    }
    if (info.isFile()) {
      files.push({ from, target });
      return;
    }
    const entries = await readdir(source);
    for (const entry of entries.toSorted()) {
      await walk(`${from}/${entry}`, `${target}/${entry}`);
    }
  };
  for (const { from, to } of seeds) {
    await walk(from, to);
  }
  return files;
}

/** Copy the seed paths once. Refuses, before any write, if a target already exists. */
export async function seedUpstream(
  name: string,
  upstream: Upstream,
  tree: string,
  lock: Lock,
  root: string,
): Promise<string[]> {
  const files = await seedFiles(name, upstream.seed, tree);
  const taken: string[] = [];
  for (const file of files) {
    if (file.target in lock.seeds || (await exists(`${root}/${file.target}`))) {
      taken.push(`upstream "${name}": "${file.target}" is already seeded; brain owns it now`);
    }
  }
  if (taken.length > 0) {
    throw new Error(taken.join("\n"));
  }
  const written: string[] = [];
  for (const file of files) {
    const bytes = new Uint8Array(await Bun.file(`${tree}/${file.from}`).arrayBuffer());
    await mkdir(`${root}/${file.target}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${file.target}`, bytes);
    lock.seeds[file.target] = { upstream: name, seededAt: upstream.sha };
    written.push(file.target);
  }
  return written;
}

/** Map a seeded brain path back to its upstream path through the seed mappings. */
export function upstreamPath(target: string, seeds: Mapping[]): string | undefined {
  for (const { from, to } of seeds) {
    if (target === to) {
      return from;
    }
    if (target.startsWith(`${to}/`)) {
      return `${from}${target.slice(to.length)}`;
    }
  }
  return undefined;
}

export type SeedChange = { target: string; diff: string };

/** For one upstream: every seeded file whose upstream text differs between its seed SHA and the pin. */
export async function reportChanges(
  name: string,
  upstream: Upstream,
  lock: Lock,
  treeAtSeed: (sha: string) => Promise<string>,
  treeAtPin: string,
): Promise<SeedChange[]> {
  const changes: SeedChange[] = [];
  const seeded = Object.entries(lock.seeds).filter(([, entry]) => entry.upstream === name);
  const oldTrees = new Map<string, string>();
  for (const [target, entry] of seeded) {
    if (entry.seededAt === upstream.sha) {
      continue;
    }
    const from = upstreamPath(target, upstream.seed);
    if (from === undefined) {
      continue;
    }
    let oldTree = oldTrees.get(entry.seededAt);
    if (oldTree === undefined) {
      oldTree = await treeAtSeed(entry.seededAt);
      oldTrees.set(entry.seededAt, oldTree);
    }
    const before = `${oldTree}/${from}`;
    const after = `${treeAtPin}/${from}`;
    const [oldText, newText] = await Promise.all([
      Bun.file(before)
        .text()
        .catch(() => ""),
      Bun.file(after)
        .text()
        .catch(() => ""),
    ]);
    if (oldText === newText) {
      continue;
    }
    const diff = Bun.spawn(
      [
        "diff",
        "-u",
        "--label",
        `${target}@${entry.seededAt.slice(0, 7)}`,
        "--label",
        `${target}@${upstream.sha.slice(0, 7)}`,
        before,
        after,
      ],
      { stdout: "pipe" },
    );
    changes.push({ target, diff: await new Response(diff.stdout).text() });
  }
  return changes;
}
