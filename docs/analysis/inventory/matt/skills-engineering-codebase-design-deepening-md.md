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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/codebase-design/DEEPENING.md

## Purpose — required, verbatim
> "How to deepen a cluster of shallow modules safely, given its dependencies." — skills/engineering/codebase-design/DEEPENING.md:3

## Design intent — required
Operational guide for consolidating and deepening clusters of shallow modules based on dependency classification. Defines testing strategies and seam placement for four dependency tiers (in-process, local-substitutable, remote but owned, and true external). Establishes seam discipline (requiring two distinct adapters to justify an abstraction) and an aggressive testing doctrine ("replace, don't layer") where old fine-grained unit tests on shallow modules are deleted in favor of black-box interface-level verification.

## Phase — required
cross-phase

## Inputs — required
Candidate shallow module cluster, dependency inventory, and architectural vocabulary from `SKILL.md`.

## Outputs — required
Deepened module design, seam definitions, port/adapter specifications, and replaced test suites.

## Invokes — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:2

## Invoked by — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:113
- skill design-it-twice — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:14
- doc codebase-design — docs/engineering/codebase-design.md:46

## Concepts named — required, verbatim
- `module` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `interface` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `seam` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `adapter` — skills/engineering/codebase-design/DEEPENING.md:3 — used here
- `Dependency categories` — skills/engineering/codebase-design/DEEPENING.md:5 — defined here
- `In-process` — skills/engineering/codebase-design/DEEPENING.md:9 — defined here
- `Local-substitutable` — skills/engineering/codebase-design/DEEPENING.md:13 — defined here
- `PGLite` — skills/engineering/codebase-design/DEEPENING.md:15 — used here
- `Remote but owned` — skills/engineering/codebase-design/DEEPENING.md:17 — defined here
- `Ports & Adapters` — skills/engineering/codebase-design/DEEPENING.md:17 — defined here
- `port` — skills/engineering/codebase-design/DEEPENING.md:19 — defined here
- `True external` — skills/engineering/codebase-design/DEEPENING.md:23 — defined here
- `Mock` — skills/engineering/codebase-design/DEEPENING.md:23 — defined here
- `Seam discipline` — skills/engineering/codebase-design/DEEPENING.md:27 — defined here
- `hypothetical seam` — skills/engineering/codebase-design/DEEPENING.md:29 — defined here
- `Internal seams` — skills/engineering/codebase-design/DEEPENING.md:30 — defined here
- `external seams` — skills/engineering/codebase-design/DEEPENING.md:30 — defined here
- `replace, don't layer` — skills/engineering/codebase-design/DEEPENING.md:32 — defined here
- `test surface` — skills/engineering/codebase-design/DEEPENING.md:35 — defined here

## Structure
- `# Deepening`
- `## Dependency categories`
- `### 1. In-process`
- `### 2. Local-substitutable`
- `### 3. Remote but owned (Ports & Adapters)`
- `### 4. True external (Mock)`
- `## Seam discipline`
- `## Testing strategy: replace, don't layer`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes the rule "One adapter means a hypothetical seam. Two adapters means a real one." (line 29) to actively prevent speculative over-abstraction and gratuitous indirection.

## Context cost
2553 bytes, 38 lines, approximately 450 tokens.
