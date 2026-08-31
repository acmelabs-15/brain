# Plan — what we are building and how

Two kinds of document: the **PRD** (`PRD-NNN-<product>.md` — what the product is, for whom, the
promise, the requirements, boundaries, success criteria; the single source for *what* and *why*,
kept current) and **feature plans** (`PLAN-NNN-<feature>.md`, one per piece of work larger than a
small fix: overview, the decisions it relies on, the parts in order, risks, open questions).

**A plan is the way in.** "Work on PLAN-NNN" is enough for a new conversation: each **part**
carries a status line — `planned`, `in progress (session SES-NNN)` or
`done (session SES-NNN, sha)` — so the plan says where the work stands and which session in
`../sessions/` holds the story of each part, and the session's `Plan:` line points back. The PRD's
`## Plans` table lists every plan implementing it, so PRD → plan → part → session is one walk.
The `/session` skill (the `sessions` plugin) writes those status lines and ticks; progress is read
from the session entries, never tracked twice.

## Index

| Doc | What | Status |
| --- | --- | --- |
| [PLAN-001-session-plan-relationship-and-re-evaluation.md](PLAN-001-session-plan-relationship-and-re-evaluation.md) | Everything still open from the session ↔ plan work, the re-evaluation, and plugin-kit parity | in progress — parts 1, 2, 4, 5 (session SES-001) |

## Rules

- **PRD first, then plan, then parts, then code** for anything non-trivial. A change to *what* we
  build updates the PRD in the same PR; a change to *how* updates the feature plan.
- **Decisions with alternatives** are ADRs in the decisions directory, linked from here — a plan
  cites decisions, it does not restate them. **Facts** come from the analysis directory.
- **One session per part.** A second conversation on the same part joins its session.
- A finished plan is not deleted: its top status becomes
  `done — shipped in vX.Y.Z (session SES-NNN)` and the PRD's Plans row says the same.

## Templates

### PRD

```markdown
# PRD: <product>

> Status: current as of vX.Y.Z · YYYY-MM-DD · last change: session entry `<sha>`

## Objective — what, why, for whom; what success looks like
## The promise — the user-visible contract
## Requirements — numbered, testable
## Tech stack · Project structure · Code style · Testing strategy
## Boundaries — Always / Ask first / Never
## Success criteria — specific, testable
## Non-goals
## Open questions

## Plans

| Plan | Implements | Status |
| --- | --- | --- |
| PLAN-001-<feature>.md | requirements 3, 4 | in progress — part 2 (session SES-NNN) |
```

### Feature plan

```markdown
# Plan: <feature>

> Status: planned | in progress | done — shipped in vX.Y.Z (session SES-NNN) · owner · YYYY-MM-DD

## Overview
One paragraph: what and why (link the PRD requirement).

## Decisions it relies on
- ADR-NNN … (link); new decisions needed → write the ADR first.

## Parts

### Part 1: <title>

> Status: done (session SES-004, `a1b2c3d`)

- [x] Task 1: <title> — acceptance criteria; verification — `a1b2c3d`
- [x] Checkpoint: tests green; manual check … — `a1b2c3d`

### Part 2: <title>

> Status: in progress (session SES-006)

- [x] Task 1: … — `e4f5a6b`
- [ ] Task 2: … — acceptance criteria; verification; files

### Part 3: <title>

> Status: planned

- [ ] Task 1: …

## Risks and mitigations
| Risk | Impact | Mitigation |

## Open questions
```
