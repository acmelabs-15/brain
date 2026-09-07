---
unit: cc-rjm-239
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-239

## Files assigned
- [x] sources/rjm/docs/codeql-architecture.md
- [x] sources/rjm/docs/codeql-integration.md
- [x] sources/rjm/docs/codeql-rollout-checklist.md
- [x] sources/rjm/docs/copilot-cli-setup.md
- [x] sources/rjm/scripts/redact_secrets.py
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] docs/analysis/inventory/rjm/docs-codeql-architecture-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-integration-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-rollout-checklist-md.md
- [x] docs/analysis/inventory/rjm/docs-copilot-cli-setup-md.md
- [x] docs/analysis/inventory/rjm/scripts-redact-secrets-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-workflow-local-test-py.md

## Outputs produced
- docs/analysis/concepts/rjm/tier-1-ci-cd-pipeline.md (973 bytes)
- docs/analysis/concepts/rjm/tier-2-local-on-demand.md (1097 bytes)
- docs/analysis/concepts/rjm/timeout-budget.md (1205 bytes)
- docs/analysis/concepts/rjm/security-extended.md (960 bytes)
- docs/analysis/concepts/rjm/shared-configuration-pattern.md (1459 bytes)
- docs/analysis/concepts/rjm/targeted-query-selection.md (1348 bytes)
- docs/analysis/concepts/rjm/query-pack-trust-model.md (1351 bytes)
- docs/analysis/concepts/rjm/tier-1-ci-cd.md (1368 bytes)
- docs/analysis/concepts/rjm/invoke-codeql-scan-py.md (1033 bytes)
- docs/analysis/concepts/rjm/one-command-setup.md (1345 bytes)
- docs/analysis/concepts/rjm/full-scan.md (1248 bytes)
- docs/analysis/concepts/rjm/shared-configuration.md (1314 bytes)
- docs/analysis/concepts/rjm/quick-scan-configuration.md (1371 bytes)
- docs/analysis/concepts/rjm/database-caching.md (1205 bytes)
- docs/analysis/concepts/rjm/pre-rollout.md (1255 bytes)
- docs/analysis/concepts/rjm/rollout-steps.md (1231 bytes)
- docs/analysis/concepts/rjm/post-rollout.md (1251 bytes)
- docs/analysis/concepts/rjm/functional-criteria.md (1294 bytes)
- docs/analysis/concepts/rjm/performance-criteria.md (1287 bytes)
- docs/analysis/concepts/rjm/adoption-criteria.md (1280 bytes)
- docs/analysis/concepts/rjm/quality-criteria.md (1306 bytes)
- docs/analysis/concepts/rjm/immediate-rollback.md (1348 bytes)
- docs/analysis/concepts/rjm/partial-rollback.md (1375 bytes)
- docs/analysis/concepts/rjm/full-rollback.md (1344 bytes)
- docs/analysis/concepts/rjm/copilot-subscription.md (962 bytes)
- docs/analysis/concepts/rjm/gh-token.md (1106 bytes)
- docs/analysis/concepts/rjm/copilot-requests.md (972 bytes)
- docs/analysis/concepts/rjm/fine-grained-token.md (920 bytes)
- docs/analysis/concepts/rjm/copilot-github-token.md (967 bytes)
- docs/analysis/concepts/rjm/github-token.md (1225 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-239.md (7173 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/tier-1-ci-cd-pipeline.md docs/analysis/concepts/rjm/tier-2-local-on-demand.md docs/analysis/concepts/rjm/timeout-budget.md docs/analysis/concepts/rjm/security-extended.md docs/analysis/concepts/rjm/shared-configuration-pattern.md docs/analysis/concepts/rjm/targeted-query-selection.md docs/analysis/concepts/rjm/query-pack-trust-model.md docs/analysis/concepts/rjm/tier-1-ci-cd.md docs/analysis/concepts/rjm/invoke-codeql-scan-py.md docs/analysis/concepts/rjm/one-command-setup.md docs/analysis/concepts/rjm/full-scan.md docs/analysis/concepts/rjm/shared-configuration.md docs/analysis/concepts/rjm/quick-scan-configuration.md docs/analysis/concepts/rjm/database-caching.md docs/analysis/concepts/rjm/pre-rollout.md docs/analysis/concepts/rjm/rollout-steps.md docs/analysis/concepts/rjm/post-rollout.md docs/analysis/concepts/rjm/functional-criteria.md docs/analysis/concepts/rjm/performance-criteria.md docs/analysis/concepts/rjm/adoption-criteria.md docs/analysis/concepts/rjm/quality-criteria.md docs/analysis/concepts/rjm/immediate-rollback.md docs/analysis/concepts/rjm/partial-rollback.md docs/analysis/concepts/rjm/full-rollback.md docs/analysis/concepts/rjm/copilot-subscription.md docs/analysis/concepts/rjm/gh-token.md docs/analysis/concepts/rjm/copilot-requests.md docs/analysis/concepts/rjm/fine-grained-token.md docs/analysis/concepts/rjm/copilot-github-token.md docs/analysis/concepts/rjm/github-token.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-239 completes 30 concept cards across CodeQL static analysis architecture, integration guides, deployment and rollback checklists, and GitHub Copilot CLI authentication:
  1. CodeQL architecture and scanning tiers (`tier-1-ci-cd-pipeline`, `tier-2-local-on-demand`, `timeout-budget`, `security-extended`, `shared-configuration-pattern`, `targeted-query-selection`, `query-pack-trust-model`) from `codeql-architecture.md`.
  2. Practical CodeQL developer integration (`tier-1-ci-cd`, `invoke-codeql-scan-py`, `one-command-setup`, `full-scan`, `shared-configuration`, `quick-scan-configuration`, `database-caching`) from `codeql-integration.md`.
  3. Structured rollout lifecycle, success criteria, and rollback hierarchy (`pre-rollout`, `rollout-steps`, `post-rollout`, `functional-criteria`, `performance-criteria`, `adoption-criteria`, `quality-criteria`, `immediate-rollback`, `partial-rollback`, `full-rollback`) from `codeql-rollout-checklist.md`.
  4. Copilot CLI authentication and environment token variables (`copilot-subscription`, `gh-token`, `copilot-requests`, `fine-grained-token`, `copilot-github-token`, `github-token`) from `copilot-cli-setup.md`, `redact_secrets.py`, and `run_workflow_local_test.py`.
- Non-lifecycle concepts representing identifiers, file names, subscription types, and environment variables (`tier-1-ci-cd-pipeline`, `tier-2-local-on-demand`, `security-extended`, `invoke-codeql-scan-py`, `copilot-subscription`, `gh-token`, `copilot-requests`, `fine-grained-token`, `copilot-github-token`, `github-token`) were authored with `kind: name-only` per D-023.
- All 34 occurrences recorded in `facts/cc-rjm-239.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: script-bug, doc-drift, missing-path`, `defects: missing-path`, `defects: always-failing-gate, missing-path, doc-drift`, `defects: orphan`, `defects: orphan, doc-drift`, and `clean` where appropriate).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~30,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
