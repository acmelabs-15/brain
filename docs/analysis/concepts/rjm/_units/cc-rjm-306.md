---
unit: cc-rjm-306
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-306

## Files assigned
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py
- [x] sources/rjm/scripts/modules/__init__.py
- [x] sources/rjm/scripts/modules/investigation_allowlist.py
- [x] sources/rjm/templates/README.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md
- [x] docs/analysis/inventory/rjm/scripts-migrations-req003-inline-plugin-root-bootstrap-py.md
- [x] docs/analysis/inventory/rjm/scripts-modules---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-modules-investigation-allowlist-py.md
- [x] docs/analysis/inventory/rjm/templates-readme-md.md

## Outputs produced
- docs/analysis/concepts/rjm/weekly-rollup.md (1146 bytes)
- docs/analysis/concepts/rjm/killcriterion.md (814 bytes)
- docs/analysis/concepts/rjm/valid-kinds.md (846 bytes)
- docs/analysis/concepts/rjm/ordered-kinds.md (850 bytes)
- docs/analysis/concepts/rjm/events-relpath.md (826 bytes)
- docs/analysis/concepts/rjm/window-days.md (810 bytes)
- docs/analysis/concepts/rjm/kill-thresholds.md (831 bytes)
- docs/analysis/concepts/rjm/criterionstatus.md (822 bytes)
- docs/analysis/concepts/rjm/criterionrollup.md (849 bytes)
- docs/analysis/concepts/rjm/approaching.md (881 bytes)
- docs/analysis/concepts/rjm/fired.md (862 bytes)
- docs/analysis/concepts/rjm/build-event.md (805 bytes)
- docs/analysis/concepts/rjm/emit-event.md (828 bytes)
- docs/analysis/concepts/rjm/count-events-in-window.md (853 bytes)
- docs/analysis/concepts/rjm/build-rollups.md (851 bytes)
- docs/analysis/concepts/rjm/report-events.md (846 bytes)
- docs/analysis/concepts/rjm/delete-after-merge.md (939 bytes)
- docs/analysis/concepts/rjm/req-003.md (1327 bytes)
- docs/analysis/concepts/rjm/hook-utilities.md (904 bytes)
- docs/analysis/concepts/rjm/m7-t2.md (835 bytes)
- docs/analysis/concepts/rjm/inline-bootstrap.md (1280 bytes)
- docs/analysis/concepts/rjm/m7-t3.md (913 bytes)
- docs/analysis/concepts/rjm/old-pattern.md (871 bytes)
- docs/analysis/concepts/rjm/new-template.md (951 bytes)
- docs/analysis/concepts/rjm/already-migrated-marker.md (951 bytes)
- docs/analysis/concepts/rjm/migrate-file.md (927 bytes)
- docs/analysis/concepts/rjm/shared-modules.md (796 bytes)
- docs/analysis/concepts/rjm/qa-exemption.md (1181 bytes)
- docs/analysis/concepts/rjm/investigation-artifact.md (1138 bytes)
- docs/analysis/concepts/rjm/get-investigation-allowlist.md (911 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-306.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/weekly-rollup.md docs/analysis/concepts/rjm/killcriterion.md docs/analysis/concepts/rjm/valid-kinds.md docs/analysis/concepts/rjm/ordered-kinds.md docs/analysis/concepts/rjm/events-relpath.md docs/analysis/concepts/rjm/window-days.md docs/analysis/concepts/rjm/kill-thresholds.md docs/analysis/concepts/rjm/criterionstatus.md docs/analysis/concepts/rjm/criterionrollup.md docs/analysis/concepts/rjm/approaching.md docs/analysis/concepts/rjm/fired.md docs/analysis/concepts/rjm/build-event.md docs/analysis/concepts/rjm/emit-event.md docs/analysis/concepts/rjm/count-events-in-window.md docs/analysis/concepts/rjm/build-rollups.md docs/analysis/concepts/rjm/report-events.md docs/analysis/concepts/rjm/delete-after-merge.md docs/analysis/concepts/rjm/req-003.md docs/analysis/concepts/rjm/hook-utilities.md docs/analysis/concepts/rjm/m7-t2.md docs/analysis/concepts/rjm/inline-bootstrap.md docs/analysis/concepts/rjm/m7-t3.md docs/analysis/concepts/rjm/old-pattern.md docs/analysis/concepts/rjm/new-template.md docs/analysis/concepts/rjm/already-migrated-marker.md docs/analysis/concepts/rjm/migrate-file.md docs/analysis/concepts/rjm/shared-modules.md docs/analysis/concepts/rjm/qa-exemption.md docs/analysis/concepts/rjm/investigation-artifact.md docs/analysis/concepts/rjm/get-investigation-allowlist.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-306 covers 30 concepts across 5 source files and 5 inventory cards:
  1. `scripts/metrics/kill_criteria.py` (16 concepts): kill criteria tracking and reporting subsystem, including `weekly-rollup`, `killcriterion`, `valid-kinds`, `ordered-kinds`, `events-relpath`, `window-days`, `kill-thresholds`, `criterionstatus`, `criterionrollup`, `approaching`, `fired`, `build-event`, `emit-event`, `count-events-in-window`, `build-rollups`, and `report-events`.
  2. `scripts/migrations/req003_inline_plugin_root_bootstrap.py` (10 concepts): one-shot migration script restoring inline bootstrap in hook scripts per REQ-003, including `delete-after-merge`, `req-003`, `hook-utilities`, `m7-t2`, `inline-bootstrap`, `m7-t3`, `old-pattern`, `new-template`, `already-migrated-marker`, and `migrate-file`.
  3. `scripts/modules/__init__.py` (1 concept): shared modules declaration for script infrastructure (`shared-modules`).
  4. `scripts/modules/investigation_allowlist.py` (3 concepts): path allowlist definitions for ADR-034 QA exemption, including `qa-exemption`, `investigation-artifact`, and `get-investigation-allowlist`.
- All 31 occurrences cited in `facts/cc-rjm-306.txt` are included as rows in the Where used tables of the respective cards (`req-003` has 2 occurrences; all other 29 concepts have 1 occurrence).
- Code identifiers, constants, function names, and script headers are classified as `kind: name-only` per D-023 with `(used, not defined)` definitions and single-sentence design notes.
- Lifecycle concepts (`weekly-rollup`, `inline-bootstrap`, `qa-exemption`, `investigation-artifact`) are classified with their respective lifecycle kinds (`technique`, `pattern`, `gate`, `artifact`).
- Implementation status is extracted from inventory card `Defects` fields (`clean` for kill_criteria.py, __init__.py, and investigation_allowlist.py; `defects: orphan, other` for req003_inline_plugin_root_bootstrap.py).
- Quote check verification passes cleanly with 30 PASS, 0 FAIL, 0 MISSING.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~8,000 tokens across 30 concept cards and 1 unit report.
