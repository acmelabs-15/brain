---
package: addy
path: .gemini/commands/planning.toml
type: command
bytes: 635
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .gemini/commands/planning.toml:1

## Design intent — required
Invokes the `planning-and-task-breakdown` skill to convert an approved specification (`SPEC.md`) and codebase exploration into a dependency-ordered, vertically sliced task breakdown. The agent enters a read-only plan mode, structures tasks with explicit acceptance criteria and verification steps, places checkpoints between phases, presents the plan for human review, and writes output files to `tasks/plan.md` and `tasks/todo.md`.

## Phase — required
addy:Plan

## Inputs — required
- Specification file `SPEC.md` (or equivalent) — .gemini/commands/planning.toml:6
- Relevant codebase sections — .gemini/commands/planning.toml:6
- Human review feedback — .gemini/commands/planning.toml:13

## Outputs — required
- Generated task plan saved to `tasks/plan.md` — .gemini/commands/planning.toml:15
- Task checklist saved to `tasks/todo.md` — .gemini/commands/planning.toml:15

## Invokes — required
- skill planning-and-task-breakdown — .gemini/commands/planning.toml:4

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .gemini/commands/planning.toml:4 — used here
- `SPEC.md` — .gemini/commands/planning.toml:6 — used here
- `plan mode` — .gemini/commands/planning.toml:8 — defined here
- `dependency graph` — .gemini/commands/planning.toml:9 — used here
- `Slice work vertically` — .gemini/commands/planning.toml:10 — defined here
- `acceptance criteria` — .gemini/commands/planning.toml:11 — used here
- `verification steps` — .gemini/commands/planning.toml:11 — defined here
- `checkpoints` — .gemini/commands/planning.toml:12 — defined here
- `human review` — .gemini/commands/planning.toml:13 — defined here
- `tasks/plan.md` — .gemini/commands/planning.toml:15 — defined here
- `tasks/todo.md` — .gemini/commands/planning.toml:15 — defined here

## Structure
- "Enter plan mode" — .gemini/commands/planning.toml:8
- "Slice work vertically" — .gemini/commands/planning.toml:10
- "Present the plan for human review" — .gemini/commands/planning.toml:13

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `commands/planning.toml` (hash `0be6342ddff35204`, 635 bytes). Mandates vertical slicing ("one complete path per task, not horizontal layers" — line 10) to ensure each task delivers end-to-end verifiable value rather than orphaned architectural layers.

## Context cost
635 bytes (~160 tokens). If invoked skill is loaded: `planning-and-task-breakdown` (14,484 bytes).
