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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/codebase-design/DESIGN-IT-TWICE.md

## Purpose — required, verbatim
> "When the user wants to explore alternative interfaces for a chosen deepening candidate, use this parallel sub-agent pattern. Based on \"Design It Twice\" (Ousterhout): your first idea is unlikely to be the best." — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3

## Design intent — required
Defines a structured, three-step multi-agent design exploration pattern based on John Ousterhout's "Design It Twice" principle. Directs the lead agent to frame the problem space for the user, dispatch 3+ parallel sub-agents with divergent optimization constraints (minimal interface, maximal flexibility, common-case optimization, ports & adapters), and synthesize the results by comparing depth, locality, and seam placement before rendering an opinionated recommendation or hybrid proposal.

## Phase — required
cross-phase

## Inputs — required
Deepening candidate module, technical constraints, dependency classifications from `DEEPENING.md`, and vocabulary from `SKILL.md` and `CONTEXT.md`.

## Outputs — required
User-facing problem-space explanation, parallel sub-agent interface briefs and designs, comparative trade-off analysis, and an opinionated interface recommendation.

## Invokes — required
- doc SKILL.md — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5
- doc DEEPENING.md — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:14

## Invoked by — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:114

## Concepts named — required, verbatim
- `Design It Twice` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:1 — defined here
- `module` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `interface` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `seam` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `adapter` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `leverage` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `sub-agents` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:11 — used here
- `ports & adapters` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:28 — used here
- `depth` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — used here
- `locality` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — used here
- `seam placement` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — defined here

## Structure
- # Design It Twice — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:1
- ## Process — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:7
- ### 1. Frame the problem space — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:9
- ### 2. Spawn sub-agents — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:19
- ### 3. Present and compare — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:40

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies multi-agent exploration where agents are given deliberately opposing objectives (e.g. 1–3 entry points vs maximal flexibility vs default case triviality) to prevent premature convergence on a mediocre interface.

## Context cost
2664 bytes, 45 lines, ~650 tokens.
