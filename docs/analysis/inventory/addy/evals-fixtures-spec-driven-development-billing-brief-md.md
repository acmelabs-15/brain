---
package: addy
path: evals/fixtures/spec-driven-development/billing-brief.md
type: doc
bytes: 689
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/spec-driven-development/billing-brief.md, sha256: 097d44d7ea2cfe9d93257b2d9052e89b5c993c1775d3d2232ae43445a218740f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/spec-driven-development/billing-brief.md

## Purpose — required, verbatim
> "The product currently charges one flat monthly price. Leadership wants usage-" — evals/fixtures/spec-driven-development/billing-brief.md:3
(no explicit purpose statement)

## Design intent — required
Serves as a problem brief fixture for evaluating the `spec-driven-development` skill. It presents a requirement to transition from flat-rate to usage-based billing with technical constraints (idempotency, auditability, late-arriving events) and deliberate ambiguities (undefined meters, pricing tiers, tax behavior). This tests whether an agent surfaces non-goals, decision boundaries, and unknowns in a `SPEC.md` rather than making silent implementation assumptions.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config spec-driven-development — evals/cases/spec-driven-development.json:47

## Concepts named — required, verbatim
- `Usage-based billing brief` — evals/fixtures/spec-driven-development/billing-brief.md:1 — defined here
- `Candidate meters` — evals/fixtures/spec-driven-development/billing-brief.md:4 — used here
- `migration path` — evals/fixtures/spec-driven-development/billing-brief.md:9 — used here
- `idempotent` — evals/fixtures/spec-driven-development/billing-brief.md:10 — used here
- `invoice reconciliation` — evals/fixtures/spec-driven-development/billing-brief.md:12 — used here

## Structure
- `# Usage-based billing brief` — evals/fixtures/spec-driven-development/billing-brief.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly instructs: "Produce a spec and surface these decisions; do not implement them by assumption." — evals/fixtures/spec-driven-development/billing-brief.md:15-16, aligning directly with expectation in `evals/cases/spec-driven-development.json:51` ("Ambiguities are surfaced as questions rather than silently resolved").

## Context cost
689 bytes, ~172 tokens.
