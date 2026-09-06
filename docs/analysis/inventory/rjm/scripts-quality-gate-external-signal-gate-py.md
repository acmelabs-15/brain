---
package: rjm
path: scripts/quality_gate/external_signal_gate.py
type: script
bytes: 6754
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/external_signal_gate.py

## Purpose — required, verbatim
> "Build gate-aggregator signals from pytest status and agent verdicts." — scripts/quality_gate/external_signal_gate.py:2

## Design intent — required
Bridges deterministic CI test results (`pytest_status`) with ten subjective LLM agent review verdicts, translating and packaging them as inputs to `scripts/external_signals/gate_aggregator.py`. Built under the "closed-loop rule" (Issues #2108 / #1855) stipulating that no automated quality gate may pass solely on LLM verdicts, it guarantees that an external, ground-truth signal is present and satisfactory before a PR can achieve a passing status.

## Phase — required
rjm:review

## Inputs — required
- "PYTEST_STATUS" — scripts/quality_gate/external_signal_gate.py:30
- "SECURITY_VERDICT ... DECISION_RIGOR_VERDICT (10) - aggregated agent verdicts." — scripts/quality_gate/external_signal_gate.py:31

## Outputs — required
- "Exit codes: delegated to gate_aggregator.main (ADR-035):" — scripts/quality_gate/external_signal_gate.py:33
- "0 - final verdict PASS or WARN" — scripts/quality_gate/external_signal_gate.py:34
- "1 - blocking verdict, or closed-loop refusal (no external signal)" — scripts/quality_gate/external_signal_gate.py:35

## Invokes — required
- script path_utils — scripts/quality_gate/external_signal_gate.py:50
- script quality_gate_agents — scripts/quality_gate/external_signal_gate.py:59
- script gate_aggregator — scripts/quality_gate/external_signal_gate.py:61

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `closed-loop rule` — scripts/quality_gate/external_signal_gate.py:8 — used here
- `ADR-035` — scripts/quality_gate/external_signal_gate.py:33 — used here
- `REQ-008-05` — scripts/quality_gate/external_signal_gate.py:101 — used here
- `gate_aggregator` — scripts/quality_gate/external_signal_gate.py:7 — used here
- `pytest_signal` — scripts/quality_gate/external_signal_gate.py:87 — defined here
- `agent_signal` — scripts/quality_gate/external_signal_gate.py:94 — defined here
- `build_signals` — scripts/quality_gate/external_signal_gate.py:143 — defined here
- `NEEDS_REVIEW` — scripts/quality_gate/external_signal_gate.py:80 — used here
- `DID_NOT_RUN` — scripts/quality_gate/external_signal_gate.py:79 — used here
- `NON_COMPLIANT` — scripts/quality_gate/external_signal_gate.py:81 — used here
- `UNKNOWN` — scripts/quality_gate/external_signal_gate.py:67 — used here

## Structure
- def pytest_signal(pytest_status: str) -> str: — scripts/quality_gate/external_signal_gate.py:87
- def agent_signal(agent: str, verdict: str) -> str: — scripts/quality_gate/external_signal_gate.py:94
- def build_signals(env: dict[str, str]) -> list[str]: — scripts/quality_gate/external_signal_gate.py:143
- def main(argv: list[str] | None = None) -> int: — scripts/quality_gate/external_signal_gate.py:153

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/external_signal_gate.py`
- language: Python
- lines: 166
- documented invocation: `"scripts/quality_gate/external_signal_gate.py" — scripts/quality_gate/spec_external_signal_gate.py:71`
- **executed:** yes
- actual command run: `PYTEST_STATUS=PASS SECURITY_VERDICT=COMPLIANT QA_VERDICT=COMPLIANT ANALYST_VERDICT=COMPLIANT ARCHITECT_VERDICT=COMPLIANT DEVOPS_VERDICT=COMPLIANT ROADMAP_VERDICT=COMPLIANT RELIABILITY_VERDICT=COMPLIANT OBSERVABILITY_VERDICT=COMPLIANT AGENT_SAFETY_VERDICT=COMPLIANT DECISION_RIGOR_VERDICT=COMPLIANT python3 sources/rjm/scripts/quality_gate/external_signal_gate.py`
- abridged stdout:
  ```json
  {"verdict": "PASS", "reason": "all-clear", "signals": [...]}
  ```
- **actual exit code**: 0
- documented exit codes: `"0 - final verdict PASS or WARN" — scripts/quality_gate/external_signal_gate.py:34` vs. actual exit paths: delegated to gate_aggregator.main (returns 0); `"1 - blocking verdict, or closed-loop refusal (no external signal)" — scripts/quality_gate/external_signal_gate.py:35` vs. actual exit paths: returns 1 when PYTEST_STATUS is missing or blocking; `"2 - bad invocation" — scripts/quality_gate/external_signal_gate.py:36` vs. actual exit paths: returns 2 on invalid CLI arguments.
- for validators/gates: can exit non-zero. When run with empty environment, exits 1 with `NEEDS_REVIEW` due to closed-loop refusal (`closed-loop:external-signal-inconclusive`).
- does the output match what the documentation claims? yes, delegates aggregation to `gate_aggregator.main` and outputs structured JSON.

## Defects — required
- `orphan` · scripts/quality_gate/external_signal_gate.py:4 · Additive shadow gate extracted for workflow use, but has no in-scope callers within the lifecycle command set.

## Observations
- Implements an explicit token normalization mapping (`_AGENT_VERDICT_ALIAS`) where `COMPLIANT -> PASS`, `NEEDS_REVIEW -> FAIL`, `NON_COMPLIANT -> FAIL`, and `PARTIAL -> WARN`.
- Unrecognized agent verdict tokens produce a GitHub Action `::warning::` annotation on stderr and fall back to `UNKNOWN` to avoid silent pass.
- Employs `quality_gate_agents` to iterate dynamically through canonical agents rather than hardcoding the agent list in multiple places.

## Context cost
6754 bytes, approximately 1650 tokens.
