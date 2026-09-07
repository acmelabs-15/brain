---
unit: cc-rjm-330
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-330

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_links.py
- [x] sources/rjm/scripts/validation/check_adr_uniqueness.py
- [x] sources/rjm/scripts/validation/check_nested_tests.py
- [x] sources/rjm/scripts/validation/stale_script_refs.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-links-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-uniqueness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-nested-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-stale-script-refs-py.md

## Outputs produced
- docs/analysis/concepts/rjm/adr-basename.md (930 bytes)
- docs/analysis/concepts/rjm/adr-anywhere.md (972 bytes)
- docs/analysis/concepts/rjm/text-adr-number.md (1190 bytes)
- docs/analysis/concepts/rjm/file-adr-number.md (960 bytes)
- docs/analysis/concepts/rjm/external-scheme-re.md (961 bytes)
- docs/analysis/concepts/rjm/baseline-kinds.md (985 bytes)
- docs/analysis/concepts/rjm/is-historical-path.md (1135 bytes)
- docs/analysis/concepts/rjm/git-ls-markdown.md (919 bytes)
- docs/analysis/concepts/rjm/check-subprocess-encoding-py.md (983 bytes)
- docs/analysis/concepts/rjm/resolve-base-ref.md (951 bytes)
- docs/analysis/concepts/rjm/checks-common-py.md (945 bytes)
- docs/analysis/concepts/rjm/memory-index-py.md (926 bytes)
- docs/analysis/concepts/rjm/baseline-entries-at-ref.md (1033 bytes)
- docs/analysis/concepts/rjm/base-allowances-for-run.md (966 bytes)
- docs/analysis/concepts/rjm/split-destination.md (952 bytes)
- docs/analysis/concepts/rjm/is-adr-target.md (910 bytes)
- docs/analysis/concepts/rjm/adr-number.md (889 bytes)
- docs/analysis/concepts/rjm/normalize-label.md (936 bytes)
- docs/analysis/concepts/rjm/validate-allowances.md (1000 bytes)
- docs/analysis/concepts/rjm/find-broken-adr-links.md (950 bytes)
- docs/analysis/concepts/rjm/stale-allowance.md (908 bytes)
- docs/analysis/concepts/rjm/has-adr-corpus.md (960 bytes)
- docs/analysis/concepts/rjm/validate-adr-links.md (974 bytes)
- docs/analysis/concepts/rjm/pre-pr-py.md (1059 bytes)
- docs/analysis/concepts/rjm/allowlist.md (963 bytes)
- docs/analysis/concepts/rjm/print-next.md (916 bytes)
- docs/analysis/concepts/rjm/print-next-padded.md (968 bytes)
- docs/analysis/concepts/rjm/known-duplicates-issue-2228.md (1006 bytes)
- docs/analysis/concepts/rjm/collect-adr-numbers.md (972 bytes)
- docs/analysis/concepts/rjm/find-new-duplicates.md (925 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-330.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/adr-basename.md docs/analysis/concepts/rjm/adr-anywhere.md docs/analysis/concepts/rjm/text-adr-number.md docs/analysis/concepts/rjm/file-adr-number.md docs/analysis/concepts/rjm/external-scheme-re.md docs/analysis/concepts/rjm/baseline-kinds.md docs/analysis/concepts/rjm/is-historical-path.md docs/analysis/concepts/rjm/git-ls-markdown.md docs/analysis/concepts/rjm/check-subprocess-encoding-py.md docs/analysis/concepts/rjm/resolve-base-ref.md docs/analysis/concepts/rjm/checks-common-py.md docs/analysis/concepts/rjm/memory-index-py.md docs/analysis/concepts/rjm/baseline-entries-at-ref.md docs/analysis/concepts/rjm/base-allowances-for-run.md docs/analysis/concepts/rjm/split-destination.md docs/analysis/concepts/rjm/is-adr-target.md docs/analysis/concepts/rjm/adr-number.md docs/analysis/concepts/rjm/normalize-label.md docs/analysis/concepts/rjm/validate-allowances.md docs/analysis/concepts/rjm/find-broken-adr-links.md docs/analysis/concepts/rjm/stale-allowance.md docs/analysis/concepts/rjm/has-adr-corpus.md docs/analysis/concepts/rjm/validate-adr-links.md docs/analysis/concepts/rjm/pre-pr-py.md docs/analysis/concepts/rjm/allowlist.md docs/analysis/concepts/rjm/print-next.md docs/analysis/concepts/rjm/print-next-padded.md docs/analysis/concepts/rjm/known-duplicates-issue-2228.md docs/analysis/concepts/rjm/collect-adr-numbers.md docs/analysis/concepts/rjm/find-new-duplicates.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-330 completes 30 concept cards spanning ADR link checking, baseline ratcheting, CommonMark parsing, and ADR number uniqueness validation:
  1. Regular expression identifiers and constants for ADR link checking (`ADR_BASENAME`, `ADR_ANYWHERE`, `TEXT_ADR_NUMBER`, `FILE_ADR_NUMBER`, `EXTERNAL_SCHEME_RE`, `BASELINE_KINDS`).
  2. Helper and resolution functions in `check_adr_links.py` (`git_ls_markdown`, `resolve_base_ref`, `baseline_entries_at_ref`, `base_allowances_for_run`, `split_destination`, `is_adr_target`, `adr_number`, `normalize_label`, `_validate_allowances`, `_has_adr_corpus`).
  3. Shared historical path filtering across `check_adr_links.py` and `stale_script_refs.py` (`is_historical_path`).
  4. Script file references mentioned in validation routines (`check_subprocess_encoding.py`, `checks_common.py`, `memory_index.py`, `pre_pr.py`).
  5. Core scanning functions and finding identifiers (`find_broken_adr_links`, `stale-allowance`, `validate_adr_links`).
  6. ADR uniqueness verification concepts, CLI flags, allowlists, and helpers from `check_adr_uniqueness.py` (`allowlist`, `--print-next`, `--print-next-padded`, `KNOWN_DUPLICATES_ISSUE_2228`, `collect_adr_numbers`, `find_new_duplicates`).
- All 30 concepts represent code identifiers, function names, regex constants, CLI flags, finding kind literals, or script file names rather than autonomous SDLC lifecycle concepts, and are classified as `kind: name-only` per D-023.
- All 33 occurrences recorded in `facts/cc-rjm-330.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: doc-drift, missing-path` for `is_historical_path` due to `stale_script_refs.py`, and `clean` for the remaining 29 concepts).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (31 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~22,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 authored concept cards and 1 unit report.
