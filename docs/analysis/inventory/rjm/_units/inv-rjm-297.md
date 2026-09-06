---
unit: inv-rjm-297
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-297

## Files assigned
- [x] sources/rjm/scripts/validation/instruction_budget_globs.py
- [x] sources/rjm/scripts/validation/instruction_budget_types.py
- [x] sources/rjm/scripts/validation/instruction_budget.py
- [x] sources/rjm/scripts/validation/model_pin_baseline.json
- [x] sources/rjm/scripts/validation/models.py
- [x] sources/rjm/scripts/validation/object_id.py
- [x] sources/rjm/scripts/validation/passive_context_budget.py
- [x] sources/rjm/scripts/validation/portability_baseline_write.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-instruction-budget-globs-py.md (7215 bytes)
- docs/analysis/inventory/rjm/scripts-validation-instruction-budget-types-py.md (3877 bytes)
- docs/analysis/inventory/rjm/scripts-validation-instruction-budget-py.md (9057 bytes)
- docs/analysis/inventory/rjm/scripts-validation-model-pin-baseline-json.md (3606 bytes)
- docs/analysis/inventory/rjm/scripts-validation-models-py.md (3249 bytes)
- docs/analysis/inventory/rjm/scripts-validation-object-id-py.md (3076 bytes)
- docs/analysis/inventory/rjm/scripts-validation-passive-context-budget-py.md (7163 bytes)
- docs/analysis/inventory/rjm/scripts-validation-portability-baseline-write-py.md (4897 bytes)

## Scripts executed
- sources/rjm/scripts/validation/instruction_budget_globs.py: `uv run --frozen python scripts/validation/instruction_budget_globs.py`, exit code 0
- sources/rjm/scripts/validation/instruction_budget_types.py: `uv run --frozen python scripts/validation/instruction_budget_types.py`, exit code 0
- sources/rjm/scripts/validation/instruction_budget.py: `uv run --frozen python scripts/validation/instruction_budget.py --path .`, exit code 0
- sources/rjm/scripts/validation/instruction_budget.py: `uv run --frozen python scripts/validation/instruction_budget.py --path . --ci`, exit code 0
- sources/rjm/scripts/validation/instruction_budget.py: `uv run --frozen python scripts/validation/instruction_budget.py --path . --ceiling .py:1000 --ci`, exit code 1
- sources/rjm/scripts/validation/instruction_budget.py: `uv run --frozen python scripts/validation/instruction_budget.py --path /nonexistent`, exit code 2
- sources/rjm/scripts/validation/model_pin_baseline.json: `python3 -m json.tool scripts/validation/model_pin_baseline.json > /dev/null`, exit code 0
- sources/rjm/scripts/validation/models.py: `uv run --frozen python scripts/validation/models.py`, exit code 0
- sources/rjm/scripts/validation/object_id.py: `uv run --frozen python scripts/validation/object_id.py`, exit code 0
- sources/rjm/scripts/validation/passive_context_budget.py: `uv run --frozen python scripts/validation/passive_context_budget.py --path .`, exit code 0
- sources/rjm/scripts/validation/passive_context_budget.py: `uv run --frozen python scripts/validation/passive_context_budget.py --path . --budget AGENTS.md:10 --ci`, exit code 1
- sources/rjm/scripts/validation/passive_context_budget.py: `uv run --frozen python scripts/validation/passive_context_budget.py --path /nonexistent`, exit code 2
- sources/rjm/scripts/validation/portability_baseline_write.py: `uv run --frozen python scripts/validation/portability_baseline_write.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/instruction_budget.py`, `instruction_budget_globs.py`, and `instruction_budget_types.py` operate closely with `instruction_budget_constants.py` (unit `inv-rjm-296`) to enforce language-level always-on instruction context limits.
- `scripts/validation/model_pin_baseline.json` is loaded and enforced by `scripts/validation/check_model_pins.py` (unit `inv-rjm-282`). The JSON file specifies `frozen_count: 51`, while 45 actual pins remain active (draining ratchet).
- `scripts/validation/models.py` defines `ValidationResult`, which is imported as the standard validation result dataclass across the entire `scripts/validation/` suite.
- `scripts/validation/object_id.py` provides shared Git object ID parsing for `scripts/validation/git_hook_policy.py` and safe push scripts.
- `scripts/validation/portability_baseline_write.py` provides advisory file locking and atomic directory file-descriptor-pinned baseline writes for `scripts/validation/portability_baseline.py` (unit `inv-rjm-298`).

## Blocked or uncertain
none

## Time and size
Source read: 1309 lines, 49358 bytes, ~12300 tokens.
Output written: 42140 bytes across 8 inventory cards + unit report, ~10500 tokens.
