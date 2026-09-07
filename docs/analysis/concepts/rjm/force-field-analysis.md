---
package: rjm
name: Force Field Analysis
slug: force-field-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Force Field Analysis

## Definition — verbatim
> "### Activity: Force Field Analysis" — .claude/skills/retrospective/references/frameworks.md:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 82 | used here | Listed as an analytical activity under Phase 1 insight generation. |
| .claude/skills/retrospective/references/frameworks.md | 244 | defined here | Framework activity defining driving versus restraining forces analysis. |
| .claude/skills/retrospective/SKILL.md | 102 | used here | Skill instruction directing use of Force Field Analysis for recurring anti-patterns. |
| templates/agents/retrospective.shared.md | 373 | defined here | Shared template specifying Force Field Analysis execution steps. |

## Consumes
Persistent recurring failure patterns and architectural friction points.

## Produces
Analysis of driving forces (pressures toward desired state) versus restraining forces (pressures maintaining the status quo) with mitigation strategies.

## When applied
Applied during Phase 1 (Generate Insights) when a negative behavioral or architectural pattern persists despite existing guidelines.

## Sub-concepts
none

## Part of
generate-insights, retrospective

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Force Field Analysis, adapted from Kurt Lewin, is used in rjm when an agent or system repeatedly fails in the same way despite documented instructions. By mapping restraining forces (e.g., token limits, tool latency, habit) against driving forces, it allows designers to systematically weaken restraining factors rather than futilely adding more instructions.
