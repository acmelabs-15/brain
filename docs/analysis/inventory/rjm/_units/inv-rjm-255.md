---
unit: inv-rjm-255
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-255

## Files assigned
- [x] `scripts/openclaw_bridge.py`
- [x] `scripts/pr_branch_mapping.py`
- [x] `scripts/pr_maintenance_rollup.py`
- [x] `scripts/pr_maintenance/__init__.py`
- [x] `scripts/pr_maintenance/maintenance.py`
- [x] `scripts/progress/__init__.py`
- [x] `scripts/progress/py.typed`
- [x] `scripts/progress/README.md`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-openclaw-bridge-py.md` (5657 bytes)
- `docs/analysis/inventory/rjm/scripts-pr-branch-mapping-py.md` (6556 bytes)
- `docs/analysis/inventory/rjm/scripts-pr-maintenance-rollup-py.md` (4899 bytes)
- `docs/analysis/inventory/rjm/scripts-pr-maintenance---init---py.md` (3135 bytes)
- `docs/analysis/inventory/rjm/scripts-pr-maintenance-maintenance-py.md` (4111 bytes)
- `docs/analysis/inventory/rjm/scripts-progress---init---py.md` (2467 bytes)
- `docs/analysis/inventory/rjm/scripts-progress-py-typed.md` (1687 bytes)
- `docs/analysis/inventory/rjm/scripts-progress-readme-md.md` (3321 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-255.md` (3112 bytes)

## Scripts executed
- `scripts/openclaw_bridge.py`, `uv run python scripts/openclaw_bridge.py --dry-run`, exit code 0
- `scripts/pr_branch_mapping.py`, `python3 scripts/pr_branch_mapping.py list`, exit code 0
- `scripts/pr_branch_mapping.py`, `python3 scripts/pr_branch_mapping.py validate`, exit code 0
- `scripts/pr_maintenance_rollup.py`, `python3 scripts/pr_maintenance_rollup.py`, exit code 0
- `scripts/pr_maintenance/__init__.py`, `PYTHONPATH=. python3 scripts/pr_maintenance/__init__.py`, exit code 0
- `scripts/pr_maintenance/maintenance.py`, `PYTHONPATH=. python3 scripts/pr_maintenance/maintenance.py`, exit code 0
- `scripts/progress/__init__.py`, `PYTHONPATH=. python3 scripts/progress/__init__.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/progress/py.typed` is an EXACT alias of `scripts/maintenance/__init__.py` (duplication ledger group 6, 0 bytes, SHA256 `e3b0c44298fc1c14`). The canonical card `docs/analysis/inventory/rjm/scripts-progress-py-typed.md` declares `aliases: [scripts/maintenance/__init__.py]`, satisfying both manifest rows per METHOD.md §2.4.
- `scripts/pr_maintenance_rollup.py` is invoked by `scripts/invoke_pr_maintenance.py:41` and `.github/scripts/invoke_pr_maintenance.py:25` from outside this unit.
- `scripts/pr_maintenance/__init__.py` re-exports from `scripts/github_core/api.py:5` and `scripts/pr_maintenance/maintenance.py:10`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: 11400 tokens (45685 bytes); approximate tokens of output written: 8000 tokens (31833 bytes across 8 cards + unit report).
