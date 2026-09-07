---
unit: cc-rjm-249
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-249

## Files assigned
- [x] scripts/bulk_cancel_guard.py
- [x] scripts/check_skill_exists.py
- [x] scripts/ci/_main_binding.py
- [x] scripts/ci/adr006_run_block_scanner.py
- [x] scripts/ci/adr015_workflow_retention.py
- [x] scripts/ci/apply_ai_conflict_resolution.py
- [x] scripts/ci/artifact_build_context.py
- [x] scripts/ci/artifact_collect.py
- [x] scripts/ci/artifact_create_issues.py
- [x] scripts/ci/artifact_write_summary.py
- [x] scripts/validation/check_ci_dependency_pins.py
- [x] scripts/validation/check_skill_contract_tests.py

## Outputs produced
- docs/analysis/concepts/rjm/allowed-days.md (895 bytes)
- docs/analysis/concepts/rjm/apply-resolution.md (994 bytes)
- docs/analysis/concepts/rjm/artifact-insight-findings.md (1155 bytes)
- docs/analysis/concepts/rjm/artifact-insight-scanner-yml.md (977 bytes)
- docs/analysis/concepts/rjm/artifact-insight-scanner.md (1157 bytes)
- docs/analysis/concepts/rjm/authenticated.md (918 bytes)
- docs/analysis/concepts/rjm/build-footer.md (948 bytes)
- docs/analysis/concepts/rjm/burn-down-metric.md (1138 bytes)
- docs/analysis/concepts/rjm/collect-artifacts.md (922 bytes)
- docs/analysis/concepts/rjm/compute-bare-credit.md (917 bytes)
- docs/analysis/concepts/rjm/conservative-branch-join.md (958 bytes)
- docs/analysis/concepts/rjm/extract-json.md (945 bytes)
- docs/analysis/concepts/rjm/findings-json.md (919 bytes)
- docs/analysis/concepts/rjm/get-skill-base-path.md (886 bytes)
- docs/analysis/concepts/rjm/is-conforming.md (936 bytes)
- docs/analysis/concepts/rjm/is-duplicate.md (903 bytes)
- docs/analysis/concepts/rjm/is-violation.md (938 bytes)
- docs/analysis/concepts/rjm/list-available-skills.md (923 bytes)
- docs/analysis/concepts/rjm/mainstate.md (869 bytes)
- docs/analysis/concepts/rjm/needs-credentials.md (934 bytes)
- docs/analysis/concepts/rjm/parse-resolutions.md (927 bytes)
- docs/analysis/concepts/rjm/ratchet-gate.md (1215 bytes)
- docs/analysis/concepts/rjm/redact-artifact-text.md (955 bytes)
- docs/analysis/concepts/rjm/resolve-live-subscriptions.md (990 bytes)
- docs/analysis/concepts/rjm/retentionentry.md (948 bytes)
- docs/analysis/concepts/rjm/runblock.md (908 bytes)
- docs/analysis/concepts/rjm/scan-repo.md (922 bytes)
- docs/analysis/concepts/rjm/target.md (927 bytes)
- docs/analysis/concepts/rjm/unbound.md (1080 bytes)
- docs/analysis/concepts/rjm/violations.md (1130 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-249.md (4367 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts: `bun scripts/synthesis/quote-check.ts <30 cards>`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards for unit cc-rjm-249 were authored in this session.
- 4 concepts represent lifecycle entities:
  - `burn-down metric`: `kind: technique`, package_phase: `rjm:test`
  - `ratchet gate`: `kind: gate`, package_phase: `rjm:test`
  - `artifact insight findings`: `kind: artifact`, package_phase: `none`
  - `Artifact Insight Scanner`: `kind: technique`, package_phase: `none`
- 26 concepts represent identifiers, constants, internal dataclasses, or workflow filenames and were classified as `kind: name-only` per METHOD.md R6 and D-023.
- Concepts spanning multiple occurrences across distinct source files:
  - `UNBOUND`: `scripts/ci/_main_binding.py:12` and `scripts/validation/check_skill_contract_tests.py:63`
  - `violations`: `scripts/ci/adr015_workflow_retention.py:129` and `scripts/validation/check_ci_dependency_pins.py:222`
  - `artifact-insight-scanner.yml`: `scripts/ci/artifact_create_issues.py:5` and `scripts/ci/artifact_write_summary.py:5`
- All 30 cards pass `bun scripts/synthesis/quote-check.ts` with 30 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 12 cited source files and 12 inventory cards; approximate tokens of output written: ~8,500 tokens across 30 concept cards and this unit report.
