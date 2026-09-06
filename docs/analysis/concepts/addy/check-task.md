---
package: addy
name: check:task
slug: check-task
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# check:task

## Definition — verbatim
> "`check:fast` is what runs after an edit, `check:task` when the agent thinks it's done, `check:full` in CI." — skills/constraint-driven-development/SKILL.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 20 | defined here | Specifies adding check:task to package.json for task-level verification. |
| skills/constraint-driven-development/SKILL.md | 176 | defined here | Defines check:task script chaining check:fast with test suite and coverage. |

## Consumes
Completed task slice, test files, and staged changes.

## Produces
Task-level verdict confirming fast checks pass, tests run green, and coverage holds.

## When applied
When an agent completes a task before committing (under 90 seconds).

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
The task-completion gate verifying unit/regression tests and changed-line coverage before code is committed to history.
