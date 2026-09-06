---
package: rjm
path: scripts/github_core/runs_file.py
type: script
bytes: 9738
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: scripts/github_core/runs_file.py, sha256: fc54605d096ae1191ec2ae922105c431c4f73b8993785931ff245fd72818e4f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/github_core/runs_file.py

## Purpose — required, verbatim
> "Read a captured run inventory, or a recovery manifest, back off disk." — scripts/github_core/runs_file.py:1

## Design intent — required
Provides strict, fail-closed deserialization and validation of captured workflow run inventories or recovery manifests replayed from disk (`--runs-file`) into `WorkflowRun` instances (split from `scripts/bulk_cancel_guard.py` under Issue #4835). Because files on disk may be hand-edited, truncated, or corrupted mid-incident, it enforces validation rather than coercion for every field (rejecting non-string lists, truthy non-booleans, and malformed mappings). A corrupted or defaulted empty context array would falsely cause a run to appear as publishing no required contexts, leading to an unguarded cancellation of required checks.

## Phase — required
cross-phase

## Inputs — required
- File path to disk artifact (`path: Path`, scripts/github_core/runs_file.py:193-207).
- Parsed JSON payloads representing workflow run records or recovery manifest entries (`payload: Mapping[str, Any]`, `entry: object`, scripts/github_core/runs_file.py:95, 146).
- Field values and field names under validation (`value: object`, `field: str`, scripts/github_core/runs_file.py:32, 58, 77).

## Outputs — required
- List of validated `WorkflowRun` instances (`list[WorkflowRun]`, scripts/github_core/runs_file.py:130-141, 175-188, 220, 225).
- Validated string lists from `string_list` (`list[str]`, scripts/github_core/runs_file.py:32, 55).
- Validated boolean values from `_json_bool` (`bool`, scripts/github_core/runs_file.py:58, 73).
- Validated optional strings from `_optional_str` (`str`, scripts/github_core/runs_file.py:77, 91).

## Invokes — required
- script recovery_manifest — scripts/github_core/runs_file.py:22

## Invoked by — required
- script runs_file — scripts/bulk_cancel_guard.py:69

## Concepts named — required, verbatim
- `Issue #4835` — scripts/github_core/runs_file.py:3 — used here
- `bulk_cancel_guard.py` — scripts/github_core/runs_file.py:3 — used here
- `WorkflowRun` — scripts/github_core/runs_file.py:22 — used here
- `string_list` — scripts/github_core/runs_file.py:32 — defined here
- `_json_bool` — scripts/github_core/runs_file.py:58 — defined here
- `_optional_str` — scripts/github_core/runs_file.py:77 — defined here
- `run_from_mapping` — scripts/github_core/runs_file.py:95 — defined here
- `run_from_manifest_entry` — scripts/github_core/runs_file.py:146 — defined here
- `load_runs_file` — scripts/github_core/runs_file.py:193 — defined here

## Structure
none (python module; functions: string_list, _json_bool, _optional_str, run_from_mapping, run_from_manifest_entry, load_runs_file)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/runs_file.py`, language: Python 3, lines: 226
- documented invocation: none (library module without CLI entrypoint; imported by `scripts/bulk_cancel_guard.py`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/runs_file.py`
  abridged stdout: (empty)
  **actual exit code:** 1 (fails with `ModuleNotFoundError: No module named 'scripts'` without PYTHONPATH)
- actual command run: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/runs_file.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none (library module without CLI entrypoint) vs. actual exit paths in code:
  - no `exit`, `sys.exit`, or `raise SystemExit` statements in code
  - raises `ValueError` on malformed, non-JSON, or invalid-typed input (`scripts/github_core/runs_file.py:47`)
- for validators/gates:
  - can it exit non-zero? no direct process exit; raises `ValueError` on structural validation failures which causes `scripts/bulk_cancel_guard.py` to abort with exit code 2.
  - does it fail on the source repo's own default branch? no, module imports cleanly and executes with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Strict validation vs coercion: explicitly rejects truthiness coercion (e.g. `bool("false")` evaluates to `True`, which would misclassify unmaterialized runs as verified).
- Dual-shape format support: recognizes both raw run lists and serialized `RecoveryManifest` objects with `version` and `entries`, reconstructing unified context lists from partitioned `required_contexts` and `other_contexts`.
- Incident resilience: treats missing keys or unexpected types as fatal `ValueError` exceptions to prevent operators from running unguarded cancellations during incidents with corrupted run logs.
- Context cost: 9,738 bytes, 226 lines, ~2,434 tokens.

## Context cost
9738 bytes, ~2434 tokens.
