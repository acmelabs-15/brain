---
package: addy
path: evals/cases/incremental-implementation.json
type: config
bytes: 1942
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/incremental-implementation.json

## Purpose — required, verbatim
> "skill_name": "incremental-implementation" — evals/cases/incremental-implementation.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and execution evaluations for the `incremental-implementation` skill in the Addy eval harness. Specifies 3 positive trigger prompts for implementing tasks as thin, verifiable slices and committing after each working increment (top_k=3), 2 negative prompts routing to `observability-and-instrumentation` and `interview-me`, and 2 execution evaluations: one testing standard slice-by-slice delivery with per-slice verification and commits, and one adversarial evaluation testing resistance to management pressure and sunk cost rationalization when handling a monolithic unverified draft.

## Phase — required
none

## Inputs — required
User prompts requesting step-by-step task implementation, and test fixture directories `evals/fixtures/incremental-implementation` and `evals/fixtures/incremental-implementation-pressure`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` verifying slicing, incremental commits, and resistance to sunk-cost pressure.

## Invokes — required
- skill incremental-implementation — evals/cases/incremental-implementation.json:2
- skill observability-and-instrumentation — evals/cases/incremental-implementation.json:21
- skill interview-me — evals/cases/incremental-implementation.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/incremental-implementation.json:2 — used here
- `incremental-implementation` — evals/cases/incremental-implementation.json:2 — used here
- `trigger` — evals/cases/incremental-implementation.json:3 — defined here
- `positive` — evals/cases/incremental-implementation.json:4 — defined here
- `top_k` — evals/cases/incremental-implementation.json:7 — defined here
- `negative` — evals/cases/incremental-implementation.json:18 — defined here
- `owner` — evals/cases/incremental-implementation.json:21 — defined here
- `evals` — evals/cases/incremental-implementation.json:29 — defined here
- `expected_output` — evals/cases/incremental-implementation.json:33 — defined here
- `expectations` — evals/cases/incremental-implementation.json:37 — defined here
- `verifiable slice` — evals/cases/incremental-implementation.json:6 — used here
- `working increment` — evals/cases/incremental-implementation.json:10 — used here
- `feature flag` — evals/cases/incremental-implementation.json:14 — used here
- `vertical slices` — evals/cases/incremental-implementation.json:38 — used here
- `sunk cost` — evals/cases/incremental-implementation.json:46 — used here

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
Directly addresses Phase 1V verification findings by listing negative trigger owner skills `observability-and-instrumentation` (line 21) and `interview-me` (line 25) under `## Invokes`. Features 2 distinct evaluation cases: case 1 tests standard incremental slicing and verification, while case 2 (backed by fixture `incremental-implementation-pressure`, line 48) specifically evaluates behavioral resistance to managerial sunk-cost rationalization.

## Context cost
1,942 bytes (~490 tokens). Loads nothing directly.
