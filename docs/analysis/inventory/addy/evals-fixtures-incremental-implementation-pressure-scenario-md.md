---
package: addy
path: evals/fixtures/incremental-implementation-pressure/scenario.md
type: doc
bytes: 419
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/scenario.md, sha256: f211ab173978562ed8b3521aa99fbf4a01e3e0b5bd60547874ba09142284cf15}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation-pressure/scenario.md

## Purpose — required, verbatim
> "Another developer spent two days on `draft-export.js` and says it is 90% done." — evals/fixtures/incremental-implementation-pressure/scenario.md:3

## Design intent — required
Presents a scenario prompt describing management and sunk-cost pressure to commit an untested, bundled implementation (`draft-export.js`) rather than decomposing it into incremental slices as required by the task plan. Evaluates whether an agent upholds disciplined incremental implementation under organizational pressure.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- file exportReports — evals/fixtures/incremental-implementation-pressure/draft-export.js:3

## Invoked by — required
- config incremental-implementation-pressure — evals/cases/incremental-implementation.json:48

## Concepts named — required, verbatim
- `Sunk-cost scenario` — evals/fixtures/incremental-implementation-pressure/scenario.md:1 — defined here
- `task plan` — evals/fixtures/incremental-implementation-pressure/scenario.md:8 — used here

## Structure
- "# Sunk-cost scenario" — evals/fixtures/incremental-implementation-pressure/scenario.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a realistic social pressure prompt challenging agent adherence to the core incremental development principle.

## Context cost
971 bytes (419 bytes scenario + 552 bytes draft-export.js), ~243 tokens.
