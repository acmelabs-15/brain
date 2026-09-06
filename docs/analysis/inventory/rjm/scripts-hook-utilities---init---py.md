---
package: rjm
path: scripts/hook_utilities/__init__.py
type: script
bytes: 976
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/hook_utilities/__init__.py, sha256: 6da956883f74db3b17a744d1a96adfc5810f5fe26d04265957dd16aed6688967}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/hook_utilities/__init__.py

## Purpose — required, verbatim
> "Hook utilities package for Claude Code hook scripts." — scripts/hook_utilities/__init__.py:1

## Design intent — required
Package initialization module and public entry point for `scripts.hook_utilities`. Consolidates and re-exports core environment checks from `guards.py` and session, command, and concurrency helpers from `utilities.py` to provide a unified import interface for Claude Code hook scripts and repository tools. Serves as the canonical source mirrored to `.claude/lib/hook_utilities/` and `src/copilot-cli/lib/hook_utilities/`.

## Phase — required
cross-phase

## Inputs — required
- Re-exported functions from `scripts.hook_utilities.guards` and `scripts.hook_utilities.utilities`.

## Outputs — required
- Package `__all__` list exporting 13 symbols.

## Invokes — required
- script guards — scripts/hook_utilities/__init__.py:9
- script utilities — scripts/hook_utilities/__init__.py:13

## Invoked by — required
- script hook_utilities — scripts/error_classification.py:169
- script hook_utilities — scripts/update_reviewer_signal_stats.py:395
- doc hook_utilities — CONTRIBUTING.md:628

## Concepts named — required, verbatim
- `is_project_repo` — scripts/hook_utilities/__init__.py:10 — used here
- `skip_if_consumer_repo` — scripts/hook_utilities/__init__.py:11 — used here
- `coerce_to_list` — scripts/hook_utilities/__init__.py:14 — used here
- `format_work_item` — scripts/hook_utilities/__init__.py:15 — used here
- `get_project_directory` — scripts/hook_utilities/__init__.py:16 — used here
- `get_recent_session_log` — scripts/hook_utilities/__init__.py:17 — used here
- `get_today_session_log` — scripts/hook_utilities/__init__.py:18 — used here
- `get_today_session_logs` — scripts/hook_utilities/__init__.py:19 — used here
- `is_git_commit_command` — scripts/hook_utilities/__init__.py:20 — used here
- `is_git_push_command` — scripts/hook_utilities/__init__.py:21 — used here
- `is_pr_create_command` — scripts/hook_utilities/__init__.py:22 — used here
- `lock_file` — scripts/hook_utilities/__init__.py:23 — used here
- `unlock_file` — scripts/hook_utilities/__init__.py:24 — used here

## Structure
none (python package __init__ module; imports and __all__ definition)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/hook_utilities/__init__.py`, language: Python 3, lines: 42
- documented invocation: none (package __init__ module)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/__init__.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "import scripts.hook_utilities as hu; print('exports:', len(hu.__all__))"`
  abridged stdout: `exports: 13`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (`sys.exit` not called; clean package import exits 0)
- for validators/gates:
  - can it exit non-zero? no
  - does it fail on the source repo's own default branch? no, imports cleanly and exits with code 0
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Mirrored library note: Lines 3-4 explicitly record that `.claude/lib/hook_utilities/` is a plugin-distributed copy kept in sync via `python3 scripts/sync_plugin_lib.py`.

## Context cost
976 bytes (~244 tokens). Invokes `guards.py` (7,824 bytes) and `utilities.py` (11,379 bytes) for a total module graph cost of 20,179 bytes (~5,045 tokens).
