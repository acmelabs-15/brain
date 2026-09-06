---
package: rjm
path: scripts/eval/_runtime_output.py
type: script
bytes: 8901
unit: inv-rjm-223
in_scope_via: scripts/eval/eval_runtime_parity.py
aliases: []
memo_inputs:
  - {path: scripts/eval/_runtime_output.py, sha256: 27b0e3d4e48261471599dc8dd4b433cc41620902ca4c462460cb64fb93c4fc42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_runtime_output.py

## Purpose — required, verbatim
> "Parse machine-readable output from runtime parity subprocesses." — scripts/eval/_runtime_output.py:1

## Design intent — required
Normalizes the disparate machine-readable outputs and JSONL event streams produced by real Claude Code and GitHub Copilot CLI runs into standardized, comparable representations. It extracts final text responses and attributable model IDs, distinguishes structured question tools from text fallback mechanisms, aggregates tool executions and subagent events, maps authentication and process execution errors to standard exit codes (3 for failure, 4 for auth required), and computes parity comparison verdicts across fixture pairs.

## Phase — required
rjm:eval

## Inputs — required
- Subprocess execution objects `run: subprocess.CompletedProcess[str]` — scripts/eval/_runtime_output.py:64
- JSONL events from Claude CLI processed in `claude_result` function — scripts/eval/_runtime_output.py:24
- JSONL events from GitHub Copilot CLI processed in `copilot_result` function — scripts/eval/_runtime_output.py:39
- Command argv sequences passed to `redacted_argv` function — scripts/eval/_runtime_output.py:114

## Outputs — required
- Final answer and resolved model tuple returned by `claude_result` — scripts/eval/_runtime_output.py:24
- Final answer and attributable model tuple returned by `copilot_result` — scripts/eval/_runtime_output.py:39
- Standardized failure exit code integer returned by `failure_code` — scripts/eval/_runtime_output.py:64
- Detailed runtime failure record dictionary returned by `runtime_failure_record` — scripts/eval/_runtime_output.py:223
- Comparison verdict string returned by `comparison_verdict` — scripts/eval/_runtime_output.py:85
- Event traces collection tuple returned by `traces` — scripts/eval/_runtime_output.py:198

## Invokes — required
none

## Invoked by — required
- script _runtime_output — scripts/eval/eval_runtime_parity.py:28

## Concepts named — required, verbatim
- `runtime parity` — scripts/eval/_runtime_output.py:1 — used here
- `RuntimeOutputError` — scripts/eval/_runtime_output.py:10 — defined here
- `QUESTION_TOOLS` — scripts/eval/_runtime_output.py:14 — defined here
- `AUTH_HINTS` — scripts/eval/_runtime_output.py:15 — defined here
- `claude_result` — scripts/eval/_runtime_output.py:24 — defined here
- `copilot_result` — scripts/eval/_runtime_output.py:39 — defined here
- `failure_code` — scripts/eval/_runtime_output.py:64 — defined here
- `runtime_error` — scripts/eval/_runtime_output.py:70 — defined here
- `comparison_verdict` — scripts/eval/_runtime_output.py:85 — defined here
- `FAIL_MODEL_MISMATCH` — scripts/eval/_runtime_output.py:96 — defined here
- `FAIL_QUESTION_MECHANISM_MISMATCH` — scripts/eval/_runtime_output.py:98 — defined here
- `accumulate_verdict` — scripts/eval/_runtime_output.py:104 — defined here
- `redacted_argv` — scripts/eval/_runtime_output.py:114 — defined here
- `question_mechanism` — scripts/eval/_runtime_output.py:135 — defined here
- `question_payload` — scripts/eval/_runtime_output.py:163 — defined here
- `structured_tool_model` — scripts/eval/_runtime_output.py:181 — defined here
- `traces` — scripts/eval/_runtime_output.py:198 — defined here
- `runtime_failure_record` — scripts/eval/_runtime_output.py:223 — defined here
- `parse_events` — scripts/eval/_runtime_output.py:250 — defined here

## Structure
none (python module defining exception classes, string constants, output extractors, verdict evaluators, and JSON event parsers: `RuntimeOutputError`, `QUESTION_TOOLS`, `AUTH_HINTS`, `claude_result`, `copilot_result`, `failure_code`, `runtime_error`, `comparison_verdict`, `accumulate_verdict`, `redacted_argv`, `_tool_name`, `question_mechanism`, `_payload_strings`, `question_payload`, `structured_tool_model`, `traces`, `runtime_failure_record`, `parse_events`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_runtime_output.py`, language: Python 3, lines: 266
- documented invocation:
  - "from _runtime_output import (" — scripts/eval/eval_runtime_parity.py:28
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_runtime_output.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (support module without CLI entrypoint).
  Actual exit paths in code: no `sys.exit` or `exit` calls; raises `RuntimeOutputError` on malformed JSON; `failure_code` maps subprocess outputs to return integers 3 or 4 at line 67; exits 0 when loaded as a module.
- for validators/gates: can it exit non-zero? no (parsing and extraction library). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, successfully provides parser and classifier utilities for CLI event streams.

## Defects — required
none

## Observations
- `redacted_argv` (lines 114-120) sanitizes the command line by replacing prompt arguments with `<fixture-prompt>` prior to recording, preventing fixture payload inflation in audit logs.
- `copilot_result` (lines 39-62) verifies model attribution across multiple message chunks: if different chunks name conflicting models or lack model attribution, `resolved_model` fails closed to `None`.
- `parse_events` (lines 250-266) strictly validates line-delimited JSON, raising `RuntimeOutputError` with the offending line number if any non-blank line fails to parse as a JSON object.

## Context cost
8901 bytes (~2225 tokens). Standard library only (`json`, `subprocess`, `collections.abc`).
