---
package: addy
path: commands/planning.toml
type: command
bytes: 635
unit: inv-addy-11
---

# commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — commands/planning.toml:1

## Design intent — required
Decomposes a technical specification into an actionable implementation plan in Antigravity CLI environments, enforcing read-only plan mode, vertical slicing, dependency ordering, acceptance criteria, verification checkpoints, and human review before writing tasks to `tasks/plan.md` and `tasks/todo.md`.

## Phase — required
`addy:Plan`

## Inputs — required
- Existing spec (`SPEC.md` or equivalent) — commands/planning.toml:6
- Relevant codebase sections — commands/planning.toml:6

## Outputs — required
- `tasks/plan.md` — commands/planning.toml:15
- `tasks/todo.md` — commands/planning.toml:15

## Invokes — required
- skill planning-and-task-breakdown — commands/planning.toml:4

## Invoked by — required
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:11
- script scripts/validate-commands.js — scripts/validate-commands.js:33
- script scripts/validate-commands-test.js — scripts/validate-commands-test.js:66

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — commands/planning.toml:4 — used here
- `SPEC.md` — commands/planning.toml:6 — used here
- `plan mode` — commands/planning.toml:8 — defined here
- `dependency graph` — commands/planning.toml:9 — used here
- `vertical slice` — commands/planning.toml:10 — used here
- `acceptance criteria` — commands/planning.toml:11 — used here
- `verification steps` — commands/planning.toml:11 — used here
- `checkpoints` — commands/planning.toml:12 — used here
- `human review` — commands/planning.toml:13 — used here
- `tasks/plan.md` — commands/planning.toml:15 — defined here
- `tasks/todo.md` — commands/planning.toml:15 — defined here

## Structure
- TOML key: `description` — commands/planning.toml:1
- TOML key: `prompt` — commands/planning.toml:3-16
  - Invocation instruction — commands/planning.toml:4
  - Prerequisites and execution steps 1-6 — commands/planning.toml:6-13
  - Output persistence destination — commands/planning.toml:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · commands/planning.toml:15 · Omits the safety overwrite guard present in `.claude/commands/plan.md:18` ("If tasks/plan.md or tasks/todo.md already exists with unchecked tasks for different work, stop and ask before writing — never silently overwrite an incomplete plan.").
- `cross-file-contradiction` · commands/planning.toml:1 · Command file stem differs from Claude Code counterpart (`plan.md` vs `planning.toml`), bridged by explicit `NAME_MAP` in `scripts/validate-commands.js:38-40` and documented in `docs/antigravity-setup.md:63`.

## Observations
- Matches `.gemini/commands/planning.toml` in content and structure.
- Mandates vertical slicing: "Slice work vertically (one complete path per task, not horizontal layers)" (commands/planning.toml:10).
- Enforces strict read-only execution state: "Enter plan mode — read only, no code changes" (commands/planning.toml:8).

## Context cost
635 bytes (~159 tokens). Transitive cost: loads `skills/planning-and-task-breakdown/SKILL.md` (3,674 bytes, ~918 tokens).
