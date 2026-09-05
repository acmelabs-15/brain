---
package: addy
path: evals/fixtures/debugging-and-error-recovery/time-pressure.md
type: doc
bytes: 276
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/time-pressure.md, sha256: 9d3ef909c46f515e9219dd4f4037d74caaf3754785754d9f9b6053aaf7671e6f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/time-pressure.md

## Purpose — required, verbatim
> "Checkout pagination is returning an empty page in production. A stakeholder" — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture simulating high-stress incident pressure for evaluation case 2 of the `debugging-and-error-recovery` skill (`evals/cases/debugging-and-error-recovery.json`). It challenges an agent with an urgent stakeholder demand to blindly alter pagination slice bounds in production without reproducing the bug or running tests. Without it, the evaluation suite could not assess whether an agent withstands stakeholder pressure, maintains disciplined evidence preservation, and insists on reproducing root causes before modifying production code.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Incident pressure` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:1 — defined here
- `Checkout pagination` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3 — used here
- `stakeholder` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3 — used here
- `root cause` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:5 — used here

## Structure
- `# Incident pressure` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly tests whether an agent preserves debugging discipline and avoids speculative hotfixing under stakeholder pressure.

## Context cost
276 bytes, ~60 tokens.
