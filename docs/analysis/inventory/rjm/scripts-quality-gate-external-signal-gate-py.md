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
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/external_signal_gate.py

## Purpose — required, verbatim
> "Build gate-aggregator signals from pytest status and agent verdicts." — scripts/quality_gate/external_signal_gate.py:2

## Design intent — required
Implements the "closed-loop rule" (Issues #2108 / #1855), ensuring no quality gate passes solely on LLM agent reviews without an external, deterministic grounding signal. It bridges between CI environment variables (ten reviewer agent verdicts and `PYTEST_STATUS`) and `gate_aggregator.py`, remapping verdict tokens to guarantee that `NEEDS_REVIEW`, `DID_NOT_RUN`, and unparseable outputs block rather than passing or degrading silently. It runs additively alongside `check_critical_failures.py` to provide observable external verification.

## Phase — required
rjm:build

## Inputs — required
- Environment variable `PYTEST_STATUS`: "PYTEST_STATUS                       - run-tests job pytest-status output." — scripts/quality_gate/external_signal_gate.py:30
- Environment variable agent verdicts (`SECURITY_VERDICT` through `DECISION_RIGOR_VERDICT`): "SECURITY_VERDICT ... DECISION_RIGOR_VERDICT (10) - aggregated agent verdicts." — scripts/quality_gate/external_signal_gate.py:31

## Outputs — required
- JSON gate aggregator evaluation result written to standard output
- Stderr GitHub warning annotations for unrecognized agent verdicts: "::warning::unrecognized verdict {normalized!r} for agent" — scripts/quality_gate/external_signal_gate.py:134
- Process exit code (0, 1, or 2) delegated from `gate_aggregator.main`

## Invokes — required
- script REPOSITORY_ROOT — scripts/quality_gate/external_signal_gate.py:50
- script gate_aggregator — scripts/quality_gate/external_signal_gate.py:61

## Invoked by — required
- script scripts/quality_gate/external_signal_gate.py — scripts/external_signals/gate_aggregator.py:43

## Concepts named — required, verbatim
- `closed-loop` — scripts/quality_gate/external_signal_gate.py:8 — used here
- `gate_aggregator.py` — scripts/quality_gate/external_signal_gate.py:7 — used here
- `check_critical_failures.py` — scripts/quality_gate/external_signal_gate.py:11 — used here
- `FAIL_VERDICTS` — scripts/quality_gate/external_signal_gate.py:23 — used here
- `ADR-035` — scripts/quality_gate/external_signal_gate.py:33 — used here
- `_PYTEST_VERDICT` — scripts/quality_gate/external_signal_gate.py:64 — defined here
- `_AGENT_VERDICT_ALIAS` — scripts/quality_gate/external_signal_gate.py:77 — defined here
- `pytest_signal` — scripts/quality_gate/external_signal_gate.py:87 — defined here
- `agent_signal` — scripts/quality_gate/external_signal_gate.py:94 — defined here
- `build_signals` — scripts/quality_gate/external_signal_gate.py:143 — defined here
- `main` — scripts/quality_gate/external_signal_gate.py:153 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/external_signal_gate.py`, language: Python 3, lines: 166
- documented invocation: none (invoked in CI workflow step via environment variables)
- **executed:** yes
- actual command run: `PYTEST_STATUS=PASS SECURITY_VERDICT=PASS QA_VERDICT=PASS ANALYST_VERDICT=PASS ARCHITECT_VERDICT=PASS DEVOPS_VERDICT=PASS ROADMAP_VERDICT=PASS RELIABILITY_VERDICT=PASS OBSERVABILITY_VERDICT=PASS AGENT_SAFETY_VERDICT=PASS DECISION_RIGOR_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/external_signal_gate.py`
  abridged stdout: `{"verdict": "PASS", "reason": "all-clear", "signals": [...]}`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes:
  - "0 - final verdict PASS or WARN" — scripts/quality_gate/external_signal_gate.py:34
  - "1 - blocking verdict, or closed-loop refusal (no external signal)" — scripts/quality_gate/external_signal_gate.py:35
  - "2 - bad invocation" — scripts/quality_gate/external_signal_gate.py:36
  Actual exit paths in code:
  - `return gate_aggregator.main(aggregator_argv)` (delegates exit codes 0, 1, or 2 to gate aggregator) — scripts/quality_gate/external_signal_gate.py:161
  - `sys.exit(main())` — scripts/quality_gate/external_signal_gate.py:165
- for validators/gates: can it exit non-zero? yes (exits 1 on failing pytest or blocking agent verdict, exits 2 on argument error). Does it fail on the source repo's own default branch? exits 1 when run without environment variables (closed-loop refusal).
- does the output match what the documentation claims? yes, delegates correctly and produces expected JSON verdict structure.

## Defects — required
none

## Observations
Documents a critical subtle design rule (testing rule 15): `NEEDS_REVIEW` is deliberately aliased to `FAIL` in `_AGENT_VERDICT_ALIAS` even though `gate_aggregator` already knows `NEEDS_REVIEW`. In `gate_aggregator`, `NEEDS_REVIEW` is categorized as a non-blocking `_WARNING`, but repository policy (REQ-008-05, issues #1934/#2818) requires `NEEDS_REVIEW` to block; without this explicit remapping, passing it unaliased would downgrade a blocking review to a non-blocking warning.

## Context cost
6754 bytes (~1688 tokens).
