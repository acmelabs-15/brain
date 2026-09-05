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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/domain-modeling/CONTEXT-FORMAT.md

## Purpose — required, verbatim
> "When multiple words exist for the same concept, pick the best one and list the others under `_Avoid_`." — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:27 (no explicit purpose statement)

## Design intent — required
Defines the structure, authoring principles, and directory conventions for `CONTEXT.md` glossary files across single-context and multi-context codebases. Mandates opinionated terminology selection with explicitly forbidden synonyms (`_Avoid_`), concise 1–2 sentence definitions describing what an entity is rather than what it does, and strict exclusion of general programming terms. Outlines the `CONTEXT-MAP.md` format for multi-context architectures, detailing inter-context relationships and event communication.

## Phase — required
cross-phase

## Inputs — required
Domain concept discussions, candidate terminology, competing synonyms, context boundaries, and event-driven communication relationships.

## Outputs — required
`CONTEXT.md` glossary specifications and `CONTEXT-MAP.md` context relationship mapping files.

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:62

## Concepts named — required, verbatim
- `Context Name` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:6 — defined here
- `Language` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:10 — defined here
- `_Avoid_` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:14 — defined here
- `Single context` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:34 — defined here
- `CONTEXT.md` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:34 — used here
- `Multiple contexts` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36 — defined here
- `CONTEXT-MAP.md` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36 — defined here
- `Context Map` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:39 — defined here
- `Relationships` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:47 — defined here

## Structure
- # CONTEXT.md Format
- ## Structure
- ## Rules
- ## Single vs multi-context repos

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Excludes general software engineering terms (such as timeouts, error types, or utility helper patterns) even if common across the codebase, ensuring `CONTEXT.md` focuses exclusively on unique problem-domain language.

## Context cost
2,290 bytes (~573 tokens). Supporting reference for `domain-modeling`.
