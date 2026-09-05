---
package: addy
path: evals/cases/idea-refine.json
type: config
bytes: 1269
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/idea-refine.json

## Purpose — required, verbatim
> "idea-refine" — evals/cases/idea-refine.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `idea-refine`. It tests positive trigger routing for habit tracking concepts, onboarding flow stress-testing, and product ideation, routes negative queries to CI/CD and security skills, and evaluates conversational dialogue quality to ensure the agent asks sharpening questions, surfaces hidden assumptions, pushes back on weak ideas, and outputs a one-pager with MVP scope and a Not Doing list.

## Phase — required
addy:Define

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `ci-cd-and-automation` and `security-and-hardening`, and a dialogue behavioral eval scenario specifying dialogue kind, prompt, expected output, and assertion expectations.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral dialogue grading against conversational turn transcripts.

## Invokes — required
- skill idea-refine — evals/cases/idea-refine.json:2
- skill ci-cd-and-automation — evals/cases/idea-refine.json:21
- skill security-and-hardening — evals/cases/idea-refine.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `one-pager` — evals/cases/idea-refine.json:34 — used here
- `MVP scope` — evals/cases/idea-refine.json:34 — used here
- `Not Doing list` — evals/cases/idea-refine.json:34 — used here
- `Sharpening questions` — evals/cases/idea-refine.json:36 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing behavioral evaluation cases with `id`, `kind`, `prompt`, `expected_output`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses `kind: "dialogue"` rather than execution fixtures, reflecting that `idea-refine` delivers conversational inquiry and one-pager formulation rather than repository code modifications. The expectations test pushing back on weak ideas rather than sycophantic agreement. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1269 bytes (approx. 317 tokens). Standalone config file loaded only during evaluation passes.
