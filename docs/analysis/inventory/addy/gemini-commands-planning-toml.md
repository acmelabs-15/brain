---
package: addy
path: .gemini/commands/planning.toml
type: command
bytes: 635
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .gemini/commands/planning.toml:1

## Design intent — required
Defines `/planning` command for Gemini CLI to transform specification requirements into small, verifiable, vertically sliced implementation tasks organized in dependency order with explicit acceptance criteria and review checkpoints.

## Phase — required
addy:Plan

## Inputs — required
Existing specification (`SPEC.md` or equivalent) and relevant codebase context (.gemini/commands/planning.toml:6).

## Outputs — required
Implementation plan at `tasks/plan.md` and actionable task list at `tasks/todo.md` (.gemini/commands/planning.toml:15).

## Invokes — required
- skill planning-and-task-breakdown — .gemini/commands/planning.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .gemini/commands/planning.toml:4 — used here
- `plan mode` — .gemini/commands/planning.toml:8 — used here
- `dependency graph` — .gemini/commands/planning.toml:9 — used here
- `Slice work vertically` — .gemini/commands/planning.toml:10 — used here
- `acceptance criteria` — .gemini/commands/planning.toml:11 — used here
- `checkpoints` — .gemini/commands/planning.toml:12 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/planning.toml` (EXACT group 5 in `addy-duplicates.md`, SHA `0be6342ddff35204`).

## Context cost
635 bytes, ~160 tokens.
