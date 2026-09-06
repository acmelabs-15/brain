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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/codebase-design/SKILL.md

## Purpose — required, verbatim
> "Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary." — skills/engineering/codebase-design/SKILL.md:3

## Design intent — required
Core engineering reference defining the shared ubiquitous vocabulary and architectural principles for designing deep modules. Replaces imprecise terminology ("component", "service", "API", "boundary") with rigorously defined concepts (Module, Interface, Implementation, Depth, Seam, Adapter, Leverage, Locality). Provides principles such as the deletion test, the interface as test surface, and dependency injection patterns to maximize caller leverage and maintainer locality.

## Phase — required
cross-phase

## Inputs — required
Module interfaces, implementation code, architectural questions, testability concerns, and candidate deepening clusters.

## Outputs — required
Standardized architectural vocabulary, interface designs, seam placement evaluations, testability recommendations, and references to supporting deepening and multi-agent exploration procedures.

## Invokes — required
- reference Deepening — skills/engineering/codebase-design/DEEPENING.md:1
- reference Design — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:1

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:59
- skill tdd — skills/engineering/tdd/SKILL.md:26
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:13
- skill setup-ts-deep-modules — skills/in-progress/setup-ts-deep-modules/SKILL.md:11
- doc codebase-design — docs/engineering/codebase-design.md:3
- doc README.md — README.md:211

## Concepts named — required, verbatim
- `deep modules` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `interface` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `seam` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `leverage` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `locality` — skills/engineering/codebase-design/SKILL.md:8 — defined here
- `Module` — skills/engineering/codebase-design/SKILL.md:14 — defined here
- `Implementation` — skills/engineering/codebase-design/SKILL.md:18 — defined here
- `Adapter` — skills/engineering/codebase-design/SKILL.md:18 — defined here
- `Depth` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `deep` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `shallow` — skills/engineering/codebase-design/SKILL.md:20 — defined here
- `Michael Feathers` — skills/engineering/codebase-design/SKILL.md:22 — used here
- `Deep module` — skills/engineering/codebase-design/SKILL.md:32 — defined here
- `Shallow module` — skills/engineering/codebase-design/SKILL.md:44 — defined here
- `internal seams` — skills/engineering/codebase-design/SKILL.md:62 — defined here
- `external seam` — skills/engineering/codebase-design/SKILL.md:62 — defined here
- `deletion test` — skills/engineering/codebase-design/SKILL.md:63 — defined here
- `test surface` — skills/engineering/codebase-design/SKILL.md:64 — defined here
- `Ousterhout` — skills/engineering/codebase-design/SKILL.md:107 — used here

## Structure
- `# Codebase Design`
- `## Glossary`
- `## Deep vs shallow`
- `## Principles`
- `## Designing for testability`
- `## Relationships`
- `## Rejected framings`
- `## Going deeper`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
`codebase-design` explicitly rejects Ousterhout's definition of depth as lines-of-code ratio (line 107), replacing it with depth-as-leverage to discourage artificial implementation padding.

## Context cost
6446 bytes, 115 lines, approximately 1200 tokens.
