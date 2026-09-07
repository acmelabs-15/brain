---
package: rjm
name: Operating Moves
slug: operating-moves
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Operating Moves

## Definition — verbatim
> "## Operating Moves" — .claude/skills/decision-critic/references/mental-models-fat-tails.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 57 | defined here | Actionable checklist for fat-tail domains: planning to the tail and distrusting Gaussian metrics. |
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 48 | defined here | Actionable checklist for circle of competence: mapping circles explicitly and raising verification outside. |

## Consumes
Abstract mental model principles and concrete operational decision contexts.

## Produces
Prescriptive tactical rules (buffers, verification spikes, delegation) directly applicable to agent workflows.

## When applied
Consulted when translating theoretical mental models into concrete decision validation rules.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
clean (.claude/skills/requirements-interview/references/mental-models-circle-of-competence.md); defects: missing-path (.claude/skills/decision-critic/references/mental-models-fat-tails.md)

## Design notes
Operating Moves represents a standardized section pattern across mental model reference files in rjm that translates high-level conceptual frameworks into actionable tactical checklists, preventing mental models from remaining purely theoretical.
