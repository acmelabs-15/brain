---
layout: 2
paths:
  decisions: docs/decisions
  research: docs/research
  ideas: docs/ideas
  specs: docs/specs
---
# Workspace

The workspace is this repo's folders for ideas, decisions, research and specs, with the naming rules they follow. setup-brain writes this file, and every brain skill reads the layout from it.

- `layout` is the version of the layout. setup-brain's re-run and `--check` read it.
- `paths` names each folder. Skills and `brain` read every folder from here, so a folder moves with a change to this file only.

## `brain <cmd>`

`brain <cmd>` means running `scripts/brain.ts` from the brain plugin with bun; on Claude Code that is `${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts`, elsewhere resolve the plugin folder as setup-brain does.

## Files

| Type | Folder | Name |
|---|---|---|
| Idea: intent, destination and map | `paths.ideas` | `IDEA-NNN-<slug>.md` |
| Decision record: one decision the user made | `paths.decisions` | `DEC-NNN-<slug>.md` |
| Research record: the findings for one research or do row | `paths.research` | `RES-NNN-<slug>.md` |
| Spec, with its plan and task blocks | `paths.specs` | `SPEC-NNN-<slug>/` holding `spec.md`, `tasks/plan.md` and `tasks/todo.md` |

- Every numbered file (IDEA, SPEC, DEC, RES) is created only through `brain new-doc`. Run `brain new-doc <TYPE> <slug>`: it claims the next free number, writes the file from its template and prints the path. Its claim gives each number to one agent only, which a file written by hand cannot do.
- `NNN` is three digits, global to the repo and never reused; gaps are allowed. Rows in a map or a plan have two-digit numbers local to their file. Cite a row as `IDEA-004#03`.
- Every H1 opens with an ID: a numbered file with its own (`# DEC-031: <title>`), a file in a spec folder with its spec's (`# SPEC-012 plan: <title>`). `spec.md`, `tasks/plan.md` and `tasks/todo.md` also carry `spec: SPEC-012` in their frontmatter.
- A spec lists the ideas, decisions and research it comes from in its `sources:` frontmatter. Links run one way: an idea holds no list of its specs.
- A resolved map row links to the DEC or RES file that resolved it. The map stays an index, and the detail lives in that file.
- `brain check` reports every file that breaks these rules.

## Find the active effort

An effort is the idea or spec that a session works on. The active effort is the one that is not finished: an idea with `status: define`, or a spec whose `tasks/plan.md` has a row that is `open` or `in-progress`. Take the first that applies:

1. A slug passed to the command.
2. The git branch name, if it matches an idea or spec.
3. The only idea or spec that is not finished.
4. Otherwise, ask the user.

## Resume

- An idea: compute the frontier of its map, and take the next row. The frontier is every `open` row whose `Blocked by` rows are all `resolved`.
- A spec: take the next row on the frontier of `tasks/plan.md`. Its block in `tasks/todo.md` holds the detail.
- An idea with `status: specced` is done. Resume the spec that lists it in `sources:`.

## Sub-agents

A sub-agent writes its result to a file named after its task or record, the ID first: `T10-result.md`, `RES-032-<slug>.md`. A sub-agent's file name never starts with report, summary, findings or analysis: Claude Code refuses a sub-agent's write to such a `.md` file.
