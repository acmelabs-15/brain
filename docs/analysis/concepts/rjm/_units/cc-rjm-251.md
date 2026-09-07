---
unit: cc-rjm-251
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-251

## Files assigned
- [x] sources/rjm/scripts/ci/build_ai_review_context.py
- [x] sources/rjm/scripts/ci/build_pr_validation_report.py
- [x] sources/rjm/scripts/ci/build_retrospective_prompt.py
- [x] sources/rjm/scripts/ci/check_ai_review_infra_gate.py
- [x] sources/rjm/scripts/ci/check_bot_identity.py
- [x] sources/rjm/scripts/ci/classify_semantic_title_result.py
- [x] sources/rjm/scripts/ci/collect_ai_metrics.py
- [x] sources/rjm/scripts/ci/drift_create_alert_issue.py
- [x] sources/rjm/scripts/ci/map_pr_description_result.py
- [x] sources/rjm/scripts/ci/update_needs_split_label.py
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_ci.py
- [x] sources/rjm/scripts/github_core/worktree_identity.py
- [x] sources/rjm/scripts/issue_triage.py
- [x] sources/rjm/scripts/maintenance/gc_worktrees.py
- [x] sources/rjm/scripts/maintenance/repair_worktree_venv.py
- [x] sources/rjm/scripts/report_pr_supersession.py
- [x] sources/rjm/scripts/validation/check_tmp_worktrees.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] docs/analysis/inventory/rjm/scripts-ci-build-ai-review-context-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-build-pr-validation-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-build-retrospective-prompt-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-ai-review-infra-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-check-bot-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-classify-semantic-title-result-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-collect-ai-metrics-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-drift-create-alert-issue-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-map-pr-description-result-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-update-needs-split-label-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--model-sweep-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-worktree-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-gc-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-repair-worktree-venv-py.md
- [x] docs/analysis/inventory/rjm/scripts-report-pr-supersession-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-tmp-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md

## Outputs produced
- docs/analysis/concepts/rjm/build-spec-context.md (985 bytes)
- docs/analysis/concepts/rjm/build-context-from-environment.md (1088 bytes)
- docs/analysis/concepts/rjm/config-error.md (1255 bytes)
- docs/analysis/concepts/rjm/report-path.md (1134 bytes)
- docs/analysis/concepts/rjm/status-inputs.md (941 bytes)
- docs/analysis/concepts/rjm/overall-status.md (986 bytes)
- docs/analysis/concepts/rjm/alert-type.md (960 bytes)
- docs/analysis/concepts/rjm/description-status.md (973 bytes)
- docs/analysis/concepts/rjm/build-report.md (2111 bytes)
- docs/analysis/concepts/rjm/pr-validation-report.md (1333 bytes)
- docs/analysis/concepts/rjm/description-validation.md (1194 bytes)
- docs/analysis/concepts/rjm/pr-standards.md (1166 bytes)
- docs/analysis/concepts/rjm/blocking-issues.md (1200 bytes)
- docs/analysis/concepts/rjm/template-path.md (1191 bytes)
- docs/analysis/concepts/rjm/delimiter.md (1139 bytes)
- docs/analysis/concepts/rjm/placeholders.md (958 bytes)
- docs/analysis/concepts/rjm/render.md (1224 bytes)
- docs/analysis/concepts/rjm/string-template.md (971 bytes)
- docs/analysis/concepts/rjm/issue-2967.md (1070 bytes)
- docs/analysis/concepts/rjm/output-file-name.md (955 bytes)
- docs/analysis/concepts/rjm/skip-trigger.md (912 bytes)
- docs/analysis/concepts/rjm/did-not-run-verdict.md (951 bytes)
- docs/analysis/concepts/rjm/did-not-run-message.md (1029 bytes)
- docs/analysis/concepts/rjm/skip-warning.md (905 bytes)
- docs/analysis/concepts/rjm/gatedecision.md (1125 bytes)
- docs/analysis/concepts/rjm/evaluate-gate.md (1127 bytes)
- docs/analysis/concepts/rjm/render-output-file.md (1011 bytes)
- docs/analysis/concepts/rjm/resolve-output-file.md (954 bytes)
- docs/analysis/concepts/rjm/emit.md (926 bytes)
- docs/analysis/concepts/rjm/rjmurillo-bot.md (1484 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-251.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/build-spec-context.md docs/analysis/concepts/rjm/build-context-from-environment.md docs/analysis/concepts/rjm/config-error.md docs/analysis/concepts/rjm/report-path.md docs/analysis/concepts/rjm/status-inputs.md docs/analysis/concepts/rjm/overall-status.md docs/analysis/concepts/rjm/alert-type.md docs/analysis/concepts/rjm/description-status.md docs/analysis/concepts/rjm/build-report.md docs/analysis/concepts/rjm/pr-validation-report.md docs/analysis/concepts/rjm/description-validation.md docs/analysis/concepts/rjm/pr-standards.md docs/analysis/concepts/rjm/blocking-issues.md docs/analysis/concepts/rjm/template-path.md docs/analysis/concepts/rjm/delimiter.md docs/analysis/concepts/rjm/placeholders.md docs/analysis/concepts/rjm/render.md docs/analysis/concepts/rjm/string-template.md docs/analysis/concepts/rjm/issue-2967.md docs/analysis/concepts/rjm/output-file-name.md docs/analysis/concepts/rjm/skip-trigger.md docs/analysis/concepts/rjm/did-not-run-verdict.md docs/analysis/concepts/rjm/did-not-run-message.md docs/analysis/concepts/rjm/skip-warning.md docs/analysis/concepts/rjm/gatedecision.md docs/analysis/concepts/rjm/evaluate-gate.md docs/analysis/concepts/rjm/render-output-file.md docs/analysis/concepts/rjm/resolve-output-file.md docs/analysis/concepts/rjm/emit.md docs/analysis/concepts/rjm/rjmurillo-bot.md` (exit code 0, 34 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-251 covers 30 concept cards spanning CI PR validation reporting, retrospective prompt rendering, AI review infrastructure gating, and bot account identity controls:
  1. CI PR validation report generation (`build-spec-context`, `build-context-from-environment`, `config-error`, `report-path`, `status-inputs`, `overall-status`, `alert-type`, `description-status`, `build-report`, `pr-validation-report`, `description-validation`, `pr-standards`, `blocking-issues`) primarily implemented in `scripts/ci/build_pr_validation_report.py` with multi-file report building across evaluation, maintenance, and triage scripts.
  2. Prompt templating and GITHUB_OUTPUT formatting (`template-path`, `delimiter`, `placeholders`, `render`, `string-template`) from `scripts/ci/build_retrospective_prompt.py`, `drift_create_alert_issue.py`, `collect_ai_metrics.py`, and `classify_semantic_title_result.py`.
  3. AI review infrastructure gating (`issue-2967`, `output-file-name`, `skip-trigger`, `did-not-run-verdict`, `did-not-run-message`, `skip-warning`, `gatedecision`, `evaluate-gate`, `render-output-file`, `resolve-output-file`, `emit`) implementing ADR-006 extraction of skip gate logic in `scripts/ci/check_ai_review_infra_gate.py`.
  4. Bot identity and credentials management (`rjmurillo-bot`) in `scripts/ci/check_bot_identity.py` and `scripts/github_core/worktree_identity.py`.
- Non-lifecycle concepts representing script identifiers, helper functions, constants, and headings were authored with `kind: name-only` per D-023.
- All 45 occurrences recorded in `facts/cc-rjm-251.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were propagated to `Implementation status` (`clean`, `defects: orphan`, or `defects: missing-path, orphan`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (34 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 20 source files and 20 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work-unit report.
