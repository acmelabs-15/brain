---
package: addy
path: skills/documentation-and-adrs/SKILL.md
type: skill
bytes: 9782
unit: inv-addy-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/documentation-and-adrs/SKILL.md

## Purpose — required, verbatim
> "Records decisions and documentation. Use when making architectural decisions, changing public APIs, shipping features, or when you need to record context that future engineers and agents will need to understand the codebase." — skills/documentation-and-adrs/SKILL.md:3

## Design intent — required
Establishes a practical, decision-oriented documentation discipline that prioritizes capturing the "why" (context, trade-offs, constraints, and rejected alternatives) over redundant explanations of "what" code does. Standardizes Architecture Decision Records (ADRs) with sequential numbering and lifecycle tracking while respecting pre-existing project conventions (such as `.adr-dir`), provides templates for ADRs, READMEs, changelogs, and typed/OpenAPI API documentation, and addresses AI coding agents as first-class consumers of documentation to prevent context loss and repetitive decision cycles.

## Phase — required
addy:Ship

## Inputs — required
Architectural decisions, trade-offs, constraints, public API changes, and project features (skills/documentation-and-adrs/SKILL.md:14-17), along with existing repository conventions including `.adr-dir`, project instructions, or existing ADR files in `docs/adr/` or `Documentation/Decisions/` (skills/documentation-and-adrs/SKILL.md:38-44).

## Outputs — required
Architecture Decision Records stored in `docs/decisions/` or project convention directory (skills/documentation-and-adrs/SKILL.md:48-91), typed inline API documentation with JSDoc/TSDoc or OpenAPI specifications (skills/documentation-and-adrs/SKILL.md:157-198), standard README files (skills/documentation-and-adrs/SKILL.md:201-230), changelog entries (skills/documentation-and-adrs/SKILL.md:232-248), and agent instruction files like `CLAUDE.md` and spec files (skills/documentation-and-adrs/SKILL.md:254-258).

## Invokes — required
none

## Invoked by — required
- reference references/definition-of-done.md — references/definition-of-done.md:44
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:40
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:190
- doc docs/adoption-guide.md — docs/adoption-guide.md:53

## Concepts named — required, verbatim
- `Architecture Decision Records` — skills/documentation-and-adrs/SKILL.md:23 — defined here
- `ADRs` — skills/documentation-and-adrs/SKILL.md:23 — defined here
- `ADR Template` — skills/documentation-and-adrs/SKILL.md:46 — defined here
- `ADR Lifecycle` — skills/documentation-and-adrs/SKILL.md:93 — defined here
- `Inline Documentation` — skills/documentation-and-adrs/SKILL.md:102 — defined here
- `API Documentation` — skills/documentation-and-adrs/SKILL.md:152 — defined here
- `README Structure` — skills/documentation-and-adrs/SKILL.md:200 — defined here
- `Changelog Maintenance` — skills/documentation-and-adrs/SKILL.md:231 — defined here
- `Documentation for Agents` — skills/documentation-and-adrs/SKILL.md:250 — defined here

## Structure
- # Documentation and ADRs — skills/documentation-and-adrs/SKILL.md:6
- ## Overview — skills/documentation-and-adrs/SKILL.md:8
- ## When to Use — skills/documentation-and-adrs/SKILL.md:12
- ## Architecture Decision Records (ADRs) — skills/documentation-and-adrs/SKILL.md:23
- ### When to Write an ADR — skills/documentation-and-adrs/SKILL.md:27
- ### Match the existing convention first — skills/documentation-and-adrs/SKILL.md:36
- ### ADR Template — skills/documentation-and-adrs/SKILL.md:46
- ### ADR Lifecycle — skills/documentation-and-adrs/SKILL.md:93
- ## Inline Documentation — skills/documentation-and-adrs/SKILL.md:102
- ### When to Comment — skills/documentation-and-adrs/SKILL.md:104
- ### When NOT to Comment — skills/documentation-and-adrs/SKILL.md:122
- ### Document Known Gotchas — skills/documentation-and-adrs/SKILL.md:137
- ## API Documentation — skills/documentation-and-adrs/SKILL.md:152
- ### Inline with Types (Preferred for TypeScript) — skills/documentation-and-adrs/SKILL.md:156
- ### OpenAPI / Swagger for REST APIs — skills/documentation-and-adrs/SKILL.md:176
- ## README Structure — skills/documentation-and-adrs/SKILL.md:200
- ## Changelog Maintenance — skills/documentation-and-adrs/SKILL.md:231
- ## Documentation for Agents — skills/documentation-and-adrs/SKILL.md:250
- ## Common Rationalizations — skills/documentation-and-adrs/SKILL.md:259
- ## Red Flags — skills/documentation-and-adrs/SKILL.md:269
- ## Verification — skills/documentation-and-adrs/SKILL.md:279

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly addresses AI coding agents as first-class consumers of documentation ("Documentation for Agents", skills/documentation-and-adrs/SKILL.md:250-258), noting that `CLAUDE.md`, specs, and ADRs prevent agents from re-litigating settled decisions or repeating known mistakes. Mandates inspecting the existing repository convention (including `.adr-dir` and existing formats) before defaulting to `docs/decisions/` (skills/documentation-and-adrs/SKILL.md:36-44).

## Context cost
9782 bytes (~2450 tokens). Self-contained, loads no external references or skills.
