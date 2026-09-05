---
package: addy
path: .claude/commands/plan.md
type: command
bytes: 805
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 91d961b2a7011209bc6771c176932e72e11b99d0c524e3f63c9f2e2a94fbc993}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/commands/plan.md

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .claude/commands/plan.md:2

## Design intent — required
Orchestrates the planning phase of the development lifecycle by consuming a specification (`SPEC.md`) and decomposing it into small, verifiable, vertically-sliced tasks with explicit dependency ordering, acceptance criteria, and phase checkpoints while enforcing a strict read-only execution mode.

## Phase — required
addy:Plan

## Inputs — required
- Existing specification (`SPEC.md` or equivalent)
- Target codebase structure and existing component implementations

## Outputs — required
- `tasks/plan.md` (detailed execution plan with dependencies, verification steps, and checkpoints)
- `tasks/todo.md` (actionable task checklist)

## Invokes — required
- skill agent-skills:planning-and-task-breakdown — .claude/commands/plan.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .claude/commands/plan.md:5 — used here
- `SPEC.md` — .claude/commands/plan.md:7 — used here
- `tasks/plan.md` — .claude/commands/plan.md:16 — defined here
- `tasks/todo.md` — .claude/commands/plan.md:16 — defined here

## Structure
Stepwise planning sequence (steps 1–6: enter plan mode, identify dependency graph, vertical slicing, write tasks with acceptance criteria, add checkpoints, human review) followed by file output locations and overwrite guardrails.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a strict read-only mode during planning ("read only, no code changes") and prevents silent overwriting when `tasks/plan.md` or `tasks/todo.md` contains unfinished tasks.

## Context cost
805 bytes (~201 tokens). Invocations load `planning-and-task-breakdown`.
