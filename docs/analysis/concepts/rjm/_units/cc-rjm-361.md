---
unit: cc-rjm-361
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-361

## Files assigned
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md

## Outputs produced
- docs/analysis/concepts/rjm/fenced-code-block-ranges.md (1006 bytes)
- docs/analysis/concepts/rjm/span-ranges.md (948 bytes)
- docs/analysis/concepts/rjm/in-any-range.md (954 bytes)
- docs/analysis/concepts/rjm/ranges-overlap.md (911 bytes)
- docs/analysis/concepts/rjm/code-spans-outside-fences.md (945 bytes)
- docs/analysis/concepts/rjm/validate-closing-links.md (975 bytes)
- docs/analysis/concepts/rjm/validate-no-dashes.md (961 bytes)
- docs/analysis/concepts/rjm/validate-pr-description.md (952 bytes)
- docs/analysis/concepts/rjm/output-unsafe-chars.md (930 bytes)
- docs/analysis/concepts/rjm/safe-label-for-output.md (913 bytes)
- docs/analysis/concepts/rjm/safe-label-for-markdown.md (933 bytes)
- docs/analysis/concepts/rjm/warn-if-mutated.md (940 bytes)
- docs/analysis/concepts/rjm/write-step-output.md (963 bytes)
- docs/analysis/concepts/rjm/emit-bypass-audit.md (972 bytes)
- docs/analysis/concepts/rjm/run-all-validations.md (947 bytes)
- docs/analysis/concepts/rjm/sequence.md (911 bytes)
- docs/analysis/concepts/rjm/validationstatelike.md (922 bytes)
- docs/analysis/concepts/rjm/fast-stage-ran-env.md (934 bytes)
- docs/analysis/concepts/rjm/root-only.md (951 bytes)
- docs/analysis/concepts/rjm/run-orphaned-build-deferrals.md (1021 bytes)
- docs/analysis/concepts/rjm/run-copilot-routing-exclusions.md (1014 bytes)
- docs/analysis/concepts/rjm/nested-test-detection.md (1056 bytes)
- docs/analysis/concepts/rjm/duplicate-test-helper-detection.md (1162 bytes)
- docs/analysis/concepts/rjm/unreachable-code-detection.md (1160 bytes)
- docs/analysis/concepts/rjm/subprocess-encoding-convention.md (1175 bytes)
- docs/analysis/concepts/rjm/test-working-tree-writes.md (1140 bytes)
- docs/analysis/concepts/rjm/push-lock-path-agreement.md (1180 bytes)
- docs/analysis/concepts/rjm/worktree-recipe-destinations.md (1209 bytes)
- docs/analysis/concepts/rjm/temp-filesystem-worktrees-advisory.md (1235 bytes)
- docs/analysis/concepts/rjm/session-end-validation.md (1099 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-361.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/fenced-code-block-ranges.md docs/analysis/concepts/rjm/span-ranges.md docs/analysis/concepts/rjm/in-any-range.md docs/analysis/concepts/rjm/ranges-overlap.md docs/analysis/concepts/rjm/code-spans-outside-fences.md docs/analysis/concepts/rjm/validate-closing-links.md docs/analysis/concepts/rjm/validate-no-dashes.md docs/analysis/concepts/rjm/validate-pr-description.md docs/analysis/concepts/rjm/output-unsafe-chars.md docs/analysis/concepts/rjm/safe-label-for-output.md docs/analysis/concepts/rjm/safe-label-for-markdown.md docs/analysis/concepts/rjm/warn-if-mutated.md docs/analysis/concepts/rjm/write-step-output.md docs/analysis/concepts/rjm/emit-bypass-audit.md docs/analysis/concepts/rjm/run-all-validations.md docs/analysis/concepts/rjm/sequence.md docs/analysis/concepts/rjm/validationstatelike.md docs/analysis/concepts/rjm/fast-stage-ran-env.md docs/analysis/concepts/rjm/root-only.md docs/analysis/concepts/rjm/run-orphaned-build-deferrals.md docs/analysis/concepts/rjm/run-copilot-routing-exclusions.md docs/analysis/concepts/rjm/nested-test-detection.md docs/analysis/concepts/rjm/duplicate-test-helper-detection.md docs/analysis/concepts/rjm/unreachable-code-detection.md docs/analysis/concepts/rjm/subprocess-encoding-convention.md docs/analysis/concepts/rjm/test-working-tree-writes.md docs/analysis/concepts/rjm/push-lock-path-agreement.md docs/analysis/concepts/rjm/worktree-recipe-destinations.md docs/analysis/concepts/rjm/temp-filesystem-worktrees-advisory.md docs/analysis/concepts/rjm/session-end-validation.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-361 completes 30 concept cards spanning PR description validation parsing/auditing mechanics and pre-PR validation sequence registry gates:
  1. PR description validation parsing, sanitization, and bypass audit mechanisms (`_fenced_code_block_ranges`, `_span_ranges`, `_in_any_range`, `_ranges_overlap`, `_code_spans_outside_fences`, `validate_closing_links`, `validate_no_dashes`, `validate_pr_description`, `_OUTPUT_UNSAFE_CHARS`, `_safe_label_for_output`, `_safe_label_for_markdown`, `_warn_if_mutated`, `_write_step_output`, `_emit_bypass_audit`) in `pr_description.py`.
  2. Pre-PR validation sequence infrastructure, protocols, and gate adapters (`run_all_validations`, `_SEQUENCE`, `_ValidationStateLike`, `FAST_STAGE_RAN_ENV`, `_root_only`, `_run_orphaned_build_deferrals`, `_run_copilot_routing_exclusions`) in `pre_pr_sequence.py`.
  3. Pre-PR shift-left governance and quality gates (`Nested Test Detection`, `Duplicate Test Helper Detection`, `Unreachable Code Detection`, `Subprocess Encoding Convention`, `Test Working Tree Writes`, `Push Lock Path Agreement`, `Worktree Recipe Destinations`, `Temp-filesystem Worktrees (advisory)`, `Session End Validation`) in `pre_pr_sequence.py`.
- Concepts representing functions, regex patterns, constants, or type protocols are classified as `kind: name-only` per D-023.
- Concepts representing lifecycle shift-left validation and quality checks are classified as `kind: gate` with `package_phase: rjm:ship`.
- All 30 occurrences recorded in `facts/cc-rjm-361.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: doc-drift` for `pr_description.py`, `clean` for `pre_pr_sequence.py`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~21,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
