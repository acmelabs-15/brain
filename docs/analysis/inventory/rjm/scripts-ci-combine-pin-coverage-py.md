---
package: rjm
path: scripts/ci/combine_pin_coverage.py
type: script
bytes: 10272
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/combine_pin_coverage.py

## Purpose — required, verbatim
> "Combine statement-only main coverage data with branch-mode pin data." — scripts/ci/combine_pin_coverage.py:2

## Design intent — required
High-performance coverage data unification tool that bridges coverage.py measurement modes in CI. In `.github/workflows/pytest.yml`, the primary test suite runs in statement-only mode to avoid the measured +27.02s (+6.2%) wall-clock overhead of `--cov-branch`, while two narrow "pin" test groups require `--cov-branch` to enforce 100% branch gates on critical modules (e.g. `ai_review_common.verdict`). Because `coverage combine` refuses to mix arc (branch) rows and line (statement) rows ("Can't combine statement coverage data with branch data"), this script projects each pin's arc data down to executed line numbers (matching internal `coverage.py` reduction) and merges the projected line coverage with the statement coverage data. This yields a single consolidated line-coverage SQLite database readable by `coverage xml` while validating that inputs exist, are non-empty, and conform to expected measurement modes.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments:
  - `--main-data`: "Statement-only partition coverage data file; repeat once per partition" — scripts/ci/combine_pin_coverage.py:204
  - `--pin-data`: "Branch (--cov-branch) pin-run coverage data file; repeat once per pin" — scripts/ci/combine_pin_coverage.py:211
  - `--output-data`: "Path to write the combined line-coverage data file" — scripts/ci/combine_pin_coverage.py:217
- Input coverage SQLite databases:
  - Main partition statement coverage databases validated to lack branch arcs (scripts/ci/combine_pin_coverage.py:115)
  - Pin branch coverage databases validated to contain branch arcs (scripts/ci/combine_pin_coverage.py:106)

## Outputs — required
- Consolidated line-coverage SQLite database written to path specified by `--output-data` (scripts/ci/combine_pin_coverage.py:183)
- Scratch projected database files created and unlinked during conversion (scripts/ci/combine_pin_coverage.py:187-191)
- Console progress message: `Combined {count} coverage data file(s) into {args.output_data}` (scripts/ci/combine_pin_coverage.py:231)
- Process exit code: 0 (EXIT_OK), 1 (EXIT_INVALID_DATA), 2 (EXIT_USAGE) — scripts/ci/combine_pin_coverage.py:69-71

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `statement-only main coverage data` — scripts/ci/combine_pin_coverage.py:2 — defined here
- `branch-mode pin data` — scripts/ci/combine_pin_coverage.py:2 — defined here
- `branch gate` — scripts/ci/combine_pin_coverage.py:12 — used here
- `--cov-branch` — scripts/ci/combine_pin_coverage.py:9 — used here
- `CoverageData` — scripts/ci/combine_pin_coverage.py:36 — used here
- `statement coverage` — scripts/ci/combine_pin_coverage.py:37 — used here
- `branch data` — scripts/ci/combine_pin_coverage.py:38 — used here
- `AGENTS.md` — scripts/ci/combine_pin_coverage.py:53 — used here
- `CoverageInputError` — scripts/ci/combine_pin_coverage.py:74 — defined here
- `ATTACH DATABASE` — scripts/ci/combine_pin_coverage.py:135 — used here

## Structure
- Module docstring, architectural performance rationale, and exit contract (lines 1-58)
- Imports and exit code constants (lines 60-72)
- `CoverageInputError` exception definition (lines 74-80)
- `_load_data` file validation and SQLite loading helper (lines 82-102)
- `_require_branch_data` arc presence validator (lines 104-111)
- `_require_statement_data` statement mode validator (lines 113-120)
- `_project_to_lines` branch-to-line reduction helper with SQLite workaround (lines 122-153)
- `combine` multi-file validation and combination pipeline (lines 155-193)
- `build_parser` argument parser configuration (lines 195-220)
- `main` entrypoint execution (lines 222-234)
- Entrypoint invocation (lines 236-237)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/combine_pin_coverage.py`
- **language:** Python 3
- **lines:** 237
- **documented invocation:**
  > "coverage combine" — scripts/ci/combine_pin_coverage.py:39
- **executed:** yes
- **command:** `sources/rjm/.venv/bin/python sources/rjm/scripts/ci/combine_pin_coverage.py --main-data /tmp/nonexistent-main --pin-data /tmp/nonexistent-pin --output-data /tmp/out`
- **stdout:**
  ```text
  error: main[0] (nonexistent-main) coverage data file not found: /tmp/nonexistent-main
  ```
- **actual exit code:** 1
- **documented exit codes:**
  - > "0 - ok, combined data file written" — scripts/ci/combine_pin_coverage.py:54
  - > "1 - an input data file failed validation (missing, unreadable, empty, or wrong measurement mode)" — scripts/ci/combine_pin_coverage.py:55-56
  - > "2 - usage error (bad CLI arguments; argparse itself exits with this code)" — scripts/ci/combine_pin_coverage.py:57
- **actual exit paths:**
  - `return EXIT_INVALID_DATA` — scripts/ci/combine_pin_coverage.py:228
  - `return EXIT_OK` — scripts/ci/combine_pin_coverage.py:232
  - `raise SystemExit(main())` — scripts/ci/combine_pin_coverage.py:236
- **for validators/gates:** Can exit non-zero: exits 1 when any input data file is missing, unreadable, empty, or has an incompatible measurement mode (e.g. statement data passed to `--pin-data` or branch data passed to `--main-data`), and exits 2 on CLI argument errors.
- **output matches documentation:** yes, validates inputs and projects arc data to lines to produce combinable statement coverage.

## Defects — required
none

## Observations
Documents an intricate SQLite bug in `coverage.py` version 7.13.1: `CoverageData.update()` attaches source files via `ATTACH DATABASE`, but does not enable `uri=True` on the destination connection; therefore, an in-memory (`no_disk=True`) source's URI is treated as a literal file name, failing with `no such table: other_db.file`. The script deliberately writes intermediate projections to physical scratch files on disk (`scratch_path.unlink(missing_ok=True)`) before reading them back to avoid this crash.

## Context cost
10272 bytes, ~2568 tokens. External dependency on `coverage` library (installed in environment). Total context cost: 10272 bytes.
