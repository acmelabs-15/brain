---
unit: cc-rjm-233
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-233

## Files assigned
- [x] sources/rjm/.github/scripts/set_item_milestone.py
- [x] sources/rjm/.github/scripts/test_rate_limit.py
- [x] sources/rjm/.github/scripts/validate_investigation_claims.py
- [x] sources/rjm/.github/workflows/drift-detection.yml
- [x] sources/rjm/.github/workflows/validate-generated-agents.yml
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/docs/codeql-architecture.md
- [x] sources/rjm/docs/codeql-integration.md
- [x] sources/rjm/docs/codeql-rollout-checklist.md
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/github_core/rate_limit.py
- [x] sources/rjm/scripts/metrics/check_vendored_install.py
- [x] sources/rjm/scripts/metrics/emit_verdict_mismatch.py
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py
- [x] sources/rjm/scripts/modules/investigation_allowlist.py
- [x] sources/rjm/scripts/pr_maintenance/__init__.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/validation/check_colocated_skill_tests.py
- [x] sources/rjm/scripts/validation/check_generated_staleness.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] docs/analysis/inventory/rjm/github-scripts-set-item-milestone-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-test-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-validate-investigation-claims-py.md
- [x] docs/analysis/inventory/rjm/github-workflows-drift-detection-yml.md
- [x] docs/analysis/inventory/rjm/github-workflows-validate-generated-agents-yml.md
- [x] docs/analysis/inventory/rjm/contributing-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-architecture-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-integration-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-rollout-checklist-md.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-check-vendored-install-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-emit-verdict-mismatch-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md
- [x] docs/analysis/inventory/rjm/scripts-migrations-req003-inline-plugin-root-bootstrap-py.md
- [x] docs/analysis/inventory/rjm/scripts-modules-investigation-allowlist-py.md
- [x] docs/analysis/inventory/rjm/scripts-pr-maintenance---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-colocated-skill-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-generated-staleness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md

## Outputs produced
- docs/analysis/concepts/rjm/parse-semver-tuple.md (929 bytes)
- docs/analysis/concepts/rjm/get-latest-semantic-milestone.md (954 bytes)
- docs/analysis/concepts/rjm/get-item-milestone.md (918 bytes)
- docs/analysis/concepts/rjm/assign-milestone.md (891 bytes)
- docs/analysis/concepts/rjm/github-core.md (1098 bytes)
- docs/analysis/concepts/rjm/check-workflow-rate-limit.md (1537 bytes)
- docs/analysis/concepts/rjm/adr-034.md (1277 bytes)
- docs/analysis/concepts/rjm/allowlist-patterns.md (932 bytes)
- docs/analysis/concepts/rjm/investigation-claim-pattern.md (1029 bytes)
- docs/analysis/concepts/rjm/claimviolation.md (908 bytes)
- docs/analysis/concepts/rjm/file-matches-allowlist.md (1117 bytes)
- docs/analysis/concepts/rjm/validate-investigation-claims.md (967 bytes)
- docs/analysis/concepts/rjm/validate-claims.md (935 bytes)
- docs/analysis/concepts/rjm/agent-drift-detection.md (1384 bytes)
- docs/analysis/concepts/rjm/adr-025.md (1080 bytes)
- docs/analysis/concepts/rjm/actions-checkout-0c366fd6a839edf440554fa01a7085ccba70ac98.md (1047 bytes)
- docs/analysis/concepts/rjm/k2.md (1391 bytes)
- docs/analysis/concepts/rjm/req-008-09.md (1375 bytes)
- docs/analysis/concepts/rjm/actions-upload-artifact-043fb46d1a93c77aae656e7c1c64a875d1fc6a0a.md (1106 bytes)
- docs/analysis/concepts/rjm/validate-generated-agents.md (1256 bytes)
- docs/analysis/concepts/rjm/check-paths.md (1620 bytes)
- docs/analysis/concepts/rjm/validate-generated-files.md (954 bytes)
- docs/analysis/concepts/rjm/validate-script-reachability.md (982 bytes)
- docs/analysis/concepts/rjm/validate-frontmatter-gate-paths-filter.md (1036 bytes)
- docs/analysis/concepts/rjm/validate-capability-matrix-references.md (1042 bytes)
- docs/analysis/concepts/rjm/regenerate-and-validate-agent-files.md (991 bytes)
- docs/analysis/concepts/rjm/build-all-staleness-check.md (1002 bytes)
- docs/analysis/concepts/rjm/req-003-005.md (1138 bytes)
- docs/analysis/concepts/rjm/review-axes-drift-check.md (1053 bytes)
- docs/analysis/concepts/rjm/req-008-03.md (966 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-233.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/parse-semver-tuple.md docs/analysis/concepts/rjm/get-latest-semantic-milestone.md docs/analysis/concepts/rjm/get-item-milestone.md docs/analysis/concepts/rjm/assign-milestone.md docs/analysis/concepts/rjm/github-core.md docs/analysis/concepts/rjm/check-workflow-rate-limit.md docs/analysis/concepts/rjm/adr-034.md docs/analysis/concepts/rjm/allowlist-patterns.md docs/analysis/concepts/rjm/investigation-claim-pattern.md docs/analysis/concepts/rjm/claimviolation.md docs/analysis/concepts/rjm/file-matches-allowlist.md docs/analysis/concepts/rjm/validate-investigation-claims.md docs/analysis/concepts/rjm/validate-claims.md docs/analysis/concepts/rjm/agent-drift-detection.md docs/analysis/concepts/rjm/adr-025.md docs/analysis/concepts/rjm/actions-checkout-0c366fd6a839edf440554fa01a7085ccba70ac98.md docs/analysis/concepts/rjm/k2.md docs/analysis/concepts/rjm/req-008-09.md docs/analysis/concepts/rjm/actions-upload-artifact-043fb46d1a93c77aae656e7c1c64a875d1fc6a0a.md docs/analysis/concepts/rjm/validate-generated-agents.md docs/analysis/concepts/rjm/check-paths.md docs/analysis/concepts/rjm/validate-generated-files.md docs/analysis/concepts/rjm/validate-script-reachability.md docs/analysis/concepts/rjm/validate-frontmatter-gate-paths-filter.md docs/analysis/concepts/rjm/validate-capability-matrix-references.md docs/analysis/concepts/rjm/regenerate-and-validate-agent-files.md docs/analysis/concepts/rjm/build-all-staleness-check.md docs/analysis/concepts/rjm/req-003-005.md docs/analysis/concepts/rjm/review-axes-drift-check.md docs/analysis/concepts/rjm/req-008-03.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-233 authors 30 concept cards spanning:
  1. Milestone management script utilities (`_parse_semver_tuple`, `get_latest_semantic_milestone`, `get_item_milestone`, `assign_milestone`).
  2. Rate limit management utilities and gates (`github_core`, `check_workflow_rate_limit`).
  3. Investigation allowlist and QA skip verification per ADR-034 (`ADR-034`, `_ALLOWLIST_PATTERNS`, `_INVESTIGATION_CLAIM_PATTERN`, `ClaimViolation`, `file_matches_allowlist`, `validate_investigation_claims`, `validate_claims`).
  4. Agent drift detection and runner cost governance (`Agent Drift Detection`, `ADR-025`, `actions/checkout@0c366fd6a839edf440554fa01a7085ccba70ac98`, `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`).
  5. Review-axes telemetry and kill criteria (`K2`, `REQ-008-09`, `REQ-008-03`).
  6. Generated agent validation workflow jobs, steps, and staleness requirements (`Validate Generated Agents`, `Check Paths`, `Validate Generated Files`, `Validate script reachability`, `Validate frontmatter gate paths filter`, `Validate capability matrix references`, `Regenerate and validate agent files`, `Build-all staleness check`, `REQ-003-005`, `Review-axes drift check`).
- Every occurrence in `facts/cc-rjm-233.txt` (49 occurrences total) is mapped to a row in the corresponding Where used table.
- Concepts representing function identifiers, module constants, dataclasses, workflow job/step names, external pinned actions, and requirement IDs are classified as `kind: name-only` per D-023 with appropriate design notes and `(used, not defined)` definitions.
- Lifecycle gate concepts (`Agent Drift Detection`, `K2`, `Validate Generated Agents`) are classified as `kind: gate`.
- Inventory defect findings were accurately propagated to `Implementation status`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~70,000 tokens across 22 source files and 22 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
