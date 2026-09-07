---
unit: cc-rjm-141
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-141

## Files assigned
- [x] sources/rjm/.claude/skills/doc-accuracy/SKILL.md
- [x] sources/rjm/.claude/skills/doc-accuracy/scripts/pr_snapshot.py
- [x] sources/rjm/.claude/skills/pipeline-validator/SKILL.md
- [x] sources/rjm/.claude/skills/planner/SKILL.md
- [x] sources/rjm/.claude/skills/planner/scripts/executor.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_constants.py
- [x] sources/rjm/.github/scripts/run_with_retry.py
- [x] sources/rjm/scripts/bulk_cancel_guard.py
- [x] sources/rjm/scripts/ci/artifact_create_issues.py
- [x] sources/rjm/scripts/ci/build_ai_review_context.py
- [x] sources/rjm/scripts/ci/build_retrospective_prompt.py
- [x] sources/rjm/scripts/ci/check_bot_identity.py
- [x] sources/rjm/scripts/ci/check_pr_merge_state.py
- [x] sources/rjm/scripts/ci/cli_exit_contract_ratchet.py
- [x] sources/rjm/scripts/ci/count_ratchet.py
- [x] sources/rjm/scripts/ci/detect_human_changes_requested.py
- [x] sources/rjm/scripts/ci/drift_create_alert_issue.py
- [x] sources/rjm/scripts/ci/establish_ai_review_deadline.py
- [x] sources/rjm/scripts/ci/execute_ai_review_post_script.py
- [x] sources/rjm/scripts/ci/find_copilot_ready_issues.py
- [x] sources/rjm/scripts/ci/install_copilot_cli.py
- [x] sources/rjm/scripts/ci/invoke_copilot_cli.py
- [x] sources/rjm/scripts/ci/load_ai_review_prompt.py
- [x] sources/rjm/scripts/ci/prepare_conflict_context.py
- [x] sources/rjm/scripts/ci/retrospective_gate.py
- [x] sources/rjm/scripts/ci/ruff_count_ratchet.py
- [x] sources/rjm/scripts/ci/ruff_ratchet.py
- [x] sources/rjm/scripts/ci/ruleset_context_drift.py
- [x] sources/rjm/scripts/ci/run_copilot_synthesis.py
- [x] sources/rjm/scripts/ci/spec_extract_refs.py
- [x] sources/rjm/scripts/ci/spec_load_content.py
- [x] sources/rjm/scripts/ci/subprocess_encoding_count_ratchet.py
- [x] sources/rjm/scripts/ci/taste_count_ratchet.py
- [x] sources/rjm/scripts/ci/validate_ai_review_budgets.py
- [x] sources/rjm/scripts/ci/verify_github_auth.py
- [x] sources/rjm/scripts/ci/write_pr_discovery_summary.py
- [x] sources/rjm/scripts/ci/write_pr_maintenance_summary.py
- [x] sources/rjm/scripts/ci/write_synthesis_sweep_summary.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/optimize-artifact.py
- [x] sources/rjm/scripts/gh_retry_helpers.py
- [x] sources/rjm/scripts/validation/active_plan_closeout.py
- [x] sources/rjm/scripts/validation/assert_smoke_ran.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_ci_dependency_pins.py
- [x] sources/rjm/scripts/validation/check_copilot_version_pin.py
- [x] sources/rjm/scripts/validation/check_dual_priority_labels.py
- [x] sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] sources/rjm/scripts/validation/check_ruleset_params_drift.py
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] sources/rjm/scripts/validation/check_skill_memory_references.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] sources/rjm/scripts/workflows/resolve_dispatch_input.py
- [x] docs/analysis/inventory/rjm/claude-skills-doc-accuracy-scripts-pr-snapshot-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-doc-accuracy-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-pipeline-validator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-planner-scripts-executor-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-planner-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-constants-py.md
- [x] docs/analysis/inventory/rjm/github-scripts-run-with-retry-py.md
- [x] docs/analysis/inventory/rjm/scripts-bulk-cancel-guard-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-artifact-create-issues-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-build-ai-review-context-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-build-retrospective-prompt-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-bot-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-pr-merge-state-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-cli-exit-contract-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-detect-human-changes-requested-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-drift-create-alert-issue-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-establish-ai-review-deadline-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-execute-ai-review-post-script-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-find-copilot-ready-issues-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-install-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-invoke-copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-load-ai-review-prompt-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-prepare-conflict-context-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-retrospective-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-ruff-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-ruff-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-ruleset-context-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-run-copilot-synthesis-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-spec-extract-refs-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-spec-load-content-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-subprocess-encoding-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-validate-ai-review-budgets-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-github-auth-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-pr-discovery-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-pr-maintenance-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-write-synthesis-sweep-summary-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-optimize-artifact-py.md
- [x] docs/analysis/inventory/rjm/scripts-gh-retry-helpers-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-active-plan-closeout-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-assert-smoke-ran-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-ci-dependency-pins-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-copilot-version-pin-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-dual-priority-labels-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-plugin-frontmatter-self-containment-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-ruleset-params-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-memory-references-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflows-resolve-dispatch-input-py.md

## Outputs produced
- docs/analysis/concepts/rjm/exit-verify.md (1289 bytes)
- docs/analysis/concepts/rjm/exit-config.md (14710 bytes)
- docs/analysis/concepts/rjm/exit-external.md (8093 bytes)
- docs/analysis/concepts/rjm/exit-auth.md (3016 bytes)
- docs/analysis/concepts/rjm/pridentity.md (1284 bytes)
- docs/analysis/concepts/rjm/snapshot.md (1280 bytes)
- docs/analysis/concepts/rjm/snapshoterror.md (1299 bytes)
- docs/analysis/concepts/rjm/configerror.md (2764 bytes)
- docs/analysis/concepts/rjm/externalerror.md (1306 bytes)
- docs/analysis/concepts/rjm/verifyerror.md (1317 bytes)
- docs/analysis/concepts/rjm/staleerror.md (1282 bytes)
- docs/analysis/concepts/rjm/resolve-pr-identity.md (1340 bytes)
- docs/analysis/concepts/rjm/capture-snapshot.md (1311 bytes)
- docs/analysis/concepts/rjm/check-staleness.md (1317 bytes)
- docs/analysis/concepts/rjm/verify-caller-unchanged.md (1376 bytes)
- docs/analysis/concepts/rjm/run-scanner.md (1260 bytes)
- docs/analysis/concepts/rjm/asymmetric-verification.md (2048 bytes)
- docs/analysis/concepts/rjm/phase-1-assessment.md (1610 bytes)
- docs/analysis/concepts/rjm/phase-2-claim-extraction.md (1565 bytes)
- docs/analysis/concepts/rjm/phase-3-compilability.md (1621 bytes)
- docs/analysis/concepts/rjm/phase-4-behavioral.md (1683 bytes)
- docs/analysis/concepts/rjm/phase-5-cross-document.md (1548 bytes)
- docs/analysis/concepts/rjm/phase-6-structure.md (1599 bytes)
- docs/analysis/concepts/rjm/behavioral-findings-json.md (1328 bytes)
- docs/analysis/concepts/rjm/consistency-findings-json.md (1351 bytes)
- docs/analysis/concepts/rjm/structure-findings-json.md (1330 bytes)
- docs/analysis/concepts/rjm/reconciliation.md (2651 bytes)
- docs/analysis/concepts/rjm/spec-vs-behavior.md (1362 bytes)
- docs/analysis/concepts/rjm/non-compilable-code.md (1420 bytes)
- docs/analysis/concepts/rjm/cross-doc-inconsistency.md (1425 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-141.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/exit-verify.md docs/analysis/concepts/rjm/exit-config.md docs/analysis/concepts/rjm/exit-external.md docs/analysis/concepts/rjm/exit-auth.md docs/analysis/concepts/rjm/pridentity.md docs/analysis/concepts/rjm/snapshot.md docs/analysis/concepts/rjm/snapshoterror.md docs/analysis/concepts/rjm/configerror.md docs/analysis/concepts/rjm/externalerror.md docs/analysis/concepts/rjm/verifyerror.md docs/analysis/concepts/rjm/staleerror.md docs/analysis/concepts/rjm/resolve-pr-identity.md docs/analysis/concepts/rjm/capture-snapshot.md docs/analysis/concepts/rjm/check-staleness.md docs/analysis/concepts/rjm/verify-caller-unchanged.md docs/analysis/concepts/rjm/run-scanner.md docs/analysis/concepts/rjm/asymmetric-verification.md docs/analysis/concepts/rjm/phase-1-assessment.md docs/analysis/concepts/rjm/phase-2-claim-extraction.md docs/analysis/concepts/rjm/phase-3-compilability.md docs/analysis/concepts/rjm/phase-4-behavioral.md docs/analysis/concepts/rjm/phase-5-cross-document.md docs/analysis/concepts/rjm/phase-6-structure.md docs/analysis/concepts/rjm/behavioral-findings-json.md docs/analysis/concepts/rjm/consistency-findings-json.md docs/analysis/concepts/rjm/structure-findings-json.md docs/analysis/concepts/rjm/reconciliation.md docs/analysis/concepts/rjm/spec-vs-behavior.md docs/analysis/concepts/rjm/non-compilable-code.md docs/analysis/concepts/rjm/cross-doc-inconsistency.md` (exit code 0, 32 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-141 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped, 116 inputs)
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/exit-verify.md docs/analysis/concepts/rjm/exit-config.md docs/analysis/concepts/rjm/exit-external.md docs/analysis/concepts/rjm/exit-auth.md docs/analysis/concepts/rjm/pridentity.md docs/analysis/concepts/rjm/snapshot.md docs/analysis/concepts/rjm/snapshoterror.md docs/analysis/concepts/rjm/configerror.md docs/analysis/concepts/rjm/externalerror.md docs/analysis/concepts/rjm/verifyerror.md docs/analysis/concepts/rjm/staleerror.md docs/analysis/concepts/rjm/resolve-pr-identity.md docs/analysis/concepts/rjm/capture-snapshot.md docs/analysis/concepts/rjm/check-staleness.md docs/analysis/concepts/rjm/verify-caller-unchanged.md docs/analysis/concepts/rjm/run-scanner.md docs/analysis/concepts/rjm/asymmetric-verification.md docs/analysis/concepts/rjm/phase-1-assessment.md docs/analysis/concepts/rjm/phase-2-claim-extraction.md docs/analysis/concepts/rjm/phase-3-compilability.md docs/analysis/concepts/rjm/phase-4-behavioral.md docs/analysis/concepts/rjm/phase-5-cross-document.md docs/analysis/concepts/rjm/phase-6-structure.md docs/analysis/concepts/rjm/behavioral-findings-json.md docs/analysis/concepts/rjm/consistency-findings-json.md docs/analysis/concepts/rjm/structure-findings-json.md docs/analysis/concepts/rjm/reconciliation.md docs/analysis/concepts/rjm/spec-vs-behavior.md docs/analysis/concepts/rjm/non-compilable-code.md docs/analysis/concepts/rjm/cross-doc-inconsistency.md` (post-stamping verification: exit code 0, 32 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-141 authors 30 concept cards spanning the documentation accuracy scanner architecture, pull request snapshot verification mechanics, standard CLI exit code contracts, and execution reconciliation:
  1. Standard exit code contracts (`exit-verify`, `exit-config`, `exit-external`, `exit-auth`) standardizing exit statuses across Python CLI scripts per ADR-035 (1 for verification failure, 2 for config errors, 3 for external dependency failures, 4 for authentication errors).
  2. The `pr_snapshot.py` verification framework (`pridentity`, `snapshot`, `snapshoterror`, `configerror`, `externalerror`, `verifyerror`, `staleerror`, `resolve-pr-identity`, `capture-snapshot`, `check-staleness`, `verify-caller-unchanged`, `run-scanner`), providing immutable git-isolated worktrees and two-phase staleness checks to prevent TOCTOU drift and security vulnerabilities during pull request verification.
  3. The `doc-accuracy` scanner pipeline architecture (`asymmetric-verification`, `phase-1-assessment`, `phase-2-claim-extraction`, `phase-3-compilability`, `phase-4-behavioral`, `phase-5-cross-document`, `phase-6-structure`), implementing the core design principle that code compiles and runs, making implementation code the source of truth over documentation claims.
  4. Documentation scanner artifact schemas (`behavioral-findings-json`, `consistency-findings-json`, `structure-findings-json`) and issue taxonomy classifications (`spec-vs-behavior`, `non-compilable-code`, `cross-doc-inconsistency`).
  5. The cross-phase governance checkpoint (`reconciliation`), coordinating alignment between observed reality and planned actions across planning, pipeline validation, and doc accuracy before mutations are applied.
- All non-lifecycle concepts representing identifiers, file names, or taxonomy table rows were authored with `kind: name-only` and `package_phase: none` per D-023.
- All 116 occurrences listed in `facts/cc-rjm-141.txt` are mapped as rows in the respective Where used tables.
- Defect annotations from citing inventory cards were propagated to `Implementation status`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (32 PASS, 0 FAIL, 0 MISSING source) and were stamped with `memo.ts stamp-unit cc-rjm-141`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 58 source files and 58 inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 authored concept cards and 1 unit report.
