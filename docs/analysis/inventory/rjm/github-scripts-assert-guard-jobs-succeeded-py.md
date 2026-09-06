---
package: rjm
path: .github/scripts/assert_guard_jobs_succeeded.py
type: script
bytes: 1928
unit: inv-rjm-182
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/assert_guard_jobs_succeeded.py, sha256: 75c2b7f363d94b50933a989bc3eed9cdfaab33e79605ee26608006151b421120}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/assert_guard_jobs_succeeded.py

## Purpose — required, verbatim
> "Fail the aggregate guard status unless every upstream job succeeded." — .github/scripts/assert_guard_jobs_succeeded.py:2

## Design intent — required
CI gate script that enforces all-or-nothing completion of upstream plugin hook verification jobs. It parses GitHub Actions `needs` context serialized as JSON via the `NEEDS_JSON` environment variable, validating that every upstream job completed with status `success`. By strictly rejecting `skipped` or `cancelled` jobs and refusing empty or malformed payloads, it eliminates "false-green" CI status checks where a required guard job appears to pass because dependent steps were silently skipped.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `NEEDS_JSON`: serialized JSON object of upstream GitHub Actions job results ("NEEDS_JSON" — .github/scripts/assert_guard_jobs_succeeded.py:35)

## Outputs — required
- Console messages to stdout / stderr:
  - Error message "NEEDS_JSON is empty; refusing to report success" — .github/scripts/assert_guard_jobs_succeeded.py:37
  - Error message "Plugin hook guard did not fully pass:" — .github/scripts/assert_guard_jobs_succeeded.py:50
  - Success message "All {len(needs)} plugin hook guard jobs succeeded." — .github/scripts/assert_guard_jobs_succeeded.py:55
- Exit code 0 if all upstream jobs have status `success` (.github/scripts/assert_guard_jobs_succeeded.py:56)
- Exit code 1 if any job failed or environment was invalid (.github/scripts/assert_guard_jobs_succeeded.py:38, 43, 46, 53)

## Invokes — required
none

## Invoked by — required
- workflow .github/workflows/installed-plugin-hook-guard.yml — .github/workflows/installed-plugin-hook-guard.yml:166
- test tests/test_plugin_hook_guard_aggregate.py — tests/test_plugin_hook_guard_aggregate.py:26

## Concepts named — required, verbatim
- `aggregate guard status` — .github/scripts/assert_guard_jobs_succeeded.py:2 — defined here
- `ADR-006` — .github/scripts/assert_guard_jobs_succeeded.py:4 — used here
- `required status check` — .github/scripts/assert_guard_jobs_succeeded.py:6 — used here
- `Plugin hook guard` — .github/scripts/assert_guard_jobs_succeeded.py:50 — used here

## Structure
none (python script; functions and constants: _ACCEPTABLE, evaluate, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/assert_guard_jobs_succeeded.py`, language: Python 3, lines: 61
- documented invocation:
  - "python3 .github/scripts/assert_guard_jobs_succeeded.py" — .github/workflows/installed-plugin-hook-guard.yml:166
- **executed:** yes
- actual command run: `python3 .github/scripts/assert_guard_jobs_succeeded.py`
- abridged stdout:
  ```
  NEEDS_JSON is empty; refusing to report success
  ```
- **actual exit code**: 1
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - "Fail the aggregate guard status unless every upstream job succeeded." — .github/scripts/assert_guard_jobs_succeeded.py:2
  Actual exit paths in code:
  - `raise SystemExit(main())` — .github/scripts/assert_guard_jobs_succeeded.py:60
  - `return 1` (.github/scripts/assert_guard_jobs_succeeded.py:38) when `NEEDS_JSON` is empty
  - `return 1` (.github/scripts/assert_guard_jobs_succeeded.py:43) when `NEEDS_JSON` is not valid JSON
  - `return 1` (.github/scripts/assert_guard_jobs_succeeded.py:46) when `NEEDS_JSON` is not an object/dict
  - `return 1` (.github/scripts/assert_guard_jobs_succeeded.py:53) when any job did not succeed
  - `return 0` (.github/scripts/assert_guard_jobs_succeeded.py:56) when all upstream jobs succeeded
- for validators/gates: can it exit non-zero? Yes, returns 1 on empty/invalid env or non-success job. Does it fail on source repo's default branch? When run with mock successful needs (`NEEDS_JSON='{"job1": {"result": "success"}}'`), exits 0. Without `NEEDS_JSON`, exits 1.
- does output match what documentation claims? Yes, strictly enforces that every upstream job succeeded.

## Defects — required
none

## Observations
- Pure Python standard library implementation (`json`, `os`, `sys`).
- Keeps aggregation logic out of workflow YAML per ADR-006, ensuring local testability with pytest.

## Context cost
1928 bytes (~482 tokens). Self-contained Python script.
