---
unit: cc-rjm-342
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-342

## Files assigned
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] sources/rjm/scripts/validation/check_skill_resolver_anchoring.py
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/portability_common.py
- [x] sources/rjm/scripts/validation/sha_pinning.py
- [x] sources/rjm/scripts/validation/skill_portability_baseline.json
- [x] sources/rjm/scripts/validation/tracked_paths.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-resolver-anchoring-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-sha-pinning-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-tracked-paths-py.md

## Outputs produced
- docs/analysis/concepts/rjm/refuse-exec-escape.md (991 bytes)
- docs/analysis/concepts/rjm/reraise-os-error.md (935 bytes)
- docs/analysis/concepts/rjm/iter-reference-markdown.md (1018 bytes)
- docs/analysis/concepts/rjm/iter-skill-roots.md (966 bytes)
- docs/analysis/concepts/rjm/iter-skill-files.md (1255 bytes)
- docs/analysis/concepts/rjm/scan-all.md (1754 bytes)
- docs/analysis/concepts/rjm/scan-skill-execs.md (957 bytes)
- docs/analysis/concepts/rjm/scanned-files-by-root.md (956 bytes)
- docs/analysis/concepts/rjm/scan-marker-suppressions.md (1288 bytes)
- docs/analysis/concepts/rjm/load-marker-baseline.md (964 bytes)
- docs/analysis/concepts/rjm/diff-marker-baseline.md (1201 bytes)
- docs/analysis/concepts/rjm/resolve-root.md (1513 bytes)
- docs/analysis/concepts/rjm/resolve-baseline-path.md (1535 bytes)
- docs/analysis/concepts/rjm/refuse-marker-files-growth.md (1273 bytes)
- docs/analysis/concepts/rjm/has-scan-root.md (939 bytes)
- docs/analysis/concepts/rjm/markdown-vendor-portability-ratchet.md (1701 bytes)
- docs/analysis/concepts/rjm/check-skill-portability-py.md (1444 bytes)
- docs/analysis/concepts/rjm/paths-py.md (1164 bytes)
- docs/analysis/concepts/rjm/machine-readable-opt-out.md (1007 bytes)
- docs/analysis/concepts/rjm/baseline-ratchet.md (912 bytes)
- docs/analysis/concepts/rjm/skill-md-portability-baseline-json.md (1050 bytes)
- docs/analysis/concepts/rjm/extra-scan-roots.md (979 bytes)
- docs/analysis/concepts/rjm/generate-commands-py.md (970 bytes)
- docs/analysis/concepts/rjm/generate-rules-py.md (950 bytes)
- docs/analysis/concepts/rjm/gitqueryerror.md (1130 bytes)
- docs/analysis/concepts/rjm/upstream-patterns.md (1235 bytes)
- docs/analysis/concepts/rjm/required-skills-roots.md (992 bytes)
- docs/analysis/concepts/rjm/required-extra-roots.md (975 bytes)
- docs/analysis/concepts/rjm/strip-code.md (909 bytes)
- docs/analysis/concepts/rjm/strip-inline-code.md (945 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-342.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/refuse-exec-escape.md docs/analysis/concepts/rjm/reraise-os-error.md docs/analysis/concepts/rjm/iter-reference-markdown.md docs/analysis/concepts/rjm/iter-skill-roots.md docs/analysis/concepts/rjm/iter-skill-files.md docs/analysis/concepts/rjm/scan-all.md docs/analysis/concepts/rjm/scan-skill-execs.md docs/analysis/concepts/rjm/scanned-files-by-root.md docs/analysis/concepts/rjm/scan-marker-suppressions.md docs/analysis/concepts/rjm/load-marker-baseline.md docs/analysis/concepts/rjm/diff-marker-baseline.md docs/analysis/concepts/rjm/resolve-root.md docs/analysis/concepts/rjm/resolve-baseline-path.md docs/analysis/concepts/rjm/refuse-marker-files-growth.md docs/analysis/concepts/rjm/has-scan-root.md docs/analysis/concepts/rjm/markdown-vendor-portability-ratchet.md docs/analysis/concepts/rjm/check-skill-portability-py.md docs/analysis/concepts/rjm/paths-py.md docs/analysis/concepts/rjm/machine-readable-opt-out.md docs/analysis/concepts/rjm/baseline-ratchet.md docs/analysis/concepts/rjm/skill-md-portability-baseline-json.md docs/analysis/concepts/rjm/extra-scan-roots.md docs/analysis/concepts/rjm/generate-commands-py.md docs/analysis/concepts/rjm/generate-rules-py.md docs/analysis/concepts/rjm/gitqueryerror.md docs/analysis/concepts/rjm/upstream-patterns.md docs/analysis/concepts/rjm/required-skills-roots.md docs/analysis/concepts/rjm/required-extra-roots.md docs/analysis/concepts/rjm/strip-code.md docs/analysis/concepts/rjm/strip-inline-code.md` (exit code 0, 45 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-342 covers 30 concept cards across validation tooling, script and markdown vendor portability checks, and baseline ratchets in `scripts/validation/`:
  1. Internal functions and utilities for exec and markdown portability checks (`_refuse_exec_escape`, `_reraise_os_error`, `_iter_reference_markdown`, `_iter_skill_roots`, `_iter_skill_files`, `scan_all`, `scan_skill_execs`, `scanned_files_by_root`, `scan_marker_suppressions`, `_load_marker_baseline`, `diff_marker_baseline`, `_resolve_root`, `_resolve_baseline_path`, `_refuse_marker_files_growth`, `_has_scan_root`, `_strip_code`, `_strip_inline_code`).
  2. The markdown vendor-portability ratchet validation gate (`markdown-vendor-portability-ratchet`) enforcing clean separation from upstream-only repository paths.
  3. Identifiers, filenames, configuration constants, exception classes, and docstring headings (`check_skill_portability.py`, `paths.py`, `machine-readable-opt-out`, `baseline-ratchet`, `skill_md_portability_baseline.json`, `EXTRA_SCAN_ROOTS`, `generate_commands.py`, `generate_rules.py`, `GitQueryError`, `UPSTREAM_PATTERNS`, `REQUIRED_SKILLS_ROOTS`, `REQUIRED_EXTRA_ROOTS`) authored as `kind: name-only` per D-023.
- All 45 occurrences recorded in `facts/cc-rjm-342.txt` are included in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: other`, `defects: other, orphan`, `defects: other, doc-drift`, `defects: other, doc-drift, orphan`, `defects: doc-drift`, `defects: doc-drift, orphan`, `clean`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (45 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~16,500 tokens across 30 concept cards and 1 unit report.
