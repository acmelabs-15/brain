---
package: rjm
name: Milestone Execution
slug: milestone-execution
kind: phase
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Milestone Execution

## Definition — verbatim
> "Step 3: Milestone Execution (repeat until all complete)" — .claude/skills/planner/SKILL.md:211

## Also called — verbatim
> "Step 3: Milestone Execution (delegate to agents, run tests)" — .claude/skills/planner/scripts/executor.py:8

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 8 | defined here | Enumerated as Step 3 in the execution workflow for delegating implementation to agents and running tests. |
| .claude/skills/planner/SKILL.md | 211 | defined here | Core iterative phase in the plan execution flowchart repeated until all milestones are complete. |

## Consumes
Approved milestones, task tracking lists, and dependency analysis.

## Produces
Implemented code increments, passing tests, and updated progress tracking.

## When applied
Applied iteratively during plan execution for each milestone in dependency order.

## Sub-concepts
rule-0-absolute-you-never-implement-code-yourself, rule-1-execution-protocol, rule-1-5-model-selection

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch, doc-drift

## Design notes
Milestone Execution is the primary implementation phase of plan execution in rjm. It coordinates the step-by-step realization of milestones through delegation to specialized implementation agents, running verification tests and tracking progress after each increment.
