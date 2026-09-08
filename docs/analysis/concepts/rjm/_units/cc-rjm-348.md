---
unit: cc-rjm-348
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-348

## Files assigned
- [x] sources/rjm/scripts/validation/check_unreachable_code.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/check_worktree_recipes.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-unreachable-code-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-worktree-recipes-py.md

## Outputs produced
- docs/analysis/concepts/rjm/validate-unreachable-code.md (937 bytes)
- docs/analysis/concepts/rjm/artifact-dir.md (904 bytes)
- docs/analysis/concepts/rjm/resolve-skill-resource.md (919 bytes)
- docs/analysis/concepts/rjm/banned-path.md (865 bytes)
- docs/analysis/concepts/rjm/helper-functions.md (883 bytes)
- docs/analysis/concepts/rjm/prose-calls.md (860 bytes)
- docs/analysis/concepts/rjm/baseline-filename.md (893 bytes)
- docs/analysis/concepts/rjm/offender.md (867 bytes)
- docs/analysis/concepts/rjm/routes-through-helper.md (914 bytes)
- docs/analysis/concepts/rjm/docstring-lines.md (874 bytes)
- docs/analysis/concepts/rjm/call-name.md (845 bytes)
- docs/analysis/concepts/rjm/node-lines.md (837 bytes)
- docs/analysis/concepts/rjm/prose-lines.md (874 bytes)
- docs/analysis/concepts/rjm/raw-string-prefix.md (867 bytes)
- docs/analysis/concepts/rjm/regex-metachar.md (874 bytes)
- docs/analysis/concepts/rjm/is-raw-string-regex.md (872 bytes)
- docs/analysis/concepts/rjm/is-prose-string.md (899 bytes)
- docs/analysis/concepts/rjm/first-banned-line.md (913 bytes)
- docs/analysis/concepts/rjm/collect-offenders.md (910 bytes)
- docs/analysis/concepts/rjm/split-offenders.md (854 bytes)
- docs/analysis/concepts/rjm/must-not-6.md (874 bytes)
- docs/analysis/concepts/rjm/scanned-prefixes.md (866 bytes)
- docs/analysis/concepts/rjm/scanned-suffixes.md (914 bytes)
- docs/analysis/concepts/rjm/worktree-add.md (878 bytes)
- docs/analysis/concepts/rjm/value-flags.md (858 bytes)
- docs/analysis/concepts/rjm/expansion.md (891 bytes)
- docs/analysis/concepts/rjm/path-shaped.md (862 bytes)
- docs/analysis/concepts/rjm/temp-prefixes.md (855 bytes)
- docs/analysis/concepts/rjm/temp-exact.md (848 bytes)
- docs/analysis/concepts/rjm/reason-temp.md (925 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-348.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/validate-unreachable-code.md docs/analysis/concepts/rjm/artifact-dir.md docs/analysis/concepts/rjm/resolve-skill-resource.md docs/analysis/concepts/rjm/banned-path.md docs/analysis/concepts/rjm/helper-functions.md docs/analysis/concepts/rjm/prose-calls.md docs/analysis/concepts/rjm/baseline-filename.md docs/analysis/concepts/rjm/offender.md docs/analysis/concepts/rjm/routes-through-helper.md docs/analysis/concepts/rjm/docstring-lines.md docs/analysis/concepts/rjm/call-name.md docs/analysis/concepts/rjm/node-lines.md docs/analysis/concepts/rjm/prose-lines.md docs/analysis/concepts/rjm/raw-string-prefix.md docs/analysis/concepts/rjm/regex-metachar.md docs/analysis/concepts/rjm/is-raw-string-regex.md docs/analysis/concepts/rjm/is-prose-string.md docs/analysis/concepts/rjm/first-banned-line.md docs/analysis/concepts/rjm/collect-offenders.md docs/analysis/concepts/rjm/split-offenders.md docs/analysis/concepts/rjm/must-not-6.md docs/analysis/concepts/rjm/scanned-prefixes.md docs/analysis/concepts/rjm/scanned-suffixes.md docs/analysis/concepts/rjm/worktree-add.md docs/analysis/concepts/rjm/value-flags.md docs/analysis/concepts/rjm/expansion.md docs/analysis/concepts/rjm/path-shaped.md docs/analysis/concepts/rjm/temp-prefixes.md docs/analysis/concepts/rjm/temp-exact.md docs/analysis/concepts/rjm/reason-temp.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-348 completes 30 concept cards spanning three validation scripts in rjm's test phase:
  1. `check_unreachable_code.py`: validation gate function `validate_unreachable_code`.
  2. `check_vendor_portability.py`: vendor portability helper references (`artifact_dir`, `resolve_skill_resource`), scanner AST/token components (`_BANNED_PATH`, `_HELPER_FUNCTIONS`, `_PROSE_CALLS`, `BASELINE_FILENAME`, `Offender`, `_routes_through_helper`, `_docstring_lines`, `_call_name`, `_node_lines`, `_prose_lines`, `_RAW_STRING_PREFIX`, `_REGEX_METACHAR`, `_is_raw_string_regex`, `_is_prose_string`, `_first_banned_line`), and offender collection functions (`collect_offenders`, `split_offenders`).
  3. `check_worktree_recipes.py`: universal rule clause reference (`MUST NOT 6`), path prefix and suffix filters (`SCANNED_PREFIXES`, `SCANNED_SUFFIXES`), command parsing regexes and flags (`_WORKTREE_ADD`, `_VALUE_FLAGS`, `_EXPANSION`, `_PATH_SHAPED`), and forbidden temp destination definitions (`_TEMP_PREFIXES`, `_TEMP_EXACT`, `REASON_TEMP`).
- All 30 concepts represent functions, constants, dataclasses, regex patterns, or rule clause identifiers rather than standalone SDLC lifecycle concepts, and are classified as `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-348.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean`, `defects: doc-drift`, or `defects: exit-code-mismatch`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~15,000 tokens across 3 source scripts and 3 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
