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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/codebase-design/DESIGN-IT-TWICE.md

## Purpose — required, verbatim
> "When the user wants to explore alternative interfaces for a chosen deepening candidate, use this parallel sub-agent pattern. Based on \"Design It Twice\" (Ousterhout): your first idea is unlikely to be the best." — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3

## Design intent — required
Adapts John Ousterhout's "Design It Twice" principle into an agentic parallel sub-agent workflow for exploring deep module interfaces. Before sub-agents execute, the agent presents a concrete problem space framing to the user; then 3+ sub-agents are spawned concurrently under contrasting constraints (minimal entry points, maximal flexibility, common-caller optimization, ports & adapters). After sub-agents deliver their designs, the primary agent compares them across depth, locality, and seam placement, delivering an opinionated recommendation or hybrid synthesis.

## Phase — required
cross-phase

## Inputs — required
Target deepening candidate module, technical brief (file paths, coupling details, dependency category from `DEEPENING.md`, backend implementation details), and architectural vocabulary from `SKILL.md` and domain language from `CONTEXT.md`.

## Outputs — required
Problem space framing summary, multiple alternative interface proposals with usage examples and trade-off analyses, comparative prose synthesis, and a concrete final interface recommendation.

## Invokes — required
- file SKILL.md — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5
- doc DEEPENING.md — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:14

## Invoked by — required
- skill codebase-design — skills/engineering/codebase-design/SKILL.md:114
- doc docs/engineering/codebase-design.md — docs/engineering/codebase-design.md:46

## Concepts named — required, verbatim
- `Design It Twice` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3 — defined here
- `sub-agent` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:3 — used here
- `module` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `interface` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `seam` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `adapter` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `leverage` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:5 — used here
- `technical brief` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:23 — defined here
- `ports & adapters` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:28 — used here
- `CONTEXT.md` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:30 — used here
- `depth` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — used here
- `locality` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — used here
- `seam placement` — skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42 — defined here

## Structure
- # Design It Twice
- ## Process
- ### 1. Frame the problem space
- ### 2. Spawn sub-agents
- ### 3. Present and compare

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · skills/engineering/codebase-design/DESIGN-IT-TWICE.md:20 Mentions spawning 3+ sub-agents in parallel without specifying harness-agnostic subagent dispatch mechanism or tool interfaces.

## Observations
Urges the evaluating agent to be opinionated rather than presenting an unweighted cafeteria of options to the user, proposing a hybrid design if complementary elements emerge.

## Context cost
2,664 bytes (~666 tokens). Supporting reference for `codebase-design`.
