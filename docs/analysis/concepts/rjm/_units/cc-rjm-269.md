---
unit: cc-rjm-269
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-269

## Files assigned
- [x] sources/rjm/scripts/eval/_copilot_process_tree.py
- [x] sources/rjm/scripts/eval/_copilot_windows_files.py
- [x] sources/rjm/scripts/eval/_e2e_delivery_core.py
- [x] sources/rjm/scripts/eval/_eval_agent_types.py
- [x] sources/rjm/scripts/eval/_eval_api_adapter.py
- [x] sources/rjm/scripts/eval/_oneshot_bench_core.py
- [x] sources/rjm/scripts/eval/_plan_runner.py
- [x] sources/rjm/scripts/eval/_report_writer.py
- [x] sources/rjm/scripts/eval/_run_persistence.py
- [x] sources/rjm/scripts/eval/_runtime_parity.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-e2e-delivery.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval_skill_router.py
- [x] sources/rjm/scripts/eval/examples/e2e-delivery-fixtures.json
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-process-tree-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-windows-files-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--e2e-delivery-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-agent-types-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--oneshot-bench-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--plan-runner-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-persistence-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--runtime-parity-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-e2e-delivery-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-router-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-e2e-delivery-fixtures-json.md

## Outputs produced
- docs/analysis/concepts/rjm/job-object-limit-kill-on-job-close.md (942 bytes)
- docs/analysis/concepts/rjm/windows-creation-flags.md (924 bytes)
- docs/analysis/concepts/rjm/basiclimitinformation.md (875 bytes)
- docs/analysis/concepts/rjm/iocounters.md (818 bytes)
- docs/analysis/concepts/rjm/extendedlimitinformation.md (886 bytes)
- docs/analysis/concepts/rjm/windowsjob.md (813 bytes)
- docs/analysis/concepts/rjm/fileattributetaginfo.md (903 bytes)
- docs/analysis/concepts/rjm/windowshandle.md (824 bytes)
- docs/analysis/concepts/rjm/validate-handle.md (906 bytes)
- docs/analysis/concepts/rjm/reparse-points.md (973 bytes)
- docs/analysis/concepts/rjm/end-to-end-delivery-eval.md (1470 bytes)
- docs/analysis/concepts/rjm/plan-rubric-proxy.md (1304 bytes)
- docs/analysis/concepts/rjm/hidden-criteria.md (1072 bytes)
- docs/analysis/concepts/rjm/rubric-axes.md (825 bytes)
- docs/analysis/concepts/rjm/max-score.md (972 bytes)
- docs/analysis/concepts/rjm/parse-error.md (1019 bytes)
- docs/analysis/concepts/rjm/fixtureerror.md (1130 bytes)
- docs/analysis/concepts/rjm/validate-fixture.md (1099 bytes)
- docs/analysis/concepts/rjm/load-fixtures.md (1474 bytes)
- docs/analysis/concepts/rjm/build-agent-user-message.md (914 bytes)
- docs/analysis/concepts/rjm/build-judge-system.md (840 bytes)
- docs/analysis/concepts/rjm/build-judge-user-message.md (913 bytes)
- docs/analysis/concepts/rjm/parse-judge-response.md (1193 bytes)
- docs/analysis/concepts/rjm/run-record-schema-version.md (1021 bytes)
- docs/analysis/concepts/rjm/report-schema-version.md (1017 bytes)
- docs/analysis/concepts/rjm/provenanceliteral.md (1067 bytes)
- docs/analysis/concepts/rjm/variantliteral.md (1171 bytes)
- docs/analysis/concepts/rjm/outcomeliteral.md (946 bytes)
- docs/analysis/concepts/rjm/recommendationliteral.md (856 bytes)
- docs/analysis/concepts/rjm/fixturevalidationerror.md (1051 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-269.md (6324 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (30 PASS, 0 FAIL)
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 1 (uncovered 0, orphan cards 0, empty required 0; only pending cross-unit index entries remain for concept-index.ts)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Evaluation harness concepts from `_e2e_delivery_core.py` and `eval-e2e-delivery.py` introduce the plan-rubric proxy methodology (`end-to-end-delivery-eval`, `plan-rubric-proxy`) which evaluates agent plans against hidden acceptance criteria derived from real merged PRs rather than routing classifications.
- Platform compatibility helpers for Windows Win32 API calls (`_copilot_process_tree.py` and `_copilot_windows_files.py`) define job object limit flags, structures, handle wrappers, and reparse point validations (`_JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE`, `windows_creation_flags`, `_BasicLimitInformation`, `_IoCounters`, `_ExtendedLimitInformation`, `_WindowsJob`, `_FileAttributeTagInfo`, `_WindowsHandle`, `_validate_handle`, `reparse points`), classified as `kind: name-only` per D-023.
- Core evaluation data types and constants in `_eval_agent_types.py` (`RUN_RECORD_SCHEMA_VERSION`, `REPORT_SCHEMA_VERSION`, `ProvenanceLiteral`, `VariantLiteral`, `OutcomeLiteral`, `RecommendationLiteral`, `FixtureValidationError`) constrain evaluation execution records, form-factor comparison variants, and schema versions across runners.
- Inventory defects from `eval-agent-vs-baseline.py` (`exit-code-mismatch`, `script-bug`) and `eval_skill_router.py` (`doc-drift`, `orphan`) were recorded in the `Implementation status` of citing concept cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~50,000 tokens across 15 source files and 15 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 work-unit report.
