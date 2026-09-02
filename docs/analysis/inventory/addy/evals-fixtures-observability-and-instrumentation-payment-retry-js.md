---
package: addy
path: evals/fixtures/observability-and-instrumentation/payment-retry.js
type: file
bytes: 339
unit: inv-addy-2
---

# evals/fixtures/observability-and-instrumentation/payment-retry.js

## Purpose — required, verbatim
> "async function retryPayment(payment, gateway) {\n  for (let attempt = 1; attempt <= 3; attempt++) {\n    try {\n      return await gateway.charge(payment);\n    } catch (error) {\n      console.log(`retry ${attempt} failed: ${error.message}`);\n    }\n  }\n  throw new Error('payment failed');\n}" — evals/fixtures/observability-and-instrumentation/payment-retry.js:3-12 (no explicit purpose statement)

## Design intent — required
Serves as an un-instrumented code fixture for evaluating the `observability-and-instrumentation` skill. It contains a basic payment retry implementation (`retryPayment`) with naive console logging (`console.log`) and no structured logging, correlation IDs, RED metrics, or tracing context, providing the baseline for evaluating an agent's ability to add production-grade observability.

## Phase — required
`addy:BUILD`

## Inputs — required
- `payment` object passed to `retryPayment(payment, gateway)` — evals/fixtures/observability-and-instrumentation/payment-retry.js:3
- `gateway` client with async `.charge(payment)` method — evals/fixtures/observability-and-instrumentation/payment-retry.js:3,6

## Outputs — required
- Returns the resolved charge response from `gateway.charge(payment)` on successful attempt — evals/fixtures/observability-and-instrumentation/payment-retry.js:6
- Throws `Error('payment failed')` when 3 attempts fail — evals/fixtures/observability-and-instrumentation/payment-retry.js:11
- Emits unstructured log messages to stdout via `console.log` on failure — evals/fixtures/observability-and-instrumentation/payment-retry.js:8

## Invokes — required
- `gateway.charge` — evals/fixtures/observability-and-instrumentation/payment-retry.js:6

## Invoked by — required
- config `evals/cases/observability-and-instrumentation.json` (via fixture directory reference) — evals/cases/observability-and-instrumentation.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `retryPayment` — evals/fixtures/observability-and-instrumentation/payment-retry.js:3 — defined here
- `gateway.charge` — evals/fixtures/observability-and-instrumentation/payment-retry.js:6 — used here

## Structure
- `retryPayment(payment, gateway)` — line 3
- `module.exports` — line 14

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The fixture demonstrates common observability anti-patterns in production services: unstructured string logging with `console.log`, missing correlation/request IDs, absence of structured error/metric tracking, and no duration or attempt metadata.

## Context cost
339 bytes (~85 tokens). Loaded together with `operations.md` (422 bytes), total fixture context cost is 761 bytes (~190 tokens).
