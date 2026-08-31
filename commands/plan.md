---
description: "Break work into small verifiable tasks with acceptance criteria and dependency ordering"
---

Invoke the planning-and-task-breakdown skill.

Read the existing spec (SPEC.md or equivalent) and the relevant codebase sections. Then:

1. Enter plan mode — read only, no code changes
2. Identify the dependency graph between components
3. Slice work vertically (one complete path per task, not horizontal layers)
4. Write tasks with acceptance criteria and verification steps
5. Close each part with a checkpoint and give it a `> Status: planned` line (the session log turns
   those into pointers to the session doing the work)
6. Present the plan for human review

Save the plan where this project keeps plans — the project's own convention always wins. Read
`~/.claude/references/project-docs-conventions.md` first; a repo with a populated `docs/` tree or a
numbered plan series to continue overrides it. `tasks/plan.md` plus `tasks/todo.md` is the fallback
for a repo with no convention, and `/build auto` looks for `tasks/plan.md` — so if you save
elsewhere, say where, and pass that path when invoking build.
