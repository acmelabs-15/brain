---
package: rjm
path: scripts/ci/collect_metrics_and_report.py
type: script
bytes: 2691
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/collect_metrics_and_report.py

## Purpose — required, verbatim
> "Collect agent metrics and write a report and step summary." — scripts/ci/collect_metrics_and_report.py:2

## Design intent — required
Orchestration wrapper for agent metrics collection in CI. Extracted from `.github/workflows/agent-metrics.yml` under ADR-006, it invokes `.claude/skills/metrics/collect_metrics.py`, captures its output into `metrics-report.txt`, and conditionally formats and appends the report into `$GITHUB_STEP_SUMMARY` (fencing with json code blocks if JSON format is requested). Conforms to ADR-035 exit codes (0 for success, 1 for collection failure, 2 for usage errors).

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `--since`: "Number of days to analyze (default: $PERIOD_DAYS or 7)" — scripts/ci/collect_metrics_and_report.py:62
  - `--format`: "Output format: markdown|json|summary (default: $PERIOD_FORMAT or markdown)" — scripts/ci/collect_metrics_and_report.py:68
- Environment variables:
  - `PERIOD_DAYS`: fallback for `--since` (scripts/ci/collect_metrics_and_report.py:61)
  - `PERIOD_FORMAT`: fallback for `--format` (scripts/ci/collect_metrics_and_report.py:67)
  - `GITHUB_STEP_SUMMARY`: path to step summary file (scripts/ci/collect_metrics_and_report.py:81)
- Subprocess execution:
  - Invokes `[sys.executable, _COLLECT_SCRIPT, "--since", since, "--output", output_format]` (scripts/ci/collect_metrics_and_report.py:33)

## Outputs — required
- File `metrics-report.txt` containing raw output from collector — scripts/ci/collect_metrics_and_report.py:27
- Markdown summary appended to `GITHUB_STEP_SUMMARY` file — scripts/ci/collect_metrics_and_report.py:45
- Process exit code: 0 (EXIT_OK), 1 (EXIT_ERROR), 2 (EXIT_USAGE) — scripts/ci/collect_metrics_and_report.py:22-24

## Invokes — required
- script .claude/skills/metrics/collect_metrics.py — scripts/ci/collect_metrics_and_report.py:26

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `agent metrics` — scripts/ci/collect_metrics_and_report.py:2 — defined here
- `step summary` — scripts/ci/collect_metrics_and_report.py:2 — used here
- `collect_metrics.py` — scripts/ci/collect_metrics_and_report.py:4 — used here
- `metrics-report.txt` — scripts/ci/collect_metrics_and_report.py:5 — defined here
- `GITHUB_STEP_SUMMARY` — scripts/ci/collect_metrics_and_report.py:5 — used here
- `ADR-035` — scripts/ci/collect_metrics_and_report.py:8 — used here
- `EXIT_OK` — scripts/ci/collect_metrics_and_report.py:22 — defined here
- `EXIT_ERROR` — scripts/ci/collect_metrics_and_report.py:23 — defined here
- `EXIT_USAGE` — scripts/ci/collect_metrics_and_report.py:24 — defined here
- `Agent Metrics Summary` — scripts/ci/collect_metrics_and_report.py:48 — defined here

## Structure
- Module docstring and exit contract (lines 1-12)
- Imports and exit code constants (lines 14-25)
- Script path and output file definitions (lines 26-28)
- `collect_metrics` subprocess runner (lines 30-42)
- `write_step_summary` markdown formatter (lines 44-55)
- `build_parser` argument parser (lines 57-71)
- `main` entrypoint execution (lines 73-86)
- Entrypoint invocation (lines 88-90)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/collect_metrics_and_report.py`
- **language:** Python 3
- **lines:** 90
- **documented invocation:**
  > "Collect metrics" — scripts/ci/collect_metrics_and_report.py:6
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/collect_metrics_and_report.py`
- **stdout:**
  ```text
  ERROR: collect_metrics.py failed
  ```
- **actual exit code:** 1
- **documented exit codes:**
  - > "0  - Metrics collected and report written" — scripts/ci/collect_metrics_and_report.py:9
  - > "1  - collect_metrics.py failed" — scripts/ci/collect_metrics_and_report.py:10
  - > "2  - Usage error" — scripts/ci/collect_metrics_and_report.py:11
- **actual exit paths:**
  - `return EXIT_ERROR` — scripts/ci/collect_metrics_and_report.py:79
  - `return EXIT_OK` — scripts/ci/collect_metrics_and_report.py:85
  - `sys.exit(main())` — scripts/ci/collect_metrics_and_report.py:89
- **for validators/gates:** Can exit non-zero: exits 1 when `collect_metrics.py` fails or returns non-zero, and exits 2 via argparse when invalid arguments are provided. When executed from a directory lacking `.claude/skills/metrics/collect_metrics.py`, it fails as expected with exit code 1.
- **output matches documentation:** yes, collects metrics from child script, writes report file, and appends to GitHub step summary.

## Defects — required
- `script-bug` · scripts/ci/collect_metrics_and_report.py:24 · `EXIT_USAGE = 2` is defined in constant declarations but `main()` never explicitly returns it on usage errors.
- `missing-path` · scripts/ci/collect_metrics_and_report.py:26 · Hardcodes relative path `_COLLECT_SCRIPT = ".claude/skills/metrics/collect_metrics.py"` assuming process cwd is the root of the repository; invocation from any other directory fails with code 1.

## Observations
Wraps JSON reports in markdown triple-backtick code fences (` ```json ... ``` `) when `--format json` is requested, while appending plain markdown directly, ensuring readable display in GitHub Actions workflow summaries.

## Context cost
2691 bytes, ~673 tokens. When invoked, runs child script `.claude/skills/metrics/collect_metrics.py` (12936 bytes), for a total execution context of ~15627 bytes (~3906 tokens).
