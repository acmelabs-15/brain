---
package: rjm
name: Phase 1: Classify
slug: phase-1-classify
kind: phase
package_phase: rjm:autoplan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Classify

## Definition — verbatim
> "### Phase 1: Classify" — .claude/skills/autoplan/SKILL.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 92 | defined here | Second phase of autoplan identifying request intent family and autonomy level. |
| docs/diagrams/routing-flowchart.md | 13 | used here | Subgraph block in orchestrator routing flowchart receiving task and identifying type/complexity/risk. |

## Consumes
Reconnaissance signals from Phase 0 and raw user request text.

## Produces
Intent family classification and decision autonomy level (Mechanical, Taste, Sovereignty).

## When applied
Executed in autoplan immediately following Phase 0 reconnaissance and in orchestrator routing.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
`Phase 1: Classify` maps user requests to explicit intent families and determines decision autonomy thresholds, preventing unnecessary user interrupts for routine tasks while gating breaking choices.
