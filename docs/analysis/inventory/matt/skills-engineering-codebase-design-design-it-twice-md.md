---
package: matt
path: skills/engineering/codebase-design/DESIGN-IT-TWICE.md
type: skill
bytes: 2664
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/codebase-design/DESIGN-IT-TWICE.md, sha256: 8e740bf98446dbd4dfdc132ac4346d9a7eedaf93de6a495889171cf7f99f16bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/codebase-design/DESIGN-IT-TWICE.md

## Purpose — required, verbatim
> "When the user wants to explore alternative interfaces for a chosen deepening candidate, use this parallel sub-agent pattern." — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3

## Design intent — required
Multi-agent design exploration workflow applying John Ousterhout's "Design It Twice" principle. Spawns 3 or more parallel subagents with distinct, contrasting design constraints (minimizing surface area, maximizing flexibility, optimizing for common callers, or structuring around ports and adapters). Synthesizes and contrasts the resulting designs across depth, locality, and seam placement, concluding with an opinionated recommendation or hybrid proposal.

## Phase — required
cross-phase

## Inputs — required
Deepening candidate module, problem space constraints, dependency classification from `DEEPENING.md`, and architectural vocabulary from `SKILL.md` and domain language from `CONTEXT.md`.

## Outputs — required
3+ radically different candidate interface designs (types, methods, params, usage examples, seam encapsulations, dependency adapters, trade-offs), comparative prose analysis across depth/locality/seam placement, and recommended synthesis.

## Invokes — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:2
- reference Deepening — skills/engineering/codebase-design/DEEPENING.md:1

## Invoked by — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:114
- doc codebase-design — docs/engineering/codebase-design.md:46

## Concepts named — required, verbatim
- `sub-agent` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3 — used here
- `Design It Twice` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3 — defined here
- `Ousterhout` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3 — used here
- `module` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `interface` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `seam` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `adapter` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `leverage` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `ports & adapters` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:28 — used here
- `depth` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — used here
- `locality` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — used here
- `seam placement` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — defined here

## Structure
- `# Design It Twice`
- `## Process`
- `### 1. Frame the problem space`
- `### 2. Spawn sub-agents`
- `### 3. Present and compare`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Notice that `docs/engineering/codebase-design.md:56` documents a known issue (issue #449): agents without strict driver guardrails sometimes mistake this file's parallel sub-agent instructions (line 21: "Spawn 3+ sub-agents in parallel.") for a standalone executable workflow rather than a supporting reference technique.

## Context cost
2664 bytes, 45 lines, approximately 470 tokens.
