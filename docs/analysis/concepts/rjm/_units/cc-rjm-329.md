---
unit: cc-rjm-329
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-329

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_links.py
- [x] sources/rjm/scripts/validation/check_adr_links_baseline.txt
- [x] sources/rjm/scripts/validation/check_citation_freshness.py
- [x] sources/rjm/scripts/validation/stale_script_refs.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-links-baseline-txt.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-links-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-citation-freshness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-stale-script-refs-py.md

## Outputs produced
- docs/analysis/concepts/rjm/adr-005-powershell-only-scripting-md.md (1142 bytes)
- docs/analysis/concepts/rjm/adr-006-thin-workflows-testable-modules-md.md (1167 bytes)
- docs/analysis/concepts/rjm/adr-035-exit-code-standardization-md.md (1142 bytes)
- docs/analysis/concepts/rjm/adr-041-codeql-integration-md.md (1102 bytes)
- docs/analysis/concepts/rjm/pr-req003-body-md.md (988 bytes)
- docs/analysis/concepts/rjm/adr-006-amendment-2026-04-28-debate-log-md.md (1103 bytes)
- docs/analysis/concepts/rjm/workflow-coalescing-md.md (1035 bytes)
- docs/analysis/concepts/rjm/adr-026-pr-automation-concurrency-and-safety-md.md (1157 bytes)
- docs/analysis/concepts/rjm/adr-023-quality-gate-prompt-testing-md.md (1091 bytes)
- docs/analysis/concepts/rjm/adr-057-prompt-behavioral-evaluation-md.md (1096 bytes)
- docs/analysis/concepts/rjm/adr-042-python-migration-strategy-md.md (1039 bytes)
- docs/analysis/concepts/rjm/python-cicd-patterns-md.md (1009 bytes)
- docs/analysis/concepts/rjm/adr-006-thin-workflows-md.md (1024 bytes)
- docs/analysis/concepts/rjm/adr-042-python-first-md.md (1021 bytes)
- docs/analysis/concepts/rjm/adr-037-memory-router-implementation-md.md (1062 bytes)
- docs/analysis/concepts/rjm/prd-memory-enhancement-layer-for-serena-forgetful-md.md (1170 bytes)
- docs/analysis/concepts/rjm/adr-007-memory-first-architecture-md.md (1101 bytes)
- docs/analysis/concepts/rjm/adr-037-memory-router-architecture-md.md (1111 bytes)
- docs/analysis/concepts/rjm/rfc-3986.md (1468 bytes)
- docs/analysis/concepts/rjm/malformed.md (1511 bytes)
- docs/analysis/concepts/rjm/check-adr-links-baseline-txt.md (978 bytes)
- docs/analysis/concepts/rjm/load-allowlist.md (1093 bytes)
- docs/analysis/concepts/rjm/stale-script-refs.md (1066 bytes)
- docs/analysis/concepts/rjm/default-baseline.md (891 bytes)
- docs/analysis/concepts/rjm/fence.md (1010 bytes)
- docs/analysis/concepts/rjm/link.md (831 bytes)
- docs/analysis/concepts/rjm/unterminated.md (898 bytes)
- docs/analysis/concepts/rjm/link-definition.md (910 bytes)
- docs/analysis/concepts/rjm/reference-link.md (919 bytes)
- docs/analysis/concepts/rjm/shortcut-link.md (894 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-329.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/adr-005-powershell-only-scripting-md.md docs/analysis/concepts/rjm/adr-006-thin-workflows-testable-modules-md.md docs/analysis/concepts/rjm/adr-035-exit-code-standardization-md.md docs/analysis/concepts/rjm/adr-041-codeql-integration-md.md docs/analysis/concepts/rjm/pr-req003-body-md.md docs/analysis/concepts/rjm/adr-006-amendment-2026-04-28-debate-log-md.md docs/analysis/concepts/rjm/workflow-coalescing-md.md docs/analysis/concepts/rjm/adr-026-pr-automation-concurrency-and-safety-md.md docs/analysis/concepts/rjm/adr-023-quality-gate-prompt-testing-md.md docs/analysis/concepts/rjm/adr-057-prompt-behavioral-evaluation-md.md docs/analysis/concepts/rjm/adr-042-python-migration-strategy-md.md docs/analysis/concepts/rjm/python-cicd-patterns-md.md docs/analysis/concepts/rjm/adr-006-thin-workflows-md.md docs/analysis/concepts/rjm/adr-042-python-first-md.md docs/analysis/concepts/rjm/adr-037-memory-router-implementation-md.md docs/analysis/concepts/rjm/prd-memory-enhancement-layer-for-serena-forgetful-md.md docs/analysis/concepts/rjm/adr-007-memory-first-architecture-md.md docs/analysis/concepts/rjm/adr-037-memory-router-architecture-md.md docs/analysis/concepts/rjm/rfc-3986.md docs/analysis/concepts/rjm/malformed.md docs/analysis/concepts/rjm/check-adr-links-baseline-txt.md docs/analysis/concepts/rjm/load-allowlist.md docs/analysis/concepts/rjm/stale-script-refs.md docs/analysis/concepts/rjm/default-baseline.md docs/analysis/concepts/rjm/fence.md docs/analysis/concepts/rjm/link.md docs/analysis/concepts/rjm/unterminated.md docs/analysis/concepts/rjm/link-definition.md docs/analysis/concepts/rjm/reference-link.md docs/analysis/concepts/rjm/shortcut-link.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-329 completes 30 concept cards spanning ADR link validation baseline entries, RFC 3986 standard URI reference, the malformed ADR link pattern, and script/regex identifiers in ADR and script ref validators:
  1. ADR and document filenames from baseline allowances (`adr-005-powershell-only-scripting-md`, `adr-006-thin-workflows-testable-modules-md`, `adr-035-exit-code-standardization-md`, `adr-041-codeql-integration-md`, `pr-req003-body-md`, `adr-006-amendment-2026-04-28-debate-log-md`, `workflow-coalescing-md`, `adr-026-pr-automation-concurrency-and-safety-md`, `adr-023-quality-gate-prompt-testing-md`, `adr-057-prompt-behavioral-evaluation-md`, `adr-042-python-migration-strategy-md`, `python-cicd-patterns-md`, `adr-006-thin-workflows-md`, `adr-042-python-first-md`, `adr-037-memory-router-implementation-md`, `prd-memory-enhancement-layer-for-serena-forgetful-md`, `adr-007-memory-first-architecture-md`, `adr-037-memory-router-architecture-md`) authored with `kind: name-only` per D-023.
  2. URI reference standard `RFC 3986` authored with `kind: reference`.
  3. Defect pattern `malformed` (syntax defect in markdown link destination) authored with `kind: pattern`.
  4. Script, function, and regex identifiers (`check_adr_links_baseline.txt`, `load_allowlist`, `stale_script_refs`, `DEFAULT_BASELINE`, `FENCE`, `LINK`, `UNTERMINATED`, `LINK_DEFINITION`, `REFERENCE_LINK`, `SHORTCUT_LINK`) authored with `kind: name-only` per D-023.
- All 33 occurrences across the 4 source files and 4 inventory cards were mapped as rows in the respective Where used tables.
- Implementation defects (`missing-path`, `doc-drift`) from `stale_script_refs.py` were propagated to `Implementation status` for `load_allowlist`, `stale_script_refs`, and `fence`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~22,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
