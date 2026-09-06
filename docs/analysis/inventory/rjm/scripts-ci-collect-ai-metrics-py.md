---
package: rjm
path: scripts/ci/collect_ai_metrics.py
type: script
bytes: 3643
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/collect_ai_metrics.py, sha256: 58812012ab261d1a99d10734c90fd507b727a64e4c1f1d14c5ddddfa7cefce0f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/collect_ai_metrics.py

## Purpose — required, verbatim
> "Collect repository AI metrics for the weekly analysis workflow." — scripts/ci/collect_ai_metrics.py:2

## Design intent — required
Collects weekly AI metrics for a GitHub repository across a specified time window by executing the `gh metrics` CLI extension for both CSV and formatted table exports. Extracted under ADR-006 from `.github/workflows/ai-metrics-analysis.yml`. Implements deliberate fail-soft behavior so that metrics collection outages never fail weekly analysis runs: failed API queries produce warnings and fallback text rather than nonzero exits. Uses argument vectors instead of shell strings to avoid word-splitting/command injection (CWE-78) and sanitizes heredoc delimiters to prevent output injection attacks against `$GITHUB_OUTPUT`.

## Phase — required
rjm:Verify

## Inputs — required
- CLI options: `--repository` (required owner/repo string), `--weeks` (integer string, default: "4"), `--csv-out` (required output path) (`scripts/ci/collect_ai_metrics.py:68-75`)
- Environment variable `GITHUB_OUTPUT` for GitHub Actions step outputs (`scripts/ci/collect_ai_metrics.py:102`)
- Subprocess command output from `gh metrics` (`scripts/ci/collect_ai_metrics.py:31-46`)

## Outputs — required
- CSV metrics data written to path specified by `--csv-out` (`scripts/ci/collect_ai_metrics.py:95`)
- GitHub step output block with `metrics_table`, `start_date`, and `end_date` appended to `$GITHUB_OUTPUT` or printed to stdout (`scripts/ci/collect_ai_metrics.py:56-63`)
- Console messages and workflow commands: `::warning::gh metrics CSV export failed`, `::warning::gh metrics table export failed` (`scripts/ci/collect_ai_metrics.py:93, 99`)
- Exit code: 0 on success/fallback, 1 on argument validation error (`scripts/ci/collect_ai_metrics.py:81, 84, 103`)

## Invokes — required
- `command gh — scripts/ci/collect_ai_metrics.py:31`

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/collect_ai_metrics.py:4 — used here
- `gh metrics` — scripts/ci/collect_ai_metrics.py:7 — used here
- `CWE-78` — scripts/ci/collect_ai_metrics.py:11 — used here
- `_CSV_FALLBACK` — scripts/ci/collect_ai_metrics.py:23 — defined here
- `_TABLE_FALLBACK` — scripts/ci/collect_ai_metrics.py:24 — defined here
- `GITHUB_OUTPUT` — scripts/ci/collect_ai_metrics.py:25 — used here
- `_DELIMITER` — scripts/ci/collect_ai_metrics.py:26 — defined here
- `_run_metrics` — scripts/ci/collect_ai_metrics.py:29 — defined here
- `_write_outputs` — scripts/ci/collect_ai_metrics.py:49 — defined here

## Structure
- `_CSV_FALLBACK`, `_TABLE_FALLBACK`, `_DELIMITER`
- `_run_metrics(repository: str, start: str, end: str, *, csv: bool) -> str | None`
- `_write_outputs(table: str, start: str, end: str, output_path: str | None) -> None`
- `main(argv: list[str] | None = None) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/collect_ai_metrics.py`, language: `python`, lines: 108
- documented invocation:
  > "Collect repository AI metrics for the weekly analysis workflow." — scripts/ci/collect_ai_metrics.py:2
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/collect_ai_metrics.py --repository test/repo --csv-out /tmp/test_ai_metrics.csv`
- abridged stdout:
```
Collecting metrics from 2026-08-09 to 2026-09-06
::warning::gh metrics CSV export failed
::warning::gh metrics table export failed
metrics_table<<EOF_METRICS
No table data available
EOF_METRICS
start_date=2026-08-09
end_date=2026-09-06
```
- **actual exit code:** 0
- documented exit codes:
  none
  vs. actual exit paths in code:
  `scripts/ci/collect_ai_metrics.py:81` (`return 1`)
  `scripts/ci/collect_ai_metrics.py:84` (`return 1`)
  `scripts/ci/collect_ai_metrics.py:103` (`return 0`)
  called via `sys.exit(main())` on line 107.
- for validators/gates: not a gate; fail-soft data collection utility. Can exit 1 when `--weeks` is invalid (<1 or non-integer).
- does the output match what the documentation claims: yes, captures metrics from `gh metrics` or falls back gracefully to placeholder text.

## Defects — required
- orphan — scripts/ci/collect_ai_metrics.py:1 — not invoked by any in-scope file; invoked only by out-of-scope .github/workflows/ai-metrics-analysis.yml:64.

## Observations
Demonstrates resilient CI metric collection with explicit delimiter injection prevention: if `_DELIMITER` (`EOF_METRICS`) appears within the table content, it is escaped to prevent malicious step output manipulation.

## Context cost
3643 bytes (~910 tokens).
