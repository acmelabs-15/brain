---
package: addy
name: Task List Target
slug: task-list-target
kind: artifact
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Task List Target

## Definition — verbatim
> "The task list target is where tasks and checkpoints are recorded. It is defined once, here; every other reference in this skill defers to it." — skills/planning-and-task-breakdown/SKILL.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/planning-and-task-breakdown/SKILL.md | 157 | defined here | Specifies the destination artifact (default tasks/todo.md or external issue tracker) for recorded tasks and checkpoints |

## Consumes
Structured tasks, acceptance criteria, verification commands, checkpoints.

## Produces
A checklist-style markdown file at `tasks/todo.md` or synchronized items in an external issue tracker (GitHub Issues, Jira, Linear, `bd`/beads).

## When applied
When writing or updating executable tasks resulting from the planning process.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
The task list target defines the canonical location where discrete implementation tasks and checkpoints are stored for execution. While defaulting to `tasks/todo.md` for local autonomous execution by commands like `/build`, it provides seamless extensibility to external issue trackers without altering the underlying task structure.
