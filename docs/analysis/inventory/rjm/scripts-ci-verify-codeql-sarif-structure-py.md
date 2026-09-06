---
package: rjm
path: scripts/ci/verify_codeql_sarif_structure.py
type: script
bytes: 2571
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/verify_codeql_sarif_structure.py, sha256: bb1ab0941302ba0f029311f469b82725674072a7b4276dfc30a8be4f0c0e61e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/verify_codeql_sarif_structure.py

## Purpose — required, verbatim
> "Validate the structure of every SARIF file in a results directory." — scripts/ci/verify_codeql_sarif_structure.py:2

## Design intent — required
Standalone CI verification utility replacing an inline shell and Python block in `test-codeql-integration.yml`. It ensures all generated CodeQL SARIF scan result files within `--results-dir` are structurally valid JSON containing required top-level `version` and `runs` entries, outputting run and result counts to stdout for pipeline visibility. It enforces standard ADR-035 process exit codes so upstream CI jobs fail fast on malformed or absent analysis outputs.

## Phase — required
rjm:test

## Inputs — required
- `--results-dir` CLI option (defaulting to `.codeql/results`) — scripts/ci/verify_codeql_sarif_structure.py:66
- All `*.sarif` JSON files matching glob under the specified directory — scripts/ci/verify_codeql_sarif_structure.py:43

## Outputs — required
- Validation summary lines to stdout reporting file name, version, runs, and results count — scripts/ci/verify_codeql_sarif_structure.py:49-57
- Error messages to stderr upon invalid structure, JSON parse failure, or empty directory — scripts/ci/verify_codeql_sarif_structure.py:77
- Process exit code: 0 for valid files, 1 if no files or invalid structure, 2 on argument parse error — scripts/ci/verify_codeql_sarif_structure.py:10-12

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SARIF` — scripts/ci/verify_codeql_sarif_structure.py:2 — used here
- `test-codeql-integration.yml` — scripts/ci/verify_codeql_sarif_structure.py:6 — used here
- `ADR-035` — scripts/ci/verify_codeql_sarif_structure.py:9 — used here
- `EXIT_OK` — scripts/ci/verify_codeql_sarif_structure.py:22 — defined here
- `EXIT_INVALID` — scripts/ci/verify_codeql_sarif_structure.py:23 — defined here
- `EXIT_USAGE` — scripts/ci/verify_codeql_sarif_structure.py:24 — defined here

## Structure
- validate_sarif(path: Path) -> str | None
- validate_sarif_directory(results_dir: Path) -> tuple[bool, list[str]]
- build_parser() -> argparse.ArgumentParser
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/verify_codeql_sarif_structure.py`, Python 3, 83 lines
- **documented invocation:**
  > "Finds all *.sarif files under --results-dir, checks that each has a valid" — scripts/ci/verify_codeql_sarif_structure.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/verify_codeql_sarif_structure.py --results-dir sources/rjm/.codeql/results`
- **actual exit code:** 1
- **abridged stdout/stderr:** `ERROR: No SARIF files found in sources/rjm/.codeql/results`
- **documented exit codes:**
  > "0  - All SARIF files are structurally valid" — scripts/ci/verify_codeql_sarif_structure.py:10
  > "1  - No SARIF files found, or one or more files are invalid" — scripts/ci/verify_codeql_sarif_structure.py:11
  > "2  - Usage error" — scripts/ci/verify_codeql_sarif_structure.py:12
  vs. actual exit paths:
  - `scripts/ci/verify_codeql_sarif_structure.py:78`: `return EXIT_OK if all_valid else EXIT_INVALID` (returns 0 or 1)
  - `scripts/ci/verify_codeql_sarif_structure.py:73`: `build_parser().parse_args(argv)` exits with code 2 on unrecognized arguments via argparse
  - `scripts/ci/verify_codeql_sarif_structure.py:82`: `sys.exit(main())` passes return code to `sys.exit`
- **validators/gates:** can exit non-zero: yes (exits 1 on missing files or invalid SARIF schema; exits 2 on usage error). Fails on source repo default branch: yes (exits 1 because `sources/rjm/.codeql/results` contains no `.sarif` files).
- **output match:** yes, prints per-file version/run/results stats when valid SARIF files exist and error messages to stderr when missing or invalid.

## Defects — required
none

## Observations
Clear implementation of ADR-035 exit code standard with clean separation of validation logic (`validate_sarif`), directory traversal (`validate_sarif_directory`), and CLI interface (`main`).

## Context cost
File size: 2571 bytes (~650 tokens). No external file dependencies loaded.
