---
description: "Rehydrate from a plan or write one: `/brain:plan PLAN-NNN` reads the docs system down from the plan, names the part in progress, its next task and the session serving it, and posts the brief; `/brain:plan <description>` (or an id with no file) writes a new plan with acceptance criteria and dependency order."
argument-hint: "[PLAN-NNN | description]"
---

Invoke the `planning-and-task-breakdown` skill (`brain:planning-and-task-breakdown`).

Typed after the command: `$ARGUMENTS`

Which of the skill's two procedures runs is decided by the arguments, as the skill's § Continuing
a plan, Step 1 says:

- a `PLAN-NNN` whose file exists under `docs/plan/` → **Continuing a plan**, its eight steps to the
  brief, which is the entire reply;
- a `PLAN-NNN` with no file, or a description → **The Planning Process** (read only, no code):
  the dependency graph, vertical slices, tasks with acceptance criteria and verification, a
  checkpoint and a `> Status: planned` line per part, the plan presented for review;
- nothing → the sessions index decides, per Step 1.

Save a new plan where this project keeps plans — the project's own convention always wins. Read
`references/project-docs-conventions.md` first; a repo with a populated `docs/` tree or a numbered
plan series to continue overrides it. `tasks/plan.md` plus `tasks/todo.md` is the fallback for a
repo with no convention, and `/brain:build auto` looks for `tasks/plan.md` — so if you save
elsewhere, say where, and pass that path when invoking build.
