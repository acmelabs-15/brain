---
package: rjm
name: Hypothesis
slug: hypothesis
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: .claude/skills/chaos-experiment/templates/experiment-template.md, sha256: 78330ff18cbd4a561b86cf638bfd91ee3fc83ffa3328d20379fb14fcb3341377}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hypothesis

## Definition — verbatim
> "If we ship [feature], then [metric] will [change] because [user behavior mechanism]." — .claude/agents/roadmap.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 97 | defined here | Defined as a structured cause-and-effect hypothesis template within roadmap epics. |
| .claude/skills/chaos-experiment/templates/experiment-template.md | 74 | defined here | Defined as a formal Given/When/Then hypothesis structure in chaos experiment templates. |
| templates/agents/roadmap.shared.md | 103 | defined here | Defined in the shared roadmap template for epic hypothesis formulation. |

## Consumes
Proposed feature changes, system fault injection models, and anticipated causal mechanisms.

## Produces
Testable, falsifiable cause-and-effect statements linking interventions to measurable metrics.

## When applied
Applied when specifying epic objectives in planning and when establishing baseline expectations in chaos resilience experiments.

## Sub-concepts
none

## Part of
- epic-structure
- chaos-experiment

## Implementation status
defects: doc-drift

## Design notes
In rjm, Hypothesis transforms assumptions into falsifiable scientific propositions. Whether specifying how a feature will alter user behavior or predicting system resilience under chaos fault injection, framing changes as explicit hypotheses ensures outcomes can be definitively evaluated rather than rationalized post-hoc.
