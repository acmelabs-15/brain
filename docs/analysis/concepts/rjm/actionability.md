---
package: rjm
name: Actionability
slug: actionability
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Actionability

## Definition — verbatim
> "Can be executed without clarification" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 46 | defines | Defined as a 25% weighted dimension in the evaluation rubric evaluating immediate execution capability. |
| scripts/eval/eval-agents.py | 12 | defines | Defined as an agent definition scoring dimension measuring concrete, specific, and usable outputs. |

## Consumes
Plans, specifications, task definitions, and agent outputs.

## Produces
Scores evaluating whether outputs can be implemented immediately without asking follow-up questions.

## When applied
During plan critique, evaluator-optimizer scoring, and agent prompt evaluation.

## Sub-concepts
none

## Part of
evaluation-rubric

## Implementation status
clean

## Design notes
An evaluation dimension verifying that plans, instructions, and agent outputs are sufficiently specific and concrete to be executed immediately without requiring clarifying questions.
