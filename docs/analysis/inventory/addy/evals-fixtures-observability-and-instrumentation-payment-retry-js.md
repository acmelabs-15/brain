---
package: addy
path: evals/fixtures/observability-and-instrumentation/payment-retry.js
type: file
bytes: 339
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/observability-and-instrumentation/payment-retry.js, sha256: 09c96314043b55b0ae4ad6f2ab5a39531636bd7c62fb869120ee626208573592}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/observability-and-instrumentation/payment-retry.js

## Purpose — required, verbatim
> "async function retryPayment(payment, gateway) {" — evals/fixtures/observability-and-instrumentation/payment-retry.js:3 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Serves as an un-instrumented code fixture for evaluating the `observability-and-instrumentation` skill. It contains a basic payment retry implementation (`retryPayment`) with naive console logging (`console.log`) and no structured logging, correlation IDs, RED metrics, or tracing context, providing the baseline for evaluating an agent's ability to add production-grade observability.

## Phase — required
`addy:BUILD`

## Inputs — required
- `payment` object passed to `retryPayment(payment, gateway)` (evals/fixtures/observability-and-instrumentation/payment-retry.js:3)
- `gateway` client with async `.charge(payment)` method (evals/fixtures/observability-and-instrumentation/payment-retry.js:3,6)

## Outputs — required
- Returns the resolved charge response from `gateway.charge(payment)` on successful attempt (evals/fixtures/observability-and-instrumentation/payment-retry.js:6)
- Throws `Error('payment failed')` when 3 attempts fail (evals/fixtures/observability-and-instrumentation/payment-retry.js:11)
- Emits unstructured log messages to stdout via `console.log` on failure (evals/fixtures/observability-and-instrumentation/payment-retry.js:8)

## Invokes — required
- `gateway.charge` — evals/fixtures/observability-and-instrumentation/payment-retry.js:6

## Invoked by — required
orphan

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
