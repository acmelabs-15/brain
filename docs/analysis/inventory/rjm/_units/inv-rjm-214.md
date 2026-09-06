---
unit: inv-rjm-214
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-214

## Files assigned
- [x] sources/rjm/scripts/detect_skill_violation.py (13089 bytes, 438 lines)
- [x] sources/rjm/scripts/detect_test_coverage_gaps.py (5842 bytes, 184 lines)
- [x] sources/rjm/scripts/dev/dogfood_copilot_plugin.py (13739 bytes, 362 lines)
- [x] sources/rjm/scripts/error_classification.py (10403 bytes, 342 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-detect-skill-violation-py.md (7396 bytes)
- docs/analysis/inventory/rjm/scripts-detect-test-coverage-gaps-py.md (5718 bytes)
- docs/analysis/inventory/rjm/scripts-dev-dogfood-copilot-plugin-py.md (6368 bytes)
- docs/analysis/inventory/rjm/scripts-error-classification-py.md (6777 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-214.md (3246 bytes)

## Scripts executed
- scripts/detect_skill_violation.py: `python3 scripts/detect_skill_violation.py`, exit code 0
- scripts/detect_test_coverage_gaps.py: `python3 scripts/detect_test_coverage_gaps.py`, exit code 0
- scripts/dev/dogfood_copilot_plugin.py: `python3 scripts/dev/dogfood_copilot_plugin.py --status`, exit code 0
- scripts/dev/dogfood_copilot_plugin.py: `python3 scripts/dev/dogfood_copilot_plugin.py --check`, exit code 0
- scripts/error_classification.py: `python3 scripts/error_classification.py`, exit code 1 (ModuleNotFoundError: No module named 'yaml')
- scripts/error_classification.py: `uv run python scripts/error_classification.py`, exit code 0
- scripts/error_classification.py: `uv run python -c "from scripts.error_classification import classify_error; print(classify_error('git', 1, 'fatal: not a git repository'))"`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/detect_skill_violation.py` and `scripts/detect_test_coverage_gaps.py` enforce ADR-035 exit code standards and provide non-blocking warning mechanisms integrated into PR validation workflows (`src/copilot-cli/skills/github/scripts/pr/pr_validations.py`).
- `scripts/dev/dogfood_copilot_plugin.py` bridges the local workspace development loop and installed Copilot plugin directory (`~/.copilot/installed-plugins/ai-agents/project-toolkit`), using content hashing per ADR-092 rather than manifest version bumping.
- `scripts/error_classification.py` defines a taxonomy mapping ADR-035 exit codes to failure categories (`TOOL_FAILURE`, `REASONING_DRIFT`, `INFINITE_LOOP`, `SCOPE_CREEP`, `CONTEXT_OVERFLOW`), parses `.agents/recovery-hints.yaml`, and supports logging to `.agents/sessions/errors.jsonl` with threshold-based graduation into `MEMORY.md`. The script currently has no active in-scope caller (orphan).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,770 tokens (43,073 bytes across 4 files); approximate tokens of output written: ~6,560 tokens (26,259 bytes across 4 inventory cards).
