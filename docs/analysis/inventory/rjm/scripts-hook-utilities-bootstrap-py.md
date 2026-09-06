---
package: rjm
path: scripts/hook_utilities/bootstrap.py
type: script
bytes: 3683
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/hook_utilities/bootstrap.py, sha256: f18044a4ab6383dd647b3616bacd01ae96145cf2a0107cb45b212a45a66279cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/hook_utilities/bootstrap.py

## Purpose — required, verbatim
> "Bootstrap helper for Claude Code hook scripts." — scripts/hook_utilities/bootstrap.py:1

## Design intent — required
Provides library path resolution and automatic injection into `sys.path` for Claude Code hook scripts, locating the plugin's `lib/` directory via `CLAUDE_PLUGIN_ROOT` or by walking directory ancestors for `.claude-plugin/plugin.json`. Crucially documents and preserves the architectural constraint from ADR-047 and Issue #2898: it must NOT be used to replace the literal inline bootstrap blocks in `.claude/hooks/` or ADR-047 governed skills, which are strictly required by regression tests.

## Phase — required
cross-phase

## Inputs — required
- Path to calling hook script (`hook_file: str | Path | None`, falling back to caller stack frame inspection via `inspect.currentframe()`).
- Failure exit code (`fail_exit_code: int = 2`).
- Environment variable `CLAUDE_PLUGIN_ROOT`.
- Filesystem anchor file `.claude-plugin/plugin.json`.

## Outputs — required
- Resolved absolute path string to plugin's `lib/` directory.
- Mutation of `sys.path` (prepends `lib_dir`).
- Error message printed to `sys.stderr` when lib directory cannot be found.
- Process termination via `sys.exit(fail_exit_code)` on failure.

## Invokes — required
none

## Invoked by — required
- script bootstrap — scripts/hook_utilities/utilities.py:5
- script bootstrap — scripts/sync_plugin_lib.py:42

## Concepts named — required, verbatim
- `setup_hook_lib_path` — scripts/hook_utilities/bootstrap.py:3 — defined here
- `ADR-047` — scripts/hook_utilities/bootstrap.py:8 — used here
- `CLAUDE_PLUGIN_ROOT` — scripts/hook_utilities/bootstrap.py:9 — used here
- `ADR-068` — scripts/hook_utilities/bootstrap.py:12 — used here
- `resolve_plugin_lib_dir` — scripts/hook_utilities/bootstrap.py:24 — defined here
- `plugin.json` — scripts/hook_utilities/bootstrap.py:40 — used here

## Structure
- `resolve_plugin_lib_dir` — scripts/hook_utilities/bootstrap.py:36
- `setup_hook_lib_path` — scripts/hook_utilities/bootstrap.py:72

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/hook_utilities/bootstrap.py`, language: Python 3, lines: 101
- documented invocation: none (bootstrap library helper)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/bootstrap.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from scripts.hook_utilities.bootstrap import resolve_plugin_lib_dir; print('resolved:', resolve_plugin_lib_dir())"`
  abridged stdout: `resolved: None`
  **actual exit code:** 0
- documented exit codes:
  `"fail_exit_code: Exit code to use if lib not found. Use 2 for blocking hooks, 0 for non-blocking hooks." — scripts/hook_utilities/bootstrap.py:80-81`
  vs. actual exit paths in code:
  - line 97: `sys.exit(fail_exit_code)` when lib directory is not found or is not a directory. Standalone module execution exits 0.
- for validators/gates:
  - can it exit non-zero? yes, `setup_hook_lib_path` exits with `fail_exit_code` (default 2) if `lib_dir` is None or `not os.path.isdir(lib_dir)`.
  - does it fail on the source repo's own default branch? no, module imports and executes cleanly with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Architectural compliance warning: Lines 7-16 provide explicit warnings forbidding the migration of inline bootstrap code in `.claude/hooks/` to this helper, citing `tests/test_plugin_path_resolution.py` grep assertions and the existence of `scripts/migrations/req003_inline_plugin_root_bootstrap.py`.
- Stack introspection: When `hook_file` is not passed to `resolve_plugin_lib_dir`, lines 54-59 inspect the caller's stack frame via `inspect.currentframe().f_back.f_globals.get("__file__")`.

## Context cost
3,683 bytes (~920 tokens).
