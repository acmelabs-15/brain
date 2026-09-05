---
package: addy
path: evals/cases/performance-optimization.json
type: config
bytes: 1688
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/performance-optimization.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/performance-optimization.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `performance-optimization` skill. Without this file, performance-related prompts (such as N+1 query fixing, database indexing, and Core Web Vitals optimization) could misroute or fail to achieve rank-1 priority, and behavioral runs would lack tests requiring measurement of baselines prior to change, targeting measured bottlenecks rather than guessing, and establishing regression guards via performance budgets.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/performance-optimization/SKILL.md` and behavioral test fixtures located in `evals/fixtures/performance-optimization/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `performance-optimization` — evals/cases/performance-optimization.json:2 — defined here
- `N+1 query` — evals/cases/performance-optimization.json:6 — used here
- `bottleneck` — evals/cases/performance-optimization.json:10 — used here
- `indexes` — evals/cases/performance-optimization.json:14 — used here
- `Core Web Vitals` — evals/cases/performance-optimization.json:22 — used here
- `LCP` — evals/cases/performance-optimization.json:22 — used here
- `deprecation-and-migration` — evals/cases/performance-optimization.json:29 — used here
- `api-and-interface-design` — evals/cases/performance-optimization.json:33 — used here
- `measured baseline` — evals/cases/performance-optimization.json:41 — used here
- `regression guard` — evals/cases/performance-optimization.json:41 — used here
- `performance budget` — evals/cases/performance-optimization.json:49 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains 5 positive triggers (two tightened to `top_k: 1` for signature N+1 and database indexing asks), 2 negative prompts owned by `deprecation-and-migration` and `api-and-interface-design`, and 1 execution eval backed by `evals/fixtures/performance-optimization/` verifying measured optimization loops and regression guards.

## Context cost
1688 bytes, ~422 tokens.
