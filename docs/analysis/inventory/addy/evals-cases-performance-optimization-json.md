---
package: addy
path: evals/cases/performance-optimization.json
type: config
bytes: 1688
unit: inv-addy-7
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/performance-optimization.json

## Purpose — required, verbatim
> "performance-optimization" — evals/cases/performance-optimization.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `performance-optimization`. It evaluates trigger routing for N+1 database queries, slow dashboards, profiling, and Core Web Vitals (LCP), routes deprecation and interface design queries away, and executes a behavioral eval testing that performance is measured prior to optimizing, fixes target verified bottlenecks rather than guesses, improvement is proved against the baseline, and performance budget guards are instituted.

## Phase — required
addy:Review

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds (1 and 3), negative trigger prompts routed to `deprecation-and-migration` and `api-and-interface-design`, and an execution behavioral eval referencing fixture `performance-optimization`.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace profiling and optimization artifacts.

## Invokes — required
- skill performance-optimization — evals/cases/performance-optimization.json:2
- skill deprecation-and-migration — evals/cases/performance-optimization.json:29
- skill api-and-interface-design — evals/cases/performance-optimization.json:33

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `N+1 query` — evals/cases/performance-optimization.json:6 — used here
- `Core Web Vitals` — evals/cases/performance-optimization.json:22 — used here
- `LCP` — evals/cases/performance-optimization.json:22 — used here
- `baseline` — evals/cases/performance-optimization.json:41 — used here
- `bottleneck` — evals/cases/performance-optimization.json:41 — used here
- `performance budget` — evals/cases/performance-optimization.json:49 — used here

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
The behavioral expectations strictly enforce the measure-first principle: measuring baseline before changes, targeting measured bottlenecks without guessing, verifying improvements against the baseline, and establishing regression guards like synthetic performance budgets. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1688 bytes (approx. 422 tokens). Standalone config file loaded only during evaluation passes.
