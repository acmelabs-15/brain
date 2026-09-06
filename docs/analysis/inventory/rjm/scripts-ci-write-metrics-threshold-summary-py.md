---
package: rjm
path: scripts/ci/write_metrics_threshold_summary.py
type: script
bytes: 2126
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/write_metrics_threshold_summary.py, sha256: a8e2cef20436ca451575a9caa02a73a96952d257117003b3d234439646f1ca46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/write_metrics_threshold_summary.py

## Purpose — required, verbatim
> "Write the metrics threshold summary table to GITHUB_STEP_SUMMARY." — scripts/ci/write_metrics_threshold_summary.py:2

## Design intent — required
CI metrics reporter replacing an inline workflow block in `agent-metrics.yml`. It parses numerical coverage (`CHECK_COVERAGE`) and infrastructure review rate (`CHECK_INFRA_RATE`) from environment variables, verifies them against hardcoded threshold targets (50.0% coverage, 100.0% infrastructure rate), and formats a Markdown comparison table with checkmark or warning status icons.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `CHECK_COVERAGE` — scripts/ci/write_metrics_threshold_summary.py:44
- Environment variable `CHECK_INFRA_RATE` — scripts/ci/write_metrics_threshold_summary.py:45
- Destination file path via environment variable `GITHUB_STEP_SUMMARY` — scripts/ci/write_metrics_threshold_summary.py:60

## Outputs — required
- Threshold results table formatted in Markdown appended to summary file or printed to stdout — scripts/ci/write_metrics_threshold_summary.py:63,65
- Error messages to stderr when variables are missing or non-numeric — scripts/ci/write_metrics_threshold_summary.py:48,55
- Process exit code: 0 on success, 1 on missing or invalid environment variables — scripts/ci/write_metrics_threshold_summary.py:9-10

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CHECK_COVERAGE` — scripts/ci/write_metrics_threshold_summary.py:4 — used here
- `CHECK_INFRA_RATE` — scripts/ci/write_metrics_threshold_summary.py:4 — used here
- `agent-metrics.yml` — scripts/ci/write_metrics_threshold_summary.py:6 — used here
- `ADR-035` — scripts/ci/write_metrics_threshold_summary.py:8 — used here
- `EXIT_OK` — scripts/ci/write_metrics_threshold_summary.py:19 — defined here
- `EXIT_ERROR` — scripts/ci/write_metrics_threshold_summary.py:20 — defined here
- `EXIT_USAGE` — scripts/ci/write_metrics_threshold_summary.py:21 — defined here

## Structure
- build_summary(coverage: float, infra_rate: float) -> str
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/write_metrics_threshold_summary.py`, Python 3, 72 lines
- **documented invocation:**
  > "Reads CHECK_COVERAGE and CHECK_INFRA_RATE from environment variables and" — scripts/ci/write_metrics_threshold_summary.py:4
- **executed:** yes
- **actual command run:** `CHECK_COVERAGE=60.0 CHECK_INFRA_RATE=100.0 python3 sources/rjm/scripts/ci/write_metrics_threshold_summary.py`
- **actual exit code:** 0
- **abridged stdout:**
```
## Threshold Check Results

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Agent Coverage | 60.0% | 50.0% | :white_check_mark: |
| Infrastructure Review | 100.0% | 100.0% | :white_check_mark: |
```
- **documented exit codes:**
  > "0  - Summary written" — scripts/ci/write_metrics_threshold_summary.py:9
  > "1  - Missing required environment variables" — scripts/ci/write_metrics_threshold_summary.py:10
  > "2  - Usage error" — scripts/ci/write_metrics_threshold_summary.py:11
  vs. actual exit paths:
  - `scripts/ci/write_metrics_threshold_summary.py:50`: `return EXIT_ERROR` (when either variable is None)
  - `scripts/ci/write_metrics_threshold_summary.py:56`: `return EXIT_ERROR` (when float conversion raises ValueError)
  - `scripts/ci/write_metrics_threshold_summary.py:67`: `return EXIT_OK` (when summary successfully output)
  - `scripts/ci/write_metrics_threshold_summary.py:71`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 1 on missing or invalid environment variables). Fails on source repo default branch: yes (fails with code 1 when run directly without setting environment variables).
- **output match:** yes, generates accurate markdown table with status icons based on targets.

## Defects — required
- exit-code-mismatch · scripts/ci/write_metrics_threshold_summary.py:11 · Docstring documents exit code 2 as "Usage error", but `EXIT_USAGE` (2) is never returned by `main()`; missing variables and float parsing errors both exit with code 1 (`EXIT_ERROR`).

## Observations
Targets are hardcoded (`_COVERAGE_TARGET = 50.0`, `_INFRA_RATE_TARGET = 100.0`) in lines 23-24 rather than configurable via command-line arguments or config files.

## Context cost
File size: 2126 bytes (~530 tokens). Standard library only.
