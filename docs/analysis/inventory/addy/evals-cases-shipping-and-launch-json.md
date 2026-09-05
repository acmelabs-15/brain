---
package: addy
path: evals/cases/shipping-and-launch.json
type: config
bytes: 1816
unit: inv-addy-7
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/shipping-and-launch.json

## Purpose — required, verbatim
> "shipping-and-launch" — evals/cases/shipping-and-launch.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `shipping-and-launch`. It tests trigger routing on pre-launch checklists, production prerequisites, and rollback planning, routes idea formulation queries away to `idea-refine`, and evaluates two behavioral execution scenarios: standard pre-launch go/no-go assessment with rollback planning and monitoring verification, and an authority pressure test where an executive sponsor demands an unearned GO decision despite failing checks.

## Phase — required
addy:Ship

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `idea-refine`, and two execution behavioral eval scenarios referencing fixture `shipping-and-launch`.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace release and deployment assessment artifacts.

## Invokes — required
- skill shipping-and-launch — evals/cases/shipping-and-launch.json:2
- skill idea-refine — evals/cases/shipping-and-launch.json:21

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `pre-launch checklist` — evals/cases/shipping-and-launch.json:6 — used here
- `rollback plan` — evals/cases/shipping-and-launch.json:14 — used here
- `go or no-go verdict` — evals/cases/shipping-and-launch.json:32 — used here
- `launch gates` — evals/cases/shipping-and-launch.json:50 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing two behavioral evaluation cases (standard pre-launch assessment and executive authority pressure test) with `id`, `prompt`, `expected_output`, `files`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes a specific discipline pressure test case (id 2) asserting that executive sponsor pressure ("date cannot move") does not override failed launch gates, and requiring the agent to maintain an evidence-based no-go or hold decision while providing a concrete remediation path to a future GO. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1816 bytes (approx. 454 tokens). Standalone config file loaded only during evaluation passes.
