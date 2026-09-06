---
unit: inv-rjm-206
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-206

## Files assigned
- [x] `sources/rjm/scripts/ci/parse_memory_health_results.py`
- [x] `sources/rjm/scripts/ci/parse_memory_validation_results.py`
- [x] `sources/rjm/scripts/ci/prepare_conflict_context.py`
- [x] `sources/rjm/scripts/ci/require_job_results.py`
- [x] `sources/rjm/scripts/ci/retrospective_gate.py`
- [x] `sources/rjm/scripts/ci/ruff_count_baseline.txt`
- [x] `sources/rjm/scripts/ci/ruff_count_ratchet.py`
- [x] `sources/rjm/scripts/ci/ruff_ratchet.py`
- [x] `sources/rjm/scripts/ci/ruleset_context_drift.py`
- [x] `sources/rjm/scripts/ci/ruleset_required_contexts.py`
- [x] `sources/rjm/scripts/ci/run_copilot_synthesis.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-parse-memory-health-results-py.md` (4461 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-parse-memory-validation-results-py.md` (4167 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-prepare-conflict-context-py.md` (4269 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-require-job-results-py.md` (3933 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-retrospective-gate-py.md` (5099 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruff-count-baseline-txt.md` (2513 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruff-count-ratchet-py.md` (5212 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruff-ratchet-py.md` (4461 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruleset-context-drift-py.md` (4963 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruleset-required-contexts-py.md` (3124 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-run-copilot-synthesis-py.md` (3510 bytes)

## Scripts executed
- `scripts/ci/parse_memory_health_results.py`: `python3 sources/rjm/scripts/ci/parse_memory_health_results.py --results nonexistent.json` -> exit 1
- `scripts/ci/parse_memory_validation_results.py`: `python3 sources/rjm/scripts/ci/parse_memory_validation_results.py --input nonexistent.json` -> exit 2
- `scripts/ci/prepare_conflict_context.py`: `python3 sources/rjm/scripts/ci/prepare_conflict_context.py` -> exit 2
- `scripts/ci/require_job_results.py`: `python3 sources/rjm/scripts/ci/require_job_results.py` -> exit 2
- `scripts/ci/retrospective_gate.py`: `python3 sources/rjm/scripts/ci/retrospective_gate.py` -> exit 2
- `scripts/ci/ruff_count_baseline.txt`: plain text baseline data file, not an executable script -> exit none
- `scripts/ci/ruff_count_ratchet.py`: `python3 sources/rjm/scripts/ci/ruff_count_ratchet.py --baseline nonexistent_baseline.txt` -> exit 2
- `scripts/ci/ruff_ratchet.py`: `python3 sources/rjm/scripts/ci/ruff_ratchet.py --repo-root /tmp` -> exit 2
- `scripts/ci/ruleset_context_drift.py`: `python3 sources/rjm/scripts/ci/ruleset_context_drift.py` -> exit 0
- `scripts/ci/ruleset_required_contexts.py`: `python3 sources/rjm/scripts/ci/ruleset_required_contexts.py` -> exit 0
- `scripts/ci/run_copilot_synthesis.py`: `python3 sources/rjm/scripts/ci/run_copilot_synthesis.py` -> exit 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Multiple scripts in this unit (`parse_memory_health_results.py`, `parse_memory_validation_results.py`, `prepare_conflict_context.py`, `require_job_results.py`, `run_copilot_synthesis.py`) were extracted from inline GitHub Actions YAML / PowerShell under ADR-006 ("no logic in YAML") to ensure fail-closed testability and prevent command injection.
- Ratchet gating is split across two complementary approaches: `ruff_count_ratchet.py` (whole-repo violation count ceiling backed by `ruff_count_baseline.txt` and registered in `merge_tree_ratchet_registry.py`) and `ruff_ratchet.py` (diff-scoped line intersection via `diff_line_scope.py`).
- Ruleset check synchronization between GitHub's live ruleset `11104075` and repo CI configuration is governed by `ruleset_required_contexts.py` (constants) and `ruleset_context_drift.py` (live checker and automated issue reporter).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,000 tokens (48,734 bytes across 11 files)
- Approximate tokens of output written: ~11,500 tokens (45,712 bytes across 11 inventory cards + unit report)
