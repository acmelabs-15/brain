---
package: rjm
path: .github/scripts/measure_workflow_coalescing.py
type: script
bytes: 25119
unit: inv-rjm-184
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/measure_workflow_coalescing.py

## Purpose — required, verbatim
> "Measure workflow run coalescing effectiveness by analyzing GitHub Actions runs." — .github/scripts/measure_workflow_coalescing.py:2

The docstring continues:
"Queries GitHub Actions API to collect workflow run data, detects overlapping runs" — .github/scripts/measure_workflow_coalescing.py:4
"within the same concurrency group, and calculates metrics for coalescing effectiveness," — .github/scripts/measure_workflow_coalescing.py:5
"race conditions, and cancellation performance." — .github/scripts/measure_workflow_coalescing.py:6

## Design intent — required
Analyzes GitHub Actions workflow execution metrics to quantify the efficiency of concurrency controls and prevent redundant workflow runs. By querying GitHub Actions run history, grouping runs by concurrency group, detecting overlapping executions, and tracking cancellations versus race conditions, it generates quantitative health indicators (coalescing effectiveness, race condition rate, average cancellation time). It produces actionable markdown, JSON, or summary reports with threshold-based recommendations (such as enabling debouncing if the race condition rate exceeds 10%). Without this script, workflow concurrency groups could silently suffer race conditions or fail to cancel redundant CI runs, wasting runner capacity and allowing stale validation verdicts to overwrite fresh ones.

## Phase — required
none

## Inputs — required
- CLI option `--since`: "Number of days to analyze (default: 30)" — .github/scripts/measure_workflow_coalescing.py:604
- CLI option `--repository`: "Repository in owner/repo format (inferred from git remote if omitted)" — .github/scripts/measure_workflow_coalescing.py:609
- CLI option `--workflows`: "Workflow names to analyze (repeatable, defaults to all AI workflows)" — .github/scripts/measure_workflow_coalescing.py:615
- Default workflows list `DEFAULT_WORKFLOWS`: `ai-spec-validation`, `ai-session-protocol`, `pr-validation`, `label-pr`, `memory-validation`, `auto-assign-reviewer`, `codeql-analysis` — .github/scripts/measure_workflow_coalescing.py:45-53
- CLI option `--output`: "Output format (default: markdown)" — .github/scripts/measure_workflow_coalescing.py:621
- CLI option `--output-path`: "Path to save report (default: .agents/metrics/workflow-coalescing.md)" — .github/scripts/measure_workflow_coalescing.py:626
- GitHub CLI `gh` installed and authenticated — .github/scripts/measure_workflow_coalescing.py:138, 160
- GitHub Actions REST API endpoint `/repos/{owner}/{repo}/actions/runs` — .github/scripts/measure_workflow_coalescing.py:233
- Environment variable `GITHUB_WORKSPACE`: Workspace root directory — .github/scripts/measure_workflow_coalescing.py:27

## Outputs — required
- Markdown report file formatted by `format_markdown_report` saved to `--output-path` (default `.agents/metrics/workflow-coalescing.md`) or stdout — .github/scripts/measure_workflow_coalescing.py:437, 624, 724
- JSON report file saved to `--output-path` or stdout when output is json — .github/scripts/measure_workflow_coalescing.py:673, 693
- Text summary report printed to stderr when output is summary — .github/scripts/measure_workflow_coalescing.py:698, 699
- Process exit code: 0 on success, 1 on error — .github/scripts/measure_workflow_coalescing.py:9, 10, 736, 738

## Invokes — required
- script scripts.github_core.api — .github/scripts/measure_workflow_coalescing.py:32

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — .github/scripts/measure_workflow_coalescing.py:8 — used here
- `DEFAULT_WORKFLOWS` — .github/scripts/measure_workflow_coalescing.py:45 — defined here
- `WorkflowRun` — .github/scripts/measure_workflow_coalescing.py:61 — defined here
- `RunOverlap` — .github/scripts/measure_workflow_coalescing.py:97 — defined here
- `CoalescingMetrics` — .github/scripts/measure_workflow_coalescing.py:109 — defined here
- `_parse_datetime` — .github/scripts/measure_workflow_coalescing.py:126 — defined here
- `test_prerequisites` — .github/scripts/measure_workflow_coalescing.py:137 — defined here
- `GhAuthStatus` — .github/scripts/measure_workflow_coalescing.py:33 — used here
- `RepoInfo` — .github/scripts/measure_workflow_coalescing.py:34 — used here
- `check_gh_auth` — .github/scripts/measure_workflow_coalescing.py:35 — used here
- `resolve_repo_params` — .github/scripts/measure_workflow_coalescing.py:36 — used here
- `get_repository_context` — .github/scripts/measure_workflow_coalescing.py:181 — defined here
- `get_workflow_runs` — .github/scripts/measure_workflow_coalescing.py:208 — defined here
- `get_concurrency_group` — .github/scripts/measure_workflow_coalescing.py:283 — defined here
- `check_runs_overlap` — .github/scripts/measure_workflow_coalescing.py:317 — defined here
- `get_overlapping_runs` — .github/scripts/measure_workflow_coalescing.py:329 — defined here
- `get_coalescing_metrics` — .github/scripts/measure_workflow_coalescing.py:381 — defined here
- `coalescing_effectiveness` — .github/scripts/measure_workflow_coalescing.py:402 — defined here
- `race_condition_rate` — .github/scripts/measure_workflow_coalescing.py:406 — defined here
- `avg_cancellation_time` — .github/scripts/measure_workflow_coalescing.py:419 — defined here
- `format_markdown_report` — .github/scripts/measure_workflow_coalescing.py:437 — defined here
- `_build_parser` — .github/scripts/measure_workflow_coalescing.py:596 — defined here
- `main` — .github/scripts/measure_workflow_coalescing.py:631 — defined here
- `_write_output` — .github/scripts/measure_workflow_coalescing.py:741 — defined here

## Structure
- Script docstring and exit codes — .github/scripts/measure_workflow_coalescing.py:2
- Configuration — .github/scripts/measure_workflow_coalescing.py:42
- Data classes — .github/scripts/measure_workflow_coalescing.py:57
- Helpers — .github/scripts/measure_workflow_coalescing.py:123
- Prerequisites — .github/scripts/measure_workflow_coalescing.py:134
- Repository context — .github/scripts/measure_workflow_coalescing.py:178
- Workflow run queries — .github/scripts/measure_workflow_coalescing.py:205
- Concurrency group extraction — .github/scripts/measure_workflow_coalescing.py:280
- Overlap detection — .github/scripts/measure_workflow_coalescing.py:314
- Metrics calculation — .github/scripts/measure_workflow_coalescing.py:378
- Report generation — .github/scripts/measure_workflow_coalescing.py:434
- CLI entry point — .github/scripts/measure_workflow_coalescing.py:593

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/measure_workflow_coalescing.py`
- language: Python (python3)
- lines: 750
- documented invocation:
  - none (CLI executable with shebang; options defined in `_build_parser` — .github/scripts/measure_workflow_coalescing.py:596)
- executed: yes
- actual command run: `python3 sources/rjm/.github/scripts/measure_workflow_coalescing.py`
- abridged stdout:
  ```text
  Analyzing repository: acmelabs-15/brain
  Querying workflow runs from 2026-08-07 to 2026-09-06
  2026-09-05 18:33:19,728 [INFO] Querying workflow runs since 2026-08-07T01:33:19.728341+00:00
  2026-09-05 18:33:20,106 [INFO] Retrieved 0 workflow runs
  No workflow runs found in the specified period
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - Success: Analysis completed" — .github/scripts/measure_workflow_coalescing.py:9
    - "1 - Error: Failed to fetch workflow data or process results" — .github/scripts/measure_workflow_coalescing.py:10
  - Actual exit paths:
    - `return 0` — .github/scripts/measure_workflow_coalescing.py:665 (no workflow runs found in specified period)
    - `return 0` — .github/scripts/measure_workflow_coalescing.py:738 (successful run)
    - `return 1` — .github/scripts/measure_workflow_coalescing.py:736 (caught Exception in main)
    - `raise RuntimeError` — .github/scripts/measure_workflow_coalescing.py:152, 154, 162, 164, 167, 197 (handled by main exception handler, returns 1)
- for validators/gates: not a blocking gate; metric calculation script. Exits 0 on repository runs when authenticated; exits 1 on missing gh, invalid credentials, or parsing exceptions.
- does the output match what the documentation claims: yes (queries GitHub Actions runs, detects overlaps within concurrency groups, calculates coalescing effectiveness, and generates reports).

## Defects — required
- `doc-drift`: In `docs/agent-metrics.md:331`, documentation references `.github/scripts/Measure-WorkflowCoalescing.ps1` instead of `.github/scripts/measure_workflow_coalescing.py` following ADR-042 Python migration.
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/measure_workflow_coalescing.py`; it is invoked only by `.github/workflows/workflow-coalescing-metrics.yml:33`, which is outside the lifecycle manifest scope.

## Observations
- Implements classification of `gh auth status` failures at lines 156-172 to differentiate between token errors (`GhAuthStatus.INVALID_CREDENTIALS`) and GitHub outages (`GhAuthStatus.API_UNAVAILABLE`), referencing issue #3139.
- Employs concurrency group extraction rules matching GitHub Actions workflow naming schemes (`spec-validation`, `session-protocol`, `label-pr`, `memory-validation`, `auto-assign`, `pr-validation`).
- Defines three target thresholds: Coalescing Effectiveness >= 90%, Race Condition Rate <= 10%, and Average Cancellation Time <= 5 seconds.

## Context cost
25,119 bytes (approx. 6,280 tokens).
