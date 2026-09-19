/**
 * brain upstream sync.
 *
 *   bun run sync                  fetch every pin, write vendored files, rewrite the lock
 *   bun run sync -- --check       compare the tree to the lock; exit 1 on drift
 *   bun run sync -- --only <name> sync one upstream
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
import { fetchTree, tarballUrl } from "./lib/fetch";
import { readLock, writeLock } from "./lib/lock";
import { findCollisions, planUnits, type Unit } from "./lib/plan";

type Args = { root: string; check: boolean; only?: string };

function parseArgs(argv: string[]): Args {
  const args: Args = { root: process.cwd(), check: false };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    if (flag === "--check") args.check = true;
    else if (flag === "--only" || flag === "--root") {
      const value = argv[i + 1];
      if (value === undefined) throw new UsageError(`${flag} needs a value`);
      if (flag === "--only") args.only = value;
      else args.root = value;
      i += 1;
    } else throw new UsageError(`unknown flag ${flag}`);
  }
  return args;
}

class UsageError extends Error {}

function resolveUrl(repo: string, sha: string): string {
  const template = process.env.BRAIN_SYNC_TARBALL;
  if (template === undefined) return tarballUrl(repo, sha);
  return template.replace("{repo}", repo).replace("{sha}", sha);
}

async function runCheck(root: string): Promise<number> {
  const lock = await readLock(`${root}/upstream.lock.json`);
  const drift = await checkTree(root, lock);
  for (const d of drift) console.log(`${d.kind.padEnd(8)} ${d.path}`);
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
  const names = only === undefined ? Object.keys(config.upstreams) : [only];
  if (only !== undefined && config.upstreams[only] === undefined) {
    throw new Error(`upstream "${only}" is not in upstream.json`);
  }
  const work = await mkdtemp(`${tmpdir()}/brain-sync-`);
  try {
    // Plan everything first, so a collision anywhere stops before any write.
    const planned: { name: string; tree: string; units: Unit[] }[] = [];
    for (const name of names) {
      const upstream = config.upstreams[name]!;
      const tree = await fetchTree(resolveUrl(upstream.repo, upstream.sha), `${work}/${name}`);
      const units = await planUnits(name, upstream.take, tree);
      const collisions = await findCollisions(units, lock, root);
      for (const target of collisions) {
        console.error(`upstream "${name}": target "${target}" exists and is not vendored from it`);
      }
      if (collisions.length > 0) return 1;
      planned.push({ name, tree, units });
    }
    for (const { name, tree, units } of planned) {
      const upstream = config.upstreams[name]!;
      const result = await applyUpstream({ name, units, tree, lock, root, ...(upstream.license !== undefined ? { license: upstream.license } : {}) });
      console.log(`${name}: ${result.written.length} written, ${result.deleted.length} deleted at ${upstream.sha.slice(0, 7)}`);
    }
    await writeLock(lockPath, lock);
    return 0;
  } finally {
    await rm(work, { recursive: true, force: true });
  }
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
    return args.check ? await runCheck(args.root) : await runSync(args.root, args.only);
  } catch (error) {
    console.error((error as Error).message);
    return 1;
  }
}

process.exit(await main());
