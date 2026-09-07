---
package: rjm
name: TodoWrite
slug: todowrite
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TodoWrite

## Definition — verbatim
> "The agent tracks progress using TodoWrite and provides structured output for each iteration." — docs/autonomous-issue-development.md:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 53 | used here | Tool action instructed for tracking milestone progress across execution phases. |
| docs/autonomous-issue-development.md | 272 | used here | Description of agent session task tracking and structured iteration logging. |

## Consumes
Planned milestones, issues, and execution phases.

## Produces
Real-time status updates and completed task lists across multi-step agent workflows.

## When applied
Applied throughout autonomous issue development and plan execution to track active, pending, and completed tasks.

## Sub-concepts
none

## Part of
execution-rules

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
TodoWrite is a tracking technique and tool primitive utilized by autonomous agents in rjm to maintain a live, transparent checklist of task milestones. It ensures visibility into execution state and helps agents resume work accurately without skipping required verification steps.
