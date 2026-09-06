---
package: rjm
path: scripts/eval/_run_rollup_core.py
type: script
bytes: 12580
unit: inv-rjm-223
in_scope_via: scripts/eval/eval_run_rollup.py
aliases: []
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_run_rollup_core.py

## Purpose — required, verbatim
> "Data model and aggregation for the eval-run rollup (issue #2787)." — scripts/eval/_run_rollup_core.py:1

## Design intent — required
Provides the data model and aggregation engine that computes cross-run agent performance metrics from individual evaluation log files (`evals/<agent>-spike/runs/<RUN_ID>/runs.jsonl`). It derives per-agent aggregates for latency, token consumption, and USD costs (via shared model pricing rates) and flags outlier drift for runs exceeding N standard deviations from their agent's mean without altering the on-disk `RunRecord` schema or bumping `schemaVersion`. Follows graceful degradation patterns by counting and skipping unparseable files, malformed JSONL lines, or unpriced models rather than terminating execution.

## Phase — required
rjm:eval

## Inputs — required
- Evaluation run log directories located under `evals/<agent>-spike/runs/<RUN_ID>/` matching glob `DEFAULT_GLOB` — scripts/eval/_run_rollup_core.py:38
- Evaluation JSONL run records parsed in `_coerce_record()` containing required fields `model_id`, `variant`, `fixture_id`, `latency_ms`, `tokens_in`, `tokens_out` — scripts/eval/_run_rollup_core.py:193-199
- Record outcome field — scripts/eval/_run_rollup_core.py:228
- Shared model pricing rate table `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` and pricing date string `PRICING_RATE_AS_OF` imported from `_eval_common` — scripts/eval/_run_rollup_core.py:33-36
- Function arguments to `rollup()`: root directory `root: Path`, search pattern `glob: str = DEFAULT_GLOB`, outlier threshold `sigma: float = DEFAULT_SIGMA`, and optional agent filter `agent_filter: str | None = None` — scripts/eval/_run_rollup_core.py:342-347

## Outputs — required
- In-memory data structures returned by `rollup()`:
  - `RollupResult` containing list of `AgentRollup` records, list of `DriftFlag` records, scanned and counted file/run tallies, and skip metrics — scripts/eval/_run_rollup_core.py:127
  - `AgentRollup` aggregate instance — scripts/eval/_run_rollup_core.py:79
  - `DriftFlag` metric threshold instance — scripts/eval/_run_rollup_core.py:114
  - `RunTally` records per parsed run row — scripts/eval/_run_rollup_core.py:59

## Invokes — required
- script _eval_common — scripts/eval/_run_rollup_core.py:33

## Invoked by — required
- script _run_rollup_core — scripts/eval/eval_run_rollup.py:28

## Concepts named — required, verbatim
- `eval-run rollup` — scripts/eval/_run_rollup_core.py:1 — defined here
- `RunPersistence` — scripts/eval/_run_rollup_core.py:3 — used here
- `latency_ms` — scripts/eval/_run_rollup_core.py:5 — used here
- `tokens_in` — scripts/eval/_run_rollup_core.py:6 — used here
- `tokens_out` — scripts/eval/_run_rollup_core.py:6 — used here
- `issue #2787` — scripts/eval/_run_rollup_core.py:11 — used here
- `RunRecord` — scripts/eval/_run_rollup_core.py:15 — used here
- `schemaVersion` — scripts/eval/_run_rollup_core.py:16 — used here
- `release-it.md` — scripts/eval/_run_rollup_core.py:19 — used here
- `_eval_common` — scripts/eval/_run_rollup_core.py:33 — used here
- `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` — scripts/eval/_run_rollup_core.py:34 — used here
- `PRICING_RATE_AS_OF` — scripts/eval/_run_rollup_core.py:35 — used here
- `DEFAULT_GLOB` — scripts/eval/_run_rollup_core.py:38 — defined here
- `DEFAULT_SIGMA` — scripts/eval/_run_rollup_core.py:39 — defined here
- `cost_usd` — scripts/eval/_run_rollup_core.py:43 — defined here
- `RunTally` — scripts/eval/_run_rollup_core.py:59 — defined here
- `AgentRollup` — scripts/eval/_run_rollup_core.py:79 — defined here
- `DriftFlag` — scripts/eval/_run_rollup_core.py:114 — defined here
- `RollupResult` — scripts/eval/_run_rollup_core.py:127 — defined here
- `agent_from_path` — scripts/eval/_run_rollup_core.py:149 — defined here
- `run_id_from_path` — scripts/eval/_run_rollup_core.py:168 — defined here
- `_CoercedRecord` — scripts/eval/_run_rollup_core.py:174 — defined here
- `_coerce_record` — scripts/eval/_run_rollup_core.py:186 — defined here
- `iter_tallies` — scripts/eval/_run_rollup_core.py:232 — defined here
- `_build_agent_rollups` — scripts/eval/_run_rollup_core.py:279 — defined here
- `_drift_flags` — scripts/eval/_run_rollup_core.py:296 — defined here
- `rollup` — scripts/eval/_run_rollup_core.py:341 — defined here

## Structure
none (python module defining module constants, data classes, and aggregation functions: `DEFAULT_GLOB`, `DEFAULT_SIGMA`, `_SPIKE_SUFFIX`, `cost_usd`, `RunTally`, `AgentRollup`, `DriftFlag`, `RollupResult`, `agent_from_path`, `run_id_from_path`, `_CoercedRecord`, `_coerce_record`, `iter_tallies`, `_build_agent_rollups`, `_drift_flags`, `rollup`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_run_rollup_core.py`, language: Python 3, lines: 387
- documented invocation:
  - "from _run_rollup_core import (" — scripts/eval/eval_run_rollup.py:28
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_run_rollup_core.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (support module without CLI entrypoint; CLI is in `eval_run_rollup.py`).
  Actual exit paths in code: no `sys.exit` or `exit` calls; raises `ValueError` on line 354 if `sigma < 0`; exits 0 when loaded as a module.
- for validators/gates: can it exit non-zero? no (computational library module). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, imports cleanly and exports data structures and aggregation functions.

## Defects — required
none

## Observations
- In `cost_usd` (lines 43-56), unpriced models return `None` rather than raising an error, intentionally deviating from `_report_aggregator._cost_estimate` to gracefully handle historical eval runs.
- `agent_from_path` (lines 149-166) automatically strips the `-spike` suffix from the parent directory component (e.g., `devops-spike` -> `devops`) and provides a fallback to parent directory name for non-standard path layouts.
- In `_drift_flags` (lines 296-339), standard deviation checks require `stdev > 0.0` (at least two distinct samples), preventing false drift flags on uniform or single-sample runs.

## Context cost
12580 bytes (~3145 tokens). Loads `_eval_common.py` (8094 bytes, ~2024 tokens) and Python standard library modules (`json`, `math`, `statistics`, `dataclasses`, `pathlib`). Total context cost: ~20674 bytes (~5169 tokens).
