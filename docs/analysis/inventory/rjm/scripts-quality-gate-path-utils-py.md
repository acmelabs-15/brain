---
package: rjm
path: scripts/quality_gate/path_utils.py
type: script
bytes: 639
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/path_utils.py, sha256: 08124dda4b3314400a2f087ca9a871fda7013715a91e58383adceecdd735ffc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/path_utils.py

## Purpose — required, verbatim
> "Path helpers for quality-gate workflow adapters." — scripts/quality_gate/path_utils.py:1

## Design intent — required
Provides repository path resolution and path traversal protection for quality-gate scripts. By defining `REPOSITORY_ROOT` anchored to `parents[2]` from the module file location and implementing `resolve_workspace_path` to guarantee that user-provided or workflow-provided paths do not escape the workspace root via directory traversal (`ValueError`), it ensures safe file system access across CI scripts.

## Phase — required
cross-phase

## Inputs — required
- "path: Path, label: str" — scripts/quality_gate/path_utils.py:10

## Outputs — required
- "REPOSITORY_ROOT = Path(__file__).resolve().parents[2]" — scripts/quality_gate/path_utils.py:7
- "raise ValueError(f\"{label} must stay within the repository workspace\") from exc" — scripts/quality_gate/path_utils.py:19

## Invokes — required
none

## Invoked by — required
- script path_utils — scripts/quality_gate/check_critical_failures.py:45
- script path_utils — scripts/quality_gate/external_signal_gate.py:50
- script path_utils — scripts/quality_gate/run_pytest.py:49
- script path_utils — scripts/quality_gate/spec_external_signal_gate.py:61

## Concepts named — required, verbatim
- `REPOSITORY_ROOT` — scripts/quality_gate/path_utils.py:7 — defined here
- `resolve_workspace_path` — scripts/quality_gate/path_utils.py:10 — defined here

## Structure
- REPOSITORY_ROOT = Path(__file__).resolve().parents[2] — scripts/quality_gate/path_utils.py:7
- def resolve_workspace_path(path: Path, label: str) -> Path: — scripts/quality_gate/path_utils.py:10

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/path_utils.py`
- language: Python
- lines: 21
- documented invocation: none documented (internal helper module without CLI entry point)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/quality_gate/path_utils.py`
- abridged stdout:
  ```text
  (exited 0 with no stdout/stderr; helper module)
  ```
- **actual exit code**: 0
- documented exit codes: none documented vs. actual exit paths: no exit calls; returns 0 on import/execution
- for validators/gates: not a gate; path utility module
- does the output match what the documentation claims? yes, resolves workspace paths and enforces confinement

## Defects — required
none

## Observations
- Simple, defensive 21-line utility preventing path traversal vulnerabilities across all quality gate adapters.
- Raises `ValueError(f"{label} must stay within the repository workspace")` if a candidate path traverses above `REPOSITORY_ROOT`.

## Context cost
639 bytes, approximately 160 tokens.
