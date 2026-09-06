---
package: addy
path: evals/cases/planning-and-task-breakdown.json
type: config
bytes: 1233
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/planning-and-task-breakdown.json

## Purpose — required, verbatim
> "skill_name": "planning-and-task-breakdown" — evals/cases/planning-and-task-breakdown.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and execution assertions for the `planning-and-task-breakdown` skill in the Addy eval harness. Specifies 3 positive trigger prompts for breaking specs/PRDs into ordered, verifiable tasks with acceptance criteria (top_k=3), 2 negative prompts (routing to `debugging-and-error-recovery` and an unrouted XSS security distractor), and 1 execution evaluation checking that tasks are written to `tasks/plan.md` as vertical slices ordered by dependency, each with explicit acceptance criteria, with a strict prohibition on writing implementation code during the planning phase.

## Phase — required
none

## Inputs — required
User prompts providing feature specs or PRDs for planning, and test fixture directory `evals/fixtures/planning-and-task-breakdown`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` verifying planned task structure, dependency ordering, and simulated artifact `tasks/plan.md`.

## Invokes — required
- skill planning-and-task-breakdown — evals/cases/planning-and-task-breakdown.json:2
- skill debugging-and-error-recovery — evals/cases/planning-and-task-breakdown.json:21

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/planning-and-task-breakdown.json:2 — used here
- `planning-and-task-breakdown` — evals/cases/planning-and-task-breakdown.json:2 — used here
- `trigger` — evals/cases/planning-and-task-breakdown.json:3 — defined here
- `positive` — evals/cases/planning-and-task-breakdown.json:4 — defined here
- `top_k` — evals/cases/planning-and-task-breakdown.json:7 — defined here
- `negative` — evals/cases/planning-and-task-breakdown.json:18 — defined here
- `owner` — evals/cases/planning-and-task-breakdown.json:21 — defined here
- `evals` — evals/cases/planning-and-task-breakdown.json:28 — defined here
- `expected_output` — evals/cases/planning-and-task-breakdown.json:32 — defined here
- `expectations` — evals/cases/planning-and-task-breakdown.json:36 — defined here
- `acceptance criteria` — evals/cases/planning-and-task-breakdown.json:6 — used here
- `PRD` — evals/cases/planning-and-task-breakdown.json:10 — used here
- `tasks/plan.md` — evals/cases/planning-and-task-breakdown.json:32 — used here
- `vertical slices` — evals/cases/planning-and-task-breakdown.json:39 — used here
- `horizontal layers` — evals/cases/planning-and-task-breakdown.json:39 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures trigger classification tests (with negative trigger routed to `debugging-and-error-recovery` at line 21) and 1 execution eval producing `tasks/plan.md`. Enforces four key planning constraints: acceptance criteria on every task, dependency ordering, vertical slicing over horizontal architecture tiers, and strict boundary discipline preventing code implementation during planning.

## Context cost
1,233 bytes (~310 tokens). Loads nothing directly.
