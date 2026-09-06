---
package: rjm
path: scripts/ci/check_metrics_thresholds.py
type: script
bytes: 3205
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/check_metrics_thresholds.py

## Purpose — required, verbatim
> "Check agent metric thresholds and write outputs for the workflow." — scripts/ci/check_metrics_thresholds.py:2

## Design intent — required
Evaluates agent engineering performance metrics against established quality targets, specifically requiring 50.0% agent test coverage and 100.0% infrastructure review rate (issue #3531). It runs `.claude/skills/metrics/collect_metrics.py`, parses JSON metrics, emits GitHub Actions warning annotations if thresholds are breached, and exports `coverage`, `infra_rate`, and `alert` variables to `$GITHUB_OUTPUT`.

## Phase — required
none

## Inputs — required
- JSON metrics output from `collect_metrics.py --output json` — scripts/ci/check_metrics_thresholds.py:4
- Environment variable: `GITHUB_OUTPUT` — scripts/ci/check_metrics_thresholds.py:94

## Outputs — required
- GitHub Actions warning annotations: `::warning::` lines on coverage or infra rate target breaches — scripts/ci/check_metrics_thresholds.py:59, 63
- Workflow outputs: coverage, infra_rate, and alert written to `output_file` — scripts/ci/check_metrics_thresholds.py:79 (from `GITHUB_OUTPUT` — scripts/ci/check_metrics_thresholds.py:94)

## Invokes — required
- script .claude/skills/metrics/collect_metrics.py — scripts/ci/check_metrics_thresholds.py:27

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/ci/check_metrics_thresholds.py:9 — used here
- `collect_metrics_json` — scripts/ci/check_metrics_thresholds.py:32 — defined here
- `check_thresholds` — scripts/ci/check_metrics_thresholds.py:47 — defined here
- `write_github_output` — scripts/ci/check_metrics_thresholds.py:72 — defined here
- `main` — scripts/ci/check_metrics_thresholds.py:85 — defined here
- `EXIT_OK` — scripts/ci/check_metrics_thresholds.py:23 — defined here
- `EXIT_ERROR` — scripts/ci/check_metrics_thresholds.py:24 — defined here
- `EXIT_USAGE` — scripts/ci/check_metrics_thresholds.py:25 — defined here
- `GITHUB_OUTPUT` — scripts/ci/check_metrics_thresholds.py:94 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_metrics_thresholds.py`, language: Python, lines: 103
- documented invocation:
  "Runs collect_metrics.py --output json, parses the result, compares coverage" — scripts/ci/check_metrics_thresholds.py:4
- executed: yes
- actual command run: `python3 scripts/ci/check_metrics_thresholds.py` (executed from repo root `sources/rjm`)
  abridged stdout: `::warning::Agent coverage (13.9%) is below target (50.0%)`
  actual exit code: 0
- documented exit codes:
  "0  - Thresholds checked; outputs written when GITHUB_OUTPUT is set" — scripts/ci/check_metrics_thresholds.py:10
  "1  - collect_metrics.py failed or output unparseable" — scripts/ci/check_metrics_thresholds.py:11
  "2  - Usage error" — scripts/ci/check_metrics_thresholds.py:12
  vs. actual exit paths in code:
  `return EXIT_ERROR` — scripts/ci/check_metrics_thresholds.py:90
  `return EXIT_OK` — scripts/ci/check_metrics_thresholds.py:98
  `sys.exit(main())` — scripts/ci/check_metrics_thresholds.py:102
- for validators/gates: can it exit non-zero? yes (returns exit code 1 when collect_metrics.py fails or outputs invalid JSON). Does it fail on default branch? Exits 0 on default branch with warnings when executed in `sources/rjm`.
- does the output match what the documentation claims? partially (threshold checks work as documented, but exit code 2 is dead code because main() has no CLI argument parsing).

## Defects — required
- orphan — scripts/ci/check_metrics_thresholds.py:1 — Not invoked by any in-scope lifecycle script or agent; only referenced in test suites and out-of-scope `.github/workflows/agent-metrics.yml`.
- exit-code-mismatch — scripts/ci/check_metrics_thresholds.py:12 — Docstring documents `2  - Usage error` and defines `EXIT_USAGE = 2` at line 25, but `main()` performs no CLI argument parsing and never returns `EXIT_USAGE`.

## Observations
- Hardcodes relative path `_COLLECT_SCRIPT = ".claude/skills/metrics/collect_metrics.py"`, which requires the script to be run with the repository root as the current working directory.
- Breaches of coverage or infra rate targets do not fail the step; they set `alert=true` in `GITHUB_OUTPUT` and emit warning annotations.

## Context cost
3205 bytes (~800 tokens) + loads `.claude/skills/metrics/collect_metrics.py` (12936 bytes).
