---
unit: inv-rjm-284
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-284

## Files assigned
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] sources/rjm/scripts/validation/check_skill_contract_tests.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md (11505 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-skill-contract-tests-py.md (9191 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-284.md (2048 bytes)

## Scripts executed
- `scripts/validation/check_shipped_skill_routes.py`: `python3 scripts/validation/check_shipped_skill_routes.py`, exit code 0
- `scripts/validation/check_shipped_skill_routes.py`: `python3 scripts/validation/check_shipped_skill_routes.py --help`, exit code 0
- `scripts/validation/check_skill_contract_tests.py`: `python3 scripts/validation/check_skill_contract_tests.py`, exit code 0
- `scripts/validation/check_skill_contract_tests.py`: `python3 scripts/validation/check_skill_contract_tests.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
Unit inv-rjm-284 covers two validation gate scripts in rjm:
1. `scripts/validation/check_shipped_skill_routes.py`: Verifies routing integrity across multi-platform plugin packaging roots (`.claude`, `src/*`). Ensures every `Skill: <name>` table route resolves to `<root>/skills/<name>/SKILL.md`. Prevents packaging/routing coordination drift caused when platform packaging configs exclude specific skills (e.g., `merge-resolver` in Copilot CLI) without updating corresponding routing tables. Invoked by `scripts/validation/checks_plugin.py` (`validate_shipped_skill_routes`).
2. `scripts/validation/check_skill_contract_tests.py`: Verifies that executable contracts documented in `SKILL.md` (naming script calls and exit codes) are bound by machine tests under `tests/`. Prevents silent drift between human prose and script execution semantics. Orphan in the in-scope manifest graph (referenced only in out-of-scope rules and excluded test files).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,955 tokens (35,820 bytes).
Approximate tokens of output written: ~5,700 tokens (~22,744 bytes).
