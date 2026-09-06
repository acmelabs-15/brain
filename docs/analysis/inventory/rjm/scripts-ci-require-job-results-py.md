---
package: rjm
path: scripts/ci/require_job_results.py
type: script
bytes: 3009
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/require_job_results.py, sha256: 0a1300b1f9f30c1536e51325107d4d6deb5db72183cfebbdf364afdbeaff61d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/require_job_results.py

## Purpose — required, verbatim
> "Assert that upstream job results match their expected values." — scripts/ci/require_job_results.py:2

## Design intent — required
Replaces brittle inline shell evaluation chains in GitHub Actions workflow summary jobs under ADR-006 and ADR-035. Evaluates multiple upstream job result conditions supplied via `--check NAME EXPECTED MESSAGE` against the environment, reporting all mismatches via `::error::` annotations before exiting. Unset environment variables default to empty strings and deliberately fail their checks to prevent missing upstream results from silently passing summary gates.

## Phase — required
cross-phase

## Inputs — required
- `--check`: "Environment variable, its required value, and the failure message." — scripts/ci/require_job_results.py:65
- `--success-message`: "Message to print when every check matched." — scripts/ci/require_job_results.py:70
- Environment variables corresponding to the `NAME` argument of each check

## Outputs — required
- GitHub Actions `::error::` annotations emitted to stdout/stderr for failed checks
- Optional success message emitted if all checks pass

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/require_job_results.py:7 — used here
- `ADR-035` — scripts/ci/require_job_results.py:21 — used here
- `EXIT_SUCCESS` — scripts/ci/require_job_results.py:34 — defined here
- `EXIT_MISMATCH` — scripts/ci/require_job_results.py:35 — defined here
- `EXIT_USAGE` — scripts/ci/require_job_results.py:36 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/require_job_results.py`, language: Python, lines: 97
- documented invocation:
  "Environment variable, its required value, and the failure message." — scripts/ci/require_job_results.py:65
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/require_job_results.py --help`
    stdout: `usage: require_job_results.py [-h] [--check NAME EXPECTED MESSAGE] [--success-message SUCCESS_MESSAGE]`
    actual exit code: 0
  - Command: without `--check`: `python3 sources/rjm/scripts/ci/require_job_results.py`
    stdout: `ERROR: at least one --check is required` (stderr)
    actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented:
    - "0  - Success: every check matched" — scripts/ci/require_job_results.py:22
    - "1  - Error: at least one check did not match" — scripts/ci/require_job_results.py:23
    - "2  - Error: usage/configuration (no checks supplied)" — scripts/ci/require_job_results.py:24
  - Actual exit paths:
    - `return EXIT_USAGE` on missing checks — scripts/ci/require_job_results.py:81
    - `return EXIT_MISMATCH` on check failure — scripts/ci/require_job_results.py:88
    - `return EXIT_SUCCESS` on all checks matched — scripts/ci/require_job_results.py:92
    - `sys.exit(main())` — scripts/ci/require_job_results.py:96
- for validators/gates: can it exit non-zero?
  Yes, exits 2 on configuration error (no checks) and 1 when any job check fails.
  Does it fail on the source repo's own default branch?
  When run with no arguments, exits 2.
- does the output match what the documentation claims?
  Yes, tests all checks and emits expected error annotations.

## Defects — required
- orphan — scripts/ci/require_job_results.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/ files such as merge-gate.yml and ai-review-flow.yml).

## Observations
Directly remediates Phase 1V finding by listing `Invoked by: orphan` and recording the `orphan` defect under `## Defects`.

## Context cost
3009 bytes, 97 lines. Approximate tokens: ~750.
