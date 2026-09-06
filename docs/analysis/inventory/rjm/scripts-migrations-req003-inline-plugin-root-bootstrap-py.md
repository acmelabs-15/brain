---
package: rjm
path: scripts/migrations/req003_inline_plugin_root_bootstrap.py
type: script
bytes: 5801
unit: inv-rjm-254
in_scope_via: scripts/hook_utilities/bootstrap.py
aliases: []
memo_inputs:
  - {path: scripts/migrations/req003_inline_plugin_root_bootstrap.py, sha256: 4a43689e9d9d33639adc7633b1d2b64661a05d5f7ff3fa1145306f30718612b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/migrations/req003_inline_plugin_root_bootstrap.py

## Purpose — required, verbatim
> "REQ-003: replace `setup_hook_lib_path` call with inline bootstrap." — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6

## Design intent — required
A one-shot migration utility created to restore the inline plugin bootstrap pattern across Python hooks in `.claude/hooks/`. ADR-047 introduced a test (`tests/test_plugin_path_resolution.py`) requiring exact string patterns (`CLAUDE_PLUGIN_ROOT` and `_lib_dir`) in hook sources, which was broken when refactoring extracted hook path resolution to `setup_hook_lib_path` in `bootstrap.py`. This script scans hooks importing `hook_utilities` or `github_core` and replaces the three-line setup helper call with an inline 27-line manifest walk-up bootstrap while preserving hook-specific failure exit codes.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `"--dry-run"` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:115
- Hook scripts in `HOOKS_DIR = REPO_ROOT / ".claude" / "hooks"` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:37

## Outputs — required
- In-place updated hook files: `"migrated"` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:104
- Console migration summary: `"(dry-run: no files modified)"` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:147
- Process exit codes: 0 (all hooks migrated or already-migrated), 1 (migration error on any file), 2 (hooks directory missing) — scripts/migrations/req003_inline_plugin_root_bootstrap.py:127, 153

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `DELETE-AFTER-MERGE` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:2 — defined here
- `REQ-003` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6 — defined here | used here
- `setup_hook_lib_path` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6 — used here
- `ADR-047` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:8 — used here
- `CLAUDE_PLUGIN_ROOT` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:9 — used here
- `hook_utilities` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:11 — used here
- `github_core` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:11 — used here
- `M7-T2` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:11 — used here
- `inline bootstrap` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:16 — defined here | used here
- `M7-T3` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:39 — used here
- `OLD_PATTERN` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:41 — defined here
- `NEW_TEMPLATE` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:53 — defined here
- `ALREADY_MIGRATED_MARKER` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:81 — defined here
- `migrate_file` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:84 — defined here
- `dry_run` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:84 — defined here

## Structure
- Module docstring and migration overview — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6
- Path constants and regex patterns — scripts/migrations/req003_inline_plugin_root_bootstrap.py:36
- File migration handler migrate_file — scripts/migrations/req003_inline_plugin_root_bootstrap.py:84
- CLI argument parser _parse_args — scripts/migrations/req003_inline_plugin_root_bootstrap.py:107
- Directory traversal and runner main — scripts/migrations/req003_inline_plugin_root_bootstrap.py:122

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/migrations/req003_inline_plugin_root_bootstrap.py`
- **language:** Python
- **lines:** 158
- **documented invocation:**
  `python3 scripts/migrations/req003_inline_plugin_root_bootstrap.py` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:25
  `python3 scripts/migrations/req003_inline_plugin_root_bootstrap.py --dry-run` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:26
- **executed:** yes
- **actual command:** `python3 scripts/migrations/req003_inline_plugin_root_bootstrap.py --dry-run`
- **actual stdout:**
```
(dry-run: no files modified)
migrated: 0
already-migrated: 5
  .claude/hooks/PreCompact/invoke_compact_checkpoint.py
  .claude/hooks/PreToolUse/_bootstrap.py
  .claude/hooks/SessionStart/invoke_checkout_freshness_check.py
  .claude/hooks/SessionStart/invoke_context_loader.py
  .claude/hooks/SessionStart/invoke_plugin_hook_drift_check.py
skipped-no-pattern: 0
error: 0
```
- **actual exit code:** 0
- **documented exit codes vs actual:**
  - `return 2` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:127
  - `return 1 if results["error"] else 0` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:153
  - Process exit via `sys.exit(main())` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:157
- **gate check:** Can exit non-zero (exits 1 if any file fails migration, 2 if hooks directory is missing). On default branch with `--dry-run`, exits 0 with 5 hooks already migrated.
- **output match:** Output matches the documented dry-run behavior and reports all 5 shared-lib hooks as already-migrated.

## Defects — required
- orphan — scripts/migrations/req003_inline_plugin_root_bootstrap.py:1 — Standalone migration script not invoked or imported by any in-scope pipeline, agent, or workflow.
- other — scripts/migrations/req003_inline_plugin_root_bootstrap.py:2 — Script is marked DELETE-AFTER-MERGE and is obsolete post-PR-1819 as all production hooks have already migrated to the inline bootstrap.

## Observations
Illustrates the tension between code modularization (extracting common bootstrap logic to `setup_hook_lib_path` in `bootstrap.py`) and static verification tests (ADR-047's regex-based test asserting explicit inline environment checks in hook files).

## Context cost
5801 bytes, 158 lines, standalone execution without library imports. ~1300 tokens.
