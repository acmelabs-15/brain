---
package: rjm
path: scripts/github_core/recovery_manifest.py
type: script
bytes: 18439
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/github_core/recovery_manifest.py

## Purpose — required, verbatim
> "Fail-closed recovery planning for a bulk Actions cancellation." — scripts/github_core/recovery_manifest.py:1

## Design intent — required
Encodes fail-closed recovery planning for bulk GitHub Actions workflow cancellations (originating from Incident #4835, where a panic rollback cancelled 818 runs leaving dozens of PRs with missing required checks because workflows did not subscribe to `reopened`). It ensures that any workflow run publishing a required status check context is only cancelled if the operator specifies a recovery event that the workflow demonstrably subscribes to, blocking the entire batch if any run cannot be verified or resolved. Without it, bulk cancellation operations risk leaving PR branches in permanently broken, unmergeable states with absent required checks, repeating the manual remediation overhead of the incident.

## Phase — required
cross-phase

## Inputs — required
- Proposed workflow runs (`runs: Iterable[WorkflowRun]`, scripts/github_core/recovery_manifest.py:375).
- Required status check contexts for protected branches (`required: frozenset[str]`, scripts/github_core/recovery_manifest.py:17, 377).
- Workflow subscription definitions mapping names to parsed configurations (`subscriptions: Mapping[str, WorkflowSubscriptions]`, scripts/github_core/recovery_manifest.py:378).
- Candidate recovery event named by operator (`recovery_event: str | None`, scripts/github_core/recovery_manifest.py:379, 410-414).
- Target repository identifier in `owner/repo` format (`repository: str`, scripts/github_core/recovery_manifest.py:380, 430).
- Optional per-run workflow definitions for PR-pinned branch evaluation (`subscriptions_by_run: Mapping[int, WorkflowSubscriptions | None] | None`, scripts/github_core/recovery_manifest.py:381, 395-401).
- Optional injected clock for deterministic timestamping (`now: datetime | None`, scripts/github_core/recovery_manifest.py:382).

## Outputs — required
- `RecoveryManifest` dataclass instance containing `generated_at`, `repository`, `recovery_event`, `blast_radius`, `entries`, and properties `blocked` and `is_safe` (scripts/github_core/recovery_manifest.py:140-158, 428-434).
- `BlastRadius` dataclass instance summarizing counts of affected runs, pull requests, branches, workflows, queued runs, in-progress runs, and required contexts (scripts/github_core/recovery_manifest.py:126-137, 177-190).
- `RecoveryEntry` dataclass instances per run detailing required contexts, other contexts, assigned recovery event, verification classification, and blocking reasons (scripts/github_core/recovery_manifest.py:89-124, 243-266).
- JSON-serializable dictionary representation of the manifest from `manifest_to_dict` (scripts/github_core/recovery_manifest.py:437-475).
- Active status tuple from `active_statuses()` (`("queued", "in_progress")`) (scripts/github_core/recovery_manifest.py:53, 478-480).

## Invokes — required
- script workflow_event_subscriptions — scripts/github_core/recovery_manifest.py:29

## Invoked by — required
- script recovery_manifest — scripts/bulk_cancel_guard.py:63
- script recovery_manifest — scripts/github_core/runs_file.py:22
- script recovery_manifest — scripts/github_core/workflow_provenance.py:42
- script recovery_manifest — scripts/github_core/workflow_runs.py:20

## Concepts named — required, verbatim
- `Issue #4835` — scripts/github_core/recovery_manifest.py:3 — used here
- `REQUIRED_CONTEXTS` — scripts/github_core/recovery_manifest.py:17 — used here
- `PULL_REQUEST_RECOVERY_EVENTS` — scripts/github_core/recovery_manifest.py:30 — used here
- `RECOVERY_EVENTS` — scripts/github_core/recovery_manifest.py:31 — used here
- `WorkflowSubscriptions` — scripts/github_core/recovery_manifest.py:32 — used here
- `declared_required_contexts` — scripts/github_core/recovery_manifest.py:33 — used here
- `subscribes_to` — scripts/github_core/recovery_manifest.py:34 — used here
- `MANIFEST_VERSION` — scripts/github_core/recovery_manifest.py:51 — defined here
- `_ACTIVE_STATUSES` — scripts/github_core/recovery_manifest.py:53 — defined here
- `WorkflowRun` — scripts/github_core/recovery_manifest.py:57 — defined here
- `RecoveryEntry` — scripts/github_core/recovery_manifest.py:89 — defined here
- `BlastRadius` — scripts/github_core/recovery_manifest.py:127 — defined here
- `RecoveryManifest` — scripts/github_core/recovery_manifest.py:140 — defined here
- `dedupe_runs` — scripts/github_core/recovery_manifest.py:160 — defined here
- `summarize_blast_radius` — scripts/github_core/recovery_manifest.py:177 — defined here
- `resolve_workflow` — scripts/github_core/recovery_manifest.py:193 — defined here
- `_classify` — scripts/github_core/recovery_manifest.py:214 — defined here
- `plan_recovery` — scripts/github_core/recovery_manifest.py:374 — defined here
- `manifest_to_dict` — scripts/github_core/recovery_manifest.py:437 — defined here
- `active_statuses` — scripts/github_core/recovery_manifest.py:478 — defined here

## Structure
none (python module; classes: WorkflowRun, RecoveryEntry, BlastRadius, RecoveryManifest; functions: dedupe_runs, summarize_blast_radius, resolve_workflow, _classify, plan_recovery, manifest_to_dict, active_statuses)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/recovery_manifest.py`, language: Python 3, lines: 481
- documented invocation: none (library module without CLI entrypoint; imported by `scripts/bulk_cancel_guard.py` and other github_core modules)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/recovery_manifest.py`
  abridged stdout: (empty)
  **actual exit code:** 1 (fails with `ModuleNotFoundError: No module named 'scripts'` without PYTHONPATH)
- actual command run: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/recovery_manifest.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none (library module without CLI entrypoint) vs. actual exit paths in code:
  - no `exit`, `sys.exit`, or `raise SystemExit` statements in code
  - raises `ValueError` on unrecognized recovery event (`scripts/github_core/recovery_manifest.py:411`)
- for validators/gates:
  - can it exit non-zero? no direct CLI process exit; provides `is_safe` property and `plan_recovery` logic which gates `scripts/bulk_cancel_guard.py` execution, causing the guard to exit 1 (`EXIT_BLOCKED`) when required contexts cannot be regenerated.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0 when dependencies and PYTHONPATH are satisfied.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Fail-closed verification: runs whose job records have not materialized (`jobs_verified=False`) are blocked because the absence of a required context cannot be trusted as clean.
- Scoped path filter checks: path filter suppression logic is strictly scoped to pull request triggers (`synchronize`, `reopened`), preventing false blocks on recovery mechanisms like `rerun` or `workflow_dispatch` that are unaffected by path filters.
- Fork PR protection: enforces that `workflow_dispatch` requires a confirmed same-repository ref, failing closed if `head_repo` is unknown or originates from a fork.
- Context cost: 18,439 bytes, 481 lines, ~4,610 tokens.

## Context cost
18439 bytes, ~4610 tokens.
