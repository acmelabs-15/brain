/** Download a repo tarball at one commit and extract it. */
import { mkdir, readdir } from "node:fs/promises";

export function tarballUrl(repo: string, sha: string): string {
  return `https://codeload.github.com/${repo}/tar.gz/${sha}`;
}

/**
 * Fetch `url` (https or file) into `dest` and extract it.
 * Returns the path of the repo root: the single top folder GitHub puts in a tarball.
 */
export async function fetchTree(url: string, dest: string): Promise<string> {
  await mkdir(dest, { recursive: true });
  const tarball = `${dest}/tarball.tar.gz`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    await Bun.write(tarball, response);
  } catch (error) {
    throw new Error(`fetch failed for ${url}: ${(error as Error).message}`, { cause: error });
  }

  const tree = `${dest}/tree`;
  await mkdir(tree, { recursive: true });
  const tar = Bun.spawn(["tar", "-xzf", tarball, "-C", tree], { stderr: "pipe" });
  if ((await tar.exited) !== 0) {
    throw new Error(`tar failed for ${url}: ${await new Response(tar.stderr).text()}`);
  }
  const entries = await readdir(tree);
  const [top] = entries;
  if (entries.length !== 1 || top === undefined) {
    throw new Error(`expected one top folder in ${url}, found ${entries.length}`);
  }
  return `${tree}/${top}`;
}
