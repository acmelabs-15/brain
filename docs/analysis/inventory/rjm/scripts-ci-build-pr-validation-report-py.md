---
package: rjm
path: scripts/ci/build_pr_validation_report.py
type: script
bytes: 4846
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/build_pr_validation_report.py

## Purpose — required, verbatim
> "Build the PR validation report and write workflow outputs." — scripts/ci/build_pr_validation_report.py:2

## Design intent — required
Synthesizes individual PR validation check results (diff-description match, bypass label usage, issue linking keywords, template compliance) into an aggregated markdown report artifact (`pr-validation-report.md`) and emits an overall workflow status (`PASS`, `FAIL`, `ERROR`, `BYPASSED`) to `GITHUB_OUTPUT`. Without it, PR validation results would remain fragmented across individual CI step logs with no unified summary for human reviewers.

## Phase — required
none

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — path to workflow output file — scripts/ci/build_pr_validation_report.py:15
- Environment variable `DESCRIPTION_RESULT` — diff validation outcome (`"PASS"`, `"FAIL"`, or default `"ERROR"`) — scripts/ci/build_pr_validation_report.py:29
- Environment variable `BYPASS_USED` — bypass status boolean string — scripts/ci/build_pr_validation_report.py:30
- Environment variable `BYPASS_LABEL` — name of bypass label if applied — scripts/ci/build_pr_validation_report.py:31
- Environment variable `BYPASS_COUNT` — count of bypassed critical files — scripts/ci/build_pr_validation_report.py:32
- Environment variable `KEYWORDS_STATUS` — issue linking check status (`"WARN"` or `"PASS"`) — scripts/ci/build_pr_validation_report.py:33
- Environment variable `TEMPLATE_STATUS` — PR template check status — scripts/ci/build_pr_validation_report.py:34
- Environment variable `TEMPLATE_MESSAGE` — descriptive warning message for template check — scripts/ci/build_pr_validation_report.py:35
- Environment variable `GITHUB_REPOSITORY` — target repository (`owner/repo`) — scripts/ci/build_pr_validation_report.py:36

## Outputs — required
- Markdown validation report written to `pr-validation-report.md` in the current working directory — scripts/ci/build_pr_validation_report.py:11,136
- Appends overall_status={status} to output file via `_append_output` — scripts/ci/build_pr_validation_report.py:22

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CONFIG_ERROR` — scripts/ci/build_pr_validation_report.py:10 — defined here
- `REPORT_PATH` — scripts/ci/build_pr_validation_report.py:11 — defined here
- `GITHUB_OUTPUT` — scripts/ci/build_pr_validation_report.py:15 — used here
- `_append_output` — scripts/ci/build_pr_validation_report.py:22 — defined here
- `_status_inputs` — scripts/ci/build_pr_validation_report.py:27 — defined here
- `_overall_status` — scripts/ci/build_pr_validation_report.py:40 — defined here
- `_alert_type` — scripts/ci/build_pr_validation_report.py:66 — defined here
- `_description_status` — scripts/ci/build_pr_validation_report.py:76 — defined here
- `build_report` — scripts/ci/build_pr_validation_report.py:82 — defined here
- `PR-VALIDATION` — scripts/ci/build_pr_validation_report.py:86 — used here
- `PR Validation Report` — scripts/ci/build_pr_validation_report.py:88 — defined here
- `Description Validation` — scripts/ci/build_pr_validation_report.py:93 — used here
- `PR Standards` — scripts/ci/build_pr_validation_report.py:99 — used here
- `Blocking Issues` — scripts/ci/build_pr_validation_report.py:107 — used here
- `Warnings` — scripts/ci/build_pr_validation_report.py:110 — used here
- `PR Validation` — scripts/ci/build_pr_validation_report.py:118 — used here
- `main` — scripts/ci/build_pr_validation_report.py:126 — defined here

## Structure
- Module docstring and configuration constants (lines 1-12)
- `_resolve_output_path` and `_append_output` helpers (lines 14-25)
- `_status_inputs` environment parsing (lines 27-38)
- `_overall_status` status evaluation and aggregation (lines 40-64)
- `_alert_type` and `_description_status` presentation formatters (lines 66-80)
- `build_report` Markdown construction (lines 82-123)
- `main` orchestration and output publishing (lines 126-139)
- `__main__` caller (lines 141-143)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/build_pr_validation_report.py`
- **language:** Python 3
- **lines:** 143
- **documented invocation:**
  > "output_path = os.environ.get(\"GITHUB_OUTPUT\")" — scripts/ci/build_pr_validation_report.py:15
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/build_pr_validation_report.py`
- **stdout:**
  ```text
  ::error::GITHUB_OUTPUT is required
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "CONFIG_ERROR = 2" — scripts/ci/build_pr_validation_report.py:10`
- **actual exit paths:**
  - `return CONFIG_ERROR` — scripts/ci/build_pr_validation_report.py:129
  - `return CONFIG_ERROR` — scripts/ci/build_pr_validation_report.py:134
  - `return 0` — scripts/ci/build_pr_validation_report.py:138
  - `raise SystemExit(main())` — scripts/ci/build_pr_validation_report.py:142
- **for validators/gates:** Can exit non-zero (exits 2 when unexpected CLI arguments are provided or `GITHUB_OUTPUT` is unset). On default branch without arguments, exits 2 (`::error::GITHUB_OUTPUT is required`). When executed with valid environment in temporary directory, exits 0 and writes `pr-validation-report.md`.
- **output matches documentation:** yes, creates formatted markdown validation report and emits overall_status output.

## Defects — required
none

## Observations
Validates and resolves output path configuration before writing the report to disk (lines 130-132) to prevent leaving orphaned report artifacts on failed executions. Uses GitHub Markdown alert callouts (`TIP`, `NOTE`, `WARNING`, `CAUTION`) according to the overall validation severity.

## Context cost
4846 bytes, ~1200 tokens. Loads no other internal files. Total context cost: 4846 bytes.
