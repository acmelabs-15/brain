---
package: rjm
path: scripts/eval/eval-model-sweep.py
type: script
bytes: 22222
unit: inv-rjm-229
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-model-sweep.py

## Purpose — required, verbatim
> "Eval model-sweep runner (Issue #2840, acceptance criterion 2)." — scripts/eval/eval-model-sweep.py:2

## Design intent — required
Sweeps an agent's test fixtures across multiple candidate LLM models to provide empirical statistical evidence for or against pinning a model (`KEEP_PIN` vs `DROP_PIN`). It evaluates candidate models against the baseline default model (`claude-sonnet-4-6`) by executing `eval-agent-vs-baseline.py` child runs, parsing per-fixture pass rates, and applying effect-size thresholds via `_model_sweep_core.decide`. A `--dry-run` flag validates model ids, pricing availability, and fixtures directories without incurring API spend. Without this script, agent-model pinning decisions would rely on subjective preference or untested assumptions rather than measurable recall improvements exceeding the minimum effect threshold.

## Phase — required
none

## Inputs — required
- CLI argument `--agent` — scripts/eval/eval-model-sweep.py:398
- CLI argument `--fixtures` — path to fixtures directory — scripts/eval/eval-model-sweep.py:399
- CLI argument `--models` — comma-separated list of candidate model ids — scripts/eval/eval-model-sweep.py:402
- CLI argument `--default-model` — comparison baseline model id (default `"claude-sonnet-4-6"`) — scripts/eval/eval-model-sweep.py:69,408
- CLI argument `--n-runs` — number of runs per candidate model (default 3) — scripts/eval/eval-model-sweep.py:409
- CLI argument `--min-effect` — minimum recall delta over default model to justify pin (default 0.05) — scripts/eval/eval-model-sweep.py:411
- CLI argument `--seed` — random seed for bootstrap resampling — scripts/eval/eval-model-sweep.py:418
- CLI argument `--provider` — optional provider name override — scripts/eval/eval-model-sweep.py:419
- CLI argument `--child-timeout` — per-model wall-clock timeout in seconds (default 1800) — scripts/eval/eval-model-sweep.py:74,421
- CLI argument `--output` — destination path for JSON sweep artifact — scripts/eval/eval-model-sweep.py:431
- CLI argument `--dry-run` — validate inputs and print per-model plan without API calls — scripts/eval/eval-model-sweep.py:437
- Model pricing dictionary `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` from _eval_common — scripts/eval/eval-model-sweep.py:46,132
- Child evaluator report `report.json` — scripts/eval/eval-model-sweep.py:189
- Child report metrics `agent_recall`, `per_fixture_pass_rates`, and `fixture_set_sha` — scripts/eval/eval-model-sweep.py:223

## Outputs — required
- Decision verdict and reason emitted to stdout — scripts/eval/eval-model-sweep.py:548
- JSON report artifact written to file path specified by `--output` or default reports directory — scripts/eval/eval-model-sweep.py:431,551
- Dry-run execution plan printed to stdout when `--dry-run` is active — scripts/eval/eval-model-sweep.py:437,503

## Invokes — required
- script _eval_common — scripts/eval/eval-model-sweep.py:46
- script _model_sweep_core — scripts/eval/eval-model-sweep.py:47
- script eval-agent-vs-baseline.py — scripts/eval/eval-model-sweep.py:64

## Invoked by — required
- doc README.md — scripts/eval/README.md:97,395

## Concepts named — required, verbatim
- `Issue #2840` — scripts/eval/eval-model-sweep.py:2 — used here
- `eval-agent-vs-baseline.py` — scripts/eval/eval-model-sweep.py:11 — used here
- `_model_sweep_core` — scripts/eval/eval-model-sweep.py:12 — used here
- `ModelEvalRunner` — scripts/eval/eval-model-sweep.py:13,306 — defined here
- `SubprocessModelEvalRunner` — scripts/eval/eval-model-sweep.py:15,319 — defined here
- `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` — scripts/eval/eval-model-sweep.py:18,46 — used here
- `_eval_common.py` — scripts/eval/eval-model-sweep.py:18 — used here
- `Issue #2858` — scripts/eval/eval-model-sweep.py:19 — used here
- `AGENTS.md` — scripts/eval/eval-model-sweep.py:23 — used here
- `DEFAULT_MIN_EFFECT` — scripts/eval/eval-model-sweep.py:48 — used here
- `DEFAULT_SEED` — scripts/eval/eval-model-sweep.py:49 — used here
- `ModelResult` — scripts/eval/eval-model-sweep.py:50 — used here
- `SweepDecisionError` — scripts/eval/eval-model-sweep.py:51 — used here
- `build_report` — scripts/eval/eval-model-sweep.py:52 — used here
- `decide` — scripts/eval/eval-model-sweep.py:53 — used here
- `EXIT_OK` — scripts/eval/eval-model-sweep.py:56 — defined here
- `EXIT_LOGIC` — scripts/eval/eval-model-sweep.py:57 — defined here
- `EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:58 — defined here
- `EXIT_EXTERNAL` — scripts/eval/eval-model-sweep.py:59 — defined here
- `EXIT_AUTH` — scripts/eval/eval-model-sweep.py:60 — defined here
- `DEFAULT_MODEL` — scripts/eval/eval-model-sweep.py:69 — defined here
- `DEFAULT_CHILD_TIMEOUT_S` — scripts/eval/eval-model-sweep.py:74 — defined here
- `ChildRunError` — scripts/eval/eval-model-sweep.py:81 — defined here
- `_agent_name_arg` — scripts/eval/eval-model-sweep.py:93 — defined here
- `parse_models_arg` — scripts/eval/eval-model-sweep.py:101 — defined here
- `validate_models_priced` — scripts/eval/eval-model-sweep.py:130 — defined here
- `_sanitize_for_run_id` — scripts/eval/eval-model-sweep.py:135 — defined here
- `make_run_id` — scripts/eval/eval-model-sweep.py:140 — defined here
- `build_child_argv` — scripts/eval/eval-model-sweep.py:158 — defined here
- `child_report_path` — scripts/eval/eval-model-sweep.py:187 — defined here
- `_child_cost_usd` — scripts/eval/eval-model-sweep.py:192 — defined here
- `parse_report` — scripts/eval/eval-model-sweep.py:205 — defined here
- `_build_arg_parser` — scripts/eval/eval-model-sweep.py:390 — defined here
- `_plan_lines` — scripts/eval/eval-model-sweep.py:444 — defined here
- `_default_output_path` — scripts/eval/eval-model-sweep.py:453 — defined here
- `run_sweep` — scripts/eval/eval-model-sweep.py:461 — defined here
- `main` — scripts/eval/eval-model-sweep.py:560 — defined here

## Structure
- Module docstring with CLI description, pricing prerequisite, exit code contract, and usage example (lines 1-30)
- Imports and exit code constants (lines 32-60)
- Base script path, defaults, timeouts, and regex patterns (lines 62-78)
- Exception class `ChildRunError` (lines 81-91)
- Validation functions for agent name, models, and pricing: `_agent_name_arg`, `parse_models_arg`, `validate_models_priced` (lines 93-133)
- Run ID and child command builders: `_sanitize_for_run_id`, `make_run_id`, `build_child_argv`, `child_report_path` (lines 135-190)
- Report parser and validator: `_child_cost_usd`, `parse_report` (lines 192-304)
- Runner abstraction: `ModelEvalRunner` protocol and `SubprocessModelEvalRunner` (lines 306-388)
- Argument parser construction: `_build_arg_parser` (lines 390-441)
- Output planning and default report path: `_plan_lines`, `_default_output_path` (lines 444-459)
- Sweep execution workflow: `run_sweep` (lines 461-558)
- Entry point: `main` and invocation (lines 560-575)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/eval/eval-model-sweep.py`
- **language:** Python 3
- **lines:** 575
- **documented invocation:**
  > "eval-model-sweep.py --agent security --fixtures tests/evals/skills/security" — scripts/eval/eval-model-sweep.py:28
  > "--models claude-sonnet-4-6,claude-opus-4-6 --n-runs 3" — scripts/eval/eval-model-sweep.py:29
  > "scripts/eval/eval-model-sweep.py" — scripts/eval/README.md:395
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/eval/eval-model-sweep.py --agent security --fixtures sources/rjm/evals/security-spike/fixtures --models claude-sonnet-4-6,claude-opus-4-6 --dry-run`
- **stdout:**
  ```text
  sweep plan: agent=security fixtures=sources/rjm/evals/security-spike/fixtures n_runs=3
  models (2):
    - claude-sonnet-4-6
    - claude-opus-4-6
  ```
- **actual exit code:** 0
- **documented exit codes:**
  > "Exit codes (AGENTS.md): 0 ok, 1 logic, 2 config, 3 external, 4 auth. A child" — scripts/eval/eval-model-sweep.py:23
  > "run's exit-code class (1/2/4) is preserved; any other child failure surfaces" — scripts/eval/eval-model-sweep.py:24
  > "as 3 (external) to the sweep." — scripts/eval/eval-model-sweep.py:25
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:472
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:484
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:488
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:495
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:499
  - `return EXIT_OK` — scripts/eval/eval-model-sweep.py:504
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:511
  - `return exc.returncode` — scripts/eval/eval-model-sweep.py:523
  - `return EXIT_EXTERNAL` — scripts/eval/eval-model-sweep.py:524
  - `return EXIT_CONFIG` — scripts/eval/eval-model-sweep.py:535
  - `return EXIT_EXTERNAL` — scripts/eval/eval-model-sweep.py:554
  - `return EXIT_OK` — scripts/eval/eval-model-sweep.py:557
  - `sys.exit(main())` — scripts/eval/eval-model-sweep.py:574
- **for validators/gates:** Serves as an empirical gatekeeper for agent model pinning; exits non-zero on configuration errors, unpriced models, missing fixtures (exit 2), or child evaluation failures (retaining child exit codes 1, 2, 4 or mapping to exit 3).
- **output matches documentation:** partially; dry-run outputs expected plan when provided existing fixtures directory, but executing documented usage example directly fails because `--fixtures tests/evals/skills/security` does not exist.

## Defects — required
- missing-path · scripts/eval/eval-model-sweep.py:28 · Documented usage example specifies `--fixtures tests/evals/skills/security`, which does not exist in the repository; the correct fixtures directory is `evals/security-spike/fixtures` as documented in `scripts/eval/README.md:397`. Running the documented command fails with exit 2 (`error: fixtures path not found: tests/evals/skills/security`).
- doc-drift · scripts/eval/eval-model-sweep.py:28 · Docstring CLI usage example differs from `scripts/eval/README.md:397` which correctly references `evals/security-spike/fixtures`.

## Observations
Enforces a strict pre-flight pricing check against `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` from `_eval_common.py` (issue #2858) before launching child processes, halting immediately if any candidate model lacks verified pricing rates. Implements a `Protocol`-based `ModelEvalRunner` allowing complete test coverage of decision logic and artifact generation with offline mock data without incurring live API costs.

## Context cost
22222 bytes, ~5555 tokens. Loads `_eval_common.py` (26483 bytes) and `_model_sweep_core.py` (20185 bytes). Total context cost: ~68890 bytes (~17220 tokens).
