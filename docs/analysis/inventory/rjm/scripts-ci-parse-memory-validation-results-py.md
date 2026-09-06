---
package: rjm
path: scripts/ci/parse_memory_validation_results.py
type: script
bytes: 3300
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/parse_memory_validation_results.py, sha256: 42dad8f4e730c3e95c757972e4a7879303e41a5f4c944e1f1d1304199bf417b5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/parse_memory_validation_results.py

## Purpose — required, verbatim
> "Summarize memory-validation results into workflow outputs." — scripts/ci/parse_memory_validation_results.py:2

## Design intent — required
Replaces an inline `jq` block in `.github/workflows/memory-validation.yml` with a standalone Python script adhering to ADR-006 (no logic in YAML). Reads an array of memory validation results, counts total entries, valid entries, and stale entries (`valid == False`), and exports them along with a `has_stale` boolean flag to `$GITHUB_OUTPUT`. Treating missing or empty results as an explicit error ensures that an upstream crash during validation causes CI to fail rather than silently reporting a false green pass.

## Phase — required
none

## Inputs — required
- `--input`: Path to memory-validation-results.json — scripts/ci/parse_memory_validation_results.py:50
- `--output`: Destination for key=value lines, defaults to `$GITHUB_OUTPUT` — scripts/ci/parse_memory_validation_results.py:55

## Outputs — required
- Key-value lines written to destination file: `total`, `valid`, `stale`, `has_stale` — scripts/ci/parse_memory_validation_results.py:88-92

## Invokes — required
none

## Invoked by — required
- `.github/workflows/memory-validation.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/parse_memory_validation_results.py:7 — used here
- `ADR-035` — scripts/ci/parse_memory_validation_results.py:18 — used here
- `GITHUB_OUTPUT` — scripts/ci/parse_memory_validation_results.py:6 — used here
- `has_stale` — scripts/ci/parse_memory_validation_results.py:61 — defined here

## Structure
- module docstring — scripts/ci/parse_memory_validation_results.py:2-22
- counts — scripts/ci/parse_memory_validation_results.py:37
- build_parser — scripts/ci/parse_memory_validation_results.py:46
- main — scripts/ci/parse_memory_validation_results.py:60

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_memory_validation_results.py`, language: Python, lines: 100
- documented invocation: `python3 scripts/ci/parse_memory_validation_results.py --input <path> [--output <dest>]`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/parse_memory_validation_results.py --input nonexistent.json`
- stdout: `ERROR: no --output and no GITHUB_OUTPUT set` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "0 - Success: counts written to GITHUB_OUTPUT" — scripts/ci/parse_memory_validation_results.py:19
  > "1 - Error: results missing, empty, or not a JSON array" — scripts/ci/parse_memory_validation_results.py:20
  > "2 - Error: usage/configuration (no GITHUB_OUTPUT destination)" — scripts/ci/parse_memory_validation_results.py:21
  Actual exit paths in code:
  `return EXIT_USAGE` — scripts/ci/parse_memory_validation_results.py:67
  `return EXIT_NO_RESULTS` — scripts/ci/parse_memory_validation_results.py:74, 80, 84
  `return EXIT_SUCCESS` — scripts/ci/parse_memory_validation_results.py:95
- for validators/gates: can exit non-zero (exits 1 on missing/unparseable input, 2 on usage/config error)
- does the output match what the documentation claims: yes, formats counts and exits with ADR-035 codes

## Defects — required
none

## Observations
Matches ADR-006 and ADR-035 standards. Replaces inline `jq` logic while strictly preserving boolean equality semantics (`e.get("valid", None) is False`).

## Context cost
Bytes: 3300. Uses Python standard library only (`argparse`, `json`, `os`, `sys`, `pathlib`). Approximate tokens: ~850.
