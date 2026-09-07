---
package: rjm
name: 10% Threshold Rule
slug: 10-threshold-rule
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# 10% Threshold Rule

## Definition — verbatim
> "### 10% Threshold Rule" — .claude/agents/task-decomposer.md:199

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 199 | defined here | Mandatory gate requiring reconciliation when task estimates diverge from epic estimates by over 10%. |
| templates/agents/task-decomposer.shared.md | 217 | defined here | Shared template specification declaring the 10% threshold reconciliation trigger. |

## Consumes
Difference percentage between derived task sum and parent epic/PRD estimate.

## Produces
Mandatory triggering of estimate reconciliation actions whenever estimate drift exceeds 10%.

## When applied
Applied during post-breakdown estimate comparison before finalizing the task plan.

## Sub-concepts
none

## Part of
estimate-reconciliation-protocol

## Implementation status
clean

## Design notes
The 10% Threshold Rule mandates that whenever the aggregated estimates of decomposed tasks differ by more than ten percent from the parent PRD or epic estimate, the agent must execute reconciliation (updating source, documenting rationale, or flagging for review).
