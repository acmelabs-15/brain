---
package: addy
path: evals/fixtures/spec-driven-development/billing-brief.md
type: doc
bytes: 689
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/spec-driven-development/billing-brief.md, sha256: 097d44d7ea2cfe9d93257b2d9052e89b5c993c1775d3d2232ae43445a218740f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/spec-driven-development/billing-brief.md

## Purpose — required, verbatim
> "The product currently charges one flat monthly price. Leadership wants usage-based billing next quarter, but “usage” has not been defined." — evals/fixtures/spec-driven-development/billing-brief.md:3-5 (no explicit purpose statement)

## Design intent — required
Presents a high-level product brief for transitioning from flat monthly pricing to usage-based billing with multiple undefined variables (pricing tiers, free allowances, meter ownership, late-arriving event rules, tax behavior) alongside known constraints (migration path, idempotency, auditability, reconciliation). Used to evaluate whether an agent produces a structured specification that explicitly surfaces decisions, boundary conditions, and non-goals rather than silently making assumptions or prematurely writing code.

## Phase — required
none

## Inputs — required
- Problem statement, known constraints, and list of unknowns — `evals/fixtures/spec-driven-development/billing-brief.md:3-16`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Usage-based billing brief` — evals/fixtures/spec-driven-development/billing-brief.md:1 — used here
- `usage-based billing` — evals/fixtures/spec-driven-development/billing-brief.md:1 — used here
- `meters` — evals/fixtures/spec-driven-development/billing-brief.md:4 — used here
- `Known constraints` — evals/fixtures/spec-driven-development/billing-brief.md:7 — used here
- `migration path` — evals/fixtures/spec-driven-development/billing-brief.md:9 — used here
- `idempotent` — evals/fixtures/spec-driven-development/billing-brief.md:10 — used here
- `Late-arriving events` — evals/fixtures/spec-driven-development/billing-brief.md:11 — used here
- `invoice reconciliation` — evals/fixtures/spec-driven-development/billing-brief.md:12 — used here
- `pricing tiers` — evals/fixtures/spec-driven-development/billing-brief.md:14 — used here
- `free allowances` — evals/fixtures/spec-driven-development/billing-brief.md:14 — used here

## Structure
- `# Usage-based billing brief` (line 1)
- Problem background (lines 3-5)
- `Known constraints:` (lines 7-12)
- Unknowns and spec instructions (lines 14-16)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly instructs: "Produce a spec and surface these decisions; do not implement them by assumption." Ideal prompt for evaluating specification generation discipline.

## Context cost
689 bytes (approx. 172 tokens).
