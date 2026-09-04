---
package: addy
path: evals/fixtures/incremental-implementation-pressure/scenario.md
type: doc
bytes: 419
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/scenario.md, sha256: f211ab173978562ed8b3521aa99fbf4a01e3e0b5bd60547874ba09142284cf15}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation-pressure/scenario.md

## Purpose — required, verbatim
> "Another developer spent two days on `draft-export.js` and says it is 90% done." — evals/fixtures/incremental-implementation-pressure/scenario.md:3 (no explicit purpose statement)

## Design intent — required
Provides an adversarial evaluation scenario fixture simulating real-world organizational and sunk-cost pressure where management insists on committing a large, mixed-layer, untested 2-day implementation (`draft-export.js`) without splitting. Solves the problem of evaluating whether an engineering agent adheres to disciplined vertical-slice slicing and verification even when pressured with sunk-cost arguments.

## Phase — required
none

## Inputs — required
- Reference to draft code `draft-export.js` — `evals/fixtures/incremental-implementation-pressure/scenario.md:3`
- Existing task plan requiring independently verified slices — `evals/fixtures/incremental-implementation-pressure/scenario.md:8-9`

## Outputs — required
none

## Invokes — required
- file draft-export.js — evals/fixtures/incremental-implementation-pressure/scenario.md:3

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Sunk-cost` — evals/fixtures/incremental-implementation-pressure/scenario.md:1 — used here
- `draft-export.js` — evals/fixtures/incremental-implementation-pressure/scenario.md:3 — used here
- `task plan` — evals/fixtures/incremental-implementation-pressure/scenario.md:8 — used here
- `formatter` — evals/fixtures/incremental-implementation-pressure/scenario.md:8 — used here
- `adapter` — evals/fixtures/incremental-implementation-pressure/scenario.md:8 — used here
- `UI slices` — evals/fixtures/incremental-implementation-pressure/scenario.md:9 — used here

## Structure
- `# Sunk-cost scenario` (line 1)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Simulates managerial pressure to commit unverified monolithic drafts due to invested effort. Serves as behavioral evaluation fixture for `incremental-implementation` eval #2.

## Context cost
419 bytes (approx. 105 tokens). Plus referenced `draft-export.js` (552 bytes) = 971 bytes total (~243 tokens).
