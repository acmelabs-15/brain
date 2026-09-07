---
unit: cc-rjm-290
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-290

## Files assigned
- [x] sources/rjm/scripts/external_signals/__init__.py
- [x] sources/rjm/scripts/external_signals/acceptance_criteria.py
- [x] sources/rjm/scripts/external_signals/gate_aggregator.py
- [x] sources/rjm/scripts/generate_third_party_notices.py
- [x] sources/rjm/scripts/gh_retry_helpers.py
- [x] sources/rjm/scripts/github_core/__init__.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/github_core/rate_limit.py
- [x] sources/rjm/scripts/redact_secrets.py
- [x] docs/analysis/inventory/rjm/scripts-external-signals---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals-acceptance-criteria-py.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals-gate-aggregator-py.md
- [x] docs/analysis/inventory/rjm/scripts-generate-third-party-notices-py.md
- [x] docs/analysis/inventory/rjm/scripts-gh-retry-helpers-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-rate-limit-py.md
- [x] docs/analysis/inventory/rjm/scripts-redact-secrets-py.md

## Outputs produced
- docs/analysis/concepts/rjm/docs-design-external-signal-gating-md.md (1029 bytes)
- docs/analysis/concepts/rjm/acceptance-criteria-checkboxes.md (1372 bytes)
- docs/analysis/concepts/rjm/criterion.md (880 bytes)
- docs/analysis/concepts/rjm/extract-acceptance-section.md (969 bytes)
- docs/analysis/concepts/rjm/parse-criteria.md (941 bytes)
- docs/analysis/concepts/rjm/keywords.md (896 bytes)
- docs/analysis/concepts/rjm/diff-misses.md (955 bytes)
- docs/analysis/concepts/rjm/ai-review-common-verdict.md (938 bytes)
- docs/analysis/concepts/rjm/check-ai-review-infra-gate-py.md (989 bytes)
- docs/analysis/concepts/rjm/verdict-py.md (914 bytes)
- docs/analysis/concepts/rjm/check-critical-failures-py.md (950 bytes)
- docs/analysis/concepts/rjm/parse-ai-review-output-py.md (955 bytes)
- docs/analysis/concepts/rjm/external-signal-gate-py.md (956 bytes)
- docs/analysis/concepts/rjm/known-verdicts.md (941 bytes)
- docs/analysis/concepts/rjm/parse-signal.md (919 bytes)
- docs/analysis/concepts/rjm/shippedcomponent.md (920 bytes)
- docs/analysis/concepts/rjm/load-marketplace-config.md (986 bytes)
- docs/analysis/concepts/rjm/get-shipped-source-paths.md (971 bytes)
- docs/analysis/concepts/rjm/find-forked-components.md (978 bytes)
- docs/analysis/concepts/rjm/find-runtime-dependencies.md (943 bytes)
- docs/analysis/concepts/rjm/parse-requirements.md (923 bytes)
- docs/analysis/concepts/rjm/format-notices.md (850 bytes)
- docs/analysis/concepts/rjm/resolve-output-path.md (941 bytes)
- docs/analysis/concepts/rjm/check-outputs.md (879 bytes)
- docs/analysis/concepts/rjm/redact-ci-sink.md (1006 bytes)
- docs/analysis/concepts/rjm/downstream-review-reserve-seconds.md (969 bytes)
- docs/analysis/concepts/rjm/issue-4333.md (900 bytes)
- docs/analysis/concepts/rjm/invoke-gh-once.md (934 bytes)
- docs/analysis/concepts/rjm/sync-plugin-lib-py.md (924 bytes)
- docs/analysis/concepts/rjm/default-rate-thresholds.md (1249 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-290.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/docs-design-external-signal-gating-md.md docs/analysis/concepts/rjm/acceptance-criteria-checkboxes.md docs/analysis/concepts/rjm/criterion.md docs/analysis/concepts/rjm/extract-acceptance-section.md docs/analysis/concepts/rjm/parse-criteria.md docs/analysis/concepts/rjm/keywords.md docs/analysis/concepts/rjm/diff-misses.md docs/analysis/concepts/rjm/ai-review-common-verdict.md docs/analysis/concepts/rjm/check-ai-review-infra-gate-py.md docs/analysis/concepts/rjm/verdict-py.md docs/analysis/concepts/rjm/check-critical-failures-py.md docs/analysis/concepts/rjm/parse-ai-review-output-py.md docs/analysis/concepts/rjm/external-signal-gate-py.md docs/analysis/concepts/rjm/known-verdicts.md docs/analysis/concepts/rjm/parse-signal.md docs/analysis/concepts/rjm/shippedcomponent.md docs/analysis/concepts/rjm/load-marketplace-config.md docs/analysis/concepts/rjm/get-shipped-source-paths.md docs/analysis/concepts/rjm/find-forked-components.md docs/analysis/concepts/rjm/find-runtime-dependencies.md docs/analysis/concepts/rjm/parse-requirements.md docs/analysis/concepts/rjm/format-notices.md docs/analysis/concepts/rjm/resolve-output-path.md docs/analysis/concepts/rjm/check-outputs.md docs/analysis/concepts/rjm/redact-ci-sink.md docs/analysis/concepts/rjm/downstream-review-reserve-seconds.md docs/analysis/concepts/rjm/issue-4333.md docs/analysis/concepts/rjm/invoke-gh-once.md docs/analysis/concepts/rjm/sync-plugin-lib-py.md docs/analysis/concepts/rjm/default-rate-thresholds.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-290 covers 30 concept cards across 9 source scripts and modules:
  1. External signal gating: `acceptance-criteria checkboxes` (kind: checklist, rjm:spec) plus helper functions and dataclasses (`Criterion`, `extract_acceptance_section`, `parse_criteria`, `_keywords`, `diff_misses`) in `acceptance_criteria.py`.
  2. Gate aggregation and verdict tokens: `ai_review_common.verdict`, `check_ai_review_infra_gate.py`, `verdict.py`, `check_critical_failures.py`, `parse_ai_review_output.py`, `external_signal_gate.py`, `KNOWN_VERDICTS`, `parse_signal` in `gate_aggregator.py`.
  3. Third-party license attribution and notice generation: `ShippedComponent`, `load_marketplace_config`, `get_shipped_source_paths`, `find_forked_components`, `find_runtime_dependencies`, `_parse_requirements`, `format_notices`, `resolve_output_path`, `_check_outputs` in `generate_third_party_notices.py`.
  4. GitHub CLI retry and CI sink secret redaction: `redact_ci_sink` (spanning `gh_retry_helpers.py` and `redact_secrets.py`), `DOWNSTREAM_REVIEW_RESERVE_SECONDS`, `issue #4333`, `_invoke_gh_once` in `gh_retry_helpers.py`.
  5. GitHub core module configuration and rate limit thresholds: `sync_plugin_lib.py`, `DEFAULT_RATE_THRESHOLDS` (spanning `github_core/__init__.py`, `github_core/api.py`, and `github_core/rate_limit.py`).
- 29 of the 30 concepts represent code identifiers, functions, dataclasses, constants, tickets, or script file names and are classified as `kind: name-only` per D-023. One concept (`acceptance-criteria checkboxes`) is an SDLC lifecycle checklist artifact (`kind: checklist`, `package_phase: rjm:spec`).
- All 33 occurrence rows from `facts/cc-rjm-290.txt` are faithfully mapped into `Where used` tables.
- Inventory defects from `docs/analysis/inventory/rjm/scripts-github-core-api-py.md` (`exit-code-mismatch, doc-drift`) were properly propagated to `DEFAULT_RATE_THRESHOLDS`. All other source files have clean implementation status.
- Zero quote-check failures across all 30 concept cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~41,750 tokens across 9 source scripts and 9 inventory cards.
Approximate tokens of output written: ~7,500 tokens across 30 concept cards and 1 unit report.
