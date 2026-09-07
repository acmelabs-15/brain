---
package: rjm
name: Task Type Triage
slug: task-type-triage
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task Type Triage

## Definition — verbatim
(used, not defined)

> "Added Task Type Triage table, Reliability Principles (Delegation > Memory), Affirmative Directives, Error Normalization" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 40 | defined here | Documented as an orchestrator prompt enhancement adding a task classification and routing table before delegating work. |

## Consumes
User requests, task complexity indicators, and domain scope descriptions.

## Produces
Task classifications, specialist agent routing decisions, and execution strategies.

## When applied
Executed by the orchestrator agent before assigning or delegating any task to specialist agents.

## Sub-concepts
none

## Part of
orchestrator-routing

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104)

## Design notes
`Task Type Triage` requires the orchestrator to classify incoming tasks along structured dimensions (e.g. complexity, domain, risk) before selecting specialist agents, ensuring work is routed accurately and preventing single-model overload.
