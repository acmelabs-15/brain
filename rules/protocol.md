---
trigger: always_on
description: "The brain protocol: how a session starts, checks its skills and servers, briefs sub-agents and ends a task."
---

# brain: protocol

`brain <cmd>` runs the installed `scripts/brain.ts` with Bun. Use the full path from session-start context or setup-brain's host instructions. Give that path to sub-agents and shell commands.

## Session start

1. Load **using-brain** through the host's skill mechanism, or read the installed `skills/using-brain/SKILL.md` in full. Use its current source on startup, resume, fork, clear and compaction.
2. Follow **Start** once; continue its unfinished step when already active. It restores `docs/agents/workspace.md`, **Session state**, project rules and current records before routing the user's request.
3. If the workspace file or its **Session state** section is missing, read the plugin's `skills/setup-brain/workspace.md` template. Keep any existing workspace settings. Setup-brain owns setup and migration; a missing glossary alone needs neither.

On Claude Code, plugin context supplies this protocol without consumer root `AGENTS.md` or `CLAUDE.md` edits. Explicit user scope and handoffs take precedence over stale report suggestions.

## Work through brain

- Load the skills that the current action requires, including their declared dependencies. A narrow change still needs its applicable technical guidance and verification.
- Keep ask-user-question loaded. Ask only about an unresolved user decision or missing permission, one question per call. Reuse settled requirements and put the premise, evidence and recommendation inside the question.
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

A sub-agent's brief names:

- the exact skills it loads and the servers it needs;
- the capability check, run at its start and at each stage change; its first report says what it loaded and whether each server answered, and it stops and reports when one fails;
- the progress file: a task agent's scratch file, or a research agent's RES file;
- its result file, named with the task ID first (`T10-result.md`); the name never starts with report, summary, findings or analysis (Claude Code refuses those);
- the resolved `brain` path.

A sub-agent returns user questions in its result file. A task sub-agent replies with that file's path and one line: pass or fail, the commit SHA, any question. A research row's brief is the one in interview-me's `RESEARCH.md`; that sub-agent replies with its RES path only.

## Task end

For work tracked in the workspace:

1. Update the row in the map or in `tasks/plan.md`: its status and result link. Only the main session writes rows; a sub-agent reports instead.
2. Put research in its RES file and a decision in its DEC file. Update the spec when its facts change.
3. Run `brain check`. Fix each finding, or name it as red in the next step.
4. Keep the next action, red items and user waits in the active effort's rows and records. A user-run step is a do row with its exact command, blocking rows that need it. Run `brain status`.
5. Record what is committed, pushed or waiting for approval. Stage files by name. Use the installed `references/brain/commit-contract.md` for slices, task results and serialized integration.
