---
package: rjm
path: scripts/hook_utilities/path_safety.py
type: script
bytes: 1005
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/hook_utilities/path_safety.py, sha256: 5e74bbfd4a7a88137745cca178c34efe5632873fa0836d192f164074cfb03b10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/hook_utilities/path_safety.py

## Purpose — required, verbatim
> "Path safety helpers for plugin-distributed scripts." — scripts/hook_utilities/path_safety.py:1

## Design intent — required
Validates filesystem path inputs against CWE-22 path traversal attacks across plugin-distributed tools and skill scripts. Ensures relative paths resolve inside the current working directory and rejects path strings containing the `..` sequence, while allowing absolute paths to be governed by operating system permissions.

## Phase — required
cross-phase

## Inputs — required
- Path instance to validate (`path: Path`).
- Context label string for error messages (`context: str = "path"`).
- Current working directory via `Path.cwd().resolve()`.

## Outputs — required
- Resolved `Path` instance when validation succeeds.
- Raises `PermissionError` when prohibited `..` sequence is present or when relative path resolves outside the current working directory.

## Invokes — required
none

## Invoked by — required
- script path_safety — .claude/skills/threat-modeling/scripts/validate_threat_model.py:31
- script path_safety — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:30
- script path_safety — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:32

## Concepts named — required, verbatim
- `validate_path_no_traversal` — scripts/hook_utilities/path_safety.py:8 — defined here
- `CWE-22` — scripts/hook_utilities/path_safety.py:9 — used here

## Structure
- `validate_path_no_traversal` — scripts/hook_utilities/path_safety.py:8

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/hook_utilities/path_safety.py`, language: Python 3, lines: 32
- documented invocation: none (path validation helper function)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/path_safety.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from pathlib import Path; from scripts.hook_utilities.path_safety import validate_path_no_traversal; print('safe:', validate_path_no_traversal(Path('.')))"`
  abridged stdout: `safe: /Users/peterkloss/Dev/ACMElabs/brain-v2`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code:
  - no `sys.exit` calls; raises `PermissionError` on path traversal attempts. Standalone execution exits 0.
- for validators/gates:
  - can it exit non-zero? no direct exit; raises `PermissionError` on path traversal.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Permissive absolute paths: Absolute paths bypass the directory boundary check because OS filesystem permissions govern access outside the repository root (lines 11-12, 22-29).
- Syntactic sequence check: Explicitly checks for `".." in path_str` before path resolution to quickly block double-dot sequences (lines 15-19).

## Context cost
1,005 bytes (~251 tokens).
