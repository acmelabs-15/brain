---
package: rjm
path: scripts/eval/_copilot_cli_acp.py
type: script
bytes: 21831
unit: inv-rjm-215
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_copilot_cli_acp.py, sha256: 19c2dc3b24691c7460044a256c6a26927f8b3a5c2212c34303a731baaaa8c93d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_copilot_cli_acp.py

## Purpose — required, verbatim
> "Run one text-only Copilot completion over Agent Client Protocol stdin." — scripts/eval/_copilot_cli_acp.py:1

## Design intent — required
Implements a robust, secure JSON-RPC client communication channel over standard input/output with GitHub Copilot CLI using the Agent Client Protocol (ACP). Solves the problem of running non-interactive model evaluation completions against Copilot CLI in a controlled, isolated process sandbox: it strictly limits protocol message sizes (`_MAX_PROMPT_BYTES`, `_MAX_CAPTURE_CHARS`, `_MAX_PROTOCOL_CHARS`), enforces streaming response queues with daemon reader threads, prevents hanging processes via ProcessTree process group tracking and graceful/forceful process termination, detects and disables client capabilities and tool call updates (rejecting tool execution during pure prompt evaluations), and classifies child process errors (auth failure, rate limit, timeout, provider failure) while redacting raw provider details. Without it, evaluation scripts interacting with Copilot CLI would suffer from unbounded memory consumption on oversized responses, hanging child processes or orphan descendants, unhandled protocol deadlocks, and credential or trace leaks in test outputs.

## Phase — required
none

## Inputs — required
- Process arguments list passed to `run_acp_completion` — scripts/eval/_copilot_cli_acp.py:657
- Prompt text string passed to `run_acp_completion`: "validate_timeout" — scripts/eval/_copilot_cli_acp.py:41
- Process working directory `cwd` and environment mapping `env` — scripts/eval/_copilot_cli_acp.py:661-662
- Protocol JSON messages read from child process standard output stream — scripts/eval/_copilot_cli_acp.py:112-143, 373-410

## Outputs — required
- Completed process record: "run_acp_completion" — scripts/eval/_copilot_cli_acp.py:657
- JSON-RPC requests written to child process standard input stream: "initialize" — scripts/eval/_copilot_cli_acp.py:609
- New session request: "session/new" — scripts/eval/_copilot_cli_acp.py:627
- Prompt submission request: "session/prompt" — scripts/eval/_copilot_cli_acp.py:639
- Session close request: "session/close" — scripts/eval/_copilot_cli_acp.py:648

## Invokes — required
- script _copilot_process_tree — scripts/eval/_copilot_cli_acp.py:15

## Invoked by — required
- script _copilot_cli_acp — scripts/eval/_copilot_cli.py:22
- script eval_runtime_parity.py — scripts/eval/eval_runtime_parity.py:103

## Concepts named — required, verbatim
- `Agent Client Protocol` — scripts/eval/_copilot_cli_acp.py:1 — used here
- `validate_timeout` — scripts/eval/_copilot_cli_acp.py:41 — defined here
- `ACPProcessError` — scripts/eval/_copilot_cli_acp.py:53 — defined here
- `ACPErrorCategory` — scripts/eval/_copilot_cli_acp.py:62 — defined here
- `ACPProviderError` — scripts/eval/_copilot_cli_acp.py:70 — defined here
- `_ProcessStreams` — scripts/eval/_copilot_cli_acp.py:87 — defined here
- `ProcessTree` — scripts/eval/_copilot_cli_acp.py:15 — used here
- `_CharacterCounter` — scripts/eval/_copilot_cli_acp.py:82 — defined here
- `run_acp_completion` — scripts/eval/_copilot_cli_acp.py:657 — defined here
- `initialize` — scripts/eval/_copilot_cli_acp.py:609 — used here
- `session/new` — scripts/eval/_copilot_cli_acp.py:627 — used here
- `session/prompt` — scripts/eval/_copilot_cli_acp.py:639 — used here
- `session/close` — scripts/eval/_copilot_cli_acp.py:648 — used here
- `session/update` — scripts/eval/_copilot_cli_acp.py:408 — used here
- `agent_message_chunk` — scripts/eval/_copilot_cli_acp.py:324 — used here

## Structure
none (python module; exports validate_timeout, ACPProcessError, ACPErrorCategory, ACPProviderError, _CharacterCounter, _ProcessStreams, _put_stdout, _read_stdout, _read_stderr, _start_process, _send_request, _stop_writer, _consume_update, _parse_message, _provider_error, _wait_for_response, _join_readers, _remaining_process_wait, _wait_for_process, _close_process, _stop_process, _request, _drain_stdout_after_close, _run_session, run_acp_completion)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_copilot_cli_acp.py`, language: Python, lines: 702
- documented invocation:
  - `"Run one text-only Copilot completion over Agent Client Protocol stdin." — scripts/eval/_copilot_cli_acp.py:1`
  - `"from _copilot_cli_acp import (" — scripts/eval/_copilot_cli.py:22`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution:
    `python3 sources/rjm/scripts/eval/_copilot_cli_acp.py`
    stdout: `` (empty)
    **actual exit code**: 0
  - Import verification:
    `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _copilot_cli_acp; print(_copilot_cli_acp._PROTOCOL_VERSION)"`
    stdout: `1`
    **actual exit code**: 0
  - Test suite verification:
    `uv run pytest tests/eval/test_providers.py` (executed in `sources/rjm`)
    stdout: `192 passed in 0.52s`
    **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  No direct process exit calls (`sys.exit`) in module body. The module manages external child processes (`subprocess.Popen`) and checks `returncode`.
  Actual exit paths / error raises in code:
  - raises `ValueError`: "timeout must be finite and > 0, got" — scripts/eval/_copilot_cli_acp.py:49
  - raises `ValueError`: "Copilot ACP prompt exceeded the size limit" — scripts/eval/_copilot_cli_acp.py:668
  - raises `ACPProcessError`: "Copilot ACP process failed" — scripts/eval/_copilot_cli_acp.py:57
  - raises `ACPProviderError`: "Copilot ACP provider error" — scripts/eval/_copilot_cli_acp.py:75
  - raises `RuntimeError`: "Copilot ACP attempted a disabled tool" — scripts/eval/_copilot_cli_acp.py:323
  - raises `subprocess.TimeoutExpired` on operation deadline expiry (scripts/eval/_copilot_cli_acp.py:272, 376, 443)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone validator gate, but validates protocol constraints and raises on protocol violations or child process errors.
- does the output match what the documentation claims? yes, runs text-only Copilot completion over ACP stdin, returning `subprocess.CompletedProcess`.

## Defects — required
none

## Observations
- Buffer size limits: strictly caps prompt input to 1 MB (`_MAX_PROMPT_BYTES = 1024 * 1024`, line 18), individual protocol lines to 1 MB (`_MAX_PROTOCOL_LINE_CHARS`, line 20), and captured responses to 4 MB (`_MAX_CAPTURE_CHARS`, `_MAX_PROTOCOL_CHARS`, lines 19, 21), preventing unbounded memory growth.
- Tool invocation refusal: explicitly checks `update_name in _TOOL_UPDATE_NAMES` (frozenset `{"tool_call", "tool_call_update"}`) and raises `RuntimeError("Copilot ACP attempted a disabled tool")` (`scripts/eval/_copilot_cli_acp.py:322-323`), ensuring eval completions remain pure prompt executions without side effects.
- Clean process tree management: integrates with `ProcessTree` to track descendant processes and guarantees force termination (`terminate(force=True)`) if child processes fail to exit within deadlines (`scripts/eval/_copilot_cli_acp.py:270, 428, 458, 474`).

## Context cost
File size: 21,831 bytes (~5,500 tokens). Dependent module: `_copilot_process_tree.py` (6,302 bytes, ~1,500 tokens). Total context cost: ~28,133 bytes (~7,000 tokens).
