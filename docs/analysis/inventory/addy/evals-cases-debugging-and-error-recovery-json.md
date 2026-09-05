---
package: addy
path: evals/cases/debugging-and-error-recovery.json
type: config
bytes: 2078
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/debugging-and-error-recovery.json, sha256: a7b0cfb380dfce578305913d7376426ad9ee78beb51a31a19b4d52ea7b3a86be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/debugging-and-error-recovery.json

## Purpose — required, verbatim
> "debugging-and-error-recovery" — evals/cases/debugging-and-error-recovery.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines trigger routing benchmarks and two rigorous execution evaluation scenarios for the `debugging-and-error-recovery` skill within `scripts/run-evals.js`. It verifies positive intent mapping (TypeError crashes, intermittent 500 errors, and overnight regression tests), negative boundaries (directing documentation to `documentation-and-adrs` and code cleanup to `code-simplification`), and error recovery rigor. The two scenarios test that the agent reproduces failures before patching, identifies root causes rather than symptoms, provides minimal scoped fixes, creates regression tests, and steadfastly resists applying speculative unverified patches under urgent stakeholder time pressure.

## Phase — required
addy:Verify

## Inputs — required
Target skill definition `skills/debugging-and-error-recovery/SKILL.md`, test prompts, and test fixture `evals/fixtures/debugging-and-error-recovery/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and execution verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill debugging-and-error-recovery — evals/cases/debugging-and-error-recovery.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/debugging-and-error-recovery.json:2 — defined here
`trigger` — evals/cases/debugging-and-error-recovery.json:3 — defined here
`positive` — evals/cases/debugging-and-error-recovery.json:4 — defined here
`negative` — evals/cases/debugging-and-error-recovery.json:18 — defined here
`evals` — evals/cases/debugging-and-error-recovery.json:29 — defined here
`expected_output` — evals/cases/debugging-and-error-recovery.json:33 — defined here
`expectations` — evals/cases/debugging-and-error-recovery.json:37 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (2 execution scenarios)
  - Scenario 1 (id: 1, execution): Pagination off-by-one regression test failure
  - Scenario 2 (id: 2, execution): Urgent production checkout failure under stakeholder time pressure

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Scenario 2 encodes a critical anti-pattern defense: preventing the model from applying speculative patches under stakeholder time pressure without reproducing and localizing the cause (lines 52-54). Negative triggers establish ownership with `documentation-and-adrs` (line 21) and `code-simplification` (line 25).

## Context cost
2078 bytes, ~520 tokens. Loads no external files.
