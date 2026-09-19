/** upstream.lock.json: what sync wrote, and where each seeded path came from. */

export type LockEntry = { upstream: string; sha256: string };
export type SeedEntry = { upstream: string; seededAt: string };
export type Lock = { files: Record<string, LockEntry>; seeds: Record<string, SeedEntry> };

export function emptyLock(): Lock {
  return { files: {}, seeds: {} };
}

export async function readLock(path: string): Promise<Lock> {
  const file = Bun.file(path);
  if (!(await file.exists())) return emptyLock();
  const raw = (await file.json()) as Partial<Lock>;
  return { files: raw.files ?? {}, seeds: raw.seeds ?? {} };
}

/** Writes with sorted keys so the diff of an update is only what changed. */
export async function writeLock(path: string, lock: Lock): Promise<void> {
  const sorted = (o: Record<string, unknown>) => Object.fromEntries(Object.entries(o).sort(([a], [b]) => (a < b ? -1 : 1)));
  await Bun.write(path, JSON.stringify({ files: sorted(lock.files), seeds: sorted(lock.seeds) }, null, 2) + "\n");
}

/** Every locked path that belongs to `upstream`. */
export function lockedPaths(lock: Lock, upstream: string): string[] {
  return Object.entries(lock.files)
    .filter(([, entry]) => entry.upstream === upstream)
    .map(([path]) => path);
}
