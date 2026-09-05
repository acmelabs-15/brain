---
package: addy
path: evals/fixtures/observability-and-instrumentation/payment-retry.js
type: file
bytes: 339
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/observability-and-instrumentation/payment-retry.js, sha256: 09c96314043b55b0ae4ad6f2ab5a39531636bd7c62fb869120ee626208573592}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/observability-and-instrumentation/payment-retry.js

## Purpose — required, verbatim
> "async function retryPayment(payment, gateway) {" — evals/fixtures/observability-and-instrumentation/payment-retry.js:3 (no explicit purpose statement)

## Design intent — required
Provides an un-instrumented payment retry loop with naive string console logging and loss of error context. Serves as the implementation refactoring target in eval case #1 of `observability-and-instrumentation`, challenging an agent to replace primitive string logging with structured event logging, correlation identifiers, RED metrics, and actionable alerts aligned with `operations.md`.

## Phase — required
none

## Inputs — required
Consumes `payment` data object and `gateway` client object with async `charge` method passed to `retryPayment` at evals/fixtures/observability-and-instrumentation/payment-retry.js:3.

## Outputs — required
Returns gateway charge result on success at evals/fixtures/observability-and-instrumentation/payment-retry.js:6, logs retry failures to stdout via `console.log` at evals/fixtures/observability-and-instrumentation/payment-retry.js:8, and throws `Error('payment failed')` when retries are exhausted at evals/fixtures/observability-and-instrumentation/payment-retry.js:11. Exports `module.exports = { retryPayment }` at evals/fixtures/observability-and-instrumentation/payment-retry.js:14.

## Invokes — required
none

## Invoked by — required
"observability-and-instrumentation" — evals/cases/observability-and-instrumentation.json:34

## Concepts named — required, verbatim
none

## Structure
- Function definition: `retryPayment` — evals/fixtures/observability-and-instrumentation/payment-retry.js:3
- Retry loop with try/catch and console.log — evals/fixtures/observability-and-instrumentation/payment-retry.js:4-10
- Terminal failure throw: `throw new Error('payment failed');` — evals/fixtures/observability-and-instrumentation/payment-retry.js:11
- Module export: `module.exports = { retryPayment }` — evals/fixtures/observability-and-instrumentation/payment-retry.js:14

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/observability-and-instrumentation/payment-retry.js, language: JavaScript, lines: 15
- documented invocation: none (module function)
- **executed:** yes
- actual command run: `bun -e 'const { retryPayment } = require("./sources/addy/evals/fixtures/observability-and-instrumentation/payment-retry.js"); retryPayment({}, { charge: async () => "charged" }).then(console.log);'`
- stdout: `charged`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (throws Error on failure)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, executes charge and resolves value

## Defects — required
none

## Observations
Exemplar flawed implementation intentionally lacking observability features (no correlation ID, unstructured prose log, discarded stack trace/error details, blind retry count without backoff or telemetry).

## Context cost
339 bytes, ~75 tokens.
