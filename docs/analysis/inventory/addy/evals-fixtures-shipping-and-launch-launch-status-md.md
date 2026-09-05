---
package: addy
path: evals/fixtures/shipping-and-launch/launch-status.md
type: doc
bytes: 554
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/shipping-and-launch/launch-status.md

## Purpose — required, verbatim
> "- Unit tests: green." — evals/fixtures/shipping-and-launch/launch-status.md:3
(no explicit purpose statement)

## Design intent — required
Status artifact fixture for evaluating the `shipping-and-launch` skill (`evals/cases/shipping-and-launch.json` evals 1 and 2). It provides a realistic pre-launch readiness status report containing a mix of passing indicators (passing unit tests, disableable feature flag, tested additive database migration) alongside critical launch blockers (failing end-to-end checkout test, stale staging smoke test, missing payment alerts, undocumented rollback commands/owner, missing runbook). Tests whether an agent evaluates release criteria objectively and renders an evidence-based NO-GO or HOLD decision.

## Phase — required
none

## Inputs — required
Read by eval runners for `shipping-and-launch` evals.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Checkout launch status` — evals/fixtures/shipping-and-launch/launch-status.md:1 — defined here
- `Unit tests` — evals/fixtures/shipping-and-launch/launch-status.md:3 — used here
- `End-to-end checkout test` — evals/fixtures/shipping-and-launch/launch-status.md:4 — used here
- `Staging smoke test` — evals/fixtures/shipping-and-launch/launch-status.md:5 — used here
- `Production dashboard` — evals/fixtures/shipping-and-launch/launch-status.md:6 — used here
- `Feature flag` — evals/fixtures/shipping-and-launch/launch-status.md:8 — used here
- `Rollback owner` — evals/fixtures/shipping-and-launch/launch-status.md:9 — used here
- `Database change` — evals/fixtures/shipping-and-launch/launch-status.md:10 — used here
- `launch runbook` — evals/fixtures/shipping-and-launch/launch-status.md:11 — used here

## Structure
- `# Checkout launch status — tomorrow` — evals/fixtures/shipping-and-launch/launch-status.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Presents 8 distinct readiness checklist items across unit testing, end-to-end testing, staging smoke verification, production telemetry/alerts, feature flags, rollback procedures, database migration safety, and team runbook handoff.

## Context cost
554 bytes, ~120 tokens.
