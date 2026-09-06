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
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/path_utils.py

## Purpose — required, verbatim
> "Path helpers for quality-gate workflow adapters." — scripts/quality_gate/path_utils.py:1

## Design intent — required
Provides repository root discovery and path traversal containment for quality-gate scripts. By ensuring all resolved user- or CI-supplied paths stay strictly within `REPOSITORY_ROOT`, it prevents path traversal attacks, accidental reads of external files, and cross-boundary workspace escapes in CI and multi-agent operations.

## Phase — required
rjm:build

## Inputs — required
- Target filesystem path (`path: Path`)
- Label parameter string (`label: str`): "{label} must stay within the repository workspace" — scripts/quality_gate/path_utils.py:19

## Outputs — required
- Resolved absolute `Path` guaranteed to reside within the repository workspace
- Raises `ValueError` when path traversal outside the repository is attempted

## Invokes — required
none

## Invoked by — required
- script path_utils — scripts/quality_gate/check_critical_failures.py:45
- script REPOSITORY_ROOT — scripts/quality_gate/external_signal_gate.py:50
- script resolve_workspace_path — scripts/quality_gate/run_pytest.py:52
- script REPOSITORY_ROOT — scripts/quality_gate/spec_external_signal_gate.py:61

## Concepts named — required, verbatim
- `REPOSITORY_ROOT` — scripts/quality_gate/path_utils.py:7 — defined here
- `resolve_workspace_path` — scripts/quality_gate/path_utils.py:10 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/path_utils.py`, language: Python 3, lines: 21
- documented invocation: none (internal utility module)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/quality_gate/path_utils.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (utility module without CLI entrypoint).
  Actual exit paths in code: exits implicitly with code 0 on load or execution (no `sys.exit` calls in file).
- for validators/gates: can it exit non-zero? no (raises `ValueError` on traversal). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, resolves valid repo paths and raises `ValueError` on traversal attempts.

## Defects — required
none

## Observations
Uses `Path(__file__).resolve().parents[2]` to deterministically anchor the workspace root regardless of the current working directory from which a script is invoked.

## Context cost
639 bytes (~160 tokens).
