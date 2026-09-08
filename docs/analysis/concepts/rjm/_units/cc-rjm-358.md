---
unit: cc-rjm-358
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-358

## Files assigned
- [x] sources/rjm/scripts/validation/instruction_budget.py
- [x] sources/rjm/scripts/validation/instruction_budget_types.py
- [x] sources/rjm/scripts/validation/model_pin_baseline.json
- [x] sources/rjm/scripts/validation/models.py
- [x] sources/rjm/scripts/validation/object_id.py
- [x] sources/rjm/scripts/validation/passive_context_budget.py
- [x] sources/rjm/scripts/validation/portability_baseline.py
- [x] sources/rjm/scripts/validation/portability_baseline_write.py
- [x] sources/rjm/scripts/validation/portability_floor.py
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-types-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-model-pin-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-models-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-object-id-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-passive-context-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-write-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md

## Outputs produced
- docs/analysis/concepts/rjm/extensionresult.md (822 bytes)
- docs/analysis/concepts/rjm/headroom-bytes.md (825 bytes)
- docs/analysis/concepts/rjm/under-reserve.md (844 bytes)
- docs/analysis/concepts/rjm/language-baseline-always-on-budget.md (1665 bytes)
- docs/analysis/concepts/rjm/non-regression-ratchet.md (1284 bytes)
- docs/analysis/concepts/rjm/budgetverdict.md (767 bytes)
- docs/analysis/concepts/rjm/load-instruction-files.md (804 bytes)
- docs/analysis/concepts/rjm/measure-extension.md (790 bytes)
- docs/analysis/concepts/rjm/parse-ceiling-override.md (810 bytes)
- docs/analysis/concepts/rjm/parse-reserve.md (780 bytes)
- docs/analysis/concepts/rjm/frozen-count.md (779 bytes)
- docs/analysis/concepts/rjm/pins.md (734 bytes)
- docs/analysis/concepts/rjm/is-valid.md (722 bytes)
- docs/analysis/concepts/rjm/issue-839.md (762 bytes)
- docs/analysis/concepts/rjm/zero-sha-lengths.md (772 bytes)
- docs/analysis/concepts/rjm/default-budgets.md (814 bytes)
- docs/analysis/concepts/rjm/fileresult.md (787 bytes)
- docs/analysis/concepts/rjm/measure-file.md (848 bytes)
- docs/analysis/concepts/rjm/validate-passive-context.md (839 bytes)
- docs/analysis/concepts/rjm/parse-budget-override.md (839 bytes)
- docs/analysis/concepts/rjm/baseline-write-lock.md (995 bytes)
- docs/analysis/concepts/rjm/replace-baseline-relative-to-parent.md (906 bytes)
- docs/analysis/concepts/rjm/replace-baseline-atomically.md (1016 bytes)
- docs/analysis/concepts/rjm/portability-ratchets.md (1341 bytes)
- docs/analysis/concepts/rjm/tree-coverage.md (1148 bytes)
- docs/analysis/concepts/rjm/portability-baseline-write.md (863 bytes)
- docs/analysis/concepts/rjm/portability-git.md (1015 bytes)
- docs/analysis/concepts/rjm/counted-sections.md (947 bytes)
- docs/analysis/concepts/rjm/sections.md (934 bytes)
- docs/analysis/concepts/rjm/find-symlinked-component.md (837 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-358.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/extensionresult.md docs/analysis/concepts/rjm/headroom-bytes.md docs/analysis/concepts/rjm/under-reserve.md docs/analysis/concepts/rjm/language-baseline-always-on-budget.md docs/analysis/concepts/rjm/non-regression-ratchet.md docs/analysis/concepts/rjm/budgetverdict.md docs/analysis/concepts/rjm/load-instruction-files.md docs/analysis/concepts/rjm/measure-extension.md docs/analysis/concepts/rjm/parse-ceiling-override.md docs/analysis/concepts/rjm/parse-reserve.md docs/analysis/concepts/rjm/frozen-count.md docs/analysis/concepts/rjm/pins.md docs/analysis/concepts/rjm/is-valid.md docs/analysis/concepts/rjm/issue-839.md docs/analysis/concepts/rjm/zero-sha-lengths.md docs/analysis/concepts/rjm/default-budgets.md docs/analysis/concepts/rjm/fileresult.md docs/analysis/concepts/rjm/measure-file.md docs/analysis/concepts/rjm/validate-passive-context.md docs/analysis/concepts/rjm/parse-budget-override.md docs/analysis/concepts/rjm/baseline-write-lock.md docs/analysis/concepts/rjm/replace-baseline-relative-to-parent.md docs/analysis/concepts/rjm/replace-baseline-atomically.md docs/analysis/concepts/rjm/portability-ratchets.md docs/analysis/concepts/rjm/tree-coverage.md docs/analysis/concepts/rjm/portability-baseline-write.md docs/analysis/concepts/rjm/portability-git.md docs/analysis/concepts/rjm/counted-sections.md docs/analysis/concepts/rjm/sections.md docs/analysis/concepts/rjm/find-symlinked-component.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-358 completes 30 concept cards spanning instruction budget validation, passive context budgeting, model pin baseline constraints, and portability ratchet baseline lifecycle management:
  1. Instruction budget validation and gating concepts (`ExtensionResult`, `headroom_bytes`, `under_reserve`, `language-baseline always-on budget`, `NON-REGRESSION RATCHET`, `BudgetVerdict`, `load_instruction_files`, `measure_extension`, `parse_ceiling_override`, `parse_reserve`) across `instruction_budget_types.py` and `instruction_budget.py`.
  2. Model pin baseline governance (`frozen_count`, `pins`) in `model_pin_baseline.json` per ADR-080.
  3. Shared validation data models and object ID verification (`is_valid`, `Issue #839`, `ZERO_SHA_LENGTHS`) in `models.py` and `object_id.py`.
  4. Passive context token budget enforcement (`DEFAULT_BUDGETS`, `FileResult`, `measure_file`, `validate_passive_context`, `parse_budget_override`) in `passive_context_budget.py`.
  5. Portability ratchet baseline lifecycle and security guards (`baseline_write_lock`, `_replace_baseline_relative_to_parent`, `replace_baseline_atomically`, `portability ratchets`, `Tree coverage`, `portability_baseline_write`, `portability_git`, `COUNTED_SECTIONS`, `Sections`, `find_symlinked_component`) across `portability_baseline_write.py`, `portability_baseline.py`, and `portability_floor.py`.
- Concepts representing functions, methods, parameters, constants, schemas, or file modules are classified as `kind: name-only` per D-023.
- Core lifecycle/quality-gate concepts are classified as `kind: gate` (`language-baseline-always-on-budget`, `non-regression-ratchet`, `portability-ratchets`) and `kind: technique` (`tree-coverage`).
- All 35 occurrences recorded in `facts/cc-rjm-358.txt` are mapped in the Where used tables.
- Defect status across all 9 citing inventory cards is `none`, resulting in `Implementation status: clean` across all 30 concept cards.
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,000 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
