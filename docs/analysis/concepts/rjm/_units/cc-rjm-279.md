---
unit: cc-rjm-279
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-279

## Files assigned
- [x] sources/rjm/scripts/eval/analyze-pr-churn.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-reviewer-asymmetry.py
- [x] sources/rjm/scripts/eval/eval_runtime_parity.py
- [x] sources/rjm/scripts/eval/eval_skill_router.py
- [x] docs/analysis/inventory/rjm/scripts-eval-analyze-pr-churn-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-reviewer-asymmetry-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-runtime-parity-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-router-py.md

## Outputs produced
- docs/analysis/concepts/rjm/commit-churn.md (1258 bytes)
- docs/analysis/concepts/rjm/degenerate-prs.md (882 bytes)
- docs/analysis/concepts/rjm/control-cohort.md (875 bytes)
- docs/analysis/concepts/rjm/shared-agent-behavior.md (958 bytes)
- docs/analysis/concepts/rjm/claude-agent.md (894 bytes)
- docs/analysis/concepts/rjm/copilot-agent.md (899 bytes)
- docs/analysis/concepts/rjm/non-interactive-prompt-flag.md (977 bytes)
- docs/analysis/concepts/rjm/resolved-model.md (925 bytes)
- docs/analysis/concepts/rjm/tool-traces.md (869 bytes)
- docs/analysis/concepts/rjm/profile-isolation.md (915 bytes)
- docs/analysis/concepts/rjm/skill-router-eval.md (976 bytes)
- docs/analysis/concepts/rjm/skip-clause.md (1297 bytes)
- docs/analysis/concepts/rjm/description-matching-router.md (1234 bytes)
- docs/analysis/concepts/rjm/variant.md (861 bytes)
- docs/analysis/concepts/rjm/claude-sonnet-4-6.md (892 bytes)
- docs/analysis/concepts/rjm/before-ref.md (870 bytes)
- docs/analysis/concepts/rjm/max-tokens.md (816 bytes)
- docs/analysis/concepts/rjm/validate-candidates.md (934 bytes)
- docs/analysis/concepts/rjm/resolve-candidate-path.md (929 bytes)
- docs/analysis/concepts/rjm/extract-description.md (929 bytes)
- docs/analysis/concepts/rjm/load-description-before.md (942 bytes)
- docs/analysis/concepts/rjm/load-description-after.md (928 bytes)
- docs/analysis/concepts/rjm/build-router-prompt.md (985 bytes)
- docs/analysis/concepts/rjm/resolve-variant-descriptions.md (917 bytes)
- docs/analysis/concepts/rjm/parse-pick.md (905 bytes)
- docs/analysis/concepts/rjm/call-router.md (893 bytes)
- docs/analysis/concepts/rjm/build-plan.md (948 bytes)
- docs/analysis/concepts/rjm/check-identical-arms.md (979 bytes)
- docs/analysis/concepts/rjm/run-eval.md (1101 bytes)
- docs/analysis/concepts/rjm/t4-1.md (906 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-279.md (6110 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/commit-churn.md docs/analysis/concepts/rjm/degenerate-prs.md docs/analysis/concepts/rjm/control-cohort.md docs/analysis/concepts/rjm/shared-agent-behavior.md docs/analysis/concepts/rjm/claude-agent.md docs/analysis/concepts/rjm/copilot-agent.md docs/analysis/concepts/rjm/non-interactive-prompt-flag.md docs/analysis/concepts/rjm/resolved-model.md docs/analysis/concepts/rjm/tool-traces.md docs/analysis/concepts/rjm/profile-isolation.md docs/analysis/concepts/rjm/skill-router-eval.md docs/analysis/concepts/rjm/skip-clause.md docs/analysis/concepts/rjm/description-matching-router.md docs/analysis/concepts/rjm/variant.md docs/analysis/concepts/rjm/claude-sonnet-4-6.md docs/analysis/concepts/rjm/before-ref.md docs/analysis/concepts/rjm/max-tokens.md docs/analysis/concepts/rjm/validate-candidates.md docs/analysis/concepts/rjm/resolve-candidate-path.md docs/analysis/concepts/rjm/extract-description.md docs/analysis/concepts/rjm/load-description-before.md docs/analysis/concepts/rjm/load-description-after.md docs/analysis/concepts/rjm/build-router-prompt.md docs/analysis/concepts/rjm/resolve-variant-descriptions.md docs/analysis/concepts/rjm/parse-pick.md docs/analysis/concepts/rjm/call-router.md docs/analysis/concepts/rjm/build-plan.md docs/analysis/concepts/rjm/check-identical-arms.md docs/analysis/concepts/rjm/run-eval.md docs/analysis/concepts/rjm/t4-1.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-279 authors 30 concept cards derived from evaluation scripts under `scripts/eval/`:
  1. PR Churn and Cohort Analysis (`commit-churn`, `degenerate-prs`, `control-cohort` from `analyze-pr-churn.py`).
  2. Runtime Parity Evaluation (`shared-agent-behavior`, `claude-agent`, `copilot-agent`, `non-interactive-prompt-flag`, `resolved-model`, `tool-traces`, `profile-isolation` from `eval_runtime_parity.py`).
  3. Skill Router Disambiguation (`skill-router-eval`, `skip-clause`, `description-matching-router`, `variant`, `claude-sonnet-4-6`, `before-ref`, `max-tokens`, `validate-candidates`, `resolve-candidate-path`, `extract-description`, `load-description-before`, `load-description-after`, `build-router-prompt`, `resolve-variant-descriptions`, `parse-pick`, `call-router`, `build-plan`, `check-identical-arms` from `eval_skill_router.py`).
  4. Multi-file shared evaluation functions (`run-eval` spanning both `eval_skill_router.py:419` and `eval-reviewer-asymmetry.py:318`).
  5. Evaluation Harness Milestones (`t4-1` from `eval-agent-vs-baseline.py:11`).
- All 31 occurrences across the 5 cited source files mapped to rows in `Where used` tables.
- Inventory card `Defects` fields faithfully reflected in `Implementation status`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~29,500 tokens (~118 KB across 5 Python evaluation scripts and 5 inventory cards); approximate tokens of output written: ~8,000 tokens (~32 KB across 30 concept cards and this report).
