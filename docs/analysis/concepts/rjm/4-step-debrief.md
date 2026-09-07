---
package: rjm
name: 4-Step Debrief
slug: 4-step-debrief
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

# 4-Step Debrief

## Definition — verbatim
> "### Activity: 4-Step Debrief" — .claude/skills/retrospective/references/frameworks.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 75 | defined here | Phase 0 activity adapting the military After-Action Review framework. |
| .claude/skills/retrospective/references/frameworks.md | 14 | defined here | Core debrief activity definition specifying the four guiding questions. |
| .claude/skills/retrospective/SKILL.md | 84 | used here | Skill workflow referencing the 4-Step Debrief framework in Phase 0. |
| templates/agents/retrospective.shared.md | 124 | defined here | Shared template defining the 4-Step Debrief activity for cross-platform retrospectives. |

## Consumes
Execution timelines and task objectives.

## Produces
Four-step analysis answering what was intended, what actually happened, why differences occurred, and what can be learned.

## When applied
Applied during Phase 0 of every retrospective as the standard investigative scaffolding.

## Sub-concepts
none

## Part of
data-gathering, retrospective

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
The 4-Step Debrief adapts the military After-Action Review (AAR) to autonomous agent workflows. By systematically asking what was planned, what happened, why there was a variance, and what to do next time, it provides an objective structure that anchors reflection in empirical reality.
