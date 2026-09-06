---
unit: inv-rjm-209
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-209

## Files assigned
- [x] `sources/rjm/scripts/ci/test_installed_plugin_hooks.py`
- [x] `sources/rjm/scripts/ci/type_ignore_count_baseline.txt`
- [x] `sources/rjm/scripts/ci/type_ignore_count_ratchet.py`
- [x] `sources/rjm/scripts/ci/update_needs_split_label.py`
- [x] `sources/rjm/scripts/ci/validate_ai_review_budgets.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-test-installed-plugin-hooks-py.md` (8,495 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-type-ignore-count-baseline-txt.md` (2,631 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-type-ignore-count-ratchet-py.md` (6,263 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-update-needs-split-label-py.md` (5,748 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-validate-ai-review-budgets-py.md` (6,280 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-209.md`

## Scripts executed
- `sources/rjm/scripts/ci/test_installed_plugin_hooks.py` — `python3 sources/rjm/scripts/ci/test_installed_plugin_hooks.py --plugin-source src/copilot-cli --install-root /tmp/test-hook-inst --consumer-cwd /tmp/test-hook-consumer` — exit code 0
- `sources/rjm/scripts/ci/type_ignore_count_baseline.txt` — `cat sources/rjm/scripts/ci/type_ignore_count_baseline.txt` — exit code 0
- `sources/rjm/scripts/ci/type_ignore_count_ratchet.py` — `python3 sources/rjm/scripts/ci/type_ignore_count_ratchet.py` — exit code 0
- `sources/rjm/scripts/ci/update_needs_split_label.py` — `python3 sources/rjm/scripts/ci/update_needs_split_label.py --mode add` — exit code 0
- `sources/rjm/scripts/ci/validate_ai_review_budgets.py` — `python3 sources/rjm/scripts/ci/validate_ai_review_budgets.py` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ci/type_ignore_count_ratchet.py` imports and delegates execution to `scripts/ci/count_ratchet.py` (which is in unit inv-rjm-197) and registers with `scripts/ci/merge_tree_ratchet_registry.py`. Its baseline file `scripts/ci/type_ignore_count_baseline.txt` is co-located in this unit.
- `scripts/ci/test_installed_plugin_hooks.py` implements the ADR-097 zero-tool-use-hooks contract (`.agents/architecture/ADR-097-zero-tool-use-hooks.md`), converting what was previously an unconditional failure on empty manifests into an explicit assertion of agreement between zero registered manifest events and zero shipped dispatchers on disk.
- `scripts/ci/update_needs_split_label.py` and `scripts/ci/validate_ai_review_budgets.py` are CI-level scripts invoked by GitHub Actions workflows (`.github/workflows/`), which lie outside the in-scope lifecycle manifest graph; both scripts are flagged with defect `orphan`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,554 tokens (30,216 bytes). Approximate tokens of output written: ~7,354 tokens (~29,417 bytes across 5 inventory cards plus unit report).
