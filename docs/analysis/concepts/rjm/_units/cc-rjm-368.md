---
unit: cc-rjm-368
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-368

## Files assigned
- [x] sources/rjm/scripts/validation/stale_script_refs.py
- [x] sources/rjm/scripts/validation/subprocess_runner.py
- [x] sources/rjm/scripts/validation/test_docs_only_eligibility.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] sources/rjm/scripts/validation/token_budget.py
- [x] sources/rjm/scripts/validation/traceability.py
- [x] sources/rjm/scripts/validation/tracked_paths.py
- [x] docs/analysis/inventory/rjm/scripts-validation-stale-script-refs-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-subprocess-runner-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-docs-only-eligibility-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-token-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-traceability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-tracked-paths-py.md

## Outputs produced
- docs/analysis/concepts/rjm/default-allowlist.md (1296 bytes)
- docs/analysis/concepts/rjm/pwsh-ref.md (1311 bytes)
- docs/analysis/concepts/rjm/run-ref.md (1238 bytes)
- docs/analysis/concepts/rjm/bare-ref.md (1238 bytes)
- docs/analysis/concepts/rjm/normalize-ref.md (1269 bytes)
- docs/analysis/concepts/rjm/git-ls-files.md (1692 bytes)
- docs/analysis/concepts/rjm/is-allowed.md (1279 bytes)
- docs/analysis/concepts/rjm/extract-refs.md (1267 bytes)
- docs/analysis/concepts/rjm/find-stale-refs.md (1279 bytes)
- docs/analysis/concepts/rjm/validate-stale-script-refs.md (1294 bytes)
- docs/analysis/concepts/rjm/decode-stream.md (1229 bytes)
- docs/analysis/concepts/rjm/commit-pattern.md (1587 bytes)
- docs/analysis/concepts/rjm/fence-start-pattern.md (1318 bytes)
- docs/analysis/concepts/rjm/indented-code-pattern.md (1303 bytes)
- docs/analysis/concepts/rjm/doc-extensions.md (1245 bytes)
- docs/analysis/concepts/rjm/is-doc-file.md (1218 bytes)
- docs/analysis/concepts/rjm/code-block-lines.md (1269 bytes)
- docs/analysis/concepts/rjm/name-status-paths.md (1569 bytes)
- docs/analysis/concepts/rjm/content-at.md (1232 bytes)
- docs/analysis/concepts/rjm/file-is-editorial.md (948 bytes)
- docs/analysis/concepts/rjm/error-output.md (904 bytes)
- docs/analysis/concepts/rjm/allowlist-display.md (917 bytes)
- docs/analysis/concepts/rjm/count-punct-and-symbols.md (896 bytes)
- docs/analysis/concepts/rjm/estimate-token-count.md (909 bytes)
- docs/analysis/concepts/rjm/validate-token-budget.md (877 bytes)
- docs/analysis/concepts/rjm/spec-id-re.md (835 bytes)
- docs/analysis/concepts/rjm/related-id-re.md (853 bytes)
- docs/analysis/concepts/rjm/specinfo.md (802 bytes)
- docs/analysis/concepts/rjm/traceissue.md (790 bytes)
- docs/analysis/concepts/rjm/traceresults.md (828 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-368.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/default-allowlist.md docs/analysis/concepts/rjm/pwsh-ref.md docs/analysis/concepts/rjm/run-ref.md docs/analysis/concepts/rjm/bare-ref.md docs/analysis/concepts/rjm/normalize-ref.md docs/analysis/concepts/rjm/git-ls-files.md docs/analysis/concepts/rjm/is-allowed.md docs/analysis/concepts/rjm/extract-refs.md docs/analysis/concepts/rjm/find-stale-refs.md docs/analysis/concepts/rjm/validate-stale-script-refs.md docs/analysis/concepts/rjm/decode-stream.md docs/analysis/concepts/rjm/commit-pattern.md docs/analysis/concepts/rjm/fence-start-pattern.md docs/analysis/concepts/rjm/indented-code-pattern.md docs/analysis/concepts/rjm/doc-extensions.md docs/analysis/concepts/rjm/is-doc-file.md docs/analysis/concepts/rjm/code-block-lines.md docs/analysis/concepts/rjm/name-status-paths.md docs/analysis/concepts/rjm/content-at.md docs/analysis/concepts/rjm/file-is-editorial.md docs/analysis/concepts/rjm/error-output.md docs/analysis/concepts/rjm/allowlist-display.md docs/analysis/concepts/rjm/count-punct-and-symbols.md docs/analysis/concepts/rjm/estimate-token-count.md docs/analysis/concepts/rjm/validate-token-budget.md docs/analysis/concepts/rjm/spec-id-re.md docs/analysis/concepts/rjm/related-id-re.md docs/analysis/concepts/rjm/specinfo.md docs/analysis/concepts/rjm/traceissue.md docs/analysis/concepts/rjm/traceresults.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-368 completes 30 concept cards spanning repository reference validation, subprocess stream capture, docs-only and investigation-only eligibility gates, token budgeting heuristics, and specification traceability:
  1. Stale script reference validation in `stale_script_refs.py`: default allowlist file constant (`DEFAULT_ALLOWLIST`), regular expression patterns for PowerShell commands (`PWSH_REF`, `RUN_REF`, `BARE_REF`), path string normalizer (`normalize_ref`), git tracked file inspection (`git_ls_files`), allowlist checking (`is_allowed`), reference extraction (`extract_refs`), stale reference scanner (`find_stale_refs`), and gate validation (`validate_stale_script_refs`).
  2. Subprocess stream decoding in `subprocess_runner.py`: cross-platform stream decoder (`_decode_stream`) that handles POSIX raw bytes and Windows string representations during process timeouts.
  3. Docs-only QA skip eligibility verification in `test_docs_only_eligibility.py`: hexadecimal commit regex (`_COMMIT_PATTERN`), Markdown fence and indentation regex patterns (`_FENCE_START_PATTERN`, `_INDENTED_CODE_PATTERN`), documentation file extension tuple (`_DOC_EXTENSIONS`), doc file predicate (`_is_doc_file`), fenced/indented code block line extractor (`_code_block_lines`), git name-status path parser (`_name_status_paths`), revision content reader (`_content_at`), editorial verification helper (`_file_is_editorial`), and error output formatter (`_error_output`).
  4. Investigation-only QA skip eligibility in `test_investigation_eligibility.py`: allowlist display directory paths (`_ALLOWLIST_DISPLAY`).
  5. Token budgeting and handoff limits in `token_budget.py`: Unicode punctuation and symbol counter (`_count_punct_and_symbols`), heuristic token estimator (`estimate_token_count`), and handoff token budget validation gate (`validate_token_budget`).
  6. Specification traceability validation in `traceability.py`: specification identifier regex patterns (`_SPEC_ID_RE`, `_RELATED_ID_RE`), spec metadata container (`SpecInfo`), traceability violation model (`TraceIssue`), and aggregation summary model (`TraceResults`).
  7. Git index path resolution in `tracked_paths.py`: git ls-files command usage.
- All concepts represent helper functions, regular expression patterns, constants, or dataclasses, and are classified as `kind: name-only`, `package_phase: none` per D-023.
- All 33 occurrences recorded in `facts/cc-rjm-368.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: missing-path, doc-drift` for `stale_script_refs.py` concepts; `clean` for all other concepts).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~25,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
