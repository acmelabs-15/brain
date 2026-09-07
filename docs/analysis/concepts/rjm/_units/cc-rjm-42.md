---
unit: cc-rjm-42
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-42

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-087-held-out-validated-improvement.md
- [x] sources/rjm/.agents/architecture/ADR-090-pr-branch-holder-lease.md
- [x] sources/rjm/.agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md
- [x] sources/rjm/.claude/skills/ai-agents-change-control/references/gate-ladder.md
- [x] sources/rjm/scripts/eval/_optimizer_adapters.py
- [x] sources/rjm/scripts/eval/_optimizer_core.py
- [x] sources/rjm/scripts/security/run_semgrep.py
- [x] sources/rjm/scripts/validation/check_push_lock_before_commit.py
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-087-held-out-validated-improvement-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-090-pr-branch-holder-lease-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-099-remove-commit-limit-bypass-gate-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-change-control-references-gate-ladder-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-adapters-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-run-semgrep-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-push-lock-before-commit-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-workflow-local-test-py.md

## Outputs produced
- docs/analysis/concepts/rjm/trusted-controller.md (1739 bytes)
- docs/analysis/concepts/rjm/extraction-provenance-envelope.md (1777 bytes)
- docs/analysis/concepts/rjm/rule-results-multi.md (1399 bytes)
- docs/analysis/concepts/rjm/thresholdout.md (1705 bytes)
- docs/analysis/concepts/rjm/sparsevalidate.md (1568 bytes)
- docs/analysis/concepts/rjm/cross-validation.md (1580 bytes)
- docs/analysis/concepts/rjm/statistical-significance.md (1648 bytes)
- docs/analysis/concepts/rjm/github-models.md (1132 bytes)
- docs/analysis/concepts/rjm/skillopt.md (1653 bytes)
- docs/analysis/concepts/rjm/pr-branch-holder-lease.md (1599 bytes)
- docs/analysis/concepts/rjm/holder-lease.md (1399 bytes)
- docs/analysis/concepts/rjm/holder-id.md (1485 bytes)
- docs/analysis/concepts/rjm/verified-github-actor.md (1445 bytes)
- docs/analysis/concepts/rjm/branch-mutation-enforcement.md (1401 bytes)
- docs/analysis/concepts/rjm/lease-timeout.md (1422 bytes)
- docs/analysis/concepts/rjm/manual-override.md (1500 bytes)
- docs/analysis/concepts/rjm/holder-identity-fallback-order.md (1559 bytes)
- docs/analysis/concepts/rjm/push-verification.md (1286 bytes)
- docs/analysis/concepts/rjm/orphan-leases.md (1419 bytes)
- docs/analysis/concepts/rjm/safe-push-pr-branch-py.md (1038 bytes)
- docs/analysis/concepts/rjm/pr-maintenance-workflow.md (1058 bytes)
- docs/analysis/concepts/rjm/pre-push-hook.md (2213 bytes)
- docs/analysis/concepts/rjm/pre-push-gate.md (1359 bytes)
- docs/analysis/concepts/rjm/lease-schema.md (1329 bytes)
- docs/analysis/concepts/rjm/pr-comment-store.md (1322 bytes)
- docs/analysis/concepts/rjm/release-tombstone.md (1334 bytes)
- docs/analysis/concepts/rjm/override-authorization.md (1425 bytes)
- docs/analysis/concepts/rjm/exact-sha-push-verification.md (1446 bytes)
- docs/analysis/concepts/rjm/consistency-model.md (1464 bytes)
- docs/analysis/concepts/rjm/idempotent-readers.md (1409 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-42.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/trusted-controller.md docs/analysis/concepts/rjm/extraction-provenance-envelope.md docs/analysis/concepts/rjm/rule-results-multi.md docs/analysis/concepts/rjm/thresholdout.md docs/analysis/concepts/rjm/sparsevalidate.md docs/analysis/concepts/rjm/cross-validation.md docs/analysis/concepts/rjm/statistical-significance.md docs/analysis/concepts/rjm/github-models.md docs/analysis/concepts/rjm/skillopt.md docs/analysis/concepts/rjm/pr-branch-holder-lease.md docs/analysis/concepts/rjm/holder-lease.md docs/analysis/concepts/rjm/holder-id.md docs/analysis/concepts/rjm/verified-github-actor.md docs/analysis/concepts/rjm/branch-mutation-enforcement.md docs/analysis/concepts/rjm/lease-timeout.md docs/analysis/concepts/rjm/manual-override.md docs/analysis/concepts/rjm/holder-identity-fallback-order.md docs/analysis/concepts/rjm/push-verification.md docs/analysis/concepts/rjm/orphan-leases.md docs/analysis/concepts/rjm/safe-push-pr-branch-py.md docs/analysis/concepts/rjm/pr-maintenance-workflow.md docs/analysis/concepts/rjm/pre-push-hook.md docs/analysis/concepts/rjm/pre-push-gate.md docs/analysis/concepts/rjm/lease-schema.md docs/analysis/concepts/rjm/pr-comment-store.md docs/analysis/concepts/rjm/release-tombstone.md docs/analysis/concepts/rjm/override-authorization.md docs/analysis/concepts/rjm/exact-sha-push-verification.md docs/analysis/concepts/rjm/consistency-model.md docs/analysis/concepts/rjm/idempotent-readers.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-42 delivers 30 concept cards spanning held-out validated improvement and evaluation architecture (ADR-087), multi-agent concurrency and PR branch holder leases (ADR-090), commit count gate history (ADR-099), gate ladder hierarchy, and local validation tooling.
- Multi-occurrence concepts: `rule_results_multi` (ADR-087:635, scripts/eval/_optimizer_adapters.py:464), `SkillOpt` (ADR-087:940, scripts/eval/_optimizer_core.py:16), and `pre-push hook` (6 occurrences across ADR-090:69, ADR-099:24, gate-ladder.md:15, run_semgrep.py:11, check_push_lock_before_commit.py:12, run_workflow_local_test.py:5) have all occurrences completely populated in their respective Where used tables.
- Non-lifecycle concepts (`rule_results_multi`, `GitHub Models`, `safe_push_pr_branch.py`, `PR maintenance workflow`) were authored as `kind: name-only` per D-023.
- Theoretical statistical alternatives analyzed in ADR-087 (`Thresholdout`, `SparseValidate`, `Cross-validation`, `Statistical significance`) were authored as `kind: technique` or `kind: gate` with implementation status accurately reflecting unadopted/rejected status in the source architecture.
- ADR-090 PR branch concurrency concepts (`pr-branch-holder-lease`, `holder-lease`, `holder-id`, `verified-github-actor`, `branch-mutation-enforcement`, `lease-timeout`, `manual-override`, `holder-identity-fallback-order`, `push-verification`, `orphan-leases`, `pre-push-gate`, `lease-schema`, `pr-comment-store`, `release-tombstone`, `override-authorization`, `exact-sha-push-verification`, `consistency-model`, `idempotent-readers`) reflect ADR-090's proposed distributed state model backed by GitHub PR issue comments.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work unit report.
