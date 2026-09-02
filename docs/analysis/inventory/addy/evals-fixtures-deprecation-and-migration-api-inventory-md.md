---
package: addy
path: evals/fixtures/deprecation-and-migration/api-inventory.md
type: doc
bytes: 504
unit: inv-addy-2
---

# evals/fixtures/deprecation-and-migration/api-inventory.md

## Purpose — required, verbatim
> "- Public consumers: 200 organizations." — evals/fixtures/deprecation-and-migration/api-inventory.md:3 (no explicit purpose statement)

## Design intent — required
Provides current usage telemetry, operational facts, and contractual constraints for a legacy v1 REST API being deprecated and replaced by `/v2/orders`: 200 organization consumers (173 active keys, 48k requests/day), 90-day notice contract requirement, existing request telemetry, direct contact availability for 188 consumers vs 12 reseller accounts, and absence of deprecation response headers or migration documentation. Used to evaluate whether an agent plans a staged, metrics-gated deprecation process with communication timelines, migration windows, telemetry monitoring, and explicit removal criteria.

## Phase — required
none

## Inputs — required
- Operational facts and contractual constraints for v1 API deprecation — `evals/fixtures/deprecation-and-migration/api-inventory.md:3-9`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/deprecation-and-migration.json` — evals/cases/deprecation-and-migration.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `v1 API inventory` — evals/fixtures/deprecation-and-migration/api-inventory.md:1 — used here
- `/v2/orders` — evals/fixtures/deprecation-and-migration/api-inventory.md:4 — used here
- `90 days' notice` — evals/fixtures/deprecation-and-migration/api-inventory.md:6 — used here
- `telemetry` — evals/fixtures/deprecation-and-migration/api-inventory.md:7 — used here
- `deprecation headers` — evals/fixtures/deprecation-and-migration/api-inventory.md:9 — used here
- `migration guide` — evals/fixtures/deprecation-and-migration/api-inventory.md:9 — used here

## Structure
- `# v1 API inventory` (line 1)
- Inventory bullet points (lines 3-9)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains key real-world migration constraints: contractual notice periods, dark traffic, reseller accounts, and missing deprecation telemetry headers.

## Context cost
504 bytes (approx. 126 tokens).
