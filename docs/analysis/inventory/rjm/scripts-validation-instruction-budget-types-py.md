---
package: rjm
path: scripts/validation/instruction_budget_types.py
type: script
bytes: 1617
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/instruction_budget_types.py, sha256: a3292e41bdba9b8febe9f2beb43bc72840e07d7ed88e861a78ed14cfe4b39d4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/instruction_budget_types.py

## Purpose — required, verbatim
> "Value objects for instruction budget validation." — scripts/validation/instruction_budget_types.py:1

## Design intent — required
Defines frozen, strongly-typed domain value objects (`InstructionFile` and `ExtensionResult`) for instruction token budget measurement and gate evaluation. It encapsulates calculated properties for usage percentage, budget breaches, remaining headroom bytes, and reserve requirements for concurrent branch merges. Decoupling these value types from the execution engine prevents cyclic dependencies between glob analysis, measurement calculation, and result formatting.

## Phase — required
none

## Inputs — required
- File attributes: `name`, `size_bytes`, `estimated_tokens`, `patterns` frozenset (scripts/validation/instruction_budget_types.py:12-15)
- Measurement parameters: `extension`, `matched_files`, `total_bytes`, `estimated_tokens`, `ceiling_bytes`, `reserve_bytes` (scripts/validation/instruction_budget_types.py:22-27)

## Outputs — required
- Instances of `InstructionFile` and `ExtensionResult` (scripts/validation/instruction_budget_types.py:9, 19)
- Computed property values: `usage_percent` (float), `over_budget` (bool), `headroom_bytes` (int), `under_reserve` (bool) (scripts/validation/instruction_budget_types.py:30, 36, 40, 45)

## Invokes — required
none

## Invoked by — required
- script instruction_budget_types — scripts/validation/instruction_budget.py:61

## Concepts named — required, verbatim
- `InstructionFile` — scripts/validation/instruction_budget_types.py:9 — defined here
- `ExtensionResult` — scripts/validation/instruction_budget_types.py:19 — defined here
- `headroom_bytes` — scripts/validation/instruction_budget_types.py:40 — defined here
- `under_reserve` — scripts/validation/instruction_budget_types.py:45 — defined here

## Structure
- Module docstring (scripts/validation/instruction_budget_types.py:1)
- `InstructionFile` dataclass definition (scripts/validation/instruction_budget_types.py:8-15)
- `ExtensionResult` dataclass definition with derived budget properties (scripts/validation/instruction_budget_types.py:18-56)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/instruction_budget_types.py`
- **language:** Python (python3)
- **lines:** 57
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/instruction_budget_types.py`
- **actual exit code:** 0
- **abridged stdout:** none (library module executes cleanly without stdout)
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual code paths: none (no direct `sys.exit` calls in module)
  - Result: value objects module imports cleanly.
- **for validators/gates:**
  - Can exit non-zero: No, pure dataclass definitions.
  - Verified on repository: tested under `tests/validation/test_instruction_budget.py`.
- **does the output match what the documentation claims:** yes, provides the defined dataclasses.

## Defects — required
none

## Observations
- `under_reserve` property guards against concurrent PR merges breaching the ceiling when individual PRs pass within a thin headroom margin.

## Context cost
1617 bytes, 57 lines, ~400 tokens.
