`brain <cmd>` runs `scripts/brain.ts` from the brain plugin with bun. On Claude Code, the session-start text gives its full path; type it in full, since Bash commands lack `CLAUDE_PLUGIN_ROOT`. A sub-agent gets the path in its brief. On another host, resolve the plugin folder as setup-brain does.

## Session start

1. Get the state. On Claude Code, the session-start text holds the `brain status` report. Elsewhere, run `brain status`. When it cannot run, read `docs/STATUS.md` and the active effort's map or `tasks/plan.md`. Work out the frontier by hand, and tell the user that you computed it by eye.
2. Read `docs/agents/workspace.md`, `docs/agents/capabilities.md`, `docs/agents/domain.md` and the glossary that `domain.md` names, each to its last line. When one is missing, tell the user once to run setup-brain.
3. Open the active effort: for an idea, its map; for a spec, `spec.md`, `tasks/plan.md` and `tasks/todo.md`.
4. Check `git status` and the branch. Run the toolchain checks in `capabilities.md`. Keep work you did not start.
5. Report in five lines or fewer: the stage, the last completed step, the next step, anything red, and the decisions that wait on the user. "Continue" resumes the next approved row or task.

## Work through brain

- When a skill may apply, load it before you act. using-brain routes work to skills.
- Keep ask-user-question loaded. Every decision or permission goes through it, one question per call, with a recommendation and its reason.
- Create every numbered file (IDEA, SPEC, DEC, RES) only through `brain new-doc <TYPE> <slug>`. Its claim keeps each number to one agent.
- For a skill that only the user starts, such as handoff, give the user its command.

## Capability check

Run it:

- at the start of a task, and at each stage change (define, plan, build, verify, review, ship);
- before you start a sub-agent;
- after a compaction or a long run of tool calls;
- before you guess a convention that a skill or a server would give.

Confirm:

- the brain skills for this stage;
- the library skills and servers in `docs/agents/capabilities.md`, each server proved by one real read-only call (a tool name in your list is no proof);
- ask-user-question.

Load what is missing. When a server does not answer, stop the work that depends on it and say what failed. Report in one line what you loaded or fixed; nothing when all was in place.

## Sub-agent briefs

A sub-agent sees nothing of your conversation. Its brief names:

- the exact skills it loads and the servers it needs;
- the capability check, run at its start and at each stage change; its first report says what it loaded and whether each server answered, and it stops and reports when a skill or a server fails;
- a scratch progress file outside the repo, where it logs each step;
- its result file, named with the task ID first (`T10-result.md`); the name never starts with report, summary, findings or analysis, which Claude Code refuses for a sub-agent;
- the resolved `brain` path.

A sub-agent has no question tool, so its questions go into its result file. A task sub-agent replies with that file's path and one line: pass or fail, the commit SHA, any question. A research row's brief is the one in interview-me's `RESEARCH.md`; that sub-agent replies with its RES path only.

## Task end

1. Update the row in the map or in `tasks/plan.md`: its status and its result link. Only the main session writes rows; a sub-agent reports instead.
2. Put research in its RES file and a decision in its DEC file. Update the spec when its facts change.
3. Run `brain check`. Fix each finding, or name it as red in the next step.
4. Rewrite `docs/STATUS.md`: the next action, anything red, and what waits on the user, with the exact command when the next step is theirs. Start the next action with `Next:` and the decisions with `Waiting on the user:`, so that `brain status` reads them.
5. Record what is committed, pushed or waiting for approval. Stage files by name.
