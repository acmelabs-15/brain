---
unit: inv-rjm-208
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-208

## Files assigned
- [x] `scripts/ci/spec_extract_refs.py`
- [x] `scripts/ci/spec_load_content.py`
- [x] `scripts/ci/spec_prepare_context.py`
- [x] `scripts/ci/subprocess_encoding_count_baseline.txt`
- [x] `scripts/ci/subprocess_encoding_count_ratchet.py`
- [x] `scripts/ci/sweep_copilot_synthesis.py`
- [x] `scripts/ci/taste_count_baseline.txt`
- [x] `scripts/ci/taste_count_ratchet.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-spec-extract-refs-py.md` (5934 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-spec-load-content-py.md` (5880 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-spec-prepare-context-py.md` (4371 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-subprocess-encoding-count-baseline-txt.md` (2733 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-subprocess-encoding-count-ratchet-py.md` (5579 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-sweep-copilot-synthesis-py.md` (4137 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-taste-count-baseline-txt.md` (2591 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md` (6062 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-208.md` (unit report)

## Scripts executed
- `scripts/ci/spec_extract_refs.py`: `PR_TITLE_INPUT="feat: Phase 1 of #123" PR_BODY_INPUT="Closes #456. Implements REQ-003" python3 scripts/ci/spec_extract_refs.py`, exit code 0
- `scripts/ci/spec_load_content.py`: `SPEC_REFS="REQ-003" python3 scripts/ci/spec_load_content.py`, exit code 0
- `scripts/ci/spec_prepare_context.py`: `SPEC_FILE=".agents/specs/requirements/req-003-multi-tool-artifact-build.md" INCREMENTAL_SCOPE="Phase 1 of #123" python3 scripts/ci/spec_prepare_context.py`, exit code 0
- `scripts/ci/subprocess_encoding_count_ratchet.py`: `python3 scripts/ci/subprocess_encoding_count_ratchet.py`, exit code 0
- `scripts/ci/sweep_copilot_synthesis.py`: `python3 scripts/ci/sweep_copilot_synthesis.py`, exit code 0
- `scripts/ci/taste_count_ratchet.py`: `python3 scripts/ci/taste_count_ratchet.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `spec_extract_refs.py`, `spec_load_content.py`, and `spec_prepare_context.py` implement the initial spec ingestion pipeline for `ai-spec-validation.yml` per ADR-006 (thin workflows), feeding downstream spec validation steps (`spec_external_signal_wrapper.py`, `generate_spec_report.py`, `check_spec_failures.py`). They are strictly constrained to Python stdlib only because they run prior to dependency setup on bare runner interpreters.
- `subprocess_encoding_count_ratchet.py` and `taste_count_ratchet.py` share common ratchet mechanics in `scripts/ci/count_ratchet.py`. `taste_count_baseline.txt` is registered in `merge_tree_ratchet_registry.py` (`MERGE_TREE_BACKED = True`), whereas `subprocess_encoding_count_baseline.txt` is deliberately not registered (`MERGE_TREE_BACKED = False`) as it executes exclusively in `pytest.yml` and relies directly on `--base-ref` to guard against stale baselines.
- None of the 8 assigned files appears in `docs/analysis/manifest/rjm-duplicates.md`, so no divergence cards were required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,500 tokens (34,037 bytes).
Approximate tokens of output written: ~9,800 tokens (~39,500 bytes).
