---
unit: inv-rjm-205
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-205

## Files assigned
- [x] `sources/rjm/scripts/ci/merge_tree_ratchet_check.py` — read in full (15695 bytes, 410 lines)
- [x] `sources/rjm/scripts/ci/merge_tree_ratchet_registry.py` — read in full (1569 bytes, 61 lines)
- [x] `sources/rjm/scripts/ci/mutation_harness_ciperms.py` — read in full (17424 bytes, 486 lines)
- [x] `sources/rjm/scripts/ci/parse_ai_review_output.py` — read in full (3863 bytes, 128 lines)
- [x] `sources/rjm/scripts/ci/parse_drift_results.py` — read in full (7947 bytes, 216 lines)
- [x] `sources/rjm/scripts/ci/parse_hook_bypass_results.py` — read in full (3284 bytes, 99 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-merge-tree-ratchet-check-py.md` (5959 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-merge-tree-ratchet-registry-py.md` (4150 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-mutation-harness-ciperms-py.md` (4936 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-parse-ai-review-output-py.md` (4303 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-parse-drift-results-py.md` (4564 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-parse-hook-bypass-results-py.md` (4596 bytes)

## Scripts executed
- `scripts/ci/merge_tree_ratchet_check.py`: `python3 sources/rjm/scripts/ci/merge_tree_ratchet_check.py --help` (exit code: 0)
- `scripts/ci/merge_tree_ratchet_check.py`: `python3 sources/rjm/scripts/ci/merge_tree_ratchet_check.py --repo-root sources/rjm --base-ref HEAD` (exit code: 3)
- `scripts/ci/merge_tree_ratchet_registry.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ci/merge_tree_ratchet_registry.py` (exit code: 0)
- `scripts/ci/mutation_harness_ciperms.py`: `python3 sources/rjm/scripts/ci/mutation_harness_ciperms.py` (exit code: 0, 10/10 mutants matched expected outcomes: 9 DEAD, 1 SURVIVED)
- `scripts/ci/parse_ai_review_output.py`: `python3 sources/rjm/scripts/ci/parse_ai_review_output.py` (exit code: 2, configuration error on missing env vars)
- `scripts/ci/parse_ai_review_output.py`: `AI_REVIEW_OUTPUT_FILE=... GITHUB_OUTPUT=... python3 sources/rjm/scripts/ci/parse_ai_review_output.py` (exit code: 0, verdict=PASS published)
- `scripts/ci/parse_drift_results.py`: `python3 sources/rjm/scripts/ci/parse_drift_results.py --help` (exit code: 0)
- `scripts/ci/parse_drift_results.py`: `python3 sources/rjm/scripts/ci/parse_drift_results.py --input <mock.json> --details-out <details.md> --count-out <count.txt>` (exit code: 0)
- `scripts/ci/parse_hook_bypass_results.py`: `python3 sources/rjm/scripts/ci/parse_hook_bypass_results.py --help` (exit code: 0)
- `scripts/ci/parse_hook_bypass_results.py`: `python3 sources/rjm/scripts/ci/parse_hook_bypass_results.py --input <mock.json> --count-out <count.txt>` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ci/merge_tree_ratchet_check.py` and `scripts/ci/merge_tree_ratchet_registry.py` link directly to ratchets evaluated across other units (`ruff_count_ratchet.py`, `taste_count_ratchet.py`, `type_ignore_count_ratchet.py`, `memory_index_count_ratchet.py`, `cli_exit_contract_ratchet.py`). The baseline comparison policy strictly enforces taking the minimum (`min(base, candidate)`) to prevent branches from widening baselines to sneak in regressions.
- `scripts/ci/mutation_harness_ciperms.py` and `scripts/ci/parse_hook_bypass_results.py` have no in-scope callers in the lifecycle manifest (the former is a manual developer CLI tool, and the latter is called only from `.github/workflows/audit-hook-bypass.yml`), properly categorized as `orphan`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12400 (49782 bytes across 6 files); approximate tokens of output written: ~7100 (~28500 bytes across 6 cards).
