# Plan — what we are building and how

The PRD (what the system is, for whom, the promise, the requirements) and the plans that implement it, one per piece of work larger than a small fix. Each plan part carries `> Status: planned | in progress (session SES-NNN) | done (session SES-NNN, sha)`; the PRD's Plans table names every plan. A plan is the way in: `/plan PLAN-NNN`.

## Index

| Doc | What | Status |
| --- | --- | --- |
| [PRD-001-session-log-and-rehydration.md](PRD-001-session-log-and-rehydration.md) | The `brain` toolset — the session log, plan rehydration, and the one plugin carrying every skill, command and agent; requirements 1–12 | current |
| [PLAN-001-record-and-rehydration-split.md](PLAN-001-record-and-rehydration-split.md) | The record with three acts (start · log · close) and one status; rehydration moved to `/plan`; three commands; the docs sweep; the move to `~/.claude/skills` last | in progress — part 1 (session SES-002 in acmelabs-15/sessions) |

## Rules

- **One per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **A plan cites decisions, it does not restate them**; the PRD changes in the same commit as a change to *what* we build.
- **Produced with** the `spec-driven-development (PRD) and planning-and-task-breakdown (plan)` skill; its template is the template.
