---
package: rjm
path: scripts/eval/_eval_api_adapter_constants.py
type: script
bytes: 1597
unit: inv-rjm-217
in_scope_via: .agents/architecture/ADR-081-confidence-elicitation-experiment.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_eval_api_adapter_constants.py, sha256: 29edd1bc99b62d752081d3ffb9b94a763e51af432e78869646c9e5831a769aa2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_eval_api_adapter_constants.py

## Purpose — required, verbatim
> "Constants for the eval API adapter." — scripts/eval/_eval_api_adapter_constants.py:1

## Design intent — required
Isolates error category identifiers, retry backoff configuration values, regex patterns, log filtering rules, and provider fingerprint normalization logic for the evaluation API adapter. By centralizing allowed log fields (`ALLOWED_LOG_FIELDS`) and explicitly banned sensitive keys (`BANNED_LOG_FIELDS`), it ensures that sensitive data (API keys, authentication headers, raw payloads) cannot accidentally be leaked to stderr or serialized logs across provider transports. Without this constants module, configuration parameters and security filtering definitions would be duplicated across transports and adapters, increasing the risk of credential leakage and inconsistent retry behaviors.

## Phase — required
none

## Inputs — required
Function `normalize_fingerprint` takes an arbitrary provider metadata `value` (`object`) and applies the shared string-or-absence validation policy via `require_str_or_none`.

## Outputs — required
Exported configuration constants and helper:
- Error category strings: `ERR_RATE_LIMIT`, `ERR_SERVER_ERROR`, `ERR_TIMEOUT`, `ERR_CLIENT_ERROR`, `ERR_AUTH`, `ERR_UNKNOWN`, `ERR_TOTAL_TIMEOUT`
- Retry and timeout constants: `DEFAULT_MAX_RETRIES = 3`, `BACKOFF_BASE_SEC = 1.0`, `BACKOFF_MAX_SEC = 30.0`, `DEFAULT_TOTAL_TIMEOUT_SEC = 180.0`
- Pattern matchers and hints: `HTTP_STATUS_RE`, `TIMEOUT_HINT`, `RATE_LIMIT_HINT`, `AUTH_HINT_RE`
- Field security sets: `ALLOWED_LOG_FIELDS` (10 permitted logging keys) and `BANNED_LOG_FIELDS` (13 prohibited secret keys)
- Function `normalize_fingerprint(value: object) -> str | None`

## Invokes — required
- script _eval_common — scripts/eval/_eval_api_adapter_constants.py:8

## Invoked by — required
- script _constants — scripts/eval/_eval_api_adapter.py:41
- script _constants — scripts/eval/_providers.py:50

## Concepts named — required, verbatim
- `ERR_RATE_LIMIT` — scripts/eval/_eval_api_adapter_constants.py:10 — defined here
- `ERR_SERVER_ERROR` — scripts/eval/_eval_api_adapter_constants.py:11 — defined here
- `ERR_TIMEOUT` — scripts/eval/_eval_api_adapter_constants.py:12 — defined here
- `ERR_CLIENT_ERROR` — scripts/eval/_eval_api_adapter_constants.py:13 — defined here
- `ERR_AUTH` — scripts/eval/_eval_api_adapter_constants.py:14 — defined here
- `ERR_UNKNOWN` — scripts/eval/_eval_api_adapter_constants.py:15 — defined here
- `ERR_TOTAL_TIMEOUT` — scripts/eval/_eval_api_adapter_constants.py:16 — defined here
- `DEFAULT_MAX_RETRIES` — scripts/eval/_eval_api_adapter_constants.py:18 — defined here
- `BACKOFF_BASE_SEC` — scripts/eval/_eval_api_adapter_constants.py:19 — defined here
- `BACKOFF_MAX_SEC` — scripts/eval/_eval_api_adapter_constants.py:20 — defined here
- `DEFAULT_TOTAL_TIMEOUT_SEC` — scripts/eval/_eval_api_adapter_constants.py:21 — defined here
- `HTTP_STATUS_RE` — scripts/eval/_eval_api_adapter_constants.py:23 — defined here
- `TIMEOUT_HINT` — scripts/eval/_eval_api_adapter_constants.py:24 — defined here
- `RATE_LIMIT_HINT` — scripts/eval/_eval_api_adapter_constants.py:25 — defined here
- `AUTH_HINT_RE` — scripts/eval/_eval_api_adapter_constants.py:26 — defined here
- `ALLOWED_LOG_FIELDS` — scripts/eval/_eval_api_adapter_constants.py:31 — defined here
- `normalize_fingerprint` — scripts/eval/_eval_api_adapter_constants.py:47 — defined here
- `BANNED_LOG_FIELDS` — scripts/eval/_eval_api_adapter_constants.py:52 — defined here

## Structure
none (Python module; defines error categories, retry and timeout constants, regex matchers, ALLOWED_LOG_FIELDS frozenset, normalize_fingerprint function, and BANNED_LOG_FIELDS frozenset)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_eval_api_adapter_constants.py`, language: Python 3, lines: 69
- documented invocation: none (internal constants module imported by _eval_api_adapter.py and _providers.py)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  `python3 sources/rjm/scripts/eval/_eval_api_adapter_constants.py`, stdout: `""` (empty), actual exit code: `0`
- documented exit codes vs actual exit paths:
  Documented exit codes: none (internal constants module). Actual exit paths in code: no `sys.exit()` calls; module import exits 0.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone validator CLI. `normalize_fingerprint` will raise `MalformedProviderMetadataError` if passed invalid metadata types.
- does the output match what the documentation claims?
  Yes, defines constants cleanly without stdout/stderr output.

## Defects — required
none

## Observations
- Explicit security redaction boundary: `BANNED_LOG_FIELDS` enumerates forbidden sensitive keys (`api_key`, `authorization`, `headers`, `messages`, `payload`, `prompt`, `raw_error`, `raw_response`, `request_body`, `response_body`, `secret`, `system`, `token`), which `_eval_api_adapter._emit_log` checks and rejects.
- `AUTH_HINT_RE` supports case-insensitive detection of CLI and subprocess authentication errors (`authentication failed`, `not logged in`, `not signed in`, `please log/sign in`, `login required`).

## Context cost
1597 bytes for this file, plus `_eval_common.py` (8094 bytes) and `_eval_errors.py` (236 bytes). Total: 9927 bytes (~2500 tokens).
