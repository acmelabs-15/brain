---
package: rjm
path: scripts/github_core/runs_file.py
type: script
bytes: 9738
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/runs_file.py, sha256: fc54605d096ae1191ec2ae922105c431c4f73b8993785931ff245fd72818e4f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/runs_file.py

## Purpose — required, verbatim
> "Read a captured run inventory, or a recovery manifest, back off disk." — scripts/github_core/runs_file.py:1

## Design intent — required
Safely deserializes and rigorously validates captured GitHub Actions workflow run inventories and bulk cancellation recovery manifests from disk storage. During live incidents, operators frequently inspect, copy, hand-edit, or truncate run records. A record that loses its context arrays would be misclassified as publishing no required status check contexts, causing dangerous unguarded bulk cancellations. This module eliminates type coercion and default substitution: string lists, booleans (`jobs_verified`), and integer identifiers (`run_id`, `pr_number`) are strictly type-validated. It seamlessly accepts two distinct disk formats: a structured recovery manifest (`version` and `entries`) or an inventory list of run records.

## Phase — required
cross-phase

## Inputs — required
- Filesystem path `path: Path` to a JSON file on disk (scripts/github_core/runs_file.py:193).
- Serialized JSON data representing either a recovery manifest dictionary (with keys `version` and `entries`) or a run inventory record list / dictionary with a `runs` key (scripts/github_core/runs_file.py:216, 222).
- Manifest and run dictionary structures mapping run metadata: `run_id`, `workflow_name` / `workflow`, `pr_number` / `pull_request`, `branch`, `event`, `status`, `contexts`, `required_contexts`, `other_contexts`, `jobs_verified`, `workflow_path`, `head_repo` (scripts/github_core/runs_file.py:118-140, 176-187).

## Outputs — required
- List of deserialized and validated workflow run objects `list[WorkflowRun]` from `load_runs_file` (scripts/github_core/runs_file.py:193).
- Individual `WorkflowRun` instances from `run_from_mapping` (scripts/github_core/runs_file.py:95) and `run_from_manifest_entry` (scripts/github_core/runs_file.py:146).
- Validated string lists `list[str]` from `string_list` (scripts/github_core/runs_file.py:32).
- Raises `ValueError` on missing fields, corrupted JSON, or invalid types (preventing silent fallback).

## Invokes — required
- script recovery_manifest — scripts/github_core/runs_file.py:22

## Invoked by — required
- script runs_file — scripts/bulk_cancel_guard.py:69

## Concepts named — required, verbatim
- `WorkflowRun` — scripts/github_core/runs_file.py:22 — used here
- `load_runs_file` — scripts/github_core/runs_file.py:25 — defined here
- `run_from_manifest_entry` — scripts/github_core/runs_file.py:26 — defined here
- `run_from_mapping` — scripts/github_core/runs_file.py:27 — defined here
- `string_list` — scripts/github_core/runs_file.py:28 — defined here
- `_json_bool` — scripts/github_core/runs_file.py:58 — defined here
- `_optional_str` — scripts/github_core/runs_file.py:77 — defined here

## Structure
none (python module; functions: string_list, _json_bool, _optional_str, run_from_mapping, run_from_manifest_entry, load_runs_file)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/runs_file.py`, language: Python 3, lines: 226
- documented invocation: none (library module without CLI entrypoint; imported by `scripts/bulk_cancel_guard.py`)
- **executed:** yes
- actual command run: `sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/runs_file.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `sources/rjm/.venv/bin/python -c "from scripts.github_core.runs_file import string_list; print(string_list(['build', 'test'], 'contexts'))"`
  abridged stdout: `['build', 'test']`
  **actual exit code:** 0
- documented exit codes: none (library module without CLI docstring exit codes) vs. actual exit paths in code:
  - no `sys.exit` calls; raises `ValueError` on malformed inputs or missing files (converted to exit code 2 by caller `bulk_cancel_guard.py`). Standalone execution completes with exit code 0.
- for validators/gates:
  - can it exit non-zero? no direct exit call; raises `ValueError` on invalid schemas, ensuring the caller exits non-zero rather than proceeding with a partial inventory.
  - does it fail on the source repo's own default branch? no, module loads and executes cleanly with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Anti-coercion validation: Rejects truthiness and string coercion (lines 35-42, 59-66) because coercing structures converts corrupted data into plausible contexts, risking unintended run cancellations.
- Taste ceiling compliance: Extracted from `scripts/bulk_cancel_guard.py` (Issue #4835) to maintain file length below the project's 500-line limit (lines 3-4).
- Dual format support: Reconstructs runs whether originating from a raw run query snapshot or an emitted recovery manifest, reconciling `required_contexts` and `other_contexts` back into `contexts` (lines 146-159, 216-225).
- Context cost: 9,738 bytes + 18,439 bytes (`recovery_manifest.py`) = 28,177 bytes, approximately 7,044 tokens.
