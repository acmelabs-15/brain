---
package: rjm
path: scripts/validation/validate_sync_registry.py
type: script
bytes: 8084
unit: inv-rjm-310
in_scope_via: scripts/validation/checks_spec.py
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_sync_registry.py, sha256: 734ce57ac1a577046d451345bd66d40918335da96ccd787a5e70d203acef74e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/validate_sync_registry.py

## Purpose — required, verbatim
> "Assert every shared lib package is registered in the sync registry (Issue #1909)." — scripts/validation/validate_sync_registry.py:2

## Design intent — required
Enforces provenance consistency between shared Python library packages under `scripts/` (`scripts/github_core`, `scripts/hook_utilities`, `scripts/ai_review_common`) and plugin distribution destinations under `.claude/lib/`. By comparing filesystem package directories against `SYNC_PAIRS` defined in `scripts/sync_plugin_lib.py`, it ensures new library packages cannot be introduced without being registered for sync, preventing missing dependency crashes at plugin installation time.

## Phase — required
none

## Inputs — required
- CLI arguments: `--repo-root` (line 184) — scripts/validation/validate_sync_registry.py:184
- Registered `SYNC_PAIRS` imported from `sync_plugin_lib` — scripts/validation/validate_sync_registry.py:20
- Filesystem directories scanned under `SOURCE_ROOTS` — scripts/validation/validate_sync_registry.py:59-63

## Outputs — required
- Standard output: report confirming registration (`[PASS] Every shared lib package is registered in SYNC_PAIRS.`) or listing unregistered packages — scripts/validation/validate_sync_registry.py:205, 216
- Standard error: configuration error message when repo root or sync tool is missing — scripts/validation/validate_sync_registry.py:194, 200
- Exit codes: 0 (registered), 1 (unregistered packages detected), 2 (configuration error) — scripts/validation/validate_sync_registry.py:40-42

## Invokes — required
- script sync_plugin_lib — scripts/validation/validate_sync_registry.py:174

## Invoked by — required
- script checks_spec.py — scripts/validation/checks_spec.py:262

## Concepts named — required, verbatim
- `SYNC_PAIRS` — scripts/validation/validate_sync_registry.py:6 — used here
- `ADR-035` — scripts/validation/validate_sync_registry.py:39 — used here
- `SOURCE_ROOTS` — scripts/validation/validate_sync_registry.py:59 — defined here
- `LIB_ALLOWLIST` — scripts/validation/validate_sync_registry.py:68 — defined here
- `_LIB_DIR_REL` — scripts/validation/validate_sync_registry.py:70 — defined here
- `_is_package_dir` — scripts/validation/validate_sync_registry.py:73 — defined here
- `_sync_sources` — scripts/validation/validate_sync_registry.py:82 — defined here
- `_sync_destinations` — scripts/validation/validate_sync_registry.py:87 — defined here
- `_check_source_roots` — scripts/validation/validate_sync_registry.py:92 — defined here
- `_check_lib_destinations` — scripts/validation/validate_sync_registry.py:127 — defined here
- `find_unregistered` — scripts/validation/validate_sync_registry.py:152 — defined here
- `_load_sync_pairs` — scripts/validation/validate_sync_registry.py:168 — defined here
- `main` — scripts/validation/validate_sync_registry.py:180 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_sync_registry.py`, language: Python, lines: 222
- documented invocation:
  "scripts/validation/validate_sync_registry.py" — scripts/validation/checks_spec.py:262
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/scripts/validation/validate_sync_registry.py --repo-root sources/rjm`
  Abridged stdout: `[PASS] Every shared lib package is registered in SYNC_PAIRS.`
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - every shared lib package is registered (or allowlisted)" — scripts/validation/validate_sync_registry.py:40
  > "1 - one or more package directories are unregistered" — scripts/validation/validate_sync_registry.py:41
  > "2 - config error (e.g. the repo root or sync_plugin_lib is missing)" — scripts/validation/validate_sync_registry.py:42
  Actual exit paths in code:
  `return 0` at line 217 (exits 0 via `sys.exit(main())` at line 221)
  `return 1` at line 214 (exits 1 via `sys.exit(main())` at line 221)
  `return 2` at lines 195, 201 (exits 2 via `sys.exit(main())` at line 221)
- for validators/gates: can it exit non-zero? yes (returns 1 when unregistered packages are found, 2 on configuration error). does it fail on the source repo's own default branch? no (clean exit 0).
- does the output match what the documentation claims? yes (exits 0 with pass message when all packages are registered).

## Defects — required
none

## Observations
Separates pure verification logic (`find_unregistered`) from filesystem and module loading side effects, allowing test coverage without registry mutation.

## Context cost
8084 bytes (~2021 tokens). Loads `scripts/sync_plugin_lib.py`.
