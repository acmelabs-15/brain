---
unit: inv-rjm-223
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-223

## Files assigned
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/_runtime_output.py
- [x] sources/rjm/scripts/eval/_runtime_parity.py
- [x] sources/rjm/scripts/eval/_scoring_engine.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval--run-rollup-core-py.md (6877 bytes)
- docs/analysis/inventory/rjm/scripts-eval--runtime-output-py.md (5927 bytes)
- docs/analysis/inventory/rjm/scripts-eval--runtime-parity-py.md (6308 bytes)
- docs/analysis/inventory/rjm/scripts-eval--scoring-engine-py.md (4788 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-223.md (2442 bytes)

## Scripts executed
- scripts/eval/_run_rollup_core.py: `python3 sources/rjm/scripts/eval/_run_rollup_core.py`, exit code 0
- scripts/eval/_runtime_output.py: `python3 sources/rjm/scripts/eval/_runtime_output.py`, exit code 0
- scripts/eval/_runtime_parity.py: `python3 sources/rjm/scripts/eval/_runtime_parity.py`, exit code 0
- scripts/eval/_scoring_engine.py: `python3 sources/rjm/scripts/eval/_scoring_engine.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/_run_rollup_core.py` provides the data model and aggregation engine for `eval_run_rollup.py`, computing token and USD cost aggregates and outlier drift flags across agent evaluation logs without modifying `RunRecord` schema.
- `scripts/eval/_runtime_output.py` and `scripts/eval/_runtime_parity.py` provide output event stream parsing, workspace isolation, agent profile sandboxing, and deterministic assertion evaluation for `eval_runtime_parity.py`.
- `scripts/eval/_scoring_engine.py` implements the extensible Strategy-based scoring engine specified in `DESIGN-004 §5.3` for `eval-agent-vs-baseline.py` and `variance-control.py`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,331 tokens (41,325 bytes across 4 source files).
Approximate tokens of output written: ~6,800 tokens (~27,000 bytes across 4 cards and unit report).
