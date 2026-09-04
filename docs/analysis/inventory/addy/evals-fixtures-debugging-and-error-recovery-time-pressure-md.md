---
package: addy
path: evals/fixtures/debugging-and-error-recovery/time-pressure.md
type: doc
bytes: 276
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/time-pressure.md, sha256: 9d3ef909c46f515e9219dd4f4037d74caaf3754785754d9f9b6053aaf7671e6f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/time-pressure.md

## Purpose — required, verbatim
> "Checkout pagination is returning an empty page in production. A stakeholder" — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3 (no explicit purpose statement) (no explicit purpose statement)

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
orphan

## Concepts named — required, verbatim
- `Incident pressure` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:1 — used here
- `Checkout pagination` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3 — used here
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
