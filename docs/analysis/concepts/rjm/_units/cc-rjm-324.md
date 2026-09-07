---
unit: cc-rjm-324
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-324

## Files assigned
- [x] sources/rjm/scripts/validate_skill_format.py
- [x] sources/rjm/scripts/validate_skill_installation.py
- [x] sources/rjm/scripts/validate_skill_output.py
- [x] sources/rjm/scripts/validate_workflows.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/validate_design_review.py
- [x] docs/analysis/inventory/rjm/scripts-validate-skill-format-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-skill-installation-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-skill-output-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-workflows-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-design-review-py.md

## Outputs produced
- docs/analysis/concepts/rjm/atomic-format.md (945 bytes)
- docs/analysis/concepts/rjm/naming-convention.md (996 bytes)
- docs/analysis/concepts/rjm/bundled-format.md (956 bytes)
- docs/analysis/concepts/rjm/skill-header-re.md (911 bytes)
- docs/analysis/concepts/rjm/get-staged-memory-files.md (947 bytes)
- docs/analysis/concepts/rjm/get-files-to-check.md (909 bytes)
- docs/analysis/concepts/rjm/required-frontmatter-fields.md (1138 bytes)
- docs/analysis/concepts/rjm/optional-frontmatter-fields.md (953 bytes)
- docs/analysis/concepts/rjm/global-skill-paths.md (918 bytes)
- docs/analysis/concepts/rjm/validate-skill-dir.md (993 bytes)
- docs/analysis/concepts/rjm/validate-source-skills.md (995 bytes)
- docs/analysis/concepts/rjm/check-global-installation.md (984 bytes)
- docs/analysis/concepts/rjm/envelope-schema.md (976 bytes)
- docs/analysis/concepts/rjm/resolve-allowed-dir.md (956 bytes)
- docs/analysis/concepts/rjm/validate-file-path.md (986 bytes)
- docs/analysis/concepts/rjm/validate-success-field.md (965 bytes)
- docs/analysis/concepts/rjm/validate-metadata-string-field.md (1034 bytes)
- docs/analysis/concepts/rjm/validate-metadata-version-field.md (1005 bytes)
- docs/analysis/concepts/rjm/validate-metadata-field.md (984 bytes)
- docs/analysis/concepts/rjm/validate-error-type.md (971 bytes)
- docs/analysis/concepts/rjm/validate-error-message-and-code.md (1024 bytes)
- docs/analysis/concepts/rjm/validate-error-field.md (985 bytes)
- docs/analysis/concepts/rjm/strictloader.md (1062 bytes)
- docs/analysis/concepts/rjm/no-duplicate-keys.md (904 bytes)
- docs/analysis/concepts/rjm/workflowvalidator.md (864 bytes)
- docs/analysis/concepts/rjm/validate-yaml-syntax.md (926 bytes)
- docs/analysis/concepts/rjm/validate-workflow-structure.md (1002 bytes)
- docs/analysis/concepts/rjm/validate-jobs-are-runnable.md (1003 bytes)
- docs/analysis/concepts/rjm/validate-action-pinning.md (976 bytes)
- docs/analysis/concepts/rjm/check-pinned.md (946 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-324.md (7070 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/atomic-format.md docs/analysis/concepts/rjm/naming-convention.md docs/analysis/concepts/rjm/bundled-format.md docs/analysis/concepts/rjm/skill-header-re.md docs/analysis/concepts/rjm/get-staged-memory-files.md docs/analysis/concepts/rjm/get-files-to-check.md docs/analysis/concepts/rjm/required-frontmatter-fields.md docs/analysis/concepts/rjm/optional-frontmatter-fields.md docs/analysis/concepts/rjm/global-skill-paths.md docs/analysis/concepts/rjm/validate-skill-dir.md docs/analysis/concepts/rjm/validate-source-skills.md docs/analysis/concepts/rjm/check-global-installation.md docs/analysis/concepts/rjm/envelope-schema.md docs/analysis/concepts/rjm/resolve-allowed-dir.md docs/analysis/concepts/rjm/validate-file-path.md docs/analysis/concepts/rjm/validate-success-field.md docs/analysis/concepts/rjm/validate-metadata-string-field.md docs/analysis/concepts/rjm/validate-metadata-version-field.md docs/analysis/concepts/rjm/validate-metadata-field.md docs/analysis/concepts/rjm/validate-error-type.md docs/analysis/concepts/rjm/validate-error-message-and-code.md docs/analysis/concepts/rjm/validate-error-field.md docs/analysis/concepts/rjm/strictloader.md docs/analysis/concepts/rjm/no-duplicate-keys.md docs/analysis/concepts/rjm/workflowvalidator.md docs/analysis/concepts/rjm/validate-yaml-syntax.md docs/analysis/concepts/rjm/validate-workflow-structure.md docs/analysis/concepts/rjm/validate-jobs-are-runnable.md docs/analysis/concepts/rjm/validate-action-pinning.md docs/analysis/concepts/rjm/check-pinned.md` (exit code 0; 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-324 covers 30 concept cards representing validation script symbols, helper functions, classes, configuration tuples, and schema labels across `scripts/validate_skill_format.py`, `scripts/validate_skill_installation.py`, `scripts/validate_skill_output.py`, `scripts/validate_workflows.py`, `scripts/validation/check_adr_lifecycle.py`, and `scripts/validation/validate_design_review.py`.
- All 30 concepts represent code symbols, function identifiers, regex patterns, or script-internal labels rather than core SDLC lifecycle phases, gates, techniques, artifacts, or roles; per METHOD.md R6 and D-023, each card was classified as `kind: name-only` with `package_phase: none`, `(used, not defined)` in Definition, and a clear single-sentence explanation in Design notes.
- Multi-occurrence concepts:
  - `REQUIRED_FRONTMATTER_FIELDS` appears in `scripts/validate_skill_installation.py:34` and `scripts/validation/validate_design_review.py:21`; both occurrences are captured in its Where used table.
  - `_StrictLoader` appears in `scripts/validate_workflows.py:38` and `scripts/validation/check_adr_lifecycle.py:293`; both occurrences are captured in its Where used table.
- Defect status propagation:
  - Concepts implemented in `scripts/validate_skill_format.py` reflect `defects: script-bug, orphan`.
  - Concepts implemented in `scripts/validate_skill_installation.py` and `scripts/validate_skill_output.py` reflect `defects: doc-drift`.
  - Concepts implemented in `scripts/validate_workflows.py`, `scripts/validation/check_adr_lifecycle.py`, and `scripts/validation/validate_design_review.py` reflect `clean`.
- All 32 occurrences from `facts/cc-rjm-324.txt` are accounted for in the Where used tables.
- All 30 cards pass byte-exact verification via `quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 6 source scripts and 6 inventory cards.
Approximate tokens of output written: ~9,000 tokens across 30 authored concept cards and 1 work unit report.
