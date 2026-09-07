---
package: rjm
name: Task Definition Format
slug: task-definition-format
kind: template
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

# Task Definition Format

## Definition — verbatim
> "## Task Definition Format" — .claude/agents/task-decomposer.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 105 | defined here | Specification format defining the required markdown fields for atomic task units. |
| templates/agents/task-decomposer.shared.md | 113 | defined here | Shared template specification defining the atomic task definition schema. |

## Consumes
Decomposed requirements, identified dependencies, affected files, and verifiable acceptance criteria.

## Produces
Standardized task blocks (TASK-NNN) specifying title, type, complexity, description, criteria, dependencies, and affected files.

## When applied
Applied when authoring each individual task entry within `.agents/planning/TASKS-[feature].md`.

## Sub-concepts
none

## Part of
decomposition-process

## Implementation status
clean

## Design notes
Task Definition Format defines the structured specification for individual tasks (ID, Type, Complexity, Description, Acceptance Criteria, Dependencies, Files Affected), ensuring work items are unambiguous and independently verifiable by implementer agents.
