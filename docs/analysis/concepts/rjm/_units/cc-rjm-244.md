---
unit: cc-rjm-244
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-244

## Files assigned
- [x] sources/rjm/docs/WORKFLOW-VALIDATION.md
- [x] sources/rjm/docs/when-to-use.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/pyproject.toml
- [x] sources/rjm/scripts/ci/build_pr_validation_report.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] docs/analysis/inventory/rjm/docs-when-to-use-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-commands-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-validation-md.md
- [x] docs/analysis/inventory/rjm/scripts-ci-build-pr-validation-report-py.md
- [x] docs/analysis/inventory/rjm/pyproject-toml.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md

## Outputs produced
- docs/analysis/concepts/rjm/research-first-workflow.md (1274 bytes)
- docs/analysis/concepts/rjm/anti-recommendations.md (1205 bytes)
- docs/analysis/concepts/rjm/the-deciding-questions.md (1216 bytes)
- docs/analysis/concepts/rjm/standard-feature-workflow.md (1271 bytes)
- docs/analysis/concepts/rjm/vertical-slices.md (1132 bytes)
- docs/analysis/concepts/rjm/pre-flight-validation.md (1130 bytes)
- docs/analysis/concepts/rjm/0-init.md (1219 bytes)
- docs/analysis/concepts/rjm/1-plan.md (1135 bytes)
- docs/analysis/concepts/rjm/2-impl.md (1034 bytes)
- docs/analysis/concepts/rjm/3-qa.md (1025 bytes)
- docs/analysis/concepts/rjm/4-security.md (1097 bytes)
- docs/analysis/concepts/rjm/workflow-validation.md (1232 bytes)
- docs/analysis/concepts/rjm/yaml-syntax.md (857 bytes)
- docs/analysis/concepts/rjm/workflow-structure.md (935 bytes)
- docs/analysis/concepts/rjm/action-pinning.md (1231 bytes)
- docs/analysis/concepts/rjm/workflow-size.md (1145 bytes)
- docs/analysis/concepts/rjm/permissions.md (1158 bytes)
- docs/analysis/concepts/rjm/warnings.md (1097 bytes)
- docs/analysis/concepts/rjm/errors.md (856 bytes)
- docs/analysis/concepts/rjm/automatic-pre-push-validation.md (1149 bytes)
- docs/analysis/concepts/rjm/explicit-permissions.md (1139 bytes)
- docs/analysis/concepts/rjm/requires-python.md (863 bytes)
- docs/analysis/concepts/rjm/build-backend.md (855 bytes)
- docs/analysis/concepts/rjm/testpaths.md (1055 bytes)
- docs/analysis/concepts/rjm/addopts.md (845 bytes)
- docs/analysis/concepts/rjm/target-version.md (843 bytes)
- docs/analysis/concepts/rjm/per-file-ignores.md (855 bytes)
- docs/analysis/concepts/rjm/warn-return-any.md (851 bytes)
- docs/analysis/concepts/rjm/disallow-any-generics.md (861 bytes)
- docs/analysis/concepts/rjm/dependency-groups.md (856 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-244.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/research-first-workflow.md docs/analysis/concepts/rjm/anti-recommendations.md docs/analysis/concepts/rjm/the-deciding-questions.md docs/analysis/concepts/rjm/standard-feature-workflow.md docs/analysis/concepts/rjm/vertical-slices.md docs/analysis/concepts/rjm/pre-flight-validation.md docs/analysis/concepts/rjm/0-init.md docs/analysis/concepts/rjm/1-plan.md docs/analysis/concepts/rjm/2-impl.md docs/analysis/concepts/rjm/3-qa.md docs/analysis/concepts/rjm/4-security.md docs/analysis/concepts/rjm/workflow-validation.md docs/analysis/concepts/rjm/yaml-syntax.md docs/analysis/concepts/rjm/workflow-structure.md docs/analysis/concepts/rjm/action-pinning.md docs/analysis/concepts/rjm/workflow-size.md docs/analysis/concepts/rjm/permissions.md docs/analysis/concepts/rjm/warnings.md docs/analysis/concepts/rjm/errors.md docs/analysis/concepts/rjm/automatic-pre-push-validation.md docs/analysis/concepts/rjm/explicit-permissions.md docs/analysis/concepts/rjm/requires-python.md docs/analysis/concepts/rjm/build-backend.md docs/analysis/concepts/rjm/testpaths.md docs/analysis/concepts/rjm/addopts.md docs/analysis/concepts/rjm/target-version.md docs/analysis/concepts/rjm/per-file-ignores.md docs/analysis/concepts/rjm/warn-return-any.md docs/analysis/concepts/rjm/disallow-any-generics.md docs/analysis/concepts/rjm/dependency-groups.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-244 completes all 30 concept cards specified in `facts/cc-rjm-244.txt` across five core functional domains:
  1. Lifecycle Workflows and Decision Frameworks (`research-first-workflow`, `anti-recommendations`, `the-deciding-questions`, `standard-feature-workflow`) connecting `docs/when-to-use.md` and `docs/workflow-commands.md`.
  2. Incremental Implementation & Verification Gates (`vertical-slices`, `pre-flight-validation`) from `docs/workflow-commands.md`.
  3. Legacy Numbered Lifecycle Commands / Phases (`0-init`, `1-plan`, `2-impl`, `3-qa`, `4-security`) from `docs/workflow-commands.md` documenting their replacement in PR #1611.
  4. GitHub Actions Local Workflow Validation Framework & Gates (`workflow-validation`, `yaml-syntax`, `workflow-structure`, `action-pinning`, `workflow-size`, `permissions`, `warnings`, `errors`, `automatic-pre-push-validation`, `explicit-permissions`) from `docs/WORKFLOW-VALIDATION.md` and `scripts/ci/build_pr_validation_report.py`.
  5. Python Packaging, Build Backend, and Tool Configuration Identifiers (`requires-python`, `build-backend`, `testpaths`, `addopts`, `target-version`, `per-file-ignores`, `warn_return_any`, `disallow_any_generics`, `dependency-groups`) from `pyproject.toml` and `scripts/validation/check_zero_collection_tests.py`, authored with `kind: name-only` per D-023.
- All 33 occurrences recorded in `facts/cc-rjm-244.txt` are mapped into the respective `Where used` tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: doc-drift` for `docs/workflow-commands.md` and `docs/WORKFLOW-VALIDATION.md`, `defects: orphan` for `scripts/validation/check_zero_collection_tests.py`, and `clean` for others).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
