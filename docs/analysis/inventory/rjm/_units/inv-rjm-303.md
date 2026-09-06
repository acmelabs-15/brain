---
unit: inv-rjm-303
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-303

## Files assigned
- [x] `scripts/validation/run_workflow_local_test.py` (62233 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-run-workflow-local-test-py.md` (14383 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-303.md` (1646 bytes)

## Scripts executed
- `scripts/validation/run_workflow_local_test.py`, `python3 scripts/validation/run_workflow_local_test.py --files .github/workflows/x.yml`, exit code 3

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/run_workflow_local_test.py` is invoked by `scripts/validation/git_hook_policy.py:7677` (pre-push hook) and `scripts/validation/checks_plugin.py:352` (pre-PR shift-left gate `validate_workflow_local_run`).
- It invokes `scripts/ci/run_pytest_selected.py:600` for nested act pytest fallbacks.
- Exits 3 on missing external tools (actionlint, gh act, Docker daemon) on workstation/CI, but degrades gracefully to exit 0 with `degraded=True` inside managed remote containers (`CLAUDECODE`, `CODESPACES`).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~15,558 tokens (62,233 bytes, 1500 lines). Approximate output written: ~2,500 tokens.
