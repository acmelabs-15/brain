import { describe, expect, test } from "bun:test";

/**
 * `/build auto` on both hosts and incremental-implementation carry the Decisions row "Parallel
 * build by default" in full: the frontier at once up to the cap, a reason before fewer, the
 * critical path first, a worktree from the feature branch's head with the install first, one
 * merge at a time with the gate, one writer, the rebase, the checkpoint stop, and the result file.
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
];

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
});
