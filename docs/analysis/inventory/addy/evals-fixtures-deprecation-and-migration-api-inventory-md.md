---
package: addy
path: evals/fixtures/deprecation-and-migration/api-inventory.md
type: doc
bytes: 504
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/deprecation-and-migration/api-inventory.md, sha256: ac739ed01a61c7dea2e9ce570948cfe5443fce471fe8e3d894bb42c82a7ca6c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/deprecation-and-migration/api-inventory.md

## Purpose — required, verbatim
> "Public consumers: 200 organizations." — evals/fixtures/deprecation-and-migration/api-inventory.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing factual operational data about a legacy public REST API (v1) being deprecated in favor of `/v2/orders` for testing the `deprecation-and-migration` skill (`evals/cases/deprecation-and-migration.json`). It details consumer count, traffic volume, contractual notification constraints (90 days), telemetry capabilities, contactability limitations, and the absence of deprecation headers or migration documentation. Without it, the evaluation would lack realistic operational constraints to verify whether an agent designs a staged, telemetry-governed migration plan rather than an abrupt calendar-based shutdown.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `v1 API inventory` — evals/fixtures/deprecation-and-migration/api-inventory.md:1 — defined here
- `Public consumers` — evals/fixtures/deprecation-and-migration/api-inventory.md:3 — defined here
- `telemetry` — evals/fixtures/deprecation-and-migration/api-inventory.md:7 — used here
- `deprecation headers` — evals/fixtures/deprecation-and-migration/api-inventory.md:9 — used here
- `migration guide` — evals/fixtures/deprecation-and-migration/api-inventory.md:9 — used here

## Structure
- `# v1 API inventory` — evals/fixtures/deprecation-and-migration/api-inventory.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains specific edge constraints (12 reseller-managed accounts cannot be contacted directly; largest contract requires 90 days notice) that force an agent to plan indirect communications and extended compatibility windows.

## Context cost
504 bytes, ~110 tokens.
