---
package: addy
path: evals/cases/planning-and-task-breakdown.json
type: config
bytes: 1233
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/planning-and-task-breakdown.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/planning-and-task-breakdown.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `planning-and-task-breakdown` skill. Without this file, task planning and spec breakdown prompts could misroute to debugging or implementation skills, and behavioral evaluations would fail to enforce that tasks are written to `tasks/plan.md` as vertical slices ordered by dependency with explicit acceptance criteria, without premature code writing during planning.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/planning-and-task-breakdown/SKILL.md` and behavioral test fixtures located in `evals/fixtures/planning-and-task-breakdown/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — evals/cases/planning-and-task-breakdown.json:2 — defined here
- `acceptance criteria` — evals/cases/planning-and-task-breakdown.json:6 — used here
- `PRD` — evals/cases/planning-and-task-breakdown.json:10 — used here
- `task list` — evals/cases/planning-and-task-breakdown.json:10 — used here
- `debugging-and-error-recovery` — evals/cases/planning-and-task-breakdown.json:21 — used here
- `XSS` — evals/cases/planning-and-task-breakdown.json:24 — used here
- `tasks/plan.md` — evals/cases/planning-and-task-breakdown.json:32 — used here
- `vertical slices` — evals/cases/planning-and-task-breakdown.json:39 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains 3 positive triggers with `top_k: 3`, 2 negative triggers (one owned by `debugging-and-error-recovery`), and 1 execution eval backed by `evals/fixtures/planning-and-task-breakdown/` asserting vertical slice task planning into `tasks/plan.md` with zero implementation coding during planning.

## Context cost
1233 bytes, ~308 tokens.
