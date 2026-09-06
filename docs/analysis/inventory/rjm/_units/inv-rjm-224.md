---
unit: inv-rjm-224
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-224

## Files assigned
- [x] sources/rjm/scripts/eval/analyze-pr-churn.py (9633 bytes, 252 lines)
- [x] sources/rjm/scripts/eval/eval_run_rollup.py (8002 bytes, 251 lines)
- [x] sources/rjm/scripts/eval/eval_runtime_parity.py (16416 bytes, 541 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-analyze-pr-churn-py.md (7113 bytes)
- docs/analysis/inventory/rjm/scripts-eval-eval-run-rollup-py.md (7000 bytes)
- docs/analysis/inventory/rjm/scripts-eval-eval-runtime-parity-py.md (9434 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-224.md (2248 bytes)

## Scripts executed
- scripts/eval/analyze-pr-churn.py: `python3 scripts/eval/analyze-pr-churn.py --prs 1013,1763,955` (exit code: 0)
- scripts/eval/analyze-pr-churn.py: `python3 scripts/eval/analyze-pr-churn.py --prs invalid` (exit code: 2)
- scripts/eval/eval_run_rollup.py: `python3 scripts/eval/eval_run_rollup.py` (exit code: 0)
- scripts/eval/eval_run_rollup.py: `python3 scripts/eval/eval_run_rollup.py --sigma -1` (exit code: 2)
- scripts/eval/eval_runtime_parity.py: `python3 scripts/eval/eval_runtime_parity.py --dry-run` (exit code: 3, defect: missing copilot binary fails during version probing prior to dry-run check)
- scripts/eval/eval_runtime_parity.py: `python3 scripts/eval/eval_runtime_parity.py --dry-run --claude-bin /bin/echo --copilot-bin /bin/echo` (exit code: 0)
- scripts/eval/eval_runtime_parity.py: `python3 scripts/eval/eval_runtime_parity.py --timeout -5` (exit code: 2)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/analyze-pr-churn.py` relies on `scripts/eval/_pr_churn.py` for its deterministic commit headline categorization logic (`validation_protocol`, `review_response`, `ci_fix`, `thrash_fraction`).
- `scripts/eval/eval_run_rollup.py` depends on `scripts/eval/_run_rollup_core.py` for aggregating metrics across `evals/<agent>-spike/runs/<RUN_ID>/runs.jsonl` files and calculating 3-sigma drift flags.
- `scripts/eval/eval_runtime_parity.py` integrates `scripts/eval/_runtime_output.py`, `scripts/eval/_runtime_parity.py`, and `scripts/eval/examples/runtime-parity-fixtures.json` to conduct comparative CLI evaluations across Claude and Copilot agents. Identified defect where version probing is executed before dry-run check, causing dry run to fail if `copilot` is absent from PATH.

## Blocked or uncertain
none

## Time and size
Source read: 34,051 bytes across 3 files (~8,500 tokens). Output written: 4 files (~6,500 tokens).
