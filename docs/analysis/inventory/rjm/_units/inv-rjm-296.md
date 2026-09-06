---
unit: inv-rjm-296
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-296

## Files assigned
- [x] `scripts/validation/hook_contracts.py`
- [x] `scripts/validation/instruction_budget_constants.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md` (13206 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-instruction-budget-constants-py.md` (4029 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-296.md`

## Scripts executed
- `scripts/validation/hook_contracts.py`: `python3 scripts/validation/hook_contracts.py`, exit code 0
- `scripts/validation/hook_contracts.py`: `python3 scripts/validation/hook_contracts.py --ci`, exit code 0
- `scripts/validation/instruction_budget_constants.py`: `python3 scripts/validation/instruction_budget_constants.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/hook_contracts.py` validates hook configurations across both Claude Code (`.claude/`) and GitHub Copilot CLI (`src/copilot-cli/`) surfaces, including expanding dispatch groups (`invoke_dispatch_claude.py`) and dispatch manifests (`_manifest.json`).
- `scripts/validation/instruction_budget_constants.py` exports non-regression ratchet ceilings consumed by `scripts/validation/instruction_budget.py` (unit inv-rjm-297) and verified by `tests/validation/test_instruction_ceiling_ratchet.py`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,539 tokens (38,156 bytes)
- Approximate tokens of output written: ~4,300 tokens (~17,235 bytes across 2 inventory cards and 1 unit report)
