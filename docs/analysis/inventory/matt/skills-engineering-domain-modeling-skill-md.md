---
package: matt
path: skills/engineering/domain-modeling/SKILL.md
type: skill
bytes: 3331
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/domain-modeling/SKILL.md

## Purpose — required, verbatim
> "Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a CONTEXT.md, or recording or editing an ADR." — skills/engineering/domain-modeling/SKILL.md:3

## Design intent — required
Establishes an active discipline for creating, sharpening, and maintaining a project's ubiquitous domain model and architectural decision record during design and development. Explicitly differentiates active domain modeling (stress-testing boundaries, challenging vague terms, updating glossaries immediately) from passive reading of `CONTEXT.md`. Directs the agent to challenge conflicting terms immediately, sharpen overloaded terminology, stress-test concepts against concrete edge-case scenarios, cross-reference verbal descriptions against existing code, update `CONTEXT.md` inline as definitions crystallize, and offer ADR creation only when decisions meet the 3-part qualification threshold.

## Phase — required
cross-phase

## Inputs — required
User statements regarding domain entities and processes, conflicting colloquial terms, existing codebase implementations, `CONTEXT.md` glossary entries, `CONTEXT-MAP.md` context maps, and existing ADRs in `docs/adr/`.

## Outputs — required
Inline updates to `CONTEXT.md`, new or modified `CONTEXT-MAP.md` context boundary definitions, and newly minted ADR files under `docs/adr/`.

## Invokes — required
- doc CONTEXT-FORMAT.md — skills/engineering/domain-modeling/SKILL.md:62
- doc ADR-FORMAT.md — skills/engineering/domain-modeling/SKILL.md:74

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:58
- skill grill-with-docs — skills/engineering/grill-with-docs/SKILL.md:7
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:66
- doc README.md — README.md:210

## Concepts named — required, verbatim
- `domain-modeling` — skills/engineering/domain-modeling/SKILL.md:2 — defined here
- `domain model` — skills/engineering/domain-modeling/SKILL.md:8 — defined here
- `CONTEXT.md` — skills/engineering/domain-modeling/SKILL.md:8 — used here
- `ADRs` — skills/engineering/domain-modeling/SKILL.md:66 — used here
- `CONTEXT-MAP.md` — skills/engineering/domain-modeling/SKILL.md:24 — used here
- `single context` — skills/engineering/domain-modeling/SKILL.md:12 — defined here
- `multiple contexts` — skills/engineering/domain-modeling/SKILL.md:24 — defined here
- `Challenge against the glossary` — skills/engineering/domain-modeling/SKILL.md:44 — defined here
- `Sharpen fuzzy language` — skills/engineering/domain-modeling/SKILL.md:48 — defined here
- `Discuss concrete scenarios` — skills/engineering/domain-modeling/SKILL.md:52 — defined here
- `Cross-reference with code` — skills/engineering/domain-modeling/SKILL.md:56 — defined here
- `Update CONTEXT.md inline` — skills/engineering/domain-modeling/SKILL.md:60 — defined here
- `Offer ADRs sparingly` — skills/engineering/domain-modeling/SKILL.md:66 — defined here
- `Hard to reverse` — skills/engineering/domain-modeling/SKILL.md:70 — defined here
- `Surprising without context` — skills/engineering/domain-modeling/SKILL.md:71 — defined here
- `real trade-off` — skills/engineering/domain-modeling/SKILL.md:72 — defined here

## Structure
- # Domain Modeling
- ## File structure
- ## During the session
- ### Challenge against the glossary
- ### Sharpen fuzzy language
- ### Discuss concrete scenarios
- ### Cross-reference with code
- ### Update CONTEXT.md inline
- ### Offer ADRs sparingly

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly forbids putting implementation details, specifications, or scratch-pad notes into `CONTEXT.md`, reserving it solely as a pure domain glossary.

## Context cost
3,331 bytes (~833 tokens). If supporting format specifications are loaded (`CONTEXT-FORMAT.md` 2,290 bytes, `ADR-FORMAT.md` 2,733 bytes), total ~8,354 bytes (~2,089 tokens).
