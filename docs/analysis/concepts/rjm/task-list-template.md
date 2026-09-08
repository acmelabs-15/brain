---
package: rjm
name: Task List Template
slug: task-list-template
kind: template
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

# Task List Template

## Definition — verbatim
> "## Task List Template" — templates/agents/task-decomposer.shared.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/task-decomposer.shared.md | 139 | defined here | Specification template for saving structured task breakdowns to `.agents/planning/TASKS-[feature-name].md`. |

## Consumes
Decomposed tasks, complexity estimates, milestones, and dependency relationships.

## Produces
Formatted task list document saved to `.agents/planning/TASKS-[feature-name].md`.

## When applied
Used by the task decomposer agent to format the completed task decomposition artifact.

## Sub-concepts
none

## Part of
task-decomposer-agent

## Implementation status
clean

## Design notes
The canonical markdown template structuring decomposed task lists into summary tables, milestones, individual task definitions, Mermaid dependency graphs, and risk mitigations.
