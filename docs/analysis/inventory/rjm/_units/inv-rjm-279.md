---
unit: inv-rjm-279
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-279

## Files assigned
- [x] sources/rjm/scripts/validation/check_duplicate_test_helpers.py
- [x] sources/rjm/scripts/validation/check_generated_staleness.py
- [x] sources/rjm/scripts/validation/check_git_hook_health.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-duplicate-test-helpers-py.md (6925 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-generated-staleness-py.md (9245 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-git-hook-health-py.md (9292 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-279.md (1650 bytes)

## Scripts executed
- sources/rjm/scripts/validation/check_duplicate_test_helpers.py: `python3 sources/rjm/scripts/validation/check_duplicate_test_helpers.py sources/rjm`, exit 0
- sources/rjm/scripts/validation/check_generated_staleness.py: `uv run python scripts/validation/check_generated_staleness.py`, exit 0
- sources/rjm/scripts/validation/check_generated_staleness.py: `python3 sources/rjm/scripts/validation/check_generated_staleness.py sources/rjm`, exit 1
- sources/rjm/scripts/validation/check_git_hook_health.py: `python3 sources/rjm/scripts/validation/check_git_hook_health.py sources/rjm`, exit 1
- sources/rjm/scripts/validation/check_git_hook_health.py: `CI=true python3 sources/rjm/scripts/validation/check_git_hook_health.py sources/rjm`, exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All three scripts in this unit (`check_duplicate_test_helpers.py`, `check_generated_staleness.py`, `check_git_hook_health.py`) are validation gates imported and invoked by `scripts/validation/pre_pr_sequence.py` (which belongs to unit inv-rjm-281).
- `scripts/validation/check_generated_staleness.py` orchestrates two generator checks: `scripts/sync_plugin_lib.py` and `build/scripts/build_all.py`.
- None of the files assigned to inv-rjm-279 appear in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`), so no divergence cards were required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,350 tokens (37,390 bytes across 3 files). Approximate tokens of output written: ~6,500 tokens across 3 cards and 1 unit report.
