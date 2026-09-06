---
package: rjm
path: scripts/ci/codeql_integration_summary.py
type: script
bytes: 2983
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/codeql_integration_summary.py

## Purpose — required, verbatim
> "Write the CodeQL integration test summary to GITHUB_STEP_SUMMARY." — scripts/ci/codeql_integration_summary.py:2

## Design intent — required
Formats CodeQL integration test results (`INSTALL_RESULT`, `LANGUAGE_RESULT`, `JSON_RESULT`) from environment variables into a structured markdown table and appends it to `$GITHUB_STEP_SUMMARY`. If all tests succeeded or were skipped, it records a tip notice and exits with code 0. If any test failed, it records a caution notice and exits with code 1. This replaces an earlier brittle bash associative-array implementation in `test-codeql-integration.yml` under ADR-006 (no logic in workflow YAML) while standardizing exit codes under ADR-035.

## Phase — required
rjm:Verify

## Inputs — required
- Environment variable `GITHUB_STEP_SUMMARY` specifying the step summary file path (`scripts/ci/codeql_integration_summary.py:89`)
- Environment variables `INSTALL_RESULT`, `LANGUAGE_RESULT`, `JSON_RESULT` containing test statuses (`scripts/ci/codeql_integration_summary.py:94`)

## Outputs — required
- Appended markdown table with status emojis written to the file pointed to by `$GITHUB_STEP_SUMMARY` (`scripts/ci/codeql_integration_summary.py:97-98`)
- Console messages: `"All integration tests passed!"` or `"ERROR: One or more integration tests failed"` (`scripts/ci/codeql_integration_summary.py:101, 104`)
- Exit code: 0 on all passed/skipped, 1 on any failure, 2 on usage error when `$GITHUB_STEP_SUMMARY` is unset (`scripts/ci/codeql_integration_summary.py:20-22`)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `GITHUB_STEP_SUMMARY` — scripts/ci/codeql_integration_summary.py:2 — used here
- `CodeQL` — scripts/ci/codeql_integration_summary.py:2 — used here
- `INSTALL_RESULT` — scripts/ci/codeql_integration_summary.py:4 — used here
- `LANGUAGE_RESULT` — scripts/ci/codeql_integration_summary.py:4 — used here
- `JSON_RESULT` — scripts/ci/codeql_integration_summary.py:5 — used here
- `ADR-035` — scripts/ci/codeql_integration_summary.py:9 — used here
- `EXIT_OK` — scripts/ci/codeql_integration_summary.py:20 — defined here
- `EXIT_FAILED` — scripts/ci/codeql_integration_summary.py:21 — defined here
- `EXIT_USAGE` — scripts/ci/codeql_integration_summary.py:22 — defined here
- `build_summary` — scripts/ci/codeql_integration_summary.py:52 — defined here

## Structure
- `EXIT_OK`, `EXIT_FAILED`, `EXIT_USAGE`
- `_TESTS`
- `_status_emoji(status: str) -> str`
- `build_summary(results: dict[str, str]) -> tuple[str, bool]`
- `main(argv: list[str] | None = None) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/codeql_integration_summary.py`, language: `python`, lines: 110
- documented invocation:
  > "Write the CodeQL integration test summary to GITHUB_STEP_SUMMARY." — scripts/ci/codeql_integration_summary.py:2
- **executed:** yes
- actual command run: `GITHUB_STEP_SUMMARY=/tmp/step_summary.md INSTALL_RESULT=success LANGUAGE_RESULT=success JSON_RESULT=success python3 sources/rjm/scripts/ci/codeql_integration_summary.py`
- abridged stdout:
```
All integration tests passed!
```
- **actual exit code:** 0
- documented exit codes:
  > "0  - All tests passed or skipped" — scripts/ci/codeql_integration_summary.py:10
  > "1  - One or more tests failed" — scripts/ci/codeql_integration_summary.py:11
  > "2  - Usage error (GITHUB_STEP_SUMMARY not set)" — scripts/ci/codeql_integration_summary.py:12
  vs. actual exit paths in code:
  `scripts/ci/codeql_integration_summary.py:92` (`return EXIT_USAGE` [2])
  `scripts/ci/codeql_integration_summary.py:102` (`return EXIT_OK` [0])
  `scripts/ci/codeql_integration_summary.py:105` (`return EXIT_FAILED` [1])
  called via `sys.exit(main())` on line 109.
- for validators/gates: can exit non-zero (exits 1 if any test failed, 2 if GITHUB_STEP_SUMMARY is missing). On default branch without env vars: exits 2.
- does the output match what the documentation claims: yes, generates markdown summary table and exits according to ADR-035 contract.

## Defects — required
- orphan — scripts/ci/codeql_integration_summary.py:1 — not invoked by any in-scope file; invoked only by out-of-scope .github/workflows/test-codeql-integration.yml:178.

## Observations
Illustrates ADR-006 extraction pattern replacing complex bash scripting in GitHub Actions YAML with a testable Python helper that processes environment variables and writes step summaries.

## Context cost
2983 bytes (~750 tokens).
