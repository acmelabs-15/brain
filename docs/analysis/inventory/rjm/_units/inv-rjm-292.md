---
unit: inv-rjm-292
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-292

## Files assigned
- [x] `scripts/validation/checks_coverage.py`
- [x] `scripts/validation/checks_dash.py`
- [x] `scripts/validation/checks_mypy.py`
- [x] `scripts/validation/checks_plugin.py`
- [x] `scripts/validation/checks_ratchet.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-checks-coverage-py.md` (6959 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-dash-py.md` (6689 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-mypy-py.md` (5210 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-plugin-py.md` (10284 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-ratchet-py.md` (7936 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-292.md` (4335 bytes)

## Scripts executed
- `scripts/validation/checks_coverage.py`: `python3 scripts/validation/checks_coverage.py`, exit code 1 (ModuleNotFoundError: No module named 'scripts'); `PYTHONPATH=. python3 scripts/validation/checks_coverage.py`, exit code 0; `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_coverage import validate_review_marker; print('Result:', validate_review_marker(Path('.')))"`, exit code 0
- `scripts/validation/checks_dash.py`: `python3 scripts/validation/checks_dash.py`, exit code 1 (ModuleNotFoundError: No module named 'scripts'); `PYTHONPATH=. python3 scripts/validation/checks_dash.py`, exit code 0; `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_dash import validate_dash_prohibition; print('Result:', validate_dash_prohibition(Path('.')))"`, exit code 0
- `scripts/validation/checks_mypy.py`: `python3 scripts/validation/checks_mypy.py`, exit code 1 (ModuleNotFoundError: No module named 'scripts'); `PYTHONPATH=. python3 scripts/validation/checks_mypy.py`, exit code 0; `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_mypy import validate_mypy_changed_files; print('Result:', validate_mypy_changed_files(Path('.')))"`, exit code 0
- `scripts/validation/checks_plugin.py`: `python3 scripts/validation/checks_plugin.py`, exit code 1 (ModuleNotFoundError: No module named 'scripts'); `PYTHONPATH=. python3 scripts/validation/checks_plugin.py`, exit code 0; `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_plugin import validate_colocated_skill_tests; print('Result:', validate_colocated_skill_tests(Path('.')))"`, exit code 0
- `scripts/validation/checks_ratchet.py`: `python3 scripts/validation/checks_ratchet.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Modular extractions from `scripts/validation/pre_pr.py` and `scripts/validation/checks_tooling.py`: All 5 modules in this unit represent extracted validation gates created to respect the repository's 500-line module ceiling (Issues #2223, #4251, #4674, #5317).
- Inconsistent `sys.path` bootstrapping: Four of the five scripts (`checks_coverage.py`, `checks_dash.py`, `checks_mypy.py`, `checks_plugin.py`) only insert their parent directory (`_SCRIPT_DIR`) into `sys.path`. When executed directly via `python3 scripts/validation/checks_*.py`, they fail with `ModuleNotFoundError: No module named 'scripts'` because `checks_common.py` imports `subprocess_runner.py`, which executes `from scripts.cli_exec import resolve_executable`. In contrast, `checks_ratchet.py` explicitly inserts `_REPO_ROOT = _SCRIPT_DIR.parents[1]` into `sys.path` (lines 27-29), enabling standalone execution from anywhere.
- Shift-left design: `checks_ratchet.py` converts an 11-minute (674-second) pre-push CI feedback loop into a 3-second local pre-PR check by grouping 8 count ratchets into an immutable registry with an 85-second aggregate timeout.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~38,692 bytes (~9,673 tokens); approximate output written: ~39,000 bytes (~9,750 tokens).
