---
package: rjm
path: scripts/validation/validate_sync_registry.py
type: script
bytes: 8084
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_sync_registry.py, sha256: 734ce57ac1a577046d451345bd66d40918335da96ccd787a5e70d203acef74e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_sync_registry.py

## Purpose — required, verbatim
> "Assert every shared lib package is registered in the sync registry (Issue #1909)." — scripts/validation/validate_sync_registry.py:2

## Design intent — required
Closes a distribution provenance gap where newly added shared Python library packages under `scripts/` (`scripts/github_core`, `scripts/hook_utilities`, `scripts/ai_review_common`) could be omitted from `scripts/sync_plugin_lib.py:SYNC_PAIRS`, leading to missing library shims in `.claude/lib/` and causing runtime import crashes at plugin install time. By importing `SYNC_PAIRS` as the single source of truth, it acts as a read-only provenance gate ensuring that every shared source package directory (and sub-package) has a registered sync source and every distribution directory under `.claude/lib/` has a registered destination or explicit entry in `LIB_ALLOWLIST`.

## Phase — required
rjm:test

## Inputs — required
- CLI argument `--repo-root` (default: repository root resolving up from script) (scripts/validation/validate_sync_registry.py:184-189).
- Shared library sync registry `SYNC_PAIRS` imported dynamically from `scripts/sync_plugin_lib.py` (scripts/validation/validate_sync_registry.py:20, 174-177).
- Filesystem directories with `__init__.py` under `SOURCE_ROOTS` (`scripts/github_core`, `scripts/hook_utilities`, `scripts/ai_review_common`) and `.claude/lib` (scripts/validation/validate_sync_registry.py:59-63, 70, 79).

## Outputs — required
- Standard output: `[PASS] Every shared lib package is registered in SYNC_PAIRS.` or `[FAIL] Unregistered shared lib packages detected (Issue #1909):` followed by offending package paths and registration instructions (scripts/validation/validate_sync_registry.py:204-213, 216).
- Standard error: `[CONFIG] repo root not found: <path>` or `[CONFIG] cannot import sync_plugin_lib: <exc>` (scripts/validation/validate_sync_registry.py:194, 200).
- Exit codes: 0 on success, 1 on unregistered packages, 2 on configuration error (scripts/validation/validate_sync_registry.py:40-42).

## Invokes — required
- script sync_plugin_lib — scripts/validation/validate_sync_registry.py:174

## Invoked by — required
- script validate_sync_registry — scripts/validation/checks_spec.py:253
- script validate_sync_registry — scripts/validation/checks_spec.py:262
- script validate_sync_registry — scripts/validation/pre_pr_sequence.py:89
- script validate_sync_registry — scripts/validation/pre_pr_sequence.py:326
- script validate_sync_registry — scripts/validation/pre_pr.py:124

## Concepts named — required, verbatim
- `SYNC_PAIRS` — scripts/validation/validate_sync_registry.py:6 — used here
- `LIB_ALLOWLIST` — scripts/validation/validate_sync_registry.py:18 — defined here
- `ADR-035` — scripts/validation/validate_sync_registry.py:39 — used here
- `SOURCE_ROOTS` — scripts/validation/validate_sync_registry.py:59 — defined here

## Structure
- `_is_package_dir` — scripts/validation/validate_sync_registry.py:73
- `_sync_sources` — scripts/validation/validate_sync_registry.py:82
- `_sync_destinations` — scripts/validation/validate_sync_registry.py:87
- `_check_source_roots` — scripts/validation/validate_sync_registry.py:92
- `_check_lib_destinations` — scripts/validation/validate_sync_registry.py:127
- `find_unregistered` — scripts/validation/validate_sync_registry.py:152
- `_load_sync_pairs` — scripts/validation/validate_sync_registry.py:168
- `main` — scripts/validation/validate_sync_registry.py:180

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_sync_registry.py`, language: Python 3, lines: 222
- documented invocation:
  - "scripts/validation/validate_sync_registry.py" — scripts/validation/checks_spec.py:262
- **executed:** yes
- actual command run: `python3 scripts/validation/validate_sync_registry.py`, abridged stdout: `[PASS] Every shared lib package is registered in SYNC_PAIRS.`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    `0 - every shared lib package is registered (or allowlisted)` — scripts/validation/validate_sync_registry.py:40
    `1 - one or more package directories are unregistered` — scripts/validation/validate_sync_registry.py:41
    `2 - config error (e.g. the repo root or sync_plugin_lib is missing)` — scripts/validation/validate_sync_registry.py:42
  - actual exit paths:
    `return 2` — scripts/validation/validate_sync_registry.py:195
    `return 2` — scripts/validation/validate_sync_registry.py:201
    `return 1` — scripts/validation/validate_sync_registry.py:214
    `return 0` — scripts/validation/validate_sync_registry.py:217
    `sys.exit(main())` — scripts/validation/validate_sync_registry.py:221
- for validators/gates: can exit non-zero (exits 1 on unregistered packages, 2 on config error); exits 0 on current repository default branch.
- does output match documentation: yes

## Defects — required
none

## Observations
Directly imports `SYNC_PAIRS` from `sync_plugin_lib` rather than parsing or re-declaring the list, guaranteeing zero drift between synchronization and validation. Exposes `find_unregistered` as a pure function accepting arbitrary directory paths and pair lists for unit testability without repository coupling.

## Context cost
8084 bytes (~2020 tokens). Imports `scripts/sync_plugin_lib.py` (5204 bytes), total reachable size ~13.3KB (~3.3k tokens).
