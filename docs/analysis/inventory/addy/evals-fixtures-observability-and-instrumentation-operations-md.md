---
package: addy
path: evals/fixtures/observability-and-instrumentation/operations.md
type: doc
bytes: 422
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/observability-and-instrumentation/operations.md, sha256: 37aa8678c2df2ac7c8c5836804003ba5429b955681968df75421fbb65c13ffa6}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/observability-and-instrumentation/operations.md

## Purpose — required, verbatim
> "Payment retry operations" — evals/fixtures/observability-and-instrumentation/operations.md:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides operational requirements and on-call constraints for the `observability-and-instrumentation` evaluation test. It specifies the 4 core on-call questions that telemetry must answer (transient recovery, failure driver, double charge prevention, customer intervention) along with security/PII constraints forbidding logging of card numbers, customer emails, or raw gateway responses.

## Phase — required
`addy:OPERATE`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Payment retry operations` — evals/fixtures/observability-and-instrumentation/operations.md:1 — defined here
- `On-call` — evals/fixtures/observability-and-instrumentation/operations.md:3 — used here
- `correlation identifiers` — evals/fixtures/observability-and-instrumentation/operations.md:10 — used here
- `Payment and attempt IDs` — evals/fixtures/observability-and-instrumentation/operations.md:10 — used here
- `Card numbers` — evals/fixtures/observability-and-instrumentation/operations.md:10 — used here
- `customer email addresses` — evals/fixtures/observability-and-instrumentation/operations.md:11 — used here
- `raw gateway responses` — evals/fixtures/observability-and-instrumentation/operations.md:11 — used here

## Structure
- `# Payment retry operations` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Cleanly operationalizes the principle from `references/observability-checklist.md` that telemetry must start with 2–4 on-call questions and respect strict PII redaction rules.

## Context cost
422 bytes (~105 tokens). Loaded together with `payment-retry.js` (339 bytes), total fixture context cost is 761 bytes (~190 tokens).
