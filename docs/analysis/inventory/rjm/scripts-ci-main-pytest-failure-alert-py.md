---
package: rjm
path: scripts/ci/main_pytest_failure_alert.py
type: script
bytes: 4332
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/main_pytest_failure_alert.py, sha256: bb367255b46c592ece4b2e1018fb1ad9befd29cad8627942838779241c92984a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/main_pytest_failure_alert.py

## Purpose — required, verbatim
> "Create or update an issue when Python Tests fails on main." — scripts/ci/main_pytest_failure_alert.py:2

## Design intent — required
Monitors the outcome of CI jobs in the Python Tests workflow on `main`. Parses `NEEDS_JSON` to detect failed, cancelled, or timed-out jobs; if any failed, queries GitHub issues via `gh api search/issues` to either create a new tracking issue or comment on an existing open failure issue to prevent duplicate alert noise.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `NEEDS_JSON` — scripts/ci/main_pytest_failure_alert.py:118
- Environment variable `GITHUB_REPOSITORY` — scripts/ci/main_pytest_failure_alert.py:122
- Environment variable `GITHUB_RUN_ID` — scripts/ci/main_pytest_failure_alert.py:122
- Environment variable `GITHUB_SHA` — scripts/ci/main_pytest_failure_alert.py:63
- Environment variable `GITHUB_SERVER_URL` — scripts/ci/main_pytest_failure_alert.py:60

## Outputs — required
- GitHub issue or issue comment generated via `_issue_body` — scripts/ci/main_pytest_failure_alert.py:58

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Python Tests` — scripts/ci/main_pytest_failure_alert.py:2 — used here
- `_failed_needs` — scripts/ci/main_pytest_failure_alert.py:13 — defined here
- `_run_gh` — scripts/ci/main_pytest_failure_alert.py:27 — defined here
- `_find_existing_issue` — scripts/ci/main_pytest_failure_alert.py:42 — defined here
- `_issue_body` — scripts/ci/main_pytest_failure_alert.py:58 — defined here
- `_notify` — scripts/ci/main_pytest_failure_alert.py:82 — defined here
- `run` — scripts/ci/main_pytest_failure_alert.py:117 — defined here
- `main` — scripts/ci/main_pytest_failure_alert.py:135 — defined here

## Structure
none (python script; functions: `_failed_needs`, `_run_gh`, `_find_existing_issue`, `_issue_body`, `_notify`, `run`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/main_pytest_failure_alert.py`, language: Python 3, lines: 141
- documented invocation:
  - "Create or update an issue when Python Tests fails on main." — scripts/ci/main_pytest_failure_alert.py:2
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/main_pytest_failure_alert.py`
  abridged stdout:
  ```
  No failed Python Tests jobs on main.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none in script docstring.
  Actual exit paths:
  - line 121: `return 0` when no failed jobs found in `NEEDS_JSON`
  - line 125: `return 2` when required env variables (`GITHUB_REPOSITORY`, `GITHUB_RUN_ID`) are missing
  - line 130: `return 3` when notification fails (`RuntimeError`, `ValueError`, `JSONDecodeError`)
  - line 132: `return 0` when alert issue or comment is successfully posted
  - line 140: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? yes (exits 2 on missing required env variables, 3 on notification failure). Does it fail on the source repo's own default branch? no, exits 0 when run without failures in NEEDS_JSON.
- does the output match what the documentation claims? yes, parses job status and exits 0 cleanly when no failed jobs are detected.

## Defects — required
- orphan · scripts/ci/main_pytest_failure_alert.py:1 · Not invoked by any in-scope manifest file; called by out-of-scope .github/workflows/pytest.yml:801.

## Observations
- De-duplicates alerts by querying existing open issues with title `Python Tests failed on main` using `gh api search/issues` (lines 43-55), converting subsequent failures on main into issue comments rather than opening duplicate issues.

## Context cost
4332 bytes (~1083 tokens). Python standard library only (`json`, `os`, `subprocess`, `sys`, `datetime`).
