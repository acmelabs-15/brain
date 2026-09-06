---
unit: inv-rjm-217
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-217

## Files assigned
- [x] `scripts/eval/_eval_agent_types.py`
- [x] `scripts/eval/_eval_api_adapter_constants.py`
- [x] `scripts/eval/_eval_api_adapter.py`
- [x] `scripts/eval/_eval_common.py`
- [x] `scripts/eval/_eval_errors.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval--eval-agent-types-py.md` (6665 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-constants-py.md` (5741 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-py.md` (6566 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--eval-common-py.md` (6506 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--eval-errors-py.md` (2732 bytes)

## Scripts executed
- `scripts/eval/_eval_agent_types.py`, `python3 sources/rjm/scripts/eval/_eval_agent_types.py`, exit code 0
- `scripts/eval/_eval_api_adapter_constants.py`, `python3 sources/rjm/scripts/eval/_eval_api_adapter_constants.py`, exit code 0
- `scripts/eval/_eval_api_adapter.py`, `python3 sources/rjm/scripts/eval/_eval_api_adapter.py`, exit code 0
- `scripts/eval/_eval_common.py`, `python3 sources/rjm/scripts/eval/_eval_common.py`, exit code 0
- `scripts/eval/_eval_errors.py`, `python3 sources/rjm/scripts/eval/_eval_errors.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- These five files form the foundational data models, provider adapter layer, pricing tables, error classification, and exception hierarchy of rjm's offline evaluation harness (`eval-agent-vs-baseline.py`, `variance-control.py`, `eval-agents.py`, `eval-knowledge-integration.py`).
- `_eval_errors.py` is an isolated 8-line module created specifically to preserve the exception identity of `MalformedProviderMetadataError` across script-style module reloads, avoiding broken `except` blocks when `_eval_common.py` is re-imported during testing.
- `_eval_common.py` acts as the single source of truth for model token pricing (`MODEL_PRICING_RATES_USD_PER_1K_TOKENS`) and effective pricing dates (`PRICING_RATE_AS_OF`), consumed by `_plan_runner.py` and `_report_aggregator.py`. Subscription-based engines (such as `copilot-cli`) are explicitly classified as quota-billed (`QUOTA_BILLED_PROVIDERS`) rather than assigned fabricated token prices.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,743 tokens (38,972 bytes across 5 files). Approximate tokens of output written: ~7,052 tokens (28,210 bytes across 5 cards).
