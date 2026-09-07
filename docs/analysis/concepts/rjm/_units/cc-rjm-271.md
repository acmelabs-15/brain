---
unit: cc-rjm-271
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-271

## Files assigned
- [x] sources/rjm/scripts/eval/_eval_common.py
- [x] sources/rjm/scripts/eval/_model_panel_core.py
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/_plan_runner.py
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/panels/owner-copilot-cli.json
- [x] sources/rjm/scripts/skill_description_budget.py
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--model-panel-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--model-sweep-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--plan-runner-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-rollup-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-panels-owner-copilot-cli-json.md
- [x] docs/analysis/inventory/rjm/scripts-skill-description-budget-py.md

## Outputs produced
- docs/analysis/concepts/rjm/est-tokens-per-call.md (1668 bytes)
- docs/analysis/concepts/rjm/flakiness-variance-threshold.md (942 bytes)
- docs/analysis/concepts/rjm/model-pricing-rates-usd-per-1k-tokens.md (1567 bytes)
- docs/analysis/concepts/rjm/pricing-rate-as-of.md (1296 bytes)
- docs/analysis/concepts/rjm/quota-billed-providers.md (941 bytes)
- docs/analysis/concepts/rjm/safe-http-error-message.md (957 bytes)
- docs/analysis/concepts/rjm/cost-basis.md (1155 bytes)
- docs/analysis/concepts/rjm/require-str-or-none.md (1066 bytes)
- docs/analysis/concepts/rjm/aggregate-multi-run-scores.md (1357 bytes)
- docs/analysis/concepts/rjm/reference-band.md (1107 bytes)
- docs/analysis/concepts/rjm/degradation-classification.md (1006 bytes)
- docs/analysis/concepts/rjm/recall-delta.md (1059 bytes)
- docs/analysis/concepts/rjm/drop-threshold.md (951 bytes)
- docs/analysis/concepts/rjm/role-reference.md (870 bytes)
- docs/analysis/concepts/rjm/role-probe.md (854 bytes)
- docs/analysis/concepts/rjm/default-drop-threshold.md (907 bytes)
- docs/analysis/concepts/rjm/panelconfigerror.md (1056 bytes)
- docs/analysis/concepts/rjm/paneltier.md (959 bytes)
- docs/analysis/concepts/rjm/default-panel.md (1139 bytes)
- docs/analysis/concepts/rjm/parse-panel.md (872 bytes)
- docs/analysis/concepts/rjm/cellresult.md (996 bytes)
- docs/analysis/concepts/rjm/unitverdict.md (868 bytes)
- docs/analysis/concepts/rjm/cell-from-report.md (1122 bytes)
- docs/analysis/concepts/rjm/summarize-unit.md (891 bytes)
- docs/analysis/concepts/rjm/summarize.md (1036 bytes)
- docs/analysis/concepts/rjm/to-json.md (1229 bytes)
- docs/analysis/concepts/rjm/to-human.md (1213 bytes)
- docs/analysis/concepts/rjm/load-panel-config.md (1085 bytes)
- docs/analysis/concepts/rjm/issue-2840.md (1062 bytes)
- docs/analysis/concepts/rjm/software-hierarchy.md (984 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-271.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/est-tokens-per-call.md docs/analysis/concepts/rjm/flakiness-variance-threshold.md docs/analysis/concepts/rjm/model-pricing-rates-usd-per-1k-tokens.md docs/analysis/concepts/rjm/pricing-rate-as-of.md docs/analysis/concepts/rjm/quota-billed-providers.md docs/analysis/concepts/rjm/safe-http-error-message.md docs/analysis/concepts/rjm/cost-basis.md docs/analysis/concepts/rjm/require-str-or-none.md docs/analysis/concepts/rjm/aggregate-multi-run-scores.md docs/analysis/concepts/rjm/reference-band.md docs/analysis/concepts/rjm/degradation-classification.md docs/analysis/concepts/rjm/recall-delta.md docs/analysis/concepts/rjm/drop-threshold.md docs/analysis/concepts/rjm/role-reference.md docs/analysis/concepts/rjm/role-probe.md docs/analysis/concepts/rjm/default-drop-threshold.md docs/analysis/concepts/rjm/panelconfigerror.md docs/analysis/concepts/rjm/paneltier.md docs/analysis/concepts/rjm/default-panel.md docs/analysis/concepts/rjm/parse-panel.md docs/analysis/concepts/rjm/cellresult.md docs/analysis/concepts/rjm/unitverdict.md docs/analysis/concepts/rjm/cell-from-report.md docs/analysis/concepts/rjm/summarize-unit.md docs/analysis/concepts/rjm/summarize.md docs/analysis/concepts/rjm/to-json.md docs/analysis/concepts/rjm/to-human.md docs/analysis/concepts/rjm/load-panel-config.md docs/analysis/concepts/rjm/issue-2840.md docs/analysis/concepts/rjm/software-hierarchy.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-271 produces 30 concept cards across 13 source files covering shared evaluation infrastructure, model-panel sweep mechanics, pricing/token estimation, and model comparison core logic:
  1. Shared evaluation utilities and constants in `scripts/eval/_eval_common.py` (`EST_TOKENS_PER_CALL`, `FLAKINESS_VARIANCE_THRESHOLD`, `MODEL_PRICING_RATES_USD_PER_1K_TOKENS`, `PRICING_RATE_AS_OF`, `QUOTA_BILLED_PROVIDERS`, `safe_http_error_message`, `cost_basis`, `require_str_or_none`, `aggregate_multi_run_scores`).
  2. Model-panel sweep core definitions, thresholds, roles, dataclasses, and functions in `scripts/eval/_model_panel_core.py` and `scripts/eval/eval-model-panel.py` (`reference band`, `degradation classification`, `recall_delta`, `drop_threshold`, `ROLE_REFERENCE`, `ROLE_PROBE`, `DEFAULT_DROP_THRESHOLD`, `PanelConfigError`, `PanelTier`, `default_panel`, `parse_panel`, `CellResult`, `UnitVerdict`, `cell_from_report`, `summarize_unit`, `summarize`, `to_json`, `to_human`, `load_panel_config`).
  3. Shared serialization functions `to_json` and `to_human` co-defined in `scripts/skill_description_budget.py`.
  4. Issue tracking identifier `Issue #2840` in `scripts/eval/_model_sweep_core.py` and `scripts/eval/eval-model-sweep.py`.
  5. Architectural design guideline citation `Software Hierarchy` in `scripts/eval/_model_sweep_core.py`.
- All 30 concepts are categorized with `kind: name-only` per D-023 as Python constants, dataclasses, helper functions, issue identifiers, or code design comment references rather than independent lifecycle concepts.
- All 63 occurrence rows listed in `facts/cc-rjm-271.txt` are mapped in the Where used tables.
- Inventory defects (e.g. `missing-path`, `doc-drift`, `other`) were propagated to `Implementation status`.
- Verified 30 PASS, 0 FAIL via `bun scripts/synthesis/quote-check.ts`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~25,000 tokens across 13 source scripts and 13 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
