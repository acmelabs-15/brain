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
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/spec_external_signal_gate.py

## Purpose — required, verbatim
> "Build gate-aggregator signals for the spec-validation workflow." — scripts/quality_gate/spec_external_signal_gate.py:2

## Design intent — required
Enforces the closed-loop requirement (Issues #2108 / #1855) for specification validation in CI (`ai-spec-validation.yml`). It prevents spec validation from passing on LLM reviewer agent verdicts alone (analyst traceability and critic completeness) by extracting deterministic acceptance-criteria checkboxes from the pull request markdown body. If acceptance criteria are missing or unreadable, it feeds an `UNKNOWN` external signal to `gate_aggregator.py`, forcing a `NEEDS_REVIEW` verdict under closed-loop gating rules rather than allowing an unverified pass.

## Phase — required
rjm:build

## Inputs — required
- Environment variable `PR_BODY_FILE`: "PR_BODY_FILE         - path to a file holding the PR body markdown. When" — scripts/quality_gate/spec_external_signal_gate.py:37
- Environment variable `TRACE_VERDICT`: "TRACE_VERDICT        - analyst traceability agent verdict." — scripts/quality_gate/spec_external_signal_gate.py:40
- Environment variable `COMPLETENESS_VERDICT`: "COMPLETENESS_VERDICT - critic completeness agent verdict." — scripts/quality_gate/spec_external_signal_gate.py:41

## Outputs — required
- JSON gate aggregation evaluation result written to standard output
- Process exit code (0, 1, or 2) delegated from `gate_aggregator.main`

## Invokes — required
- script REPOSITORY_ROOT — scripts/quality_gate/spec_external_signal_gate.py:61
- script acceptance_criteria — scripts/quality_gate/spec_external_signal_gate.py:68
- script gate_aggregator — scripts/quality_gate/spec_external_signal_gate.py:68

## Invoked by — required
- script scripts/quality_gate/spec_external_signal_gate.py — scripts/ci/spec_external_signal_wrapper.py:78

## Concepts named — required, verbatim
- `closed-loop` — scripts/quality_gate/spec_external_signal_gate.py:11 — used here
- `ai-spec-validation.yml` — scripts/quality_gate/spec_external_signal_gate.py:5 — used here
- `gate_aggregator.py` — scripts/quality_gate/spec_external_signal_gate.py:10 — used here
- `check_spec_failures.py` — scripts/quality_gate/spec_external_signal_gate.py:14 — used here
- `ADR-035` — scripts/quality_gate/spec_external_signal_gate.py:43 — used here
- `_AGENT_VERDICT_ALIAS` — scripts/quality_gate/spec_external_signal_gate.py:72 — defined here
- `acceptance_verdict` — scripts/quality_gate/spec_external_signal_gate.py:81 — defined here
- `acceptance_signal` — scripts/quality_gate/spec_external_signal_gate.py:95 — defined here
- `agent_signal` — scripts/quality_gate/spec_external_signal_gate.py:101 — defined here
- `build_signals` — scripts/quality_gate/spec_external_signal_gate.py:130 — defined here
- `main` — scripts/quality_gate/spec_external_signal_gate.py:141 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/spec_external_signal_gate.py`, language: Python 3, lines: 154
- documented invocation: none (invoked in CI spec validation wrapper via environment variables)
- **executed:** yes
- actual command run: `tmp_body=$(mktemp) && echo "## Acceptance Criteria\n- [x] All tests pass" > "$tmp_body" && PR_BODY_FILE="$tmp_body" TRACE_VERDICT=PASS COMPLETENESS_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/spec_external_signal_gate.py && rm "$tmp_body"`
  abridged stdout: `{"verdict": "PASS", "reason": "all-clear", "signals": [...]}`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes:
  - "0 - final verdict PASS or WARN" — scripts/quality_gate/spec_external_signal_gate.py:44
  - "1 - blocking verdict, or closed-loop refusal (no external signal)" — scripts/quality_gate/spec_external_signal_gate.py:45
  - "2 - bad invocation" — scripts/quality_gate/spec_external_signal_gate.py:46
  Actual exit paths in code:
  - `return gate_aggregator.main(aggregator_argv)` (delegates 0, 1, or 2 to gate aggregator) — scripts/quality_gate/spec_external_signal_gate.py:149
  - `sys.exit(main())` — scripts/quality_gate/spec_external_signal_gate.py:153
- for validators/gates: can it exit non-zero? yes (exits 1 on unchecked criteria or blocking agent verdict, exits 2 on bad arguments). Does it fail on the source repo's own default branch? exits 1 when run without environment variables set (closed-loop refusal).
- does the output match what the documentation claims? yes, delegates execution and formats signal specs accurately.

## Defects — required
none

## Observations
Provides fault-tolerant handling of PR body inputs: missing, unreadable, or non-UTF-8 body files are caught and treated as empty bodies, resulting in an `UNKNOWN` external signal that appropriately triggers `NEEDS_REVIEW` under the closed-loop rule rather than crashing the evaluation step.

## Context cost
5749 bytes (~1437 tokens).
