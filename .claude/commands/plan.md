---
description: Break work into small verifiable tasks with acceptance criteria and dependency ordering
---

Invoke the brain:planning-and-task-breakdown skill. The stage's standing rules live in that skill: a decision that is the user's goes through the host's user-question tool, one question per call, composed with brain:ask-user-question; domain words come from `GLOSSARY.md` through `docs/agents/domain.md`; the spec and the plan live in this repo.

Find the active spec through `docs/agents/workspace.md`. Read that file to its last line: `paths.specs` names the folder of specs, and "Find the active effort" says which spec is active. When the file is missing, use `docs/specs`, the default, and tell the user once to run setup-brain, which writes it. When no spec exists in the specs folder or in the conversation, stop and tell the user to run `/spec` first. A spec given in the conversation gets its spec folder through planning-and-task-breakdown.

Read the spec folder's `spec.md` and the relevant codebase sections. Then:

1. Enter plan mode — read only, no code changes
2. Identify the dependency graph between components
3. Slice work vertically (one complete path per task, not horizontal layers)
4. Write tasks with acceptance criteria and verification steps
5. Add checkpoints between phases
6. Put the three approval questions to the user through the question tool, one per call: granularity, blocking edges, merge or split. Iterate until approved

Write the plan into the spec folder's `tasks/plan.md` and the task list into its `tasks/todo.md`. `brain new-doc SPEC` wrote both from their templates; keep the templates' format:

- `tasks/plan.md` holds the row table (number, task, type `task` or `checkpoint`, status, blocked by, result), the only status of each task.
- `tasks/plan.md` also holds the Parallel waves section: the lines that `brain plan SPEC-NNN` prints above its `Cap:` line, written again whenever a row, an edge or a block's files change.
- `tasks/todo.md` holds one block per row, under the row's number, with no status line and no dependencies field: the rows that block a task live only in the table.

Then run `brain check`, where `brain` is `bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts"`. No finding may name a file in the spec folder.

If the spec's `tasks/plan.md` already holds task rows, not only the template's placeholder row, stop and ask before writing — never silently overwrite a plan.
