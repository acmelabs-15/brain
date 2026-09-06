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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/collect_ai_metrics.py

## Purpose — required, verbatim
> "Collect repository AI metrics for the weekly analysis workflow." — scripts/ci/collect_ai_metrics.py:2

## Design intent — required
Automates retrieval of AI usage metrics via GitHub CLI (`gh metrics`) for weekly repository analytics while insulating CI workflows from transient metrics service outages. Implements deliberate fail-soft behavior so API or token errors produce warnings and fallback placeholders rather than halting the workflow run. Strictly avoids shell command interpolation by executing `gh` via argument vectors, mitigating CWE-78 command injection risks from repository names, and safely escapes heredoc delimiters (`EOF_METRICS`) when formatting multi-line output for `$GITHUB_OUTPUT`.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `--repository`: "owner/name to query." — scripts/ci/collect_ai_metrics.py:68
  - `--weeks`: "Window size in weeks." (default: "4") — scripts/ci/collect_ai_metrics.py:69
  - `--csv-out`: "Where to write the CSV export." — scripts/ci/collect_ai_metrics.py:73
- Environment variables:
  - `GITHUB_OUTPUT`: path to GitHub Actions step output file (scripts/ci/collect_ai_metrics.py:102)
- External command `gh metrics`:
  - `gh metrics -R <repository> -s <start> -e <end> --csv` (scripts/ci/collect_ai_metrics.py:31)
  - `gh metrics -R <repository> -s <start> -e <end>` (scripts/ci/collect_ai_metrics.py:31)

## Outputs — required
- CSV metrics export file written to path specified by `csv_out` — scripts/ci/collect_ai_metrics.py:95
- Step output parameters appended to `$GITHUB_OUTPUT` file:
  - `metrics_table`: multi-line table wrapped in `EOF_METRICS` delimiter — scripts/ci/collect_ai_metrics.py:56
  - `start_date`: ISO format start date (`YYYY-MM-DD`) — scripts/ci/collect_ai_metrics.py:57
  - `end_date`: ISO format end date (`YYYY-MM-DD`) — scripts/ci/collect_ai_metrics.py:57
- Console warnings printed to stdout on `gh` query failure:
  - `::warning::gh metrics CSV export failed` — scripts/ci/collect_ai_metrics.py:93
  - `::warning::gh metrics table export failed` — scripts/ci/collect_ai_metrics.py:99
- Process exit code: 0 on success/fail-soft; 1 on invalid `--weeks` parameter — scripts/ci/collect_ai_metrics.py:81, 84, 103

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `AI metrics` — scripts/ci/collect_ai_metrics.py:2 — defined here
- `weekly analysis workflow` — scripts/ci/collect_ai_metrics.py:2 — used here
- `ADR-006` — scripts/ci/collect_ai_metrics.py:4 — used here
- `gh metrics` — scripts/ci/collect_ai_metrics.py:7 — used here
- `placeholder text` — scripts/ci/collect_ai_metrics.py:8 — defined here
- `fail-soft` — scripts/ci/collect_ai_metrics.py:9 — defined here
- `CWE-78` — scripts/ci/collect_ai_metrics.py:11 — used here
- `GITHUB_OUTPUT` — scripts/ci/collect_ai_metrics.py:25 — used here
- `EOF_METRICS` — scripts/ci/collect_ai_metrics.py:26 — defined here
- `_run_metrics` — scripts/ci/collect_ai_metrics.py:29 — defined here
- `_write_outputs` — scripts/ci/collect_ai_metrics.py:49 — defined here

## Structure
- Module docstring, extraction context, and security considerations (lines 1-13)
- Imports and fallback constants (lines 15-27)
- `_run_metrics` GitHub CLI invocation wrapper (lines 29-47)
- `_write_outputs` GitHub Actions output formatter with delimiter sanitization (lines 49-64)
- `main` CLI parser and execution workflow (lines 66-104)
- Entrypoint execution (lines 106-108)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/collect_ai_metrics.py`
- **language:** Python 3
- **lines:** 108
- **documented invocation:**
  > "owner/name to query." — scripts/ci/collect_ai_metrics.py:68
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/collect_ai_metrics.py --repository test/repo --weeks 2 --csv-out /tmp/test_metrics.csv`
- **stdout:**
  ```text
  Collecting metrics from 2026-08-23 to 2026-09-06
  ::warning::gh metrics CSV export failed
  ::warning::gh metrics table export failed
  metrics_table<<EOF_METRICS
  No table data available
  EOF_METRICS
  start_date=2026-08-23
  end_date=2026-09-06
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - > "fail-soft behaviour is deliberate: a metrics outage must not fail the weekly" — scripts/ci/collect_ai_metrics.py:9
- **actual exit paths:**
  - `return 1` — scripts/ci/collect_ai_metrics.py:81
  - `return 1` — scripts/ci/collect_ai_metrics.py:84
  - `return 0` — scripts/ci/collect_ai_metrics.py:103
  - `sys.exit(main())` — scripts/ci/collect_ai_metrics.py:107
- **for validators/gates:** Can exit non-zero: exits 1 when `--weeks` is not an integer or is less than 1. Designed specifically as a fail-soft data collector: when the external `gh metrics` tool fails or credentials are unavailable, it issues GitHub Actions workflow warnings, writes placeholder data, and exits 0 to avoid breaking the weekly analysis pipeline.
- **output matches documentation:** yes, safely executes vector commands and formats step output parameters.

## Defects — required
none

## Observations
Security hardening against GitHub Actions output injection: detects if the output string contains the delimiter `_DELIMITER` (`EOF_METRICS`) and sanitizes it with `table.replace(_DELIMITER, _DELIMITER + "_ESCAPED")` at line 54 to prevent arbitrary output parameter injection into subsequent workflow steps.

## Context cost
3643 bytes, ~911 tokens. Standard library only (`argparse`, `os`, `subprocess`, `sys`, `datetime`, `pathlib`). Total context cost: 3643 bytes.
