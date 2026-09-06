---
package: rjm
path: scripts/eval/_optimizer_adapters.py
type: script
bytes: 27405
unit: inv-rjm-219
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_optimizer_adapters.py

## Purpose — required, verbatim
> "Turn each existing scorer's output into the `{task_id: bool}` gate input." — scripts/eval/_optimizer_adapters.py:1

## Design intent — required
`scripts/eval/_optimizer_adapters.py` provides normalization adapters that bridge heterogeneous evaluation harnesses (agent eval reports, rule activation scenarios, and pytest JUnit XML test suites) to the uniform `{task_id: bool}` interface required by `_optimizer_core.score` and the `optimize-artifact.py` held-out gate. Without these adapters, the optimizer would either need artifact-specific gating logic intertwined with search and split algorithms, or evaluations would risk false acceptance from measurement omissions. Crucially, the adapters enforce a strict fail-closed contract: skipped tests, unexecuted scenarios, judge failures, and missing fixtures are refused (or treated as absence of evidence rather than zero-cost passes) to prevent shrinking denominators from artificially inflating scores and generating spurious optimization wins.

## Phase — required
none

## Inputs — required
Function parameters and data structures consumed by each adapter:
- `agent_results`:
  - `report: Mapping[str, Any]` — parsed `report.json` carrying `per_fixture_pass_rates: {fixture_id: {variant: [rate, ...]}}` where each rate is a float fraction in `[0.0, 1.0]`.
  - `variant: str` — variant column name to evaluate (e.g. `"agent"` or `"baseline"`).
  - `reduce: str` (default `_DEFAULT_REDUCER = "mean"`) — aggregation method across repeated runs (`"mean"`, `"min"`, `"max"`, `"median"`).
  - `pass_threshold: float` (default `1.0`) — score threshold in `[0.0, 1.0]` at or above which a fixture passes.
  - `expected_task_ids: Sequence[str] | None` (default `None`) — optional authoritative list of fixture IDs; enforces exact inventory match (no missing or unexpected fixtures).
- `rule_results`:
  - `scenarios: Sequence[Mapping[str, Any]]` — list of scenario records, each containing `id`, `negative_case`, and `mechanisms[mechanism]["scores"]` or `"score_samples"` with integer scores `[0, 5]` for `activation_score`, `citation_score`, and `behavior_score`.
  - `mechanism: str` — mechanism column name (e.g. `"full"`, `"description"`, `"baseline"`).
  - `min_score: float` (default `DEFAULT_MIN_ACTIVATION_SCORE = 3.5`) — threshold for the mean of the three judge scores in `[0.0, 5.0]`.
  - `reduce: str` (default `_DEFAULT_SAMPLE_REDUCER = "median"`) — reducer across repeated judge samples per score key.
- `rule_results_multi`:
  - `runs: Sequence[Sequence[Mapping[str, Any]]]` — sequence of whole-run scenario evaluations.
  - `mechanism: str` — mechanism column name.
  - `min_score: float` (default `DEFAULT_MIN_ACTIVATION_SCORE = 3.5`).
  - `reduce: str` (default `_DEFAULT_REDUCER = "mean"`) — reducer across runs.
  - `reduce_samples: str` (default `_DEFAULT_SAMPLE_REDUCER = "median"`) — reducer across samples within each run.
- `pytest_results`:
  - `junit_xml: str` — XML text from pytest `--junitxml` report with `<testsuite>` or `<testsuites>` root.
  - `on_skip: str` (default `_DEFAULT_SKIP_POLICY = "fail"`) — skip handling policy (`"fail"` or `"exclude"`), though skipped tests always raise `AdapterError`.

## Outputs — required
Uniform boolean evaluation mappings and validation exceptions:
- Mapping `dict[str, bool]`:
  - For `agent_results`: `{fixture_id: bool}` indicating whether reduced pass rate >= `pass_threshold`.
  - For `rule_results` / `rule_results_multi`: `{scenario_id: bool}` indicating whether reduced judge score >= `min_score` (and evidence was present).
  - For `pytest_results`: `{node_id: bool}` mapping `classname::name` to pass (`True`) or failure (`False`).
- Exceptions:
  - `AdapterError(ValueError)` — raised when report shapes, types, score boundaries, task inventories, or XML structures are invalid, or when measurements are missing or skipped.

## Invokes — required
none

## Invoked by — required
- script _optimizer_adapters — scripts/eval/optimize-artifact.py:72
- doc scripts/eval/README.md — scripts/eval/README.md:99

## Concepts named — required, verbatim
- `task_id` — scripts/eval/_optimizer_adapters.py:1 — used here
- `held-out gate` — scripts/eval/_optimizer_adapters.py:4 — used here
- `_optimizer_core.score` — scripts/eval/_optimizer_adapters.py:3 — used here
- `eval-rule-activation.py` — scripts/eval/_optimizer_adapters.py:9 — used here
- `pytest --junitxml` — scripts/eval/_optimizer_adapters.py:10 — used here
- `ACCEPT` — scripts/eval/_optimizer_adapters.py:21 — used here
- `AdapterError` — scripts/eval/_optimizer_adapters.py:78 — defined here
- `DEFAULT_MIN_ACTIVATION_SCORE` — scripts/eval/_optimizer_adapters.py:45 — defined here
- `_REDUCERS` — scripts/eval/_optimizer_adapters.py:47 — defined here
- `_SKIP_POLICIES` — scripts/eval/_optimizer_adapters.py:54 — defined here
- `_DEFAULT_SKIP_POLICY` — scripts/eval/_optimizer_adapters.py:60 — defined here
- `_DEFAULT_REDUCER` — scripts/eval/_optimizer_adapters.py:61 — defined here
- `_DEFAULT_SAMPLE_REDUCER` — scripts/eval/_optimizer_adapters.py:66 — defined here
- `_RULE_SCORE_KEYS` — scripts/eval/_optimizer_adapters.py:68 — defined here
- `activation_score` — scripts/eval/_optimizer_adapters.py:68 — used here
- `citation_score` — scripts/eval/_optimizer_adapters.py:68 — used here
- `behavior_score` — scripts/eval/_optimizer_adapters.py:68 — used here
- `_MAX_RULE_SCORE` — scripts/eval/_optimizer_adapters.py:73 — defined here
- `_MAX_PASS_RATE` — scripts/eval/_optimizer_adapters.py:75 — defined here
- `_as_float` — scripts/eval/_optimizer_adapters.py:82 — defined here
- `REJECT` — scripts/eval/_optimizer_adapters.py:107 — used here
- `_as_rate` — scripts/eval/_optimizer_adapters.py:125 — defined here
- `_as_rule_score` — scripts/eval/_optimizer_adapters.py:129 — defined here
- `agent_results` — scripts/eval/_optimizer_adapters.py:145 — defined here
- `per_fixture_pass_rates` — scripts/eval/_optimizer_adapters.py:156 — used here
- `_rule_run_scores` — scripts/eval/_optimizer_adapters.py:244 — defined here
- `judge_failed` — scripts/eval/_optimizer_adapters.py:331 — used here
- `score_samples` — scripts/eval/_optimizer_adapters.py:336 — used here
- `rule_results` — scripts/eval/_optimizer_adapters.py:412 — defined here
- `rule_results_multi` — scripts/eval/_optimizer_adapters.py:464 — defined here
- `ADR-087` — scripts/eval/_optimizer_adapters.py:476 — used here
- `pytest_results` — scripts/eval/_optimizer_adapters.py:559 — defined here

## Structure
- Module docstring (lines 1-24)
- Imports and __all__ (lines 26-40)
- DEFAULT_MIN_ACTIVATION_SCORE constant (lines 42-45)
- Reducer and policy constants: _REDUCERS, _SKIP_POLICIES, _DEFAULT_SKIP_POLICY, _DEFAULT_REDUCER, _DEFAULT_SAMPLE_REDUCER, _RULE_SCORE_KEYS, _MAX_RULE_SCORE, _MAX_PASS_RATE (lines 47-75)
- class AdapterError(ValueError) (lines 78-79)
- def _as_float(value: object, context: str, *, lo: float, hi: float) -> float (lines 82-122)
- def _as_rate(value: object, context: str) -> float (lines 125-126)
- def _as_rule_score(value: object, context: str) -> int (lines 129-142)
- def agent_results(report: Mapping[str, Any], variant: str, *, reduce: str = _DEFAULT_REDUCER, pass_threshold: float = 1.0, expected_task_ids: Sequence[str] | None = None) -> dict[str, bool] (lines 145-241)
- def _rule_run_scores(scenarios: Sequence[Mapping[str, Any]], mechanism: str, *, reduce_samples: str = _DEFAULT_SAMPLE_REDUCER) -> dict[str, float | None] (lines 244-409)
- def rule_results(scenarios: Sequence[Mapping[str, Any]], mechanism: str, *, min_score: float = DEFAULT_MIN_ACTIVATION_SCORE, reduce: str = _DEFAULT_SAMPLE_REDUCER) -> dict[str, bool] (lines 412-461)
- def rule_results_multi(runs: Sequence[Sequence[Mapping[str, Any]]], mechanism: str, *, min_score: float = DEFAULT_MIN_ACTIVATION_SCORE, reduce: str = _DEFAULT_REDUCER, reduce_samples: str = _DEFAULT_SAMPLE_REDUCER) -> dict[str, bool] (lines 464-556)
- def pytest_results(junit_xml: str, *, on_skip: str = _DEFAULT_SKIP_POLICY) -> dict[str, bool] (lines 559-609)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_optimizer_adapters.py`, Python 3, 610 lines
- documented invocation: none (internal adapter library module with leading underscore in filename, imported by `optimize-artifact.py:72`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_optimizer_adapters.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none documented or defined in file; no `sys.exit()` or `exit()` calls in code (0 exit calls; raises `AdapterError` on invalid inputs)
- for validators/gates: module executes definitions and exits 0; internal functions perform validation and raise `AdapterError(ValueError)` upon invalid inputs, missing fixtures, or skipped/errored tests
- does the output match what the documentation claims? yes, converts evaluation reports to uniform `{task_id: bool}` dictionaries and enforces strict fail-closed validation

## Defects — required
- other · scripts/eval/_optimizer_adapters.py:34 · `rule_results_multi` (defined at line 464) is omitted from `__all__` (lines 34-40), preventing wildcard imports and drifting from the module's public export list despite being a documented adapter entry point.
- other · scripts/eval/_optimizer_adapters.py:569 · `pytest_results` documents and accepts `on_skip` (validated against `_SKIP_POLICIES = ("fail", "exclude")` at line 580), but `on_skip="exclude"` cannot exclude skipped tests because `case.find("skipped") is not None` unconditionally raises `AdapterError` (lines 598-602), rendering `"exclude"` dead.

## Observations
- Fail-closed defense against denominator shrinkage: the module docstring notes that omitting unexecuted fixtures, judge errors, or skipped tests shrinks the denominator and artificially inflates scores; adapters strictly refuse missing fixtures and skipped tests (`testcase ... was skipped; a measurement not taken is not a measurement of zero`).
- Multi-run noise defense: `rule_results_multi` addresses LLM judge variance measured in ADR-087 Open Requirement 6 (where re-scoring identical rule text shifted scores on 13 of 24 tasks by an average of 0.49 points). It employs median reduction across judge samples to suppress single-call anomalies, followed by mean reduction across runs before applying `min_score`.
- Strict type validation: `_as_float` explicitly rejects booleans (`isinstance(True, int)` is True in Python) to prevent boolean flags from masquerading as 1.0 or 0.0 scores, and enforces finiteness checks to eliminate NaN/Infinity comparison exploits.
- Symmetric negative-case normalization: judge scoring in `eval-rule-activation.py` is structured so that 5 always represents correct behavior (including for negative cases where 5 denotes correctly NOT activating); the adapter preserves this scale without inverting negative scenarios.

## Context cost
27,405 bytes. Approximately 6,850 tokens. Loads no repository dependencies when imported (uses Python standard library `math`, `statistics`, `collections.abc`, `typing`, `xml.etree.ElementTree`).
