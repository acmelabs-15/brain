---
package: matt
path: skills/engineering/domain-modeling/ADR-FORMAT.md
type: skill
bytes: 2733
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/domain-modeling/ADR-FORMAT.md

## Purpose — required, verbatim
> "ADRs live in `docs/adr/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc." — skills/engineering/domain-modeling/ADR-FORMAT.md:3 (no explicit purpose statement)

## Design intent — required
Defines the minimalist structure, lazy creation lifecycle, sequential numbering conventions, and strict qualification threshold for Architecture Decision Records (ADRs). Rejects boilerplate-heavy documentation by allowing ADRs to consist of a single paragraph capturing context, decision, and rationale. Enforces a three-part qualification test before offering an ADR: the decision must be hard to reverse, surprising without context, and the outcome of a genuine trade-off between real alternatives.

## Phase — required
cross-phase

## Inputs — required
Architectural deliberations, technological selections, integration boundaries, non-obvious constraints, and existing numbers in `docs/adr/`.

## Outputs — required
Sequential Architecture Decision Record files (`docs/adr/0001-slug.md`, etc.).

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:74

## Concepts named — required, verbatim
- `ADRs` — skills/engineering/domain-modeling/ADR-FORMAT.md:3 — defined here
- `Status` — skills/engineering/domain-modeling/ADR-FORMAT.md:21 — defined here
- `Considered Options` — skills/engineering/domain-modeling/ADR-FORMAT.md:22 — defined here
- `Consequences` — skills/engineering/domain-modeling/ADR-FORMAT.md:23 — defined here
- `Numbering` — skills/engineering/domain-modeling/ADR-FORMAT.md:25 — defined here
- `Hard to reverse` — skills/engineering/domain-modeling/ADR-FORMAT.md:33 — defined here
- `Surprising without context` — skills/engineering/domain-modeling/ADR-FORMAT.md:34 — defined here
- `real trade-off` — skills/engineering/domain-modeling/ADR-FORMAT.md:35 — defined here
- `Architectural shape` — skills/engineering/domain-modeling/ADR-FORMAT.md:41 — defined here
- `Integration patterns` — skills/engineering/domain-modeling/ADR-FORMAT.md:42 — defined here
- `Technology choices` — skills/engineering/domain-modeling/ADR-FORMAT.md:43 — defined here
- `Boundary and scope decisions` — skills/engineering/domain-modeling/ADR-FORMAT.md:44 — defined here
- `Deliberate deviations` — skills/engineering/domain-modeling/ADR-FORMAT.md:45 — defined here

## Structure
- # ADR Format
- ## Template
- ## Optional sections
- ## Numbering
- ## When to offer an ADR
- ### What qualifies

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Treats negative decisions (what not to do) and deliberate deviations from obvious norms as equally important to affirmative choices, preventing future engineers from re-proposing rejected options or "fixing" deliberate architectural choices.

## Context cost
2,733 bytes (~683 tokens). Supporting reference for `domain-modeling`.
