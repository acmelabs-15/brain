---
unit: inv-rjm-254
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-254

## Files assigned
- [x] `scripts/metrics/kill_criteria.py`
- [x] `scripts/migrations/req003_inline_plugin_root_bootstrap.py`
- [x] `scripts/modules/__init__.py`
- [x] `scripts/modules/investigation_allowlist.py`
- [x] `scripts/modules/slash_command_validator.py`
- [x] `scripts/mutation_test_proc_group.py`
- [x] `scripts/new_validated_pr.py`
- [x] `scripts/normalize_line_endings.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md` (7725 bytes)
- `docs/analysis/inventory/rjm/scripts-migrations-req003-inline-plugin-root-bootstrap-py.md` (6379 bytes)
- `docs/analysis/inventory/rjm/scripts-modules---init---py.md` (1882 bytes)
- `docs/analysis/inventory/rjm/scripts-modules-investigation-allowlist-py.md` (4458 bytes)
- `docs/analysis/inventory/rjm/scripts-modules-slash-command-validator-py.md` (5395 bytes)
- `docs/analysis/inventory/rjm/scripts-mutation-test-proc-group-py.md` (6129 bytes)
- `docs/analysis/inventory/rjm/scripts-new-validated-pr-py.md` (5585 bytes)
- `docs/analysis/inventory/rjm/scripts-normalize-line-endings-py.md` (5181 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-254.md` (4102 bytes)

## Scripts executed
- `scripts/metrics/kill_criteria.py`: `python3 scripts/metrics/kill_criteria.py report`, exit code 1
- `scripts/migrations/req003_inline_plugin_root_bootstrap.py`: `python3 scripts/migrations/req003_inline_plugin_root_bootstrap.py --dry-run`, exit code 0
- `scripts/modules/__init__.py`: `python3 scripts/modules/__init__.py`, exit code 0
- `scripts/modules/investigation_allowlist.py`: `python3 -c "from scripts.modules.investigation_allowlist import get_investigation_allowlist_display as g; print(len(g()), g())"`, exit code 0
- `scripts/modules/slash_command_validator.py`: `python3 -c "import sys; sys.path.insert(0, '.'); from scripts.modules.slash_command_validator import invoke_slash_command_validation; sys.exit(invoke_slash_command_validation())"`, exit code 0
- `scripts/mutation_test_proc_group.py`: `python3 scripts/mutation_test_proc_group.py`, exit code 0
- `scripts/new_validated_pr.py`: `python3 scripts/new_validated_pr.py`, exit code 2
- `scripts/normalize_line_endings.py`: `python3 scripts/normalize_line_endings.py --dry-run`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/metrics/kill_criteria.py` defines the canonical schema and telemetry emission logic for kill criteria K1-K4 under REQ-008-09. It is invoked directly by `scripts/metrics/check_vendored_install.py` and `scripts/metrics/emit_verdict_mismatch.py` in unit `inv-rjm-253`.
- `scripts/migrations/req003_inline_plugin_root_bootstrap.py` is referenced in `scripts/hook_utilities/bootstrap.py` (unit `inv-rjm-245`) and was authored to resolve test expectations from ADR-047; it is marked DELETE-AFTER-MERGE.
- `scripts/modules/investigation_allowlist.py` is consumed by `scripts/validation/test_investigation_eligibility.py` and referenced in change control and validation skills (`ai-agents-change-control`, `ai-agents-validation-and-qa`).
- `scripts/normalize_line_endings.py` directly addresses Phase 1V finding #63 by including `command git — scripts/normalize_line_endings.py:24` in `## Invokes`.
- All orphan scripts (`req003_inline_plugin_root_bootstrap.py`, `modules/__init__.py`, `slash_command_validator.py`, `mutation_test_proc_group.py`, `new_validated_pr.py`, `normalize_line_endings.py`) carry explicit `orphan` classifications in `## Defects`, strictly adhering to Phase 1V verification rules.

## Blocked or uncertain
none

## Time and size
Source read: 44,757 bytes across 8 files (~11,200 tokens). Output written: 9 deliverables (~9,500 tokens).
