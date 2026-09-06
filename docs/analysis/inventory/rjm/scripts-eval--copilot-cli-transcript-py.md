---
package: rjm
path: scripts/eval/_copilot_cli_transcript.py
type: script
bytes: 10328
unit: inv-rjm-215
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_copilot_cli_transcript.py, sha256: 32388d0fe4cce1e3b87186e6f46034bcb5dd1df806ceef6d70c75fdccc13c39e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_copilot_cli_transcript.py

## Purpose — required, verbatim
> "Read model-attributed answers from Copilot CLI session transcripts." — scripts/eval/_copilot_cli_transcript.py:1

## Design intent — required
Implements filesystem discovery, verification, and JSONL log parsing of Copilot CLI `events.jsonl` session transcripts to reliably extract assistant completion answers and verify the exact model ID that generated them. Solves the problem of model attribution and output integrity when evaluating Copilot CLI: instead of relying on scraped terminal stdout (which can contain ANSI escape codes, terminal traces, and unverified attribution), it inspects the persistent session state directory, validates absolute paths, guards against directory traversal and symlink hijacking using OS directory descriptors (`dir_fd` with `O_NOFOLLOW`), enforces strict session and candidate entry limits, excludes subagent messages to ensure only the primary model's response is graded, and verifies that exactly one model authored the entire response (refusing unattributed or multi-model answers). Without it, evaluations would risk grading scraped terminal output, mistaking subagent chatter for the final response, or attributing results to the wrong model during silently redirected or fallback model invocations.

## Phase — required
none

## Inputs — required
- Session state root directory path resolved via `session_state_root` — scripts/eval/_copilot_cli_transcript.py:25
- Environment variable `COPILOT_HOME` or provider override for root resolution — scripts/eval/_copilot_cli_transcript.py:17, 35
- Sandbox path string, timestamp cutoff `since`, and timeout `deadline` passed to `read_session_transcript` — scripts/eval/_copilot_cli_transcript.py:258-264
- Session event log files `events.jsonl` stored in session directories — scripts/eval/_copilot_cli_transcript.py:160, 283

## Outputs — required
- Tuple containing assistant message text and model identifier: "read_session_transcript" — scripts/eval/_copilot_cli_transcript.py:258
- Error raises on malformed records or limit violations: "session transcript is malformed" — scripts/eval/_copilot_cli_transcript.py:94
- Provider metadata format errors: "provider metadata field 'model' has invalid format" — scripts/eval/_copilot_cli_transcript.py:104

## Invokes — required
- script _copilot_windows_files — scripts/eval/_copilot_cli_transcript.py:14
- script _eval_common — scripts/eval/_copilot_cli_transcript.py:15

## Invoked by — required
- script _copilot_cli_transcript — scripts/eval/_copilot_cli.py:37

## Concepts named — required, verbatim
- `session_state_root` — scripts/eval/_copilot_cli_transcript.py:25 — defined here
- `COPILOT_HOME` — scripts/eval/_copilot_cli_transcript.py:17 — used here
- `_TranscriptCandidate` — scripts/eval/_copilot_cli_transcript.py:53 — defined here
- `MalformedProviderMetadataError` — scripts/eval/_copilot_cli_transcript.py:15 — used here
- `read_session_transcript` — scripts/eval/_copilot_cli_transcript.py:258 — defined here
- `events.jsonl` — scripts/eval/_copilot_cli_transcript.py:159 — used here
- `open_windows_transcript` — scripts/eval/_copilot_cli_transcript.py:14 — used here
- `session.start` — scripts/eval/_copilot_cli_transcript.py:230 — used here
- `assistant.message` — scripts/eval/_copilot_cli_transcript.py:237 — used here

## Structure
none (python module; exports session_state_root, _TranscriptCandidate, _parse_event, _is_subagent_message, _read_assistant_message, _model_that_spoke, _open_transcript, _read_matching_session, read_session_transcript)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_copilot_cli_transcript.py`, language: Python, lines: 323
- documented invocation:
  - `"Read model-attributed answers from Copilot CLI session transcripts." — scripts/eval/_copilot_cli_transcript.py:1`
  - `"from _copilot_cli_transcript import read_session_transcript, session_state_root" — scripts/eval/_copilot_cli.py:37`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution:
    `python3 sources/rjm/scripts/eval/_copilot_cli_transcript.py`
    stdout: `` (empty)
    **actual exit code**: 0
  - Import verification:
    `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _copilot_cli_transcript; print(_copilot_cli_transcript._COPILOT_HOME_ENV)"`
    stdout: `COPILOT_HOME`
    **actual exit code**: 0
  - Test suite verification:
    `uv run pytest tests/eval/test_providers.py -k "transcript or session_root"` (executed in `sources/rjm`)
    stdout: `10 passed, 182 deselected in 0.45s`
    **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  No direct process exit calls (`sys.exit`) in module body.
  Actual exit paths / error raises in code:
  - raises `RuntimeError`: "needs the home directory to be absolute" — scripts/eval/_copilot_cli_transcript.py:47
  - raises `RuntimeError`: "session transcript is malformed" — scripts/eval/_copilot_cli_transcript.py:94
  - raises `MalformedProviderMetadataError`: "provider metadata field 'model' has invalid format" — scripts/eval/_copilot_cli_transcript.py:104
  - raises `RuntimeError`: "session transcript scan timed out" — scripts/eval/_copilot_cli_transcript.py:213, 279, 310
  - raises `RuntimeError`: "session transcript exceeded the size limit" — scripts/eval/_copilot_cli_transcript.py:224
  - raises `RuntimeError`: "session directory entry limit exceeded" — scripts/eval/_copilot_cli_transcript.py:275
  - raises `RuntimeError`: "session transcript candidate limit exceeded" — scripts/eval/_copilot_cli_transcript.py:302
  - raises `OSError`: "Copilot transcript descriptor was unavailable" — scripts/eval/_copilot_cli_transcript.py:168
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone validator gate. Enforces strict schema and file integrity checks during transcript evaluation.
- does the output match what the documentation claims? yes, parses model-attributed text from session transcripts while guarding against subagent messages and multiple models.

## Defects — required
none

## Observations
- Robust security handling on POSIX: `_open_transcript` opens the directory with `O_DIRECTORY | O_NOFOLLOW` and then uses `dir_fd` with `O_NOFOLLOW` to open `events.jsonl` (`scripts/eval/_copilot_cli_transcript.py:124-166`), completely mitigating symlink-race and path-traversal attacks.
- Model attribution purity: `_model_that_spoke` checks `if unattributed or len(message_models) != 1: return None` (`scripts/eval/_copilot_cli_transcript.py:114`), ensuring that if multiple models generated text in a session or if any text was unattributed, the model ID is withheld to prevent invalid benchmark claims.
- Subagent isolation: `_is_subagent_message` checks for `"agentId" in event or "parentToolCallId" in data` (`scripts/eval/_copilot_cli_transcript.py:81`), preventing subagent intermediate outputs from polluting the main model's graded response.

## Context cost
File size: 10,328 bytes (~2,600 tokens). Dependent modules: `_copilot_windows_files.py` (6,963 bytes), `_eval_common.py` (8,094 bytes). Total context cost: ~25,385 bytes (~6,400 tokens).
