---
package: addy
path: evals/fixtures/observability-and-instrumentation/payment-retry.js
type: file
bytes: 339
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/observability-and-instrumentation/payment-retry.js, sha256: 09c96314043b55b0ae4ad6f2ab5a39531636bd7c62fb869120ee626208573592}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/observability-and-instrumentation/payment-retry.js

## Purpose — required, verbatim
> "async function retryPayment(payment, gateway) {" — evals/fixtures/observability-and-instrumentation/payment-retry.js:3
(no explicit purpose statement)

## Design intent — required
Provides an uninstrumented payment retry loop that catches errors and logs unstructured text via `console.log`. In the `observability-and-instrumentation` eval fixture, this serves as the code target to be refactored with structured logging, correlation IDs, RED metrics, and actionable alerts.

## Phase — required
none

## Inputs — required
Parameters `payment` (payment descriptor object) and `gateway` (client with `charge` method) passed to `retryPayment` (line 3).

## Outputs — required
Result of `gateway.charge(payment)` on success, or throws `Error('payment failed')` upon exhaustion of 3 attempts (line 6, 11).

## Invokes — required
none

## Invoked by — required
- config observability-and-instrumentation — evals/cases/observability-and-instrumentation.json:34

## Concepts named — required, verbatim
- `retryPayment` — evals/fixtures/observability-and-instrumentation/payment-retry.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · evals/fixtures/observability-and-instrumentation/payment-retry.js:8 · uses console.log with unstructured string interpolation rather than structured telemetry or correlation IDs.

## Observations
Intentionally lacks structured observability, presenting a target for applying the observability-and-instrumentation skill.

## Context cost
339 bytes, ~85 tokens.
