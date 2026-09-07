---
package: rjm
name: Handoff Validation
slug: handoff-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Handoff Validation

## Definition — verbatim
> "Before handing off, validate ALL items in the applicable checklist:" — .claude/agents/implementer.md:805

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 803 | defines | Defines completion and blocker handoff validation checklists for implementer transitions to QA or orchestrator. |
| .claude/agents/qa.md | 806 | defines | Defines QA pass/fail handoff validation checklist verifying test logs and defect reports. |
| .claude/agents/task-decomposer.md | 253 | defines | Defines task decomposition handoff validation ensuring DAG dependencies and scope boundaries are complete. |
| templates/agents/implementer.shared.md | 792 | defines | Shared template specification for implementer handoff validation. |
| templates/agents/qa.shared.md | 736 | defines | Shared template specification for QA handoff validation. |
| templates/agents/task-decomposer.shared.md | 271 | defines | Shared template specification for task decomposer handoff validation. |

## Consumes
Agent deliverables, test outcomes, commit records, and handoff summaries.

## Produces
Validated handoff payload ensuring recipient agent has complete context and zero ambiguous state.

## When applied
Evaluated by any agent immediately prior to transferring execution authority to another agent or orchestrator.

## Sub-concepts
none

## Part of
orchestrator, implementer, qa, task-decomposer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
The universal inter-agent boundary gate in rjm. It guarantees that handoffs between specialized roles (such as task decomposer to orchestrator, implementer to QA, or QA to orchestrator) satisfy exhaustive pre-flight checklists, eliminating handoff ambiguity and dropped tasks.
