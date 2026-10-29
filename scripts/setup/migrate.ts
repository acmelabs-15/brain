/**
 * The setup writer's migrate mode, for a repo on brain 0.8 (`write.ts --migrate`).
 *
 * Every change is decided before the first write, so a dry run lists what a real run does.
 * A real run writes one commit of its own, which holds the migrated files and nothing else;
 * if a write or the commit fails, every file goes back to its old bytes.
 *
 * The frontmatter step gives each DEC and RES file without frontmatter, in the folders that
 * `docs/agents/workspace.md` names, only what history can tell: its ID, `migrated: 0.8`, and
 * the date of its first commit (`decided` in a DEC, `date` in a RES). Every other field stays
 * absent, and no byte below the frontmatter changes. A file git does not track, or one with
 * uncommitted changes, is skipped with the reason, so the commit holds frontmatter lines only.
 */
import { readdir } from "node:fs/promises";

import { readConfig } from "../workspace/config";
import type { Paths } from "../workspace/config";
import { readFrontmatter } from "../workspace/schema";
import type { Change, SetupInput } from "./write";

export type MigrateResult = {
  changes: Change[];
  /** The SHA of the commit a real run wrote; null after a dry run or when nothing changed. */
  commit: string | null;
};

type Write = { path: string; full: string; before: Uint8Array; after: Uint8Array };
type Step = { changes: Change[]; writes: Write[] };

const commitTitle = "chore: migrate to the brain workspace layout";
const commitBody =
  "Give each DEC and RES file without frontmatter its id, migrated: 0.8 and the date of its first commit. No byte below the frontmatter changes.";

const recordTypes = [
  { type: "DEC", folder: "decisions", dateField: "decided" },
  { type: "RES", folder: "research", dateField: "date" },
] as const satisfies readonly { type: string; folder: keyof Paths; dateField: string }[];

function git(root: string, ...args: string[]) {
  return Bun.spawnSync(["git", ...args], { cwd: root, stdout: "pipe", stderr: "pipe" });
}

/** The date of the file's first commit, following renames; null when git has none. */
function firstCommitDate(root: string, file: string): string | null {
  const log = git(root, "log", "--follow", "--diff-filter=A", "--format=%as", "--", file);
  const dates = log.exitCode === 0 ? log.stdout.toString().trim().split("\n") : [];
  return dates.findLast((date) => date !== "") ?? null;
}

/** Why the file cannot go into the commit as frontmatter only, or null when git holds it as it is. */
function skipReason(root: string, file: string): string | null {
  if (git(root, "ls-files", "--error-unmatch", "--", file).exitCode !== 0) {
    return "not tracked by git; commit it first";
  }
  if (git(root, "diff", "--quiet", "HEAD", "--", file).exitCode !== 0) {
    return "has uncommitted changes; commit them first";
  }
  return null;
}

/** The names of the files directly in `folder`, sorted; none when the folder is absent. */
async function filesIn(folder: string): Promise<string[]> {
  const entries = await readdir(folder, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .toSorted();
}

async function frontmatterStep(root: string): Promise<Step> {
  const { paths } = await readConfig(root);
  const step: Step = { changes: [], writes: [] };
  for (const { type, folder, dateField } of recordTypes) {
    const named = new RegExp(`^(?<id>${type}-\\d{3})-.+\\.md$`, "u");
    for (const name of await filesIn(`${root}/${paths[folder]}`)) {
      const id = named.exec(name)?.groups?.id;
      if (id === undefined) {
        continue;
      }
      const path = `${paths[folder]}/${name}`;
      const full = `${root}/${path}`;
      const before = await Bun.file(full).bytes();
      if (readFrontmatter(new TextDecoder().decode(before)) !== null) {
        step.changes.push({ path, action: "unchanged" });
        continue;
      }
      const reason = skipReason(root, path);
      const date = reason === null ? firstCommitDate(root, path) : null;
      if (date === null) {
        const note = reason ?? "git history has no first commit for it";
        step.changes.push({ path, action: "skipped", note });
        continue;
      }
      const head = `---\nid: ${id}\nmigrated: 0.8\n${dateField}: ${date}\n---\n`;
      const after = new Uint8Array([...new TextEncoder().encode(head), ...before]);
      step.writes.push({ path, full, before, after });
      step.changes.push({ path, action: "updated" });
    }
  }
  return step;
}

/** Run the migrate mode in `input.root`: list each change, and on a real run write one commit. */
export async function migrate(input: Pick<SetupInput, "root" | "dryRun">): Promise<MigrateResult> {
  const { changes, writes } = await frontmatterStep(input.root);
  if (input.dryRun || writes.length === 0) {
    return { changes, commit: null };
  }
  const paths = writes.map((write) => write.path);
  try {
    for (const write of writes) {
      await Bun.write(write.full, write.after);
    }
    const message = ["-m", commitTitle, "-m", commitBody];
    const commit = git(input.root, "commit", "--quiet", ...message, "--", ...paths);
    if (commit.exitCode !== 0) {
      throw new Error(`git commit failed: ${commit.stderr.toString().trim()}`);
    }
  } catch (error) {
    for (const write of writes) {
      await Bun.write(write.full, write.before);
    }
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`${reason}\nEvery file is back as it was.`, { cause: error });
  }
  return { changes, commit: git(input.root, "rev-parse", "HEAD").stdout.toString().trim() };
}
