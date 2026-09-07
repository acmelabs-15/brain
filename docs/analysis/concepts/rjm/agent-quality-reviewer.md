---
package: rjm
name: "@agent-quality-reviewer"
slug: agent-quality-reviewer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# @agent-quality-reviewer

## Definition — verbatim
(used, not defined)

> "Delegate to @agent-quality-reviewer for each milestone:" — .claude/skills/planner/scripts/executor.py:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 201 | used here | Delegated to during reconciliation and post-implementation review to evaluate acceptance criteria and code quality. |

## Consumes
Plan files, target source files, acceptance criteria, reconciled milestones, and modified code changes.

## Produces
Quality review reports, pass/fail status (`PASS`, `PASS_WITH_CONCERNS`, `NEEDS_CHANGES`), reconciliation status (`SATISFIED`, `NOT_SATISFIED`, `PARTIALLY_SATISFIED`), and categorized issues lists.

## When applied
Invoked sequentially during reconciliation (Step 2), plan review (Step 2), and post-implementation quality review (Step 4).

## Sub-concepts
none

## Part of
planner, executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A specialized review agent persona in rjm responsible for evaluating plans and implementations against acceptance criteria. Operating independently from the authoring or implementing agent, it conducts adversarial verification across reconciliation, planning, and post-execution review phases.
