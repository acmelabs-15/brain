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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/require_job_results.py

## Purpose — required, verbatim
> "Assert that upstream job results match their expected values." — scripts/ci/require_job_results.py:2

## Design intent — required
Replaces brittle inline shell conditional logic in GitHub Actions workflow summary jobs under ADR-006 (no logic in YAML). Evaluates a series of required upstream job or step outcomes passed via environment variables against their expected strings (e.g. `success`), emitting GitHub workflow `::error::` annotations for all failed checks rather than stopping at the first failure. Exits with code 1 if any check fails, and exits with code 2 if no checks are provided.

## Phase — required
none

## Inputs — required
- `--check`: Environment variable name, expected value, and failure message triplet — scripts/ci/require_job_results.py:65
- `--success-message`: Optional message to print when all checks pass — scripts/ci/require_job_results.py:70
- Named environment variables populated from `needs.*` expressions — scripts/ci/require_job_results.py:13-14

## Outputs — required
- Error annotations `::error::<message>` printed to stdout for failed checks — scripts/ci/require_job_results.py:86
- Success message printed to stdout when every check matches — scripts/ci/require_job_results.py:91

## Invokes — required
none

## Invoked by — required
- `.github/workflows/` (summary and required status check jobs across multiple CI workflows)

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/require_job_results.py:7 — used here
- `ADR-035` — scripts/ci/require_job_results.py:21 — used here

## Structure
- module docstring — scripts/ci/require_job_results.py:2-25
- _format — scripts/ci/require_job_results.py:39
- failures — scripts/ci/require_job_results.py:46
- build_parser — scripts/ci/require_job_results.py:57
- main — scripts/ci/require_job_results.py:75

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/require_job_results.py`, language: Python, lines: 97
- documented invocation: `python3 scripts/ci/require_job_results.py --check NAME EXPECTED MESSAGE`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/require_job_results.py`
- stdout: `ERROR: at least one --check is required` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "0 - Success: every check matched" — scripts/ci/require_job_results.py:22
  > "1 - Error: at least one check did not match" — scripts/ci/require_job_results.py:23
  > "2 - Error: usage/configuration (no checks supplied)" — scripts/ci/require_job_results.py:24
  Actual exit paths in code:
  `return EXIT_USAGE` — scripts/ci/require_job_results.py:81
  `return EXIT_MISMATCH` — scripts/ci/require_job_results.py:88
  `return EXIT_SUCCESS` — scripts/ci/require_job_results.py:92
- for validators/gates: can exit non-zero (exits 1 on check mismatch, exits 2 on empty checks); failable gate
- does the output match what the documentation claims: yes, verifies all checks and reports failures via error annotations

## Defects — required
none

## Observations
Treats unset environment variables as empty strings so a missing upstream result fails closed rather than silently succeeding. Interpolates `{value}` into error messages.

## Context cost
Bytes: 3009. Uses Python standard library only (`argparse`, `os`, `sys`, `collections.abc`). Approximate tokens: ~750.
