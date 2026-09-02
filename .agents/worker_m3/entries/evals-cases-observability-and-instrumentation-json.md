---
package: addy
path: evals/cases/observability-and-instrumentation.json
type: config
bytes: 1278
unit: inv-addy-1
---

# evals/cases/observability-and-instrumentation.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"observability-and-instrumentation\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Add structured logging and metrics to the checkout service\",\n        \"top_k\": 3\n      }," — evals/cases/observability-and-instrumentation.json:1-8 (no explicit purpose statement)

## Design intent — required
Provides a declarative test case and routing benchmark configuration for evaluating the `observability-and-instrumentation` skill. It ensures that user queries requesting telemetry, metrics, request tracing, or on-call alerting trigger the correct skill at top-3 rank, verifies negative distractor routing against `code-simplification` and PRD authoring, and tests that the agent formulates operational on-call questions before adding structured JSON logs with correlation IDs, bounded-cardinality RED metrics, and symptom-based alerts against the `observability-and-instrumentation` fixture.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Add structured logging and metrics to the checkout service"` — evals/cases/observability-and-instrumentation.json:6
  - `"Set up tracing so we can follow a request across services"` — evals/cases/observability-and-instrumentation.json:10
  - `"What alerts should we page on for this new endpoint?"` — evals/cases/observability-and-instrumentation.json:14
  - `"Simplify this over-clever component"` — evals/cases/observability-and-instrumentation.json:20
  - `"Draft the PRD for the referral program"` — evals/cases/observability-and-instrumentation.json:24
- Behavioral eval prompt: `"Instrument a new payment-retry feature so on-call can operate it."` — evals/cases/observability-and-instrumentation.json:31
- Fixture files in `evals/fixtures/observability-and-instrumentation/` (`operations.md`, `payment-retry.js`) — evals/cases/observability-and-instrumentation.json:34

## Outputs — required
- Behavioral evaluation grading result: `evals/results/observability-and-instrumentation.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `observability-and-instrumentation` — evals/cases/observability-and-instrumentation.json:2
- skill `code-simplification` — evals/cases/observability-and-instrumentation.json:21
- fixture `observability-and-instrumentation` — evals/cases/observability-and-instrumentation.json:34

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `observability-and-instrumentation` — evals/cases/observability-and-instrumentation.json:2 — used here
- `structured logging` — evals/cases/observability-and-instrumentation.json:6 — used here
- `metrics` — evals/cases/observability-and-instrumentation.json:6 — used here
- `tracing` — evals/cases/observability-and-instrumentation.json:10 — used here
- `alerts` — evals/cases/observability-and-instrumentation.json:14 — used here
- `on-call` — evals/cases/observability-and-instrumentation.json:14 — used here
- `code-simplification` — evals/cases/observability-and-instrumentation.json:21 — used here
- `PRD` — evals/cases/observability-and-instrumentation.json:24 — used here
- `RED metrics` — evals/cases/observability-and-instrumentation.json:32 — used here
- `correlation id` — evals/cases/observability-and-instrumentation.json:38 — used here
- `label cardinality` — evals/cases/observability-and-instrumentation.json:39 — used here
- `symptom-based alerts` — evals/cases/observability-and-instrumentation.json:40 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 28
  - `id: 1` — line 30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The case specifies 3 positive triggers with `top_k: 3`, 2 negative triggers (one owning skill `code-simplification`), and 1 execution eval requiring real fixture code in `evals/fixtures/observability-and-instrumentation/` (`operations.md` and `payment-retry.js`). It tests whether logging is structured with correlation IDs rather than prose strings, whether metrics avoid unbounded label cardinality, and whether alerts are symptom-based rather than noisy cause-based alerts.

## Context cost
1,278 bytes (~320 tokens) file size. When loaded with fixture files in `evals/fixtures/observability-and-instrumentation/` (761 bytes total), total context cost is 2,039 bytes (~510 tokens).
