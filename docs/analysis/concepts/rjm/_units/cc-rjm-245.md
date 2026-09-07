---
unit: cc-rjm-245
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-245

## Files assigned
- [x] sources/rjm/README.md
- [x] sources/rjm/scripts/AGENTS.md
- [x] sources/rjm/scripts/README.md
- [x] sources/rjm/scripts/ai_review_common/__init__.py
- [x] sources/rjm/scripts/ai_review_common/cache_guard.py
- [x] sources/rjm/scripts/ai_review_common/feature_review.py
- [x] sources/rjm/scripts/ai_review_common/issue_triage.py
- [x] sources/rjm/scripts/ai_review_common/quality_gate.py
- [x] sources/rjm/scripts/ai_review_common/workflow.py
- [x] sources/rjm/scripts/check_skill_exists.py
- [x] sources/rjm/scripts/pr_branch_mapping.py
- [x] sources/rjm/scripts/sync/detect_spec_drift.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] docs/analysis/inventory/rjm/readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-sync-detect-spec-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-agents-md.md
- [x] docs/analysis/inventory/rjm/scripts-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-check-skill-exists-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-feature-review-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-quality-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-workflow-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-cache-guard-py.md
- [x] docs/analysis/inventory/rjm/scripts-pr-branch-mapping-py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-issue-triage-py.md

## Outputs produced
- docs/analysis/concepts/rjm/define.md (1105 bytes)
- docs/analysis/concepts/rjm/plan.md (1574 bytes)
- docs/analysis/concepts/rjm/quality-gate.md (1239 bytes)
- docs/analysis/concepts/rjm/multi-agent-impact-analysis-framework.md (1262 bytes)
- docs/analysis/concepts/rjm/radar-protocol.md (1192 bytes)
- docs/analysis/concepts/rjm/spec.md (1340 bytes)
- docs/analysis/concepts/rjm/powershell-coding-standards.md (1258 bytes)
- docs/analysis/concepts/rjm/script-structure.md (1085 bytes)
- docs/analysis/concepts/rjm/error-handling-pattern.md (1145 bytes)
- docs/analysis/concepts/rjm/cross-platform-patterns.md (1146 bytes)
- docs/analysis/concepts/rjm/testing-standards.md (1084 bytes)
- docs/analysis/concepts/rjm/module-structure.md (1050 bytes)
- docs/analysis/concepts/rjm/installation-utility-agents.md (1243 bytes)
- docs/analysis/concepts/rjm/sync-mcp-config-py.md (1109 bytes)
- docs/analysis/concepts/rjm/check-skill-exists-py.md (1075 bytes)
- docs/analysis/concepts/rjm/phase-1-5-blocking-gate.md (1443 bytes)
- docs/analysis/concepts/rjm/valid-recommendations.md (1107 bytes)
- docs/analysis/concepts/rjm/assert-environment-variables.md (1424 bytes)
- docs/analysis/concepts/rjm/agent-review-composite-action.md (954 bytes)
- docs/analysis/concepts/rjm/non-cacheable-verdicts.md (940 bytes)
- docs/analysis/concepts/rjm/atomic-write-text.md (1407 bytes)
- docs/analysis/concepts/rjm/cacheguardconfigerror.md (876 bytes)
- docs/analysis/concepts/rjm/validate-agent-name.md (899 bytes)
- docs/analysis/concepts/rjm/skip-cache-reason.md (948 bytes)
- docs/analysis/concepts/rjm/append-github-output.md (957 bytes)
- docs/analysis/concepts/rjm/populate-cache.md (855 bytes)
- docs/analysis/concepts/rjm/recommendation-pattern.md (928 bytes)
- docs/analysis/concepts/rjm/keyword-fallback-rules.md (944 bytes)
- docs/analysis/concepts/rjm/alert-type-map.md (906 bytes)
- docs/analysis/concepts/rjm/fail-exit-verdicts.md (890 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-245.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/define.md docs/analysis/concepts/rjm/plan.md docs/analysis/concepts/rjm/quality-gate.md docs/analysis/concepts/rjm/multi-agent-impact-analysis-framework.md docs/analysis/concepts/rjm/radar-protocol.md docs/analysis/concepts/rjm/spec.md docs/analysis/concepts/rjm/powershell-coding-standards.md docs/analysis/concepts/rjm/script-structure.md docs/analysis/concepts/rjm/error-handling-pattern.md docs/analysis/concepts/rjm/cross-platform-patterns.md docs/analysis/concepts/rjm/testing-standards.md docs/analysis/concepts/rjm/module-structure.md docs/analysis/concepts/rjm/installation-utility-agents.md docs/analysis/concepts/rjm/sync-mcp-config-py.md docs/analysis/concepts/rjm/check-skill-exists-py.md docs/analysis/concepts/rjm/phase-1-5-blocking-gate.md docs/analysis/concepts/rjm/valid-recommendations.md docs/analysis/concepts/rjm/assert-environment-variables.md docs/analysis/concepts/rjm/agent-review-composite-action.md docs/analysis/concepts/rjm/non-cacheable-verdicts.md docs/analysis/concepts/rjm/atomic-write-text.md docs/analysis/concepts/rjm/cacheguardconfigerror.md docs/analysis/concepts/rjm/validate-agent-name.md docs/analysis/concepts/rjm/skip-cache-reason.md docs/analysis/concepts/rjm/append-github-output.md docs/analysis/concepts/rjm/populate-cache.md docs/analysis/concepts/rjm/recommendation-pattern.md docs/analysis/concepts/rjm/keyword-fallback-rules.md docs/analysis/concepts/rjm/alert-type-map.md docs/analysis/concepts/rjm/fail-exit-verdicts.md` (exit code 0, 39 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-245 completes all 30 concept cards specified in `facts/cc-rjm-245.txt` across five core functional domains:
  1. Primary Lifecycle Phases and Entrypoints (`define`, `plan`, `spec`) from `README.md` and `scripts/sync/detect_spec_drift.py`.
  2. Lifecycle Quality Gates and Analysis Frameworks (`quality-gate`, `multi-agent-impact-analysis-framework`, `radar-protocol`, `phase-1-5-blocking-gate`) connecting `README.md`, `scripts/AGENTS.md`, and `scripts/check_skill_exists.py`.
  3. Script Engineering Standards and Templates (`powershell-coding-standards`, `script-structure`, `error-handling-pattern`, `cross-platform-patterns`, `testing-standards`, `module-structure`, `installation-utility-agents`) from `scripts/AGENTS.md`.
  4. Platform Maintenance and Verification Script Utilities (`sync-mcp-config-py`, `check-skill-exists-py`) from `scripts/AGENTS.md` and `scripts/README.md`, authored with `kind: name-only` per D-023.
  5. GitHub Action Review and CI Triage Infrastructure Components (`valid-recommendations`, `assert-environment-variables`, `agent-review-composite-action`, `non-cacheable-verdicts`, `atomic-write-text`, `cacheguardconfigerror`, `validate-agent-name`, `skip-cache-reason`, `append-github-output`, `populate-cache`, `recommendation-pattern`, `keyword-fallback-rules`, `alert-type-map`, `fail-exit-verdicts`) from `scripts/ai_review_common/` and utility scripts, authored with `kind: name-only` per D-023.
- All 41 occurrences recorded in `facts/cc-rjm-245.txt` are mapped into the respective `Where used` tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: missing-path, doc-drift` for `README.md`, `defects: missing-path, doc-drift, orphan` for `scripts/AGENTS.md`, `defects: doc-drift` for `scripts/check_skill_exists.py`, `defects: orphan` for `scripts/ai_review_common/cache_guard.py` and helpers, `defects: script-bug, other` for `scripts/ai_review_common/issue_triage.py`, and `clean` for `feature_review.py`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (39 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 13 source files and 13 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
