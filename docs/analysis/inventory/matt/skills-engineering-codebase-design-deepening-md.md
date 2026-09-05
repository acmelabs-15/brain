---
package: matt
path: skills/engineering/codebase-design/DEEPENING.md
type: skill
bytes: 2553
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/codebase-design/DEEPENING.md

## Purpose — required, verbatim
> "How to deepen a cluster of shallow modules safely, given its dependencies. Assumes the vocabulary in [SKILL.md](SKILL.md): **module**, **interface**, **seam**, **adapter**." — skills/engineering/codebase-design/DEEPENING.md:3

## Design intent — required
Provides tactical architectural guidelines for refactoring clusters of shallow modules into deep modules. Categorizes dependencies into four tiers (in-process, local-substitutable, remote but owned, and true external) to govern how seams and adapters are introduced, enforces seam discipline (requiring at least two adapters to justify a port), and dictates a testing strategy where obsolete unit tests on shallow internals are deleted and replaced by tests directly targeting the deepened module's external interface.

## Phase — required
cross-phase

## Inputs — required
Candidate shallow module clusters, dependency structures, and the core vocabulary from `SKILL.md`.

## Outputs — required
none

## Invokes — required
- doc SKILL.md — skills/engineering/codebase-design/DEEPENING.md:3

## Invoked by — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:113
- doc DESIGN-IT-TWICE.md — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:14

## Concepts named — required, verbatim
- `module` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `interface` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `seam` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `adapter` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `In-process` — skills/engineering/codebase-design/DEEPENING.md:9 — defined here
- `Local-substitutable` — skills/engineering/codebase-design/DEEPENING.md:13 — defined here
- `Remote but owned` — skills/engineering/codebase-design/DEEPENING.md:17 — defined here
- `Ports & Adapters` — skills/engineering/codebase-design/DEEPENING.md:17 — used here
- `port` — skills/engineering/codebase-design/DEEPENING.md:19 — defined here
- `True external` — skills/engineering/codebase-design/DEEPENING.md:23 — defined here
- `Mock` — skills/engineering/codebase-design/DEEPENING.md:23 — used here
- `Seam discipline` — skills/engineering/codebase-design/DEEPENING.md:27 — defined here
- `Internal seams` — skills/engineering/codebase-design/DEEPENING.md:30 — defined here
- `external seams` — skills/engineering/codebase-design/DEEPENING.md:30 — defined here
- `interface is the test surface` — skills/engineering/codebase-design/DEEPENING.md:35 — used here

## Structure
- # Deepening — skills/engineering/codebase-design/DEEPENING.md:1
- ## Dependency categories — skills/engineering/codebase-design/DEEPENING.md:5
- ### 1. In-process — skills/engineering/codebase-design/DEEPENING.md:9
- ### 2. Local-substitutable — skills/engineering/codebase-design/DEEPENING.md:13
- ### 3. Remote but owned (Ports & Adapters) — skills/engineering/codebase-design/DEEPENING.md:17
- ### 4. True external (Mock) — skills/engineering/codebase-design/DEEPENING.md:23
- ## Seam discipline — skills/engineering/codebase-design/DEEPENING.md:27
- ## Testing strategy: replace, don't layer — skills/engineering/codebase-design/DEEPENING.md:32

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clear rule on seam discipline: "One adapter means a hypothetical seam. Two adapters means a real one." (line 29). Strongly advocates deleting old tests of shallow modules rather than maintaining layered testing waste (line 34).

## Context cost
2553 bytes, 38 lines, ~600 tokens.
