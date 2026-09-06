---
package: matt
path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md
type: agent
bytes: 1154
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md

## Purpose — required, verbatim
> "The split keeps soft-dependency skills token-light and avoids cargo-culting the setup pointer into places where it isn't load-bearing." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:10

## Design intent — required
Architectural decision record establishing policy for referencing `/setup-matt-pocock-skills`. Skills with hard dependencies on configuration (like issue trackers or triage labels) must include an explicit setup instruction because missing configuration leads to erroneous output. Soft-dependency skills that merely leverage domain glossaries or ADRs for enhanced precision must refer to them loosely in prose without explicit setup commands, avoiding unnecessary token bloat and cargo-culting.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- command /setup-matt-pocock-skills — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1
- skill to-tickets — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7
- skill to-spec — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7
- skill triage — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7
- skill diagnose — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8
- skill tdd — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8
- skill improve-codebase-architecture — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `/setup-matt-pocock-skills` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1 — used here
- `hard dependencies` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1 — defined here
- `Engineering skills` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `per-repo config` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `issue tracker` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `triage label vocabulary` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `domain doc layout` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 — used here
- `hard-dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5 — defined here
- `soft-dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5 — defined here
- `to-tickets` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — used here
- `to-spec` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — used here
- `triage` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — used here
- `diagnose` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `tdd` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `improve-codebase-architecture` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `domain glossary` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `ADRs` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here

## Structure
- "# Explicit `/setup-matt-pocock-skills` pointer only for hard dependencies" — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clear distinction between load-bearing dependencies and contextual enhancements. Prevents prompt pollution across skills that only optionally consume domain models and architectural records.

## Context cost
1154 bytes, 11 lines, approximately 250 tokens.
