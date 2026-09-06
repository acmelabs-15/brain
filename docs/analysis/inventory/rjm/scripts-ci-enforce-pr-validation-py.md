---
package: rjm
path: scripts/ci/enforce_pr_validation.py
type: script
bytes: 1620
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/enforce_pr_validation.py, sha256: 98055348aecaa5267abc1dc2013bb1698ab930049bacdeebcae3166c0ee0d44d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/enforce_pr_validation.py

## Purpose — required, verbatim
> "Enforce blocking PR validation results." — scripts/ci/enforce_pr_validation.py:2

## Design intent — required
Acts as the final enforcement gate for pull request validation in CI, checking the aggregated `OVERALL_STATUS` environment variable. If any prior PR validation step reported `"FAIL"` or `"ERROR"`, this script exits with status 1 (`LOGIC_ERROR`), causing the workflow run to fail. Following ADR-099 and issue #5233, commit-count limits are treated as advisory and do not block here.

## Phase — required
none

## Inputs — required
- Environment variable `OVERALL_STATUS` — scripts/ci/enforce_pr_validation.py:34

## Outputs — required
- Pass confirmation message printed to stdout — scripts/ci/enforce_pr_validation.py:38
- Failure error annotation printed to stderr — scripts/ci/enforce_pr_validation.py:36

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `commit-limit-bypass` — scripts/ci/enforce_pr_validation.py:4 — used here
- `pr_commit_count.py` — scripts/ci/enforce_pr_validation.py:6 — used here
- `check_pr_bypass_label.py` — scripts/ci/enforce_pr_validation.py:11 — used here
- `pr-validation.yml` — scripts/ci/enforce_pr_validation.py:16 — used here
- `ADR-099` — scripts/ci/enforce_pr_validation.py:17 — used here
- `LOGIC_ERROR` — scripts/ci/enforce_pr_validation.py:27 — defined here
- `main` — scripts/ci/enforce_pr_validation.py:30 — defined here

## Structure
- Module docstring describing the removal of commit-count blocking logic per ADR-099 (lines 2-20)
- Constant `LOGIC_ERROR = 1` (line 27)
- Entrypoint `main` parsing arguments and evaluating `OVERALL_STATUS` (lines 30-39)
- Script invocation block (lines 42-44)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/enforce_pr_validation.py`
- **language:** Python 3
- **lines:** 44
- **documented invocation:** none explicit (invoked in CI as `python3 scripts/ci/enforce_pr_validation.py`)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/enforce_pr_validation.py`
- **stdout:**
  ```text
  ✓ PR validation passed
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `> "return 2" — scripts/ci/enforce_pr_validation.py:33`
  - `> "return LOGIC_ERROR" — scripts/ci/enforce_pr_validation.py:37`
  - `> "return 0" — scripts/ci/enforce_pr_validation.py:39`
- **actual exit paths:**
  - `return 2` — scripts/ci/enforce_pr_validation.py:33
  - `return LOGIC_ERROR` — scripts/ci/enforce_pr_validation.py:37
  - `return 0` — scripts/ci/enforce_pr_validation.py:39
  - `raise SystemExit(main())` — scripts/ci/enforce_pr_validation.py:43
- **for validators/gates:** Pull request validation gate. Can exit non-zero: exits 1 (`LOGIC_ERROR`) when `OVERALL_STATUS` is `"FAIL"` or `"ERROR"`, and exits 2 if unexpected command line arguments are provided. Exits 0 when `OVERALL_STATUS` is clean or unset.
- **output matches documentation:** yes, prints `✓ PR validation passed` and returns 0 when no failure is signaled.

## Defects — required
- orphan — scripts/ci/enforce_pr_validation.py:16 — not invoked by any in-scope file; executed by .github/workflows/pr-validation.yml CI workflow

## Observations
Documents historical architectural context regarding issue #5233 and ADR-099: local pre-push checks could not query `gh api` inside a sandboxed environment without tokens, leading to advisory-only status for commit counts and eliminating artificial bypass blocks.

## Context cost
1,620 bytes source (~405 tokens).
