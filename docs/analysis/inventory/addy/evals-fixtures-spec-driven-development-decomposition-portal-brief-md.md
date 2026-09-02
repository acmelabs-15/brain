---
package: addy
path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md
type: doc
bytes: 1067
unit: inv-addy-2
---

# evals/fixtures/spec-driven-development-decomposition/portal-brief.md

## Purpose — required, verbatim
> "Leadership wants a self-serve customer portal shipped as one initiative." — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:3 (no explicit purpose statement)

## Design intent — required
Provides a multi-domain product brief spanning four interconnected functional areas (authentication/account management, subscription billing/invoicing, notifications/webhooks, usage dashboard/reporting) with distinct stakeholders and dependencies. Solves the problem of evaluating whether an engineering agent can construct a capability map with stable module IDs and acyclic one-way dependencies, gating per-module specification on map approval rather than prematurely drafting a monolithic spec or diving into code.

## Phase — required
none

## Inputs — required
- Feature requirements and constraints across 4 domains (accounts, billing, notifications, usage dashboard) — `evals/fixtures/spec-driven-development-decomposition/portal-brief.md:6-22`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/spec-driven-development.json` — evals/cases/spec-driven-development.json:61
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `Customer portal` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1 — used here
- `product brief` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1 — used here
- `self-serve customer portal` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:3 — used here
- `company SSO` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:6 — used here
- `invoices` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:8 — used here
- `webhooks` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:11 — used here
- `usage dashboard` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:12 — used here
- `Constraints` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:14 — used here
- `shippable and verifiable` — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:21 — used here

## Structure
- `# Customer portal — product brief` (line 1)
- Initiative request items (lines 3-12)
- `Constraints gathered so far:` (lines 14-22)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifies clear multi-domain dependencies: Billing depends on Accounts; Notifications fire on Billing & Accounts; Dashboard reads from Billing & Notifications; distinct owners (platform, finance, growth). Excellent fixture for testing capability mapping and module decomposition.

## Context cost
1,067 bytes (approx. 267 tokens).
