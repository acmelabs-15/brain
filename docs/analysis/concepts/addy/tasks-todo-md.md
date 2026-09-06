---
package: addy
name: tasks/todo.md
slug: tasks-todo-md
kind: artifact
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: scripts/validate-reference-links-test.js, sha256: b2d8b5530e182b377d710fa3c207f272b0b234307fe603643cd0d9dc384d1b99}
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tasks/todo.md

## Definition — verbatim
> "record the task list in the task list target defined by `planning-and-task-breakdown` (default `tasks/todo.md`; projects may designate an external tracker instead)." — skills/spec-driven-development/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 15 | produces | Specifies saving task list to tasks/todo.md |
| scripts/validate-reference-links-test.js | 125 | references | Test fixture string illustrating valid reference to tasks/todo.md |
| scripts/validate-reference-links.js | 25 | references | Validator exclusion comment allowing uncommitted path tasks/todo.md |
| skills/spec-driven-development/SKILL.md | 176 | defines | Output convention designating tasks/todo.md as default task list target |

## Consumes
Decomposed vertical tasks with acceptance criteria, verification commands, and phase checkpoints.

## Produces
Actionable markdown task list artifact with checkboxes tracking execution state during `/build`.

## When applied
Generated at the end of the Plan phase; continuously updated during implementation.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
defects: other

## Design notes
`tasks/todo.md` is the operational task-tracking artifact in Addy's lifecycle. It maintains the atomic list of tasks, their individual acceptance criteria, and exact verification commands. As the `/build` command executes each task incrementally, it checks off items in `tasks/todo.md`, ensuring progress is visibly and reliably persisted.
