---
package: rjm
path: scripts/eval/_eval_api_adapter.py
type: script
bytes: 21143
unit: inv-rjm-217
in_scope_via: .agents/architecture/ADR-081-confidence-elicitation-experiment.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_eval_api_adapter.py

## Purpose — required, verbatim
> "Anthropic API adapter for eval-agent-vs-baseline." — scripts/eval/_eval_api_adapter.py:1

## Design intent — required
Provides a resilient, multi-provider API execution layer for offline evaluation runs (`eval-agent-vs-baseline.py` and `variance-control.py`). It wraps direct model invocations across Anthropic API, OpenAI-compatible endpoints, and CLI subprocess providers (Copilot CLI), adding exponential backoff with full jitter, total wall-clock timeout budget management, error classification (distinguishing transient rate-limit and server errors from fatal non-transient 4xx client errors), token estimation heuristics, and structured JSON stderr logging with sensitive credential redaction. Without this adapter, evaluation runs would be susceptible to transient network flakes and rate limits, lack uniform cross-attempt timeout guarantees, and risk leaking secret API keys or prompt payloads into stderr streams.

## Phase — required
none

## Inputs — required
Method `AnthropicAPIAdapter.call_model` consumes:
- Invocation parameters: `prompt: str`, `model_id: str`, `fixture_id: str`, `variant: str`, `run_index: int`, optional `system: str = ""`, and optional `max_retries: int = 3`
- Environment variables: `EVAL_PROVIDER` (provider routing), `ANTHROPIC_API_KEY` (Anthropic credentials)
- Constructor options: injectable `transport`, `sleep` function, monotonic `clock`, `total_timeout_seconds: float = 180.0`, and optional random `seed: int | None`

## Outputs — required
- `APICallResult` immutable dataclass instances containing: `outcome` (`success` or `error`), `raw_response` (model text or None), `tokens_in`, `tokens_out`, `latency_ms`, `error_category` (or None), `attempts`, `tokens_estimated` (boolean flag), and `system_fingerprint` (or None)
- Structured JSON log records written to stderr per attempt (containing only permitted fields from `_ALLOWED_LOG_FIELDS`)

## Invokes — required
- script _constants — scripts/eval/_eval_api_adapter.py:41
- script _anthropic_api — scripts/eval/_eval_api_adapter.py:42
- script _eval_common — scripts/eval/_eval_api_adapter.py:43
- script _providers — scripts/eval/_eval_api_adapter.py:236

## Invoked by — required
- script AnthropicAPIAdapter — scripts/eval/eval-agent-vs-baseline.py:48
- script AnthropicAPIAdapter — scripts/eval/variance-control.py:39

## Concepts named — required, verbatim
- `DESIGN-004` — scripts/eval/_eval_api_adapter.py:3 — used here
- `AnthropicAPIAdapter` — scripts/eval/_eval_api_adapter.py:3 — defined here
- `REQ-004` — scripts/eval/_eval_api_adapter.py:6 — used here
- `OutcomeLiteral` — scripts/eval/_eval_api_adapter.py:45 — defined here
- `APICallResult` — scripts/eval/_eval_api_adapter.py:67 — defined here
- `_categorize_error` — scripts/eval/_eval_api_adapter.py:87 — defined here
- `_is_transient` — scripts/eval/_eval_api_adapter.py:134 — defined here
- `_backoff_delay_seconds` — scripts/eval/_eval_api_adapter.py:138 — defined here
- `_emit_log` — scripts/eval/_eval_api_adapter.py:147 — defined here
- `Transport` — scripts/eval/_eval_api_adapter.py:168 — defined here
- `_ProviderWithFingerprint` — scripts/eval/_eval_api_adapter.py:171 — defined here
- `_OpenAIProviderTransport` — scripts/eval/_eval_api_adapter.py:177 — defined here
- `_AnthropicTransport` — scripts/eval/_eval_api_adapter.py:199 — defined here
- `_default_transport_factory` — scripts/eval/_eval_api_adapter.py:224 — defined here
- `ADR-058` — scripts/eval/_eval_api_adapter.py:234 — used here
- `_estimate_tokens` — scripts/eval/_eval_api_adapter.py:498 — defined here

## Structure
none (Python module; defines APICallResult, helper functions _categorize_error, _is_transient, _backoff_delay_seconds, _emit_log, transport classes _OpenAIProviderTransport and _AnthropicTransport, factory _default_transport_factory, adapter class AnthropicAPIAdapter, and _estimate_tokens)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_eval_api_adapter.py`, language: Python 3, lines: 504
- documented invocation: none (internal adapter module imported by eval-agent-vs-baseline.py and variance-control.py)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  `python3 sources/rjm/scripts/eval/_eval_api_adapter.py`, stdout: `""` (empty), actual exit code: `0`
- documented exit codes vs actual exit paths:
  Documented exit codes: none (internal adapter module). Actual exit paths in code: no `sys.exit()` calls; exits 0 on module import.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone validator. Method `call_model` raises `ValueError` if `max_retries` is invalid (< 1 or non-int); re-raises `MalformedProviderMetadataError`; all other errors return `APICallResult(outcome="error", ...)`.
- does the output match what the documentation claims?
  Yes, imports cleanly and defines `AnthropicAPIAdapter` and `APICallResult`.

## Defects — required
none

## Observations
- Status code precedence over text hints: in `_categorize_error`, HTTP status codes strictly outrank body text. If an HTTP 4xx response body contains strings like "timed out", it is classified as `client_error` (or `auth`), avoiding unintended retries of fatal client errors.
- Wall-budget cutoff enforcement: before and during retry backoff delays, elapsed time is checked against `_total_timeout_seconds`. If the budget is exhausted, it aborts retries and returns `error_category=timeout_total` (`ERR_TOTAL_TIMEOUT`), preventing runaway retry loops.
- Redaction gate in `_emit_log`: validates that log dictionaries only contain keys in `_ALLOWED_LOG_FIELDS` and explicitly raises `ValueError` if any banned keys (`_BANNED_LOG_FIELDS`) or unrecognized attributes are passed.
- Token estimation heuristic: uses `_estimate_tokens` (~4 characters per token) with flag `tokens_estimated=True` until provider APIs return formal usage envelopes.

## Context cost
21143 bytes for this file, plus dependencies `_eval_api_adapter_constants.py` (1597 bytes), `_anthropic_api.py` (16054 bytes), `_eval_common.py` (8094 bytes), `_eval_errors.py` (236 bytes), and `_providers.py` (16167 bytes). Total: ~63291 bytes (~16000 tokens).
