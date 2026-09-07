---
package: rjm
name: Strategic Decision
slug: strategic-decision
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Strategic Decision

## Definition — verbatim
> "Strategic Decision: independent-thinker → high-level-advisor → task-decomposer" — .claude/agents/AGENTS.md:233-234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 233 | defined here | Defines the standard three-agent workflow sequence for resolving high-level strategic questions. |
| src/claude/AGENTS.md | 233 | defined here | Canonical definition of the strategic decision workflow sequence across subagents. |

## Consumes
Ambiguous strategic questions, architectural crossroads, or organizational trade-off problems.

## Produces
Challenged perspectives, strategic recommendations, and decomposed actionable tasks.

## When applied
Triggered when addressing high-impact architectural, technology selection, or project governance dilemmas.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Strategic Decision is rjm's specialized three-agent workflow designed for high-stakes, ambiguous choices. It sequences independent-thinker to challenge initial assumptions and identify biases, high-level-advisor to weigh long-term architectural trade-offs, and task-decomposer to convert the consensus into sequenced implementation tasks.
