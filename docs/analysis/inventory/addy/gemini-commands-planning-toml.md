---
package: addy
path: .gemini/commands/planning.toml
type: command
bytes: 635
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .gemini/commands/planning.toml:1

## Design intent — required
Gemini/Antigravity slash command configuring task breakdown into vertically sliced, dependency-ordered tasks with acceptance criteria, verification steps, and checkpoints, outputting to `tasks/plan.md` and `tasks/todo.md`.

## Phase — required
addy:PLAN

## Inputs — required
- Spec (`SPEC.md` or equivalent)
- Codebase architecture

## Outputs — required
- `tasks/plan.md`
- `tasks/todo.md`

## Invokes — required
- skill planning-and-task-breakdown — .gemini/commands/planning.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .gemini/commands/planning.toml:4 — used here
- `plan mode` — .gemini/commands/planning.toml:8 — defined here
- `Slice work vertically` — .gemini/commands/planning.toml:10 — defined here
- `acceptance criteria` — .gemini/commands/planning.toml:1,11 — used here
- `verification steps` — .gemini/commands/planning.toml:11 — used here
- `checkpoints` — .gemini/commands/planning.toml:12 — used here
- `tasks/plan.md` — .gemini/commands/planning.toml:15 — defined here
- `tasks/todo.md` — .gemini/commands/planning.toml:15 — defined here

## Structure
- Steps 1–6 numbered list
- Output path save instruction

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `commands/planning.toml`.

## Context cost
635 bytes, ~160 tokens. Transitive cost: loads `planning-and-task-breakdown` (10564 bytes, ~2640 tokens).
