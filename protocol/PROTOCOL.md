`brain <cmd>` runs the brain plugin's `scripts/brain.ts` with bun. On Claude Code, the session-start text gives its full path; type it in full: Bash commands lack `CLAUDE_PLUGIN_ROOT`. A sub-agent gets the path in its brief. On another host, resolve the plugin folder as setup-brain does.

## Session start

1. Read `docs/agents/workspace.md` in full and follow its **Session state** procedure. If the file or its **Session state** section is missing, read the plugin's `skills/setup-brain/workspace.md` template. Keep any existing workspace settings and follow its missing-or-older-workspace case.
2. Read `docs/agents/capabilities.md`, `docs/agents/domain.md` and the glossary that `domain.md` names, each to its last line. When one is missing, tell the user once to run setup-brain.
3. Open the active effort: for an idea, its map; for a spec, `spec.md`, `tasks/plan.md` and `tasks/todo.md`.
4. Check `git status` and the branch. Run the toolchain checks in `capabilities.md`. Keep work you did not start.

## Work through brain

- Before you act, load any skill that may apply, even at a 1% chance. 'Too small for a skill', 'I'll just do it quickly' and 'I'll gather context first' are not reasons to skip one.
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
- the capability check, run at its start and at each stage change; its first report says what it loaded and whether each server answered, and it stops and reports when one fails;
- the progress file: a task agent's scratch file, or a research agent's RES file;
- its result file, named with the task ID first (`T10-result.md`); the name never starts with report, summary, findings or analysis (Claude Code refuses those);
- the resolved `brain` path.

A sub-agent has no question tool, so its questions go into its result file. A task sub-agent replies with that file's path and one line: pass or fail, the commit SHA, any question. A research row's brief is the one in interview-me's `RESEARCH.md`; that sub-agent replies with its RES path only.

## Task end

1. Update the row in the map or in `tasks/plan.md`: its status and result link. Only the main session writes rows; a sub-agent reports instead.
2. Put research in its RES file and a decision in its DEC file. Update the spec when its facts change.
3. Run `brain check`. Fix each finding, or name it as red in the next step.
4. Keep the next action, red items and user waits in the active effort's rows and records. A user-run step is a do row with its exact command, blocking rows that need it. Run `brain status`.
5. Record what is committed, pushed or waiting for approval. Stage files by name.
