---
package: addy
path: .claude/commands/plan.md
type: command
bytes: 805
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 91d961b2a7011209bc6771c176932e72e11b99d0c524e3f63c9f2e2a94fbc993}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/plan.md

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .claude/commands/plan.md:2

## Design intent — required
Provides the task planning command that decomposes a spec in read-only plan mode into vertically sliced, dependency-ordered tasks with acceptance criteria, verification steps, and checkpoints, outputting to `tasks/plan.md` and `tasks/todo.md` while guarding against overwriting existing incomplete plans.

## Phase — required
addy:PLAN

## Inputs — required
- Spec (`SPEC.md` or equivalent)
- Codebase architecture and files

## Outputs — required
- `tasks/plan.md`
- `tasks/todo.md`

## Invokes — required
- skill planning-and-task-breakdown — .claude/commands/plan.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .claude/commands/plan.md:5 — used here
- `plan mode` — .claude/commands/plan.md:9 — defined here
- `Slice work vertically` — .claude/commands/plan.md:11 — defined here
- `acceptance criteria` — .claude/commands/plan.md:2,12 — used here
- `verification steps` — .claude/commands/plan.md:12 — used here
- `checkpoints` — .claude/commands/plan.md:13 — used here
- `tasks/plan.md` — .claude/commands/plan.md:16,18 — defined here
- `tasks/todo.md` — .claude/commands/plan.md:16,18 — defined here

## Structure
- Steps 1–6 numbered list
- Output path specification and overwrite guard

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/commands/plan.md:1 · Command naming discrepancy: named `plan.md` (command `/plan`) in `.claude/commands/`, but named `planning.toml` (command `/planning`) in `.gemini/commands/planning.toml` and `commands/planning.toml`. Handled by alias mapping in `scripts/validate-commands.js:33-35`.

## Observations
Overwrite protection: "If tasks/plan.md or tasks/todo.md already exists with unchecked tasks for different work, stop and ask before writing — never silently overwrite an incomplete plan" (.claude/commands/plan.md:18).

## Context cost
805 bytes, ~200 tokens. Transitive cost: loads `planning-and-task-breakdown` (10564 bytes, ~2640 tokens).
