---
unit: inv-rjm-181
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-181

## Files assigned
- [x] `.codeql/scripts/invoke_codeql_scan.py`
- [x] `.codeql/scripts/test_codeql_config.py`
- [x] `.codeql/scripts/test_codeql_rollout.py`

## Outputs produced
- `docs/analysis/inventory/rjm/codeql-scripts-invoke-codeql-scan-py.md` (9239 bytes)
- `docs/analysis/inventory/rjm/codeql-scripts-test-codeql-config-py.md` (6717 bytes)
- `docs/analysis/inventory/rjm/codeql-scripts-test-codeql-rollout-py.md` (8885 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-181.md` (3634 bytes)

## Scripts executed
- `.codeql/scripts/invoke_codeql_scan.py`: `python3 .codeql/scripts/invoke_codeql_scan.py --help`, exit code 0
- `.codeql/scripts/invoke_codeql_scan.py`: `python3 .codeql/scripts/invoke_codeql_scan.py`, exit code 3
- `.codeql/scripts/test_codeql_config.py`: `python3 .codeql/scripts/test_codeql_config.py --help`, exit code 0
- `.codeql/scripts/test_codeql_config.py`: `python3 .codeql/scripts/test_codeql_config.py`, exit code 0
- `.codeql/scripts/test_codeql_config.py`: `python3 .codeql/scripts/test_codeql_config.py --config-path nonexistent.yml`, exit code 2
- `.codeql/scripts/test_codeql_config.py`: `python3 .codeql/scripts/test_codeql_config.py --ci`, exit code 0
- `.codeql/scripts/test_codeql_rollout.py`: `python3 .codeql/scripts/test_codeql_rollout.py --help`, exit code 0
- `.codeql/scripts/test_codeql_rollout.py`: `python3 .codeql/scripts/test_codeql_rollout.py`, exit code 0
- `.codeql/scripts/test_codeql_rollout.py`: `python3 .codeql/scripts/test_codeql_rollout.py --ci`, exit code 1
- `tests/test_invoke_codeql_scan_py.py`, `tests/test_test_codeql_config.py`, `tests/test_test_codeql_rollout.py`: `uv run pytest tests/test_invoke_codeql_scan_py.py tests/test_test_codeql_config.py tests/test_test_codeql_rollout.py`, exit code 0 (64 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.codeql/scripts/test_codeql_rollout.py` contains multiple cross-unit and cross-tier references that reflect historical state:
  - References `tests/test_invoke_codeql_scan.py` which was renamed to `tests/test_invoke_codeql_scan_py.py`.
  - References `.claude/hooks/PostToolUse/Invoke-CodeQLQuickScan.ps1`, which was officially retired on 2026-07-21 (per `docs/codeql-architecture.md:7` and `docs/codeql-rollout-checklist.md:5`).
  - References `.claude/skills/codeql-scan/scripts/Invoke-CodeQLScanSkill.ps1`, but the repository migrated to `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py` (unit inv-rjm-104).
- `.codeql/scripts/test_codeql_config.py` line 258 has a path computation bug (`repo_root = str(Path(config_path).parent.parent)`), which points to `.github/` rather than the repository root when validating the default `.github/codeql/codeql-config.yml`.
- `.codeql/scripts/invoke_codeql_scan.py` serves as the underlying scan execution engine called by skill wrapper `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py` (from unit inv-rjm-104).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens (40,093 bytes across 3 source files, plus test files and documentation).
Approximate tokens of output written: ~6,700 tokens (27,000 bytes across 3 cards and unit report).
