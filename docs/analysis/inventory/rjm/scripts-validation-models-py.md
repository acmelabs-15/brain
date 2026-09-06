---
package: rjm
path: scripts/validation/models.py
type: script
bytes: 907
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/models.py, sha256: ab33e91e0a916534208d7d90ca1e1c407a0fc4a1bf3089774c17d6ae449a8e48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/models.py

## Purpose — required, verbatim
> "Provides a common ValidationResult dataclass used across validation scripts." — scripts/validation/models.py:3

## Design intent — required
Defines the standard `ValidationResult` dataclass shared across validation scripts in the repository. It enforces the invariant that validity is strictly derived from the emptiness of an `errors` list rather than maintained as an independent boolean flag, eliminating drift and inconsistency between error collections and overall validity status (addressing Issue #839).

## Phase — required
none

## Inputs — required
- `errors`: list of error message strings (scripts/validation/models.py:24)
- `warnings`: list of warning message strings (scripts/validation/models.py:25)

## Outputs — required
- `ValidationResult` dataclass instance with dynamic `is_valid` boolean property (scripts/validation/models.py:17, 28)

## Invokes — required
none

## Invoked by — required
- script models — scripts/validate_phase_gates.py:29
- script models — scripts/validation/skill_frontmatter.py:41
- script models — scripts/validation/__init__.py:6
- script models — scripts/validate_session_json.py:60

## Concepts named — required, verbatim
- `ValidationResult` — scripts/validation/models.py:17 — defined here
- `is_valid` — scripts/validation/models.py:28 — defined here
- `Issue #839` — scripts/validation/models.py:8 — used here

## Structure
- Module docstring (scripts/validation/models.py:1-9)
- Type imports (scripts/validation/models.py:11-14)
- `ValidationResult` dataclass with `is_valid` property (scripts/validation/models.py:16-31)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/models.py`
- **language:** Python (python3)
- **lines:** 31
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/models.py`
- **actual exit code:** 0
- **abridged stdout:** none (library module executes cleanly without stdout)
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual code paths: none (no direct `sys.exit` calls in module)
  - Result: module executes and imports cleanly.
- **for validators/gates:**
  - Can exit non-zero: No, pure dataclass definitions.
  - Verified on repository: tested under `tests/test_validation_types.py`.
- **does the output match what the documentation claims:** yes, provides the defined dataclass.

## Defects — required
none

## Observations
- Acts as the validation package sentinel file (`scripts/validation/models.py`) checked by other validation scripts to verify Python path resolution.

## Context cost
907 bytes, 31 lines, ~250 tokens.
