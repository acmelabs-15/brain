---
package: addy
path: evals/cases/observability-and-instrumentation.json
type: config
bytes: 1278
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/observability-and-instrumentation.json

## Purpose — required, verbatim
> "skill_name": "observability-and-instrumentation" — evals/cases/observability-and-instrumentation.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral assertions for the `observability-and-instrumentation` skill in the Addy eval harness. Specifies 3 positive trigger prompts for structured logging, tracing, metrics, and paging alert design (top_k=3), 2 negative prompts (routing to `code-simplification` and an unrouted PRD distractor), and 1 execution evaluation testing on-call question formulation, structured event logging with correlation IDs, RED metrics without unbounded label cardinality, and actionable symptom-based alerts.

## Phase — required
none

## Inputs — required
User prompts requesting instrumentation, telemetry, or operational alerting, and test fixture directory `evals/fixtures/observability-and-instrumentation`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` (trigger ranking scores and telemetry design assertions).

## Invokes — required
- skill observability-and-instrumentation — evals/cases/observability-and-instrumentation.json:2
- skill code-simplification — evals/cases/observability-and-instrumentation.json:21

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/observability-and-instrumentation.json:2 — used here
- `observability-and-instrumentation` — evals/cases/observability-and-instrumentation.json:2 — used here
- `trigger` — evals/cases/observability-and-instrumentation.json:3 — defined here
- `positive` — evals/cases/observability-and-instrumentation.json:4 — defined here
- `top_k` — evals/cases/observability-and-instrumentation.json:7 — defined here
- `negative` — evals/cases/observability-and-instrumentation.json:18 — defined here
- `owner` — evals/cases/observability-and-instrumentation.json:21 — defined here
- `evals` — evals/cases/observability-and-instrumentation.json:28 — defined here
- `expected_output` — evals/cases/observability-and-instrumentation.json:32 — defined here
- `expectations` — evals/cases/observability-and-instrumentation.json:36 — defined here
- `structured logging` — evals/cases/observability-and-instrumentation.json:6 — used here
- `PRD` — evals/cases/observability-and-instrumentation.json:24 — used here
- `On-call questions` — evals/cases/observability-and-instrumentation.json:32 — used here
- `RED metrics` — evals/cases/observability-and-instrumentation.json:32 — used here
- `symptom-based alerts` — evals/cases/observability-and-instrumentation.json:32 — used here
- `correlation id` — evals/cases/observability-and-instrumentation.json:38 — used here
- `label cardinality` — evals/cases/observability-and-instrumentation.json:39 — used here

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
Defines 3 positive triggers and 2 negative triggers (one routed to `code-simplification` at line 21, and one unrouted PRD distractor at line 24). The evaluation case requires establishing operational on-call questions before emitting code, requiring structured JSON events with correlation IDs over unstructured print statements, avoiding Prometheus metric label cardinality explosions, and preferring symptom-based SLO alerts over cause-based alerts.

## Context cost
1,278 bytes (~320 tokens). Loads nothing directly.
