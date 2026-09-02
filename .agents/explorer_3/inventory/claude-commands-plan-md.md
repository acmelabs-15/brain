---
package: addy
path: .claude/commands/plan.md
type: command
bytes: 805
unit: inv-addy-4
---

# .claude/commands/plan.md

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .claude/commands/plan.md:2

## Design intent — required
Provides the task planning command that decomposes a spec in read-only plan mode into vertically sliced, dependency-ordered tasks with acceptance criteria, verification steps, and checkpoints, outputting to `tasks/plan.md` and `tasks/todo.md` while guarding against overwriting existing incomplete plans.

## Phase — required
`addy:Plan`

## Inputs — required
- Spec (`SPEC.md` or equivalent)
- Codebase architecture and files

## Outputs — required
- `tasks/plan.md`
- `tasks/todo.md`

## Invokes — required
- skill planning-and-task-breakdown — .claude/commands/plan.md:5 (named `agent-skills:planning-and-task-breakdown`)

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .claude/commands/plan.md:5 — used here
- `plan mode` — .claude/commands/plan.md:9 — defined here
- `vertical slicing` — .claude/commands/plan.md:11 — used here
- `acceptance criteria` — .claude/commands/plan.md:12 — used here
- `verification steps` — .claude/commands/plan.md:12 — used here
- `checkpoints` — .claude/commands/plan.md:13 — used here
- `tasks/plan.md` — .claude/commands/plan.md:16, 18 — defined here
- `tasks/todo.md` — .claude/commands/plan.md:16, 18 — defined here

## Structure
- `---` (frontmatter: description) — .claude/commands/plan.md:1-3
- Steps 1–6 numbered list — .claude/commands/plan.md:9-14
- Output path specification & overwrite guard — .claude/commands/plan.md:16-18

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — Command naming discrepancy: named `plan.md` (command `/plan`) in `.claude/commands/`, but named `planning.toml` (command `/planning`) in `.gemini/commands/planning.toml` and `commands/planning.toml`. Handled by alias mapping in `scripts/validate-commands.js:33-35`.

## Observations
- Overwrite protection: "If tasks/plan.md or tasks/todo.md already exists with unchecked tasks for different work, stop and ask before writing — never silently overwrite an incomplete plan" (.claude/commands/plan.md:18).

## Context cost
- File size: 805 bytes (~200 tokens).
- Transitive cost when invoked: loads `planning-and-task-breakdown` SKILL.md (10,564 bytes, ~2,640 tokens).
