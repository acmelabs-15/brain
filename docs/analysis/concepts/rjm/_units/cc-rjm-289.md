---
unit: cc-rjm-289
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-289

## Files assigned
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_gate.py
- [x] sources/rjm/scripts/eval/variance-control.py
- [x] sources/rjm/scripts/external_signals/__init__.py
- [x] sources/rjm/scripts/external_signals/acceptance_criteria.py
- [x] sources/rjm/scripts/external_signals/gate_aggregator.py
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-variance-control-py.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals-acceptance-criteria-py.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals-gate-aggregator-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md

## Outputs produced
- docs/analysis/concepts/rjm/cadence.md (1031 bytes)
- docs/analysis/concepts/rjm/default-threshold.md (992 bytes)
- docs/analysis/concepts/rjm/rollback-verdicts.md (1077 bytes)
- docs/analysis/concepts/rjm/external-verdicts.md (1012 bytes)
- docs/analysis/concepts/rjm/restoration-pr-policy.md (1030 bytes)
- docs/analysis/concepts/rjm/update-state.md (968 bytes)
- docs/analysis/concepts/rjm/evaluate-thresholds.md (1083 bytes)
- docs/analysis/concepts/rjm/render-report.md (1159 bytes)
- docs/analysis/concepts/rjm/variance-control-harness.md (1634 bytes)
- docs/analysis/concepts/rjm/security-spike-eval.md (944 bytes)
- docs/analysis/concepts/rjm/issue-1877.md (912 bytes)
- docs/analysis/concepts/rjm/ac-1.md (927 bytes)
- docs/analysis/concepts/rjm/ac-4.md (894 bytes)
- docs/analysis/concepts/rjm/scoring-engine-verdict-re.md (1026 bytes)
- docs/analysis/concepts/rjm/default-reps.md (871 bytes)
- docs/analysis/concepts/rjm/control-dir-template.md (954 bytes)
- docs/analysis/concepts/rjm/fixtures-dir.md (882 bytes)
- docs/analysis/concepts/rjm/levenshtein.md (900 bytes)
- docs/analysis/concepts/rjm/normalized-levenshtein.md (972 bytes)
- docs/analysis/concepts/rjm/response-text-variance.md (940 bytes)
- docs/analysis/concepts/rjm/verdict-distribution.md (967 bytes)
- docs/analysis/concepts/rjm/pass-rate-variance.md (974 bytes)
- docs/analysis/concepts/rjm/classify-finding.md (922 bytes)
- docs/analysis/concepts/rjm/summarize-variance.md (988 bytes)
- docs/analysis/concepts/rjm/reprecord.md (879 bytes)
- docs/analysis/concepts/rjm/run-reps.md (863 bytes)
- docs/analysis/concepts/rjm/build-report-md.md (918 bytes)
- docs/analysis/concepts/rjm/assert-under-repo-root.md (985 bytes)
- docs/analysis/concepts/rjm/externally-grounded-gate-signals.md (1494 bytes)
- docs/analysis/concepts/rjm/issue-1855.md (1309 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-289.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/cadence.md docs/analysis/concepts/rjm/default-threshold.md docs/analysis/concepts/rjm/rollback-verdicts.md docs/analysis/concepts/rjm/external-verdicts.md docs/analysis/concepts/rjm/restoration-pr-policy.md docs/analysis/concepts/rjm/update-state.md docs/analysis/concepts/rjm/evaluate-thresholds.md docs/analysis/concepts/rjm/render-report.md docs/analysis/concepts/rjm/variance-control-harness.md docs/analysis/concepts/rjm/security-spike-eval.md docs/analysis/concepts/rjm/issue-1877.md docs/analysis/concepts/rjm/ac-1.md docs/analysis/concepts/rjm/ac-4.md docs/analysis/concepts/rjm/scoring-engine-verdict-re.md docs/analysis/concepts/rjm/default-reps.md docs/analysis/concepts/rjm/control-dir-template.md docs/analysis/concepts/rjm/fixtures-dir.md docs/analysis/concepts/rjm/levenshtein.md docs/analysis/concepts/rjm/normalized-levenshtein.md docs/analysis/concepts/rjm/response-text-variance.md docs/analysis/concepts/rjm/verdict-distribution.md docs/analysis/concepts/rjm/pass-rate-variance.md docs/analysis/concepts/rjm/classify-finding.md docs/analysis/concepts/rjm/summarize-variance.md docs/analysis/concepts/rjm/reprecord.md docs/analysis/concepts/rjm/run-reps.md docs/analysis/concepts/rjm/build-report-md.md docs/analysis/concepts/rjm/assert-under-repo-root.md docs/analysis/concepts/rjm/externally-grounded-gate-signals.md docs/analysis/concepts/rjm/issue-1855.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-289 covers concepts across three major quality and evaluation infrastructure areas:
  1. Software engineering library activation gate state tracking and rollback trigger evaluation (`cadence`, `default-threshold`, `rollback-verdicts`, `external-verdicts`, `restoration-pr-policy`, `update-state`, `evaluate-thresholds`, and `render-report`) from `scripts/eval/software_engineering_library_activation_gate.py`.
  2. Model variance control testing and determinism measurement harness (`variance-control-harness`, `security-spike-eval`, `issue-1877`, `ac-1`, `ac-4`, `scoring-engine-verdict-re`, `default-reps`, `control-dir-template`, `fixtures-dir`, `levenshtein`, `normalized-levenshtein`, `response-text-variance`, `verdict-distribution`, `pass-rate-variance`, `classify-finding`, `summarize-variance`, `reprecord`, `run-reps`, `build-report-md`, `assert-under-repo-root`) from `scripts/eval/variance-control.py`.
  3. External signal quality gate mandate and aggregation against closed-loop LLM evaluation failures (`externally-grounded-gate-signals`, `issue-1855`) from `scripts/external_signals/__init__.py`, `scripts/external_signals/acceptance_criteria.py`, and `scripts/external_signals/gate_aggregator.py`.
- Non-lifecycle concepts representing identifiers, constants, issue numbers, and helper functions were authored with `kind: name-only` per D-023.
- All 33 occurrences recorded in `facts/cc-rjm-289.txt` are mapped in the respective Where used tables (including multi-occurrence concepts `render-report` and `issue-1855`).
- All 6 citing inventory cards reported zero defects (`Defects: none`), so `Implementation status` was populated as `clean` across all cards.
- All 30 concept cards pass `bun scripts/synthesis/quote-check.ts` with zero FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 work-unit report.
