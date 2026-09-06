---
package: rjm
path: scripts/todo_db.py
type: script
bytes: 5204
unit: inv-rjm-264
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/todo_db.py, sha256: ef061944ff3d1a93e2d48820b932ce15970bc349d05ef9504d1462885a46b615}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/todo_db.py

## Purpose — required, verbatim
> "Safe todo-row management for orchestrated tasks (issue #4379)." — scripts/todo_db.py:1

## Design intent — required
Provides resilient, thread-safe SQLite database operations for managing todo items during orchestrated multi-agent task execution (addressing issue #4379). When subagents or background tasks attempt to update a todo row that has not yet been initialized in the session database, standard SQL updates silently affect zero rows (`changes() = 0`), hiding task completion status. `todo_db.py` resolves this by providing an idempotent `ensure_todo` upsert (`INSERT OR IGNORE`) and an explicit `complete_todo` operation that verifies exactly one row was affected, raising `MissingTodoError` if the row is absent. Without this utility, concurrent agent tasks could lose completion state or fail silently when marking uninitialized tasks complete.

## Phase — required
rjm:build

## Inputs — required
- Subcommand selector (`command` — scripts/todo_db.py:122)
- SQLite database file path (`db_path` — scripts/todo_db.py:125)
- Todo identifier (`todo_id` — scripts/todo_db.py:126)
- Human-readable todo title (`title` — scripts/todo_db.py:127)

## Outputs — required
- SQLite table schema initialization (`todos` — scripts/todo_db.py:35)
- Created or updated todo records in SQLite database (`INSERT OR IGNORE INTO todos` — scripts/todo_db.py:86)
- Completed todo status in SQLite database (`UPDATE todos SET status = 'done'` — scripts/todo_db.py:104)
- CLI status messages to stdout (`created:` / `exists:` / `done:`)
- CLI error messages to stderr (`MissingTodoError`)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `todos` — scripts/todo_db.py:35 — defined here
- `MissingTodoError` — scripts/todo_db.py:46 — defined here
- `ensure_todo` — scripts/todo_db.py:70 — defined here
- `complete_todo` — scripts/todo_db.py:93 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI script and SQLite database manager:
- path: `scripts/todo_db.py`, language: Python, lines: 162
- documented invocation:
  `"uv run --frozen python scripts/todo_db.py ensure <db-path> <todo-id> <title>" — scripts/todo_db.py:19`
  `"uv run --frozen python scripts/todo_db.py complete <db-path> <todo-id>" — scripts/todo_db.py:20`
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/todo_db.py ensure /tmp/test_todo.db test-01 "Test Todo"
  python3 scripts/todo_db.py complete /tmp/test_todo.db test-01
  python3 scripts/todo_db.py complete /tmp/test_todo.db nonexistent-01
  ```
- actual stdout (abridged):
  ```text
  created: test-01
  done: test-01
  error: todo row 'nonexistent-01' not found; run ensure_todo first
  ```
- **actual exit code:** 0 on success; 1 on missing todo row error
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  `"Exit codes: 0 = success, 1 = logic error (missing row), 2 = config error" — scripts/todo_db.py:22`
  Actual exit paths in code:
  - `scripts/todo_db.py:146` — `return 0` on successful `ensure` (inserted or existing)
  - `scripts/todo_db.py:153` — `return 1` on `MissingTodoError` during `complete`
  - `scripts/todo_db.py:155` — `return 0` on successful `complete`
  - `scripts/todo_db.py:157` — `return 2` unreachable fallback / argparse invalid configuration
- for validators/gates: not a validator/gate. Can exit non-zero (exits 1 on missing todo row, exits 2 on invalid CLI arguments).
- does the output match what the documentation claims? yes (creates rows idempotently, marks rows done, and raises clear error on missing rows).

## Defects — required
- orphan · scripts/todo_db.py:17 · CLI usage documented for agents calling from a shell, but not directly invoked by any in-scope command or agent definition.

## Observations
- Leverages SQLite WAL mode (`conn.execute("PRAGMA journal_mode=WAL")` at line 62) and atomic `INSERT OR IGNORE` for thread safety across concurrent agent workers.
- Strictly guards against silent zero-row updates: `complete_todo` checks `cur.rowcount == 0` and raises `MissingTodoError` so callers receive a structured failure instead of an undetected no-op.

## Context cost
5,204 bytes (~1,300 tokens). Uses standard library only.
