---
unit: cc-rjm-260
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-260

## Files assigned
- [x] scripts/ci/spec_extract_refs.py
- [x] scripts/ci/spec_load_content.py
- [x] scripts/ci/spec_prepare_context.py
- [x] scripts/ci/subprocess_encoding_count_ratchet.py
- [x] scripts/ci/sweep_copilot_synthesis.py
- [x] scripts/ci/taste_count_ratchet.py
- [x] scripts/ci/type_ignore_count_ratchet.py
- [x] scripts/ci/update_needs_split_label.py
- [x] scripts/validate_quality_gate_output.py
- [x] scripts/validation/agent_registry.py
- [x] scripts/validation/check_subprocess_encoding.py

## Outputs produced
- docs/analysis/concepts/rjm/pr-title-input.md (908 bytes)
- docs/analysis/concepts/rjm/pr-body-input.md (902 bytes)
- docs/analysis/concepts/rjm/pr-number.md (1054 bytes)
- docs/analysis/concepts/rjm/incremental-scope.md (1059 bytes)
- docs/analysis/concepts/rjm/gh-pr-field.md (885 bytes)
- docs/analysis/concepts/rjm/extract-spec-refs.md (873 bytes)
- docs/analysis/concepts/rjm/extract-issue-refs.md (894 bytes)
- docs/analysis/concepts/rjm/extract-incremental-scope.md (967 bytes)
- docs/analysis/concepts/rjm/spec-file.md (993 bytes)
- docs/analysis/concepts/rjm/gh-issue-body.md (881 bytes)
- docs/analysis/concepts/rjm/find-spec-by-id.md (876 bytes)
- docs/analysis/concepts/rjm/read-spec.md (846 bytes)
- docs/analysis/concepts/rjm/load-spec-refs.md (890 bytes)
- docs/analysis/concepts/rjm/load-issue-refs.md (890 bytes)
- docs/analysis/concepts/rjm/spec-context.md (872 bytes)
- docs/analysis/concepts/rjm/write-multiline-output.md (968 bytes)
- docs/analysis/concepts/rjm/issue-4261.md (1098 bytes)
- docs/analysis/concepts/rjm/merge-tree-ratchet-registry-py.md (1280 bytes)
- docs/analysis/concepts/rjm/scripts-ci-merge-tree-ratchet-check-py.md (1317 bytes)
- docs/analysis/concepts/rjm/tests-ci-test-merge-tree-backing-declarations-py.md (1305 bytes)
- docs/analysis/concepts/rjm/issues.md (874 bytes)
- docs/analysis/concepts/rjm/invoke-copilot-assignment-py.md (909 bytes)
- docs/analysis/concepts/rjm/synthesis-script.md (884 bytes)
- docs/analysis/concepts/rjm/process-issue.md (869 bytes)
- docs/analysis/concepts/rjm/issue-3779.md (856 bytes)
- docs/analysis/concepts/rjm/run-taste-advisory.md (932 bytes)
- docs/analysis/concepts/rjm/scripts-validation-git-hook-policy-py.md (1080 bytes)
- docs/analysis/concepts/rjm/taste-count-baseline-txt.md (939 bytes)
- docs/analysis/concepts/rjm/required-fields.md (1182 bytes)
- docs/analysis/concepts/rjm/batch-findings.md (894 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-260.md (4365 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit represent identifiers, environment variables, internal helper functions, filenames, or issue tracking references recorded during Phase 1 inventory analysis of CI and validation scripts (`spec_extract_refs.py`, `spec_load_content.py`, `spec_prepare_context.py`, `subprocess_encoding_count_ratchet.py`, `sweep_copilot_synthesis.py`, `taste_count_ratchet.py`, `type_ignore_count_ratchet.py`, `update_needs_split_label.py`, `validate_quality_gate_output.py`, `agent_registry.py`, `check_subprocess_encoding.py`).
- Per METHOD.md R6 and D-023, each was categorized as `kind: name-only` with `(used, not defined)` definitions, full `Where used` tables mapping every occurrence cited in `unit-facts`, defect tracking from inventory cards, and single-sentence design notes.
- 7 cards already existed on disk from prior generation and verified cleanly; 23 cards were newly generated and verified.
- All 30 concept cards pass `bun scripts/synthesis/quote-check.ts` with 30 PASS and 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 11 source files and 11 inventory cards; approximate tokens of output written: ~7,500 tokens across 30 concept cards and this unit report.
