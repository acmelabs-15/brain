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
verified: 2026-09-05 quote-check+coverage
---

# scripts/migrations/req003_inline_plugin_root_bootstrap.py

## Purpose — required, verbatim
> "REQ-003: replace `setup_hook_lib_path` call with inline bootstrap." — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6

## Design intent — required
Automates one-shot remediation of Claude Code hooks that were refactored to use `setup_hook_lib_path` in `bootstrap.py`. Because the ADR-047 regression tests enforce literal string patterns (`CLAUDE_PLUGIN_ROOT` and `os.path.isdir(_lib_dir)`) via grep checks across hook files, extracting bootstrap logic into an external function caused the tests to fail. This script restores the sanctioned inline walk-up bootstrap pattern across all hook files while remaining idempotent and supporting safe dry-run inspection.

## Phase — required
rjm:ship

## Inputs — required
- CLI flag `--dry-run`: "Print planned changes without writing to disk." — scripts/migrations/req003_inline_plugin_root_bootstrap.py:117
- Python hook files in `.claude/hooks/` importing from `hook_utilities` or `github_core` (scripts/migrations/req003_inline_plugin_root_bootstrap.py:37, 141)

## Outputs — required
- Modified Python hook files in `.claude/hooks/` with restored inline bootstrap template (scripts/migrations/req003_inline_plugin_root_bootstrap.py:98-103)
- Summary report printed to stdout listing migrated, already-migrated, skipped-no-pattern, and error counts and paths (scripts/migrations/req003_inline_plugin_root_bootstrap.py:148-152)
- Exit code 0 (success/all clean) or 1 (migration error) or 2 (missing hooks directory) (scripts/migrations/req003_inline_plugin_root_bootstrap.py:127, 153)

## Invokes — required
none

## Invoked by — required
- tests/test_req003_migration.py:16 (test suite) — tests/test_req003_migration.py:16

## Concepts named — required, verbatim
- `REQ-003` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6 — used here
- `setup_hook_lib_path` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:6 — used here
- `ADR-047` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:8 — used here
- `M7-T2` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:11 — used here
- `CLAUDE_PLUGIN_ROOT` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:19 — used here
- `REPO_ROOT` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:36 — defined here
- `HOOKS_DIR` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:37 — defined here
- `OLD_PATTERN` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:41 — defined here
- `NEW_TEMPLATE` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:53 — defined here
- `ALREADY_MIGRATED_MARKER` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:81 — defined here
- `migrate_file` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:84 — defined here
- `_parse_args` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:107 — defined here
- `main` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:122 — defined here

## Structure
- Deprecation header and docstring — scripts/migrations/req003_inline_plugin_root_bootstrap.py:1
- Imports and directory path constants — scripts/migrations/req003_inline_plugin_root_bootstrap.py:29
- Regex pattern and replacement template definitions — scripts/migrations/req003_inline_plugin_root_bootstrap.py:39
- Migration function per file — scripts/migrations/req003_inline_plugin_root_bootstrap.py:84
- CLI argument parsing — scripts/migrations/req003_inline_plugin_root_bootstrap.py:107
- Main execution and directory traversal — scripts/migrations/req003_inline_plugin_root_bootstrap.py:122

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/migrations/req003_inline_plugin_root_bootstrap.py`
- **language:** Python (python3)
- **lines:** 158
- **documented invocation:**
  - `python3 scripts/migrations/req003_inline_plugin_root_bootstrap.py` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:25
  - `python3 scripts/migrations/req003_inline_plugin_root_bootstrap.py --dry-run` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:26
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py --dry-run`
- **abridged stdout:**
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
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual exit paths:
    - `return 2` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:127
    - `return 1 if results["error"] else 0` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:153
    - `sys.exit(main())` — scripts/migrations/req003_inline_plugin_root_bootstrap.py:157
- **for validators/gates:**
  - Can exit non-zero: Exits 2 if `.claude/hooks` directory is missing; exits 1 if any file migration fails with an error.
  - Verified on repository default branch: Exits 0 on repository default branch with 5 hooks verified as already migrated.
- **does the output match what the documentation claims:** yes, successfully detects already-migrated files and skips modifications under `--dry-run`.

## Defects — required
none

## Observations
- Marked `# DELETE-AFTER-MERGE: This script is one-shot. It is idempotent on re-run` at line 2.
- Illustrates tension between DRY code refactoring and AST/grep-based architectural test enforcement (ADR-047).

## Context cost
5801 bytes, 158 lines, ~1200 tokens.
