---
package: rjm
path: scripts/quality_gate/spec_external_signal_gate.py
type: script
bytes: 5749
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/spec_external_signal_gate.py

## Purpose — required, verbatim
> "Build gate-aggregator signals for the spec-validation workflow." — scripts/quality_gate/spec_external_signal_gate.py:2

## Design intent — required
Adapts external deterministic signals and LLM agent review verdicts for the spec-validation workflow (`ai-spec-validation.yml`). Implemented in response to the closed-loop rule (Issues #2108 / #1855), it extracts acceptance-criteria check states from PR description markdown using `scripts/external_signals/acceptance_criteria.py` (a deterministic signal) and pairs them with `trace` (analyst) and `completeness` (critic) agent verdicts, delegating aggregation to `scripts/external_signals/gate_aggregator.py` so spec coverage cannot be approved based on LLM outputs alone.

## Phase — required
rjm:spec

## Inputs — required
- "PR_BODY_FILE" — scripts/quality_gate/spec_external_signal_gate.py:37
- "TRACE_VERDICT" — scripts/quality_gate/spec_external_signal_gate.py:40
- "COMPLETENESS_VERDICT" — scripts/quality_gate/spec_external_signal_gate.py:41

## Outputs — required
- "Exit codes: delegated to gate_aggregator.main (ADR-035):" — scripts/quality_gate/spec_external_signal_gate.py:43
- "0 - final verdict PASS or WARN" — scripts/quality_gate/spec_external_signal_gate.py:44
- "1 - blocking verdict, or closed-loop refusal (no external signal)" — scripts/quality_gate/spec_external_signal_gate.py:45

## Invokes — required
- script path_utils — scripts/quality_gate/spec_external_signal_gate.py:61
- script acceptance_criteria — scripts/quality_gate/spec_external_signal_gate.py:68
- script gate_aggregator — scripts/quality_gate/spec_external_signal_gate.py:68

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `closed-loop rule` — scripts/quality_gate/spec_external_signal_gate.py:11 — used here
- `ADR-035` — scripts/quality_gate/spec_external_signal_gate.py:43 — used here
- `acceptance-criteria` — scripts/quality_gate/spec_external_signal_gate.py:7 — used here
- `acceptance_verdict` — scripts/quality_gate/spec_external_signal_gate.py:81 — defined here
- `acceptance_signal` — scripts/quality_gate/spec_external_signal_gate.py:95 — defined here
- `agent_signal` — scripts/quality_gate/spec_external_signal_gate.py:101 — defined here
- `build_signals` — scripts/quality_gate/spec_external_signal_gate.py:130 — defined here
- `COMPLIANT` — scripts/quality_gate/spec_external_signal_gate.py:31 — used here
- `NEEDS_REVIEW` — scripts/quality_gate/spec_external_signal_gate.py:32 — used here
- `NON_COMPLIANT` — scripts/quality_gate/spec_external_signal_gate.py:31 — used here
- `PARTIAL` — scripts/quality_gate/spec_external_signal_gate.py:31 — used here

## Structure
- def acceptance_verdict(body: str) -> str: — scripts/quality_gate/spec_external_signal_gate.py:81
- def acceptance_signal(body: str) -> str: — scripts/quality_gate/spec_external_signal_gate.py:95
- def agent_signal(agent: str, verdict: str) -> str: — scripts/quality_gate/spec_external_signal_gate.py:101
- def _read_body(path_str: str) -> str: — scripts/quality_gate/spec_external_signal_gate.py:109
- def build_signals(env: dict[str, str]) -> list[str]: — scripts/quality_gate/spec_external_signal_gate.py:130
- def main(argv: list[str] | None = None) -> int: — scripts/quality_gate/spec_external_signal_gate.py:141

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/spec_external_signal_gate.py`
- language: Python
- lines: 154
- documented invocation: none documented (CLI script configured with argparse)
- **executed:** yes
- actual command run: `PR_BODY_FILE=/tmp/pr_body.md TRACE_VERDICT=COMPLIANT COMPLETENESS_VERDICT=COMPLIANT python3 sources/rjm/scripts/quality_gate/spec_external_signal_gate.py`
- abridged stdout:
  ```json
  {"verdict": "PASS", "reason": "all-clear", "signals": [...]}
  ```
- **actual exit code**: 0
- documented exit codes: `"0 - final verdict PASS or WARN" — scripts/quality_gate/spec_external_signal_gate.py:44` vs. actual exit paths: delegated to gate_aggregator.main (returns 0); `"1 - blocking verdict, or closed-loop refusal (no external signal)" — scripts/quality_gate/spec_external_signal_gate.py:45` vs. actual exit paths: returns 1 when PR_BODY_FILE is missing/unreadable or agent verdicts block; `"2 - bad invocation" — scripts/quality_gate/spec_external_signal_gate.py:46` vs. actual exit paths: returns 2 on invalid CLI arguments.
- for validators/gates: validator gate; exits 1 when run without PR_BODY_FILE due to closed-loop refusal (`closed-loop:external-signal-inconclusive`).
- does the output match what the documentation claims? yes, builds signal specs and passes them to `gate_aggregator.main`.

## Defects — required
- `orphan` · scripts/quality_gate/spec_external_signal_gate.py:4 · Spec gate adapter extracted for CI workflow use, but has no in-scope callers within lifecycle commands.

## Observations
- When PR body has no criteria declared or file is missing, verdict token becomes `UNKNOWN` rather than failing, forcing `NEEDS_REVIEW` under the closed-loop rule without hard-blocking PRs that legitimately lack checkbox sections.
- Mirrors token normalization patterns from `external_signal_gate.py`.

## Context cost
5749 bytes, approximately 1450 tokens.
