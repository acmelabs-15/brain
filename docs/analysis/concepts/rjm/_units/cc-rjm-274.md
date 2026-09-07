---
unit: cc-rjm-274
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-274

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_optimizer_core.py
- [x] sources/rjm/scripts/eval/_plan_runner.py
- [x] sources/rjm/scripts/eval/_pr_churn.py
- [x] sources/rjm/scripts/eval/analyze-pr-churn.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/optimize-artifact.py
- [x] sources/rjm/scripts/progress/reporter.py
- [x] sources/rjm/templates/agents/qa.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/protectedsectionerror.md (963 bytes)
- docs/analysis/concepts/rjm/patchshapeerror.md (934 bytes)
- docs/analysis/concepts/rjm/missingresulterror.md (948 bytes)
- docs/analysis/concepts/rjm/patch.md (1311 bytes)
- docs/analysis/concepts/rjm/tasksplit.md (1373 bytes)
- docs/analysis/concepts/rjm/scoreevidence.md (1224 bytes)
- docs/analysis/concepts/rjm/gateresult.md (1356 bytes)
- docs/analysis/concepts/rjm/split-tasks.md (1389 bytes)
- docs/analysis/concepts/rjm/split-fingerprint.md (1301 bytes)
- docs/analysis/concepts/rjm/edit-budget.md (1322 bytes)
- docs/analysis/concepts/rjm/apply-patches.md (1388 bytes)
- docs/analysis/concepts/rjm/mcnemar-exact.md (1628 bytes)
- docs/analysis/concepts/rjm/score.md (1508 bytes)
- docs/analysis/concepts/rjm/guard-refusal.md (1351 bytes)
- docs/analysis/concepts/rjm/patch-fingerprint.md (1229 bytes)
- docs/analysis/concepts/rjm/buffer-contains.md (1377 bytes)
- docs/analysis/concepts/rjm/variants.md (1170 bytes)
- docs/analysis/concepts/rjm/form-factor-variants.md (1257 bytes)
- docs/analysis/concepts/rjm/supported-variants.md (908 bytes)
- docs/analysis/concepts/rjm/unsupportedmodelerror.md (1234 bytes)
- docs/analysis/concepts/rjm/bucket-tokens.md (957 bytes)
- docs/analysis/concepts/rjm/revert.md (831 bytes)
- docs/analysis/concepts/rjm/merge-rebase.md (850 bytes)
- docs/analysis/concepts/rjm/ci-fix.md (963 bytes)
- docs/analysis/concepts/rjm/lint-format.md (857 bytes)
- docs/analysis/concepts/rjm/validation-protocol.md (1701 bytes)
- docs/analysis/concepts/rjm/review-response.md (1015 bytes)
- docs/analysis/concepts/rjm/test-fix.md (866 bytes)
- docs/analysis/concepts/rjm/deps.md (802 bytes)
- docs/analysis/concepts/rjm/progress.md (1027 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts on all 30 concept cards, exit code 0 (30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to unit cc-rjm-274 were authored in full from templates/concept-card.md.
- The unit covers evaluation optimizer primitives (`_optimizer_core.py`), evaluation planning and execution runners (`_plan_runner.py`, `eval-agent-vs-baseline.py`), commit churn classification metrics (`_pr_churn.py`, `analyze-pr-churn.py`), and pre-PR quality gate validation (`qa.shared.md`).
- 18 concepts representing code identifiers, exception classes, constants, and commit classification buckets were authored with `kind: name-only` and `package_phase: none` per METHOD.md R6 and D-023:
  - Exception classes: `protectedsectionerror`, `patchshapeerror`, `missingresulterror`, `unsupportedmodelerror`
  - Constants and configurations: `variants`, `form-factor-variants`, `supported-variants`, `bucket-tokens`
  - Commit churn categories: `revert`, `merge-rebase`, `ci-fix`, `lint-format`, `review-response`, `test-fix`, `deps`, `progress`
- 12 operational lifecycle concepts were authored with specific lifecycle kinds:
  - Gating and evaluation artifacts: `patch`, `tasksplit`, `scoreevidence`, `gateresult` (`kind: artifact`, `package_phase: rjm:Test`)
  - Evaluation and partitioning techniques: `split-tasks`, `split-fingerprint`, `edit-budget`, `apply-patches`, `mcnemar-exact`, `score`, `patch-fingerprint`, `buffer-contains` (`kind: technique`, `package_phase: rjm:Test`)
  - Verification gates: `guard-refusal` (`kind: gate`, `package_phase: rjm:Test`), `validation-protocol` (`kind: gate`, `package_phase: rjm:QA`)
- Every card passed byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across assigned sources and citing inventory entries; approximate tokens of output written: ~9,500 tokens across 30 concept cards and this report.
