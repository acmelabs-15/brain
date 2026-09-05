---
package: addy
path: evals/cases/observability-and-instrumentation.json
type: config
bytes: 1278
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/observability-and-instrumentation.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/observability-and-instrumentation.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `observability-and-instrumentation` skill. Without this file, requests for logging, tracing, metrics, or alert setup could misroute to generic implementation skills, and behavioral runs could fail to enforce defining on-call questions before instrumenting code, using structured events with correlation IDs, and guarding against high label cardinality in metrics.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/observability-and-instrumentation/SKILL.md` and behavioral test fixtures located in `evals/fixtures/observability-and-instrumentation/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `observability-and-instrumentation` — evals/cases/observability-and-instrumentation.json:2 — defined here
- `structured logging` — evals/cases/observability-and-instrumentation.json:6 — used here
- `metrics` — evals/cases/observability-and-instrumentation.json:6 — used here
- `tracing` — evals/cases/observability-and-instrumentation.json:10 — used here
- `alerts` — evals/cases/observability-and-instrumentation.json:14 — used here
- `code-simplification` — evals/cases/observability-and-instrumentation.json:21 — used here
- `PRD` — evals/cases/observability-and-instrumentation.json:24 — used here
- `on-call questions` — evals/cases/observability-and-instrumentation.json:32 — used here
- `RED metrics` — evals/cases/observability-and-instrumentation.json:32 — used here
- `correlation id` — evals/cases/observability-and-instrumentation.json:38 — used here
- `label cardinality` — evals/cases/observability-and-instrumentation.json:39 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains 3 positive triggers with `top_k: 3`, 2 negative triggers (one owned by `code-simplification`), and 1 execution eval backed by `evals/fixtures/observability-and-instrumentation/` evaluating payment-retry instrumentation against RED metrics and structured logging guidelines.

## Context cost
1278 bytes, ~319 tokens.
