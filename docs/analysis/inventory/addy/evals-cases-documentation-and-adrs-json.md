---
package: addy
path: evals/cases/documentation-and-adrs.json
type: config
bytes: 1328
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/documentation-and-adrs.json

## Purpose — required, verbatim
> "documentation-and-adrs" — evals/cases/documentation-and-adrs.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral performance for the `documentation-and-adrs` skill. It supplies positive evaluation prompts targeting architecture decision records (ADRs) and documentation updates, negative prompts routed to debugging and security skills, and an execution evaluation verifying distinct ADR sections, trade-offs, and timeless writing style.

## Phase — required
addy:Ship

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts paired with expected owner skills (`debugging-and-error-recovery`, `security-and-hardening`), and a behavioral eval scenario with prompt, expected output, fixture reference (`documentation-and-adrs`), and assertion expectations.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace traces.

## Invokes — required
- skill documentation-and-adrs — evals/cases/documentation-and-adrs.json:2
- skill debugging-and-error-recovery — evals/cases/documentation-and-adrs.json:21
- skill security-and-hardening — evals/cases/documentation-and-adrs.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR` — evals/cases/documentation-and-adrs.json:6 — used here
- `architecture decision` — evals/cases/documentation-and-adrs.json:10 — used here
- `alternatives considered` — evals/cases/documentation-and-adrs.json:33 — used here
- `Trade-offs` — evals/cases/documentation-and-adrs.json:39 — used here

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
The behavioral eval explicitly enforces that rejected options and trade-offs are recorded rather than merely documenting the winning choice, aligning with senior engineering documentation standards. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1328 bytes (approx. 332 tokens). Standalone config file loaded only during evaluation passes.
