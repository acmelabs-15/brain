---
package: rjm
path: scripts/eval/_eval_common.py
type: script
bytes: 8094
unit: inv-rjm-217
in_scope_via: .agents/architecture/ADR-081-confidence-elicitation-experiment.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_eval_common.py

## Purpose — required, verbatim
> "Shared utilities for eval scripts." — scripts/eval/_eval_common.py:1

## Design intent — required
Centralizes common pricing rate tables, token estimation constants, billing basis resolution, provider response sanitization, metadata type validation, and multi-run score aggregation across all evaluation scripts in rjm. It establishes a canonical owner for live per-model token prices (`MODEL_PRICING_RATES_USD_PER_1K_TOKENS`) and effective rate timestamps (`PRICING_RATE_AS_OF`), identifies quota-billed versus token-billed provider transports (`cost_basis`), provides sanitized HTTP error messages that redact provider bodies (`safe_http_error_message`), enforces strict string-or-null write policies for provider metadata (`require_str_or_none`), and computes dimensional score averages with flakiness variance tracking (`aggregate_multi_run_scores`). Without this shared module, pricing rates and flakiness thresholds would drift across eval tools, and unsanitized error payloads or unvalidated metadata would corrupt evaluation reporting.

## Phase — required
none

## Inputs — required
Functions consume:
- `safe_http_error_message`: `provider_surface: str`, `status_code: int`
- `cost_basis`: `provider: str | None` and `EVAL_PROVIDER` environment variable
- `require_str_or_none`: `value: object`, `field: str`
- `aggregate_multi_run_scores`: `run_scores: list[dict[str, Any]]`, `dimensions: list[str]`

## Outputs — required
- Sanitized HTTP error description string (`safe_http_error_message`)
- Provider billing basis string (`"usd"` or `"requests"`) (`cost_basis`)
- Validated string or None (`require_str_or_none`), or raises `MalformedProviderMetadataError`
- Aggregated score dictionary with averaged dimensions, variances, total runs, flakiness flag, and run details (`aggregate_multi_run_scores`)
- Public module constants: `EST_TOKENS_PER_CALL`, `FLAKINESS_VARIANCE_THRESHOLD`, `MODEL_PRICING_RATES_USD_PER_1K_TOKENS`, `PRICING_RATE_AS_OF`, `QUOTA_BILLED_PROVIDERS`

## Invokes — required
- script _eval_errors — scripts/eval/_eval_common.py:12

## Invoked by — required
- script _eval_common — scripts/eval/_eval_api_adapter_constants.py:8
- script _eval_common — scripts/eval/_eval_api_adapter.py:43
- script _eval_common — scripts/eval/_anthropic_api.py:21
- script _eval_common — scripts/eval/_copilot_cli_transcript.py:15
- script _eval_common — scripts/eval/_plan_runner.py:13
- script _eval_common — scripts/eval/_providers.py:52
- script _eval_common — scripts/eval/_report_aggregator.py:27
- script _eval_common — scripts/eval/_run_rollup_core.py:33
- script _eval_common — scripts/eval/eval-agent-vs-baseline.py:49
- script _eval_common — scripts/eval/eval-agents.py:52
- script _eval_common — scripts/eval/eval-knowledge-integration.py:35
- script _eval_common — scripts/eval/eval-prompt-change.py:77
- script _eval_common — scripts/eval/eval-rule-activation.py:70
- script _eval_common — scripts/eval/eval-skill-overlap.py:69

## Concepts named — required, verbatim
- `MalformedProviderMetadataError` — scripts/eval/_eval_common.py:12 — used here
- `EST_TOKENS_PER_CALL` — scripts/eval/_eval_common.py:18 — defined here
- `FLAKINESS_VARIANCE_THRESHOLD` — scripts/eval/_eval_common.py:19 — defined here
- `DESIGN-004` — scripts/eval/_eval_common.py:22 — used here
- `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` — scripts/eval/_eval_common.py:24 — defined here
- `PRICING_RATE_AS_OF` — scripts/eval/_eval_common.py:47 — defined here
- `QUOTA_BILLED_PROVIDERS` — scripts/eval/_eval_common.py:63 — defined here
- `safe_http_error_message` — scripts/eval/_eval_common.py:68 — defined here
- `cost_basis` — scripts/eval/_eval_common.py:88 — defined here
- `require_str_or_none` — scripts/eval/_eval_common.py:113 — defined here
- `aggregate_multi_run_scores` — scripts/eval/_eval_common.py:138 — defined here
- `ADR-057` — scripts/eval/_eval_common.py:142 — used here

## Structure
none (Python module; defines token and flakiness constants, MODEL_PRICING_RATES_USD_PER_1K_TOKENS dictionary, PRICING_RATE_AS_OF, QUOTA_BILLED_PROVIDERS frozenset, safe_http_error_message, cost_basis, require_str_or_none, and aggregate_multi_run_scores)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_eval_common.py`, language: Python 3, lines: 179
- documented invocation: none (internal shared module imported by eval runners and adapters)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  `python3 sources/rjm/scripts/eval/_eval_common.py`, stdout: `""` (empty), actual exit code: `0`
- documented exit codes vs actual exit paths:
  Documented exit codes: none (internal shared module). Actual exit paths in code: no `sys.exit()` calls; normal import returns 0.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone validator CLI. `require_str_or_none` raises `MalformedProviderMetadataError` if value is neither string nor None. `aggregate_multi_run_scores` evaluates variance against `FLAKINESS_VARIANCE_THRESHOLD` (1.0) and sets `flaky: True` if tripped.
- does the output match what the documentation claims?
  Yes, defines constants and helper functions cleanly.

## Defects — required
none

## Observations
- Intentional omission of subscription models: `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` deliberately omits `gpt-5.6-sol` because it is reachable solely through `copilot-cli`, which bills against a subscription request quota rather than per-token USD rates, preventing fabricated dollar figures in cost reports.
- `cost_basis` resolves provider names using case-insensitive normalization matching `_providers.resolve_provider`, mapping `github`, `github-models`, `copilot`, and `copilot-cli` to `"requests"` and all other providers to `"usd"`.
- `require_str_or_none` enforces that provider provenance values (such as `system_fingerprint`) must be strictly string or None, raising `MalformedProviderMetadataError` at the provider boundary rather than coercing malformed types to None.

## Context cost
8094 bytes for this file, plus `_eval_errors.py` (236 bytes). Total: 8330 bytes (~2100 tokens).
