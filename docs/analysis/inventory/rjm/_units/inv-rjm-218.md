---
unit: inv-rjm-218
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-218

## Files assigned
- [x] sources/rjm/scripts/eval/_model_panel_core.py
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/_oneshot_bench_core.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval--model-panel-core-py.md (6728 bytes)
- docs/analysis/inventory/rjm/scripts-eval--model-sweep-core-py.md (7097 bytes)
- docs/analysis/inventory/rjm/scripts-eval--oneshot-bench-core-py.md (6602 bytes)

## Scripts executed
- scripts/eval/_model_panel_core.py: `python3 sources/rjm/scripts/eval/_model_panel_core.py`, exit code 0
- scripts/eval/_model_panel_core.py: `python3 -c 'import sys; sys.path.insert(0, "sources/rjm/scripts/eval"); import _model_panel_core as mpc; p = mpc.default_panel(); print(p.drop_threshold); print(mpc.to_human(p, []))'`, exit code 0
- scripts/eval/_model_sweep_core.py: `python3 sources/rjm/scripts/eval/_model_sweep_core.py`, exit code 0
- scripts/eval/_model_sweep_core.py: `python3 -c 'import sys; sys.path.insert(0, "sources/rjm/scripts/eval"); import _model_sweep_core as msc; r1 = msc.ModelResult("default", 0.8, {"f1": [0.8], "f2": [0.8]}); r2 = msc.ModelResult("cand", 0.9, {"f1": [0.9], "f2": [0.9]}); d = msc.decide([r1, r2], default_model="default"); print(f"{d.decision} winner={d.winner_model} delta={d.recall_delta:.4f}")'`, exit code 0
- scripts/eval/_oneshot_bench_core.py: `python3 sources/rjm/scripts/eval/_oneshot_bench_core.py`, exit code 0
- scripts/eval/_oneshot_bench_core.py: `python3 -c 'import sys; sys.path.insert(0, "sources/rjm/scripts/eval"); import _oneshot_bench_core as obc; jv = obc.parse_judge_response("{\"grade\": \"FULL\", \"edges_caught\": [\"suppression\"], \"edges_missed\": [], \"reasoning\": \"handles edge correctly\"}"); print(f"grade={jv.grade} failed={jv.judge_failed} edges={jv.edges_caught}")'`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All three files represent pure core evaluation logic modules (`_model_panel_core.py`, `_model_sweep_core.py`, `_oneshot_bench_core.py`) in `scripts/eval/`, separated intentionally from CLI runners and live API I/O in `eval-model-panel.py`, `eval-model-sweep.py`, and `eval-oneshot-vs-shipped.py`.
- `_model_sweep_core.py` deliberately duplicates `_percentile` from `_report_aggregator.py` to decouple from a private internal helper, while still importing standard bootstrap constants (`BOOTSTRAP_ITERATIONS`, `CI_LOWER_PERCENTILE`, `CI_UPPER_PERCENTILE`).
- `build_report()` in `_model_sweep_core.py` defines the canonical schema (`SCHEMA_VERSION = "1"`) enforced by CI governance (`build/model_pin_sweep_evidence.py`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,050 tokens (44,241 bytes across 3 files).
Approximate tokens of output written: ~5,100 tokens (20,427 bytes across 3 cards and unit report).
