---
package: rjm
name: Generate Insights
slug: generate-insights
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Generate Insights

## Definition — verbatim
> "## Phase 1: Generate Insights" — .claude/skills/retrospective/references/frameworks.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 79 | defined here | Outline heading for Phase 1 focusing on causal analysis beyond surface symptoms. |
| .claude/skills/retrospective/references/frameworks.md | 122 | defined here | Framework phase definition guiding root-cause insight derivation. |

## Consumes
Objective timelines and classified outcomes from Phase 0 (Data Gathering).

## Produces
Root cause hypotheses, driving/restraining force mappings, and categorized insight matrices.

## When applied
Second operational phase (Phase 1) of the retrospective lifecycle, bridging raw facts and prioritized diagnosis.

## Sub-concepts
five-whys, fishbone-analysis, force-field-analysis, patterns-and-shifts, learning-matrix

## Part of
retrospective

## Implementation status
clean

## Design notes
Generate Insights is Phase 1 of the retrospective workflow. Its mission is to transform gathered factual data into deep causal understanding, looking beyond surface symptoms through rigorous analytical frameworks to expose underlying systemic causes.
