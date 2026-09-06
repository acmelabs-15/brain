---
package: rjm
path: scripts/eval/_report_aggregator.py
type: script
bytes: 26483
unit: inv-rjm-221
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_report_aggregator.py

## Purpose — required, verbatim
> "ReportAggregator: recall, bootstrap CI, distribution, flakiness." — scripts/eval/_report_aggregator.py:1

## Design intent — required
Provides statistical aggregation, recall computation, paired bootstrap confidence intervals (n=10,000 iterations), flakiness detection, cost estimation, and form-factor comparison for evaluation runs across prompt variants (`agent`, `baseline`, `skill`). It implements the statistical requirements of REQ-004 and ADR-058/ADR-075, computing signed recall deltas over assertion-level pass rates while excluding flaky fixtures when stable, halting when flakiness exceeds an N-aware threshold (`_flaky_halt_count`), and rendering form-factor verdicts (`prefer-agent-form`, `prefer-skill-form`, `inconclusive`) based on whether specialized agent structure provides measurable improvement over raw skill content or justifies its additional token cost. Without this module, evaluations would lack rigorous statistical bounds, failing to distinguish genuine agent specialization improvements from random LLM noise, token variance, or flaky test fixtures.

## Phase — required
none

## Inputs — required
- Run records:
  - `RunRecord` instances (imported from `_eval_agent_types`) — scripts/eval/_report_aggregator.py:26
- Pricing constants and functions:
  - `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` — scripts/eval/_report_aggregator.py:28,358
  - `PRICING_RATE_AS_OF` — scripts/eval/_report_aggregator.py:29,479
  - `cost_basis` — scripts/eval/_report_aggregator.py:30,480
- Exceptions from dependencies:
  - `UnsupportedModelError` — scripts/eval/_report_aggregator.py:32,360
- Configuration parameters:
  - `model_id: str` — scripts/eval/_report_aggregator.py:340,377
  - `bootstrap_iterations: int = BOOTSTRAP_ITERATIONS` — scripts/eval/_report_aggregator.py:378
  - `rng: random.Random | None = None` — scripts/eval/_report_aggregator.py:379,588
  - `flag_only_on_flaky_halt: bool = False` — scripts/eval/_report_aggregator.py:380
  - `provider: str | None = None` — scripts/eval/_report_aggregator.py:343,381
  - `exclude_fixture_ids: set[str] | None = None` — scripts/eval/_report_aggregator.py:589

## Outputs — required
- `AggregateResult` dataclass instance containing recall metrics, paired bootstrap CI, per-fixture pass rates, and cost estimates — scripts/eval/_report_aggregator.py:92,465
- `FormFactorComparison` dataclass instance containing 3 pairwise deltas, bootstrap CIs, per-variant token totals, and form-factor verdict — scripts/eval/_report_aggregator.py:508,640
- Exceptions:
  - `EmptyRunError` — scripts/eval/_report_aggregator.py:82,399,598
  - `ValueError` on mismatched fixtures or missing required variants — scripts/eval/_report_aggregator.py:155,167,603,611
  - `UnsupportedModelError` on unpriced model id — scripts/eval/_report_aggregator.py:360

## Invokes — required
- script _eval_agent_types — scripts/eval/_report_aggregator.py:26
- script _eval_common — scripts/eval/_report_aggregator.py:27
- script _plan_runner — scripts/eval/_report_aggregator.py:32

## Invoked by — required
- script _report_aggregator.py — scripts/eval/_plan_runner.py:4
- script _report_aggregator.py — scripts/eval/_eval_common.py:22
- doc ADR-058-agent-eval-discipline.md — .agents/architecture/ADR-058-agent-eval-discipline.md:196
- doc TASK-004-agent-eval-harness-spike.md — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:134

## Concepts named — required, verbatim
- `ReportAggregator` — scripts/eval/_report_aggregator.py:1 — defined here
- `Paired bootstrap` — scripts/eval/_report_aggregator.py:10 — used here
- `BOOTSTRAP_ITERATIONS` — scripts/eval/_report_aggregator.py:34 — defined here
- `FLAKY_FIXTURE_HALT_FRACTION` — scripts/eval/_report_aggregator.py:41 — defined here
- `FLAKY_HALT_SMALL_N_FLOOR` — scripts/eval/_report_aggregator.py:48 — defined here
- `CONTINGENCY_PERSISTENT_THRESHOLD` — scripts/eval/_report_aggregator.py:51 — defined here
- `HEADLINE_VARIANTS` — scripts/eval/_report_aggregator.py:52 — defined here
- `EmptyRunError` — scripts/eval/_report_aggregator.py:82 — defined here
- `AggregateResult` — scripts/eval/_report_aggregator.py:92 — defined here
- `pairwise_bootstrap_ci` — scripts/eval/_report_aggregator.py:284 — defined here
- `FormFactorVerdict` — scripts/eval/_report_aggregator.py:499 — defined here
- `FORM_FACTOR_EQUIVALENCE_CI_HALF_WIDTH_LIMIT` — scripts/eval/_report_aggregator.py:500 — defined here
- `FORM_FACTOR_MIN_COST_SAVINGS_FRACTION` — scripts/eval/_report_aggregator.py:504 — defined here
- `FormFactorComparison` — scripts/eval/_report_aggregator.py:508 — defined here
- `compute_form_factor` — scripts/eval/_report_aggregator.py:584 — defined here

## Structure
- Module docstring (lines 1-18)
- Imports and module constants (lines 20-53)
- Flaky halt calculation: def _flaky_halt_count (lines 55-79)
- class EmptyRunError(Exception) (lines 82-89)
- class AggregateResult (lines 91-127)
- Helper functions: grouping, filtering, validation, per-run pass rate (lines 129-195)
- Flakiness detection: def _detect_flaky_fixtures, def _variant_is_flaky (lines 197-239)
- Recall and percentile calculation: def _recall_from_grouped, def _percentile (lines 241-282)
- Bootstrap confidence interval: def pairwise_bootstrap_ci, def _paired_bootstrap_ci (lines 284-337)
- Cost estimation: def _cost_estimate (lines 339-368)
- class ReportAggregator (lines 370-486)
- Form-factor comparison: constants and FormFactorComparison (lines 488-533)
- Form-factor helpers and verdict determination: def _tokens_for_variant, def _form_factor_verdict (lines 535-582)
- Entry point: def compute_form_factor (lines 584-655)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_report_aggregator.py`, language: `Python`, lines: 656
- documented invocation (verbatim, path:line):
  > "ReportAggregator: recall, bootstrap CI, distribution, flakiness." — scripts/eval/_report_aggregator.py:1
  > "Repeat n=10000 times. The 95% CI is the [2.5, 97.5] percentile of" — scripts/eval/_report_aggregator.py:12
  > "Minimum flaky-fixture count that halts the methodology." — scripts/eval/_report_aggregator.py:56
- executed: yes
- actual command run: `python3 sources/rjm/scripts/eval/_report_aggregator.py`
  abridged stdout: `(no output)`
  actual exit code: `0`
- functional execution test command:
  `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _report_aggregator; print(_report_aggregator._flaky_halt_count(10), _report_aggregator._flaky_halt_count(30))"`
  stdout: `5 10`
  actual exit code: `0`
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented exit codes: none (library aggregation module). Actual exit paths: no `sys.exit()`, `exit()`, or `process.exit` calls in code. Direct execution terminates with exit code 0. Failure paths raise exceptions: `EmptyRunError` (lines 399, 598), `ValueError` (lines 155, 167, 603, 611), `UnsupportedModelError` (line 360).
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone CLI validator or gate; it is an evaluation aggregation module. Direct execution exits 0 cleanly.
- does the output match what the documentation claims? one line
  Yes; direct execution produces no output and exits 0, while aggregation and threshold functions correctly implement documented statistical formulas and N-aware halt floors.

## Defects — required
none

## Observations
- Standalone percentile function: implements `_percentile` using linear interpolation (lines 270-282) so the harness avoids heavy external dependencies like NumPy while maintaining deterministic statistics.
- N-aware flakiness halting logic: formula `max((30 * N) // 100 + 1, min(5, N // 2))` raises the halt floor on small corpora (N=10 requires 5 flaky fixtures rather than 4) while preserving the strict >30% threshold at scale.
- Dual cost accounting support: accounts for token usage in USD when per-token rates are available, or switches to a requests-based allowance accounting (`cost_basis: "requests"`) when using quota-metered endpoints like GitHub Models.
- Form-factor comparison logic in `_form_factor_verdict` (lines 544-582) prioritizes clear performance wins, then enforces an equivalence interval half-width limit (<= 0.10) before evaluating cost savings (> 1% token savings) to choose between agent prompt and skill form.

## Context cost
26,483 bytes (~6,620 tokens). Total with immediate sibling imports (`_eval_agent_types.py`, `_eval_common.py`, `_plan_runner.py`): ~62,382 bytes (~15,595 tokens).
