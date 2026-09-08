---
package: rjm
name: Reconciliation Actions
slug: reconciliation-actions
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reconciliation Actions

## Definition — verbatim
> "### Reconciliation Actions (one MUST be chosen)" — templates/agents/task-decomposer.shared.md:231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/task-decomposer.shared.md | 231 | defined here | Mandatory action choices (Update source, Document rationale, Flag for review) when estimates diverge. |

## Consumes
An estimate divergence greater than 10% identified during the reconciliation process.

## Produces
Selected reconciliation decision with required documentation in the task breakdown deliverable.

## When applied
Must be applied whenever task breakdown estimates diverge by more than 10% from the source document.

## Sub-concepts
none

## Part of
task-decomposer-agent

## Implementation status
clean

## Design notes
A mandatory decision set requiring the agent to choose between updating the source epic, documenting justifiable rationale, or flagging for review when task estimates drift beyond 10%.
