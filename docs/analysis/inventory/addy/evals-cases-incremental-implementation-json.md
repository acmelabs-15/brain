---
package: addy
path: evals/cases/incremental-implementation.json
type: config
bytes: 1942
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/incremental-implementation.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/incremental-implementation.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `incremental-implementation` skill. Without this file, the test suite could not prevent regression in routing prompts that require vertical slicing and single-slice committing, nor verify under adversarial sunk-cost pressure that the agent decomposes unverified batch code into small, verified slices rather than succumbing to pressure to merge unverified changes.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/incremental-implementation/SKILL.md` and behavioral test fixtures from `evals/fixtures/incremental-implementation/` and `evals/fixtures/incremental-implementation-pressure/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `incremental-implementation` — evals/cases/incremental-implementation.json:2 — defined here
- `verifiable slice` — evals/cases/incremental-implementation.json:6 — used here
- `feature flag` — evals/cases/incremental-implementation.json:14 — used here
- `observability-and-instrumentation` — evals/cases/incremental-implementation.json:21 — used here
- `interview-me` — evals/cases/incremental-implementation.json:25 — used here
- `commit per slice` — evals/cases/incremental-implementation.json:33 — used here
- `vertical slices` — evals/cases/incremental-implementation.json:38 — used here
- `sunk cost` — evals/cases/incremental-implementation.json:46 — used here
- `incremental-implementation-pressure` — evals/cases/incremental-implementation.json:48 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes 2 distinct behavioral evaluation cases: standard execution of a vertical slice from an existing plan (eval 1, backed by `evals/fixtures/incremental-implementation/`), and an adversarial sunk-cost pressure test (eval 2, backed by `evals/fixtures/incremental-implementation-pressure/`) asserting that sunk-cost arguments are rejected.

## Context cost
1942 bytes, ~485 tokens.
