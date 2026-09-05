---
package: addy
path: evals/fixtures/deprecation-and-migration/api-inventory.md
type: doc
bytes: 504
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/deprecation-and-migration/api-inventory.md, sha256: ac739ed01a61c7dea2e9ce570948cfe5443fce471fe8e3d894bb42c82a7ca6c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/deprecation-and-migration/api-inventory.md

## Purpose — required, verbatim
> "- Public consumers: 200 organizations." — evals/fixtures/deprecation-and-migration/api-inventory.md:3
(no explicit purpose statement)

## Design intent — required
Provides an operational context fixture for evaluating the `deprecation-and-migration` skill. It quantifies active usage (200 organizations, 48,000 requests/day, 173 active API keys), contractual obligations (90 days' notice required for largest consumer), contact accessibility (188 direct, 12 reseller-managed), and current gaps (no deprecation headers or migration guide). Evaluates whether an agent develops a realistic, telemetry-informed, phased sunset plan rather than blindly shutting down an endpoint on a calendar date.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config deprecation-and-migration — evals/cases/deprecation-and-migration.json:34

## Concepts named — required, verbatim
- `v1 API inventory` — evals/fixtures/deprecation-and-migration/api-inventory.md:1 — defined here
- `/v2/orders` — evals/fixtures/deprecation-and-migration/api-inventory.md:4 — defined here
- `telemetry` — evals/fixtures/deprecation-and-migration/api-inventory.md:7 — used here

## Structure
- `# v1 API inventory` — evals/fixtures/deprecation-and-migration/api-inventory.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights real-world operational challenges during sunsetting: contractual 90-day notification mandates and indirect reseller communication paths for 12 organizations.

## Context cost
504 bytes, ~126 tokens.
