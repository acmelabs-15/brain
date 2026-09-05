---
package: addy
path: evals/cases/interview-me.json
type: config
bytes: 1197
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/interview-me.json

## Purpose — required, verbatim
> "interview-me" — evals/cases/interview-me.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `interview-me`. It evaluates positive trigger routing when users request requirements interrogation or single-question interviews, routes testing and deployment queries away to their respective skills, and tests dialogue performance to ensure questions are asked strictly one at a time without batching or premature solutionizing.

## Phase — required
addy:Define

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `test-driven-development` and `shipping-and-launch`, and a dialogue behavioral eval scenario specifying dialogue kind, prompt, expected output, and assertion expectations.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral dialogue grading against conversational turn transcripts.

## Invokes — required
- skill interview-me — evals/cases/interview-me.json:2
- skill test-driven-development — evals/cases/interview-me.json:21
- skill shipping-and-launch — evals/cases/interview-me.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `requirements` — evals/cases/interview-me.json:10 — used here
- `one question at a time` — evals/cases/interview-me.json:14 — used here

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
Uses `kind: "dialogue"` to evaluate conversational discipline. The expectations strictly verify that questions are presented one at a time rather than dumped as a multi-question list, and that the agent discovers the underlying need before proposing architectures. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1197 bytes (approx. 299 tokens). Standalone config file loaded only during evaluation passes.
