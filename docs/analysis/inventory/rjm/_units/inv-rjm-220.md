---
unit: inv-rjm-220
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-220

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/_optimizer_core.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/_plan_runner.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/_pr_churn.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval--optimizer-core-py.md (7937 bytes)
- docs/analysis/inventory/rjm/scripts-eval--plan-runner-py.md (5223 bytes)
- docs/analysis/inventory/rjm/scripts-eval--pr-churn-py.md (4751 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-220.md (2869 bytes)

## Scripts executed
- `scripts/eval/_optimizer_core.py`, `python3 sources/rjm/scripts/eval/_optimizer_core.py`, exit code 0
- `scripts/eval/_plan_runner.py`, `python3 sources/rjm/scripts/eval/_plan_runner.py`, exit code 0
- `scripts/eval/_pr_churn.py`, `python3 sources/rjm/scripts/eval/_pr_churn.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All three assigned files are private library modules (prefixed with `_`) under `scripts/eval/` implementing core deterministic algorithms for evaluation and optimization loops without direct I/O or LLM inference spend.
- `_optimizer_core.py` provides the mathematical and algorithmic foundation for `scripts/eval/optimize-artifact.py` (Issue #3422) and is imported by `_optimizer_adapters.py`. It enforces held-out gating splits, Bonferroni-corrected McNemar exact significance testing, cosine-decay edit budgets, atomic document patching with fence preservation (`SLOW_UPDATE_START`/`SLOW_UPDATE_END`), and patch rejection caching.
- `_plan_runner.py` provides execution scope and token/dollar cost estimation for `scripts/eval/eval-agent-vs-baseline.py` and `_report_aggregator.py` per DESIGN-004 §5.3a and ADR-058, implementing token estimation splits (70/30 in/out) and pricing lookups from `_eval_common.py`.
- `_pr_churn.py` provides deterministic regex classification of commit message headlines into priority-ordered churn buckets and computes commit thrash fractions for `scripts/eval/analyze-pr-churn.py`, reproducing the published 50% validation protocol thrash baseline on historical degenerate PR cohorts.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,911 tokens (47,643 bytes across 3 assigned files)
- Approximate tokens of output written: ~4,500 tokens across 3 inventory cards and 1 unit report
