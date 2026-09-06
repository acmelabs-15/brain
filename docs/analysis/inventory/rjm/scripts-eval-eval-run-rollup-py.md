---
package: rjm
path: scripts/eval/eval_run_rollup.py
type: script
bytes: 8002
unit: inv-rjm-224
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval_run_rollup.py, sha256: 753a8fee7f7e9c6e8be84160aadeb914cc92a954b39e96c482c0214f422821ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval_run_rollup.py

## Purpose — required, verbatim
> "CLI and rendering for the eval-run rollup (issue #2787)." — scripts/eval/eval_run_rollup.py:2

## Design intent — required
Provides a command-line interface and rendering layer (human-readable table or structured JSON) for aggregating per-run cost, latency, and token metrics from eval harness JSONL logs. It calculates agent-level summary statistics and flags statistical outliers (runs exceeding mean + N*sigma) to detect regression or drift across agent evaluation spikes without modifying the underlying RunRecord schema.

## Phase — required
none

## Inputs — required
- `--root` CLI argument (directory holding `<agent>-spike/runs/<RUN_ID>/runs.jsonl`, defaults to `evals`) — scripts/eval/eval_run_rollup.py:198
- `--glob` CLI argument (glob under `--root` for run logs, defaults to `DEFAULT_GLOB`) — scripts/eval/eval_run_rollup.py:204
- `--sigma` CLI argument (drift threshold in standard deviations, defaults to `DEFAULT_SIGMA`) — scripts/eval/eval_run_rollup.py:209
- `--agent` CLI argument (filter for exact agent name) — scripts/eval/eval_run_rollup.py:214
- `--output-format` CLI argument (`human` or `json`, defaults to `human`) — scripts/eval/eval_run_rollup.py:220
- JSONL log files matching the glob under the root directory — scripts/eval/eval_run_rollup.py:190-191

## Outputs — required
- Formatted text table to stdout summarizing agent runs, errors, tokens, costs, and mean latency along with drift flags — scripts/eval/eval_run_rollup.py:133-184
- Formatted JSON output to stdout via `to_json` containing structured metrics when `--output-format json` is selected — scripts/eval/eval_run_rollup.py:89-130, 243

## Invokes — required
- script _run_rollup_core — scripts/eval/eval_run_rollup.py:28

## Invoked by — required
- script eval_run_rollup — tests/eval/test_eval_run_rollup.py:20
- script eval_run_rollup — scripts/eval/_run_rollup_core.py:9

## Concepts named — required, verbatim
- `eval-run rollup` — scripts/eval/eval_run_rollup.py:2 — defined here
- `RollupResult` — scripts/eval/eval_run_rollup.py:5 — used here
- `RunRecord` — scripts/eval/eval_run_rollup.py:10 — used here
- `AgentRollup` — scripts/eval/eval_run_rollup.py:31 — used here
- `DriftFlag` — scripts/eval/eval_run_rollup.py:32 — used here
- `RunTally` — scripts/eval/eval_run_rollup.py:34 — used here
- `AGENTS.md` — scripts/eval/eval_run_rollup.py:69 — used here

## Structure
- Module docstring and overview — scripts/eval/eval_run_rollup.py:1-11
- Bootstrap sys.path and imports — scripts/eval/eval_run_rollup.py:13-44
- Public module symbols export list — scripts/eval/eval_run_rollup.py:46-67
- Exit code constants — scripts/eval/eval_run_rollup.py:70-71
- _resolve_repo_dir path validation helper — scripts/eval/eval_run_rollup.py:74-86
- to_json machine-readable formatter — scripts/eval/eval_run_rollup.py:89-130
- to_human operator-facing formatter — scripts/eval/eval_run_rollup.py:133-184
- _parse_args CLI argument definition — scripts/eval/eval_run_rollup.py:187-222
- main entry point and execution flow — scripts/eval/eval_run_rollup.py:225-247
- Execution guard — scripts/eval/eval_run_rollup.py:249-251

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `scripts/eval/eval_run_rollup.py`, Python, 251 lines
- documented invocation (verbatim, path:line):
"Roll up per-run cost/latency/token tallies from the eval harness " — scripts/eval/eval_run_rollup.py:190
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
Command: `python3 scripts/eval/eval_run_rollup.py`
Abridged stdout:
```
Eval run rollup: 1776 run(s) across 27 log file(s), sigma=3, pricing as of 2026-08-01
agent                   runs  errs     tokens   cost_usd  mean_lat_ms
---------------------------------------------------------------------
analyst                  360     0     513908     2.5650       6615.6
architect                 96     0     385937     1.3181       4783.7
backlog-generator         48     0      47576     0.2282       4702.1
critic                    48     0      98485     0.3664       4169.1
devops                    96     0     122152     0.5181       4662.9
explainer                 48     0      48018     0.2440       5353.2
high-level-advisor        48     0      55549     0.2366       4231.9
implementer               48     0     117922     0.4485       5708.7
independent-thinker       48     0      50717     0.2926       6982.5
issue-feature-review      48     0      57174     0.2391       3947.3
memory                    48     0      98788     0.3632       3888.5
milestone-planner         48     0      53702     0.2923       6551.8
orchestrator              48     0      94047     0.3485       4055.3
qa                        96     0     347264     1.1808       4242.2
roadmap                   48     0      46362     0.2091       4659.0
security                 504     0    2270696     7.6886       5016.2
skillbook                 48     0      57115     0.2607       4829.6
task-decomposer           48     0      69939     0.2793       4182.5
---------------------------------------------------------------------
TOTAL                   1776     0    4535351    17.0790             

Drift flags (42), runs beyond mean + 3*sigma:
  analyst/agent/F001 [20260528T040743Z-643d1793]: latency_ms=24014.0000ms > 23099.8979ms
...
```
Actual exit code: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
Documented in code:
`EXIT_OK = 0` — scripts/eval/eval_run_rollup.py:70
`EXIT_CONFIG = 2` — scripts/eval/eval_run_rollup.py:71
Actual exit paths:
- `return EXIT_CONFIG` — scripts/eval/eval_run_rollup.py:231
- `return EXIT_CONFIG` — scripts/eval/eval_run_rollup.py:237
- `return EXIT_OK` — scripts/eval/eval_run_rollup.py:246
- `raise SystemExit(main())` — scripts/eval/eval_run_rollup.py:250
- for validators/gates: Not a gate or validator. Can exit non-zero (exits 2 on invalid root path or negative/NaN sigma).
- does the output match what the documentation claims? Yes, rolls up 1776 runs across 27 JSONL logs, aggregates token/cost/latency metrics by agent, and flags 42 runs exceeding 3 sigma drift.

## Defects — required
none

## Observations
The module separates rendering/CLI logic from aggregation, importing computation models from sibling `_run_rollup_core.py`. Re-exports public symbols via `__all__` so callers and tests can import either module interchangeably. Validates that `--root` does not traverse outside repository root via `_resolve_repo_dir`.

## Context cost
File is 8,002 bytes (251 lines). Sibling core `_run_rollup_core.py` is 12,580 bytes (382 lines). Total source is 20,582 bytes (~5,100 tokens).
