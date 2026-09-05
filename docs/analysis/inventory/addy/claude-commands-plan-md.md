---
package: addy
path: .claude/commands/plan.md
type: command
bytes: 805
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 91d961b2a7011209bc6771c176932e72e11b99d0c524e3f63c9f2e2a94fbc993}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/plan.md

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .claude/commands/plan.md:2

## Design intent — required
Structures the planning phase by entering read-only plan mode, identifying component dependency graphs, slicing work vertically into verifiable units with acceptance criteria and phase checkpoints, and writing the resulting plan to `tasks/plan.md` and `tasks/todo.md`. Guards against overwriting incomplete plans from prior work.

## Phase — required
addy:Plan

## Inputs — required
- Existing specification file `SPEC.md` or equivalent — .claude/commands/plan.md:7
- Relevant codebase sections — .claude/commands/plan.md:7
- Existing plan status in `tasks/plan.md` or `tasks/todo.md` — .claude/commands/plan.md:18

## Outputs — required
- Task plan saved to `tasks/plan.md` — .claude/commands/plan.md:16
- Task list saved to `tasks/todo.md` — .claude/commands/plan.md:16

## Invokes — required
- skill agent-skills:planning-and-task-breakdown — .claude/commands/plan.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
`SPEC.md` — .claude/commands/plan.md:7 — used here
`plan mode` — .claude/commands/plan.md:9 — defined here
`dependency graph` — .claude/commands/plan.md:10 — used here
`acceptance criteria` — .claude/commands/plan.md:12 — used here
`checkpoints` — .claude/commands/plan.md:13 — used here
`tasks/plan.md` — .claude/commands/plan.md:16, 18 — defined here | used here
`tasks/todo.md` — .claude/commands/plan.md:16, 18 — defined here | used here

## Structure
none (flat numbered workflow list)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates vertical slicing (one complete path per task) rather than horizontal architectural layers. Stops and prompts the user before writing if incomplete tasks exist from previous work.

## Context cost
805 bytes, approximately 190 tokens.
