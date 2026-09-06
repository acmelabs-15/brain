---
package: rjm
path: scripts/pr_maintenance/maintenance.py
type: script
bytes: 6037
unit: inv-rjm-255
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/pr_maintenance/maintenance.py, sha256: 526b89e4ca39d779c63f64fbd4ebc3d623870e18d6cf72c129be8622f2b89dc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/pr_maintenance/maintenance.py

## Purpose — required, verbatim
> "PR Maintenance workflow operations extracted per ADR-006." — scripts/pr_maintenance/maintenance.py:1

## Design intent — required
Implements PR maintenance workflow helper functions extracted per ADR-006, parsing maintenance logs for metrics (PRs processed, comments acknowledged, conflicts resolved, blocked PRs), formatting GitHub Actions Markdown summaries, generating alert issue bodies for blocked PRs and workflow failures, and verifying the host environment (Python, `gh`, and `git` versions).

## Phase — required
none

## Inputs — required
- Log file path passed to `get_maintenance_results` — scripts/pr_maintenance/maintenance.py:35
- Run parameters passed to `create_maintenance_summary` — scripts/pr_maintenance/maintenance.py:90
- Blocked PR list passed to `create_blocked_prs_alert` — scripts/pr_maintenance/maintenance.py:133
- Failure details passed to `create_workflow_failure_alert` — scripts/pr_maintenance/maintenance.py:163

## Outputs — required
- Extracted metrics returned as `MaintenanceResults` — scripts/pr_maintenance/maintenance.py:20
- Environment status returned as `EnvironmentResult` — scripts/pr_maintenance/maintenance.py:29
- Markdown summaries and alert issue bodies generated via `create_maintenance_summary` — scripts/pr_maintenance/maintenance.py:90

## Invokes — required
none

## Invoked by — required
- script scripts.pr_maintenance.maintenance — scripts/pr_maintenance/__init__.py:10

## Concepts named — required, verbatim
- `MaintenanceResults` — scripts/pr_maintenance/maintenance.py:20 — defined here
- `EnvironmentResult` — scripts/pr_maintenance/maintenance.py:29 — defined here
- `get_maintenance_results` — scripts/pr_maintenance/maintenance.py:35 — defined here
- `create_maintenance_summary` — scripts/pr_maintenance/maintenance.py:90 — defined here
- `create_blocked_prs_alert` — scripts/pr_maintenance/maintenance.py:133 — defined here
- `create_workflow_failure_alert` — scripts/pr_maintenance/maintenance.py:163 — defined here
- `check_workflow_environment` — scripts/pr_maintenance/maintenance.py:186 — defined here

## Structure
- class MaintenanceResults: — scripts/pr_maintenance/maintenance.py:20
- class EnvironmentResult: — scripts/pr_maintenance/maintenance.py:29
- def get_maintenance_results(log_path: str | Path) -> MaintenanceResults: — scripts/pr_maintenance/maintenance.py:35
- def create_maintenance_summary( — scripts/pr_maintenance/maintenance.py:90
- def create_blocked_prs_alert( — scripts/pr_maintenance/maintenance.py:133
- def create_workflow_failure_alert( — scripts/pr_maintenance/maintenance.py:163
- def check_workflow_environment() -> EnvironmentResult: — scripts/pr_maintenance/maintenance.py:186

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/pr_maintenance/maintenance.py`, language: Python, lines: 239
- documented invocation: none (library module without CLI entry point)
- **executed:** yes
- actual command run: `PYTHONPATH=. python3 scripts/pr_maintenance/maintenance.py`, abridged stdout: ``, **actual exit code**: 0
- documented exit codes: none vs. actual exit paths: raises `ValueError` on path traversal (scripts/pr_maintenance/maintenance.py:40); no `sys.exit` calls; exits 0 on direct import/execution
- for validators/gates: `check_workflow_environment` validates availability of `gh` and `git`, returning `valid=False` if either tool is missing
- does the output match what the documentation claims? yes, successfully parses logs and generates markdown summaries and alert bodies

## Defects — required
none

## Observations
- Detects and guards against directory traversal attempts in log file paths via `not path.is_absolute() and ".." in path.parts` (scripts/pr_maintenance/maintenance.py:39).

## Context cost
6037 bytes, approximately 1500 tokens.
