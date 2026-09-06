---
package: rjm
path: scripts/eval/_e2e_delivery_core.py
type: script
bytes: 13923
unit: inv-rjm-216
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_e2e_delivery_core.py

## Purpose — required, verbatim
> "Pure core for the end-to-end delivery eval (issue #2859)." — scripts/eval/_e2e_delivery_core.py:1

## Design intent — required
Provides pure, deterministic logic for the end-to-end delivery evaluation benchmark (`eval-e2e-delivery.py`), implementing the plan-rubric proxy harness specified in issue #2859. The module separates the offline scoring mechanics from network and API calls so that fixture validation, prompt assembly, scorecard JSON extraction, and cross-agent aggregation can be unit-tested without external dependencies. By scoring an agent's planned response to an intentionally under-specified ask against hidden acceptance criteria derived from real merged PRs across five rubric axes (scope, completeness, process_gates, decomposition, correct_stop; 11 points maximum), it evaluates whether an agent can design complete, disciplined deliveries without hallucinating scope or failing to ask clarifying questions when ambiguous.

## Phase — required
none

## Inputs — required
- Fixture schema definitions: JSON document string parsed by `load_fixtures` containing fixture id, prompt, kind, and hidden acceptance criteria — scripts/eval/_e2e_delivery_core.py:50-60, 122
- Vague user task: initial germ string passed to build_agent_user_message — scripts/eval/_e2e_delivery_core.py:153
- Agent plan text: plan string emitted by the agent under test — scripts/eval/_e2e_delivery_core.py:210
- Judge model response: raw text string parsed by parse_judge_response — scripts/eval/_e2e_delivery_core.py:252
- Scored evaluation records: list of dictionaries aggregated by aggregate function — scripts/eval/_e2e_delivery_core.py:286

## Outputs — required
- Agent message prompt: formatted prompt string instructing the agent to produce an engineering plan or state clarifying questions — scripts/eval/_e2e_delivery_core.py:153-167
- Judge system prompt: system prompt string defining the five rubric axes and JSON output schema — scripts/eval/_e2e_delivery_core.py:169-208
- Judge user prompt: formatted user turn combining the vague request, hidden acceptance criteria, and agent plan — scripts/eval/_e2e_delivery_core.py:210-224
- Parsed evaluation verdict: dictionary containing verdict status, clamped rubric axes points, total score, and rationale — scripts/eval/_e2e_delivery_core.py:252-280
- Aggregated benchmark report: summary dictionary containing per-fixture means, per-agent means, delta calculations, and parse error counts — scripts/eval/_e2e_delivery_core.py:286-341

## Invokes — required
none

## Invoked by — required
- script _e2e_delivery_core — scripts/eval/eval-e2e-delivery.py:50

## Concepts named — required, verbatim
- `end-to-end delivery eval` — scripts/eval/_e2e_delivery_core.py:1 — defined here
- `plan-rubric proxy` — scripts/eval/_e2e_delivery_core.py:8 — defined here
- `hidden_criteria` — scripts/eval/_e2e_delivery_core.py:16 — defined here
- `RUBRIC_AXES` — scripts/eval/_e2e_delivery_core.py:38 — defined here
- `MAX_SCORE` — scripts/eval/_e2e_delivery_core.py:45 — defined here
- `PARSE_ERROR` — scripts/eval/_e2e_delivery_core.py:62 — defined here
- `FixtureError` — scripts/eval/_e2e_delivery_core.py:65 — defined here
- `validate_fixture` — scripts/eval/_e2e_delivery_core.py:69 — defined here
- `load_fixtures` — scripts/eval/_e2e_delivery_core.py:122 — defined here
- `build_agent_user_message` — scripts/eval/_e2e_delivery_core.py:153 — defined here
- `build_judge_system` — scripts/eval/_e2e_delivery_core.py:169 — defined here
- `build_judge_user_message` — scripts/eval/_e2e_delivery_core.py:210 — defined here
- `parse_judge_response` — scripts/eval/_e2e_delivery_core.py:252 — defined here
- `aggregate` — scripts/eval/_e2e_delivery_core.py:286 — defined here

## Structure
- Docstring and rubric configuration constants — scripts/eval/_e2e_delivery_core.py:1-63
- `FixtureError` exception and `validate_fixture` function — scripts/eval/_e2e_delivery_core.py:65-120
- `load_fixtures` function — scripts/eval/_e2e_delivery_core.py:122-151
- Agent and judge prompt builder functions — scripts/eval/_e2e_delivery_core.py:153-224
- `_extract_json` helper and `parse_judge_response` function — scripts/eval/_e2e_delivery_core.py:226-280
- `_mean` calculation helper and `aggregate` function — scripts/eval/_e2e_delivery_core.py:282-341

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_e2e_delivery_core.py`
- language: Python
- lines: 341
- documented invocation:
> "Every function here is pure and API-free so the scoring, parsing, and aggregation logic is unit-testable without a network call" — scripts/eval/_e2e_delivery_core.py:11-12
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_e2e_delivery_core.py`, stdout: (empty), **actual exit code: 0**
- documented exit codes vs. actual exit paths: Module provides pure parsing, prompt assembly, and aggregation functions without a standalone CLI entry point or `sys.exit()` calls; raises `FixtureError` on schema violations (scripts/eval/_e2e_delivery_core.py:73, 78, 81, 85, 91, 96, 101, 105, 109, 116, 133, 140, 145, 148). Direct execution exits 0 cleanly.
- for validators/gates: Not a gate runner; pure scoring engine. Raises `FixtureError` on malformed evaluation fixtures.
- does output match documentation: Yes, module imports and defines evaluation core functions without side effects.

## Defects — required
none

## Observations
Enforces ground-truth discipline by requiring fixture hidden criteria to be derived from actual merged pull requests rather than agent prompt wording. It includes a self-consistency check (`(kind == "ambiguous") != bool(criteria["ambiguous_stop_expected"])`) that fails loudly if a test author accidentally misconfigures an ambiguous fixture. The JSON extraction logic uses non-greedy `raw_decode` to prevent parse failures when models append explanatory text after the closing brace.

## Context cost
13,923 bytes (~3,500 tokens). Standalone pure module depending only on Python standard library modules (`json`, `re`, `typing`).
