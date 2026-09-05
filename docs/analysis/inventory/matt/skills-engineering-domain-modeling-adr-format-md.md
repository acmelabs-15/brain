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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/domain-modeling/ADR-FORMAT.md

## Purpose — required, verbatim
> "ADRs live in `docs/adr/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc." — skills/engineering/domain-modeling/ADR-FORMAT.md:3

## Design intent — required
Defines an ultra-lightweight Architecture Decision Record (ADR) format and a strict qualification rubric for when to create one. Mandates that an ADR can be as short as a single paragraph, residing in `docs/adr/`, and requires all three criteria before offering an ADR: hard to reverse, surprising without context, and the result of a real trade-off. Identifies specific qualifying categories (architectural shape, integration patterns, technology choices with lock-in, boundary/scope decisions, deliberate deviations from the obvious path, constraints not visible in code, non-obvious rejected alternatives) to prevent ADR bloat.

## Phase — required
cross-phase

## Inputs — required
Architectural decisions, trade-offs, and technical choices reached during domain modeling or refactoring discussions.

## Outputs — required
ADR files created in `docs/adr/` with sequential numbering (`0001-slug.md`, etc.).

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:74

## Concepts named — required, verbatim
- `ADR Format` — skills/engineering/domain-modeling/ADR-FORMAT.md:1 — defined here
- `ADR` — skills/engineering/domain-modeling/ADR-FORMAT.md:3 — defined here
- `Hard to reverse` — skills/engineering/domain-modeling/ADR-FORMAT.md:33 — defined here
- `Surprising without context` — skills/engineering/domain-modeling/ADR-FORMAT.md:34 — defined here
- `result of a real trade-off` — skills/engineering/domain-modeling/ADR-FORMAT.md:35 — defined here
- `Status` — skills/engineering/domain-modeling/ADR-FORMAT.md:21 — defined here
- `Considered Options` — skills/engineering/domain-modeling/ADR-FORMAT.md:22 — defined here
- `Consequences` — skills/engineering/domain-modeling/ADR-FORMAT.md:23 — defined here

## Structure
- # ADR Format — skills/engineering/domain-modeling/ADR-FORMAT.md:1
- ## Template — skills/engineering/domain-modeling/ADR-FORMAT.md:7
- ## Optional sections — skills/engineering/domain-modeling/ADR-FORMAT.md:17
- ## Numbering — skills/engineering/domain-modeling/ADR-FORMAT.md:25
- ## When to offer an ADR — skills/engineering/domain-modeling/ADR-FORMAT.md:29
- ### What qualifies — skills/engineering/domain-modeling/ADR-FORMAT.md:39

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Radically minimalist approach to ADRs: "An ADR can be a single paragraph. The value is in recording that a decision was made and why, not in filling out sections." (line 15). Explicitly rejects documenting decisions that are easy to reverse, unsurprising, or lack real alternatives.

## Context cost
2733 bytes, 48 lines, ~680 tokens.
