---
description: Implement tasks incrementally — build, test, verify, commit. Add "auto" to run the whole plan in one approved pass.
---

Invoke the brain:incremental-implementation skill alongside brain:test-driven-development. The stage's standing rules live in that skill: a decision that is the user's goes through the host's user-question tool, one question per call, composed with brain:ask-user-question; domain words come from `GLOSSARY.md` through `docs/agents/domain.md`; the spec and the plan live in this repo.

## The spec folder

Find the active spec through `docs/agents/workspace.md`. Read that file to its last line: `paths.specs` names the folder of specs, and "Find the active effort" says which spec is active. When the file is missing, use `docs/specs`, the default, and tell the user once to run setup-brain, which writes it. The active spec's folder holds three files:

- `spec.md`: the spec.
- `tasks/plan.md`: the row table, which holds the only status of each task. The next task is the next row on its frontier: an `open` row whose `Blocked by` rows are all `resolved`.
- `tasks/todo.md`: one block per row, under the row's number, with the task's description, acceptance criteria, verification, files likely touched and scope.

`brain` is `bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts"`. Claude Code fills in that path in this text only, so copy it from here into each command and each brief.

## Modes

- **`/build`** — implement the *next* pending task, then stop (careful, one slice at a time).
- **`/build auto`** — generate the plan if needed, get a single approval, then implement *every* task: all the tasks on the frontier at once, each in a sub-agent with a worktree of its own.

`$ARGUMENTS` selects the mode. Treat `auto` (canonical) or `all` as autonomous mode; anything else (or empty) is the default single-task mode. Note: autonomous mode runs the same test-driven loop per task. It removes the human stepping *between* tasks, and it runs side by side the tasks that need nothing from each other.

## Default: one task

Take the next row on the frontier of the spec's `tasks/plan.md`. Then:

1. Read the row's block in `tasks/todo.md`: its acceptance criteria and its verification
2. Load relevant context (existing code, patterns, types)
3. Write a failing test for the expected behavior (RED)
4. Implement the minimum code to pass the test (GREEN)
5. Run the full test suite to check for regressions
6. Run the build to verify compilation
7. Commit the code with a descriptive message, the task's files staged by name
8. Close the row (see "Close a row") and stop

## Autonomous: the whole plan (`/build auto`)

Use this once a spec exists and you want to collapse plan + build into one run. It removes the manual stepping between tasks — **not** the verification. Every task still earns a passing test and its own commit.

1. **Require a spec.** Use the active spec from "The spec folder". A README or arbitrary doc does **not** count. If no spec is active, stop and tell the user to run `/spec` first — do not invent requirements.
2. **Establish a clean baseline.** Run `git status --porcelain`. If there are uncommitted changes outside the active spec's folder (`docs/specs/SPEC-NNN-<slug>/` with the default paths: its `spec.md`, `tasks/plan.md` and `tasks/todo.md`), stop and ask the user to commit, stash, or confirm how to handle them. Autonomous per-task commits must not absorb unrelated local work, or the clean-rollback guarantee breaks.
3. **Plan if needed.** If the spec's `tasks/plan.md` holds no task row yet, only the template's placeholder row, invoke brain:planning-and-task-breakdown to write the plan.
4. **Single checkpoint.** Present the full plan and wait for an unambiguous affirmative (e.g. "approve", "go", "yes"). Treat hedged responses ("looks reasonable", "I guess") as **not** approved. This is the only human gate before the plan's own checkpoint rows — after approval, run autonomously. If you wrote the plan, commit `tasks/plan.md` and `tasks/todo.md` as a single preparatory commit now so they don't bleed into the first task's commit.
5. **Run the frontier in parallel**, as "Run the frontier" says, until no task is left on it or a checkpoint row stops the build. Each task runs in a clean context and a worktree of its own, so a long plan stays as sharp on the last task as on the first, and every merge is a clean rollback point.
6. **Stop and ask the user** (do not push through) when:
   - a test can't be made to pass, a merge conflict is more than a small overlap in a shared file, or the build breaks without an obvious fix → follow brain:debugging-and-error-recovery
   - the spec is ambiguous, or a task needs a decision the spec doesn't cover
   - a task is high-risk or irreversible — auth/permission changes, destructive data migrations, payments, deletions, deploys, anything touching secrets, **or anything you can't undo with `git revert`** → follow brain:doubt-driven-development and get explicit sign-off before continuing

   After the user resolves a blocker, they re-invoke `/build auto` — it resumes from the frontier.
7. **Summarize at the end:** tasks completed, tests added, commits made, how many tasks started at once in each wave and the reason wherever fewer started than could, and anything skipped, flagged, or left for the user.

## Run the frontier

`brain plan --json` works out the frontier: its first wave is every `open` row whose `Blocked by` rows are all `resolved`. `criticalPath` is the longest chain of rows still to do. `maxParallel` is the cap: `max_parallel` in `docs/agents/workspace.md` (default 8), or the `BRAIN_MAX_PARALLEL` variable, which wins.

1. **Note the feature branch:** `git branch --show-current`. Every task builds on the feature branch's current head, never on `main`.
2. **Start every task on the frontier at once**, up to the cap counted with the tasks still running: one Agent call per task, all in one message, each with `isolation: "worktree"` on the call itself. When the cap bites, start the rows on `criticalPath` first, then the rest in table order. A running task keeps its row `open`, so the frontier still lists it: leave it running.
3. **Start fewer only for a reason, and tell the user that reason before you start them.** A reason is a fact about the tasks or the host: two tasks that edit the same function (`sharedFiles` lists the files a wave's tasks share), or a host that runs one sub-agent at a time. "To be safe" is not a reason.
4. **Brief each sub-agent** with nothing from this conversation:
   - the plain-talk block from `${CLAUDE_PLUGIN_ROOT}/plain-talk/AGENTS-block.md` at the top of the prompt, because the output style never reaches a sub-agent;
   - its base: Claude Code starts a worktree on the repo's default branch unless the `worktree.baseRef` setting is `"head"` (https://code.claude.com/docs/en/worktrees#choose-the-base-branch). So its first step is `git merge --ff-only <feature branch>`, then the install command from the spec's Commands or the repo's `AGENTS.md`, because a new worktree has no installed dependencies. If the merge fails, it stops and reports;
   - the task's block from `tasks/todo.md`, copied whole, with the path of the spec folder and the spec section the block cites;
   - the `brain` path from "The spec folder", because a sub-agent's commands do not get the plugin variable;
   - the instruction to invoke brain:incremental-implementation and brain:test-driven-development;
   - the rule to leave `tasks/plan.md` and `tasks/todo.md` to this session, to stage only the files the task touched, by name, and to make one commit on its worktree's branch;
   - its result file: `T<NN>-result.md`, task ID first, in a folder outside the repo that you create for this build, holding the commit SHA, the verification command with its outcome, and any question. A sub-agent's file name never starts with report, summary, findings or analysis, which Claude Code refuses;
   - its reply: the result file's path plus one line: pass or fail, the commit SHA, and any question;
   - the rule that a decision the spec does not cover comes back as one question in its result, because a sub-agent cannot ask the user.
5. **Merge one task at a time.** When a sub-agent replies, read its line. Read its result file only when the line says fail or asks a question; then stop (step 6 above). When several tasks have passed, take the one on `criticalPath` first:
   1. Merge its branch into the feature branch: `git merge --no-ff <its branch>`. Resolve a small overlap in a shared file yourself.
   2. Run the gate, the repo's check command, on the merged head.
   3. Close the row (see "Close a row").
   4. When the merge changed a file or an interface that a running task uses, tell that task to rebase onto the feature branch's new head before it commits: SendMessage to the agent ID its Agent call returned (https://code.claude.com/docs/en/sub-agents#resume-subagents).
6. **Move the frontier.** After each closed row, run `brain plan --json` again, and start each task that has newly reached the frontier, as in item 2.
7. **A checkpoint row on the frontier stops the build for the user's review.** Start no new task, and tell the user that this is why. Let the running tasks finish, and merge them. Run the checks in the checkpoint's block, then present the checkpoint: what its phase built, and each check with its outcome. After the user's unambiguous yes, close the checkpoint row, its result the checks and the user's yes, and go on from item 6.

On a host without a sub-agent tool, run the frontier's tasks one at a time in this session, and tell the user that reason once: do the task, commit, close the row, clear the context, and re-invoke `/build auto`; it resumes from the frontier.

## Close a row

This session is the only writer of `tasks/plan.md` and of the ticks in `tasks/todo.md`. After a task's commit (`/build`) or its merge (`/build auto`):

1. Tick the boxes in the task's block of `tasks/todo.md`.
2. Set the task's row in `tasks/plan.md` to `resolved`, and write its result as the table asks: the task's commit SHA, then the verification command and its outcome.
3. When the plan has a "Parallel waves" section, replace its text with the waves text of a fresh `brain plan`, everything above its `Cap:` line: a resolved row leaves the waves.
4. Run `brain check`. No finding may name a file in the spec folder.
5. Commit `tasks/plan.md` and `tasks/todo.md` alone, staged by name, in a commit of their own: the row's result names the task's commit, which exists only once that commit does.

If any step fails, follow the brain:debugging-and-error-recovery skill.
