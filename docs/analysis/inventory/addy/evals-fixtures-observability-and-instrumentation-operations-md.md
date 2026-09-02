---
package: addy
path: evals/fixtures/observability-and-instrumentation/operations.md
type: doc
bytes: 422
unit: inv-addy-2
---

# evals/fixtures/observability-and-instrumentation/operations.md

## Purpose — required, verbatim
> "# Payment retry operations\n\nOn-call must be able to answer:" — evals/fixtures/observability-and-instrumentation/operations.md:1-3 (no explicit purpose statement)

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
- config `evals/cases/observability-and-instrumentation.json` (via fixture directory reference) — evals/cases/observability-and-instrumentation.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

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
