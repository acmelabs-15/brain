#!/usr/bin/env bash
# A brain repo mid-build: setup-brain's workspace.md and one spec folder, SPEC-001, whose plan
# holds two open task rows and whose todo holds one block per row. No old-layout file.
set -euo pipefail
git init -q .
git config user.email eval@example.com
git config user.name eval
mkdir -p docs/agents docs/specs/SPEC-001-greeter/tasks
cat > docs/agents/workspace.md <<'BRAIN_WORKSPACE_MD'
---
layout: 2
paths:
  decisions: docs/decisions
  research: docs/research
  ideas: docs/ideas
  specs: docs/specs
max_parallel: 8
---
# Workspace

The workspace is this repo's folders for ideas, decisions, research and specs, with the naming rules they follow. setup-brain writes this file, and every brain skill reads the layout from it.

- `layout` is the version of the layout. setup-brain's re-run and `--check` read it.
- `paths` names each folder. Skills and `brain` read every folder from here, so a folder moves with a change to this file only.
- `max_parallel` is the most sub-agents that run at once: tasks in a build, or research rows in an interview. It is 8 when absent, and the `BRAIN_MAX_PARALLEL` environment variable overrides it.

## `brain <cmd>`

`brain <cmd>` means running `scripts/brain.ts` from the brain plugin with bun. Find the path this way:

- On Claude Code, the session-start report names it, and every brain skill writes it in full. Bash commands do not get `CLAUDE_PLUGIN_ROOT`, so never type that variable into a command.
- A sub-agent gets the path in its brief.
- On another host, resolve the plugin folder as setup-brain does.

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

An effort is the idea or spec that a session works on. The active effort is the one that is not finished: an idea with `status: define`, or a spec whose `tasks/plan.md` has a row that is `open` or `in-progress`. An idea with `status: specced` or `done` is finished, and a `parked` idea waits until the user names it. Take the first that applies:

1. A slug passed to the command.
2. The git branch name, if it matches an idea or spec.
3. The only idea or spec that is not finished.
4. Otherwise, ask the user.

## Resume

- An idea: compute the frontier of its map, and take the next row. The frontier is every `open` row whose `Blocked by` rows are all `resolved`.
- A spec: take the next row on the frontier of `tasks/plan.md`. Its block in `tasks/todo.md` holds the detail.
- An idea with `status: specced` is finished. Resume the spec that lists it in `sources:`.
- An idea with `status: done` is finished with no spec. Its `result:` names what it produced: a `DEC-NNN` for a decision, or a commit SHA for a change made in place.

## Sub-agents

A sub-agent writes its result to a file named after its task or record, the ID first: `T10-result.md`, `RES-032-<slug>.md`. A sub-agent's file name never starts with report, summary, findings or analysis: Claude Code refuses a sub-agent's write to such a `.md` file.
BRAIN_WORKSPACE_MD
cat > docs/specs/SPEC-001-greeter/spec.md <<'SPEC'
---
spec: SPEC-001
sources: []
---
# SPEC-001: Greeter

## Objective
A module that greets by name. `greet("Ann")` returns `"Hello, Ann"`; `shout("Ann")` returns `"HELLO, ANN"`.

## Commands
Test: `bun test`

## Testing Strategy
`bun:test`, with the tests in `src/__tests__/`.
SPEC
cat > docs/specs/SPEC-001-greeter/tasks/plan.md <<'PLAN'
---
spec: SPEC-001
---
# SPEC-001 plan: Greeter

## Overview
Two tasks, in order: `greet`, then `shout` on top of it.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Greet by name | task | open | — | — |
| 02 | Shout a greeting | task | open | 01 | — |
PLAN
cat > docs/specs/SPEC-001-greeter/tasks/todo.md <<'TODO'
---
spec: SPEC-001
---
# SPEC-001 todo: Greeter

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Greet by name

**Description:** `greet(name)` returns a greeting for one name.

**Acceptance criteria:**
- [ ] `greet("Ann")` returns `"Hello, Ann"`

**Verification:**
- [ ] `bun test src/__tests__/greet.test.ts` passes

**Files likely touched:**
- `src/greet.ts`
- `src/__tests__/greet.test.ts`

**Scope:** XS

## Task 02: Shout a greeting

**Description:** `shout(name)` returns the greeting of `greet` in capitals.

**Acceptance criteria:**
- [ ] `shout("Ann")` returns `"HELLO, ANN"`, built on `greet`

**Verification:**
- [ ] `bun test src/__tests__/shout.test.ts` passes

**Files likely touched:**
- `src/shout.ts`
- `src/__tests__/shout.test.ts`

**Scope:** XS
TODO
printf '{ "name": "greeter", "type": "module" }\n' > package.json
git add -A && git commit -qm "scaffold"
