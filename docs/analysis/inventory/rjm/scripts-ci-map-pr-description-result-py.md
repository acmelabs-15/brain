---
package: rjm
path: scripts/ci/map_pr_description_result.py
type: script
bytes: 1377
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/map_pr_description_result.py, sha256: d66a421358b9d32edb77d5b838d4121c0c70d7e0ed27d436e524b8acafb46fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/map_pr_description_result.py

## Purpose — required, verbatim
> "Run PR description validation and map its exit code for workflow outputs." — scripts/ci/map_pr_description_result.py:2

## Design intent — required
Acts as a CI adapter for `scripts/validation/pr_description.py`, executing the validation check for a given pull request and mapping its exit code (0 -> PASS, 1 -> FAIL, other -> ERROR) to the `validation_result` key in `GITHUB_OUTPUT` so downstream workflow steps can conditionally branch without failing immediately.

## Phase — required
rjm:review

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/map_pr_description_result.py:15
- Environment variable `PR_NUMBER` — scripts/ci/map_pr_description_result.py:36

## Outputs — required
- Step output `validation_result` — scripts/ci/map_pr_description_result.py:49

## Invokes — required
- script scripts/validation/pr_description.py — scripts/ci/map_pr_description_result.py:42

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CONFIG_ERROR` — scripts/ci/map_pr_description_result.py:11 — defined here
- `_append_output` — scripts/ci/map_pr_description_result.py:14 — defined here
- `_status_for_exit_code` — scripts/ci/map_pr_description_result.py:24 — defined here
- `main` — scripts/ci/map_pr_description_result.py:32 — defined here

## Structure
none (python script; functions: `_append_output`, `_status_for_exit_code`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/map_pr_description_result.py`, language: Python 3, lines: 54
- documented invocation:
  - "Run PR description validation and map its exit code for workflow outputs." — scripts/ci/map_pr_description_result.py:2
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/map_pr_description_result.py --help`
  abridged stdout:
  ```
  Validating PR description...
  ::error::GITHUB_OUTPUT is required
  ```
  **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented exit codes: `CONFIG_ERROR = 2` (scripts/ci/map_pr_description_result.py:11).
  Actual exit paths:
  - line 18: `return CONFIG_ERROR` (2) when `GITHUB_OUTPUT` is missing
  - line 21: `return 0` on successfully writing mapped result
  - line 35: `return CONFIG_ERROR` (2) when `argv` is provided (unreachable from CLI entry point due to defect)
  - line 49: `return _append_output(...)`
  - line 53: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? yes (exits 2 when GITHUB_OUTPUT is missing). Does it fail on the source repo's own default branch? fails with exit code 2 when GITHUB_OUTPUT is not set.
- does the output match what the documentation claims? yes, invokes validator and maps exit codes to status strings in GITHUB_OUTPUT.

## Defects — required
- script-bug · scripts/ci/map_pr_description_result.py:53 · main() accepts argv: list[str] | None = None to check for unexpected command-line arguments, but the entry point calls raise SystemExit(main()) without passing sys.argv[1:], causing command-line arguments to be silently ignored.
- orphan · scripts/ci/map_pr_description_result.py:1 · Not invoked by any in-scope manifest file; called by out-of-scope .github/workflows/pr-validation.yml:108.

## Observations
- Isolates downstream workflow jobs from validation check crashes by mapping returncodes to status strings (`PASS`, `FAIL`, `ERROR`), preventing GitHub Actions workflow termination when validation fails.

## Context cost
1377 bytes (~344 tokens) plus `scripts/validation/pr_description.py` (57443 bytes, ~14360 tokens) = ~58820 bytes (~14705 tokens).
