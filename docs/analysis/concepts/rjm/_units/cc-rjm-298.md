---
unit: cc-rjm-298
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-298

## Files assigned
- [x] sources/rjm/scripts/hook_utilities/utilities.py
- [x] sources/rjm/scripts/incoherence.py
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities-utilities-py.md
- [x] docs/analysis/inventory/rjm/scripts-incoherence-py.md

## Outputs produced
- docs/analysis/concepts/rjm/git-push-pattern.md (834 bytes)
- docs/analysis/concepts/rjm/gh-pr-create-pattern.md (878 bytes)
- docs/analysis/concepts/rjm/date-format.md (818 bytes)
- docs/analysis/concepts/rjm/iso-date.md (769 bytes)
- docs/analysis/concepts/rjm/host-session-date.md (860 bytes)
- docs/analysis/concepts/rjm/recent-host-session-dates.md (899 bytes)
- docs/analysis/concepts/rjm/win-lock-positions.md (839 bytes)
- docs/analysis/concepts/rjm/newest-by-mtime.md (862 bytes)
- docs/analysis/concepts/rjm/incoherence-detector.md (1410 bytes)
- docs/analysis/concepts/rjm/detection-phase.md (1294 bytes)
- docs/analysis/concepts/rjm/reconciliation-phase.md (1283 bytes)
- docs/analysis/concepts/rjm/dimension-catalog.md (873 bytes)
- docs/analysis/concepts/rjm/abstract-dimension-catalog.md (1596 bytes)
- docs/analysis/concepts/rjm/category-a-specification-vs-behavior.md (1267 bytes)
- docs/analysis/concepts/rjm/category-b-interface-contract-integrity.md (1217 bytes)
- docs/analysis/concepts/rjm/category-c-cross-reference-consistency.md (1260 bytes)
- docs/analysis/concepts/rjm/category-d-temporal-consistency-staleness.md (1283 bytes)
- docs/analysis/concepts/rjm/category-e-error-handling-consistency.md (1247 bytes)
- docs/analysis/concepts/rjm/category-f-configuration-environment.md (1258 bytes)
- docs/analysis/concepts/rjm/category-g-ambiguity-underspecification.md (1248 bytes)
- docs/analysis/concepts/rjm/category-h-policy-convention-compliance.md (1290 bytes)
- docs/analysis/concepts/rjm/category-i-completeness-documentation-gaps.md (1266 bytes)
- docs/analysis/concepts/rjm/category-j-compositional-consistency.md (1302 bytes)
- docs/analysis/concepts/rjm/category-k-implicit-contract-integrity.md (1320 bytes)
- docs/analysis/concepts/rjm/get-step-guidance.md (923 bytes)
- docs/analysis/concepts/rjm/codebase-survey.md (1160 bytes)
- docs/analysis/concepts/rjm/dimension-selection.md (1147 bytes)
- docs/analysis/concepts/rjm/exploration-dispatch.md (1144 bytes)
- docs/analysis/concepts/rjm/broad-sweep.md (1185 bytes)
- docs/analysis/concepts/rjm/coverage-check.md (1154 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-298.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/git-push-pattern.md docs/analysis/concepts/rjm/gh-pr-create-pattern.md docs/analysis/concepts/rjm/date-format.md docs/analysis/concepts/rjm/iso-date.md docs/analysis/concepts/rjm/host-session-date.md docs/analysis/concepts/rjm/recent-host-session-dates.md docs/analysis/concepts/rjm/win-lock-positions.md docs/analysis/concepts/rjm/newest-by-mtime.md docs/analysis/concepts/rjm/incoherence-detector.md docs/analysis/concepts/rjm/detection-phase.md docs/analysis/concepts/rjm/reconciliation-phase.md docs/analysis/concepts/rjm/dimension-catalog.md docs/analysis/concepts/rjm/abstract-dimension-catalog.md docs/analysis/concepts/rjm/category-a-specification-vs-behavior.md docs/analysis/concepts/rjm/category-b-interface-contract-integrity.md docs/analysis/concepts/rjm/category-c-cross-reference-consistency.md docs/analysis/concepts/rjm/category-d-temporal-consistency-staleness.md docs/analysis/concepts/rjm/category-e-error-handling-consistency.md docs/analysis/concepts/rjm/category-f-configuration-environment.md docs/analysis/concepts/rjm/category-g-ambiguity-underspecification.md docs/analysis/concepts/rjm/category-h-policy-convention-compliance.md docs/analysis/concepts/rjm/category-i-completeness-documentation-gaps.md docs/analysis/concepts/rjm/category-j-compositional-consistency.md docs/analysis/concepts/rjm/category-k-implicit-contract-integrity.md docs/analysis/concepts/rjm/get-step-guidance.md docs/analysis/concepts/rjm/codebase-survey.md docs/analysis/concepts/rjm/dimension-selection.md docs/analysis/concepts/rjm/exploration-dispatch.md docs/analysis/concepts/rjm/broad-sweep.md docs/analysis/concepts/rjm/coverage-check.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-298 covers 30 concepts spanning hook utility functions/constants and the incoherence detection workflow:
  1. `scripts/hook_utilities/utilities.py`: 8 concepts covering git command patterns, date formatting, session date helpers, Windows lock offset tracking, and mtime sorting (`_GIT_PUSH_PATTERN`, `_GH_PR_CREATE_PATTERN`, `_DATE_FORMAT`, `_ISO_DATE`, `host_session_date`, `recent_host_session_dates`, `_win_lock_positions`, `_newest_by_mtime`).
  2. `scripts/incoherence.py`: 22 concepts covering the 22-step incoherence detection and reconciliation architecture, including workflow phases (`DETECTION PHASE`, `RECONCILIATION PHASE`), the abstract consistency dimension catalog and all 11 consistency dimensions (`DIMENSION_CATALOG`, `ABSTRACT DIMENSION CATALOG`, `CATEGORY A` through `CATEGORY K`), function identifiers (`get_step_guidance`), and detection phase sub-steps (`CODEBASE SURVEY`, `DIMENSION SELECTION`, `EXPLORATION DISPATCH`, `BROAD SWEEP`, `COVERAGE CHECK`).
- All concepts strictly adhere to frontmatter contracts, verbatim quote extraction against sources/rjm/, and defect annotations from inventory cards (`clean` for hook utilities; `defects: missing-path, doc-drift, internal-contradiction, orphan` for incoherence).
- 22 concept cards previously existed on disk and were verified; 8 missing concept cards (`category-j-compositional-consistency`, `category-k-implicit-contract-integrity`, `get-step-guidance`, `codebase-survey`, `dimension-selection`, `exploration-dispatch`, `broad-sweep`, `coverage-check`) were authored and verified. All 30 cards pass quote-check cleanly with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,500 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~8,800 tokens across 30 concept cards and 1 unit report.
