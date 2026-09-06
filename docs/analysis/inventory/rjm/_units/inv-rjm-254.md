---
unit: inv-rjm-254
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-254

## Files assigned
- [x] scripts/metrics/kill_criteria.py
- [x] scripts/migrations/req003_inline_plugin_root_bootstrap.py
- [x] scripts/modules/__init__.py
- [x] scripts/modules/investigation_allowlist.py
- [x] scripts/modules/slash_command_validator.py
- [x] scripts/mutation_test_proc_group.py
- [x] scripts/new_validated_pr.py
- [x] scripts/normalize_line_endings.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md (7320 bytes)
- docs/analysis/inventory/rjm/scripts-migrations-req003-inline-plugin-root-bootstrap-py.md (6107 bytes)
- docs/analysis/inventory/rjm/scripts-modules---init---py.md (2001 bytes)
- docs/analysis/inventory/rjm/scripts-modules-investigation-allowlist-py.md (4048 bytes)
- docs/analysis/inventory/rjm/scripts-modules-slash-command-validator-py.md (4747 bytes)
- docs/analysis/inventory/rjm/scripts-mutation-test-proc-group-py.md (7071 bytes)
- docs/analysis/inventory/rjm/scripts-new-validated-pr-py.md (5713 bytes)
- docs/analysis/inventory/rjm/scripts-normalize-line-endings-py.md (4671 bytes)

## Scripts executed
- scripts/metrics/kill_criteria.py: `python3 scripts/metrics/kill_criteria.py report`, exit code 0
- scripts/migrations/req003_inline_plugin_root_bootstrap.py: `python3 sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py --dry-run`, exit code 0
- scripts/modules/__init__.py: `python3 sources/rjm/scripts/modules/__init__.py`, exit code 0
- scripts/modules/investigation_allowlist.py: `python3 sources/rjm/scripts/modules/investigation_allowlist.py`, exit code 0
- scripts/modules/slash_command_validator.py: `python3 -c "import sys; sys.path.insert(0, 'scripts'); from modules.slash_command_validator import invoke_slash_command_validation; sys.exit(invoke_slash_command_validation())"`, exit code 0
- scripts/mutation_test_proc_group.py: `python3 scripts/mutation_test_proc_group.py`, exit code 0
- scripts/new_validated_pr.py: `python3 sources/rjm/scripts/new_validated_pr.py --help`, exit code 0
- scripts/normalize_line_endings.py: `python3 scripts/normalize_line_endings.py --dry-run`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/modules/investigation_allowlist.py` defines the canonical 8 path patterns for ADR-034 QA exemption; consumers include `.github/scripts/validate_investigation_claims.py` and `scripts/validation/test_investigation_eligibility.py`.
- `scripts/mutation_test_proc_group.py` directly targets `scripts/validation/git_hook_policy.py` and `scripts/validation/run_workflow_local_test.py` with 4 load-bearing mutation cases, testing process-group termination and isolated worktree cleanup under `scripts/testing/mutation_workspace.py`.
- `scripts/migrations/req003_inline_plugin_root_bootstrap.py` exists as a bridge between DRY refactoring and ADR-047 grep-based hook path verification rules.

## Blocked or uncertain
none

## Time and size
Source read: 44,757 bytes (~11,200 tokens). Deliverables written: 8 cards + 1 unit report (~9,500 tokens).
