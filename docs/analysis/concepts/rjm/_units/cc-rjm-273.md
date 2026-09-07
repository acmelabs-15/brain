---
unit: cc-rjm-273
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-273

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_optimizer_adapters.py
- [x] sources/rjm/scripts/eval/_optimizer_core.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-adapters-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md

## Outputs produced
- docs/analysis/concepts/rjm/eval-rule-activation-py.md (1955 bytes)
- docs/analysis/concepts/rjm/pytest-junitxml.md (1296 bytes)
- docs/analysis/concepts/rjm/adaptererror.md (1260 bytes)
- docs/analysis/concepts/rjm/default-min-activation-score.md (1277 bytes)
- docs/analysis/concepts/rjm/reducers.md (1246 bytes)
- docs/analysis/concepts/rjm/skip-policies.md (862 bytes)
- docs/analysis/concepts/rjm/default-skip-policy.md (876 bytes)
- docs/analysis/concepts/rjm/default-reducer.md (854 bytes)
- docs/analysis/concepts/rjm/default-sample-reducer.md (905 bytes)
- docs/analysis/concepts/rjm/rule-score-keys.md (916 bytes)
- docs/analysis/concepts/rjm/max-rule-score.md (832 bytes)
- docs/analysis/concepts/rjm/max-pass-rate.md (823 bytes)
- docs/analysis/concepts/rjm/as-float.md (876 bytes)
- docs/analysis/concepts/rjm/reject.md (897 bytes)
- docs/analysis/concepts/rjm/as-rate.md (833 bytes)
- docs/analysis/concepts/rjm/as-rule-score.md (857 bytes)
- docs/analysis/concepts/rjm/agent-results.md (866 bytes)
- docs/analysis/concepts/rjm/per-fixture-pass-rates.md (933 bytes)
- docs/analysis/concepts/rjm/rule-run-scores.md (873 bytes)
- docs/analysis/concepts/rjm/judge-failed.md (904 bytes)
- docs/analysis/concepts/rjm/score-samples.md (1060 bytes)
- docs/analysis/concepts/rjm/rule-results.md (873 bytes)
- docs/analysis/concepts/rjm/pytest-results.md (932 bytes)
- docs/analysis/concepts/rjm/tasksplit-fingerprint.md (927 bytes)
- docs/analysis/concepts/rjm/fence-start.md (844 bytes)
- docs/analysis/concepts/rjm/fence-end.md (837 bytes)
- docs/analysis/concepts/rjm/splittoosmallerror.md (874 bytes)
- docs/analysis/concepts/rjm/budgetexceedederror.md (862 bytes)
- docs/analysis/concepts/rjm/anchornotfounderror.md (854 bytes)
- docs/analysis/concepts/rjm/ambiguousanchorerror.md (870 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-273.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/eval-rule-activation-py.md docs/analysis/concepts/rjm/pytest-junitxml.md docs/analysis/concepts/rjm/adaptererror.md docs/analysis/concepts/rjm/default-min-activation-score.md docs/analysis/concepts/rjm/reducers.md docs/analysis/concepts/rjm/skip-policies.md docs/analysis/concepts/rjm/default-skip-policy.md docs/analysis/concepts/rjm/default-reducer.md docs/analysis/concepts/rjm/default-sample-reducer.md docs/analysis/concepts/rjm/rule-score-keys.md docs/analysis/concepts/rjm/max-rule-score.md docs/analysis/concepts/rjm/max-pass-rate.md docs/analysis/concepts/rjm/as-float.md docs/analysis/concepts/rjm/reject.md docs/analysis/concepts/rjm/as-rate.md docs/analysis/concepts/rjm/as-rule-score.md docs/analysis/concepts/rjm/agent-results.md docs/analysis/concepts/rjm/per-fixture-pass-rates.md docs/analysis/concepts/rjm/rule-run-scores.md docs/analysis/concepts/rjm/judge-failed.md docs/analysis/concepts/rjm/score-samples.md docs/analysis/concepts/rjm/rule-results.md docs/analysis/concepts/rjm/pytest-results.md docs/analysis/concepts/rjm/tasksplit-fingerprint.md docs/analysis/concepts/rjm/fence-start.md docs/analysis/concepts/rjm/fence-end.md docs/analysis/concepts/rjm/splittoosmallerror.md docs/analysis/concepts/rjm/budgetexceedederror.md docs/analysis/concepts/rjm/anchornotfounderror.md docs/analysis/concepts/rjm/ambiguousanchorerror.md` (exit code 0, 30 PASS, 0 FAIL, across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-273 authors 30 concept cards across behavioral evaluation, adapter normalization, and held-out optimization primitives in package `rjm`:
  1. Behavioral evaluation orchestrators and runners: `eval-rule-activation.py` (evaluated across baseline/description/full mechanisms), `pytest --junitxml` (JUnit XML reporting CLI flag).
  2. Optimizer adapter primitives (`_optimizer_adapters.py`): `AdapterError`, `DEFAULT_MIN_ACTIVATION_SCORE`, `_REDUCERS`, `_SKIP_POLICIES`, `_DEFAULT_SKIP_POLICY`, `_DEFAULT_REDUCER`, `_DEFAULT_SAMPLE_REDUCER`, `_RULE_SCORE_KEYS`, `_MAX_RULE_SCORE`, `_MAX_PASS_RATE`, `_as_float`, `REJECT`, `_as_rate`, `_as_rule_score`, `agent_results`, `per_fixture_pass_rates`, `_rule_run_scores`, `judge_failed`, `score_samples`, `rule_results`, `pytest_results`.
  3. Optimizer core primitives (`_optimizer_core.py`): `TaskSplit.fingerprint` (tamper-evident evaluation set hashing preventing eval set laundering), `FENCE_START` and `FENCE_END` (markers protecting immutable sections against patch mutation), and exception classes `SplitTooSmallError`, `BudgetExceededError`, `AnchorNotFoundError`, `AmbiguousAnchorError`.
- All 30 concepts represent identifiers, constants, function signatures, schema keys, marker strings, exception classes, or script filenames and are authored with `kind: name-only` per D-023.
- All 33 occurrences from `facts/cc-rjm-273.txt` are represented in the respective `Where used` tables.
- Defect annotations from inventory cards (`scripts-eval--optimizer-adapters-py.md`, `scripts-eval-readme-md.md`, `scripts-eval--optimizer-core-py.md`, and `scripts-validation-check-rule-activation-coverage-py.md`) were carried into `Implementation status` (`defects: other`, `clean`, or combined `defects: doc-drift, missing-path, other, script-bug`).
- All 30 cards verified clean with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~42,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work-unit report.
