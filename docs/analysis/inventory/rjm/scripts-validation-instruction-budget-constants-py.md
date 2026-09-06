---
package: rjm
path: scripts/validation/instruction_budget_constants.py
type: script
bytes: 470
unit: inv-rjm-296
in_scope_via: scripts/validation/instruction_budget.py
aliases: []
memo_inputs:
  - {path: scripts/validation/instruction_budget_constants.py, sha256: 99655c21bc59157ba59e66b88e9a14f44ac814438ede31a67c62bd55f1a6a1a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/instruction_budget_constants.py

## Purpose — required, verbatim
> "Constants for instruction budget validation." — scripts/validation/instruction_budget_constants.py:1

## Design intent — required
Provides a single, centralized source of truth for instruction budget file path constants and non-regression ratchet ceilings. When enforcing context limits on AI instruction sets, hardcoding byte caps or subdirectory paths across multiple scripts and test suites risks configuration drift and makes downward ratchet maintenance error-prone. By isolating directory paths (`.github/instructions`), file pattern globs (`*.instructions.md`), reserve buffer allowances (600 bytes), and byte ceilings (`.py`, `.cs`, `.ps1`, `.md`) into a standalone constants module, the repository ensures that `instruction_budget.py` and regression tests in `test_instruction_ceiling_ratchet.py` evaluate against identical boundary values.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Exported module-level constants available upon import:
- `INSTRUCTIONS_SUBDIR` (`".github/instructions"`) — scripts/validation/instruction_budget_constants.py:5
- `INSTRUCTION_GLOB` (`"*.instructions.md"`) — scripts/validation/instruction_budget_constants.py:6
- `DEFAULT_RESERVE_BYTES` (`600`) — scripts/validation/instruction_budget_constants.py:7
- `DEFAULT_CEILINGS_BYTES` (`{".py": 99_000, ".cs": 99_000, ".ps1": 99_000, ".md": 83_000}`) — scripts/validation/instruction_budget_constants.py:11

## Invokes — required
none

## Invoked by — required
- script instruction_budget — scripts/validation/instruction_budget.py:48

## Concepts named — required, verbatim
- `INSTRUCTIONS_SUBDIR` — scripts/validation/instruction_budget_constants.py:5 — defined here
- `INSTRUCTION_GLOB` — scripts/validation/instruction_budget_constants.py:6 — defined here
- `DEFAULT_RESERVE_BYTES` — scripts/validation/instruction_budget_constants.py:7 — defined here
- `DEFAULT_CEILINGS_BYTES` — scripts/validation/instruction_budget_constants.py:11 — defined here

## Structure
- Module docstring — scripts/validation/instruction_budget_constants.py:1
- Future annotations import — scripts/validation/instruction_budget_constants.py:3
- Path and reserve constants — scripts/validation/instruction_budget_constants.py:5-7
- Non-regression ratchet ceilings dictionary — scripts/validation/instruction_budget_constants.py:9-16

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/instruction_budget_constants.py`, language: Python 3, lines: 17
- documented invocation:
  - "Constants for instruction budget validation." — scripts/validation/instruction_budget_constants.py:1
- executed: yes
- actual command run: `python3 scripts/validation/instruction_budget_constants.py`
- abridged stdout: `(empty)`
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented exit codes: none
  - Actual exit paths in code: exits 0 upon clean module evaluation completion
- for validators/gates:
  - can it exit non-zero: no, contains only static constant declarations
  - does it fail on default branch: no, executes cleanly with exit code 0
- does output match what the documentation claims: yes, loads definitions and constants with no execution side effects

## Defects — required
none

## Observations
- Acts as the baseline ceiling definition verified by `tests/validation/test_instruction_ceiling_ratchet.py` to ensure ratchet monotonicity (ceilings can only decrease, never increase).
- Referenced in `src/copilot-cli/skills/context-optimizer/references/model-context-doctrine.md` and `rule-audit-procedure.md` as the authoritative source for instruction size bounds.

## Context cost
470 bytes, 17 lines, ~118 tokens.
