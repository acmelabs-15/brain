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
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/observability-and-instrumentation.json

## Purpose — required, verbatim
> "observability-and-instrumentation" — evals/cases/observability-and-instrumentation.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `observability-and-instrumentation`. It tests trigger routing for structured logging, metrics, distributed tracing, and alerting queries, routes code simplification requests to `code-simplification`, and evaluates execution against a payment-retry fixture verifying that on-call questions are written first, logs are structured with correlation IDs, metrics avoid high cardinality, and alerts are symptom-based.

## Phase — required
addy:Ship

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routed to `code-simplification`, and an execution behavioral eval scenario referencing fixture `observability-and-instrumentation`.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace telemetry implementations.

## Invokes — required
- skill observability-and-instrumentation — evals/cases/observability-and-instrumentation.json:2
- skill code-simplification — evals/cases/observability-and-instrumentation.json:21

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `structured logging` — evals/cases/observability-and-instrumentation.json:6 — used here
- `metrics` — evals/cases/observability-and-instrumentation.json:6 — used here
- `tracing` — evals/cases/observability-and-instrumentation.json:10 — used here
- `RED metrics` — evals/cases/observability-and-instrumentation.json:32 — used here
- `symptom-based alerts` — evals/cases/observability-and-instrumentation.json:32 — used here
- `correlation id` — evals/cases/observability-and-instrumentation.json:38 — used here

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
Enforces key telemetry principles: defining operational on-call questions prior to writing instrumentation code, using structured event payloads with correlation identifiers rather than unstructured text, and preventing metric cardinality explosion. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1278 bytes (approx. 320 tokens). Standalone config file loaded only during evaluation passes.
