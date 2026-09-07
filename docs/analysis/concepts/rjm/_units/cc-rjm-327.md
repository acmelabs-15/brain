---
unit: cc-rjm-327
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-327

## Files assigned
- [x] scripts/validation/assert_trusted_smoke_context.py
- [x] scripts/validation/check_adr_lifecycle.py
- [x] scripts/validation/check_adr_uniqueness.py
- [x] scripts/validation/check_agent_skill_discriminator.py
- [x] scripts/validation/check_citation_freshness.py
- [x] scripts/validation/check_generated_staleness.py
- [x] scripts/validation/check_ruleset_params_drift.py
- [x] scripts/validation/check_vendor_portability.py
- [x] scripts/validation/hook_contracts.py

## Outputs produced
- docs/analysis/concepts/rjm/default-trusted-repo.md (1022 bytes)
- docs/analysis/concepts/rjm/default-trusted-ref.md (1014 bytes)
- docs/analysis/concepts/rjm/split-frontmatter.md (1441 bytes)
- docs/analysis/concepts/rjm/check-doc-interpreter-portability-py.md (1029 bytes)
- docs/analysis/concepts/rjm/lifecycle-gate.md (1394 bytes)
- docs/analysis/concepts/rjm/adr-098.md (968 bytes)
- docs/analysis/concepts/rjm/adr-073-adr-lifecycle-frontmatter-md.md (1053 bytes)
- docs/analysis/concepts/rjm/adr-lifecycle-baseline-json.md (1016 bytes)
- docs/analysis/concepts/rjm/implemented-implies-decided.md (1038 bytes)
- docs/analysis/concepts/rjm/check-lifecycle-rules.md (1175 bytes)
- docs/analysis/concepts/rjm/checks-common.md (1101 bytes)
- docs/analysis/concepts/rjm/yaml-utils.md (901 bytes)
- docs/analysis/concepts/rjm/checks.md (1110 bytes)
- docs/analysis/concepts/rjm/lifecycle-statuses.md (948 bytes)
- docs/analysis/concepts/rjm/adr-filename-re.md (1116 bytes)
- docs/analysis/concepts/rjm/adr-reference-re.md (964 bytes)
- docs/analysis/concepts/rjm/status-heading-re.md (1001 bytes)
- docs/analysis/concepts/rjm/inline-status-re.md (991 bytes)
- docs/analysis/concepts/rjm/level-two-heading-re.md (1017 bytes)
- docs/analysis/concepts/rjm/lead-word-re.md (978 bytes)
- docs/analysis/concepts/rjm/baseline-path.md (1414 bytes)
- docs/analysis/concepts/rjm/record.md (878 bytes)
- docs/analysis/concepts/rjm/frontmatter-reason.md (1010 bytes)
- docs/analysis/concepts/rjm/duplicatekey.md (963 bytes)
- docs/analysis/concepts/rjm/generate-adr-index-py.md (960 bytes)
- docs/analysis/concepts/rjm/duplicate-key.md (1140 bytes)
- docs/analysis/concepts/rjm/read-record.md (1028 bytes)
- docs/analysis/concepts/rjm/collect-records.md (1038 bytes)
- docs/analysis/concepts/rjm/frontmatter-of.md (973 bytes)
- docs/analysis/concepts/rjm/status-of.md (950 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-327.md (3963 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards in unit cc-rjm-327 originate from validation infrastructure in `scripts/validation/`, primarily `scripts/validation/check_adr_lifecycle.py` and supporting verification scripts.
- 29 concepts represent Python constants, functions, internal data classes, regular expressions, or referenced script/baseline files, and are classified as `kind: name-only` per D-023.
- 1 concept (`lifecycle gate`) represents a substantive lifecycle verification gate and is classified as `kind: gate` with `package_phase: cross-phase`.
- All 34 citations across 30 concept cards pass byte-exact verification via `quote-check.ts` with 34 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~55,000 tokens across 9 source files and citing inventory cards; approximate tokens of output written: ~9,500 tokens across 30 concept cards and this unit report.
