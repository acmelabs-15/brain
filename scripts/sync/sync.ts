/**
 * brain upstream sync.
 *
 *   bun run sync                  fetch every pin, write vendored files, rewrite the lock
 *   bun run sync -- --check       compare the tree to the lock; exit 1 on drift
 *   bun run sync -- --only <name> sync one upstream
 *   bun run sync -- --seed <name> copy the seeded paths of one upstream, once
 *   bun run sync -- --report      for every seeded path, the upstream diff since its seed
 *   bun run sync -- --root <dir>  brain root (default: the current directory)
 *
 * Exit codes: 0 clean, 1 drift or a sync error, 2 bad usage.
 * BRAIN_SYNC_TARBALL overrides the tarball URL template; {repo} and {sha} are replaced.
 */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { applyUpstream } from "./lib/apply";
import { checkTree } from "./lib/check";
import { loadConfig } from "./lib/config";
import type { Upstream } from "./lib/config";
import { fetchTree, tarballUrl } from "./lib/fetch";
import { readLock, writeLock } from "./lib/lock";
import { findCollisions, planUnits } from "./lib/plan";
import type { Unit } from "./lib/plan";
import { reportChanges, seedUpstream } from "./lib/seed";

type Args = { root: string; check: boolean; report: boolean; only?: string; seed?: string };

class UsageError extends Error {
  override name = "UsageError";
}

function parseArgs(argv: string[]): Args {
  const args: Args = { root: process.cwd(), check: false, report: false };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    if (flag === "--report") {
      args.report = true;
    } else if (flag === "--check") {
      args.check = true;
    } else if (flag === "--only" || flag === "--root" || flag === "--seed") {
      const value = argv[i + 1];
      if (value === undefined) {
        throw new UsageError(`${flag} needs a value`);
      }
      if (flag === "--seed") {
        args.seed = value;
      } else if (flag === "--only") {
        args.only = value;
      } else {
        args.root = value;
      }
      i += 1;
    } else {
      throw new UsageError(`unknown flag ${flag}`);
    }
  }
  return args;
}

function resolveUrl(repo: string, sha: string): string {
  const template = process.env.BRAIN_SYNC_TARBALL;
  if (template === undefined) {
    return tarballUrl(repo, sha);
  }
  return template.replace("{repo}", repo).replace("{sha}", sha);
}

async function runCheck(root: string): Promise<number> {
  const lock = await readLock(`${root}/upstream.lock.json`);
  const drift = await checkTree(root, lock);
  for (const d of drift) {
    console.log(`${d.kind.padEnd(8)} ${d.path}`);
  }
  if (drift.length === 0) {
    console.log(`clean: ${Object.keys(lock.files).length} vendored files match the lock`);
    return 0;
  }
  console.log(`${drift.length} file(s) drift from the lock`);
  return 1;
}

async function runSync(root: string, only?: string): Promise<number> {
  const config = await loadConfig(`${root}/upstream.json`);
  const lockPath = `${root}/upstream.lock.json`;
  const lock = await readLock(lockPath);
  const selected = Object.entries(config.upstreams).filter(
    ([name]) => only === undefined || name === only,
  );
  if (only !== undefined && selected.length === 0) {
    throw new Error(`upstream "${only}" is not in upstream.json`);
  }
  const work = await mkdtemp(`${tmpdir()}/brain-sync-`);
  try {
    // Plan everything first, so a collision anywhere stops before any write.
    const planned: { name: string; upstream: Upstream; tree: string; units: Unit[] }[] = [];
    for (const [name, upstream] of selected) {
      const tree = await fetchTree(resolveUrl(upstream.repo, upstream.sha), `${work}/${name}`);
      const units = await planUnits(name, upstream.take, tree);
      const collisions = await findCollisions(units, lock, root);
      for (const target of collisions) {
        console.error(`upstream "${name}": target "${target}" exists and is not vendored from it`);
      }
      if (collisions.length > 0) {
        return 1;
      }
      planned.push({ name, upstream, tree, units });
    }
    for (const { name, upstream, tree, units } of planned) {
      const result = await applyUpstream({
        name,
        units,
        tree,
        lock,
        root,
        ...(upstream.license === undefined ? {} : { license: upstream.license }),
      });
      console.log(
        `${name}: ${result.written.length} written, ${result.deleted.length} deleted at ${upstream.sha.slice(0, 7)}`,
      );
    }
    await writeLock(lockPath, lock);
    return 0;
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

async function runSeed(root: string, name: string): Promise<number> {
  const config = await loadConfig(`${root}/upstream.json`);
  const upstream = config.upstreams[name];
  if (upstream === undefined) {
    throw new Error(`upstream "${name}" is not in upstream.json`);
  }
  const lockPath = `${root}/upstream.lock.json`;
  const lock = await readLock(lockPath);
  const work = await mkdtemp(`${tmpdir()}/brain-seed-`);
  try {
    const tree = await fetchTree(resolveUrl(upstream.repo, upstream.sha), `${work}/${name}`);
    const result = await seedUpstream(name, upstream, tree, lock, root);
    await writeLock(lockPath, lock);
    for (const target of result.skipped) {
      console.log(`already seeded, skipped  ${target}`);
    }
    console.log(
      `${name}: ${result.written.length} seeded at ${upstream.sha.slice(0, 7)}; brain owns them now`,
    );
    return 0;
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

async function runReport(root: string): Promise<number> {
  const config = await loadConfig(`${root}/upstream.json`);
  const lock = await readLock(`${root}/upstream.lock.json`);
  const work = await mkdtemp(`${tmpdir()}/brain-report-`);
  let count = 0;
  try {
    for (const [name, upstream] of Object.entries(config.upstreams)) {
      const hasSeeds = Object.values(lock.seeds).some((entry) => entry.upstream === name);
      if (!hasSeeds) {
        continue;
      }
      const treeAtPin = await fetchTree(
        resolveUrl(upstream.repo, upstream.sha),
        `${work}/${name}-pin`,
      );
      const treeAtSeed = (sha: string) =>
        fetchTree(resolveUrl(upstream.repo, sha), `${work}/${name}-${sha}`);
      const changes = await reportChanges(name, upstream, lock, treeAtSeed, treeAtPin);
      for (const change of changes) {
        console.log(`changed  ${change.target}`);
        console.log(change.diff);
        count += 1;
      }
    }
  } finally {
    await rm(work, { recursive: true, force: true });
  }
  if (count === 0) {
    console.log("no seeded file changed upstream since it was seeded");
  }
  return 0;
}

async function main(): Promise<number> {
  let args: Args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error((error as Error).message);
    return 2;
  }
  try {
    if (args.check) {
      return await runCheck(args.root);
    }
    if (args.report) {
      return await runReport(args.root);
    }
    if (args.seed !== undefined) {
      return await runSeed(args.root, args.seed);
    }
    return await runSync(args.root, args.only);
  } catch (error) {
    console.error((error as Error).message);
    return 1;
  }
}

process.exit(await main());
