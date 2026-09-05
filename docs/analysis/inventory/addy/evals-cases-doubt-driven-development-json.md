---
package: addy
path: evals/cases/doubt-driven-development.json
type: config
bytes: 1274
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/doubt-driven-development.json

## Purpose — required, verbatim
> "doubt-driven-development" — evals/cases/doubt-driven-development.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `doubt-driven-development`. It tests trigger routing on high-stakes, security-critical, or low-confidence prompts, negative routing away from generic formatting or documentation requests, and verifies through behavioral execution that plans are challenged claim-by-claim, assumptions are tested, and verdicts distinguish verified claims from surviving doubts.

## Phase — required
addy:Build

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts without specific owner delegations, and a behavioral eval scenario with prompt, expected output, fixture reference (`doubt-driven-development`), and assertion expectations.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace execution traces.

## Invokes — required
- skill doubt-driven-development — evals/cases/doubt-driven-development.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `adversarial review` — evals/cases/doubt-driven-development.json:30 — used here
- `failure modes` — evals/cases/doubt-driven-development.json:14 — used here
- `reconciliation` — evals/cases/doubt-driven-development.json:31 — used here
- `verdict` — evals/cases/doubt-driven-development.json:31 — used here

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
The behavioral eval explicitly enforces that the agent does not merely accept claims at face value, requiring at least one assumption in the plan to be actively tested rather than accepted, and demanding a clear go/stop verdict. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1274 bytes (approx. 319 tokens). Standalone config file loaded only during evaluation passes.
