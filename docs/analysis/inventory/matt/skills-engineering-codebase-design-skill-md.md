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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/codebase-design/SKILL.md

## Purpose — required, verbatim
> "Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary." — skills/engineering/codebase-design/SKILL.md:3

## Design intent — required
Canonical definition of Matt's deep-module design philosophy. Establishes a disciplined architectural vocabulary (module, interface, implementation, depth, seam, adapter, leverage, locality) and foundational design heuristics (the deletion test, interface as test surface, two-adapter seam rule, accepting dependencies, and returning results). Rejects line-counting definitions of depth in favor of leverage, providing the shared conceptual foundation for all architectural refactoring and interface design skills.

## Phase — required
cross-phase

## Inputs — required
Module definitions, existing interfaces, candidate refactorings, test designs, and architectural discussions.

## Outputs — required
Refined interface definitions, seam placements, adapter patterns, and design recommendations.

## Invokes — required
- doc DEEPENING.md — skills/engineering/codebase-design/SKILL.md:113
- doc DESIGN-IT-TWICE.md — skills/engineering/codebase-design/SKILL.md:114

## Invoked by — required
- doc SKILL.md — skills/engineering/codebase-design/DEEPENING.md:3
- doc SKILL.md — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5

## Concepts named — required, verbatim
- `codebase-design` — skills/engineering/codebase-design/SKILL.md:2 — defined here
- `deep modules` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `Module` — skills/engineering/codebase-design/SKILL.md:14 — defined here
- `Interface` — skills/engineering/codebase-design/SKILL.md:16 — defined here
- `Implementation` — skills/engineering/codebase-design/SKILL.md:18 — defined here
- `Depth` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `deep` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `shallow` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `Seam` — skills/engineering/codebase-design/SKILL.md:22 — defined here
- `Adapter` — skills/engineering/codebase-design/SKILL.md:24 — defined here
- `Leverage` — skills/engineering/codebase-design/SKILL.md:26 — defined here
- `Locality` — skills/engineering/codebase-design/SKILL.md:28 — defined here
- `Deep module` — skills/engineering/codebase-design/SKILL.md:32 — defined here
- `Shallow module` — skills/engineering/codebase-design/SKILL.md:44 — defined here
- `internal seams` — skills/engineering/codebase-design/SKILL.md:62 — defined here
- `external seam` — skills/engineering/codebase-design/SKILL.md:62 — defined here
- `deletion test` — skills/engineering/codebase-design/SKILL.md:63 — defined here
- `interface is the test surface` — skills/engineering/codebase-design/SKILL.md:64 — defined here

## Structure
- # Codebase Design — skills/engineering/codebase-design/SKILL.md:6
- ## Glossary — skills/engineering/codebase-design/SKILL.md:10
- ## Deep vs shallow — skills/engineering/codebase-design/SKILL.md:30
- ## Principles — skills/engineering/codebase-design/SKILL.md:60
- ## Designing for testability — skills/engineering/codebase-design/SKILL.md:67
- ## Relationships — skills/engineering/codebase-design/SKILL.md:97
- ## Rejected framings — skills/engineering/codebase-design/SKILL.md:105
- ## Going deeper — skills/engineering/codebase-design/SKILL.md:111

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly rejects Ousterhout's ratio of implementation lines to interface lines because it "rewards padding the implementation" (line 107). Banned words: unit, component, service, API, boundary.

## Context cost
6446 bytes, 115 lines, ~1550 tokens. Loads DEEPENING.md (2553 bytes) and DESIGN-IT-TWICE.md (2664 bytes) on demand. Total cluster: 11663 bytes (~2800 tokens).
