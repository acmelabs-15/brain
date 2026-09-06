---
package: rjm
path: scripts/github_core/recovery_manifest.py
type: script
bytes: 18439
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
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
Implements fail-closed recovery planning and verification data structures for safely executing bulk cancellations of GitHub Actions workflow runs. Originating from an operational incident (Issue #4835 on 2026-08-09) where 818 workflow runs across 41 PR branches were cancelled without a path to regenerate required status checks, this module enforces the invariant that any workflow run publishing required contexts can only be cancelled if the operator names a recovery event that the workflow demonstrably subscribes to. It inspects trigger path filters, fork branch dispatchability constraints, and unmaterialized job statuses (`jobs_verified`), computing an exact pre-cancellation blast radius and serializing verified recovery plans into structured JSON manifests.

## Phase — required
cross-phase

## Inputs — required
- Proposed workflow runs iterable `runs: Iterable[WorkflowRun]` (scripts/github_core/recovery_manifest.py:375).
- Required status check context names set `required: frozenset[str]` (scripts/github_core/recovery_manifest.py:377) from `scripts/ci/ruleset_required_contexts.py`.
- Parsed repository workflow subscriptions mapping `subscriptions: Mapping[str, WorkflowSubscriptions]` (scripts/github_core/recovery_manifest.py:378).
- Named candidate recovery event `recovery_event: str | None` (scripts/github_core/recovery_manifest.py:379), such as `synchronize`, `reopened`, `workflow_dispatch`, or `rerun`.
- Target repository identifier string `repository: str` (scripts/github_core/recovery_manifest.py:380).
- Optional per-run workflow subscription overrides `subscriptions_by_run: Mapping[int, WorkflowSubscriptions | None] | None` (scripts/github_core/recovery_manifest.py:381) mapping run IDs to PR-specific workflow definitions.
- Injected clock timestamp `now: datetime | None` (scripts/github_core/recovery_manifest.py:382).

## Outputs — required
- Structured recovery manifest object `RecoveryManifest` from `plan_recovery` (scripts/github_core/recovery_manifest.py:428).
- Serialized JSON dictionary from `manifest_to_dict` (scripts/github_core/recovery_manifest.py:438) containing `version`, `generated_at`, `repository`, `recovery_event`, `blast_radius`, `safe`, and `entries`.
- Blast radius metric object `BlastRadius` from `summarize_blast_radius` (scripts/github_core/recovery_manifest.py:177).
- Individual run verdict object `RecoveryEntry` from `_classify` (scripts/github_core/recovery_manifest.py:220).
- Deduplicated workflow runs list `list[WorkflowRun]` from `dedupe_runs` (scripts/github_core/recovery_manifest.py:160).
- Active status tuple `tuple[str, ...]` (`queued`, `in_progress`) from `active_statuses` (scripts/github_core/recovery_manifest.py:478).

## Invokes — required
- script workflow_event_subscriptions — scripts/github_core/recovery_manifest.py:29

## Invoked by — required
- script recovery_manifest — scripts/bulk_cancel_guard.py:63
- script recovery_manifest — scripts/github_core/runs_file.py:22
- script recovery_manifest — scripts/github_core/workflow_runs.py:20
- script recovery_manifest — scripts/github_core/workflow_provenance.py:42

## Concepts named — required, verbatim
- `PULL_REQUEST_RECOVERY_EVENTS` — scripts/github_core/recovery_manifest.py:30 — used here
- `RECOVERY_EVENTS` — scripts/github_core/recovery_manifest.py:31 — used here
- `WorkflowSubscriptions` — scripts/github_core/recovery_manifest.py:32 — used here
- `declared_required_contexts` — scripts/github_core/recovery_manifest.py:33 — used here
- `subscribes_to` — scripts/github_core/recovery_manifest.py:34 — used here
- `MANIFEST_VERSION` — scripts/github_core/recovery_manifest.py:38 — defined here
- `BlastRadius` — scripts/github_core/recovery_manifest.py:39 — defined here
- `RecoveryEntry` — scripts/github_core/recovery_manifest.py:40 — defined here
- `RecoveryManifest` — scripts/github_core/recovery_manifest.py:41 — defined here
- `WorkflowRun` — scripts/github_core/recovery_manifest.py:42 — defined here
- `active_statuses` — scripts/github_core/recovery_manifest.py:43 — defined here
- `dedupe_runs` — scripts/github_core/recovery_manifest.py:44 — defined here
- `manifest_to_dict` — scripts/github_core/recovery_manifest.py:45 — defined here
- `plan_recovery` — scripts/github_core/recovery_manifest.py:46 — defined here
- `resolve_workflow` — scripts/github_core/recovery_manifest.py:47 — defined here
- `summarize_blast_radius` — scripts/github_core/recovery_manifest.py:48 — defined here
- `_ACTIVE_STATUSES` — scripts/github_core/recovery_manifest.py:53 — defined here
- `_classify` — scripts/github_core/recovery_manifest.py:214 — defined here

## Structure
none (python module; classes: WorkflowRun, RecoveryEntry, BlastRadius, RecoveryManifest; functions: dedupe_runs, summarize_blast_radius, resolve_workflow, _classify, plan_recovery, manifest_to_dict, active_statuses)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/recovery_manifest.py`, language: Python 3, lines: 481
- documented invocation: none (library module without CLI entrypoint; imported by `scripts/bulk_cancel_guard.py` and downstream tools)
- **executed:** yes
- actual command run: `sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/recovery_manifest.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `sources/rjm/.venv/bin/python -c "from scripts.github_core.recovery_manifest import MANIFEST_VERSION, active_statuses, WorkflowRun, dedupe_runs; print('version:', MANIFEST_VERSION); print('statuses:', active_statuses()); r = WorkflowRun(1, 'w', 10, 'main', 'push', 'queued', ()); print('dedupe:', len(dedupe_runs([r, r])))"`
  abridged stdout: `version: 1\nstatuses: ('queued', 'in_progress')\ndedupe: 1`
  **actual exit code:** 0
- documented exit codes: none (library module without CLI docstring exit codes) vs. actual exit paths in code:
  - no `sys.exit` calls; raises `ValueError` on unknown recovery event names. Standalone execution completes with exit code 0.
- for validators/gates:
  - can it exit non-zero? no direct exit call; generates the recovery plan where any unverified entry blocks bulk cancellation in `bulk_cancel_guard.py`.
  - does it fail on the source repo's own default branch? no, module imports and executes cleanly with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Fail-closed security architecture: Any missing workflow definition, unmaterialized queued run jobs (`jobs_verified: false`), undeclared recovery event, trigger path filter suppression, or unconfirmed fork ref causes `_classify` to mark the entry as `verified: false` with an explanatory `blocked_reason`, preventing batch execution (lines 155-158, 268-365).
- Single source of truth for required checks: Prohibits duplicate copies of `REQUIRED_CONTEXTS`, taking them exclusively as a parameter from `scripts/ci/ruleset_required_contexts.py` (lines 16-20).
- Fork dispatch constraint enforcement: Recognizes that `workflow_dispatch` requires branches existing within the base repository, preventing unrecoverable cancellations on PRs from external forks (lines 336-364).
- Context cost: 18,439 bytes + 22,059 bytes (`workflow_event_subscriptions.py`) = 40,498 bytes, approximately 10,124 tokens.
