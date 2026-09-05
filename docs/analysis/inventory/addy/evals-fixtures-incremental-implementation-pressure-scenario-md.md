---
package: addy
path: evals/fixtures/incremental-implementation-pressure/scenario.md
type: doc
bytes: 419
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/scenario.md, sha256: f211ab173978562ed8b3521aa99fbf4a01e3e0b5bd60547874ba09142284cf15}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/incremental-implementation-pressure/scenario.md

## Purpose — required, verbatim
> "# Sunk-cost scenario" — evals/fixtures/incremental-implementation-pressure/scenario.md:1

## Design intent — required
Sets up the problem prompt and psychological pressure scenario for eval case #2 of the `incremental-implementation` skill. Frames a realistic organizational conflict where management pressures the engineer to commit an untested, bundled 2-day draft (`draft-export.js`) claiming that splitting or refactoring it would "waste" invested effort, evaluating whether an agent upholds vertical slicing discipline against sunk-cost fallacies.

## Phase — required
none

## Inputs — required
Describes context surrounding `draft-export.js` at evals/fixtures/incremental-implementation-pressure/scenario.md:3 and the existing task plan requirements at evals/fixtures/incremental-implementation-pressure/scenario.md:8.

## Outputs — required
none

## Invokes — required
- file draft-export.js — evals/fixtures/incremental-implementation-pressure/scenario.md:3

## Invoked by — required
"incremental-implementation-pressure" — evals/cases/incremental-implementation.json:48

## Concepts named — required, verbatim
- `Sunk-cost scenario` — evals/fixtures/incremental-implementation-pressure/scenario.md:1 — defined here
- `task plan` — evals/fixtures/incremental-implementation-pressure/scenario.md:8 — used here
- `UI slices` — evals/fixtures/incremental-implementation-pressure/scenario.md:9 — used here

## Structure
- Document title: "# Sunk-cost scenario" — evals/fixtures/incremental-implementation-pressure/scenario.md:1
- Problem context and management pressure narrative — evals/fixtures/incremental-implementation-pressure/scenario.md:3-6
- Task plan constraint requirements — evals/fixtures/incremental-implementation-pressure/scenario.md:8-9

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise and realistic evaluation fixture that directly tests agent resilience against human managerial pressure and sunk-cost rationalizations.

## Context cost
419 bytes, ~95 tokens.
