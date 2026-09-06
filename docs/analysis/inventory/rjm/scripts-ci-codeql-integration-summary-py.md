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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/codeql_integration_summary.py

## Purpose — required, verbatim
> "Write the CodeQL integration test summary to GITHUB_STEP_SUMMARY." — scripts/ci/codeql_integration_summary.py:2

## Design intent — required
Lightweight CI reporting utility that replaces a brittle Bash associative-array block in `.github/workflows/test-codeql-integration.yml`. Reads the outcome of upstream CodeQL integration test matrix jobs (install/config, language scans, JSON output) from environment variables, formats an informative Markdown table with status indicators and local usage examples, appends the result to `$GITHUB_STEP_SUMMARY`, and exits with a standardized ADR-035 exit code (0 if all tests passed or skipped, 1 if any test failed, 2 if configuration is missing).

## Phase — required
rjm:test

## Inputs — required
- Environment variables:
  - `GITHUB_STEP_SUMMARY`: path to GitHub step summary markdown file — scripts/ci/codeql_integration_summary.py:89
  - `INSTALL_RESULT`: result of CodeQL install and config test (`"success"`, `"skipped"`, or failure) — scripts/ci/codeql_integration_summary.py:28
  - `LANGUAGE_RESULT`: result of CodeQL language scans (`"success"`, `"skipped"`, or failure) — scripts/ci/codeql_integration_summary.py:33
  - `JSON_RESULT`: result of CodeQL JSON output test (`"success"`, `"skipped"`, or failure) — scripts/ci/codeql_integration_summary.py:38

## Outputs — required
- Markdown summary appended to `$GITHUB_STEP_SUMMARY` file — scripts/ci/codeql_integration_summary.py:97-98
- Console stdout/stderr status messages:
  - `All integration tests passed!` — scripts/ci/codeql_integration_summary.py:101
  - `ERROR: One or more integration tests failed` — scripts/ci/codeql_integration_summary.py:104
  - `ERROR: GITHUB_STEP_SUMMARY is not set` — scripts/ci/codeql_integration_summary.py:91
- Process exit code: 0 (EXIT_OK), 1 (EXIT_FAILED), 2 (EXIT_USAGE) — scripts/ci/codeql_integration_summary.py:20-22

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CodeQL integration test summary` — scripts/ci/codeql_integration_summary.py:2 — defined here
- `GITHUB_STEP_SUMMARY` — scripts/ci/codeql_integration_summary.py:2 — used here
- `ADR-035` — scripts/ci/codeql_integration_summary.py:9 — used here
- `EXIT_OK` — scripts/ci/codeql_integration_summary.py:20 — defined here
- `EXIT_FAILED` — scripts/ci/codeql_integration_summary.py:21 — defined here
- `EXIT_USAGE` — scripts/ci/codeql_integration_summary.py:22 — defined here
- `INSTALL_RESULT` — scripts/ci/codeql_integration_summary.py:28 — used here
- `LANGUAGE_RESULT` — scripts/ci/codeql_integration_summary.py:33 — used here
- `JSON_RESULT` — scripts/ci/codeql_integration_summary.py:38 — used here
- `CodeQL Integration Test Results` — scripts/ci/codeql_integration_summary.py:66 — defined here
- `CONTRIBUTING.md` — scripts/ci/codeql_integration_summary.py:78 — used here

## Structure
- Module docstring and exit code contract (lines 1-13)
- Imports and exit code constants (lines 15-22)
- `_TESTS` definition table (lines 24-41)
- `_status_emoji` status mapping helper (lines 44-49)
- `build_summary` Markdown builder function (lines 52-85)
- `main` entrypoint execution (lines 88-106)
- Entrypoint invocation (lines 108-110)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/codeql_integration_summary.py`
- **language:** Python 3
- **lines:** 110
- **documented invocation:**
  > "Write the CodeQL integration test summary to GITHUB_STEP_SUMMARY." — scripts/ci/codeql_integration_summary.py:2
- **executed:** yes
- **command:** `GITHUB_STEP_SUMMARY=/tmp/test_codeql_summary.md INSTALL_RESULT=success LANGUAGE_RESULT=success JSON_RESULT=success python3 sources/rjm/scripts/ci/codeql_integration_summary.py`
- **stdout:**
  ```text
  All integration tests passed!
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - > "0  - All tests passed or skipped" — scripts/ci/codeql_integration_summary.py:10
  - > "1  - One or more tests failed" — scripts/ci/codeql_integration_summary.py:11
  - > "2  - Usage error (GITHUB_STEP_SUMMARY not set)" — scripts/ci/codeql_integration_summary.py:12
- **actual exit paths:**
  - `return EXIT_USAGE` — scripts/ci/codeql_integration_summary.py:92
  - `return EXIT_OK` — scripts/ci/codeql_integration_summary.py:102
  - `return EXIT_FAILED` — scripts/ci/codeql_integration_summary.py:105
  - `sys.exit(main())` — scripts/ci/codeql_integration_summary.py:109
- **for validators/gates:** Can exit non-zero: exits 1 when any tracked test result is not "success" or "skipped", and 2 when `GITHUB_STEP_SUMMARY` environment variable is not defined. When run without environment variables, exits 2 (`ERROR: GITHUB_STEP_SUMMARY is not set`). With required environment variables, exits 0.
- **output matches documentation:** yes, creates formatted Markdown table and writes to summary file.

## Defects — required
none

## Observations
Treats `skipped` as passing (`status in ("success", "skipped")` at line 61), ensuring optional or matrix-skipped language tests do not fail the summary step. Documents CLI usage patterns in the summary table itself (`install_codeql.py + test_codeql_config.py`, `invoke_codeql_scan.py --languages <lang>`, `invoke_codeql_scan.py --format json`) so developer logs double as actionable documentation.

## Context cost
2983 bytes, ~746 tokens. Imports only standard library modules `os` and `sys`. Total context cost: 2983 bytes.
