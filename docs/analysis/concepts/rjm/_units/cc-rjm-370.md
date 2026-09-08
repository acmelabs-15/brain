---
unit: cc-rjm-370
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-370

## Files assigned
- [x] sources/rjm/scripts/validation/validate_no_orphaned_build_deferrals.py
- [x] sources/rjm/scripts/validation/validate_python_syntax.py
- [x] sources/rjm/scripts/validation/validate_review_marker.py
- [x] sources/rjm/scripts/validation/validate_seed_parity.py
- [x] sources/rjm/scripts/validation/validate_skill_shells.py
- [x] sources/rjm/scripts/validation/validate_skillbook.py
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-no-orphaned-build-deferrals-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-python-syntax-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-review-marker-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-seed-parity-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-skill-shells-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-skillbook-py.md

## Outputs produced
- docs/analysis/concepts/rjm/evaluate-deferrals.md (866 bytes)
- docs/analysis/concepts/rjm/validate-no-orphaned-build-deferrals.md (943 bytes)
- docs/analysis/concepts/rjm/support-floor.md (1614 bytes)
- docs/analysis/concepts/rjm/pep-758.md (780 bytes)
- docs/analysis/concepts/rjm/syntaxerror.md (834 bytes)
- docs/analysis/concepts/rjm/find-syntax-errors.md (837 bytes)
- docs/analysis/concepts/rjm/validate-python-syntax.md (877 bytes)
- docs/analysis/concepts/rjm/marker-value-re.md (816 bytes)
- docs/analysis/concepts/rjm/parse-marker.md (818 bytes)
- docs/analysis/concepts/rjm/select-marker-for-sha.md (903 bytes)
- docs/analysis/concepts/rjm/resolve-sha.md (822 bytes)
- docs/analysis/concepts/rjm/validate-marker-commit-shape.md (880 bytes)
- docs/analysis/concepts/rjm/validate-ref.md (849 bytes)
- docs/analysis/concepts/rjm/canonical-review-axis.md (1317 bytes)
- docs/analysis/concepts/rjm/forensic-tool.md (894 bytes)
- docs/analysis/concepts/rjm/req-008-01.md (820 bytes)
- docs/analysis/concepts/rjm/all-roles.md (766 bytes)
- docs/analysis/concepts/rjm/parityerror.md (791 bytes)
- docs/analysis/concepts/rjm/strip-appended-output-schema.md (873 bytes)
- docs/analysis/concepts/rjm/strip-balanced-fence.md (881 bytes)
- docs/analysis/concepts/rjm/check-role.md (834 bytes)
- docs/analysis/concepts/rjm/skill-shell.md (1296 bytes)
- docs/analysis/concepts/rjm/skills-roots.md (805 bytes)
- docs/analysis/concepts/rjm/skill-manifest.md (790 bytes)
- docs/analysis/concepts/rjm/pycache-segment.md (808 bytes)
- docs/analysis/concepts/rjm/is-pycache.md (809 bytes)
- docs/analysis/concepts/rjm/has-skill-manifest.md (870 bytes)
- docs/analysis/concepts/rjm/iter-skill-dirs.md (864 bytes)
- docs/analysis/concepts/rjm/find-skill-shells.md (859 bytes)
- docs/analysis/concepts/rjm/file-schema-map.md (853 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-370.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/evaluate-deferrals.md docs/analysis/concepts/rjm/validate-no-orphaned-build-deferrals.md docs/analysis/concepts/rjm/support-floor.md docs/analysis/concepts/rjm/pep-758.md docs/analysis/concepts/rjm/syntaxerror.md docs/analysis/concepts/rjm/find-syntax-errors.md docs/analysis/concepts/rjm/validate-python-syntax.md docs/analysis/concepts/rjm/marker-value-re.md docs/analysis/concepts/rjm/parse-marker.md docs/analysis/concepts/rjm/select-marker-for-sha.md docs/analysis/concepts/rjm/resolve-sha.md docs/analysis/concepts/rjm/validate-marker-commit-shape.md docs/analysis/concepts/rjm/validate-ref.md docs/analysis/concepts/rjm/canonical-review-axis.md docs/analysis/concepts/rjm/forensic-tool.md docs/analysis/concepts/rjm/req-008-01.md docs/analysis/concepts/rjm/all-roles.md docs/analysis/concepts/rjm/parityerror.md docs/analysis/concepts/rjm/strip-appended-output-schema.md docs/analysis/concepts/rjm/strip-balanced-fence.md docs/analysis/concepts/rjm/check-role.md docs/analysis/concepts/rjm/skill-shell.md docs/analysis/concepts/rjm/skills-roots.md docs/analysis/concepts/rjm/skill-manifest.md docs/analysis/concepts/rjm/pycache-segment.md docs/analysis/concepts/rjm/is-pycache.md docs/analysis/concepts/rjm/has-skill-manifest.md docs/analysis/concepts/rjm/iter-skill-dirs.md docs/analysis/concepts/rjm/find-skill-shells.md docs/analysis/concepts/rjm/file-schema-map.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-370 completes 30 concept cards spanning build deferral tracking, Python syntax support floor enforcement, git commit review marker verification, forensic seed parity auditing, skill directory shell detection, and skillbook schema mapping:
  1. Build staleness deferral tracking and issue resolution evaluation (`evaluate-deferrals`, `validate-no-orphaned-build-deferrals`) in `validate_no_orphaned_build_deferrals.py`.
  2. Python runtime syntax verification at minimum hook support floor (`support-floor`, `pep-758`, `syntaxerror`, `find-syntax-errors`, `validate-python-syntax`) in `validate_python_syntax.py`.
  3. Git SHA-bound review marker verification, commit shape constraints, and ref resolution (`marker-value-re`, `parse-marker`, `select-marker-for-sha`, `resolve-sha`, `validate-marker-commit-shape`, `validate-ref`) in `validate_review_marker.py`.
  4. Forensic seed parity auditing and review role reference normalization (`canonical-review-axis`, `forensic-tool`, `req-008-01`, `all-roles`, `parityerror`, `strip-appended-output-schema`, `strip-balanced-fence`, `check-role`) in `validate_seed_parity.py`.
  5. Skill directory integrity, manifest presence, and pycache filtering (`skill-shell`, `skills-roots`, `skill-manifest`, `pycache-segment`, `is-pycache`, `has-skill-manifest`, `iter-skill-dirs`, `find-skill-shells`) in `validate_skill_shells.py`.
  6. Skillbook schema mapping and referential integrity verification (`file-schema-map`) in `validate_skillbook.py`.
- Concepts representing functions, regex patterns, constants, requirement IDs, error classes, or dictionaries are classified as `kind: name-only` per D-023.
- Core lifecycle/quality-gate concepts are classified as `kind: gate` (`support-floor`), `kind: reference` (`canonical-review-axis`), and `kind: pattern` (`skill-shell`).
- All 32 occurrences recorded in `facts/cc-rjm-370.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean` for 29 cards, `defects: orphan` for `file-schema-map`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
