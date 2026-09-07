---
unit: cc-rjm-341
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-341

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_skill_md_drift.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/portability_baseline.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/portability_common.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/portability_floor.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md

## Outputs produced
- docs/analysis/concepts/rjm/extract-paths-from-text.md — 852 bytes
- docs/analysis/concepts/rjm/is-phrase.md — 829 bytes
- docs/analysis/concepts/rjm/is-valid-path.md — 853 bytes
- docs/analysis/concepts/rjm/marker-declared-paths.md — 859 bytes
- docs/analysis/concepts/rjm/prose-declared-paths.md — 857 bytes
- docs/analysis/concepts/rjm/is-consumer-workspace-path.md — 906 bytes
- docs/analysis/concepts/rjm/marker-path-drift.md — 1112 bytes
- docs/analysis/concepts/rjm/is-path-contained.md — 895 bytes
- docs/analysis/concepts/rjm/load-drift-baseline.md — 1012 bytes
- docs/analysis/concepts/rjm/diff-drift-baseline.md — 880 bytes
- docs/analysis/concepts/rjm/drift-counts-from-failures.md — 1182 bytes
- docs/analysis/concepts/rjm/report-drift-ratchet.md — 1075 bytes
- docs/analysis/concepts/rjm/build-portability-parser.md — 1367 bytes
- docs/analysis/concepts/rjm/read-previous-sections.md — 1660 bytes
- docs/analysis/concepts/rjm/refuse-symlinked-scan-root.md — 1425 bytes
- docs/analysis/concepts/rjm/refuse-unsafe-baseline-write.md — 1370 bytes
- docs/analysis/concepts/rjm/resolve-path-within-root.md — 1434 bytes
- docs/analysis/concepts/rjm/write-baseline-json.md — 1330 bytes
- docs/analysis/concepts/rjm/resolve-checked-baseline.md — 1209 bytes
- docs/analysis/concepts/rjm/exec-pattern.md — 868 bytes
- docs/analysis/concepts/rjm/skill-rel-script-pat.md — 900 bytes
- docs/analysis/concepts/rjm/continuation-pattern.md — 888 bytes
- docs/analysis/concepts/rjm/skill-file-name.md — 832 bytes
- docs/analysis/concepts/rjm/has-portability-marker.md — 1060 bytes
- docs/analysis/concepts/rjm/find-skill-relative-scripts.md — 922 bytes
- docs/analysis/concepts/rjm/scan-skill-for-dangling.md — 883 bytes
- docs/analysis/concepts/rjm/scan-dangling-skill-relative-scripts.md — 983 bytes
- docs/analysis/concepts/rjm/count-exec-invocations.md — 890 bytes
- docs/analysis/concepts/rjm/count-file-invocations.md — 913 bytes
- docs/analysis/concepts/rjm/count-marker-suppressed-invocations.md — 961 bytes
- docs/analysis/concepts/rjm/_units/cc-rjm-341.md — 4561 bytes

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
All 30 concepts in this unit represent internal Python validation functions and constants extracted from check_skill_md_portability.py into check_skill_md_drift.py, check_skill_md_exec_portability.py, portability_common.py, portability_floor.py, and portability_baseline.py to maintain file size constraints under issue #4116. Classified as kind: name-only with package_phase: none.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~50,000 tokens across 6 source scripts and 6 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
