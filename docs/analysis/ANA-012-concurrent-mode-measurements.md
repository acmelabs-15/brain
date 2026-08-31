# The concurrent mode's three claims, measured — worktree subagents, task dependencies, agent teams

> **Analysis** · 2026-08-31 · status: current — PLAN-005 Part 7 Task 1 · brain SES-014 · the
> verify-first measurements ADR-006 D6 required before the concurrent mode may land

## Question

Three claims the concurrent `/brain:build` mode rests on (ADR-006 D6, Peter's rider): (a)
implementer subagents can run in git worktrees as `implement-spec` wrote it; (b) Claude Code
tasks can carry native dependencies, so the plan's deps graph renders as a frontier the harness
itself enforces; (c) agent teams consume those dependencies — unblocked tasks get picked up
without orchestration. Which hold, on what evidence?

## Findings

**F1 — Worktree isolation is real and documented; the live probe passes on git's own evidence.** A headless session in a scratch repo was told to spawn one subagent with `isolation: "worktree"` that creates and commits a file; afterwards the parent repo's `git worktree list` showed `.claude/worktrees/agent-a67be9ff7231d7ee8` on branch `worktree-agent-a67be9ff7231d7ee8` at `9044c78 hello from the worktree`, and `main` unchanged at `init` — the oracle is the repository state, not the model's report. **Documented:** `isolation:
"worktree"` on the Agent tool runs the subagent in a temporary git worktree branched from the
repository's default branch (`worktree.baseRef: "head"` switches to the session's HEAD);
the worktree is removed automatically when the subagent made no changes and otherwise kept
until the periodic sweep (`cleanupPeriodDays`). Concurrency of several worktree subagents from
one session is not stated explicitly; the general subagent limit is 20.
[code.claude.com/docs/en/sub-agents § Isolate subagents with worktrees;
code.claude.com/docs/en/worktrees § Isolate subagents / § Clean up]

**F2 — No general native task list with dependencies.** The harness's "tasks" are the
background-task tools (`TaskOutput`/`TaskStop`) and the `Workflow` tool; neither declares or
enforces a blocked-by relation. The rider's mechanism exists in exactly one place: agent teams.
[code.claude.com/docs/en/agent-teams § Assign and claim tasks]

**F3 — Agent teams carry a shared task list whose dependencies the harness manages.** "Tasks
can also depend on other tasks: a pending task with unresolved dependencies cannot be claimed
until those dependencies are completed"; "when a teammate completes a task that other tasks
depend on, it unblocks the dependent tasks without any action from you." Teams are a set of
independent Claude Code sessions — a lead and teammates with their own context windows —
created by the Agent tool with a `name` when `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` is set;
teammates claim unblocked tasks themselves. Experimental, behind an environment flag.
[code.claude.com/docs/en/agent-teams § How agent teams work · § Orchestrate teams · § Assign
and claim tasks]

## What this means for the mode

The design `implement-spec` wrote maps onto documented machinery one-for-one: implementer
subagents = worktree-isolated teammates; the ticket frontier = the team's shared task list with
dependencies; the merger step = the lead merging finished worktree branches. The one gap: the
whole thing is behind an experimental flag, and a full team run was not executed here.

## Refuted

- **"Claude Code tasks carry dependencies" as a general fact** — only inside agent teams.

## Unverifiable here

- Several worktree subagents concurrently from one session (not documented; not run).
- A full agent-team run (needs the experimental flag and multiple sessions; not run headless).

## Consequences

Part 7 Task 2: the mode lands only as documented machinery with the experimental flag named in
`/brain:build`, or waits for a live team run — Peter's call, priced in the session.
