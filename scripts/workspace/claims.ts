/**
 * Claims: one agent's hold on the next free number of a type, so that no two agents take the
 * same number. A claim is the folder `<claims>/ids/<TYPE>/<NNN>`. `mkdir` without `recursive`
 * fails when the folder exists, so only one process wins each number; the loser tries the
 * next. Claims are never removed, so a number is never given out twice, even when its file
 * is deleted.
 */
import { mkdir, readdir } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";

import type { Repo } from "./config";

/** The highest number a three-digit ID can hold. */
const last = 999;

function hasCode(error: unknown, code: string): boolean {
  return error instanceof Error && (error as Error & { code?: unknown }).code === code;
}

/** The names in `folder`, or none when the folder does not exist. */
async function namesIn(folder: string): Promise<string[]> {
  try {
    return await readdir(folder);
  } catch (error) {
    if (hasCode(error, "ENOENT")) {
      return [];
    }
    throw error;
  }
}

/**
 * Return the folder that holds a repo's claims: `brain` in git's common folder, which every
 * worktree shares. Outside git, a folder for the repo's root in the user's cache directory,
 * named for the root's last part and a hash of its full path.
 */
export function claimsFolder(repo: Repo): string {
  if (repo.gitCommonDir !== null) {
    return `${repo.gitCommonDir}/brain`;
  }
  const xdg = process.env.XDG_CACHE_HOME;
  // The XDG base directory spec says to ignore a relative path.
  const cache = xdg !== undefined && path.isAbsolute(xdg) ? xdg : `${homedir()}/.cache`;
  const hash = new Bun.CryptoHasher("sha256").update(repo.root).digest("hex").slice(0, 12);
  return `${cache}/brain/${path.basename(repo.root)}-${hash}`;
}

/**
 * Claim the next free number of `type`: one above the highest file or folder of the type in
 * `files`, and above every number already claimed in `claims`. Return the number claimed.
 */
export async function claim(claims: string, type: string, files: string): Promise<number> {
  const pattern = new RegExp(`^${type}-(?<number>\\d{3})(?!\\d)`, "u");
  const fileNames = await namesIn(files);
  const existing = fileNames.map((name) => Number(pattern.exec(name)?.groups?.number ?? 0));
  const folder = `${claims}/ids/${type}`;
  await mkdir(folder, { recursive: true });
  const claimNames = await namesIn(folder);
  const claimed = claimNames.filter((name) => /^\d{3}$/u.test(name)).map(Number);
  for (let next = Math.max(0, ...existing, ...claimed) + 1; next <= last; next += 1) {
    try {
      await mkdir(`${folder}/${String(next).padStart(3, "0")}`);
      return next;
    } catch (error) {
      if (!hasCode(error, "EEXIST")) {
        throw error;
      }
    }
  }
  throw new Error(`no free ${type} number: ${type}-${last} is the last one`);
}
