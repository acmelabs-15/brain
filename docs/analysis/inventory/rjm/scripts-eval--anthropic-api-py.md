---
package: rjm
path: scripts/eval/_anthropic_api.py
type: script
bytes: 16054
unit: inv-rjm-215
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_anthropic_api.py

## Purpose — required, verbatim
> "Shared Anthropic API utilities for evaluation scripts." — scripts/eval/_anthropic_api.py:1

## Design intent — required
Provides a lightweight, zero-dependency (urllib-based) HTTP client transport and credential manager for invoking LLM models in the evaluation test harness. Solves the problem of running evaluations without requiring the heavyweight vendor Anthropic Python SDK, standardizing key loading (with CWE-22 symlink traversal defense), fail-closed model availability preflights (`list_available_models`, `verify_model_available`), sanitized error reporting (redacting provider responses and network exceptions), dynamic dispatch to alternative evaluation providers (e.g. OpenAI, GitHub Models, Copilot CLI via `_providers`), and custom prompt fixture loading. Without it, each eval script would duplicate network plumbing, risk path-traversal vulnerabilities in `.env` discovery, leak raw provider payloads in errors, and incur SDK dependency bloat.

## Phase — required
none

## Inputs — required
- `ANTHROPIC_API_KEY` environment variable or repo-root `.env` file — scripts/eval/_anthropic_api.py:37, 48
- `EVAL_PROVIDER` environment variable for alternative transport selection — scripts/eval/_anthropic_api.py:96, 105, 238
- `EVAL_SKIP_MODEL_PREFLIGHT` environment variable to bypass model reachability probe — scripts/eval/_anthropic_api.py:364, 378
- Prompt JSON fixture file path passed to `load_custom_prompts` — scripts/eval/_anthropic_api.py:410

## Outputs — required
- Assistant completion response text: "return assistant text" — scripts/eval/_anthropic_api.py:232
- List of reachable model identifier strings: "Return the model ids reachable" — scripts/eval/_anthropic_api.py:296
- Parsed prompts mapping: "Load prompts from a JSON file." — scripts/eval/_anthropic_api.py:411
- Diagnostic warning strings printed to `sys.stderr` on recoverable probe failures: "warning: reachable-model lookup failed: provider details redacted" — scripts/eval/_anthropic_api.py:180

## Invokes — required
- script _eval_common — scripts/eval/_anthropic_api.py:21
- script _providers — scripts/eval/_anthropic_api.py:103

## Invoked by — required
- script eval-agents.py — scripts/eval/_anthropic_api.py:5
- script eval-knowledge-integration.py — scripts/eval/_anthropic_api.py:5
- script _eval_api_adapter.py — scripts/eval/_eval_api_adapter.py:91
- doc ADR-075 — .agents/architecture/ADR-075-form-factor-eval-methodology.md:136
- doc README.md — scripts/eval/README.md:100

## Concepts named — required, verbatim
- `DEFAULT_MODEL` — scripts/eval/_anthropic_api.py:28 — defined here
- `load_api_key` — scripts/eval/_anthropic_api.py:33 — defined here
- `ANTHROPIC_API_KEY` — scripts/eval/_anthropic_api.py:34 — used here
- `CWE-22` — scripts/eval/_anthropic_api.py:52 — used here
- `load_api_key_for_selected_provider` — scripts/eval/_anthropic_api.py:89 — defined here
- `EVAL_PROVIDER` — scripts/eval/_anthropic_api.py:96 — used here
- `call_api` — scripts/eval/_anthropic_api.py:221 — defined here
- `list_available_models` — scripts/eval/_anthropic_api.py:295 — defined here
- `verify_model_available` — scripts/eval/_anthropic_api.py:343 — defined here
- `EVAL_SKIP_MODEL_PREFLIGHT` — scripts/eval/_anthropic_api.py:364 — used here
- `load_custom_prompts` — scripts/eval/_anthropic_api.py:410 — defined here
- `eval-agents.py` — scripts/eval/_anthropic_api.py:5 — used here
- `eval-knowledge-integration.py` — scripts/eval/_anthropic_api.py:5 — used here
- `_eval_common` — scripts/eval/_anthropic_api.py:21 — used here
- `_providers` — scripts/eval/_anthropic_api.py:103 — used here

## Structure
none (python module; exports DEFAULT_MODEL, load_api_key, load_api_key_for_selected_provider, _call_selected_provider, _build_messages_request, _reachable_model_hint, _read_messages_response, call_api, _parse_model_ids, list_available_models, verify_model_available, load_custom_prompts)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_anthropic_api.py`, language: Python, lines: 439
- documented invocation:
  - `"Shared Anthropic API utilities for evaluation scripts." — scripts/eval/_anthropic_api.py:1`
  - `"| _anthropic_api.py | Shared API utilities (key loading, API calls). | N/A |" — scripts/eval/README.md:100`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution:
    `python3 sources/rjm/scripts/eval/_anthropic_api.py`
    stdout: `` (empty)
    **actual exit code**: 0
  - Import verification:
    `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _anthropic_api; print(_anthropic_api.DEFAULT_MODEL)"`
    stdout: `claude-sonnet-4-6`
    **actual exit code**: 0
  - Test suite verification:
    `uv run pytest tests/eval/test_anthropic_model_default.py tests/eval/test_provider_error_redaction.py` (executed in `sources/rjm`)
    stdout: `33 passed in 0.43s`
    **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  No direct `sys.exit` calls in module body. The module docstrings specify that CLI callers should catch `RuntimeError` and exit:
  - `"RuntimeError: If the key is not found in the environment or any .env file." — scripts/eval/_anthropic_api.py:44`
  - `"Callers at the CLI boundary should catch this and sys.exit(1) if process termination is appropriate." — scripts/eval/_anthropic_api.py:45-46`
  Actual exit paths / exceptions raised in code: raises `RuntimeError` on missing key or CWE-22 violation (scripts/eval/_anthropic_api.py:62, 83), HTTP/network/timeout/JSON decode failures with provider redaction (scripts/eval/_anthropic_api.py:201, 204, 208, 212, 216, 324, 326, 328, 332, 335), unexpected payload shapes (scripts/eval/_anthropic_api.py:261, 273, 279, 287), unreachable model during preflight (scripts/eval/_anthropic_api.py:404), and invalid prompt file shapes (scripts/eval/_anthropic_api.py:425, 430, 435).
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  `verify_model_available` is a preflight validation gate: fails closed (`RuntimeError`) if the model is unreachable (`scripts/eval/_anthropic_api.py:404`), fails open with a warning to stderr on infrastructure error (`scripts/eval/_anthropic_api.py:392-396`), and skips if `EVAL_SKIP_MODEL_PREFLIGHT` is set (`scripts/eval/_anthropic_api.py:378`) or a non-default provider is selected (`scripts/eval/_anthropic_api.py:386`). Does not fail on the default repo setup when valid credentials or skip flags are provided.
- does the output match what the documentation claims? yes, loads credentials, configures default model `claude-sonnet-4-6`, calls Messages API, and sanitizes errors.

## Defects — required
none

## Observations
- CWE-22 path traversal defense: restricts `.env` file loading specifically to `parents[2]` (the repository root) and explicitly refuses to resolve symlinked module paths before resolution to prevent attackers from planting higher-level credential files (`scripts/eval/_anthropic_api.py:52-66`).
- Provider error redaction: all network errors, HTTP error messages, and JSON parsing failures redact provider response content to prevent sensitive model/provider output leakage (`scripts/eval/_anthropic_api.py:180, 209, 217, 263, 275, 281, 289, 330, 337`).
- Fail-open/fail-closed model preflight doctrine: model availability checking fails closed if the models endpoint responds successfully but the requested model is missing, while failing open on network/infrastructure errors so transient network blips do not block local evaluation runs (`scripts/eval/_anthropic_api.py:353-363, 388-407`).

## Context cost
16,054 bytes (~4,000 tokens) for this file. Sibling imports add 8,094 bytes (`_eval_common.py`) and 16,167 bytes (`_providers.py`, when dynamically loaded). Total context cost: ~40,315 bytes (~10,000 tokens).
