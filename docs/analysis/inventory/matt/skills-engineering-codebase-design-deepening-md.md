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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/codebase-design/DEEPENING.md

## Purpose — required, verbatim
> "How to deepen a cluster of shallow modules safely, given its dependencies. Assumes the vocabulary in [SKILL.md](SKILL.md): **module**, **interface**, **seam**, **adapter**." — skills/engineering/codebase-design/DEEPENING.md:3

## Design intent — required
Provides practical guidelines for deepening clusters of shallow modules based on dependency characteristics. Classifies dependencies into four categories (in-process, local-substitutable, remote but owned, true external) to determine the appropriate testing strategy across module seams. Enforces strict seam discipline by mandating at least two distinct adapters to justify introducing an interface, and establishes a replace-not-layer testing philosophy where shallow unit tests are discarded once observable behaviors are validated through the deepened module's interface.

## Phase — required
cross-phase

## Inputs — required
Candidate shallow module clusters, internal and external dependency topology, test suite structures, and architectural seam candidates.

## Outputs — required
Deepened module interface boundaries, port and adapter specifications, and test suite replacement strategies.

## Invokes — required
- file SKILL.md — skills/engineering/codebase-design/DEEPENING.md:3

## Invoked by — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:113
- doc docs/engineering/codebase-design.md — docs/engineering/codebase-design.md:46

## Concepts named — required, verbatim
- `module` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `interface` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `seam` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `adapter` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `Dependency categories` — skills/engineering/codebase-design/DEEPENING.md:5 — defined here
- `In-process` — skills/engineering/codebase-design/DEEPENING.md:9 — defined here
- `Local-substitutable` — skills/engineering/codebase-design/DEEPENING.md:13 — defined here
- `Remote but owned` — skills/engineering/codebase-design/DEEPENING.md:17 — defined here
- `Ports & Adapters` — skills/engineering/codebase-design/DEEPENING.md:17 — used here
- `port` — skills/engineering/codebase-design/DEEPENING.md:19 — defined here
- `True external` — skills/engineering/codebase-design/DEEPENING.md:23 — defined here
- `Mock` — skills/engineering/codebase-design/DEEPENING.md:23 — used here
- `Seam discipline` — skills/engineering/codebase-design/DEEPENING.md:27 — defined here
- `hypothetical seam` — skills/engineering/codebase-design/DEEPENING.md:29 — defined here
- `Internal seams` — skills/engineering/codebase-design/DEEPENING.md:30 — defined here
- `external seams` — skills/engineering/codebase-design/DEEPENING.md:30 — defined here
- `replace, don't layer` — skills/engineering/codebase-design/DEEPENING.md:32 — defined here
- `test surface` — skills/engineering/codebase-design/DEEPENING.md:35 — defined here

## Structure
- # Deepening
- ## Dependency categories
- ### 1. In-process
- ### 2. Local-substitutable
- ### 3. Remote but owned (Ports & Adapters)
- ### 4. True external (Mock)
- ## Seam discipline
- ## Testing strategy: replace, don't layer

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly rejects single-adapter seams as mere indirection, insisting that a genuine architectural seam requires at least two adapters (typically production and testing). Mandates deleting obsolete unit tests for shallow components rather than retaining redundant test layers.

## Context cost
2,553 bytes (~638 tokens). Supporting reference for `codebase-design`.
