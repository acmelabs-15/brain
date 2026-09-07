---
unit: cc-rjm-232
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-232

## Files assigned
- [x] .github/scripts/parse_pr_standards.py
- [x] .github/scripts/post_issue_comment.py
- [x] .github/scripts/quality_gate_agents.py
- [x] .github/scripts/run_with_retry.py
- [x] .github/scripts/safe_push_pr_branch.py
- [x] .github/scripts/set_item_milestone.py
- [x] scripts/ai_review_common/issue_triage.py
- [x] scripts/audit_orphaned_branches.py
- [x] scripts/check_skill_exists.py
- [x] scripts/ci/artifact_build_context.py
- [x] scripts/ci/artifact_collect.py
- [x] scripts/ci/artifact_create_issues.py
- [x] scripts/ci/check_metrics_thresholds.py
- [x] scripts/ci/codeql_integration_summary.py
- [x] scripts/ci/collect_metrics_and_report.py
- [x] scripts/ci/combine_pin_coverage.py
- [x] scripts/ci/commit_and_push.py
- [x] scripts/ci/drift_collect_details.py
- [x] scripts/ci/drift_run_detection.py
- [x] scripts/ci/execute_ai_review_post_script.py
- [x] scripts/ci/install_copilot_cli.py
- [x] scripts/ci/invoke_copilot_cli.py
- [x] scripts/ci/measure_npm_pack_size.py
- [x] scripts/ci/parse_hook_bypass_results.py
- [x] scripts/ci/parse_memory_validation_results.py
- [x] scripts/ci/require_job_results.py
- [x] scripts/ci/spec_extract_refs.py
- [x] scripts/ci/spec_load_content.py
- [x] scripts/ci/verify_codeql_sarif_structure.py
- [x] scripts/ci/verify_github_auth.py
- [x] scripts/ci/verify_npm_package_metadata.py
- [x] scripts/ci/verify_npm_published.py
- [x] scripts/ci/write_copilot_synthesis_summary.py
- [x] scripts/ci/write_drift_job_summary.py
- [x] scripts/ci/write_metrics_threshold_summary.py
- [x] scripts/eval/eval-agent-vs-baseline.py
- [x] scripts/eval/eval-model-panel.py
- [x] scripts/eval/eval-model-sweep.py
- [x] scripts/eval/eval-oneshot-vs-shipped.py
- [x] scripts/eval/eval-skill-overlap.py
- [x] scripts/eval/eval_skill_router.py
- [x] scripts/eval/optimize-artifact.py
- [x] scripts/github_core/api.py
- [x] scripts/github_core/validation.py
- [x] scripts/issue_triage.py
- [x] scripts/maintenance/detect_orphan_commits.py
- [x] scripts/maintenance/gc_worktrees.py
- [x] scripts/maintenance/repair_worktree_venv.py
- [x] scripts/metrics/emit_verdict_mismatch.py
- [x] scripts/pr_branch_mapping.py
- [x] scripts/skill_description_budget.py
- [x] scripts/skill_registry.py
- [x] scripts/validation/assert_trusted_smoke_context.py
- [x] scripts/validation/check_canonical_citations.py
- [x] scripts/validation/check_ci_dependency_pins.py
- [x] scripts/validation/check_copilot_version_pin.py
- [x] scripts/validation/check_skill_memory_references.py
- [x] scripts/validation/check_tmp_worktrees.py
- [x] scripts/validation/check_vendor_portability.py
- [x] scripts/validation/object_id.py

## Outputs produced
- docs/analysis/concepts/rjm/write-skip-outputs.md (935 bytes)
- docs/analysis/concepts/rjm/write-github-output.md (2216 bytes)
- docs/analysis/concepts/rjm/403-pattern.md (863 bytes)
- docs/analysis/concepts/rjm/assert-gh-authenticated.md (1052 bytes)
- docs/analysis/concepts/rjm/error-and-exit.md (1215 bytes)
- docs/analysis/concepts/rjm/get-issue-comments.md (1022 bytes)
- docs/analysis/concepts/rjm/update-issue-comment.md (1063 bytes)
- docs/analysis/concepts/rjm/save-failed-comment-artifact.md (938 bytes)
- docs/analysis/concepts/rjm/prepend-marker.md (902 bytes)
- docs/analysis/concepts/rjm/quality-gate-agents.md (882 bytes)
- docs/analysis/concepts/rjm/quality-gate-agent-display-names.md (969 bytes)
- docs/analysis/concepts/rjm/agent-env-name.md (904 bytes)
- docs/analysis/concepts/rjm/agent-arg-name.md (908 bytes)
- docs/analysis/concepts/rjm/retry-logic.md (1201 bytes)
- docs/analysis/concepts/rjm/exit-logic.md (2177 bytes)
- docs/analysis/concepts/rjm/exit-transient.md (854 bytes)
- docs/analysis/concepts/rjm/parse-args.md (3017 bytes)
- docs/analysis/concepts/rjm/run-with-retry.md (865 bytes)
- docs/analysis/concepts/rjm/git-push.md (902 bytes)
- docs/analysis/concepts/rjm/exit-verification.md (824 bytes)
- docs/analysis/concepts/rjm/exit-usage.md (2683 bytes)
- docs/analysis/concepts/rjm/exit-transport.md (821 bytes)
- docs/analysis/concepts/rjm/force-push-escape-env.md (899 bytes)
- docs/analysis/concepts/rjm/is-full-object-id.md (1053 bytes)
- docs/analysis/concepts/rjm/safepushargumentparser.md (901 bytes)
- docs/analysis/concepts/rjm/safepusherror.md (871 bytes)
- docs/analysis/concepts/rjm/porcelainref.md (838 bytes)
- docs/analysis/concepts/rjm/pushaudit.md (837 bytes)
- docs/analysis/concepts/rjm/safe-push.md (813 bytes)
- docs/analysis/concepts/rjm/semver-pattern.md (904 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-232.md (6133 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-232 were authored and verified.
- 29 of the 30 concepts were code constants, function identifiers, classes, or external tool invocations that are not SDLC lifecycle concepts, and were classified as `kind: name-only` per METHOD.md R6 and D-023.
- `retry logic` represents the ADR-035 transient failure retry technique implemented in `.github/scripts/run_with_retry.py` and was classified as `kind: technique` with `package_phase: cross-phase`.
- All 88 occurrences from `facts/cc-rjm-232.txt` are included across the 30 concept cards.
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 60 assigned source files and citing inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
