---
unit: cc-rjm-369
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-369

## Files assigned
- [x] sources/rjm/scripts/validation/traceability.py
- [x] sources/rjm/scripts/validation/tracked_paths.py
- [x] sources/rjm/scripts/validation/validate_agent_catalog.py
- [x] sources/rjm/scripts/validation/validate_argument_hint.py
- [x] sources/rjm/scripts/validation/validate_copilot_agent_frontmatter.py
- [x] sources/rjm/scripts/validation/validate_design_review.py
- [x] sources/rjm/scripts/validation/validate_hook_anchoring.py
- [x] sources/rjm/scripts/validation/validate_no_orphaned_build_deferrals.py
- [x] docs/analysis/inventory/rjm/scripts-validation-traceability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-tracked-paths-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-agent-catalog-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-argument-hint-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-copilot-agent-frontmatter-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-design-review-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-hook-anchoring-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-no-orphaned-build-deferrals-py.md

## Outputs produced
- docs/analysis/concepts/rjm/allspecs.md (812 bytes)
- docs/analysis/concepts/rjm/parse-yaml-front-matter.md (899 bytes)
- docs/analysis/concepts/rjm/refindex.md (814 bytes)
- docs/analysis/concepts/rjm/build-ref-index.md (845 bytes)
- docs/analysis/concepts/rjm/check-task-traceability.md (867 bytes)
- docs/analysis/concepts/rjm/check-design-traceability.md (902 bytes)
- docs/analysis/concepts/rjm/check-orphaned-requirements.md (935 bytes)
- docs/analysis/concepts/rjm/check-complete-chains.md (867 bytes)
- docs/analysis/concepts/rjm/check-status-consistency.md (925 bytes)
- docs/analysis/concepts/rjm/git-index.md (910 bytes)
- docs/analysis/concepts/rjm/indexsnapshot.md (797 bytes)
- docs/analysis/concepts/rjm/clear-tracked-path-cache.md (861 bytes)
- docs/analysis/concepts/rjm/tracked-paths.md (845 bytes)
- docs/analysis/concepts/rjm/docs-agent-catalog-md.md (886 bytes)
- docs/analysis/concepts/rjm/argumenthintviolation.md (898 bytes)
- docs/analysis/concepts/rjm/find-argument-hint-violations.md (955 bytes)
- docs/analysis/concepts/rjm/validate-argument-hint.md (917 bytes)
- docs/analysis/concepts/rjm/copilot-custom-agent.md (996 bytes)
- docs/analysis/concepts/rjm/required-string-fields.md (991 bytes)
- docs/analysis/concepts/rjm/find-malformed.md (970 bytes)
- docs/analysis/concepts/rjm/blocking-statuses.md (936 bytes)
- docs/analysis/concepts/rjm/validate-design-review-frontmatter.md (1011 bytes)
- docs/analysis/concepts/rjm/plugin-hook.md (916 bytes)
- docs/analysis/concepts/rjm/decision-copilot-cli-hook-plugin-root-contract.md (1100 bytes)
- docs/analysis/concepts/rjm/find-platform-hook-artifacts.md (974 bytes)
- docs/analysis/concepts/rjm/build-all-py-check.md (958 bytes)
- docs/analysis/concepts/rjm/staleness-deferrals.md (956 bytes)
- docs/analysis/concepts/rjm/sanctioned-deferral-protocol.md (1476 bytes)
- docs/analysis/concepts/rjm/deferralblock.md (933 bytes)
- docs/analysis/concepts/rjm/lookup-issue-state.md (943 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-369.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/allspecs.md docs/analysis/concepts/rjm/parse-yaml-front-matter.md docs/analysis/concepts/rjm/refindex.md docs/analysis/concepts/rjm/build-ref-index.md docs/analysis/concepts/rjm/check-task-traceability.md docs/analysis/concepts/rjm/check-design-traceability.md docs/analysis/concepts/rjm/check-orphaned-requirements.md docs/analysis/concepts/rjm/check-complete-chains.md docs/analysis/concepts/rjm/check-status-consistency.md docs/analysis/concepts/rjm/git-index.md docs/analysis/concepts/rjm/indexsnapshot.md docs/analysis/concepts/rjm/clear-tracked-path-cache.md docs/analysis/concepts/rjm/tracked-paths.md docs/analysis/concepts/rjm/docs-agent-catalog-md.md docs/analysis/concepts/rjm/argumenthintviolation.md docs/analysis/concepts/rjm/find-argument-hint-violations.md docs/analysis/concepts/rjm/validate-argument-hint.md docs/analysis/concepts/rjm/copilot-custom-agent.md docs/analysis/concepts/rjm/required-string-fields.md docs/analysis/concepts/rjm/find-malformed.md docs/analysis/concepts/rjm/blocking-statuses.md docs/analysis/concepts/rjm/validate-design-review-frontmatter.md docs/analysis/concepts/rjm/plugin-hook.md docs/analysis/concepts/rjm/decision-copilot-cli-hook-plugin-root-contract.md docs/analysis/concepts/rjm/find-platform-hook-artifacts.md docs/analysis/concepts/rjm/build-all-py-check.md docs/analysis/concepts/rjm/staleness-deferrals.md docs/analysis/concepts/rjm/sanctioned-deferral-protocol.md docs/analysis/concepts/rjm/deferralblock.md docs/analysis/concepts/rjm/lookup-issue-state.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-369 completes 30 concept cards across 8 validation scripts:
  1. Specification traceability validation infrastructure (`allspecs`, `parse-yaml-front-matter`, `refindex`, `build-ref-index`, `check-task-traceability`, `check-design-traceability`, `check-orphaned-requirements`, `check-complete-chains`, `check-status-consistency`) in `traceability.py`.
  2. Git index path existence caching helpers (`git-index`, `indexsnapshot`, `clear-tracked-path-cache`, `tracked-paths`) in `tracked_paths.py`.
  3. Agent catalog documentation drift verification target (`docs-agent-catalog-md`) in `validate_agent_catalog.py`.
  4. Argument-hint quoting verification structures and routines (`argumenthintviolation`, `find-argument-hint-violations`, `validate-argument-hint`) in `validate_argument_hint.py`.
  5. Copilot custom agent frontmatter validation identifiers (`copilot-custom-agent`, `required-string-fields`, `find-malformed`) in `validate_copilot_agent_frontmatter.py`.
  6. Design review frontmatter validation constants and routines (`blocking-statuses`, `validate-design-review-frontmatter`) in `validate_design_review.py`.
  7. Plugin hook anchoring validation mechanisms and empirical contract references (`plugin-hook`, `decision-copilot-cli-hook-plugin-root-contract`, `find-platform-hook-artifacts`) in `validate_hook_anchoring.py`.
  8. Staleness deferral governance and policing gates (`build-all-py-check`, `staleness-deferrals`, `sanctioned-deferral-protocol`, `deferralblock`, `lookup-issue-state`) in `validate_no_orphaned_build_deferrals.py`.
- Concepts representing functions, dataclasses, constants, commands, file paths, or platform descriptors are classified as `kind: name-only` per D-023.
- `sanctioned-deferral-protocol` represents a core development lifecycle protocol and is classified as `kind: pattern` (`package_phase: rjm:build`).
- `decision-copilot-cli-hook-plugin-root-contract` references an excluded Serena decision memory and is classified as `kind: name-only` with `implementation_in_scope: false` per METHOD.md §1.2 and D-023.
- All citing inventory cards report clean implementation status (`## Defects — required: none`), which is reflected in `Implementation status: clean` across all cards.
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~26,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
