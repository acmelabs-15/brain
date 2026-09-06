---
unit: inv-rjm-291
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-291

## Files assigned
- [x] `sources/rjm/scripts/validation/check_zero_collection_tests.py`
- [x] `sources/rjm/scripts/validation/checks_changed_paths.py`
- [x] `sources/rjm/scripts/validation/checks_common.py`
- [x] `sources/rjm/scripts/validation/checks_copilot.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md` (11595 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-changed-paths-py.md` (6994 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-common-py.md` (10076 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-copilot-py.md` (4326 bytes)

## Scripts executed
- `scripts/validation/check_zero_collection_tests.py`: `sources/rjm/.venv/bin/python sources/rjm/scripts/validation/check_zero_collection_tests.py --repo-root sources/rjm`, exit 0
- `scripts/validation/checks_changed_paths.py`: `sources/rjm/.venv/bin/python -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/validation'); import checks_changed_paths; from pathlib import Path; print(checks_changed_paths._changed_paths_since_base(Path('sources/rjm'), 'test'))"`, exit 0
- `scripts/validation/checks_common.py`: `sources/rjm/.venv/bin/python -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/validation'); import checks_common; from pathlib import Path; print('branch_base:', checks_common._resolve_branch_base_ref(Path('sources/rjm'))); print('default_base:', checks_common._resolve_default_base_ref(Path('sources/rjm')))"`, exit 0
- `scripts/validation/checks_copilot.py`: `sources/rjm/.venv/bin/python -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/validation'); import checks_copilot; from pathlib import Path; print('result:', checks_copilot.validate_copilot_routing_exclusions(Path('sources/rjm')))"`, exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `check_zero_collection_tests.py` is invoked out-of-scope by `lefthook.yml:628` and `.github/workflows/pytest.yml:259`, but is unreferenced by any in-scope lifecycle command or agent in the manifest reachability graph, making it an orphan in-scope.
- `checks_changed_paths.py` was extracted from `checks_tooling.py` to keep module size below the repo ceiling; it is imported back into `checks_tooling.py` and `checks_workflow_targets.py`.
- `checks_common.py` is core shared infrastructure providing `_resolve_branch_base_ref`, `_run_subprocess` (re-exported from `subprocess_runner.py`), and `MissingScriptSkip`, imported across at least 14 validation check modules.
- `checks_copilot.py` provides a fault-tolerant wrapper catching `FileNotFoundError` around `check_copilot_routing_exclusions.py`, invoked dynamically in `pre_pr_sequence.py:206`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~11,800 tokens (47,143 bytes across 4 files); approximate output written: ~7,200 tokens (32,991 bytes across 4 cards + report).
