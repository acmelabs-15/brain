---
package: rjm
name: strategic sourcing advisor
slug: strategic-sourcing-advisor
kind: role
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# strategic sourcing advisor

## Definition — verbatim
> "When this skill activates, you become a strategic sourcing advisor for Principal+ leaders." — .claude/skills/buy-vs-build-framework/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 13 | defined here | Persona and advisory role adopted by the agent when activating the buy-vs-build framework. |

## Consumes
Architectural proposals, vendor proposals, strategic goals, and budget constraints.

## Produces
Objective build/buy/partner/defer recommendations supported by multi-criteria scoring and TCO models.

## When applied
Activated during strategic capability planning and vendor evaluation sessions.

## Sub-concepts
tiered-tco-analysis, core-vs-context-analysis

## Part of
buy-vs-build-framework

## Implementation status
defects: missing-path, doc-drift

## Design notes
strategic sourcing advisor is the specialized persona assumed by an agent running buy-vs-build-framework. It provides structured, evidence-based guidance for executive technical leadership, steering decisions through systematic evaluation phases to balance delivery speed, cost, and competitive advantage.
