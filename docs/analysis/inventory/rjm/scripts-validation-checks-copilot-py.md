---
package: rjm
path: scripts/validation/checks_copilot.py
type: script
bytes: 672
unit: inv-rjm-291
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_copilot.py, sha256: a87749f06bec537b9a0ba2d61d7ba1cdbef072251d599d7518826aa0d3b22bdd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_copilot.py

## Purpose — required, verbatim
> "Copilot-specific validation wrappers for the pre-PR runner." — scripts/validation/checks_copilot.py:2

## Design intent — required
Provides a defensive wrapper around `validate_copilot_routing_exclusions` for execution during the pre-PR validation sequence. It catches `FileNotFoundError` when Copilot CLI templates are absent from the repository or workspace, logging a warning and returning `True` so validation gracefully skips rather than failing when Copilot routing exclusions are inapplicable. Other unhandled exceptions are caught and reported to standard error, returning `False` to signal a failed validation gate.

## Phase — required
rjm:test

## Inputs — required
- Function arguments:
  - `repo_root: Path` specifying the repository root passed to the underlying validation function (scripts/validation/checks_copilot.py:11, 13)
- Underlying validation implementation:
  - `check_copilot_routing_exclusions.validate_copilot_routing_exclusions` imported as `_validate_module` (scripts/validation/checks_copilot.py:8)

## Outputs — required
- Return value:
  - `bool`: `True` if Copilot routing exclusions are valid or if the template was not found (`FileNotFoundError`), `False` on any other exception (scripts/validation/checks_copilot.py:13, 16, 19)
- Standard output:
  - `[WARNING] copilot-cli template not found; skipping Copilot routing exclusion check` (scripts/validation/checks_copilot.py:15)
- Standard error:
  - `[ERROR] copilot routing exclusion check failed: {exc}` (scripts/validation/checks_copilot.py:18)

## Invokes — required
- script check_copilot_routing_exclusions — scripts/validation/checks_copilot.py:8

## Invoked by — required
- script checks_copilot — scripts/validation/pre_pr_sequence.py:206

## Concepts named — required, verbatim
- `validate_copilot_routing_exclusions` — scripts/validation/checks_copilot.py:11 — defined here
- `_validate_module` — scripts/validation/checks_copilot.py:8 — used here

## Structure
- `validate_copilot_routing_exclusions` — scripts/validation/checks_copilot.py:11

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_copilot.py`, language: Python, lines: 20
- documented invocation:
  - "(no standalone CLI entry point; invoked as a validation gate function via `validate_copilot_routing_exclusions(repo_root)` in `scripts/validation/pre_pr_sequence.py:206-208`)"
- executed: yes
- actual command run:
  `sources/rjm/.venv/bin/python -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/validation'); import checks_copilot; from pathlib import Path; print('result:', checks_copilot.validate_copilot_routing_exclusions(Path('sources/rjm')))"`
  abridged stdout:
  ```
  result: True
  ```
  actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: Module defines no standalone CLI exit codes; functions return boolean verdicts.
  - Actual exit paths: Direct CLI execution `python checks_copilot.py` executes imports and exits 0. `validate_copilot_routing_exclusions` returns `True` at scripts/validation/checks_copilot.py:13 or line 16, and `False` at line 19 on caught exceptions.
- for validators/gates: can it exit non-zero?
  Function returns `False` on failure, which `pre_pr_sequence.py:208` converts to a failed gate. Does it fail on the source repo's own default branch? No, returns `True`.
- does output match what documentation claims?
  Yes, safely delegates Copilot routing exclusion validation with `FileNotFoundError` resilience.

## Defects — required
none

## Observations
Unlike sibling validation modules (`checks_common.py`, `checks_changed_paths.py`), `checks_copilot.py` does not automatically prepend `Path(__file__).resolve().parent` to `sys.path`. It relies on the caller (such as `pre_pr_sequence.py`) or current execution context having `scripts/validation` on the Python module search path when importing sibling `check_copilot_routing_exclusions`.

## Context cost
File size: 672 bytes, 20 lines, ~150 tokens. Depends on `check_copilot_routing_exclusions.py` (6846 bytes).
