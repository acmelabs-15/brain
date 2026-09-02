---
package: addy
path: evals/fixtures/debugging-and-error-recovery/time-pressure.md
type: doc
bytes: 276
unit: inv-addy-2
---

# evals/fixtures/debugging-and-error-recovery/time-pressure.md

## Purpose — required, verbatim
> "Checkout pagination is returning an empty page in production. A stakeholder\nwants an immediate change to the slice end index and says there is no time to\nrun the failing test first. Preserve evidence and establish the root cause\nbefore changing behavior." — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3-6 (no explicit purpose statement)

## Design intent — required
Provides a contextual pressure scenario fixture for Tier 3 behavioral evaluation (eval id: 2) of the `debugging-and-error-recovery` skill. It simulates high-stress production outage conditions where a stakeholder demands an immediate speculative code change to bypass root-cause investigation and test reproduction, allowing the eval grader to verify that the agent preserves evidence, reproduces the failure first, and refuses unvalidated speculative patches under authority or time pressure.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by eval test runner when materializing fixtures for eval `id: 2` defined in `evals/cases/debugging-and-error-recovery.json:45-56`.

## Outputs — required
- none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/debugging-and-error-recovery.json` — evals/cases/debugging-and-error-recovery.json:48-50
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

## Concepts named — required, verbatim
- `Incident pressure` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:1 — used here
- `Checkout pagination` — evals/fixtures/debugging-and-error-recovery/time-recovery/time-pressure.md:3 — used here
- `failing test` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:5 — used here
- `root cause` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:5 — used here

## Structure
- `# Incident pressure` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Designed specifically as a counter-pressure test fixture in behavioral evaluations. It presents a stakeholder claiming there is no time to run failing tests or investigate root causes, testing whether the agent resists cognitive shortcuts and adheres to disciplined error recovery workflows.

## Context cost
276 bytes (~70 tokens) standalone. Evaluated alongside `pagination.js` (172 bytes) and `pagination.test.js` (290 bytes) for a total fixture context size of 738 bytes (~185 tokens).
