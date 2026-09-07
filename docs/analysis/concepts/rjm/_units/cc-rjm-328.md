---
unit: cc-rjm-328
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-328

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_adr_links.py
- [x] sources/rjm/scripts/validation/check_adr_links_baseline.txt
- [x] sources/rjm/scripts/validation/check_citation_freshness.py
- [x] sources/rjm/scripts/validation/check_doc_interpreter_portability.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/portability_common.py
- [x] sources/rjm/scripts/validation/stale_script_refs.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-links-baseline-txt.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-links-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-citation-freshness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-doc-interpreter-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-stale-script-refs-py.md

## Outputs produced
- docs/analysis/concepts/rjm/normalize-reference.md (992 bytes)
- docs/analysis/concepts/rjm/supersedes-entries.md (955 bytes)
- docs/analysis/concepts/rjm/check-identity.md (958 bytes)
- docs/analysis/concepts/rjm/record-header.md (919 bytes)
- docs/analysis/concepts/rjm/status-prose.md (918 bytes)
- docs/analysis/concepts/rjm/check-prose.md (950 bytes)
- docs/analysis/concepts/rjm/edge-targets.md (886 bytes)
- docs/analysis/concepts/rjm/graph.md (863 bytes)
- docs/analysis/concepts/rjm/find-cycles.md (909 bytes)
- docs/analysis/concepts/rjm/reciprocity-findings.md (1005 bytes)
- docs/analysis/concepts/rjm/status-edge-findings.md (1025 bytes)
- docs/analysis/concepts/rjm/parse-baseline-payload.md (1012 bytes)
- docs/analysis/concepts/rjm/counts-at-ref.md (959 bytes)
- docs/analysis/concepts/rjm/write-baseline.md (1686 bytes)
- docs/analysis/concepts/rjm/print-violations.md (931 bytes)
- docs/analysis/concepts/rjm/marker.md (919 bytes)
- docs/analysis/concepts/rjm/validate-adr-lifecycle.md (967 bytes)
- docs/analysis/concepts/rjm/number-mismatch.md (1069 bytes)
- docs/analysis/concepts/rjm/unresolved.md (1018 bytes)
- docs/analysis/concepts/rjm/test-baseline-header-counts-match-the-live-file.md (1103 bytes)
- docs/analysis/concepts/rjm/ci-scripts-md.md (1079 bytes)
- docs/analysis/concepts/rjm/check-adr-links-py.md (902 bytes)
- docs/analysis/concepts/rjm/historical-roots.md (1628 bytes)
- docs/analysis/concepts/rjm/stale-script-refs-py.md (1112 bytes)
- docs/analysis/concepts/rjm/adr-021.md (902 bytes)
- docs/analysis/concepts/rjm/adr-019-debate-log-md.md (925 bytes)
- docs/analysis/concepts/rjm/adr-019-debate-log.md (931 bytes)
- docs/analysis/concepts/rjm/adr-021-debate-log.md (931 bytes)
- docs/analysis/concepts/rjm/adr-021-model-routing-strategy-md.md (995 bytes)
- docs/analysis/concepts/rjm/adr-041-codeql-integration-review-md.md (1054 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-328.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/normalize-reference.md docs/analysis/concepts/rjm/supersedes-entries.md docs/analysis/concepts/rjm/check-identity.md docs/analysis/concepts/rjm/record-header.md docs/analysis/concepts/rjm/status-prose.md docs/analysis/concepts/rjm/check-prose.md docs/analysis/concepts/rjm/edge-targets.md docs/analysis/concepts/rjm/graph.md docs/analysis/concepts/rjm/find-cycles.md docs/analysis/concepts/rjm/reciprocity-findings.md docs/analysis/concepts/rjm/status-edge-findings.md docs/analysis/concepts/rjm/parse-baseline-payload.md docs/analysis/concepts/rjm/counts-at-ref.md docs/analysis/concepts/rjm/write-baseline.md docs/analysis/concepts/rjm/print-violations.md docs/analysis/concepts/rjm/marker.md docs/analysis/concepts/rjm/validate-adr-lifecycle.md docs/analysis/concepts/rjm/number-mismatch.md docs/analysis/concepts/rjm/unresolved.md docs/analysis/concepts/rjm/test-baseline-header-counts-match-the-live-file.md docs/analysis/concepts/rjm/ci-scripts-md.md docs/analysis/concepts/rjm/check-adr-links-py.md docs/analysis/concepts/rjm/historical-roots.md docs/analysis/concepts/rjm/stale-script-refs-py.md docs/analysis/concepts/rjm/adr-021.md docs/analysis/concepts/rjm/adr-019-debate-log-md.md docs/analysis/concepts/rjm/adr-019-debate-log.md docs/analysis/concepts/rjm/adr-021-debate-log.md docs/analysis/concepts/rjm/adr-021-model-routing-strategy-md.md docs/analysis/concepts/rjm/adr-041-codeql-integration-review-md.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-328 completes 30 concept cards (43 total occurrences) covering validation script functions, internal dataclasses, baseline serialization routines, validator error classes, and ADR link baseline identifiers:
  1. Internal parsing and verification functions in `check_adr_lifecycle.py` (`_normalize_reference`, `_supersedes_entries`, `_check_identity`, `_record_header`, `_status_prose`, `_check_prose`, `_edge_targets`, `_Graph`, `_find_cycles`, `_reciprocity_findings`, `_status_edge_findings`, `_parse_baseline_payload`, `_counts_at_ref`, `_print_violations`, `_marker`, and `validate_adr_lifecycle`).
  2. Multi-script baseline writing function `write_baseline` spanning six validation scripts (`check_adr_lifecycle.py`, `check_rule_activation_coverage.py`, `check_skill_md_exec_portability.py`, `check_skill_md_portability.py`, `check_vendor_portability.py`, and `portability_common.py`).
  3. Violation classes and validator items from `check_adr_links.py` and `check_adr_links_baseline.txt` (`number-mismatch`, `unresolved`, `test_baseline_header_counts_match_the_live_file`, `ci-scripts.md`, `check_adr_links.py`, `stale_script_refs.py`).
  4. Repository-wide constant `HISTORICAL_ROOTS` occurring across five files.
  5. Architecture decision record and debate log references (`ADR-021`, `ADR-019-debate-log.md`, `ADR-019-debate-log`, `ADR-021-debate-log`, `ADR-021-model-routing-strategy.md`, `ADR-041-codeql-integration-REVIEW.md`).
- All 30 concepts represent identifiers, internal function/class names, file names, or test/rule labels rather than SDLC lifecycle stages/artifacts; each was authored with `kind: name-only` and `package_phase: none` per D-023.
- All 43 occurrences recorded in `facts/cc-rjm-328.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`clean`, `defects: doc-drift, other`, and `defects: doc-drift, missing-path` where appropriate).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
