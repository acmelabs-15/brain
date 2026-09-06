---
package: rjm
path: scripts/eval/_copilot_cli.py
type: script
bytes: 18753
unit: inv-rjm-216
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_copilot_cli.py

## Purpose — required, verbatim
> "GitHub Copilot CLI transport for the eval harness." — scripts/eval/_copilot_cli.py:1

## Design intent — required
Provides a subprocess-based transport driver for the GitHub Copilot CLI to run offline evaluation benchmarks without per-token Anthropic or OpenAI API billing, leveraging the operator's existing Copilot subscription. To prevent experimental contamination and biased scores, it strictly enforces five load-bearing isolation constraints: executing from an empty sandbox directory (preventing repository instructions like `CLAUDE.md` and `AGENTS.md` from acting as treatment variables in control cells), removing ambient user configuration via `--no-custom-instructions`, disabling built-in MCP servers, disabling all tool access via `--available-tools=`, and transmitting messages across stdin using ACP JSON-RPC enveloped inside an untrusted repository text boundary with an allowlisted execution environment.

## Phase — required
none

## Inputs — required
- Message list `messages`: sequence of dictionaries containing "role" (`user` or `system`) and "content" strings — scripts/eval/_copilot_cli.py:328-344
- System prompt `system`: optional guidance text passed into the completion envelope — scripts/eval/_copilot_cli.py:325, 432
- Model identifier `model`: requested model name passed to `--model` (e.g., `claude-opus-5`, `gpt-5.6-sol`) — scripts/eval/_copilot_cli.py:114-115, 363, 433
- Execution timeout `timeout`: duration in seconds validated by `validate_timeout` (default: 900.0) — scripts/eval/_copilot_cli.py:168, 172
- Allowlisted environment variables: restricted set (`APPDATA`, `COPILOT_GH_HOST`, `COPILOT_GITHUB_TOKEN`, `COPILOT_HOME`, `GH_HOST`, `GH_TOKEN`, `GITHUB_TOKEN`, `HOME`, `LANG`, `LC_ALL`, `LOCALAPPDATA`, `PATH`, `SSL_CERT_DIR`, `SSL_CERT_FILE`, `SYSTEMROOT`, `USERPROFILE`) plus session configuration — scripts/eval/_copilot_cli.py:48-67, 94-106
- Session state transcripts: structured ACP JSON-RPC logs written by Copilot CLI into the session directory — scripts/eval/_copilot_cli.py:37, 105, 176-194

## Outputs — required
- Model text response: string answer returned by `complete()` after footer stripping and validation — scripts/eval/_copilot_cli.py:428, 462
- System fingerprint `system_fingerprint`: confirmed model identifier or `None` recorded on the provider instance — scripts/eval/_copilot_cli.py:173, 461
- Subprocess execution: temporary sandbox directory creation and process execution running the `copilot` binary — scripts/eval/_copilot_cli.py:281-320, 446-455

## Invokes — required
- script _copilot_cli_acp — scripts/eval/_copilot_cli.py:22
- script _copilot_cli_constants — scripts/eval/_copilot_cli.py:27
- script _copilot_cli_transcript — scripts/eval/_copilot_cli.py:37

## Invoked by — required
- script _copilot_cli — scripts/eval/_providers.py:51

## Concepts named — required, verbatim
- `taste ceiling` — scripts/eval/_copilot_cli.py:3-4 — used here
- `copilot-cli` — scripts/eval/_copilot_cli.py:8 — defined here
- `_CopilotCLIProvider` — scripts/eval/_copilot_cli.py:39 — defined here
- `_safe_process_error` — scripts/eval/_copilot_cli.py:77 — defined here
- `_minimal_process_env` — scripts/eval/_copilot_cli.py:94 — defined here
- `untrusted-text envelope` — scripts/eval/_copilot_cli.py:148 — defined here
- `system_fingerprint` — scripts/eval/_copilot_cli.py:173 — defined here
- `ai-agents-text-eval-v1` — scripts/eval/_copilot_cli.py:352 — defined here
- `complete` — scripts/eval/_copilot_cli.py:428 — defined here

## Structure
- Docstring and imports — scripts/eval/_copilot_cli.py:1-40
- Error classification and environment constants — scripts/eval/_copilot_cli.py:41-75
- `_safe_process_error` function — scripts/eval/_copilot_cli.py:77-92
- `_minimal_process_env` function — scripts/eval/_copilot_cli.py:94-107
- `_CopilotCLIProvider` class definition — scripts/eval/_copilot_cli.py:109-174
- Transcript and footer detection methods — scripts/eval/_copilot_cli.py:175-252
- Model verification and trace detection methods — scripts/eval/_copilot_cli.py:253-280
- Process execution and prompt building methods — scripts/eval/_copilot_cli.py:281-382
- Answer extraction and public `complete` method — scripts/eval/_copilot_cli.py:383-463

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_copilot_cli.py`
- language: Python
- lines: 463
- documented invocation:
> "GitHub Copilot CLI transport, driven as a subprocess." — scripts/eval/_copilot_cli.py:110
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_copilot_cli.py`, stdout: (empty), **actual exit code: 0**
- documented exit codes vs. actual exit paths: Module provides transport classes and helper functions without a standalone CLI argument parser or `sys.exit()` calls; raises `RuntimeError` on timeout, missing executable, unverified model, or ACP process error (scripts/eval/_copilot_cli.py:88, 304, 308, 313, 331, 347, 395, 402, 412, 417). Direct execution exits 0 cleanly.
- for validators/gates: Not a validator gate; library transport module. Raises exceptions on failure rather than exiting with codes.
- does output match documentation: Yes, module imports and defines `_CopilotCLIProvider` without executing subprocess calls on bare import.

## Defects — required
none

## Observations
The transport intentionally ignores sampling controls (`max_tokens`, `temperature`, and `seed` deleted at line 441) because the Copilot CLI does not expose sampling controls. Callers requiring strict sampling determinism must use an HTTP provider instead. It uses an empty temporary working directory so that repository configuration files (`CLAUDE.md`, `AGENTS.md`) do not leak into evaluation runs.

## Context cost
18,753 bytes (~4,700 tokens). Loads `_copilot_cli_acp.py` (21,831 bytes), `_copilot_cli_constants.py` (570 bytes), and `_copilot_cli_transcript.py` (10,328 bytes), totaling ~51,482 reachable bytes (~12,900 tokens).
