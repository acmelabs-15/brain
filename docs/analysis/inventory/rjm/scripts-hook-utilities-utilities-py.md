---
package: rjm
path: scripts/hook_utilities/utilities.py
type: script
bytes: 11379
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/hook_utilities/utilities.py, sha256: c8cf18762a2a055c323142ee77d0eeaeb7f4fe66e8d296787e3e6fdf75661060}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/hook_utilities/utilities.py

## Purpose — required, verbatim
> "Shared utilities for Claude Code hook scripts." — scripts/hook_utilities/utilities.py:1

## Design intent — required
Provides foundational utility routines for Claude Code hook scripts, migrated from PowerShell script `HookUtilities.psm1` (Issue #1053). Implements timezone- and midnight-resilient host session dates (Issue #4779), cross-platform file locking (`fcntl.flock` on POSIX, byte-0 `msvcrt.locking` on Windows) to prevent concurrent write corruptions, directory root detection, git/gh command matchers, session log discovery and parsing, and multi-schema work log coercion.

## Phase — required
cross-phase

## Inputs — required
- Injected current time provider callable (`now: Callable[[], datetime] = datetime.now`).
- Open file objects for mutual-exclusion locking (`f: IO[Any]`).
- Environment variable `CLAUDE_PROJECT_DIR`.
- Command strings for regex pattern matching (`command: str | None`).
- Session directory path (`sessions_dir: str`).
- Target date strings (`date: str | None`, format `YYYY-MM-DD`).
- Heterogeneous session data structures (lists, dict wrappers, strings).

## Outputs — required
- Host-local ISO date strings (`YYYY-MM-DD`).
- Acquired / released file locks on open descriptors.
- Resolved project directory path string.
- Boolean flags indicating matched git/gh command patterns.
- Resolved session log `Path` objects (or `None`).
- Coerced work item lists and formatted human-readable strings.
- Warnings emitted via `warnings.warn`.

## Invokes — required
none

## Invoked by — required
- script utilities — scripts/hook_utilities/guards.py:15
- script utilities — scripts/hook_utilities/__init__.py:13
- script utilities — scripts/validation/git_hook_policy.py:46

## Concepts named — required, verbatim
- `_GIT_COMMIT_PATTERN` — scripts/hook_utilities/utilities.py:21 — defined here
- `_GIT_PUSH_PATTERN` — scripts/hook_utilities/utilities.py:22 — defined here
- `_GH_PR_CREATE_PATTERN` — scripts/hook_utilities/utilities.py:25 — defined here
- `_DATE_FORMAT` — scripts/hook_utilities/utilities.py:26 — defined here
- `_ISO_DATE` — scripts/hook_utilities/utilities.py:27 — defined here
- `host_session_date` — scripts/hook_utilities/utilities.py:30 — defined here
- `recent_host_session_dates` — scripts/hook_utilities/utilities.py:43 — defined here
- `_win_lock_positions` — scripts/hook_utilities/utilities.py:63 — defined here
- `lock_file` — scripts/hook_utilities/utilities.py:68 — defined here
- `unlock_file` — scripts/hook_utilities/utilities.py:77 — defined here
- `get_project_directory` — scripts/hook_utilities/utilities.py:97 — defined here
- `is_git_commit_command` — scripts/hook_utilities/utilities.py:127 — defined here
- `is_git_push_command` — scripts/hook_utilities/utilities.py:134 — defined here
- `is_pr_create_command` — scripts/hook_utilities/utilities.py:141 — defined here
- `get_today_session_log` — scripts/hook_utilities/utilities.py:154 — defined here
- `_newest_by_mtime` — scripts/hook_utilities/utilities.py:188 — defined here
- `get_today_session_logs` — scripts/hook_utilities/utilities.py:212 — defined here
- `get_recent_session_log` — scripts/hook_utilities/utilities.py:231 — defined here
- `coerce_to_list` — scripts/hook_utilities/utilities.py:276 — defined here
- `format_work_item` — scripts/hook_utilities/utilities.py:309 — defined here

## Structure
- `host_session_date` — scripts/hook_utilities/utilities.py:30
- `recent_host_session_dates` — scripts/hook_utilities/utilities.py:43
- `lock_file` — scripts/hook_utilities/utilities.py:68
- `unlock_file` — scripts/hook_utilities/utilities.py:77
- `get_project_directory` — scripts/hook_utilities/utilities.py:97
- `is_git_commit_command` — scripts/hook_utilities/utilities.py:127
- `is_git_push_command` — scripts/hook_utilities/utilities.py:134
- `is_pr_create_command` — scripts/hook_utilities/utilities.py:141
- `get_today_session_log` — scripts/hook_utilities/utilities.py:154
- `_newest_by_mtime` — scripts/hook_utilities/utilities.py:188
- `get_today_session_logs` — scripts/hook_utilities/utilities.py:212
- `get_recent_session_log` — scripts/hook_utilities/utilities.py:231
- `coerce_to_list` — scripts/hook_utilities/utilities.py:276
- `format_work_item` — scripts/hook_utilities/utilities.py:309

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/hook_utilities/utilities.py`, language: Python 3, lines: 329
- documented invocation: none (library utility module)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/utilities.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from scripts.hook_utilities.utilities import host_session_date, is_git_commit_command; print('date:', host_session_date(), 'commit:', is_git_commit_command('git commit -m test'))"`
  abridged stdout: `date: 2026-09-05 commit: True`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code:
  - no `sys.exit` calls; raises `ValueError` on invalid date format string in `get_today_session_log`. Standalone execution exits 0.
- for validators/gates:
  - can it exit non-zero? no direct exit; raises `ValueError` on invalid date format.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Windows append locking flaw resolved: On Windows `msvcrt.locking` locks bytes at current file position; when multiple processes open in append mode, each has a different EOF so position-based locking fails to provide mutual exclusion. `lock_file` always locks byte 0 and restores write offset (lines 58-63).
- Resilient date selection: `recent_host_session_dates` uses a single instant capture to generate `(today, yesterday)` so a midnight rollover between function calls cannot split the date pair (lines 43-55).
- Transient stat resilience: `_newest_by_mtime` skips unreadable session logs with warnings rather than failing the whole lookup (lines 188-210).

## Context cost
11,379 bytes (~2,845 tokens).
