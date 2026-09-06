---
unit: inv-rjm-208
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-208

## Files assigned
- [x] sources/rjm/scripts/ci/spec_extract_refs.py
- [x] sources/rjm/scripts/ci/spec_load_content.py
- [x] sources/rjm/scripts/ci/spec_prepare_context.py
- [x] sources/rjm/scripts/ci/subprocess_encoding_count_baseline.txt
- [x] sources/rjm/scripts/ci/subprocess_encoding_count_ratchet.py
- [x] sources/rjm/scripts/ci/sweep_copilot_synthesis.py
- [x] sources/rjm/scripts/ci/taste_count_baseline.txt
- [x] sources/rjm/scripts/ci/taste_count_ratchet.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-spec-extract-refs-py.md (6740 bytes)
- docs/analysis/inventory/rjm/scripts-ci-spec-load-content-py.md (5753 bytes)
- docs/analysis/inventory/rjm/scripts-ci-spec-prepare-context-py.md (4751 bytes)
- docs/analysis/inventory/rjm/scripts-ci-subprocess-encoding-count-baseline-txt.md (2453 bytes)
- docs/analysis/inventory/rjm/scripts-ci-subprocess-encoding-count-ratchet-py.md (6094 bytes)
- docs/analysis/inventory/rjm/scripts-ci-sweep-copilot-synthesis-py.md (4430 bytes)
- docs/analysis/inventory/rjm/scripts-ci-taste-count-baseline-txt.md (2304 bytes)
- docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md (6783 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-208.md (this report)

## Scripts executed
- `scripts/ci/spec_extract_refs.py`: `python3 scripts/ci/spec_extract_refs.py`, exit code: 0 (and `python3 sources/rjm/scripts/ci/spec_extract_refs.py`, exit code: 3)
- `scripts/ci/spec_load_content.py`: `SPEC_REFS=".agents/specs/agent-orchestration-mcp-spec.md" python3 scripts/ci/spec_load_content.py`, exit code: 0 (and `python3 scripts/ci/spec_load_content.py`, exit code: 2)
- `scripts/ci/spec_prepare_context.py`: `SPEC_FILE=".agents/specs/agent-orchestration-mcp-spec.md" INCREMENTAL_SCOPE="phase 1 orchestration" python3 scripts/ci/spec_prepare_context.py`, exit code: 0 (and `python3 scripts/ci/spec_prepare_context.py`, exit code: 2)
- `scripts/ci/subprocess_encoding_count_baseline.txt`: `cat sources/rjm/scripts/ci/subprocess_encoding_count_baseline.txt`, exit code: 0
- `scripts/ci/subprocess_encoding_count_ratchet.py`: `python3 scripts/ci/subprocess_encoding_count_ratchet.py`, exit code: 0
- `scripts/ci/sweep_copilot_synthesis.py`: `python3 scripts/ci/sweep_copilot_synthesis.py`, exit code: 0 (and `ISSUES="999999" python3 scripts/ci/sweep_copilot_synthesis.py`, exit code: 0)
- `scripts/ci/taste_count_baseline.txt`: `cat sources/rjm/scripts/ci/taste_count_baseline.txt`, exit code: 0
- `scripts/ci/taste_count_ratchet.py`: `python3 scripts/ci/taste_count_ratchet.py`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Phase 1V finding addressed: `spec_prepare_context.py` correctly marks `Invoked by: orphan` and includes the corresponding `orphan` defect note under `## Defects`, eliminating prior omissions where out-of-scope `.github/workflows/` were listed without flagging the defect.
- `subprocess_encoding_count_ratchet.py` has `MERGE_TREE_BACKED = False` and is intentionally not registered in `merge_tree_ratchet_registry.py` to prevent altering the gate definition (ci-scripts MUST-13).
- `taste_count_ratchet.py` has `MERGE_TREE_BACKED = True` and is invoked by `scripts/validation/checks_ratchet.py`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,500 tokens (34,037 bytes across 8 files).
Approximate tokens of output written: ~9,800 tokens (39,308 bytes across 8 cards + unit report).
