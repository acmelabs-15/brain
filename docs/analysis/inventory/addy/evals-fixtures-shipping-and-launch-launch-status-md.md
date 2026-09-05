---
package: addy
path: evals/fixtures/shipping-and-launch/launch-status.md
type: doc
bytes: 554
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/shipping-and-launch/launch-status.md

## Purpose — required, verbatim
> "- Unit tests: green." — evals/fixtures/shipping-and-launch/launch-status.md:3
(no explicit purpose statement)

## Design intent — required
Provides a pre-launch readiness status checklist fixture for evaluating the `shipping-and-launch` skill. It describes the state of a checkout v2 deployment with critical operational gaps (failing end-to-end payment test, unrun staging smoke tests, missing payment failure alerts, undocumented rollback owner/commands, missing support runbook) alongside mitigating factors (feature flag available, additive DB migration). This tests an agent's ability to synthesize evidence into an objective go/no-go assessment with explicit blockers.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config shipping-and-launch — evals/cases/shipping-and-launch.json:34
- config shipping-and-launch — evals/cases/shipping-and-launch.json:47

## Concepts named — required, verbatim
- `Checkout launch status` — evals/fixtures/shipping-and-launch/launch-status.md:1 — defined here
- `Unit tests` — evals/fixtures/shipping-and-launch/launch-status.md:3 — used here
- `End-to-end checkout test` — evals/fixtures/shipping-and-launch/launch-status.md:4 — used here
- `Staging smoke test` — evals/fixtures/shipping-and-launch/launch-status.md:5 — used here
- `Production dashboard` — evals/fixtures/shipping-and-launch/launch-status.md:6 — used here
- `Feature flag` — evals/fixtures/shipping-and-launch/launch-status.md:8 — used here
- `Rollback` — evals/fixtures/shipping-and-launch/launch-status.md:9 — used here
- `Database change` — evals/fixtures/shipping-and-launch/launch-status.md:10 — used here

## Structure
- `# Checkout launch status — tomorrow` — evals/fixtures/shipping-and-launch/launch-status.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Evaluated in `evals/cases/shipping-and-launch.json:29-55` across both standard go/no-go assessment (eval 1) and authority pressure scenario (eval 2).

## Context cost
554 bytes, ~138 tokens.
