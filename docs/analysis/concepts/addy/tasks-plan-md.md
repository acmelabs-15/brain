---
package: addy
name: tasks/plan.md
slug: tasks-plan-md
kind: artifact
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
  - {path: scripts/validate-reference-links-test.js, sha256: b2d8b5530e182b377d710fa3c207f272b0b234307fe603643cd0d9dc384d1b99}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tasks/plan.md

## Definition — verbatim
> "Save the plan to `tasks/plan.md` and record the task list in the task list target defined by `planning-and-task-breakdown` (default `tasks/todo.md`; projects may designate an external tracker instead)." — skills/spec-driven-development/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 15 | produces | Specifies saving implementation plan to tasks/plan.md |
| evals/cases/planning-and-task-breakdown.json | 32 | applies | Evaluation expectation checking ordered tasks in tasks/plan.md |
| scripts/validate-reference-links-test.js | 125 | references | Test fixture string illustrating valid reference to tasks/plan.md |
| skills/spec-driven-development/SKILL.md | 176 | defines | Output convention designating tasks/plan.md as default plan artifact |

## Consumes
Specification context, architecture models, and component dependency graphs.

## Produces
Persistent plan document containing task rationale, component ordering, and verification criteria.

## When applied
Produced during the Plan phase via `/plan` or `planning-and-task-breakdown`.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
defects: doc-drift

## Design notes
`tasks/plan.md` is the canonical implementation plan artifact in Addy's lifecycle. While `tasks/todo.md` tracks granular checklist execution state, `tasks/plan.md` preserves the overarching technical architecture, component dependencies, and design rationale, ensuring downstream commands like `/build` maintain full context across sessions.
