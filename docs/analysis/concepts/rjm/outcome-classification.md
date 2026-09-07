---
package: rjm
name: Outcome Classification
slug: outcome-classification
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

# Outcome Classification

## Definition — verbatim
> "### Activity: Outcome Classification" — .claude/skills/retrospective/references/frameworks.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 77 | defined here | Phase 0 activity adapting Mad Sad Glad to classify execution events. |
| .claude/skills/retrospective/references/frameworks.md | 89 | defined here | Framework activity defining emotional valence classification categories. |
| .claude/skills/retrospective/SKILL.md | 88 | used here | Skill workflow referencing Outcome Classification under Phase 0 data gathering. |
| templates/agents/retrospective.shared.md | 218 | defined here | Shared template specifying outcome classification criteria. |

## Consumes
Reconstructed execution events and timeline entries.

## Produces
Categorized event buckets (Glad/Success, Mad/Frustration, Sad/Disappointment) with agent-specific technical meanings.

## When applied
Applied during Phase 0 (Data Gathering) to sort events before causal analysis.

## Sub-concepts
none

## Part of
data-gathering, retrospective

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Outcome Classification adapts the Agile "Mad Sad Glad" exercise for autonomous agent systems. By mapping execution events into categories representing smooth successes, system blockers/friction, and suboptimal compromises, it creates a prioritized taxonomy of events to feed into deep causal analysis.
