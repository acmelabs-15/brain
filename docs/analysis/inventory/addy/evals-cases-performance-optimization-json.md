---
package: addy
path: evals/cases/performance-optimization.json
type: config
bytes: 1688
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/performance-optimization.json

## Purpose — required, verbatim
> "skill_name": "performance-optimization" — evals/cases/performance-optimization.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and execution evaluations for the `performance-optimization` skill in the Addy eval harness. Specifies 5 positive trigger prompts covering N+1 query optimization, latency profiling, database indexing, and Core Web Vitals / LCP (with top_k thresholds 1 and 3), 2 negative prompts routing to `deprecation-and-migration` and `api-and-interface-design`, and 1 execution evaluation verifying a 5-step optimization methodology: establish measured baseline, identify bottleneck, apply targeted fix, verify improvement, and lock in regression guards (synthetic performance budget or field monitoring).

## Phase — required
none

## Inputs — required
User prompts requesting profiling, query optimization, or latency remediation, and test fixture directory `evals/fixtures/performance-optimization`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` (trigger classification scores and performance methodology assertion results).

## Invokes — required
- skill performance-optimization — evals/cases/performance-optimization.json:2
- skill deprecation-and-migration — evals/cases/performance-optimization.json:29
- skill api-and-interface-design — evals/cases/performance-optimization.json:33

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/performance-optimization.json:2 — used here
- `performance-optimization` — evals/cases/performance-optimization.json:2 — used here
- `trigger` — evals/cases/performance-optimization.json:3 — defined here
- `positive` — evals/cases/performance-optimization.json:4 — defined here
- `top_k` — evals/cases/performance-optimization.json:7 — defined here
- `negative` — evals/cases/performance-optimization.json:26 — defined here
- `owner` — evals/cases/performance-optimization.json:29 — defined here
- `evals` — evals/cases/performance-optimization.json:37 — defined here
- `expected_output` — evals/cases/performance-optimization.json:41 — defined here
- `expectations` — evals/cases/performance-optimization.json:45 — defined here
- `N+1 query` — evals/cases/performance-optimization.json:6 — used here
- `Core Web Vitals` — evals/cases/performance-optimization.json:22 — used here
- `LCP` — evals/cases/performance-optimization.json:22 — used here
- `baseline` — evals/cases/performance-optimization.json:41 — used here
- `bottleneck` — evals/cases/performance-optimization.json:41 — used here
- `regression guard` — evals/cases/performance-optimization.json:41 — used here
- `performance budget` — evals/cases/performance-optimization.json:49 — used here
- `field monitoring` — evals/cases/performance-optimization.json:49 — used here

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
Contains strict `top_k: 1` triggers for database query optimization (lines 7, 15). Negative triggers route explicitly to `deprecation-and-migration` and `api-and-interface-design`. The execution eval strictly forbids premature guessing or unmeasured optimization, enforcing a mandatory 5-phase loop: measure baseline, profile bottleneck, apply fix, verify against baseline, and add a synthetic budget or field monitor as regression guard.

## Context cost
1,688 bytes (~420 tokens). Loads nothing directly.
