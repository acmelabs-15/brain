---
package: addy
path: commands/planning.toml
type: command
bytes: 635
unit: inv-addy-4
aliases:
  - .gemini/commands/planning.toml
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — commands/planning.toml:1

## Design intent — required
Provides a slash command entry point (`/planning`) that invokes the `planning-and-task-breakdown` skill to decompose a specification into small, vertically sliced, verifiable tasks with dependency ordering, acceptance criteria, and human review checkpoints before writing any code. Without this command, developers would need to remember to manually invoke the planning skill and its specific steps after completing a specification.

## Phase — required
addy:Plan

## Inputs — required
- Existing spec: `SPEC.md` or equivalent — commands/planning.toml:6
- Relevant codebase sections — commands/planning.toml:6

## Outputs — required
- Plan document: `tasks/plan.md` — commands/planning.toml:15
- Task list: `tasks/todo.md` — commands/planning.toml:15

## Invokes — required
- skill planning-and-task-breakdown — commands/planning.toml:4

## Invoked by — required
- entry point — invoked by the user or harness as a slash command (`/planning`)

## Concepts named — required, verbatim
- `acceptance criteria` — commands/planning.toml:1, 11 — used here
- `dependency ordering` — commands/planning.toml:1 — used here
- `plan mode` — commands/planning.toml:8 — used here
- `dependency graph` — commands/planning.toml:9 — used here
- `checkpoints` — commands/planning.toml:12 — used here
- `human review` — commands/planning.toml:13 — used here

## Structure
- description — commands/planning.toml:1
- prompt — commands/planning.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical canonical file to `.gemini/commands/planning.toml` (ledger EXACT group 5). Named `/planning` rather than `/plan` in `.gemini/commands/` and `docs/antigravity-setup.md:63` to avoid collision with internal harness plan-generation commands.

## Context cost
635 bytes (approx. 150 tokens) for this command file. When invoked, it loads `skills/planning-and-task-breakdown/SKILL.md` (10,564 bytes), totaling ~11,199 bytes (~2,800 tokens).
