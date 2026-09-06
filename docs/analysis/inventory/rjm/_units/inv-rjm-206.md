---
unit: inv-rjm-206
phase: 1
package: rjm
session: 011
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
- `docs/analysis/inventory/rjm/scripts-ci-parse-memory-health-results-py.md` (5200 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-parse-memory-validation-results-py.md` (4461 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-prepare-conflict-context-py.md` (3539 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-require-job-results-py.md` (4045 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-retrospective-gate-py.md` (3807 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruff-count-baseline-txt.md` (2246 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruff-count-ratchet-py.md` (4745 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruff-ratchet-py.md` (4314 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruleset-context-drift-py.md` (4967 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-ruleset-required-contexts-py.md` (2532 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-run-copilot-synthesis-py.md` (3734 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-206.md` (unit report)

## Scripts executed
- `scripts/ci/parse_memory_health_results.py` — `python3 sources/rjm/scripts/ci/parse_memory_health_results.py --help` — exit 0
- `scripts/ci/parse_memory_health_results.py` — `python3 sources/rjm/scripts/ci/parse_memory_health_results.py` — exit 1
- `scripts/ci/parse_memory_validation_results.py` — `python3 sources/rjm/scripts/ci/parse_memory_validation_results.py --help` — exit 0
- `scripts/ci/parse_memory_validation_results.py` — `python3 sources/rjm/scripts/ci/parse_memory_validation_results.py --input nonexistent.json` — exit 2
- `scripts/ci/prepare_conflict_context.py` — `python3 sources/rjm/scripts/ci/prepare_conflict_context.py` — exit 2
- `scripts/ci/require_job_results.py` — `python3 sources/rjm/scripts/ci/require_job_results.py --help` — exit 0
- `scripts/ci/require_job_results.py` — `python3 sources/rjm/scripts/ci/require_job_results.py` — exit 2
- `scripts/ci/retrospective_gate.py` — `python3 sources/rjm/scripts/ci/retrospective_gate.py --help` — exit 0
- `scripts/ci/retrospective_gate.py` — `python3 sources/rjm/scripts/ci/retrospective_gate.py` — exit 2
- `scripts/ci/ruff_count_baseline.txt` — `cat sources/rjm/scripts/ci/ruff_count_baseline.txt` — exit 0
- `scripts/ci/ruff_count_ratchet.py` — `python3 sources/rjm/scripts/ci/ruff_count_ratchet.py --help` — exit 0
- `scripts/ci/ruff_count_ratchet.py` — `python3 sources/rjm/scripts/ci/ruff_count_ratchet.py --repo-root sources/rjm` — exit 3
- `scripts/ci/ruff_ratchet.py` — `python3 sources/rjm/scripts/ci/ruff_ratchet.py --help` — exit 0
- `scripts/ci/ruff_ratchet.py` — `python3 sources/rjm/scripts/ci/ruff_ratchet.py --repo-root sources/rjm` — exit 0
- `scripts/ci/ruleset_context_drift.py` — `python3 sources/rjm/scripts/ci/ruleset_context_drift.py --help` — exit 0
- `scripts/ci/ruleset_context_drift.py` — `python3 sources/rjm/scripts/ci/ruleset_context_drift.py` — exit 0
- `scripts/ci/ruleset_required_contexts.py` — `python3 sources/rjm/scripts/ci/ruleset_required_contexts.py` — exit 0
- `scripts/ci/run_copilot_synthesis.py` — `python3 sources/rjm/scripts/ci/run_copilot_synthesis.py` — exit 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Addressed specific Phase 1V finding on `scripts/ci/require_job_results.py`: categorized `## Invoked by` as `orphan` and recorded the `orphan` defect under `## Defects`.
- Similarly inspected all other scripts in this unit: `parse_memory_health_results.py`, `parse_memory_validation_results.py`, `prepare_conflict_context.py`, `retrospective_gate.py`, `ruleset_context_drift.py`, and `run_copilot_synthesis.py` are invoked only by out-of-scope `.github/workflows/` files, so each carries `## Invoked by: orphan` and an explicit `orphan` entry under `## Defects`.
- `ruff_count_baseline.txt` is invoked by in-scope `scripts/ci/ruff_count_ratchet.py`.
- `ruff_count_ratchet.py` is invoked by in-scope `scripts/validation/checks_ratchet.py` and `scripts/validation/git_hook_policy.py`.
- `ruff_ratchet.py` is invoked by in-scope `scripts/validation/checks_ratchet.py`.
- `ruleset_required_contexts.py` is invoked by in-scope `scripts/ci/ruleset_context_drift.py`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,200 tokens across 11 files (48,734 bytes).
Approximate tokens of output written: ~11,000 tokens across 11 cards and 1 unit report (46,500 bytes).
