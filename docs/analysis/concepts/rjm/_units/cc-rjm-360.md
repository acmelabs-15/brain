---
unit: cc-rjm-360
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-360

## Files assigned
- [x] sources/rjm/scripts/validation/pr_commit_count.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-commit-count-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md

## Outputs produced
- docs/analysis/concepts/rjm/classify-count.md (861 bytes)
- docs/analysis/concepts/rjm/is-transient-error.md (886 bytes)
- docs/analysis/concepts/rjm/fetch-commit-count.md (916 bytes)
- docs/analysis/concepts/rjm/significant-extensions.md (902 bytes)
- docs/analysis/concepts/rjm/significant-dirs-pattern.md (919 bytes)
- docs/analysis/concepts/rjm/ext-group.md (894 bytes)
- docs/analysis/concepts/rjm/ext-boundary.md (854 bytes)
- docs/analysis/concepts/rjm/line-suffix.md (822 bytes)
- docs/analysis/concepts/rjm/default-bypass-label.md (892 bytes)
- docs/analysis/concepts/rjm/contextual-section-names.md (944 bytes)
- docs/analysis/concepts/rjm/change-claim-section-names.md (912 bytes)
- docs/analysis/concepts/rjm/change-claim-scoped-pattern-indexes.md (1017 bytes)
- docs/analysis/concepts/rjm/reference-section-prefixes.md (955 bytes)
- docs/analysis/concepts/rjm/file-mention-patterns.md (929 bytes)
- docs/analysis/concepts/rjm/inline-citation-pattern.md (909 bytes)
- docs/analysis/concepts/rjm/bot-details-summary-pattern.md (936 bytes)
- docs/analysis/concepts/rjm/fetch-pr-data.md (891 bytes)
- docs/analysis/concepts/rjm/strip-bot-details-blocks.md (905 bytes)
- docs/analysis/concepts/rjm/strip-informational-sections.md (942 bytes)
- docs/analysis/concepts/rjm/change-claim-regions.md (931 bytes)
- docs/analysis/concepts/rjm/is-in-change-claim-region.md (945 bytes)
- docs/analysis/concepts/rjm/extract-mentioned-files.md (935 bytes)
- docs/analysis/concepts/rjm/extract-all-mentioned-files.md (962 bytes)
- docs/analysis/concepts/rjm/file-matches.md (887 bytes)
- docs/analysis/concepts/rjm/issue-1923.md (798 bytes)
- docs/analysis/concepts/rjm/req-006.md (786 bytes)
- docs/analysis/concepts/rjm/issue-3827.md (806 bytes)
- docs/analysis/concepts/rjm/auto-close-kw.md (862 bytes)
- docs/analysis/concepts/rjm/inline-code-span.md (874 bytes)
- docs/analysis/concepts/rjm/fence-open-line.md (872 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-360.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/classify-count.md docs/analysis/concepts/rjm/is-transient-error.md docs/analysis/concepts/rjm/fetch-commit-count.md docs/analysis/concepts/rjm/significant-extensions.md docs/analysis/concepts/rjm/significant-dirs-pattern.md docs/analysis/concepts/rjm/ext-group.md docs/analysis/concepts/rjm/ext-boundary.md docs/analysis/concepts/rjm/line-suffix.md docs/analysis/concepts/rjm/default-bypass-label.md docs/analysis/concepts/rjm/contextual-section-names.md docs/analysis/concepts/rjm/change-claim-section-names.md docs/analysis/concepts/rjm/change-claim-scoped-pattern-indexes.md docs/analysis/concepts/rjm/reference-section-prefixes.md docs/analysis/concepts/rjm/file-mention-patterns.md docs/analysis/concepts/rjm/inline-citation-pattern.md docs/analysis/concepts/rjm/bot-details-summary-pattern.md docs/analysis/concepts/rjm/fetch-pr-data.md docs/analysis/concepts/rjm/strip-bot-details-blocks.md docs/analysis/concepts/rjm/strip-informational-sections.md docs/analysis/concepts/rjm/change-claim-regions.md docs/analysis/concepts/rjm/is-in-change-claim-region.md docs/analysis/concepts/rjm/extract-mentioned-files.md docs/analysis/concepts/rjm/extract-all-mentioned-files.md docs/analysis/concepts/rjm/file-matches.md docs/analysis/concepts/rjm/issue-1923.md docs/analysis/concepts/rjm/req-006.md docs/analysis/concepts/rjm/issue-3827.md docs/analysis/concepts/rjm/auto-close-kw.md docs/analysis/concepts/rjm/inline-code-span.md docs/analysis/concepts/rjm/fence-open-line.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-360 completes 30 concept cards spanning PR commit count classification and PR description validation:
  1. PR commit count classification and transient API error handling (`classify-count`, `is-transient-error`, `fetch-commit-count`) in `pr_commit_count.py`.
  2. PR description validation constants, regex patterns, and headings (`significant-extensions`, `significant-dirs-pattern`, `ext-group`, `ext-boundary`, `line-suffix`, `default-bypass-label`, `contextual-section-names`, `change-claim-section-names`, `change-claim-scoped-pattern-indexes`, `reference-section-prefixes`, `file-mention-patterns`, `inline-citation-pattern`, `bot-details-summary-pattern`) in `pr_description.py`.
  3. PR description extraction, stripping, matching, and GitHub API retrieval functions (`fetch-pr-data`, `strip-bot-details-blocks`, `strip-informational-sections`, `change-claim-regions`, `is-in-change-claim-region`, `extract-mentioned-files`, `extract-all-mentioned-files`, `file-matches`) in `pr_description.py`.
  4. Issue references, requirement references, and code block / closing link parsing regexes (`issue-1923`, `req-006`, `issue-3827`, `auto-close-kw`, `inline-code-span`, `fence-open-line`) in `pr_description.py`.
- All 30 concepts represent identifiers (functions, compiled regexes, constants, issue tracking numbers) rather than lifecycle concepts, classified as `kind: name-only` with `package_phase: none` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-360.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean` for `pr_commit_count.py`, `defects: doc-drift` for `pr_description.py`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
