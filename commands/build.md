---
description: "Implement tasks incrementally — build, test, verify, commit — gated by the Definition of Done. Add \"auto\" to run the whole plan in one approved pass."
---

Invoke the implement skill (it carries test-driven-development at the seams the spec pre-agreed).

## Modes

- `/build` — implement the next pending task, then stop (careful, one slice at a time).
- `/build auto` — find or generate the plan, get a single approval, then implement every task without stopping between them, and converge at the end.

The arguments select the mode. Treat `auto` (canonical) or `all` as autonomous mode; anything else (or empty) is the default single-task mode. Autonomous mode is not faster per task — it runs the same loop — it only removes the human stepping between tasks.

## Where the spec and the plan live

Resolve once — first hit wins: the repo's own `docs/agents/issue-tracker.md`; else the repo's evident convention — a `docs/plan/` series (`PRD-NNN` is the spec, `PLAN-NNN` the plan; the first part `in progress` and its first unticked task are the next move) or a `CLAUDE.md` naming the place; else the known paths — `SPEC.md`, `docs/SPEC.md` or a file under `spec/` for the spec, `tasks/plan.md` and `tasks/todo.md` for the plan. Say where you looked and what you found. A README or an arbitrary doc never counts as a spec.

## The gates

`~/.claude/references/definition-of-done.md` applies in tiers, and this command runs them:

- **Every task tick** confirms its Correctness and Quality sections.
- **Every part's close** confirms its Integration and Documentation sections beside the part's own checkpoint items.
- **The plan's close** runs converge (below), the full checklist as the floor.

## Default: one task

Pick the next pending task from the plan. Then:

1. Read the task's acceptance criteria
2. Load relevant context (existing code, patterns, types)
3. Write a failing test for the expected behavior (RED)
4. Implement the minimum code to pass the test (GREEN)
5. Run the full test suite to check for regressions
6. Run the build to verify compilation
7. Commit with a descriptive message
8. Gate, then mark the task complete and stop — the Definition of Done's Correctness and Quality sections hold; tick it; where the repo keeps a session log, the tick cites the
   commit's sha and lands in the `docs(session)` commit that `/brain:session log` makes right after

When that tick closes a part: run the part's checkpoint items and the Integration and Documentation sections; where a session log exists, `/brain:session close` marks the part done.

## Converge: the plan's close

When the last part is done, re-read the spec and the plan against the built work with the full Definition of Done as the floor. Every promise not met becomes a task appended to the plan (a new part where the misses cluster), each with acceptance criteria — the run ends with those tasks named, never with a bare "all done". Then hand to the Review stage (`/brain:review`).

## Autonomous: the whole plan (`/build auto`)

Use this once a spec exists and you want to collapse plan + build into one run. It removes the manual stepping between tasks — not the verification. Every task still earns a passing test and its own commit.

1. Require a spec, resolved as above. If none exists, stop and tell the user to run `/brain:spec` first — do not invent requirements.
2. Establish a clean baseline. Run `git status --porcelain`. If there are uncommitted changes outside the planning artifacts (the resolved spec and plan files, `tasks/todo.md`), stop and ask the user to commit, stash, or confirm how to handle them. Autonomous per-task commits must not absorb unrelated local work, or the clean-rollback guarantee breaks.
3. Plan if needed, resolved as above. Only when there is genuinely no plan, invoke the planning-and-task-breakdown skill to generate one where the convention puts it (`tasks/plan.md` when nothing resolves).
4. Single checkpoint. Present the full plan and wait for an unambiguous affirmative (e.g. "approve", "go", "yes"). Treat hedged responses ("looks reasonable", "I guess") as NOT approved. This is the only human gate — after approval, run autonomously. If you generated the plan, commit it as a single preparatory commit now so it doesn't bleed into the first task's commit.
5. Execute every task in dependency order. Use each task's declared dependencies; if they aren't explicit, execute in the order the plan lists them. For each task, run the full default loop above (RED → GREEN → regression → build → commit → gate → mark complete), and each part's close as it comes. Stage only the files that task touched (the task's tick, which cites this commit's sha, goes into the following `docs(session)` commit where the repo keeps a session log; otherwise stage the tick with the task) — never `git add -A` blindly — and make one commit per task so any point is a clean rollback.
6. Stop and ask the user (do not push through) when:
   - a test can't be made to pass or the build breaks without an obvious fix → follow the diagnosing-bugs skill
   - the spec is ambiguous, or a task needs a decision the spec doesn't cover
   - a task is high-risk or irreversible — auth/permission changes, destructive data migrations, payments, deletions, deploys, anything touching secrets, or anything you can't undo with `git revert` → follow the doubt-driven-development skill and get explicit sign-off before continuing
   After the user resolves a blocker, they re-invoke `/build auto` — it resumes from the next pending task.
7. Converge, then summarize: tasks completed, tests added, commits made, the misses appended as tasks, and anything skipped, flagged, or left for the user.

If any step fails, follow the diagnosing-bugs skill.
