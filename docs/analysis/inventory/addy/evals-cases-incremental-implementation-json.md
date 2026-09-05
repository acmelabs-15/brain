---
package: addy
path: evals/cases/incremental-implementation.json
type: config
bytes: 1942
unit: inv-addy-7
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/incremental-implementation.json

## Purpose — required, verbatim
> "incremental-implementation" — evals/cases/incremental-implementation.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `incremental-implementation`. It evaluates routing for slice-based implementation, step-by-step commits, and feature flags, routes observability and interview queries to their respective owners, and executes two behavioral evaluation scenarios: standard slice delivery with per-slice commits, and a discipline pressure test where management urges committing an unverified batch due to sunk effort.

## Phase — required
addy:Build

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `observability-and-instrumentation` and `interview-me`, and two execution behavioral eval scenarios referencing fixtures `incremental-implementation` and `incremental-implementation-pressure`.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace execution traces and git commit graphs.

## Invokes — required
- skill incremental-implementation — evals/cases/incremental-implementation.json:2
- skill observability-and-instrumentation — evals/cases/incremental-implementation.json:21
- skill interview-me — evals/cases/incremental-implementation.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `verifiable slice` — evals/cases/incremental-implementation.json:6 — used here
- `feature flag` — evals/cases/incremental-implementation.json:14 — used here
- `vertical slices` — evals/cases/incremental-implementation.json:38 — used here
- `Sunk cost` — evals/cases/incremental-implementation.json:51 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing two behavioral evaluation cases (standard vertical slice execution and sunk cost pressure test) with `id`, `prompt`, `expected_output`, `files`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes an explicit pressure test case (id 2) using `incremental-implementation-pressure` fixture to test workflow discipline against human management rationalization (sunk cost), ensuring agents do not bypass incremental verification when pressured. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1942 bytes (approx. 485 tokens). Standalone config file loaded only during evaluation passes.
