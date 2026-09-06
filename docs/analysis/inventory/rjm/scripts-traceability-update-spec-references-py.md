---
package: rjm
path: scripts/traceability/update_spec_references.py
type: script
bytes: 6526
unit: inv-rjm-265
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/update_spec_references.py, sha256: c247562ca5f32a067a056a068c18179a30a0a23790cd0b64efd0ff0273ae7282}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/update_spec_references.py

## Purpose — required, verbatim
> "Bulk update spec references in the traceability graph." — scripts/traceability/update_spec_references.py:2

## Design intent — required
Provides an atomic, transactional CLI utility to modify relationship links in specification YAML frontmatter. It supports adding, removing, or replacing referenced specification IDs within a target specification's `related` block, creating a temporary backup file (`.bak`) before modification, rolling back changes if an error occurs, prompting for user confirmation unless forced, and evicting the traceability cache upon success. Without it, developers and agents would have to manually edit multi-line YAML frontmatter blocks, risking syntax corruption, broken indentation, and stale cache entries across the specification graph.

## Phase — required
cross-phase

## Inputs — required
- CLI option `--source-id` (required, specification ID to update) — scripts/traceability/update_spec_references.py:78
- Mutually exclusive update operations:
  - `--add` (specification IDs to append) — scripts/traceability/update_spec_references.py:80
  - `--remove` (specification IDs to delete) — scripts/traceability/update_spec_references.py:81
  - `--replace` (OLD and NEW specification IDs) — scripts/traceability/update_spec_references.py:85
- CLI option `--specs-path` (default `".agents/specs"`) — scripts/traceability/update_spec_references.py:90
- CLI option `--dry-run` (show plan without applying changes) — scripts/traceability/update_spec_references.py:91
- CLI option `--force` (skip confirmation prompt) — scripts/traceability/update_spec_references.py:92
- User input confirmation prompt (`Proceed with update? (y/N) `) when `--force` and `--dry-run` are omitted — scripts/traceability/update_spec_references.py:176
- Target specification file located on disk

## Outputs — required
- Modified specification file with rewritten YAML `related:` block — scripts/traceability/update_spec_references.py:67
- Temporary backup file (`.bak`) created during file writing — scripts/traceability/update_spec_references.py:184
- Update plan and status reports printed to stdout — scripts/traceability/update_spec_references.py:154, scripts/traceability/update_spec_references.py:194
- Error diagnostics to stderr on invalid input or update failure — scripts/traceability/update_spec_references.py:96, scripts/traceability/update_spec_references.py:198

## Invokes — required
- script spec_utils — scripts/traceability/update_spec_references.py:29
- script traceability_cache — scripts/traceability/update_spec_references.py:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/traceability/update_spec_references.py:14 — used here
- `find_spec_file` — scripts/traceability/update_spec_references.py:30 — used here
- `is_valid_spec_id` — scripts/traceability/update_spec_references.py:31 — used here
- `parse_frontmatter_with_content` — scripts/traceability/update_spec_references.py:32 — used here
- `validate_specs_path` — scripts/traceability/update_spec_references.py:33 — used here
- `clear_cache` — scripts/traceability/update_spec_references.py:35 — used here
- `update_yaml_references` — scripts/traceability/update_spec_references.py:38 — defined here
- `main` — scripts/traceability/update_spec_references.py:74 — defined here

## Structure
- Shebang and module docstring specifying exit codes (lines 1-15)
- Imports and path configuration (lines 17-36)
- `update_yaml_references` regex-based frontmatter updater (lines 38-72)
- `main` argument parser, plan builder, user confirmation, and transactional executor (lines 74-204)
- Entry point execution guard (lines 206-207)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/traceability/update_spec_references.py`, language: Python, lines: 208
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/traceability/update_spec_references.py --source-id DESIGN-001 --add REQ-002 --specs-path <tmpdir> --dry-run` and `--force`, actual exit code: 0, abridged stdout:
  ```
  Update Plan:
    Operation: Add
    Source: DESIGN-001

  Current references:
    - REQ-001

  New references:
    - REQ-001
    - REQ-002 (NEW)

  DRY RUN: No changes will be made
  ```
- documented exit codes vs actual exit paths:
  Documented in lines 9-13:
  `0 - Success (update completed or validated in dry-run)` — scripts/traceability/update_spec_references.py:10
  `1 - Error (ID not found, invalid format, file operation failed)` — scripts/traceability/update_spec_references.py:11
  `2 - User cancelled operation` — scripts/traceability/update_spec_references.py:12
  Actual exit paths in code:
  - line 97: `return 1` (invalid source ID format)
  - line 110: `return 1` (invalid reference ID format)
  - line 120: `return 1` (validate_specs_path raises SystemExit)
  - line 125: `return 1` (source spec file not found)
  - line 130: `return 1` (spec frontmatter parse error)
  - line 149: `return 1` (reference to replace not found in source spec)
  - line 173: `return 0` (dry-run exit)
  - line 179: `return 2` (user cancelled update at confirmation prompt)
  - line 195: `return 0` (update successful)
  - line 203: `return 1` (exception during update; rolled back from backup)
- for validators/gates: not a validator or gate. Exits 1 on error, 2 on user cancellation, 0 on success.
- does output match documentation: yes, displays execution plan and performs transactional frontmatter updates.

## Defects — required
- `script-bug` · scripts/traceability/update_spec_references.py:122: Relies on `find_spec_file` from `spec_utils.py` which only matches `{spec_id}.md`, failing to locate real repository specification files in `.agents/specs/` that contain title slugs (e.g. `DESIGN-001-pr-comment-processing.md`).
- `orphan` · scripts/traceability/update_spec_references.py:1: Standalone administrative tool not called by any lifecycle workflow command or agent definition.

## Observations
- Automatically calls `clear_cache()` upon successful write to ensure graph caches do not serve stale references.
- Creates backup copy and rolls back upon exception during disk write, protecting specification integrity.

## Context cost
6526 bytes (~1631 tokens) directly, plus `spec_utils.py` (6047 bytes) and `traceability_cache.py` (4054 bytes) for a total execution context of ~16627 bytes (~4100 tokens).
