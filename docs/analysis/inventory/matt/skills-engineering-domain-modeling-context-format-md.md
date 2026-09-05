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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/domain-modeling/CONTEXT-FORMAT.md

## Purpose — required, verbatim
> "One or two sentence description of what this context is and why it exists." — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:8
(template description; no explicit purpose statement)

## Design intent — required
Defines the canonical structure, authoring rules, and repository layouts for `CONTEXT.md` files (and `CONTEXT-MAP.md` in multi-context repositories). Mandates opinionated term selection with an `_Avoid_` blacklist for confusing synonyms, tight definitions (one or two sentences specifying what a term IS, not what it does), and exclusion of general programming concepts. Explains single-context repos (root `CONTEXT.md`) vs multi-context repos (`CONTEXT-MAP.md` pointing to sub-contexts and mapping relationships).

## Phase — required
cross-phase

## Inputs — required
Domain concepts, definitions, synonym antipatterns (`_Avoid_`), and context mapping relationships.

## Outputs — required
`CONTEXT.md` files at repository root or sub-contexts, and `CONTEXT-MAP.md`.

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:62

## Concepts named — required, verbatim
- `CONTEXT.md Format` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:1 — defined here
- `CONTEXT.md` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:1 — defined here
- `Language` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:10 — defined here
- `Single context` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:34 — defined here
- `Multiple contexts` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36 — defined here
- `CONTEXT-MAP.md` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36 — defined here
- `Context Map` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:39 — defined here
- `Relationships` — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:47 — defined here

## Structure
- # CONTEXT.md Format — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:1
- ## Structure — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:3
- ## Rules — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:25
- ## Single vs multi-context repos — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:32

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces Domain-Driven Design ubiquitous language with negative syntax (`_Avoid_`) to eliminate synonym drift. Explicitly mandates defining what a term IS rather than what it does (line 28), and forbids contaminating domain context with general programming jargon (line 29).

## Context cost
2290 bytes, 61 lines, ~550 tokens.
