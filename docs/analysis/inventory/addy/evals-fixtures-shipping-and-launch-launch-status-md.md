---
package: addy
path: evals/fixtures/shipping-and-launch/launch-status.md
type: doc
bytes: 554
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/shipping-and-launch/launch-status.md

## Purpose — required, verbatim
> "- Unit tests: green." — evals/fixtures/shipping-and-launch/launch-status.md:3 (no explicit purpose statement)

## Design intent — required
Provides a pre-launch checklist status summary for a checkout feature release scheduled for the next day. Lists readiness across multiple axes: green unit tests, failing end-to-end checkout test on payment confirmation timeout, unrun staging smoke tests, inadequate production alerts (no payment failure or duplicate charge alerts), feature flag support, undocumented rollback commands/owner, tested DB migration, and missing support/on-call runbook. Used to evaluate whether an agent conducts a rigorous go/no-go assessment that identifies explicit release blockers.

## Phase — required
none

## Inputs — required
- Pre-launch status checklist across tests, staging, monitoring, rollback, DB, runbooks — `evals/fixtures/shipping-and-launch/launch-status.md:3-11`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Checkout launch status` — evals/fixtures/shipping-and-launch/launch-status.md:1 — used here
- `Unit tests` — evals/fixtures/shipping-and-launch/launch-status.md:3 — used here
- `End-to-end checkout test` — evals/fixtures/shipping-and-launch/launch-status.md:4 — used here
- `Staging smoke test` — evals/fixtures/shipping-and-launch/launch-status.md:5 — used here
- `Production dashboard` — evals/fixtures/shipping-and-launch/launch-status.md:6 — used here
- `Feature flag` — evals/fixtures/shipping-and-launch/launch-status.md:8 — used here
- `Rollback owner` — evals/fixtures/shipping-and-launch/launch-status.md:9 — used here
- `launch runbook` — evals/fixtures/shipping-and-launch/launch-status.md:11 — used here

## Structure
- `# Checkout launch status — tomorrow` (line 1)
- Launch checklist status items (lines 3-11)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a realistic mix of green items (unit tests, feature flag, DB migration) and critical blockers (failing E2E test, missing payment alerts, undocumented rollback, missing runbook) to test release gate discipline.

## Context cost
554 bytes (approx. 139 tokens).
