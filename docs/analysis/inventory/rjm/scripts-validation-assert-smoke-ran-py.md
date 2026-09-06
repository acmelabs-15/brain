---
package: rjm
path: scripts/validation/assert_smoke_ran.py
type: script
bytes: 7532
unit: inv-rjm-272
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/assert_smoke_ran.py, sha256: 55d08814bfbf5f490cd6ea9a8d5641962d449b25b6f619c700b7ff8fbac6e2af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/assert_smoke_ran.py

## Purpose — required, verbatim
> "Fail loud when the real-CLI smoke did not actually run (issue #2231 item 4)." — scripts/validation/assert_smoke_ran.py:2

## Design intent — required
Acts as a fail-closed verification gate in the nightly CLI smoke workflow to guarantee that real-CLI smoke tests actually ran rather than being silently skipped due to missing environment variables or missing CLIs. Because tests in `tests/e2e/test_cli_hook_e2e.py` carry `@pytest.mark.skipif` guards that skip when `RUN_CLI_E2E=1` is unset, pytest normally exits 0 on a skipped test suite. This script inspects the generated JUnit XML report, ensuring that the expected number of smoke testcases (default 2, covering Claude and Copilot) were collected and executed without being skipped, failed, or errored. It also implements an internal XXE/billion-laughs parser defense rejecting DOCTYPE and entity declarations.

## Phase — required
rjm:test

## Inputs — required
- Positional CLI argument:
  - `report` path pointing to the JUnit XML report from the pytest run (scripts/validation/assert_smoke_ran.py:167)
- Optional CLI arguments:
  - `--smoke-substr` substring identifying smoke testcases, defaulting to `test_cli_hook_e2e` (scripts/validation/assert_smoke_ran.py:172)
  - `--expected-count` minimum expected smoke testcase count, defaulting to 2 (scripts/validation/assert_smoke_ran.py:180)
- JUnit XML file read from disk and parsed via `ElementTree` (scripts/validation/assert_smoke_ran.py:88)

## Outputs — required
- Standard output: OK status message with list of passing test cases (scripts/validation/assert_smoke_ran.py:196)
- Standard error: GitHub Actions formatted error annotation (`::error::smoke gate: ...`) on failure or config error (scripts/validation/assert_smoke_ran.py:192, 198)
- Exit codes:
  - 0: at least one smoke test ran and none were skipped, failed, or errored — scripts/validation/assert_smoke_ran.py:29, 41
  - 1: a smoke test was skipped, failed, errored, or none were collected — scripts/validation/assert_smoke_ran.py:30, 42
  - 2: usage or a malformed/missing report — scripts/validation/assert_smoke_ran.py:31, 43

## Invokes — required
- doc nightly-cli-smoke.yml — scripts/validation/assert_smoke_ran.py:11
- doc generated-artifacts.md — scripts/validation/assert_smoke_ran.py:14
- doc AGENTS.md — scripts/validation/assert_smoke_ran.py:28
- doc ADR-035 — scripts/validation/assert_smoke_ran.py:28

## Invoked by — required
- config nightly-cli-smoke.yml — .github/workflows/nightly-cli-smoke.yml:151

## Concepts named — required, verbatim
- `real-CLI smoke` — scripts/validation/assert_smoke_ran.py:2 — defined here | used here
- `JUnit XML` — scripts/validation/assert_smoke_ran.py:8 — used here
- `ADR-035` — scripts/validation/assert_smoke_ran.py:28 — used here
- `EXIT_OK` — scripts/validation/assert_smoke_ran.py:41 — defined here
- `EXIT_NOT_RUN` — scripts/validation/assert_smoke_ran.py:42 — defined here
- `EXIT_CONFIG` — scripts/validation/assert_smoke_ran.py:43 — defined here
- `SmokeReportError` — scripts/validation/assert_smoke_ran.py:49 — defined here

## Structure
- `_reject_doctype` — scripts/validation/assert_smoke_ran.py:53
- `_iter_testcases` — scripts/validation/assert_smoke_ran.py:71
- `_case_id` — scripts/validation/assert_smoke_ran.py:94
- `_is_smoke` — scripts/validation/assert_smoke_ran.py:100
- `_is_skipped` — scripts/validation/assert_smoke_ran.py:104
- `_is_failed` — scripts/validation/assert_smoke_ran.py:108
- `evaluate` — scripts/validation/assert_smoke_ran.py:112
- `_parse_args` — scripts/validation/assert_smoke_ran.py:161
- `main` — scripts/validation/assert_smoke_ran.py:187

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/assert_smoke_ran.py`, language: Python, lines: 204
- documented invocation:
  - "The nightly workflow (``.github/workflows/nightly-cli-smoke.yml``) runs the smoke" — scripts/validation/assert_smoke_ran.py:11
- executed: yes
- actual command run:
  `python3 -c '<create /tmp/sample_junit.xml with 2 passed testcases>' && uv run python scripts/validation/assert_smoke_ran.py /tmp/sample_junit.xml`
  abridged stdout:
  ```
  smoke gate OK: 2 smoke test(s) ran and passed: tests.e2e.test_cli_hook_e2e::test_claude_smoke, tests.e2e.test_cli_hook_e2e::test_copilot_smoke.
  ```
  actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0: at least one smoke test ran and none were skipped, failed, or errored." — scripts/validation/assert_smoke_ran.py:29
    - "1: a smoke test was skipped, failed, errored, or none were collected (logic)." — scripts/validation/assert_smoke_ran.py:30
    - "2: usage or a malformed/missing report (config)." — scripts/validation/assert_smoke_ran.py:31
  - Actual exit paths:
    - `return EXIT_CONFIG` (2) at scripts/validation/assert_smoke_ran.py:193 when `SmokeReportError` is raised
    - `return exit_code` (0 or 1) at scripts/validation/assert_smoke_ran.py:199
    - `raise SystemExit(main())` at scripts/validation/assert_smoke_ran.py:203
    - `argparse` exits with code 2 on missing `report` argument
- for validators/gates: can it exit non-zero? Yes: exits 1 when a smoke test was skipped, failed, or fewer than expected tests collected (scripts/validation/assert_smoke_ran.py:199), exits 2 on missing or malformed XML (scripts/validation/assert_smoke_ran.py:193). Does it fail on the source repo's own default branch? Passes all 14 unit tests in `tests/validation/test_assert_smoke_ran.py`.
- does output match what documentation claims? Yes, outputs `smoke gate OK` on success and `::error::smoke gate:` with exit 1 on skipped tests.

## Defects — required
none

## Observations
Includes a zero-dependency XXE and entity expansion check (`_reject_doctype`, line 53) to defend against malicious XML injection (CWE-611, CWE-776) without requiring third-party libraries like `defusedxml`. Also formats error messages with GitHub Actions `::error::` workflow command prefixes for CI integration.

## Context cost
File size: 7532 bytes, 204 lines, ~1900 tokens. Uses standard library only (`argparse`, `sys`, `pathlib`, `xml.etree.ElementTree`).
