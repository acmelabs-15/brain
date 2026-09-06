---
package: rjm
path: scripts/traceability/resolve_orphaned_specs.py
type: script
bytes: 8405
unit: inv-rjm-264
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/resolve_orphaned_specs.py, sha256: 70e5c9108d85bb891131d1c1a75fd9912788105ae4671119c6462973fd643d63}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/resolve_orphaned_specs.py

## Purpose — required, verbatim
> "Identify and help resolve orphaned specs in the traceability graph." — scripts/traceability/resolve_orphaned_specs.py:2

## Design intent — required
Maintains graph integrity in the three-tier specification hierarchy (`requirements` -> `designs` -> `tasks`). In a complete traceability graph, every requirement is addressed by at least one design, every design links back to a requirement and forward to tasks, and every task links back to a design. Specifications missing these linkages are orphans representing abandoned work, unaddressed requirements, or ungrounded implementation tasks. `resolve_orphaned_specs.py` detects these orphans across all three tiers and provides interactive or forced workflows to list them, archive them to `.archive/`, or permanently delete them, clearing the spec cache upon resolution. Without this tool, disconnected specs could accumulate indefinitely, misleading agents during planning and auditing.

## Phase — required
rjm:spec

## Inputs — required
- Specs directory path (`--specs-path` — scripts/traceability/resolve_orphaned_specs.py:223)
- Action selector (`--action` — scripts/traceability/resolve_orphaned_specs.py:225)
- Type filter (`--type` — scripts/traceability/resolve_orphaned_specs.py:231)
- Execution flags (`--dry-run` — scripts/traceability/resolve_orphaned_specs.py:236; `--force` — scripts/traceability/resolve_orphaned_specs.py:237; `--no-cache` — scripts/traceability/resolve_orphaned_specs.py:238)

## Outputs — required
- Formatted list of orphaned specifications printed to stdout
- Files relocated to archive directory (`archive_base` — scripts/traceability/resolve_orphaned_specs.py:146)
- Invalidation of the spec cache (`clear_cache` — scripts/traceability/resolve_orphaned_specs.py:158)
- Process exit codes conforming to ADR-035 (0 for success/no orphans, 1 for error, 2 for orphans found in list mode)

## Invokes — required
- script spec_utils — scripts/traceability/resolve_orphaned_specs.py:31
- script traceability_cache — scripts/traceability/resolve_orphaned_specs.py:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `traceability graph` — scripts/traceability/resolve_orphaned_specs.py:2 — used here
- `orphaned specifications` — scripts/traceability/resolve_orphaned_specs.py:4 — used here
- `ADR-035` — scripts/traceability/resolve_orphaned_specs.py:16 — used here
- `find_orphaned_specs` — scripts/traceability/resolve_orphaned_specs.py:38 — defined here
- `show_orphans` — scripts/traceability/resolve_orphaned_specs.py:92 — defined here
- `archive_orphans` — scripts/traceability/resolve_orphaned_specs.py:118 — defined here
- `delete_orphans` — scripts/traceability/resolve_orphaned_specs.py:162 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI validation and maintenance script:
- path: `scripts/traceability/resolve_orphaned_specs.py`, language: Python, lines: 261
- documented invocation:
  `"Identify and resolve orphaned specs in the traceability graph." — scripts/traceability/resolve_orphaned_specs.py:221`
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/traceability/resolve_orphaned_specs.py --action list
  ```
- actual stdout (abridged):
  ```text
  Orphaned Requirements:
    REQ-003: No design references this requirement
      File: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
    REQ-009: No design references this requirement
      File: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/specs/requirements/REQ-009-orphan-ref-validator.md
  Orphaned Designs:
    DESIGN-009: No requirement reference and no tasks reference this design
      File: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/specs/design/DESIGN-009-orphan-ref-validator.md
  Orphaned Tasks:
    TASK-009: No design reference
      File: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/specs/tasks/TASK-009-orphan-ref-validator.md
  Total orphaned specs: 15
  ```
- **actual exit code:** 2
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - `"  0 - Success (no orphans or action completed)" — scripts/traceability/resolve_orphaned_specs.py:12`
  - `"  1 - Error (invalid path, file operation failed)" — scripts/traceability/resolve_orphaned_specs.py:13`
  - `"  2 - Orphans found (when --action list)" — scripts/traceability/resolve_orphaned_specs.py:14`
  Actual exit paths in code:
  - `scripts/traceability/resolve_orphaned_specs.py:113` — `return 0` if total orphans == 0
  - `scripts/traceability/resolve_orphaned_specs.py:115` — `return 2` if orphans found in `show_orphans`
  - `scripts/traceability/resolve_orphaned_specs.py:129` — `return 0` if no orphans to archive
  - `scripts/traceability/resolve_orphaned_specs.py:144` — `return 0` if user cancels archive confirmation
  - `scripts/traceability/resolve_orphaned_specs.py:159` — `return 0` on successful archive
  - `scripts/traceability/resolve_orphaned_specs.py:172` — `return 0` if no orphans to delete
  - `scripts/traceability/resolve_orphaned_specs.py:187` — `return 0` if user cancels delete confirmation
  - `scripts/traceability/resolve_orphaned_specs.py:196` — `return 0` on successful delete
  - `scripts/traceability/resolve_orphaned_specs.py:244` — `return 1` on invalid specs path
  - `scripts/traceability/resolve_orphaned_specs.py:256` — `return 0` fallback
- for validators/gates: acts as a validation gate for orphaned specs. Can exit non-zero (exits 2 when orphans are found in list mode). On the source repo default branch, exits 2 with 15 orphaned specs identified across requirements, designs, and tasks.
- does the output match what the documentation claims? yes (detects 15 orphaned specs and returns exit code 2 as documented).

## Defects — required
- orphan · scripts/traceability/resolve_orphaned_specs.py:1 · Standalone maintenance utility; not directly called by core lifecycle slash-commands.

## Observations
- Unlike `rename_spec_id.py` (which looked for `{spec_id}.md`), `resolve_orphaned_specs.py` uses `load_all_specs` which iterates over all `*.md` files in subdirectories, properly parsing all specs regardless of filename slugs.
- Supports dry-run safety modes (`--dry-run`) for both destructive actions (`archive` and `delete`).
- Deletion requires the user to explicitly type the confirmation string `DELETE` (unless `--force` is specified).

## Context cost
8,405 bytes (~2,100 tokens). Loads `spec_utils.py` (6,047 bytes) and `traceability_cache.py` (~4,500 bytes). Total ~18,900 bytes (~4,725 tokens).
