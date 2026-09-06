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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/collect_metrics_and_report.py

## Purpose — required, verbatim
> "Collect agent metrics and write a report and step summary." — scripts/ci/collect_metrics_and_report.py:2

## Design intent — required
Executes the agent metrics collection script `.claude/skills/metrics/collect_metrics.py` across a configurable day window and format, writing the output to `metrics-report.txt` and appending the formatted summary (in markdown or json code blocks) to `$GITHUB_STEP_SUMMARY`. Replaces the inline "Collect metrics" step in `.github/workflows/agent-metrics.yml` under ADR-006 while standardizing exit codes under ADR-035.

## Phase — required
rjm:Verify

## Inputs — required
- CLI options: `--since` (days to analyze, default: `$PERIOD_DAYS` or 7), `--format` (output format: markdown, json, or summary, default: `$PERIOD_FORMAT` or markdown) (`scripts/ci/collect_metrics_and_report.py:59-69`)
- Environment variable `GITHUB_STEP_SUMMARY` for GitHub Actions step summary file (`scripts/ci/collect_metrics_and_report.py:81`)
- Subprocess output from `.claude/skills/metrics/collect_metrics.py` (`scripts/ci/collect_metrics_and_report.py:33-41`)

## Outputs — required
- Report file: `metrics-report.txt` (`scripts/ci/collect_metrics_and_report.py:27, 40`)
- Step summary content appended to `$GITHUB_STEP_SUMMARY` (`scripts/ci/collect_metrics_and_report.py:47-54`)
- Console error on failure: `"ERROR: collect_metrics.py failed"` (`scripts/ci/collect_metrics_and_report.py:78`)
- Exit code: 0 on success, 1 on collection failure, 2 on usage error (`scripts/ci/collect_metrics_and_report.py:22-24`)

## Invokes — required
- `script .claude/skills/metrics/collect_metrics.py — scripts/ci/collect_metrics_and_report.py:26`

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `GITHUB_STEP_SUMMARY` — scripts/ci/collect_metrics_and_report.py:5 — used here
- `agent-metrics.yml` — scripts/ci/collect_metrics_and_report.py:6 — used here
- `ADR-035` — scripts/ci/collect_metrics_and_report.py:8 — used here
- `EXIT_OK` — scripts/ci/collect_metrics_and_report.py:22 — defined here
- `EXIT_ERROR` — scripts/ci/collect_metrics_and_report.py:23 — defined here
- `EXIT_USAGE` — scripts/ci/collect_metrics_and_report.py:24 — defined here
- `_COLLECT_SCRIPT` — scripts/ci/collect_metrics_and_report.py:26 — defined here
- `_REPORT_FILE` — scripts/ci/collect_metrics_and_report.py:27 — defined here
- `collect_metrics` — scripts/ci/collect_metrics_and_report.py:30 — defined here
- `write_step_summary` — scripts/ci/collect_metrics_and_report.py:44 — defined here
- `build_parser` — scripts/ci/collect_metrics_and_report.py:57 — defined here

## Structure
- `EXIT_OK`, `EXIT_ERROR`, `EXIT_USAGE`
- `_COLLECT_SCRIPT`, `_REPORT_FILE`
- `collect_metrics(since: str, output_format: str, report_path: Path) -> bool`
- `write_step_summary(report_path: Path, output_format: str, summary_file: str) -> None`
- `build_parser() -> argparse.ArgumentParser`
- `main(argv: list[str] | None = None) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/collect_metrics_and_report.py`, language: `python`, lines: 90
- documented invocation:
  > "Collect agent metrics and write a report and step summary." — scripts/ci/collect_metrics_and_report.py:2
- **executed:** yes
- actual command run: `python3 scripts/ci/collect_metrics_and_report.py --since 7 --format markdown` (executed from `sources/rjm`)
- abridged stdout: (empty, exits 0 after generating metrics-report.txt)
- **actual exit code:** 0
- documented exit codes:
  > "0  - Metrics collected and report written" — scripts/ci/collect_metrics_and_report.py:9
  > "1  - collect_metrics.py failed" — scripts/ci/collect_metrics_and_report.py:10
  > "2  - Usage error" — scripts/ci/collect_metrics_and_report.py:11
  vs. actual exit paths in code:
  `scripts/ci/collect_metrics_and_report.py:79` (`return EXIT_ERROR` [1])
  `scripts/ci/collect_metrics_and_report.py:85` (`return EXIT_OK` [0])
  `argparse` usage error (`return EXIT_USAGE` [2]) via `build_parser`
  called via `sys.exit(main())` on line 89.
- for validators/gates: can exit non-zero (exits 1 if `collect_metrics.py` fails or is not found; exits 2 on bad arguments). When run in repo root: exits 0.
- does the output match what the documentation claims: yes, executes collection script and writes report and summary.

## Defects — required
- orphan — scripts/ci/collect_metrics_and_report.py:1 — not invoked by any in-scope file; invoked only by out-of-scope .github/workflows/agent-metrics.yml:79.

## Observations
Addresses Phase 1V finding by explicitly listing the `orphan` defect when `Invoked by: orphan` is specified. Wraps `.claude/skills/metrics/collect_metrics.py` for CI execution.

## Context cost
2691 bytes file + 12936 bytes (`.claude/skills/metrics/collect_metrics.py`) = 15627 bytes (~3900 tokens).
