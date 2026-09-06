---
package: matt
path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md
type: skill
bytes: 2290
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md, sha256: 17ab16ce783e4d2801ee52fd9acdf550cbf44de65ae76797a93943bbedf22a13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/domain-modeling/CONTEXT-FORMAT.md

## Purpose — required, verbatim
> "When multiple words exist for the same concept, pick the best one and list the others under `_Avoid_`." — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:27
(first substantive rule paragraph; no explicit purpose statement)

## Design intent — required
Structural template and formatting specification for project ubiquitous language files (`CONTEXT.md` and `CONTEXT-MAP.md`). Mandates opinionated terminology selection with explicit banned synonyms (`_Avoid_`), concise definitions describing identity rather than implementation behavior, and strict filtering against generic programming vocabulary. Outlines conventions for single-context repositories (root `CONTEXT.md`) and multi-context repositories mapped via `CONTEXT-MAP.md` with explicit inter-context event and type relationships.

## Phase — required
cross-phase

## Inputs — required
Project domain terms, synonyms, contextual boundaries, sub-domains, and domain event/relationship mappings.

## Outputs — required
Standardized `CONTEXT.md` files (and optional `CONTEXT-MAP.md`) mapping canonical terms, definitions, and excluded words.

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:62

## Concepts named — required, verbatim
- `_Avoid_` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:14 — defined here
- `Single context` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:34 — defined here
- `Multiple contexts` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36 — defined here
- `CONTEXT-MAP.md` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36 — defined here
- `Context Map` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:39 — defined here
- `Contexts` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:41 — defined here
- `Relationships` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:47 — defined here

## Structure
- `# CONTEXT.md Format`
- `## Structure`
- `## Rules`
- `## Single vs multi-context repos`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly forbids including general programming concepts (timeouts, error types, utility patterns) in `CONTEXT.md`, ensuring the glossary remains focused purely on unique domain semantics.

## Context cost
2290 bytes, 61 lines, approximately 410 tokens.
