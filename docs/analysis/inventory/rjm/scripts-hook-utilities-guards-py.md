---
package: rjm
path: scripts/hook_utilities/guards.py
type: script
bytes: 7824
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/hook_utilities/guards.py, sha256: 9e1ceb95f567fff54f584d47b1e0cf9691eaa40ae85f38b0a1284bd07e6cdfb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/hook_utilities/guards.py

## Purpose — required, verbatim
> "Plugin-mode guards for hook scripts." — scripts/hook_utilities/guards.py:1

## Design intent — required
Enforces repository boundary guards ensuring internal development hooks (such as LSP-first, skill-first, and session protocol guards) execute exclusively within the `ai-agents` project repository and skip execution when running in consumer repositories vendoring the plugin. Derives authoritative repository identity from the git `origin` remote URL rather than incidental on-disk directories (Issue #2610). Implements a strict 1-second subprocess timeout to prevent hook hangs and host SIGKILL termination, corroborates identity via `pyproject.toml`'s `[project].name` when git origin is unavailable, and emits structured telemetry skip events on stderr when falling open.

## Phase — required
cross-phase

## Inputs — required
- Git remote origin URL from `git -C <project_root> remote get-url origin`.
- Environment variable `AI_AGENTS_PROJECT_REPO` ("1" or "0" override).
- Root directory path from `get_project_directory()`.
- `pyproject.toml` configuration parsed via `tomllib` (Python 3.11+).
- Hook name string (`hook_name: str`).

## Outputs — required
- Boolean repository status (`True` or `False`) from `is_project_repo` and `skip_if_consumer_repo`.
- Structured `EVENT={"guard": ..., "code": ..., "outcome": "fail_open", ...}` lines printed to `sys.stderr`.
- Skip notice strings printed to `sys.stderr`.

## Invokes — required
- script utilities — scripts/hook_utilities/guards.py:15
- command git — scripts/hook_utilities/guards.py:48

## Invoked by — required
- script guards — scripts/hook_utilities/__init__.py:9

## Concepts named — required, verbatim
- `_PROJECT_REPO_NAME` — scripts/hook_utilities/guards.py:23 — defined here
- `_PROJECT_REPO_ENV` — scripts/hook_utilities/guards.py:28 — defined here
- `RepoIdentity` — scripts/hook_utilities/guards.py:32 — defined here
- `_remote_repo_name` — scripts/hook_utilities/guards.py:36 — defined here
- `_project_repo_identity` — scripts/hook_utilities/guards.py:79 — defined here
- `is_project_repo` — scripts/hook_utilities/guards.py:99 — defined here
- `_project_repo_corroborated` — scripts/hook_utilities/guards.py:110 — defined here
- `_emit_skip_event` — scripts/hook_utilities/guards.py:135 — defined here
- `skip_if_consumer_repo` — scripts/hook_utilities/guards.py:162 — defined here

## Structure
- `_remote_repo_name` — scripts/hook_utilities/guards.py:36
- `_project_repo_identity` — scripts/hook_utilities/guards.py:79
- `is_project_repo` — scripts/hook_utilities/guards.py:99
- `_project_repo_corroborated` — scripts/hook_utilities/guards.py:110
- `_emit_skip_event` — scripts/hook_utilities/guards.py:135
- `skip_if_consumer_repo` — scripts/hook_utilities/guards.py:162

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/hook_utilities/guards.py`, language: Python 3, lines: 191
- documented invocation: none (library guard module consumed by hook scripts)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/guards.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from scripts.hook_utilities.guards import is_project_repo, skip_if_consumer_repo; print('is_project:', is_project_repo())"`
  abridged stdout: `is_project: False`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code:
  - no `sys.exit` calls; functions return boolean values (`True`/`False`). Standalone module execution exits 0.
- for validators/gates:
  - can it exit non-zero? no direct exit; `skip_if_consumer_repo` returns True to cause callers to return early/skip.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Subprocess timeout budget: `_remote_repo_name` sets a strict 1-second timeout on `git remote get-url origin` to prevent host SIGKILL termination under the tightest 2-second hook timeout budget (lines 52-63).
- Dual-signal identification: If git origin resolution fails, `_project_repo_corroborated` inspects `pyproject.toml`'s `[project].name` as a secondary fallback before concluding the repository is unknown (lines 110-133).
- Telemetry observability: `_emit_skip_event` prints JSON structured `EVENT=...` messages to stderr when unknown repository identity causes a fail-open skip (lines 135-160).

## Context cost
7,824 bytes (~1,956 tokens). Invokes `scripts/hook_utilities/utilities.py` (11,379 bytes) for a total module graph cost of 19,203 bytes (~4,800 tokens).
