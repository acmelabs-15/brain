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
verified: 2026-09-05 quote-check+coverage
---

# skills/documentation-and-adrs/SKILL.md

## Purpose — required, verbatim
> "Records decisions and documentation. Use when making architectural decisions, changing public APIs, shipping features, or when you need to record context that future engineers and agents will need to understand the codebase." — skills/documentation-and-adrs/SKILL.md:3

## Design intent — required
Addresses the loss of institutional and architectural memory across engineering teams and autonomous agents where code reveals *what* was built but fails to explain *why* decisions were made, what trade-offs were accepted, and what alternatives were rejected. It establishes actionable standards for Architecture Decision Records (ADRs) with defined lifecycles, inline documentation focused on non-obvious intent and known gotchas, type-annotated public API specifications (JSDoc/TSDoc and OpenAPI), standard repository README structure, changelog maintenance, and agent-specific context files (such as `CLAUDE.md`). Without this skill, projects suffer from recurring debates over previously settled choices, costly architectural archaeology, and accidental regression of undocumented constraints.

## Phase — required
addy:Ship

## Inputs — required
- Architectural choices, framework/library selections, schema designs, auth strategies, or infrastructure decisions — skills/documentation-and-adrs/SKILL.md:29-34
- Existing repository conventions, file layouts, numbering patterns, or ADR tooling (`.adr-dir`, `docs/adr/`, `Documentation/Decisions/`) — skills/documentation-and-adrs/SKILL.md:38-44
- Technical requirements, context, alternatives considered with pros/cons, and accepted consequences — skills/documentation-and-adrs/SKILL.md:59-91
- Non-obvious code intent, known gotchas, and architectural rationales — skills/documentation-and-adrs/SKILL.md:108-120, 137-150
- Public API interfaces, parameter types, return types, and validation errors — skills/documentation-and-adrs/SKILL.md:154-198
- Shipped feature additions, fixes, and behavioral changes for release notes — skills/documentation-and-adrs/SKILL.md:233-248

## Outputs — required
- Architecture Decision Records stored with sequential numbering (e.g. in `docs/decisions/` or project-established location) — skills/documentation-and-adrs/SKILL.md:48-51
- Inline documentation and JSDoc/TSDoc comments with usage examples — skills/documentation-and-adrs/SKILL.md:108-120, 158-174
- OpenAPI / Swagger schema specifications for REST endpoints — skills/documentation-and-adrs/SKILL.md:176-198
- Project `README.md` covering quick start, commands table, architecture overview, and contributing guidelines — skills/documentation-and-adrs/SKILL.md:204-229
- Chronological release changelog entries (`CHANGELOG.md` format) — skills/documentation-and-adrs/SKILL.md:236-248
- Agent context files (`CLAUDE.md`, rules files, updated specs) — skills/documentation-and-adrs/SKILL.md:254-257

## Invokes — required
- doc CLAUDE.md — skills/documentation-and-adrs/SKILL.md:254

## Invoked by — required
- reference references/definition-of-done.md:44
- skill skills/using-agent-skills/SKILL.md:40
- doc CLAUDE.md:26
- doc README.md:280
- doc docs/adoption-guide.md:53

## Concepts named — required, verbatim
- `documentation-and-adrs` — skills/documentation-and-adrs/SKILL.md:2 — defined here
- `Architecture Decision Records` — skills/documentation-and-adrs/SKILL.md:23 — defined here
- `ADRs` — skills/documentation-and-adrs/SKILL.md:23 — defined here
- `MADR` — skills/documentation-and-adrs/SKILL.md:40 — used here
- `adr-tools` — skills/documentation-and-adrs/SKILL.md:40 — used here
- `ADR Template` — skills/documentation-and-adrs/SKILL.md:46 — defined here
- `docs/decisions/` — skills/documentation-and-adrs/SKILL.md:48 — defined here
- `Status` — skills/documentation-and-adrs/SKILL.md:53 — defined here
- `PROPOSED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `ACCEPTED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `SUPERSEDED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `DEPRECATED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `Context` — skills/documentation-and-adrs/SKILL.md:59 — defined here
- `Decision` — skills/documentation-and-adrs/SKILL.md:66 — defined here
- `Alternatives Considered` — skills/documentation-and-adrs/SKILL.md:69 — defined here
- `Consequences` — skills/documentation-and-adrs/SKILL.md:86 — defined here
- `ADR Lifecycle` — skills/documentation-and-adrs/SKILL.md:93 — defined here
- `Inline Documentation` — skills/documentation-and-adrs/SKILL.md:102 — defined here
- `Known Gotchas` — skills/documentation-and-adrs/SKILL.md:137, 286 — defined here
- `API Documentation` — skills/documentation-and-adrs/SKILL.md:152 — defined here
- `OpenAPI / Swagger` — skills/documentation-and-adrs/SKILL.md:176 — used here
- `README Structure` — skills/documentation-and-adrs/SKILL.md:200 — defined here
- `Changelog Maintenance` — skills/documentation-and-adrs/SKILL.md:231 — defined here
- `Documentation for Agents` — skills/documentation-and-adrs/SKILL.md:250 — defined here
- `CLAUDE.md` — skills/documentation-and-adrs/SKILL.md:254, 288 — used here
- `Spec files` — skills/documentation-and-adrs/SKILL.md:255 — used here

## Structure
- ## Overview
- ## When to Use
- ## Architecture Decision Records (ADRs)
- ### When to Write an ADR
- ### Match the existing convention first
- ### ADR Template
- ### ADR Lifecycle
- ## Inline Documentation
- ### When to Comment
- ### When NOT to Comment
- ### Document Known Gotchas
- ## API Documentation
- ### Inline with Types (Preferred for TypeScript)
- ### OpenAPI / Swagger for REST APIs
- ## README Structure
- ## Changelog Maintenance
- ## Documentation for Agents
- ## Common Rationalizations
- ## Red Flags
- ## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly instructs agents to inspect repository context and conform to existing ADR conventions before applying defaults: "An established convention overrides the defaults below" — skills/documentation-and-adrs/SKILL.md:38. Emphasizes that future AI agents are primary consumers of architecture documentation: "Agents do. Future engineers do. Your 3-months-later self does." — skills/documentation-and-adrs/SKILL.md:265.

## Context cost
9,782 bytes (~2,400 tokens). Loads no external files directly.
