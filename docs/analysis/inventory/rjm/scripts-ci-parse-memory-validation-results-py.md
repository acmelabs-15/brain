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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/parse_memory_validation_results.py

## Purpose — required, verbatim
> "Summarize memory-validation results into workflow outputs." — scripts/ci/parse_memory_validation_results.py:2

## Design intent — required
Replaces an inline `jq` parsing step in `.github/workflows/memory-validation.yml` with a standalone Python script following ADR-006 and ADR-035. Accurately counts total, valid, and stale memory entries from `memory-validation-results.json` and ensures that a crashed verify step (resulting in a missing or empty results file) causes a CI failure rather than being misinterpreted as an empty, passing result.

## Phase — required
cross-phase

## Inputs — required
- `--input`: "Path to memory-validation-results.json." — scripts/ci/parse_memory_validation_results.py:50
- `--output`: "Destination for key=value lines. Defaults to $GITHUB_OUTPUT." — scripts/ci/parse_memory_validation_results.py:55
- Environment variable: `GITHUB_OUTPUT`

## Outputs — required
- Key-value lines written to destination:
  - `total`
  - `valid`
  - `stale`
  - `has_stale`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/parse_memory_validation_results.py:7 — used here
- `ADR-035` — scripts/ci/parse_memory_validation_results.py:18 — used here
- `EXIT_SUCCESS` — scripts/ci/parse_memory_validation_results.py:32 — defined here
- `EXIT_NO_RESULTS` — scripts/ci/parse_memory_validation_results.py:33 — defined here
- `EXIT_USAGE` — scripts/ci/parse_memory_validation_results.py:34 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_memory_validation_results.py`, language: Python, lines: 100
- documented invocation:
  "Path to memory-validation-results.json." — scripts/ci/parse_memory_validation_results.py:50
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/parse_memory_validation_results.py --help`
    stdout: `usage: parse_memory_validation_results.py [-h] --input INPUT [--output OUTPUT]`
    actual exit code: 0
  - Command: with missing `--output` and empty env: `python3 sources/rjm/scripts/ci/parse_memory_validation_results.py --input nonexistent.json`
    stdout: `ERROR: no --output and no GITHUB_OUTPUT set` (stderr)
    actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented:
    - "0  - Success: counts written to GITHUB_OUTPUT" — scripts/ci/parse_memory_validation_results.py:19
    - "1  - Error: results missing, empty, or not a JSON array" — scripts/ci/parse_memory_validation_results.py:20
    - "2  - Error: usage/configuration (no GITHUB_OUTPUT destination)" — scripts/ci/parse_memory_validation_results.py:21
  - Actual exit paths:
    - `return EXIT_USAGE` on missing destination — scripts/ci/parse_memory_validation_results.py:67
    - `return EXIT_NO_RESULTS` on missing/empty results file — scripts/ci/parse_memory_validation_results.py:74
    - `return EXIT_NO_RESULTS` on JSON parse failure — scripts/ci/parse_memory_validation_results.py:80
    - `return EXIT_NO_RESULTS` on non-list payload — scripts/ci/parse_memory_validation_results.py:84
    - `return EXIT_SUCCESS` on success — scripts/ci/parse_memory_validation_results.py:95
    - `sys.exit(main())` — scripts/ci/parse_memory_validation_results.py:99
- for validators/gates: can it exit non-zero?
  Yes, exits 2 on usage/configuration error and 1 on missing, empty, unparseable, or non-array results.
  Does it fail on the source repo's own default branch?
  When run without output destination, exits 2.
- does the output match what the documentation claims?
  Yes, writes total, valid, stale, and has_stale outputs and respects ADR-035 exit codes.

## Defects — required
- orphan — scripts/ci/parse_memory_validation_results.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/memory-validation.yml).

## Observations
Treats an entry as stale strictly when `valid is False` (excluding missing or null), preserving the exact behavior of `jq 'select(.valid == false)'`.

## Context cost
3300 bytes, 100 lines. Approximate tokens: ~800.
