---
package: rjm
path: scripts/external_signals/gate_aggregator.py
type: script
bytes: 6758
unit: inv-rjm-239
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/external_signals/gate_aggregator.py, sha256: f9f7a2f2f9ebcc47353b79aad06d7aeeafbb32ccc699027030b5673c83df71e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/external_signals/gate_aggregator.py

## Purpose — required, verbatim
> "Aggregate gate verdicts, requiring at least one externally-grounded signal." — scripts/external_signals/gate_aggregator.py:2

## Design intent — required
Enforces anti-closed-loop safety across quality gates by preventing pure-LLM evaluators from approving changes without at least one deterministic, externally-grounded passing signal (such as test runners, linters, or codeql). Without this aggregator, multi-agent pipelines could generate and validate code in a closed loop where hallucinations or agent blindspots result in false-positive passes.

## Phase — required
none

## Inputs — required
- CLI argument `--signal` repeated (`KIND:NAME=VERDICT`, e.g. `external:pytest=PASS`) — scripts/external_signals/gate_aggregator.py:62,151
- CLI flag `--json` for JSON output format — scripts/external_signals/gate_aggregator.py:153

## Outputs — required
- Standard output emitting `VERDICT: <verdict>`, `REASON: <reason>`, and individual signals, or JSON payload when `--json` is passed — scripts/external_signals/gate_aggregator.py:171,173-176
- Standard error message on invalid signal format or kind — scripts/external_signals/gate_aggregator.py:159

## Invokes — required
none

## Invoked by — required
- script scripts/quality_gate/external_signal_gate.py — scripts/quality_gate/external_signal_gate.py:7
- script scripts/quality_gate/spec_external_signal_gate.py — scripts/quality_gate/spec_external_signal_gate.py:10
- doc docs/design/external-signal-gating.md — docs/design/external-signal-gating.md:65

## Concepts named — required, verbatim
- `issue #1855` — scripts/external_signals/gate_aggregator.py:4 — used here
- `ai_review_common.verdict` — scripts/external_signals/gate_aggregator.py:15 — used here
- `ADR-035` — scripts/external_signals/gate_aggregator.py:18 — used here
- `check_ai_review_infra_gate.py` — scripts/external_signals/gate_aggregator.py:37 — used here
- `verdict.py` — scripts/external_signals/gate_aggregator.py:38 — used here
- `check_critical_failures.py` — scripts/external_signals/gate_aggregator.py:39 — used here
- `parse_ai_review_output.py` — scripts/external_signals/gate_aggregator.py:39 — used here
- `external_signal_gate.py` — scripts/external_signals/gate_aggregator.py:43 — used here
- `KNOWN_VERDICTS` — scripts/external_signals/gate_aggregator.py:47 — defined here
- `Signal` — scripts/external_signals/gate_aggregator.py:55 — defined here
- `parse_signal` — scripts/external_signals/gate_aggregator.py:61 — defined here
- `aggregate` — scripts/external_signals/gate_aggregator.py:85 — defined here
- `main` — scripts/external_signals/gate_aggregator.py:142 — defined here

## Structure
- Module docstring with signal kinds, verdicts, and ADR-035 exit codes (lines 1-24)
- Verdict sets and vocabulary configuration (lines 26-52)
- `Signal` frozen dataclass (lines 54-59)
- `parse_signal` specification parser (lines 61-83)
- `aggregate` verdict aggregation logic (lines 85-140)
- `main` CLI entrypoint and output formatter (lines 142-179)
- `__main__` entrypoint runner (lines 181-183)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/external_signals/gate_aggregator.py`
- **language:** Python 3
- **lines:** 183
- **documented invocation:**
  > "helper reads a list of ``signal=verdict`` pairs (one per ``--signal`` flag) and" — scripts/external_signals/gate_aggregator.py:5
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/external_signals/gate_aggregator.py --signal external:pytest=PASS`
- **stdout:**
  ```text
  VERDICT: PASS
  REASON: all-clear
    external:pytest=PASS
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `* 0 - final verdict is PASS or WARN` — scripts/external_signals/gate_aggregator.py:20
  - `* 1 - final verdict is FAIL/CRITICAL_FAIL/REJECTED/NEEDS_REVIEW, OR no` — scripts/external_signals/gate_aggregator.py:21
  - `* 2 - bad invocation` — scripts/external_signals/gate_aggregator.py:23
- **actual exit paths:**
  - `return 2` — scripts/external_signals/gate_aggregator.py:160
  - `return 0 if verdict == "PASS" or verdict == "WARN" else 1` — scripts/external_signals/gate_aggregator.py:178
  - `raise SystemExit(main())` — scripts/external_signals/gate_aggregator.py:182
- **for validators/gates:** can exit non-zero: exits 1 when verdict is FAIL/CRITICAL_FAIL/REJECTED/NEEDS_REVIEW or when only LLM signals are provided (closed-loop refusal); exits 2 on bad arguments. On default branch with no arguments, exits 1 (VERDICT: NEEDS_REVIEW, REASON: no-signals).
- **output matches documentation:** yes, implements the documented `--signal` flag, verdict aggregation rules, and exit code contract.

## Defects — required
none

## Observations
Implements anti-closed-loop logic: even if all LLM agents return PASS, `aggregate` returns `NEEDS_REVIEW` with `closed-loop:no-external-signal` unless at least one `external` signal is present and passing/warning. Also treats `DID_NOT_RUN` and `UNKNOWN` from any signal as non-fatal but blocking `NEEDS_REVIEW` so skipped evaluators do not silently resolve to `PASS`.

## Context cost
6758 bytes, ~1690 tokens. Loads no other internal files. Total context cost: 6758 bytes.
