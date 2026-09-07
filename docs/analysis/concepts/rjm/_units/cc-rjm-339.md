---
unit: cc-rjm-339
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-339

## Files assigned
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] sources/rjm/scripts/validation/check_ruleset_params_drift.py
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-ruleset-params-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md

## Outputs produced
- docs/analysis/concepts/rjm/rule-scenarios-subdir.md (911 bytes)
- docs/analysis/concepts/rjm/skill-scenarios-subdir.md (918 bytes)
- docs/analysis/concepts/rjm/baseline-rule-key.md (860 bytes)
- docs/analysis/concepts/rjm/baseline-skill-key.md (867 bytes)
- docs/analysis/concepts/rjm/exit-ratchet.md (831 bytes)
- docs/analysis/concepts/rjm/coverageconfigerror.md (925 bytes)
- docs/analysis/concepts/rjm/discover-rules.md (884 bytes)
- docs/analysis/concepts/rjm/read-scenario-json.md (898 bytes)
- docs/analysis/concepts/rjm/validate-scenarios-measure.md (978 bytes)
- docs/analysis/concepts/rjm/resolve-target.md (883 bytes)
- docs/analysis/concepts/rjm/is-reference-scenario.md (970 bytes)
- docs/analysis/concepts/rjm/covered-ids.md (901 bytes)
- docs/analysis/concepts/rjm/load-id-list.md (944 bytes)
- docs/analysis/concepts/rjm/diff-uncovered.md (974 bytes)
- docs/analysis/concepts/rjm/build-baseline-payload.md (911 bytes)
- docs/analysis/concepts/rjm/compute-uncovered.md (923 bytes)
- docs/analysis/concepts/rjm/ruleset-params-baseline-json.md (969 bytes)
- docs/analysis/concepts/rjm/repo.md (841 bytes)
- docs/analysis/concepts/rjm/fetch-live-params.md (927 bytes)
- docs/analysis/concepts/rjm/check-drift.md (887 bytes)
- docs/analysis/concepts/rjm/routing-gate.md (1274 bytes)
- docs/analysis/concepts/rjm/canonical-root-name.md (847 bytes)
- docs/analysis/concepts/rjm/platform-parent.md (875 bytes)
- docs/analysis/concepts/rjm/plugin-manifest.md (877 bytes)
- docs/analysis/concepts/rjm/pruned-dirs.md (833 bytes)
- docs/analysis/concepts/rjm/route-re.md (833 bytes)
- docs/analysis/concepts/rjm/name-re.md (802 bytes)
- docs/analysis/concepts/rjm/trailing.md (832 bytes)
- docs/analysis/concepts/rjm/brackets.md (796 bytes)
- docs/analysis/concepts/rjm/awaited-closers.md (883 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-339.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/rule-scenarios-subdir.md docs/analysis/concepts/rjm/skill-scenarios-subdir.md docs/analysis/concepts/rjm/baseline-rule-key.md docs/analysis/concepts/rjm/baseline-skill-key.md docs/analysis/concepts/rjm/exit-ratchet.md docs/analysis/concepts/rjm/coverageconfigerror.md docs/analysis/concepts/rjm/discover-rules.md docs/analysis/concepts/rjm/read-scenario-json.md docs/analysis/concepts/rjm/validate-scenarios-measure.md docs/analysis/concepts/rjm/resolve-target.md docs/analysis/concepts/rjm/is-reference-scenario.md docs/analysis/concepts/rjm/covered-ids.md docs/analysis/concepts/rjm/load-id-list.md docs/analysis/concepts/rjm/diff-uncovered.md docs/analysis/concepts/rjm/build-baseline-payload.md docs/analysis/concepts/rjm/compute-uncovered.md docs/analysis/concepts/rjm/ruleset-params-baseline-json.md docs/analysis/concepts/rjm/repo.md docs/analysis/concepts/rjm/fetch-live-params.md docs/analysis/concepts/rjm/check-drift.md docs/analysis/concepts/rjm/routing-gate.md docs/analysis/concepts/rjm/canonical-root-name.md docs/analysis/concepts/rjm/platform-parent.md docs/analysis/concepts/rjm/plugin-manifest.md docs/analysis/concepts/rjm/pruned-dirs.md docs/analysis/concepts/rjm/route-re.md docs/analysis/concepts/rjm/name-re.md docs/analysis/concepts/rjm/trailing.md docs/analysis/concepts/rjm/brackets.md docs/analysis/concepts/rjm/awaited-closers.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-339 produces 30 concept cards across three validation and drift check scripts:
  1. Rule and skill activation coverage ratchet mechanics from `scripts/validation/check_rule_activation_coverage.py`: `RULE_SCENARIOS_SUBDIR`, `SKILL_SCENARIOS_SUBDIR`, `BASELINE_RULE_KEY`, `BASELINE_SKILL_KEY`, `EXIT_RATCHET`, `CoverageConfigError`, `discover_rules`, `_read_scenario_json`, `_validate_scenarios_measure`, `_resolve_target`, `_is_reference_scenario`, `covered_ids`, `_load_id_list`, `diff_uncovered`, `build_baseline_payload`, `compute_uncovered`.
  2. GitHub branch ruleset parameter drift validation from `scripts/validation/check_ruleset_params_drift.py`: `ruleset_params_baseline.json`, `REPO`, `fetch_live_params`, `check_drift`.
  3. Multi-platform plugin shipping route validation from `scripts/validation/check_shipped_skill_routes.py`: `Routing gate`, `CANONICAL_ROOT_NAME`, `PLATFORM_PARENT`, `PLUGIN_MANIFEST`, `PRUNED_DIRS`, `_ROUTE_RE`, `_NAME_RE`, `_TRAILING`, `_BRACKETS`, `_awaited_closers`.
- Lifecycle classification:
  - `Routing gate` is classified as `kind: gate` representing the coordination verification barrier preventing packaging drift across platform distributions.
  - The remaining 29 items are Python constants, helper functions, regexes, exception classes, and baseline config filenames, classified as `kind: name-only` per D-023.
- Defect annotations from inventory cards were propagated to `Implementation status`:
  - Concepts from `check_rule_activation_coverage.py` and `check_shipped_skill_routes.py` are `clean`.
  - Concepts from `check_ruleset_params_drift.py` carry `defects: exit-code-mismatch, orphan`.
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` with 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 3 validation scripts and 3 inventory cards.
Approximate tokens of output written: ~8,000 tokens across 30 concept cards and 1 unit report.
