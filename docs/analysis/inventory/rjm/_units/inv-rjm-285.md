---
unit: inv-rjm-285
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-285

## Files assigned
- [x] `scripts/validation/check_skill_md_drift.py`
- [x] `scripts/validation/check_skill_md_exec_portability.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-check-skill-md-drift-py.md` (8111 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md` (12467 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-285.md` (unit report)

## Scripts executed
- `scripts/validation/check_skill_md_drift.py`: `python3 -m scripts.validation.check_skill_md_drift` (from `sources/rjm`), exit code 0
- `scripts/validation/check_skill_md_exec_portability.py`: `python3 scripts/validation/check_skill_md_exec_portability.py` (from `sources/rjm`), exit code 0
- Tests: `uv run pytest tests/validation/test_check_skill_md_drift.py tests/validation/test_check_skill_md_exec_portability.py` (from `sources/rjm`), exit code 1 (96 passed, 1 failed due to macOS APFS case-insensitivity in `test_case_sensitive_comparison`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_skill_md_drift.py` was extracted from `scripts/validation/check_skill_md_portability.py` (issue #4116) to satisfy the repository 500-line ceiling. It imports `scripts/validation/tracked_paths.py` to check path existence against the git index.
- `scripts/validation/check_skill_md_exec_portability.py` enforces vendor portability for executable invocations, referencing `scripts/validation/portability_common.py` and reading `scripts/validation/skill_md_exec_portability_baseline.json`. It carries an explicit taste-lint file-size exemption (`taste-lint: ignore file-size`) at line 2.
- A test failure in `test_case_sensitive_comparison` revealed a platform discrepancy: `tracked_paths.py` falls back to filesystem existence for non-git scratch directories, where macOS APFS case-insensitivity allows mismatched casing to pass, diverging from documented Linux case-sensitivity semantics.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,860 tokens (39,449 bytes across 2 files)
- Approximate tokens of output written: ~5,145 tokens (20,578 bytes across 2 inventory cards)
