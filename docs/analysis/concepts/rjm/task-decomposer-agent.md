---
package: rjm
name: Task Decomposer Agent
slug: task-decomposer-agent
kind: role
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

# Task Decomposer Agent

## Definition — verbatim
> "# Task Decomposer Agent" — templates/agents/task-decomposer.shared.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/task-decomposer.shared.md | 12 | defined here | Agent definition establishing the role and protocol for decomposing epics into atomic work items. |

## Consumes
PRDs, epics, and high-level feature requirements.

## Produces
Sized, sequenced task lists with acceptance criteria and dependency graphs saved to `.agents/planning/TASKS-[feature-name].md`.

## When applied
Invoked during planning when PRDs or epics need decomposition into actionable implementation tasks.

## Sub-concepts
task-list-template, reconciliation-process, reconciliation-actions

## Part of
planning

## Implementation status
clean

## Design notes
A planning support agent specialized in atomizing high-level epics and PRDs into discrete, estimable tasks with explicit acceptance criteria, complexity ratings, and dependency ordering.
