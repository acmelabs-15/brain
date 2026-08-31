import { describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

// The CLI end to end, in a throwaway repository: what the model (core.ts) cannot show —
// which commits the gate walks and which files it reads for them.
const TOOL = new URL("../cli.ts", import.meta.url).pathname;

function session(root: string, ...args: string[]): { code: number; out: string } {
  const r = Bun.spawnSync(["bun", TOOL, ...args], {
    cwd: root,
    env: { ...process.env, CLAUDE_PROJECT_DIR: root },
  });
  return { code: r.exitCode, out: r.stdout.toString() + r.stderr.toString() };
}

function git(root: string, ...args: string[]): string {
  const r = Bun.spawnSync(["git", ...args], { cwd: root });
  if (r.exitCode !== 0) throw new Error(`git ${args.join(" ")}: ${r.stderr.toString()}`);
  return r.stdout.toString().trim();
}

/** The live session's Goal and Narrative filled, so only the entries decide the gate. */
async function fillLive(root: string): Promise<void> {
  const live = join(root, "docs", "sessions", "SES-001-work.md");
  let text = await Bun.file(live).text();
  text = text.replace("- Goal: _(fill in)_", "- Goal: the work");
  text = text.replace(/^_\(fill in\)_ — what was asked.*$/m, "Opened for the test.");
  writeFileSync(live, text);
}

describe("an archived log (docs/sessions/archive/**) accounts for its commits", () => {
  test("a commit recorded only in an archived session file is not missing, and the file is never listed", async () => {
    const root = mkdtempSync(join(tmpdir(), "session-archive-"));
    git(root, "init", "-q", "-b", "main");
    git(root, "config", "user.email", "t@t");
    git(root, "config", "user.name", "t");
    writeFileSync(join(root, "README.md"), "# scratch\n");
    git(root, "add", "README.md");
    git(root, "commit", "-q", "-m", "chore: scaffold");
    const scaffold = git(root, "rev-parse", "--short", "HEAD");
    expect(session(root, "init").code).toBe(0);
    expect(session(root, "new", "work").code).toBe(0);
    await fillLive(root);

    // Before the archive exists the scaffold commit has no entry anywhere.
    const before = session(root, "check", "--session", "SES-001");
    expect(before.code).toBe(1);
    expect(before.out).toContain(`missing: ${scaffold}`);

    // A merged-in repository's log, keeping its own number (SES-001 again), records that commit.
    const archive = join(root, "docs", "sessions", "archive", "old-repo");
    mkdirSync(archive, { recursive: true });
    writeFileSync(
      join(archive, "SES-001-old.md"),
      `# 2026-01-01 00:00 · Old\n\n- Goal: old\n- Status: done\n- Plan: —\n- Outcome: done\n\n## Narrative\n\nOld.\n\n## Changes (one entry per commit, in order)\n\n### 2026-01-01 · chore: scaffold · ${scaffold}\n\n- Summary: the scaffold\n- Why: because\n- Files:\n  - \`README.md\` (+1/−0) — the file\n`,
    );
    const after = session(root, "check", "--session", "SES-001");
    expect(after.out).not.toContain("missing:");
    expect(after.code).toBe(0);

    // Listed, selected and appended to: only the live sessions.
    const list = session(root, "list");
    expect(list.out).toContain("SES-001  in progress  work");
    expect(list.out).not.toContain("Old");
    expect(session(root, "append").out).toContain("up to date");
  });
});

describe("a merge of unrelated histories accounts for the history it brought in", () => {
  test("the merged-in repository's commits are not missing; an ordinary merge's commits still are", async () => {
    const root = mkdtempSync(join(tmpdir(), "session-foreign-"));
    git(root, "init", "-q", "-b", "main");
    git(root, "config", "user.email", "t@t");
    git(root, "config", "user.name", "t");
    writeFileSync(join(root, "README.md"), "# ours\n");
    git(root, "add", "README.md");
    git(root, "commit", "-q", "-m", "chore: scaffold");
    const scaffold = git(root, "rev-parse", "--short", "HEAD");
    expect(session(root, "init").code).toBe(0);
    expect(session(root, "new", "work").code).toBe(0);
    await fillLive(root);
    // The scaffold gets its entry, so the live log is complete.
    const live = join(root, "docs", "sessions", "SES-001-work.md");
    writeFileSync(live, (await Bun.file(live).text()) + `\n### 2026-01-01 · chore: scaffold · ${scaffold}\n\n- Summary: s\n- Why: w\n- Files:\n  - \`README.md\` (+1/−0) — f\n`);
    expect(session(root, "check", "--session", "SES-001").code).toBe(0);

    // Another repository, with two commits of its own, merged in with its history.
    const other = mkdtempSync(join(tmpdir(), "session-foreign-other-"));
    git(other, "init", "-q", "-b", "main");
    git(other, "config", "user.email", "o@o");
    git(other, "config", "user.name", "o");
    writeFileSync(join(other, "tool.ts"), "export const x = 1;\n");
    git(other, "add", "tool.ts");
    git(other, "commit", "-q", "-m", "feat: the tool");
    writeFileSync(join(other, "tool.ts"), "export const x = 2;\n");
    git(other, "add", "tool.ts");
    git(other, "commit", "-q", "-m", "fix: two");
    git(root, "fetch", "-q", other, "main");
    git(root, "merge", "-q", "--allow-unrelated-histories", "-m", "Merge other", "FETCH_HEAD");
    const after = session(root, "check", "--session", "SES-001");
    expect(after.out).not.toContain("missing:");
    expect(after.code).toBe(0);

    // An ordinary branch merge: its commit is ours to record.
    git(root, "switch", "-q", "-c", "topic");
    writeFileSync(join(root, "topic.md"), "t\n");
    git(root, "add", "topic.md");
    git(root, "commit", "-q", "-m", "feat: topic work");
    git(root, "switch", "-q", "main");
    git(root, "merge", "-q", "--no-ff", "-m", "Merge topic", "topic");
    const branchMerge = session(root, "check", "--session", "SES-001");
    expect(branchMerge.out).toContain("missing:");
    expect(branchMerge.out).toContain("feat: topic work");
    expect(branchMerge.code).toBe(1);
  });
});
