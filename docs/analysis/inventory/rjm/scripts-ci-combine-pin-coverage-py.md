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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/combine_pin_coverage.py

## Purpose — required, verbatim
> "Combine statement-only main coverage data with branch-mode pin data." — scripts/ci/combine_pin_coverage.py:2

## Design intent — required
Bypasses the `coverage combine` (`CoverageData.update`) restriction that refuses to combine statement coverage data with branch coverage data ("Can't combine statement coverage data with branch data"). In the CI test matrix, the main pytest run captures statement-only coverage to save 27.02 seconds (+6.2%) of wall clock time, while two targeted pin steps collect broad branch coverage under `--cov-branch` to enforce 100% branch gates on specific modules. `combine_pin_coverage.py` validates all inputs, projects each pin's arc data down to executed line numbers (mirroring coverage.py's internal line reduction), and unions the projected lines into the statement dataset so that downstream tools such as `coverage xml` receive a unified report containing both pinned and incidental line execution.

## Phase — required
rjm:Verify

## Inputs — required
- CLI options: `--main-data` (repeatable Path, statement-only coverage file), `--pin-data` (repeatable Path, branch-mode coverage file), `--output-data` (Path, destination file) (`scripts/ci/combine_pin_coverage.py:199-218`)
- SQLite coverage database files for main partitions and pin partitions (`scripts/ci/combine_pin_coverage.py:82-101`)

## Outputs — required
- Combined SQLite coverage database file written to `--output-data` (`scripts/ci/combine_pin_coverage.py:183-193`)
- Console confirmation message: `"Combined {count} coverage data file(s) into {args.output_data}"` (`scripts/ci/combine_pin_coverage.py:231`)
- Exit code: 0 on success, 1 on input validation failure, 2 on usage error (`scripts/ci/combine_pin_coverage.py:69-71`)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `pytest.yml` — scripts/ci/combine_pin_coverage.py:4 — used here
- `branch coverage` — scripts/ci/combine_pin_coverage.py:5 — used here
- `--cov-branch` — scripts/ci/combine_pin_coverage.py:9 — used here
- `coverage combine` — scripts/ci/combine_pin_coverage.py:36 — used here
- `CoverageData.update` — scripts/ci/combine_pin_coverage.py:36 — used here
- `coverage xml` — scripts/ci/combine_pin_coverage.py:43 — used here
- `AGENTS.md contract` — scripts/ci/combine_pin_coverage.py:53 — used here
- `EXIT_OK` — scripts/ci/combine_pin_coverage.py:69 — defined here
- `EXIT_INVALID_DATA` — scripts/ci/combine_pin_coverage.py:70 — defined here
- `EXIT_USAGE` — scripts/ci/combine_pin_coverage.py:71 — defined here
- `CoverageInputError` — scripts/ci/combine_pin_coverage.py:74 — defined here
- `_load_data` — scripts/ci/combine_pin_coverage.py:82 — defined here
- `_require_branch_data` — scripts/ci/combine_pin_coverage.py:104 — defined here
- `_require_statement_data` — scripts/ci/combine_pin_coverage.py:113 — defined here
- `_project_to_lines` — scripts/ci/combine_pin_coverage.py:122 — defined here
- `CoverageData.lines()` — scripts/ci/combine_pin_coverage.py:125 — used here
- `combine` — scripts/ci/combine_pin_coverage.py:155 — defined here

## Structure
- `EXIT_OK`, `EXIT_INVALID_DATA`, `EXIT_USAGE`
- `CoverageInputError(Exception)`
- `_load_data(path: Path, *, label: str) -> coverage.CoverageData`
- `_require_branch_data(data: coverage.CoverageData, *, label: str, path: Path) -> None`
- `_require_statement_data(data: coverage.CoverageData, *, label: str, path: Path) -> None`
- `_project_to_lines(data: coverage.CoverageData, scratch_path: Path) -> coverage.CoverageData`
- `combine(main_paths: list[Path], pin_paths: list[Path], output_path: Path) -> None`
- `build_parser() -> argparse.ArgumentParser`
- `main(argv: list[str] | None = None) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/combine_pin_coverage.py`, language: `python`, lines: 237
- documented invocation:
  > "Combine statement-only main coverage data with branch-mode pin data." — scripts/ci/combine_pin_coverage.py:2
- **executed:** yes
- actual command run: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/ci/combine_pin_coverage.py --help`
- abridged stdout:
```
usage: combine_pin_coverage.py [-h] --main-data MAIN_DATA --pin-data PIN_DATA
                               --output-data OUTPUT_DATA
```
- **actual exit code:** 0
- documented exit codes:
  > "0 - ok, combined data file written" — scripts/ci/combine_pin_coverage.py:54
  > "1 - an input data file failed validation (missing, unreadable, empty, or" — scripts/ci/combine_pin_coverage.py:55
  > "2 - usage error (bad CLI arguments; argparse itself exits with this code)" — scripts/ci/combine_pin_coverage.py:57
  vs. actual exit paths in code:
  `scripts/ci/combine_pin_coverage.py:228` (`return EXIT_INVALID_DATA` [1])
  `scripts/ci/combine_pin_coverage.py:232` (`return EXIT_OK` [0])
  `argparse` usage error (`return EXIT_USAGE` [2]) via `build_parser`
  called via `raise SystemExit(main())` on line 236.
- for validators/gates: can exit non-zero (exits 1 on validation error, e.g. missing input data files; exits 2 on bad arguments). Tested missing input files: exits 1 with `error: main[0] (nonexistent1) coverage data file not found: /tmp/nonexistent1`.
- does the output match what the documentation claims: yes, enforces strict input checks and line-level union projection.

## Defects — required
- orphan — scripts/ci/combine_pin_coverage.py:1 — not invoked by any in-scope file; invoked only by out-of-scope .github/workflows/pytest.yml:551.

## Observations
Documents a specific SQLite shared-cache bug in coverage 7.13.1 where in-memory datasets (`no_disk=True`) fail `ATTACH DATABASE` calls; overcomes this limitation by writing projected datasets to temporary on-disk scratch files before merging.

## Context cost
10272 bytes (~2560 tokens).
