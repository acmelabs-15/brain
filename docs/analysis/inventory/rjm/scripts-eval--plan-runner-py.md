---
package: rjm
path: scripts/eval/_plan_runner.py
type: script
bytes: 5256
unit: inv-rjm-220
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_plan_runner.py

## Purpose — required, verbatim
> "PlanRunner: cost + scope estimation. DESIGN-004 §5.3a." — scripts/eval/_plan_runner.py:1

## Design intent — required
Provides execution scope and token/dollar cost estimation for agent and prompt evaluation runs before incurring API spend. Evaluator runs across multiple fixtures, variants (agent, baseline, skill), and repetition runs can be expensive and unpredictable without pre-flight estimation. `PlanRunner` calculates total planned calls (`len(fixtures) * len(variants) * n_runs`), estimates token consumption using a calibrated 70/30 input/output heuristic based on observed spike traces, looks up model pricing rates from `MODEL_PRICING_RATES_USD_PER_1K_TOKENS`, and formats dry-run output locked by test assertions (accounting for request-basis quota billing vs per-token USD pricing). Without it, eval runs would lack pre-flight cost guardrails, dry-run validation, and transparent pricing governance.

## Phase — required
none

## Inputs — required
- Sequence of `Fixture` objects to evaluate — scripts/eval/_plan_runner.py:67
- Model identifier string (`model_id`) — scripts/eval/_plan_runner.py:68
- Run repetition count `n_runs`, defaulting to 3 — scripts/eval/_plan_runner.py:69
- Tuple of variant strings (`"agent"`, `"baseline"`, `"skill"`), defaulting to `VARIANTS` — scripts/eval/_plan_runner.py:70
- Optional provider name string for cost basis resolution — scripts/eval/_plan_runner.py:71
- External pricing tables and token heuristics imported from `_eval_common` — scripts/eval/_plan_runner.py:13

## Outputs — required
- `ExecutionPlan` dataclass instance containing planned calls, token estimates, cost, and rate timestamps — scripts/eval/_plan_runner.py:97-108
- Formatted plan line strings for `--dry-run` console reporting — scripts/eval/_plan_runner.py:111-132

## Invokes — required
- script _eval_agent_types — scripts/eval/_plan_runner.py:12
- script _eval_common — scripts/eval/_plan_runner.py:13

## Invoked by — required
- script _plan_runner — scripts/eval/eval-agent-vs-baseline.py:50
- script _plan_runner — scripts/eval/_report_aggregator.py:32
- script _plan_runner.py — scripts/eval/_eval_common.py:22

## Concepts named — required, verbatim
- `PlanRunner` — scripts/eval/_plan_runner.py:1 — defined here
- `DESIGN-004` — scripts/eval/_plan_runner.py:1 — used here
- `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` — scripts/eval/_plan_runner.py:3 — used here
- `PRICING_RATE_AS_OF` — scripts/eval/_plan_runner.py:3 — used here
- `ExecutionPlan` — scripts/eval/_plan_runner.py:12 — used here
- `Fixture` — scripts/eval/_plan_runner.py:12 — used here
- `VariantLiteral` — scripts/eval/_plan_runner.py:12 — used here
- `EST_TOKENS_PER_CALL` — scripts/eval/_plan_runner.py:14 — used here
- `cost_basis` — scripts/eval/_plan_runner.py:17 — used here
- `ADR-058` — scripts/eval/_plan_runner.py:20 — used here
- `VARIANTS` — scripts/eval/_plan_runner.py:25 — defined here
- `FORM_FACTOR_VARIANTS` — scripts/eval/_plan_runner.py:29 — defined here
- `SUPPORTED_VARIANTS` — scripts/eval/_plan_runner.py:30 — defined here
- `UnsupportedModelError` — scripts/eval/_plan_runner.py:41 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_plan_runner.py`, language: Python, lines: 133
- documented invocation: none (utility module defining `PlanRunner` class with static methods `build_plan` and `format_plan_lines`; imported by `scripts/eval/eval-agent-vs-baseline.py:50`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_plan_runner.py`, stdout: (empty), **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: library module without `sys.exit()` or `exit()` calls; raises `UnsupportedModelError` (scripts/eval/_plan_runner.py:55) or `ValueError` (scripts/eval/_plan_runner.py:74, 76, 78, 83, 86) on invalid inputs; exits 0 on direct module execution
- for validators/gates: not a validator or gate; performs cost and token estimation; running module directly exits 0
- does the output match what the documentation claims? yes, loads and executes without error

## Defects — required
none

## Observations
- Provider billing model differentiation: inspects `cost_basis(provider)` to handle request-based quota billing (`basis="requests"`) distinctly from per-token billing, outputting `cost_estimate_requests=N basis=requests` to avoid falsely reporting zero cost (scripts/eval/_plan_runner.py:91-94, 118-122).
- Empirically calibrated token heuristics: partitions token estimates into 70% input and 30% output based on observed v1 and v2 spike traces where outputs are constrained to short verdicts capped at 80 words by `OUTPUT_SHAPE_SUFFIX` (scripts/eval/_plan_runner.py:32-38, 45-49).

## Context cost
5256 bytes (plus 7902 bytes for `_eval_agent_types.py` and 8094 bytes for `_eval_common.py`, total 21252 bytes). Approximately 5313 tokens.
