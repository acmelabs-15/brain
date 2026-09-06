---
package: rjm
path: scripts/utils/path_validation.py
type: script
bytes: 4486
unit: inv-rjm-268
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/utils/path_validation.py, sha256: c2f4ac43ed5662e0fddce7be5e1a0e91c5e0592b931e84b4c7415cca2cd0e949}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/utils/path_validation.py

## Purpose — required, verbatim
> "Path validation utilities for CWE-22 protection." — scripts/utils/path_validation.py:1

## Design intent — required
Provides utility functions for path sanitization and directory traversal prevention (CWE-22) across Python CLI scripts, validation gates, and tools in the repository. Solves the problem of unsafe path manipulation and directory traversal vulnerabilities by verifying that user-supplied paths resolve strictly within designated base directories (such as the repository root) using canonical path resolution (`resolve()` and `relative_to()`), as well as sanitizing or validating individual filename components. Without it, scripts accepting filesystem paths from arguments, configuration files, or logs would be susceptible to path traversal attacks escaping repository or workspace boundaries. Implemented per ADR-042 Phase 2 Security Controls.

## Phase — required
cross-phase

## Inputs — required
- File paths or directory paths (`path: str | Path`, `base_dir: str | Path`) — scripts/utils/path_validation.py:18
- Filenames (`filename: str`) — scripts/utils/path_validation.py:69, 103
- Path components (`component: str`) — scripts/utils/path_validation.py:126

## Outputs — required
- Resolved canonical Path object guaranteed to be within base directory (scripts/utils/path_validation.py:31, 66)
- Boolean safety verdict for filename checks (scripts/utils/path_validation.py:69, 81)
- Validated filename string (scripts/utils/path_validation.py:103, 110, 123)
- Sanitized path component string (scripts/utils/path_validation.py:126, 136, 154)
- Exceptions raised on invalid or escaping paths: FileNotFoundError (scripts/utils/path_validation.py:49) or ValueError (scripts/utils/path_validation.py:52, 62, 122)

## Invokes — required
none

## Invoked by — required
- script path_validation — scripts/validate_phase_gates.py:28
- script path_validation — scripts/validate_pr_review_config.py:26
- script path_validation — scripts/validate_session_json.py:59
- script path_validation — scripts/check_skill_exists.py:28
- script path_validation — scripts/detect_skill_violation.py:38
- script path_validation — scripts/skill_registry.py:33
- script path_validation — src/copilot-cli/skills/github/scripts/pr/run_completion_gate.py:306

## Concepts named — required, verbatim
- `CWE-22` — scripts/utils/path_validation.py:1 — used here
- `ADR-042` — scripts/utils/path_validation.py:6 — used here
- `SAFE_FILENAME_PATTERN` — scripts/utils/path_validation.py:15 — defined here
- `validate_safe_path` — scripts/utils/path_validation.py:18 — defined here
- `is_safe_filename` — scripts/utils/path_validation.py:69 — defined here
- `validate_filename` — scripts/utils/path_validation.py:103 — defined here
- `sanitize_path_component` — scripts/utils/path_validation.py:126 — defined here

## Structure
- Module docstring citing CWE-22 and ADR-042 (scripts/utils/path_validation.py:1-7)
- Imports and regex pattern definition `SAFE_FILENAME_PATTERN` (scripts/utils/path_validation.py:9-15)
- `validate_safe_path`: canonical directory containment verification (scripts/utils/path_validation.py:18-66)
- `is_safe_filename`: character whitelist and traversal pattern check (scripts/utils/path_validation.py:69-100)
- `validate_filename`: assertion wrapper raising ValueError on unsafe filename (scripts/utils/path_validation.py:103-123)
- `sanitize_path_component`: stripping path separators, `..`, and leading/trailing dots/spaces (scripts/utils/path_validation.py:126-154)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/utils/path_validation.py`
- **language:** Python (python3)
- **lines:** 155
- **documented invocation:**
  - `validate_safe_path("data/config.json", project_root)` — scripts/utils/path_validation.py:39
  - `is_safe_filename("config.json")` — scripts/utils/path_validation.py:84
  - `validate_filename("config.json")` — scripts/utils/path_validation.py:116
  - `sanitize_path_component("my..file")` — scripts/utils/path_validation.py:139
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/utils/path_validation.py`
- **abridged stdout:** (empty output)
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none (utility library module without CLI parser or exit codes documented)
  - Actual code paths: No `sys.exit()` calls; raises `FileNotFoundError` (scripts/utils/path_validation.py:49) or `ValueError` (scripts/utils/path_validation.py:52, 62, 122) on errors. Executing the module directly completes with exit code 0.
- **for validators/gates:** Not a CLI standalone gate or validator script; pure helper library module used by gate scripts (`validate_phase_gates.py`, `validate_pr_review_config.py`).
- **does the output match what the documentation claims:** yes; library functions behave as described in docstrings when imported, though docstring doctests fail when run via `python3 -m doctest` because `/home/user/project` does not exist on disk.

## Defects — required
- doc-drift · scripts/utils/path_validation.py:38-44 · The docstring example for `validate_safe_path` uses `/home/user/project` as `project_root`, which does not exist on disk, causing doctest execution (`python3 -m doctest`) to raise `FileNotFoundError` at line 49 instead of returning the expected resolved path or testing `ValueError`.
- doc-drift · scripts/utils/path_validation.py:118-119 · The docstring example for `validate_filename("../etc/passwd")` claims it raises `ValueError: Unsafe filename: ../etc/passwd` directly without the full exception traceback syntax required by doctest.

## Observations
- Robust defense against CWE-22 (path traversal) by resolving both base and target paths to canonical form and enforcing `resolved_path.relative_to(resolved_base)` instead of naive string prefix matching.
- Requires `base_dir` to actually exist and be a directory on disk; cannot validate relative paths against non-existent mock bases without creating them first.

## Context cost
4486 bytes, 155 lines, ~1100 tokens.
