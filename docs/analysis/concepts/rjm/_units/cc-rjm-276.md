---
unit: cc-rjm-276
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-276

## Files assigned
- [x] sources/rjm/scripts/eval/_report_writer.py
- [x] sources/rjm/scripts/eval/_run_persistence.py
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval_run_rollup.py
- [x] docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-persistence-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-rollup-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-run-rollup-py.md

## Outputs produced
- docs/analysis/concepts/rjm/render-form-factor-section.md (885 bytes)
- docs/analysis/concepts/rjm/render-per-fixture-section.md (888 bytes)
- docs/analysis/concepts/rjm/render-ci-section.md (865 bytes)
- docs/analysis/concepts/rjm/render-recommendation-section.md (883 bytes)
- docs/analysis/concepts/rjm/render-cost-line.md (825 bytes)
- docs/analysis/concepts/rjm/render-cost-section.md (812 bytes)
- docs/analysis/concepts/rjm/render-flakiness-section.md (883 bytes)
- docs/analysis/concepts/rjm/render-markdown.md (824 bytes)
- docs/analysis/concepts/rjm/malformedrunrecorderror.md (1013 bytes)
- docs/analysis/concepts/rjm/rundirectorynotfresherror.md (1035 bytes)
- docs/analysis/concepts/rjm/runseedmismatcherror.md (997 bytes)
- docs/analysis/concepts/rjm/runs-filename.md (812 bytes)
- docs/analysis/concepts/rjm/supported-run-record-schema-versions.md (919 bytes)
- docs/analysis/concepts/rjm/required-run-record-fields.md (875 bytes)
- docs/analysis/concepts/rjm/record-key.md (850 bytes)
- docs/analysis/concepts/rjm/record-to-json-line.md (862 bytes)
- docs/analysis/concepts/rjm/strict-bool.md (883 bytes)
- docs/analysis/concepts/rjm/strict-int.md (885 bytes)
- docs/analysis/concepts/rjm/strict-number.md (892 bytes)
- docs/analysis/concepts/rjm/strict-str.md (824 bytes)
- docs/analysis/concepts/rjm/strict-optional-str.md (886 bytes)
- docs/analysis/concepts/rjm/normalize-seed.md (853 bytes)
- docs/analysis/concepts/rjm/validate-assertions.md (918 bytes)
- docs/analysis/concepts/rjm/validate-payload.md (876 bytes)
- docs/analysis/concepts/rjm/parse-record.md (843 bytes)
- docs/analysis/concepts/rjm/counters.md (787 bytes)
- docs/analysis/concepts/rjm/eval-run-rollup.md (1464 bytes)
- docs/analysis/concepts/rjm/latency-ms.md (857 bytes)
- docs/analysis/concepts/rjm/tokens-in.md (830 bytes)
- docs/analysis/concepts/rjm/tokens-out.md (836 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-276.md (6454 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/render-form-factor-section.md docs/analysis/concepts/rjm/render-per-fixture-section.md docs/analysis/concepts/rjm/render-ci-section.md docs/analysis/concepts/rjm/render-recommendation-section.md docs/analysis/concepts/rjm/render-cost-line.md docs/analysis/concepts/rjm/render-cost-section.md docs/analysis/concepts/rjm/render-flakiness-section.md docs/analysis/concepts/rjm/render-markdown.md docs/analysis/concepts/rjm/malformedrunrecorderror.md docs/analysis/concepts/rjm/rundirectorynotfresherror.md docs/analysis/concepts/rjm/runseedmismatcherror.md docs/analysis/concepts/rjm/runs-filename.md docs/analysis/concepts/rjm/supported-run-record-schema-versions.md docs/analysis/concepts/rjm/required-run-record-fields.md docs/analysis/concepts/rjm/record-key.md docs/analysis/concepts/rjm/record-to-json-line.md docs/analysis/concepts/rjm/strict-bool.md docs/analysis/concepts/rjm/strict-int.md docs/analysis/concepts/rjm/strict-number.md docs/analysis/concepts/rjm/strict-str.md docs/analysis/concepts/rjm/strict-optional-str.md docs/analysis/concepts/rjm/normalize-seed.md docs/analysis/concepts/rjm/validate-assertions.md docs/analysis/concepts/rjm/validate-payload.md docs/analysis/concepts/rjm/parse-record.md docs/analysis/concepts/rjm/counters.md docs/analysis/concepts/rjm/eval-run-rollup.md docs/analysis/concepts/rjm/latency-ms.md docs/analysis/concepts/rjm/tokens-in.md docs/analysis/concepts/rjm/tokens-out.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-276 covers 30 concepts relating to evaluation reporting, run persistence, and cross-run aggregation:
  1. Report writer rendering functions (`_render_form_factor_section`, `_render_per_fixture_section`, `_render_ci_section`, `_render_recommendation_section`, `_render_cost_line`, `_render_cost_section`, `_render_flakiness_section`, `_render_markdown`) from `scripts/eval/_report_writer.py`.
  2. Run persistence error classes, constants, and validation/serialization helpers (`MalformedRunRecordError`, `RunDirectoryNotFreshError`, `RunSeedMismatchError`, `RUNS_FILENAME`, `SUPPORTED_RUN_RECORD_SCHEMA_VERSIONS`, `_REQUIRED_RUN_RECORD_FIELDS`, `_record_key`, `_record_to_json_line`, `_strict_bool`, `_strict_int`, `_strict_number`, `_strict_str`, `_strict_optional_str`, `_normalize_seed`, `_validate_assertions`, `_validate_payload`, `_parse_record`, `_Counters`) from `scripts/eval/_run_persistence.py`.
  3. Evaluation rollup concepts (`eval-run rollup`, `latency_ms`, `tokens_in`, `tokens_out`) from `scripts/eval/_run_rollup_core.py` and `scripts/eval/eval_run_rollup.py`.
- Non-lifecycle concepts (internal helper functions, internal exception classes, module constants, and field names) were classified as `kind: name-only` per D-023. `eval-run rollup` was classified as `kind: technique`.
- All 34 occurrences recorded in `facts/cc-rjm-276.txt` are included in their respective `Where used` tables.
- All 30 concept cards pass `bun scripts/synthesis/quote-check.ts` with 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 5 source files (109,970 bytes) and 5 inventory cards (44,380 bytes).
Approximate tokens of output written: ~10,000 tokens across 30 concept cards (26,862 bytes) and 1 unit report.
