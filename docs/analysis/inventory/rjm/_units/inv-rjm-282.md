---
unit: inv-rjm-282
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-282

## Files assigned
- [x] `scripts/validation/check_push_lock_paths.py` (12248 bytes) — read in full
- [x] `scripts/validation/check_python3_entrypoints.py` (10038 bytes) — read in full
- [x] `scripts/validation/check_repo_health_report.py` (6358 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-check-push-lock-paths-py.md` (6642 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-python3-entrypoints-py.md` (6732 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-repo-health-report-py.md` (5523 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-282.md`

## Scripts executed
- `scripts/validation/check_push_lock_paths.py`: `python3 scripts/validation/check_push_lock_paths.py --repo-root .`, exit code 0
- `scripts/validation/check_python3_entrypoints.py`: `python3 scripts/validation/check_python3_entrypoints.py --repo-root .`, exit code 0
- `scripts/validation/check_repo_health_report.py`: `python3 scripts/validation/check_repo_health_report.py`, exit code 0 (and via `python3 scripts/validation/check_repo_health.py .`, exit code 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_push_lock_paths.py` imports and collaborates closely with `scripts/validation/push_lock_resolver.py` (unit `inv-rjm-300`). It is invoked by `scripts/validation/pre_pr_sequence.py` (unit `inv-rjm-298`).
- `scripts/validation/check_python3_entrypoints.py` is an orphan validator not currently wired into `pre_pr.py`, `pre_pr_sequence.py`, or `lefthook.yml`. It is tested by `tests/test_check_python3_entrypoints.py` and `tests/mutation/mutation_harness_3791.py`.
- `scripts/validation/check_repo_health_report.py` is imported directly by `scripts/validation/check_repo_health.py` (unit `inv-rjm-283`). It formats health diagnosis reports and repairs for issue #4698 and `.agents/governance/GOTCHAS.md`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~7200 tokens (28644 bytes across 3 files); approximate output written: ~4800 tokens.
