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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/domain-modeling/ADR-FORMAT.md

## Purpose — required, verbatim
> "ADRs live in `docs/adr/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc." — skills/engineering/domain-modeling/ADR-FORMAT.md:3
(first substantive line; no explicit purpose statement)

## Design intent — required
Lightweight Architecture Decision Record (ADR) specification and gating criteria. Replaces bureaucratic multi-page templates with a minimalist single-paragraph standard (`# {Title}`, 1-3 sentences on context, decision, and rationale) stored under `docs/adr/` with lazy directory creation. Establishes a strict three-part qualifying gate for offering an ADR (must be hard to reverse, surprising without context, and the result of a real trade-off), preventing ADR documentation spam for trivial or obvious choices.

## Phase — required
cross-phase

## Inputs — required
Architectural decisions, trade-offs, technology choices, integration patterns, and existing sequential files in `docs/adr/`.

## Outputs — required
Sequentially numbered ADR files (`docs/adr/0001-slug.md`, etc.) formatted with short title and concise context/decision/rationale.

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:74

## Concepts named — required, verbatim
- `ADR` — skills/engineering/domain-modeling/ADR-FORMAT.md:3 — defined here
- `docs/adr/` — skills/engineering/domain-modeling/ADR-FORMAT.md:3 — defined here
- `Status` — skills/engineering/domain-modeling/ADR-FORMAT.md:21 — defined here
- `Considered Options` — skills/engineering/domain-modeling/ADR-FORMAT.md:22 — defined here
- `Consequences` — skills/engineering/domain-modeling/ADR-FORMAT.md:23 — defined here
- `Hard to reverse` — skills/engineering/domain-modeling/ADR-FORMAT.md:33 — defined here
- `Surprising without context` — skills/engineering/domain-modeling/ADR-FORMAT.md:34 — defined here
- `trade-off` — skills/engineering/domain-modeling/ADR-FORMAT.md:35 — defined here

## Structure
- `# ADR Format`
- `## Template`
- `## Optional sections`
- `## Numbering`
- `## When to offer an ADR`
- `### What qualifies`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Emphasizes that recording rejected alternatives is valuable when rejection is non-obvious (line 47), explicitly preventing recurrent debates over previously discarded architectures.

## Context cost
2733 bytes, 48 lines, approximately 480 tokens.
