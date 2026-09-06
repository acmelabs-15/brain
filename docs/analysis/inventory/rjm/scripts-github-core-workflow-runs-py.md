---
package: rjm
path: scripts/github_core/workflow_runs.py
type: script
bytes: 12597
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/workflow_runs.py, sha256: d42164ba37dd5231e8d09b7764ef9068dfb00956ed3e0ed10921ef5e5986eab3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/workflow_runs.py

## Purpose — required, verbatim
> "Enumerate and cancel Actions workflow runs for open pull requests." — scripts/github_core/workflow_runs.py:1

## Design intent — required
Provides safe enumeration and cancellation of GitHub Actions workflow runs for open pull requests, extracted from `scripts/bulk_cancel_guard.py` (Issue #4835). It solves the cross-fork branch collision vulnerability by pairing each branch name with its discriminator `head_repository` (`(branch, head_repository)`), preventing cancellations on stranger pull requests sharing common branch names like `patch-1`. It enforces fail-closed error handling via `JobsNotMaterializedError` on queued runs whose job records have not yet materialized, ensuring they block recovery plans rather than being waved through as safe, and captures individual cancellation failures in `CancellationOutcome` to avoid leaving batches in unrecorded states.

## Phase — required
cross-phase

## Inputs — required
- GitHub API client interface instance conforming to `scripts.github_core.protocol.GitHubClient`.
- Base repository identifier string (`repository: str`, format `owner/repo`).
- Pull request target sequence (`targets: Sequence[PullRequestTarget]`).
- Optional workflow status sequence filter (`statuses: Sequence[str] | None`, defaulting to queued and in_progress runs).
- Sequence of run IDs (`run_ids: Sequence[int]`) for cancellation.
- GitHub Actions REST API endpoints:
  - `repos/{owner}/{repo}/actions/runs?branch={branch}&status={status}`
  - `repos/{owner}/{repo}/actions/runs/{run_id}/jobs`
  - `repos/{owner}/{repo}/actions/runs/{run_id}/cancel`

## Outputs — required
- List of `scripts.github_core.recovery_manifest.WorkflowRun` dataclass instances with published check contexts.
- `CancellationOutcome` dataclass instance containing tuples of cancelled run IDs (`cancelled: tuple[int, ...]`) and per-run failure errors (`failed: tuple[tuple[int, str], ...]`).
- Tuple of deduplicated check-run context strings (`tuple[str, ...]`) from `run_contexts`.
- Mutation requests sent via `client.rest_post` to the GitHub Actions cancel endpoint.

## Invokes — required
- script protocol — scripts/github_core/workflow_runs.py:19
- script recovery_manifest — scripts/github_core/workflow_runs.py:20

## Invoked by — required
- script workflow_runs — scripts/bulk_cancel_guard.py:76
- script workflow_runs — scripts/github_core/pull_request_targets.py:21

## Concepts named — required, verbatim
- `PAGE_SIZE` — scripts/github_core/workflow_runs.py:23 — defined here
- `CancellationOutcome` — scripts/github_core/workflow_runs.py:24 — defined here
- `JobsNotMaterializedError` — scripts/github_core/workflow_runs.py:25 — defined here
- `PullRequestTarget` — scripts/github_core/workflow_runs.py:26 — defined here
- `cancel_runs` — scripts/github_core/workflow_runs.py:27 — defined here
- `collect_runs_for_targets` — scripts/github_core/workflow_runs.py:28 — defined here
- `iter_paginated` — scripts/github_core/workflow_runs.py:29 — defined here
- `run_contexts` — scripts/github_core/workflow_runs.py:30 — defined here
- `_MAX_PAGES` — scripts/github_core/workflow_runs.py:39 — defined here
- `_path_segment` — scripts/github_core/workflow_runs.py:42 — defined here
- `_query_value` — scripts/github_core/workflow_runs.py:51 — defined here
- `_branch_runs` — scripts/github_core/workflow_runs.py:175 — defined here
- `run_head_repository` — scripts/github_core/workflow_runs.py:185 — defined here

## Structure
- `_path_segment` — scripts/github_core/workflow_runs.py:42
- `_query_value` — scripts/github_core/workflow_runs.py:51
- `class PullRequestTarget` — scripts/github_core/workflow_runs.py:65
- `class CancellationOutcome` — scripts/github_core/workflow_runs.py:96
- `iter_paginated` — scripts/github_core/workflow_runs.py:108
- `class JobsNotMaterializedError` — scripts/github_core/workflow_runs.py:132
- `run_contexts` — scripts/github_core/workflow_runs.py:144
- `_branch_runs` — scripts/github_core/workflow_runs.py:175
- `run_head_repository` — scripts/github_core/workflow_runs.py:185
- `collect_runs_for_targets` — scripts/github_core/workflow_runs.py:198
- `cancel_runs` — scripts/github_core/workflow_runs.py:280

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/workflow_runs.py`, language: Python 3, lines: 301
- documented invocation: none (library module without CLI entrypoint; consumed by `scripts/bulk_cancel_guard.py` and `scripts/github_core/pull_request_targets.py`)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/workflow_runs.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from scripts.github_core.workflow_runs import PAGE_SIZE, PullRequestTarget, CancellationOutcome; print('PAGE_SIZE:', PAGE_SIZE); print('target:', PullRequestTarget(1, 'main', 'octo/repo'))"`
  abridged stdout: `PAGE_SIZE: 100\ntarget: PullRequestTarget(pr_number=1, branch='main', head_repository='octo/repo')`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code:
  - no `sys.exit` calls; raises `JobsNotMaterializedError` when jobs endpoint returns zero records. Standalone module execution exits 0.
- for validators/gates:
  - can it exit non-zero? no direct exit; raises `JobsNotMaterializedError` on empty jobs response to trigger fail-closed handling in callers.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Strict REST parameter encoding: `_query_value` explicitly percent-encodes all reserved characters including `/`, `&`, `+`, `?`, `#` to protect against query parameter injection from branch names like `feat/a&status=completed` (lines 51-61).
- Disambiguation across forks: `PullRequestTarget` pairs `branch` with `head_repository` instead of using head commit SHA, ensuring that earlier queued runs for previous commits are not dropped while avoiding accidental CI cancellations on other repositories' PRs (lines 68-88).
- Fail-closed security architecture: When a queued run has not yet materialized jobs, `collect_runs_for_targets` catches `JobsNotMaterializedError` and sets `contexts=()` and `jobs_verified=False` so recovery planning blocks the run rather than classifying it as safe to cancel (Issue #4835, lines 259-264).

## Context cost
12,597 bytes (~3,149 tokens). Invokes `scripts/github_core/protocol.py` (2,603 bytes) and `scripts/github_core/recovery_manifest.py` (18,439 bytes) for a total module graph cost of 33,639 bytes (~8,410 tokens).
