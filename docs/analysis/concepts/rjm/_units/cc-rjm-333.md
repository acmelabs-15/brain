---
unit: cc-rjm-333
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-333

## Files assigned
- [x] sources/rjm/scripts/validation/check_ci_dependency_pins.py
- [x] sources/rjm/scripts/validation/check_citation_freshness.py
- [x] sources/rjm/scripts/validation/check_colocated_skill_tests.py
- [x] sources/rjm/scripts/validation/check_copilot_routing_exclusions.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-ci-dependency-pins-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-citation-freshness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-colocated-skill-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-copilot-routing-exclusions-py.md

## Outputs produced
- docs/analysis/concepts/rjm/requirement-groups.md (917 bytes)
- docs/analysis/concepts/rjm/declared-constraints.md (951 bytes)
- docs/analysis/concepts/rjm/find-pins.md (839 bytes)
- docs/analysis/concepts/rjm/issue-5337.md (876 bytes)
- docs/analysis/concepts/rjm/citation-freshness-ignore.md (980 bytes)
- docs/analysis/concepts/rjm/citation-anchors.md (996 bytes)
- docs/analysis/concepts/rjm/citation-head-state.md (875 bytes)
- docs/analysis/concepts/rjm/ignore-marker.md (889 bytes)
- docs/analysis/concepts/rjm/fixture-fragments.md (894 bytes)
- docs/analysis/concepts/rjm/extra-historical-roots.md (965 bytes)
- docs/analysis/concepts/rjm/is-exempt-citing-file.md (925 bytes)
- docs/analysis/concepts/rjm/ignore-with-reason.md (920 bytes)
- docs/analysis/concepts/rjm/has-ignore-marker.md (962 bytes)
- docs/analysis/concepts/rjm/resolve-cited-range.md (909 bytes)
- docs/analysis/concepts/rjm/relocation-hint.md (950 bytes)
- docs/analysis/concepts/rjm/anchor-finding.md (888 bytes)
- docs/analysis/concepts/rjm/check-citation.md (859 bytes)
- docs/analysis/concepts/rjm/find-stale-citations.md (936 bytes)
- docs/analysis/concepts/rjm/scan-added-lines.md (872 bytes)
- docs/analysis/concepts/rjm/report-findings.md (907 bytes)
- docs/analysis/concepts/rjm/validate-citation-freshness.md (933 bytes)
- docs/analysis/concepts/rjm/issue-4838.md (820 bytes)
- docs/analysis/concepts/rjm/shipped-skill-roots.md (906 bytes)
- docs/analysis/concepts/rjm/is-colocated-skill-test.md (932 bytes)
- docs/analysis/concepts/rjm/existing-on-ref.md (939 bytes)
- docs/analysis/concepts/rjm/staged-additions.md (896 bytes)
- docs/analysis/concepts/rjm/branch-additions.md (927 bytes)
- docs/analysis/concepts/rjm/routingconfigerror.md (911 bytes)
- docs/analysis/concepts/rjm/routingviolation.md (888 bytes)
- docs/analysis/concepts/rjm/excludefilenames.md (940 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-333.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/requirement-groups.md docs/analysis/concepts/rjm/declared-constraints.md docs/analysis/concepts/rjm/find-pins.md docs/analysis/concepts/rjm/issue-5337.md docs/analysis/concepts/rjm/citation-freshness-ignore.md docs/analysis/concepts/rjm/citation-anchors.md docs/analysis/concepts/rjm/citation-head-state.md docs/analysis/concepts/rjm/ignore-marker.md docs/analysis/concepts/rjm/fixture-fragments.md docs/analysis/concepts/rjm/extra-historical-roots.md docs/analysis/concepts/rjm/is-exempt-citing-file.md docs/analysis/concepts/rjm/ignore-with-reason.md docs/analysis/concepts/rjm/has-ignore-marker.md docs/analysis/concepts/rjm/resolve-cited-range.md docs/analysis/concepts/rjm/relocation-hint.md docs/analysis/concepts/rjm/anchor-finding.md docs/analysis/concepts/rjm/check-citation.md docs/analysis/concepts/rjm/find-stale-citations.md docs/analysis/concepts/rjm/scan-added-lines.md docs/analysis/concepts/rjm/report-findings.md docs/analysis/concepts/rjm/validate-citation-freshness.md docs/analysis/concepts/rjm/issue-4838.md docs/analysis/concepts/rjm/shipped-skill-roots.md docs/analysis/concepts/rjm/is-colocated-skill-test.md docs/analysis/concepts/rjm/existing-on-ref.md docs/analysis/concepts/rjm/staged-additions.md docs/analysis/concepts/rjm/branch-additions.md docs/analysis/concepts/rjm/routingconfigerror.md docs/analysis/concepts/rjm/routingviolation.md docs/analysis/concepts/rjm/excludefilenames.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-333 completes 30 concept cards across 4 Python validation scripts (`check_ci_dependency_pins.py`, `check_citation_freshness.py`, `check_colocated_skill_tests.py`, `check_copilot_routing_exclusions.py`).
- All 30 concepts represent internal Python function/class/constant identifiers, issue references, configuration keys, or inline comment directives from validation scripts rather than SDLC lifecycle concepts, and are authored with `kind: name-only`, `package_phase: none`, and `(used, not defined)` definitions per D-023.
- All 31 occurrences recorded in `facts/cc-rjm-333.txt` are mapped in the respective Where used tables.
- All 4 citing inventory cards report `Defects: none`, so `Implementation status: clean` was assigned across all cards.
- All 30 cards pass byte-exact quotation verification via `quote-check.ts` with 30 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 authored concept cards and 1 unit report.
