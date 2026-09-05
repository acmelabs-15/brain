---
package: addy
path: evals/cases/planning-and-task-breakdown.json
type: config
bytes: 1233
unit: inv-addy-7
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/planning-and-task-breakdown.json

## Purpose — required, verbatim
> "planning-and-task-breakdown" — evals/cases/planning-and-task-breakdown.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `planning-and-task-breakdown`. It tests trigger routing when users request breaking specs or PRDs into implementable chunks with acceptance criteria, routes debugging and error recovery prompts away, and evaluates behavioral execution against a notifications spec fixture to verify that generated plans contain ordered vertical slices in `tasks/plan.md` with explicit acceptance criteria and no premature implementation coding.

## Phase — required
addy:Plan

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `debugging-and-error-recovery`, and an execution behavioral eval scenario referencing fixture `planning-and-task-breakdown`.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against generated task plans (`tasks/plan.md`).

## Invokes — required
- skill planning-and-task-breakdown — evals/cases/planning-and-task-breakdown.json:2
- skill debugging-and-error-recovery — evals/cases/planning-and-task-breakdown.json:21

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec` — evals/cases/planning-and-task-breakdown.json:6 — used here
- `acceptance criteria` — evals/cases/planning-and-task-breakdown.json:6 — used here
- `PRD` — evals/cases/planning-and-task-breakdown.json:10 — used here
- `vertical slices` — evals/cases/planning-and-task-breakdown.json:39 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing behavioral evaluation cases with `id`, `prompt`, `expected_output`, `files`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Behavioral expectations strictly mandate that tasks are decomposed as end-to-end vertical slices rather than horizontal architectural layers (e.g. database first, then API, then UI), and that no implementation code is written during planning. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1233 bytes (approx. 308 tokens). Standalone config file loaded only during evaluation passes.
