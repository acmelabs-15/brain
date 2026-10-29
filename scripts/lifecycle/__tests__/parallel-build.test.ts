import { describe, expect, test } from "bun:test";

/**
 * `/build auto` on both hosts and incremental-implementation carry the Decisions row "Parallel
 * build by default" in full: the frontier at once up to the cap, a reason before fewer, the
 * critical path first, a worktree from the feature branch's head with the install first, one
 * merge at a time with the gate, one writer, the rebase, the checkpoint stop, and the result file.
 * They also carry the worktree fallback (T52, Peter 2026-10-29): when the host gives no worktree,
 * the main session makes one with `git worktree add`, checks its own tree after each task, removes
 * a merged worktree and keeps a failed one.
 */
const texts = [
  ".claude/commands/build.md",
  "commands/build.toml",
  "skills/incremental-implementation/SKILL.md",
];

const root = `${import.meta.dir}/../../..`;

function read(path: string): Promise<string> {
  return Bun.file(`${root}/${path}`).text();
}

/** Each rule of the row, and a pattern that each text matches when it carries the rule. */
const rules: [string, RegExp][] = [
  ["every task on the frontier at once", /every task on the frontier at once/iu],
  ["the cap and its override", /max_parallel[\s\S]*BRAIN_MAX_PARALLEL/u],
  ["a reason before fewer, and caution is none", /"To be safe" is not a reason/u],
  ["the critical path first", /critical ?path/iu],
  ["a worktree from the feature branch's head", /feature branch's (?:current )?head/u],
  ["never main", /never (?:on )?`main`/u],
  ["the install step first", /install/u],
  ["one merge at a time", /one (?:task|merge) at a time/iu],
  ["the gate after each merge", /\bgate\b/u],
  ["one writer of plan rows and todo ticks", /only writer|only the main session writes/iu],
  ["a rebase when a merge changes what a task uses", /rebase/u],
  ["a checkpoint row stops the build", /checkpoint row on the frontier stops the build/iu],
  ["a result file named after the task", /T(?:<NN>|\d\d)-result\.md/u],
  ["a reply of the path plus one line", /path plus one line/u],
  ["the fallback makes the worktree with git", /git worktree add/u],
  ["the fallback task works only in its worktree", /[Ww]ork only in/u],
  ["the tree check after each fallback task", /git status --porcelain --untracked-files=all/u],
  [
    "a write in the main tree stops the build before any merge",
    /stops? the build, merges? nothing/u,
  ],
  [
    "a merged fallback worktree is removed, then pruned",
    /git worktree remove[\s\S]*?git worktree prune/u,
  ],
  ["a failed task keeps its worktree", /failed task keeps its worktree/iu],
  ["the report names a kept worktree's path", /names? its path/u],
];

/** The numbered steps of a text's "The worktree fallback" section, with the host's folder named alike. */
function fallbackSteps(text: string): string {
  const start = text.indexOf("## The worktree fallback\n");
  expect(start).toBeGreaterThan(-1);
  const next = text.indexOf("\n## ", start + 1);
  const section = text.slice(start, next === -1 ? undefined : next);
  const steps = section.slice(section.indexOf("\n1. ") + 1);
  return steps.replaceAll(/\.(?:claude|gemini)\/worktrees/gu, "<worktrees>").trim();
}

describe("the parallel build rule", () => {
  for (const path of texts) {
    for (const [rule, pattern] of rules) {
      test(`${path}: ${rule}`, async () => {
        expect(await read(path)).toMatch(pattern);
      });
    }
  }

  test(".claude/commands/build.md starts each task with a worktree and brings it to the branch head", async () => {
    const text = await read(".claude/commands/build.md");
    expect(text).toContain('isolation: "worktree"');
    expect(text).toContain("git merge --ff-only <feature branch>");
    expect(text).toContain("https://code.claude.com/docs/en/worktrees#choose-the-base-branch");
  });

  test("commands/build.toml says how Gemini CLI runs a task without a subagent worktree, and cites the docs", async () => {
    const text = await read("commands/build.toml");
    expect(text).toContain("Gemini CLI gives a subagent no worktree of its own");
    expect(text).toContain(
      "git worktree add -b build/T<NN> .gemini/worktrees/T<NN> <feature branch>",
    );
    expect(text).toContain("https://geminicli.com/docs/core/subagents/");
    expect(text).toContain("https://geminicli.com/docs/cli/git-worktrees/");
  });

  test(".claude/commands/build.md falls back to a worktree of its own after the first refusal, and cites the docs", async () => {
    const text = await read(".claude/commands/build.md");
    expect(text).toContain("Cannot create agent worktree");
    expect(text).toMatch(/first refusal/u);
    expect(text).toContain(
      "git worktree add -b build/T<NN> .claude/worktrees/T<NN> <feature branch>",
    );
    expect(text).toContain("git status --porcelain --untracked-files=all -- ':!.claude/worktrees'");
    expect(text).toContain("https://code.claude.com/docs/en/worktrees#troubleshooting");
    expect(text).toContain("https://code.claude.com/docs/en/sub-agents#write-subagent-files");
    expect(text).toContain(
      "https://code.claude.com/docs/en/worktrees#clean-up-subagent-and-background-session-worktrees",
    );
  });

  test("commands/build.toml runs every task through the worktree fallback", async () => {
    const text = await read("commands/build.toml");
    expect(text).toContain("git status --porcelain --untracked-files=all -- ':!.gemini/worktrees'");
  });

  test("Claude and Gemini share one worktree fallback: the same steps, each in its host's folder", async () => {
    const claude = fallbackSteps(await read(".claude/commands/build.md"));
    const gemini = fallbackSteps(await read("commands/build.toml"));
    expect(claude).toMatch(/^1\. /u);
    expect(gemini).toBe(claude);
  });

  test("skills/incremental-implementation/SKILL.md starts the fallback after the first refusal", async () => {
    expect(await read("skills/incremental-implementation/SKILL.md")).toMatch(/first refusal/u);
  });

  test("the Decisions row on worktree sub-agents carries Peter's dated amendment", async () => {
    const intent = await read("docs/intent/workspace-and-stateful-interview.md");
    const row = intent
      .split("\n")
      .find((line) => line.startsWith("| Worktree sub-agents for the build;"));
    expect(row).toMatch(/Amended 2026-10-29/u);
    expect(row).toMatch(/git worktree add/u);
    expect(row).toMatch(/git worktree prune/u);
    expect(row).toMatch(/Peter, 2026-10-29/u);
  });
});
