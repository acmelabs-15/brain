# Plan — what we are building and how

The PRD (what the system is, for whom, the promise, the requirements) and the plans that implement it, one per piece of work larger than a small fix. Each plan part carries `> Status: planned | in progress (session SES-NNN) | done (session SES-NNN, sha)`; the PRD's Plans table names every plan. A plan is the way in: `/brain:plan PLAN-NNN`.

## Index

| Doc | What | Status |
| --- | --- | --- |
| [PRD-001-session-log-and-rehydration.md](PRD-001-session-log-and-rehydration.md) | The `brain` toolset — the session log, plan rehydration, and the one plugin carrying every skill, command and agent; requirements 1–12 | current |
| [PLAN-001-record-and-rehydration-split.md](PLAN-001-record-and-rehydration-split.md) | The record with three acts (start · log · close) and one status; rehydration moved to `/brain:plan`; three commands; the docs sweep; the toolset copied into the `brain` plugin at Part 2 and its sources retired at Part 6 (ADR-002, ADR-003, ANA-003) | in progress — Parts 1–4 done (sessions SES-001–004); Part 5 in progress (SES-005) |
| [PLAN-002-consult-skills-integration.md](PLAN-002-consult-skills-integration.md) | `domain-modeling` and `codebase-design` evaluated in full against the 24 Addy lifecycle skills and 8 commands; the collision matrix, the priced integration options, Peter's decisions into an ADR, then the implementation (Peter, 2026-08-31) | planned |
| [archive/acmelabs-15-sessions/](archive/acmelabs-15-sessions/README.md) | The sessions repo's PLAN-001 (its own open work: its Part 1 Task 6, Part 5 Tasks 3, 5, 6 — that plan's numbers) and PLAN-002 (superseded by this repo's PLAN-001), merged in with their history (ADR-003) | archived |

## Rules

- **One per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **A plan cites decisions, it does not restate them**; the PRD changes in the same commit as a change to *what* we build.
- **Produced with** the `spec-driven-development (PRD) and planning-and-task-breakdown (plan)` skill; its template is the template.
