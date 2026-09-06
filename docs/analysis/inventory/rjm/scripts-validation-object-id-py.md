---
package: rjm
path: scripts/validation/object_id.py
type: script
bytes: 384
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/object_id.py, sha256: 4e1321ce4030f2df5927a2d6da55f7ca803a9d2afab00090bee8571aee9b960c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/object_id.py

## Purpose — required, verbatim
> "Object id validation shared by git safety gates." — scripts/validation/object_id.py:1

## Design intent — required
Provides a centralized, dependency-free validation function (`is_full_object_id`) to verify whether a string represents a full SHA-1 (40 hex characters) or SHA-256 (64 hex characters) Git object ID. It replaces repetitive regex evaluations across git hook policies, security pre-commit gates, and push lock verifiers with an efficient set membership check against allowed hex characters and standard hash lengths.

## Phase — required
cross-phase

## Inputs — required
- `value`: candidate object ID string (scripts/validation/object_id.py:9)

## Outputs — required
- Boolean flag from `is_full_object_id`: returns `True` if `value` has length 40 or 64 and consists entirely of valid hexadecimal characters, `False` otherwise (scripts/validation/object_id.py:12)

## Invokes — required
none

## Invoked by — required
- script object_id — scripts/validation/git_hook_policy.py:48

## Concepts named — required, verbatim
- `ZERO_SHA_LENGTHS` — scripts/validation/object_id.py:5 — defined here
- `is_full_object_id` — scripts/validation/object_id.py:9 — defined here

## Structure
- Module docstring (scripts/validation/object_id.py:1)
- Hash constants `ZERO_SHA_LENGTHS` and `_HEX_DIGITS` (scripts/validation/object_id.py:5-6)
- `is_full_object_id` validation function (scripts/validation/object_id.py:9-13)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/object_id.py`
- **language:** Python (python3)
- **lines:** 13
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/object_id.py`
- **actual exit code:** 0
- **abridged stdout:** none (library module executes cleanly without stdout)
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual code paths: none (no direct `sys.exit` calls in module)
  - Result: module executes and imports cleanly.
- **for validators/gates:**
  - Can exit non-zero: No, pure boolean function.
  - Verified on repository: tested under `tests/test_safe_push_pr_branch.py`.
- **does the output match what the documentation claims:** yes, provides the described validation function.

## Defects — required
none

## Observations
- Relies on `frozenset("0123456789abcdefABCDEF")` for O(1) character validation without regex compilation overhead.

## Context cost
384 bytes, 13 lines, ~100 tokens.
