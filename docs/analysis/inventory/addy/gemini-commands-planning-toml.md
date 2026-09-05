---
package: addy
path: .gemini/commands/planning.toml
type: command
bytes: 635
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .gemini/commands/planning.toml:1

## Design intent — required
Structures the decomposition of specifications into dependency-ordered, vertically sliced tasks with concrete acceptance criteria and progress checkpoints before implementation begins.

## Phase — required
addy:plan

## Inputs — required
Existing specification (`SPEC.md` or equivalent) (.gemini/commands/planning.toml:6) and codebase context (.gemini/commands/planning.toml:6).

## Outputs — required
`tasks/plan.md` (.gemini/commands/planning.toml:15) and `tasks/todo.md` (.gemini/commands/planning.toml:15).

## Invokes — required
- skill planning-and-task-breakdown — .gemini/commands/planning.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `SPEC.md` — .gemini/commands/planning.toml:6 — used here
- `plan mode` — .gemini/commands/planning.toml:8 — used here
- `acceptance criteria` — .gemini/commands/planning.toml:11 — used here
- `tasks/plan.md` — .gemini/commands/planning.toml:15 — used here
- `tasks/todo.md` — .gemini/commands/planning.toml:15 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/planning.toml` (canonical member of EXACT group 5 in `docs/analysis/manifest/addy-duplicates.md`). Enforces read-only plan mode during task breakdown.

## Context cost
635 bytes, ~160 tokens.
