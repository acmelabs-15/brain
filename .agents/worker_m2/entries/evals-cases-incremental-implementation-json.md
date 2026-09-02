---
package: addy
path: evals/cases/incremental-implementation.json
type: config
bytes: 1942
unit: inv-addy-1
---

# evals/cases/incremental-implementation.json

## Purpose — required, verbatim
> "Implement CSV export for the reports page, working from the existing task plan." — evals/cases/incremental-implementation.json:32 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubrics for the `incremental-implementation` skill in the evaluation harness across standard task execution and sunk-cost pressure scenarios. Solves the problem of ensuring engineering agents deliver features in small, independently verifiable vertical slices with atomic commits rather than massive unverified batches. Tests whether requests for vertical slices, step-by-step committing, and feature-flagged thin slices trigger the skill (top_k <= 3) while alerting configuration and requirements interviews route to their respective owners. Evaluates execution on proceeding in thin vertical slices, verifying each slice before moving to the next, committing each slice separately, and actively rejecting sunk-cost arguments from management to batch unverified changes.

## Phase — required
none

## Inputs — required
- Evaluation fixture directories:
  - `evals/fixtures/incremental-implementation` — `evals/cases/incremental-implementation.json:35`
  - `evals/fixtures/incremental-implementation-pressure` — `evals/cases/incremental-implementation.json:48`
- Positive trigger prompts — `evals/cases/incremental-implementation.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/incremental-implementation.json:20,24`
- Behavioral evaluation prompts:
  - Scenario 1 (CSV export from task plan) — `evals/cases/incremental-implementation.json:32`
  - Scenario 2 (Sunk-cost management pressure) — `evals/cases/incremental-implementation.json:45`

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading results across two test scenarios evaluated by `scripts/run-evals.js` against expectations (`evals/cases/incremental-implementation.json:37-41, 50-54`)

## Invokes — required
- fixture `evals/fixtures/incremental-implementation` — evals/cases/incremental-implementation.json:35
- fixture `evals/fixtures/incremental-implementation-pressure` — evals/cases/incremental-implementation.json:48
- skill `observability-and-instrumentation` — evals/cases/incremental-implementation.json:21
- skill `interview-me` — evals/cases/incremental-implementation.json:25
- skill `incremental-implementation` — evals/cases/incremental-implementation.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `incremental-implementation` — evals/cases/incremental-implementation.json:2 — used here
- `top_k` — evals/cases/incremental-implementation.json:7 — used here
- `observability-and-instrumentation` — evals/cases/incremental-implementation.json:21 — used here
- `interview-me` — evals/cases/incremental-implementation.json:25 — used here
- `commit per slice` — evals/cases/incremental-implementation.json:33 — used here
- `vertical slices` — evals/cases/incremental-implementation.json:38 — used here
- `sunk cost` — evals/cases/incremental-implementation.json:46 — used here
- `feature flag` — evals/cases/incremental-implementation.json:14 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-57)
  - `evals[0]` (id 1, lines 30-42)
  - `evals[1]` (id 2, lines 43-56)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Scenario 2 provides a crucial pressure test evaluating the agent's ability to resist sunk-cost bias and management pressure to batch unverified code, maintaining strict per-slice verification and atomic commits.

## Context cost
1,942 bytes (approx. 485 tokens).
