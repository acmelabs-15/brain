---
package: rjm
path: scripts/validate_memory_tier.py
type: script
bytes: 9824
unit: inv-rjm-268
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validate_memory_tier.py, sha256: 4f87d202ac44cf05d5246d8261c6fc3a501aeb568f36370317b3f1d833e1e6c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_memory_tier.py

## Purpose — required, verbatim
> "Validate memory tier hierarchy per ADR-017." — scripts/validate_memory_tier.py:2

## Design intent — required
Validates the structural integrity and hierarchical tiering of repository memory stores (`.serena/memories`) according to ADR-017. Enforces a three-tier information retrieval architecture: root `memory-index.md` pointing to domain indexes (`*-index.md`), which in turn point to atomic memory documents. Validates that all referenced files exist, detects broken links and path traversal attempts, verifies that domain indexes are formatted strictly as pure lookup tables without extraneous narrative, flags deprecated `skill-` prefixes, and reports orphaned indexes and orphaned atomic files. In `--ci` mode, warnings are treated as fatal errors to prevent drift.

## Phase — required
cross-phase

## Inputs — required
- CLI argument `--path`: "Path to memories directory (default: .serena/memories)" — scripts/validate_memory_tier.py:250
- CLI argument `--ci`: "CI mode: warnings become errors" — scripts/validate_memory_tier.py:255
- Filesystem directory containing `memory-index.md`, domain index tables, and atomic markdown files.

## Outputs — required
- Terminal stdout lines:
  - Error messages prefixed with `ERROR:` (scripts/validate_memory_tier.py:269)
  - Warning messages prefixed with `WARNING:` (scripts/validate_memory_tier.py:271)
  - Summary message on pass: "Memory tier validation passed." — scripts/validate_memory_tier.py:277
  - Summary message on fail: "Memory tier validation failed." — scripts/validate_memory_tier.py:283
- Process exit code: 0 on success, 1 on validation error (scripts/validate_memory_tier.py:11-12, 280, 284)

## Invokes — required
- script markdown_parser — scripts/validate_memory_tier.py:29

## Invoked by — required
- doc technical-guardrails.md — docs/technical-guardrails.md:272

## Concepts named — required, verbatim
- `ADR-017` — scripts/validate_memory_tier.py:2 — used here
- `memory-index.md` — scripts/validate_memory_tier.py:5 — used here
- `ADR-035` — scripts/validate_memory_tier.py:14 — used here
- `INDEX_TABLE_ROW_RE` — scripts/validate_memory_tier.py:32 — defined here
- `LOOKUP_TABLE_LINE_RE` — scripts/validate_memory_tier.py:37 — defined here
- `DOMAIN_INDEX_RE` — scripts/validate_memory_tier.py:45 — defined here
- `ValidationResult` — scripts/validate_memory_tier.py:49 — defined here
- `extract_file_references` — scripts/validate_memory_tier.py:60 — defined here
- `validate_references_exist` — scripts/validate_memory_tier.py:65 — defined here
- `validate_memory_index` — scripts/validate_memory_tier.py:83 — defined here
- `find_domain_indexes` — scripts/validate_memory_tier.py:96 — defined here
- `validate_domain_index_format` — scripts/validate_memory_tier.py:105 — defined here
- `validate_domain_index_references` — scripts/validate_memory_tier.py:117 — defined here
- `validate_orphan_indexes` — scripts/validate_memory_tier.py:139 — defined here
- `validate_orphan_atomics` — scripts/validate_memory_tier.py:154 — defined here
- `canonicalize_references` — scripts/validate_memory_tier.py:193 — defined here
- `validate_memory_tier` — scripts/validate_memory_tier.py:207 — defined here
- `main` — scripts/validate_memory_tier.py:242 — defined here

## Structure
- Shebang and module docstring specifying checks and ADR-017 / ADR-035 compliance (scripts/validate_memory_tier.py:1-15)
- Standard library imports and path setup (scripts/validate_memory_tier.py:17-29)
- Regex patterns for table rows, pure lookup table lines, and domain index filenames (scripts/validate_memory_tier.py:32-46)
- `ValidationResult` dataclass for error and warning accumulation (scripts/validate_memory_tier.py:48-58)
- `extract_file_references` and `validate_references_exist` helper functions (scripts/validate_memory_tier.py:60-81)
- `validate_memory_index`: root index verification and reference extraction (scripts/validate_memory_tier.py:83-94)
- `find_domain_indexes` and `validate_domain_index_format`: pure lookup table validation (scripts/validate_memory_tier.py:96-115)
- `validate_domain_index_references`: checks domain references and deprecated `skill-` prefixes (scripts/validate_memory_tier.py:117-137)
- `validate_orphan_indexes` and `validate_orphan_atomics`: detects unindexed files (scripts/validate_memory_tier.py:139-191)
- `canonicalize_references`: repository-relative path normalization (scripts/validate_memory_tier.py:193-205)
- `validate_memory_tier`: orchestrator of all tier checks (scripts/validate_memory_tier.py:207-240)
- `main`: CLI parser, CI promotion logic, output printing, and exit codes (scripts/validate_memory_tier.py:242-288)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_memory_tier.py`
- **language:** Python (python3)
- **lines:** 289
- **documented invocation:**
  - `python3 scripts/validate_memory_tier.py --path .serena/memories` — docs/technical-guardrails.md:272
- **executed:** yes
- **actual command run:** `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validate_memory_tier.py --path sources/rjm/.serena/memories`
- **abridged stdout:** `Memory tier validation passed. 377 warning(s).`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: All memory tier validations pass" — scripts/validate_memory_tier.py:11
    - "1  - Error: Validation failures detected" — scripts/validate_memory_tier.py:12
  - Actual code paths:
    - `return 0` — scripts/validate_memory_tier.py:280
    - `return 1` — scripts/validate_memory_tier.py:284
    - `sys.exit(main())` — scripts/validate_memory_tier.py:288
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: Yes, exits 1 on validation errors or when warnings are promoted to errors in `--ci` mode.
  - Default branch failure: On the repository's own default branch, running with `--path .serena/memories` passes with 377 warnings (exit 0), but fails in CI mode (`--ci`) with 377 errors (exit 1) because 377 atomic memory markdown files are not referenced by any domain index table.
- **does the output match what the documentation claims:** yes; outputs validation results and exit code 0 when run against `.serena/memories` in normal mode.

## Defects — required
- always-failing-gate · scripts/validate_memory_tier.py:253-266 · When run with `--ci`, the validator fails (exit code 1) against the repository's own default branch (`.serena/memories`) because 377 atomic memory files exist that are not indexed in any domain index, causing warnings to be promoted to fatal errors.
- doc-drift · scripts/validate_memory_tier.py:29 · Imports `markdown_it` indirectly through `scripts.utils.markdown_parser`, which is not available in the default system Python environment and requires the repository virtual environment (`.venv`).

## Observations
- Enforces strict markdown formatting for domain indexes: every line must be whitespace, table header `| Keywords | File |`, separator `|[-| ]+|`, or data row `|.+|.+|`. Any narrative prose or section headers outside tables trigger an ADR-017 violation.
- Includes path traversal protection (`ref_path.is_relative_to(resolved_base)` at line 72) to prevent malicious relative links in markdown tables from referencing files outside the memories root directory.

## Context cost
9824 bytes, 289 lines, ~2400 tokens (plus imported `scripts.utils.markdown_parser` 2992 bytes).
