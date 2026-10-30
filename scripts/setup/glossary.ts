/**
 * The glossary move: a root `CONTEXT.md` and `CONTEXT-MAP.md` go to their GLOSSARY names with
 * `git mv`, so each keeps its history. The install writes (`--rename-glossary`) and the migrate
 * mode, which puts the move in its own commit, share this plan. Per-context files that a map
 * lists stay where they are.
 */
import { git } from "../lib/git";
import { glossaryMoves } from "../workspace/old-layout";

/** One root glossary file that exists: its old name, its new name, and why it stays when it does. */
export type GlossaryMove = { from: string; to: string; stays: string | null };

function tracked(root: string, path: string): boolean {
  return git(root, "ls-files", "--error-unmatch", "--", path).ok;
}

/** Each root glossary file under `root`, with its new name and why it stays: the name is taken, or git does not track it. */
export async function planGlossaryMoves(root: string): Promise<GlossaryMove[]> {
  const planned: GlossaryMove[] = [];
  for (const [from, to] of glossaryMoves) {
    if (!(await Bun.file(`${root}/${from}`).exists())) {
      continue;
    }
    let stays: string | null = null;
    if (await Bun.file(`${root}/${to}`).exists()) {
      stays = `${to} already exists`;
    } else if (!tracked(root, from)) {
      stays = "not tracked by git; move it by hand";
    }
    planned.push({ from, to, stays });
  }
  return planned;
}
