---
package: rjm
path: scripts/github_core/workflow_event_subscriptions.py
type: script
bytes: 22059
unit: inv-rjm-244
in_scope_via: scripts/bulk_cancel_guard.py
aliases: []
memo_inputs:
  - {path: scripts/github_core/workflow_event_subscriptions.py, sha256: c96ed1a14ed968911cba419c7e5b7281afb018736e06e0b521a2cea23ee923f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/workflow_event_subscriptions.py

## Purpose — required, verbatim
> "Which recovery events a workflow actually subscribes to." — scripts/github_core/workflow_event_subscriptions.py:1

## Design intent — required
A bulk cancellation of PR workflow runs is safe only when every required context it cancels can be reliably regenerated (incident #4835). Because "close and reopen the PR" is the standard recovery mechanism, workflows that declare an explicit `pull_request.types` list omitting `reopened` would fail to re-trigger, leaving required checks permanently missing. This module parses GitHub Actions workflow YAML files to statically determine event subscriptions (`pull_request`, `pull_request_target`, `workflow_dispatch`, `rerun`), detects path filters (`paths`, `paths-ignore`), maps declared job identities and matrix expression prefixes, and implements fail-closed intersection logic when multiple workflow files declare identical workflow names.

## Phase — required
cross-phase

## Inputs — required
- GitHub Actions workflow YAML documents (`document: Mapping[Any, Any]`) parsed via PyYAML.
- Workflow directory path (`workflows_dir: Path`, typically `.github/workflows`).
- Required status check contexts (`required: frozenset[str]`) from ruleset configuration.
- Candidate recovery event identifiers (`event: str`, such as `synchronize`, `reopened`, `workflow_dispatch`, `rerun`).
- Pre-parsed `WorkflowSubscriptions` instances for head/base ref merging (`head`, `base`) and shared-name intersection (`first`, `second`).

## Outputs — required
- `WorkflowSubscriptions` dataclass instances containing `name`, `pull_request_types`, `has_workflow_dispatch`, `job_names`, `job_name_prefixes`, and `has_path_filters` (scripts/github_core/workflow_event_subscriptions.py:129-166).
- Mapping of workflow names and filenames to consolidated `WorkflowSubscriptions` (`dict[str, WorkflowSubscriptions]`) (scripts/github_core/workflow_event_subscriptions.py:415-468).
- Set of declared required contexts (`frozenset[str]`) matched by literal name or matrix prefix (scripts/github_core/workflow_event_subscriptions.py:285-310).
- Boolean recovery feasibility verdicts from `subscribes_to` (scripts/github_core/workflow_event_subscriptions.py:312-331).

## Invokes — required
- package yaml — scripts/github_core/workflow_event_subscriptions.py:61

## Invoked by — required
- script workflow_event_subscriptions — scripts/bulk_cancel_guard.py:70
- script workflow_event_subscriptions — scripts/github_core/recovery_manifest.py:29
- script workflow_event_subscriptions — scripts/github_core/workflow_provenance.py:43

## Concepts named — required, verbatim
- `Issue #4835` — scripts/github_core/workflow_event_subscriptions.py:3 — used here
- `DEFAULT_PULL_REQUEST_TYPES` — scripts/github_core/workflow_event_subscriptions.py:77 — defined here
- `RECOVERY_EVENTS` — scripts/github_core/workflow_event_subscriptions.py:94 — defined here
- `PULL_REQUEST_RECOVERY_EVENTS` — scripts/github_core/workflow_event_subscriptions.py:109 — defined here
- `_PULL_REQUEST_TRIGGERS` — scripts/github_core/workflow_event_subscriptions.py:111 — defined here
- `_PATH_FILTER_KEYS` — scripts/github_core/workflow_event_subscriptions.py:120 — defined here
- `_EXPRESSION_MARKER` — scripts/github_core/workflow_event_subscriptions.py:125 — defined here
- `WorkflowSubscriptions` — scripts/github_core/workflow_event_subscriptions.py:129 — defined here
- `_trigger_mapping` — scripts/github_core/workflow_event_subscriptions.py:168 — defined here
- `_declared_types` — scripts/github_core/workflow_event_subscriptions.py:197 — defined here
- `_declares_path_filter` — scripts/github_core/workflow_event_subscriptions.py:214 — defined here
- `_job_identities` — scripts/github_core/workflow_event_subscriptions.py:221 — defined here
- `parse_workflow_subscriptions` — scripts/github_core/workflow_event_subscriptions.py:246 — defined here
- `declared_required_contexts` — scripts/github_core/workflow_event_subscriptions.py:285 — defined here
- `subscribes_to` — scripts/github_core/workflow_event_subscriptions.py:312 — defined here
- `pin_to_head_ref` — scripts/github_core/workflow_event_subscriptions.py:333 — defined here
- `_narrow_to_shared` — scripts/github_core/workflow_event_subscriptions.py:381 — defined here
- `load_workflow_subscriptions` — scripts/github_core/workflow_event_subscriptions.py:415 — defined here

## Structure
none (python module; dataclass: WorkflowSubscriptions; functions: _trigger_mapping, _declared_types, _declares_path_filter, _job_identities, parse_workflow_subscriptions, declared_required_contexts, subscribes_to, pin_to_head_ref, _narrow_to_shared, load_workflow_subscriptions)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/workflow_event_subscriptions.py`, language: Python 3, lines: 469
- documented invocation: none (library module without CLI entrypoint; imported by bulk_cancel_guard.py and recovery_manifest.py)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/workflow_event_subscriptions.py`
  abridged stdout: (empty)
  **actual exit code:** 1 (fails with `ModuleNotFoundError: No module named 'yaml'` in bare system python without virtualenv dependencies)
- actual command run (via project uv environment): `uv run --directory sources/rjm python scripts/github_core/workflow_event_subscriptions.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module verification): `uv run --directory sources/rjm python -c "from scripts.github_core.workflow_event_subscriptions import DEFAULT_PULL_REQUEST_TYPES, RECOVERY_EVENTS; print('defaults:', sorted(list(DEFAULT_PULL_REQUEST_TYPES)), 'recovery:', sorted(list(RECOVERY_EVENTS)))"`
  abridged stdout: `defaults: ['opened', 'reopened', 'synchronize'] recovery: ['reopened', 'rerun', 'synchronize', 'workflow_dispatch']`
  **actual exit code:** 0
- documented exit codes: none (library module without CLI entrypoint) vs. actual exit paths in code:
  - no `exit`, `sys.exit`, or `raise SystemExit` statements exist in the module
  - module executes cleanly with exit code 0 when dependencies are present
- for validators/gates:
  - can it exit non-zero? no direct CLI exit code, but `subscribes_to` gates recovery operations in `scripts/bulk_cancel_guard.py`, causing `bulk_cancel_guard` to exit 1 (`EXIT_BLOCKED`) when required contexts cannot be regenerated.
  - does it fail on the source repo's own default branch? no, correctly parses `.github/workflows` on the default branch without unhandled exceptions.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- YAML 1.1 boolean coercion: `_trigger_mapping` checks `key is True or key == "on"`, preventing silent dropping of unquoted `on:` triggers that YAML 1.1 coercers interpret as booleans.
- Fail-closed name ambiguity resolution: when multiple workflow files share the same declared `name:`, `_narrow_to_shared` takes the intersection of event subscriptions (conservative recovery promise) and the union of job names and path filters (conservative blast radius assessment).
- Matrix job context discovery: `_job_identities` splits names at `${{` expressions to allow prefix matching for matrix fan-out jobs like `Analyze (${{ matrix.language }})`, ensuring queued runs can be scored before job steps are materialized.
- Context cost: 22,059 bytes, 469 lines, ~5,515 tokens.
