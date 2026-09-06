---
unit: inv-rjm-271
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-271

## Files assigned
- [x] `scripts/validate_workflows.py`
- [x] `scripts/validate_workspace_budget.py`
- [x] `scripts/validation/__init__.py`
- [x] `scripts/validation/active_plan_closeout.py`
- [x] `scripts/validation/adr_lifecycle_baseline.json`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validate-workflows-py.md` (9214 bytes)
- `docs/analysis/inventory/rjm/scripts-validate-workspace-budget-py.md` (6309 bytes)
- `docs/analysis/inventory/rjm/scripts-validation---init---py.md` (2801 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-active-plan-closeout-py.md` (6691 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-adr-lifecycle-baseline-json.md` (4671 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-271.md` (unit report)

## Scripts executed
- `scripts/validate_workflows.py`: `uv run python scripts/validate_workflows.py`, exit code 0
- `scripts/validate_workspace_budget.py`: `python3 scripts/validate_workspace_budget.py`, exit code 0
- `scripts/validation/__init__.py`: `PYTHONPATH=. python3 scripts/validation/__init__.py`, exit code 0
- `scripts/validation/active_plan_closeout.py`: `python3 scripts/validation/active_plan_closeout.py`, exit code 0
- `scripts/validation/adr_lifecycle_baseline.json`: `python3 -m json.tool scripts/validation/adr_lifecycle_baseline.json` (and `uv run python scripts/validation/check_adr_lifecycle.py`), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/active_plan_closeout.py` is invoked as a gate within `scripts/validation/pre_pr_sequence.py` and `scripts/validation/pre_pr.py` (which belong to other units).
- `scripts/validation/adr_lifecycle_baseline.json` defines zero-tolerance violation ceilings consumed by `scripts/validation/check_adr_lifecycle.py` (unit inv-rjm-273).
- `scripts/validate_workspace_budget.py` is not wired into any enabled workflow or production CLI entry point; it is tested only via test files.
- `scripts/validation/__init__.py` establishes the package root for Python validators migrated from PowerShell per ADR-042, exporting `ValidationResult`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,265 tokens (41,061 bytes)
- Approximate tokens of output written: ~7,420 tokens (29,686 bytes across 5 inventory cards)
