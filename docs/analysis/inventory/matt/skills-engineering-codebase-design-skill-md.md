---
package: matt
path: skills/engineering/codebase-design/SKILL.md
type: skill
bytes: 6446
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/codebase-design/SKILL.md

## Purpose — required, verbatim
> "Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary." — skills/engineering/codebase-design/SKILL.md:3

## Design intent — required
Establishes a rigorous, scale-agnostic architectural vocabulary (module, interface, implementation, depth, seam, adapter, leverage, locality) inspired by John Ousterhout and Michael Feathers, while banning ambiguous synonyms like "component", "service", "API", and "boundary". Defines depth as capability leverage per unit of interface learned rather than lines of code, and states four core principles (including the deletion test, the interface as test surface, and the two-adapter rule for seams) to guide modular refactoring and testability.

## Phase — required
cross-phase

## Inputs — required
Module design candidates, interface signatures, refactoring proposals, dependency configurations, and caller usage patterns.

## Outputs — required
Deep module specifications, interface definitions, seam placements, adapter requirements, and refactoring guidelines.

## Invokes — required
- doc DEEPENING.md — skills/engineering/codebase-design/SKILL.md:113
- doc DESIGN-IT-TWICE.md — skills/engineering/codebase-design/SKILL.md:114

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:59
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:13
- skill tdd — skills/engineering/tdd/SKILL.md:26
- doc README.md — README.md:211
- doc docs/engineering/codebase-design.md — docs/engineering/codebase-design.md:3

## Concepts named — required, verbatim
- `codebase-design` — skills/engineering/codebase-design/SKILL.md:2 — defined here
- `deep modules` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `leverage` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `locality` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `Module` — skills/engineering/codebase-design/SKILL.md:14 — defined here
- `Interface` — skills/engineering/codebase-design/SKILL.md:16 — defined here
- `Implementation` — skills/engineering/codebase-design/SKILL.md:18 — defined here
- `Adapter` — skills/engineering/codebase-design/SKILL.md:18 — defined here
- `Depth` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `deep` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `shallow` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `Seam` — skills/engineering/codebase-design/SKILL.md:22 — defined here
- `internal seams` — skills/engineering/codebase-design/SKILL.md:62 — defined here
- `external seam` — skills/engineering/codebase-design/SKILL.md:62 — defined here
- `deletion test` — skills/engineering/codebase-design/SKILL.md:63 — defined here
- `test surface` — skills/engineering/codebase-design/SKILL.md:64 — defined here
- `hypothetical seam` — skills/engineering/codebase-design/SKILL.md:65 — defined here

## Structure
- # Codebase Design
- ## Glossary
- ## Deep vs shallow
- ## Principles
- ## Designing for testability
- ## Relationships
- ## Rejected framings
- ## Going deeper

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · skills/engineering/codebase-design/SKILL.md:8 Reference skill lacks an autonomous execution loop or stopping condition; if invoked without an explicit driver skill, an agent may burn context exploring code unprompted.

## Observations
Rejects Ousterhout's lines-of-code ratio definition of depth because it incentivizes bloated implementations; replaces it with leverage (capability per interface unit learned). Explicitly treats interface as the complete contract (types, invariants, ordering, errors, config, performance), not merely the type signature.

## Context cost
6,446 bytes (~1,612 tokens). If supporting references are loaded (`DEEPENING.md` 2,553 bytes, `DESIGN-IT-TWICE.md` 2,664 bytes), total ~11,663 bytes (~2,916 tokens).
