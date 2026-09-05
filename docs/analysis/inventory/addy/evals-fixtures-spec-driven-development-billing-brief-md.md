---
package: addy
path: evals/fixtures/spec-driven-development/billing-brief.md
type: doc
bytes: 689
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/spec-driven-development/billing-brief.md, sha256: 097d44d7ea2cfe9d93257b2d9052e89b5c993c1775d3d2232ae43445a218740f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/spec-driven-development/billing-brief.md

## Purpose — required, verbatim
> "The product currently charges one flat monthly price. Leadership wants usage-" — evals/fixtures/spec-driven-development/billing-brief.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture for `spec-driven-development` (`evals/cases/spec-driven-development.json` eval id 1). Defines a product brief for transitioning from flat monthly billing to usage-based billing, pairing concrete known constraints (auditable/idempotent events, 7-day late arrivals, customer migration, finance reconciliation) with explicit unknowns (pricing tiers, free allowances, meter ownership, tax rules). Tests whether an agent identifies and surfaces ambiguities as explicit questions and specifies test strategies and boundaries before any implementation code is written.

## Phase — required
none

## Inputs — required
Read by eval runners as the input brief for the spec-driven development evaluation.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Usage-based billing brief` — evals/fixtures/spec-driven-development/billing-brief.md:1 — defined here
- `Candidate meters` — evals/fixtures/spec-driven-development/billing-brief.md:4 — used here
- `Known constraints` — evals/fixtures/spec-driven-development/billing-brief.md:7 — used here
- `invoice reconciliation` — evals/fixtures/spec-driven-development/billing-brief.md:12 — used here
- `spec` — evals/fixtures/spec-driven-development/billing-brief.md:16 — used here

## Structure
- `# Usage-based billing brief` — evals/fixtures/spec-driven-development/billing-brief.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains explicit directive: "spec and surface these decisions; do not implement them by assumption." — evals/fixtures/spec-driven-development/billing-brief.md:16.

## Context cost
689 bytes, ~145 tokens.
