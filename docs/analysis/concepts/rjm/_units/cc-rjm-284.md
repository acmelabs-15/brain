---
unit: cc-rjm-284
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-284

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_gate.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md

## Outputs produced
- docs/analysis/concepts/rjm/mechanisms.md (879 bytes)
- docs/analysis/concepts/rjm/min-activation-score.md (915 bytes)
- docs/analysis/concepts/rjm/min-delta-vs-baseline.md (942 bytes)
- docs/analysis/concepts/rjm/min-rubric-score.md (848 bytes)
- docs/analysis/concepts/rjm/max-rubric-score.md (848 bytes)
- docs/analysis/concepts/rjm/default-judge-repeats.md (898 bytes)
- docs/analysis/concepts/rjm/default-judge-reducer.md (899 bytes)
- docs/analysis/concepts/rjm/results-schema-version.md (882 bytes)
- docs/analysis/concepts/rjm/max-judge-evidence-chars.md (885 bytes)
- docs/analysis/concepts/rjm/parse-rule.md (852 bytes)
- docs/analysis/concepts/rjm/parse-skill-reference.md (967 bytes)
- docs/analysis/concepts/rjm/build-system-prompt.md (946 bytes)
- docs/analysis/concepts/rjm/negative-gate.md (1127 bytes)
- docs/analysis/concepts/rjm/build-skill-route-prompt.md (1017 bytes)
- docs/analysis/concepts/rjm/score-response.md (914 bytes)
- docs/analysis/concepts/rjm/fail-threshold.md (1785 bytes)
- docs/analysis/concepts/rjm/fail-no-delta.md (1721 bytes)
- docs/analysis/concepts/rjm/no-positive-cases.md (1737 bytes)
- docs/analysis/concepts/rjm/fail-route-missed-target.md (1572 bytes)
- docs/analysis/concepts/rjm/no-negative-cases.md (1455 bytes)
- docs/analysis/concepts/rjm/render-table.md (938 bytes)
- docs/analysis/concepts/rjm/rules-dir.md (867 bytes)
- docs/analysis/concepts/rjm/runstate.md (869 bytes)
- docs/analysis/concepts/rjm/classify-verdict.md (920 bytes)
- docs/analysis/concepts/rjm/pairwise-skill-overlap-analysis.md (1563 bytes)
- docs/analysis/concepts/rjm/catalog-prune.md (1328 bytes)
- docs/analysis/concepts/rjm/expected-answer.md (1242 bytes)
- docs/analysis/concepts/rjm/distinct.md (1461 bytes)
- docs/analysis/concepts/rjm/overlap.md (1412 bytes)
- docs/analysis/concepts/rjm/subsumed.md (1477 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-284.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/mechanisms.md docs/analysis/concepts/rjm/min-activation-score.md docs/analysis/concepts/rjm/min-delta-vs-baseline.md docs/analysis/concepts/rjm/min-rubric-score.md docs/analysis/concepts/rjm/max-rubric-score.md docs/analysis/concepts/rjm/default-judge-repeats.md docs/analysis/concepts/rjm/default-judge-reducer.md docs/analysis/concepts/rjm/results-schema-version.md docs/analysis/concepts/rjm/max-judge-evidence-chars.md docs/analysis/concepts/rjm/parse-rule.md docs/analysis/concepts/rjm/parse-skill-reference.md docs/analysis/concepts/rjm/build-system-prompt.md docs/analysis/concepts/rjm/negative-gate.md docs/analysis/concepts/rjm/build-skill-route-prompt.md docs/analysis/concepts/rjm/score-response.md docs/analysis/concepts/rjm/fail-threshold.md docs/analysis/concepts/rjm/fail-no-delta.md docs/analysis/concepts/rjm/no-positive-cases.md docs/analysis/concepts/rjm/fail-route-missed-target.md docs/analysis/concepts/rjm/no-negative-cases.md docs/analysis/concepts/rjm/render-table.md docs/analysis/concepts/rjm/rules-dir.md docs/analysis/concepts/rjm/runstate.md docs/analysis/concepts/rjm/classify-verdict.md docs/analysis/concepts/rjm/pairwise-skill-overlap-analysis.md docs/analysis/concepts/rjm/catalog-prune.md docs/analysis/concepts/rjm/expected-answer.md docs/analysis/concepts/rjm/distinct.md docs/analysis/concepts/rjm/overlap.md docs/analysis/concepts/rjm/subsumed.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-284 produces 30 concept cards across rule activation evaluation and pairwise skill overlap analysis:
  1. Activation harness configuration constants and helper routines (`mechanisms`, `min-activation-score`, `min-delta-vs-baseline`, `min-rubric-score`, `max-rubric-score`, `default-judge-repeats`, `default-judge-reducer`, `results-schema-version`, `max-judge-evidence-chars`, `parse-rule`, `parse-skill-reference`, `build-system-prompt`, `negative-gate`, `build-skill-route-prompt`, `score-response`, `render-table`, `rules-dir`, `runstate`, `classify-verdict`) in `scripts/eval/eval-rule-activation.py`. These identifiers and helper functions are classified as `kind: name-only` per D-023.
  2. Activation and rollback gating verdicts (`fail-threshold`, `fail-no-delta`, `no-positive-cases`, `fail-route-missed-target`, `no-negative-cases`) shared across `eval-rule-activation.py`, `scripts/eval/README.md`, and `software_engineering_library_activation_gate.py`. These represent operational lifecycle gates classified as `kind: gate`.
  3. Pairwise skill overlap analysis techniques and verdicts (`pairwise-skill-overlap-analysis`, `catalog-prune`, `expected-answer`, `distinct`, `overlap`, `subsumed`) spanning `scripts/eval/eval-skill-overlap.py` and `scripts/eval/README.md`.
- All 42 occurrences listed in `facts/cc-rjm-284.txt` are faithfully mapped in the respective Where used tables.
- Defect annotations from citing inventory cards (`defects: doc-drift`, `defects: missing-path, doc-drift, script-bug`, `defects: doc-drift, other`, and `clean`) were propagated into `Implementation status`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work-unit report.
