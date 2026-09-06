---
package: rjm
path: scripts/traceability/rename_spec_id.py
type: script
bytes: 6188
unit: inv-rjm-264
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/rename_spec_id.py, sha256: ad4c8bc9523c6c8d9a633d463133c369bab159d2a397db401407bba7caea0581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/rename_spec_id.py

## Purpose — required, verbatim
> "Rename a spec ID and update all references automatically." — scripts/traceability/rename_spec_id.py:2

## Design intent — required
Automates renaming of specification IDs across the three-tier traceability graph (requirements, designs, tasks). Spec IDs (such as `REQ-001`) are referenced in filenames, frontmatter `id` fields, and the `related` lists of dependent specs. `rename_spec_id.py` validates spec ID formatting, ensures spec type consistency (disallowing cross-type renames), scans all specs for references, creates `.bak` backup files for rollback safety, updates references, renames the spec file, clears the traceability cache, and automatically rolls back all changes if any error occurs. Without this script, refactoring or re-indexing spec IDs would require manual edits across dozens of markdown files, risking broken traceability links.

## Phase — required
rjm:spec

## Inputs — required
- Current specification ID (`--old-id` — scripts/traceability/rename_spec_id.py:77)
- New specification ID (`--new-id` — scripts/traceability/rename_spec_id.py:78)
- Specs root directory path (`--specs-path` — scripts/traceability/rename_spec_id.py:80)
- Execution flags (`--dry-run` — scripts/traceability/rename_spec_id.py:82; `--force` — scripts/traceability/rename_spec_id.py:83)
- Spec markdown files in subdirectories (`requirements` — scripts/traceability/rename_spec_id.py:42)

## Outputs — required
- Renamed specification file (`new_file_path` — scripts/traceability/rename_spec_id.py:161)
- Updated YAML frontmatter references in referencing spec files
- Temporary backup files (`backup_path` — scripts/traceability/rename_spec_id.py:142) cleaned up on success or restored on rollback
- Invalidation of the spec cache (`clear_cache` — scripts/traceability/rename_spec_id.py:168)
- CLI stdout planning output and exit codes

## Invokes — required
- script spec_utils — scripts/traceability/rename_spec_id.py:28
- script traceability_cache — scripts/traceability/rename_spec_id.py:36

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `traceability graph` — scripts/traceability/rename_spec_id.py:4 — used here
- `ADR-035` — scripts/traceability/rename_spec_id.py:13 — used here
- `find_referencing_files` — scripts/traceability/rename_spec_id.py:39 — defined here
- `update_file_content` — scripts/traceability/rename_spec_id.py:53 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI maintenance script:
- path: `scripts/traceability/rename_spec_id.py`, language: Python, lines: 184
- documented invocation:
  `"Rename a spec ID and update all references." — scripts/traceability/rename_spec_id.py:75`
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/traceability/rename_spec_id.py --specs-path .agents/specs --old-id REQ-999 --new-id REQ-998 --dry-run
  ```
- actual stdout (abridged):
  ```text
  Spec not found: REQ-999
  ```
- **actual exit code:** 1
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - `"  0 - Success (rename completed or validated in dry-run)" — scripts/traceability/rename_spec_id.py:9`
  - `"  1 - Error (ID not found, invalid format, file operation failed)" — scripts/traceability/rename_spec_id.py:10`
  - `"  2 - User cancelled operation" — scripts/traceability/rename_spec_id.py:11`
  Actual exit paths in code:
  - `scripts/traceability/rename_spec_id.py:89` — `return 1` if old ID format invalid
  - `scripts/traceability/rename_spec_id.py:93` — `return 1` if new ID format invalid
  - `scripts/traceability/rename_spec_id.py:99` — `return 1` if spec types do not match
  - `scripts/traceability/rename_spec_id.py:104` — `return 1` if specs path invalid
  - `scripts/traceability/rename_spec_id.py:109` — `return 1` if old spec ID not found
  - `scripts/traceability/rename_spec_id.py:114` — `return 1` if target spec ID already exists
  - `scripts/traceability/rename_spec_id.py:130` — `return 0` on `--dry-run`
  - `scripts/traceability/rename_spec_id.py:136` — `return 2` if user cancels confirmation prompt (`n`)
  - `scripts/traceability/rename_spec_id.py:170` — `return 0` on successful rename
  - `scripts/traceability/rename_spec_id.py:179` — `return 1` on exception during rename / rollback
- for validators/gates: not a validator/gate. Can exit non-zero (exits 1 on missing spec or error, exits 2 on user cancellation).
- does the output match what the documentation claims? yes (exit codes 0, 1, 2 match ADR-035 documentation).

## Defects — required
- script-bug · scripts/traceability/rename_spec_id.py:106 · Assumes spec files are named exactly `{spec_id}.md` (via `find_spec_file` in `spec_utils.py:48`), whereas the actual repository files in `.agents/specs/` use descriptive slugs like `{spec_id}-{slug}.md` (e.g., `REQ-001-pr-comment-handling.md`). Consequently, `find_spec_file` always fails with `Spec not found` when run against real repo specs.
- script-bug · scripts/traceability/rename_spec_id.py:161 · Renaming logic constructs new filename as `{args.new_id}.md`, which strips the descriptive slug name upon rename.
- orphan · scripts/traceability/rename_spec_id.py:1 · Standalone maintenance script; not invoked by any in-scope lifecycle commands or agent definitions.

## Observations
- Features transactional semantics: creates `.bak` copies before any modifications, catches any exception, restores all originals from backups, and cleans up `.bak` files on both success and rollback paths.
- Uses regex word-boundary substitution (`pattern = rf"(?<=\s){re.escape(old_value)}(?=\s|$)"`) to avoid substring false-positives when replacing IDs in referencing files.

## Context cost
6,188 bytes (~1,550 tokens). Loads `spec_utils.py` (6,047 bytes) and `traceability_cache.py` (~4,500 bytes). Total ~16,700 bytes (~4,200 tokens).
