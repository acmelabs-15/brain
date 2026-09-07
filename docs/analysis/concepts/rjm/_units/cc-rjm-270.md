---
unit: cc-rjm-270
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-270

## Files assigned
- [x] sources/rjm/scripts/eval/_eval_agent_types.py
- [x] sources/rjm/scripts/eval/_eval_api_adapter.py
- [x] sources/rjm/scripts/eval/_eval_api_adapter_constants.py
- [x] sources/rjm/scripts/eval/_oneshot_bench_core.py
- [x] sources/rjm/scripts/eval/_plan_runner.py
- [x] sources/rjm/scripts/eval/_providers.py
- [x] sources/rjm/scripts/eval/_run_persistence.py
- [x] sources/rjm/scripts/eval/_runtime_parity.py
- [x] sources/rjm/scripts/eval/_scoring_engine.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/skill_description_budget.py
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-agent-types-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--scoring-engine-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-persistence-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--oneshot-bench-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--plan-runner-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--runtime-parity-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-constants-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--providers-py.md
- [x] docs/analysis/inventory/rjm/scripts-skill-description-budget-py.md

## Outputs produced
- docs/analysis/concepts/rjm/assertion.md (1748 bytes)
- docs/analysis/concepts/rjm/assertionresult.md (1893 bytes)
- docs/analysis/concepts/rjm/fixture.md (2491 bytes)
- docs/analysis/concepts/rjm/err-rate-limit.md (939 bytes)
- docs/analysis/concepts/rjm/err-server-error.md (926 bytes)
- docs/analysis/concepts/rjm/err-timeout.md (904 bytes)
- docs/analysis/concepts/rjm/err-client-error.md (944 bytes)
- docs/analysis/concepts/rjm/err-auth.md (909 bytes)
- docs/analysis/concepts/rjm/err-unknown.md (901 bytes)
- docs/analysis/concepts/rjm/err-total-timeout.md (964 bytes)
- docs/analysis/concepts/rjm/backoff-base-sec.md (958 bytes)
- docs/analysis/concepts/rjm/backoff-max-sec.md (947 bytes)
- docs/analysis/concepts/rjm/default-total-timeout-sec.md (992 bytes)
- docs/analysis/concepts/rjm/http-status-re.md (937 bytes)
- docs/analysis/concepts/rjm/timeout-hint.md (899 bytes)
- docs/analysis/concepts/rjm/rate-limit-hint.md (936 bytes)
- docs/analysis/concepts/rjm/auth-hint-re.md (916 bytes)
- docs/analysis/concepts/rjm/allowed-log-fields.md (958 bytes)
- docs/analysis/concepts/rjm/normalize-fingerprint.md (962 bytes)
- docs/analysis/concepts/rjm/banned-log-fields.md (960 bytes)
- docs/analysis/concepts/rjm/categorize-error.md (928 bytes)
- docs/analysis/concepts/rjm/is-transient.md (919 bytes)
- docs/analysis/concepts/rjm/backoff-delay-seconds.md (978 bytes)
- docs/analysis/concepts/rjm/emit-log.md (929 bytes)
- docs/analysis/concepts/rjm/transport.md (1074 bytes)
- docs/analysis/concepts/rjm/providerwithfingerprint.md (981 bytes)
- docs/analysis/concepts/rjm/openaiprovidertransport.md (963 bytes)
- docs/analysis/concepts/rjm/anthropictransport.md (927 bytes)
- docs/analysis/concepts/rjm/default-transport-factory.md (1018 bytes)
- docs/analysis/concepts/rjm/estimate-tokens.md (1159 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-270.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/assertion.md docs/analysis/concepts/rjm/assertionresult.md docs/analysis/concepts/rjm/fixture.md docs/analysis/concepts/rjm/err-rate-limit.md docs/analysis/concepts/rjm/err-server-error.md docs/analysis/concepts/rjm/err-timeout.md docs/analysis/concepts/rjm/err-client-error.md docs/analysis/concepts/rjm/err-auth.md docs/analysis/concepts/rjm/err-unknown.md docs/analysis/concepts/rjm/err-total-timeout.md docs/analysis/concepts/rjm/backoff-base-sec.md docs/analysis/concepts/rjm/backoff-max-sec.md docs/analysis/concepts/rjm/default-total-timeout-sec.md docs/analysis/concepts/rjm/http-status-re.md docs/analysis/concepts/rjm/timeout-hint.md docs/analysis/concepts/rjm/rate-limit-hint.md docs/analysis/concepts/rjm/auth-hint-re.md docs/analysis/concepts/rjm/allowed-log-fields.md docs/analysis/concepts/rjm/normalize-fingerprint.md docs/analysis/concepts/rjm/banned-log-fields.md docs/analysis/concepts/rjm/categorize-error.md docs/analysis/concepts/rjm/is-transient.md docs/analysis/concepts/rjm/backoff-delay-seconds.md docs/analysis/concepts/rjm/emit-log.md docs/analysis/concepts/rjm/transport.md docs/analysis/concepts/rjm/providerwithfingerprint.md docs/analysis/concepts/rjm/openaiprovidertransport.md docs/analysis/concepts/rjm/anthropictransport.md docs/analysis/concepts/rjm/default-transport-factory.md docs/analysis/concepts/rjm/estimate-tokens.md` (exit code 0: 22 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-270 completes 30 concept cards covering all 43 occurrences across evaluation harness data types, benchmark fixtures, and evaluation API adapter constants and transports:
  1. Evaluation agent types and scoring entities (`Assertion`, `AssertionResult`, `Fixture`) from `scripts/eval/_eval_agent_types.py`, `scripts/eval/_scoring_engine.py`, `scripts/eval/_run_persistence.py`, `scripts/eval/_oneshot_bench_core.py`, `scripts/eval/_plan_runner.py`, `scripts/eval/_runtime_parity.py`, `scripts/eval/eval-agent-vs-baseline.py`, and `scripts/eval/eval-oneshot-vs-shipped.py`. `Assertion`, `AssertionResult`, and `Fixture` are evaluation domain artifacts belonging to `rjm:Test`.
  2. Evaluation API adapter error category constants, backoff timeouts, regex patterns, and logging allowlist/denylist sets (`ERR_RATE_LIMIT`, `ERR_SERVER_ERROR`, `ERR_TIMEOUT`, `ERR_CLIENT_ERROR`, `ERR_AUTH`, `ERR_UNKNOWN`, `ERR_TOTAL_TIMEOUT`, `BACKOFF_BASE_SEC`, `BACKOFF_MAX_SEC`, `DEFAULT_TOTAL_TIMEOUT_SEC`, `HTTP_STATUS_RE`, `TIMEOUT_HINT`, `RATE_LIMIT_HINT`, `AUTH_HINT_RE`, `ALLOWED_LOG_FIELDS`, `normalize_fingerprint`, `BANNED_LOG_FIELDS`) from `scripts/eval/_eval_api_adapter_constants.py`.
  3. Evaluation API adapter runtime error classification, backoff calculation, logging dispatch, transport protocols, transport implementations, and token estimation helpers (`_categorize_error`, `_is_transient`, `_backoff_delay_seconds`, `_emit_log`, `Transport`, `_ProviderWithFingerprint`, `_OpenAIProviderTransport`, `_AnthropicTransport`, `_default_transport_factory`, `_estimate_tokens`) from `scripts/eval/_eval_api_adapter.py`, `scripts/eval/_providers.py`, and `scripts/skill_description_budget.py`.
- 27 of the 30 concepts are constants, function names, types, or protocols classified with `kind: name-only` per D-023; 3 concepts (`Assertion`, `AssertionResult`, `Fixture`) are classified as `kind: artifact` belonging to `rjm:Test`.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (e.g. `defects: exit-code-mismatch, script-bug` for `_eval_agent_types.py` items; `clean` for `_eval_api_adapter_constants.py` items; `defects: missing-path` for `_estimate_tokens`).
- Verification passed with `bun scripts/synthesis/quote-check.ts` (exit code 0, 22 PASS, 0 FAIL, 0 MISSING source across 30 cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~60,000 tokens across 12 source scripts and 12 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
