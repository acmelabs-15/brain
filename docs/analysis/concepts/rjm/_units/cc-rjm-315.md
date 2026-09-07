---
unit: cc-rjm-315
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-315

## Files assigned
- [x] sources/rjm/scripts/skillbook.py
- [x] sources/rjm/scripts/split_bundled_skills.py
- [x] sources/rjm/scripts/sync/__init__.py
- [x] sources/rjm/scripts/sync/detect_spec_drift.py
- [x] sources/rjm/scripts/sync_mcp_config.py
- [x] sources/rjm/scripts/sync_plugin_lib.py
- [x] sources/rjm/scripts/test_result_helpers/__init__.py
- [x] sources/rjm/scripts/test_result_helpers/helpers.py
- [x] sources/rjm/scripts/validation/assert_smoke_ran.py
- [x] sources/rjm/scripts/validation/validate_sync_registry.py
- [x] docs/analysis/inventory/rjm/scripts-skillbook-py.md
- [x] docs/analysis/inventory/rjm/scripts-split-bundled-skills-py.md
- [x] docs/analysis/inventory/rjm/scripts-sync-mcp-config-py.md
- [x] docs/analysis/inventory/rjm/scripts-sync-plugin-lib-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-sync-registry-py.md
- [x] docs/analysis/inventory/rjm/scripts-sync---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-sync-detect-spec-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-test-result-helpers---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-test-result-helpers-helpers-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-assert-smoke-ran-py.md

## Outputs produced
- docs/analysis/concepts/rjm/cmd-promote.md (916 bytes)
- docs/analysis/concepts/rjm/cmd-tension.md (886 bytes)
- docs/analysis/concepts/rjm/cmd-tension-list.md (905 bytes)
- docs/analysis/concepts/rjm/cmd-tension-prefer.md (934 bytes)
- docs/analysis/concepts/rjm/cmd-select.md (916 bytes)
- docs/analysis/concepts/rjm/bundled-files.md (890 bytes)
- docs/analysis/concepts/rjm/skill-pattern.md (910 bytes)
- docs/analysis/concepts/rjm/process-bundled-file.md (969 bytes)
- docs/analysis/concepts/rjm/transform-for-vscode.md (943 bytes)
- docs/analysis/concepts/rjm/transform-for-factory.md (932 bytes)
- docs/analysis/concepts/rjm/sync-config.md (881 bytes)
- docs/analysis/concepts/rjm/plugin-distribution.md (953 bytes)
- docs/analysis/concepts/rjm/sync-pairs.md (1063 bytes)
- docs/analysis/concepts/rjm/sync-file-pairs.md (897 bytes)
- docs/analysis/concepts/rjm/import-conversions.md (923 bytes)
- docs/analysis/concepts/rjm/lib-only-files.md (897 bytes)
- docs/analysis/concepts/rjm/sync-pair.md (848 bytes)
- docs/analysis/concepts/rjm/sync-file.md (848 bytes)
- docs/analysis/concepts/rjm/sync.md (1519 bytes)
- docs/analysis/concepts/rjm/issue-1997.md (1020 bytes)
- docs/analysis/concepts/rjm/scripts-sync-detect-spec-drift.md (923 bytes)
- docs/analysis/concepts/rjm/default-spec-targets.md (993 bytes)
- docs/analysis/concepts/rjm/reference-re.md (910 bytes)
- docs/analysis/concepts/rjm/sync-drift-ignore.md (1409 bytes)
- docs/analysis/concepts/rjm/driftfinding.md (905 bytes)
- docs/analysis/concepts/rjm/driftresult.md (911 bytes)
- docs/analysis/concepts/rjm/detect-drift.md (943 bytes)
- docs/analysis/concepts/rjm/create-skipped-test-result.md (1125 bytes)
- docs/analysis/concepts/rjm/junit-xml.md (1649 bytes)
- docs/analysis/concepts/rjm/cwe-91.md (927 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-315.md (5548 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md (30 cards), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 30 concept cards authored covering CLI commands, synchronization routines, spec drift detection, test result helpers, and XML verification utilities.
- Concepts representing CLI function handlers, Python configuration constants, module paths, or external taxonomy references were classified as `kind: name-only` per METHOD.md R6 and D-023:
  - CLI subcommand functions: `cmd_promote`, `cmd_tension`, `_cmd_tension_list`, `_cmd_tension_prefer`, `cmd_select`, `process_bundled_file`, `transform_for_vscode`, `transform_for_factory`, `sync_config`, `sync_pair`, `sync_file`, `detect_drift`, `create_skipped_test_result`.
  - Constants and variables: `BUNDLED_FILES`, `SKILL_PATTERN`, `SYNC_PAIRS`, `SYNC_FILE_PAIRS`, `IMPORT_CONVERSIONS`, `LIB_ONLY_FILES`, `DEFAULT_SPEC_TARGETS`, `REFERENCE_RE`.
  - Dataclasses and module paths: `DriftFinding`, `DriftResult`, `scripts.sync.detect_spec_drift`.
  - Descriptive phrases and issue identifiers: `plugin distribution`, `issue #1997`.
  - External security taxonomy: `CWE-91`.
- Operational lifecycle concepts:
  - `/sync` (`kind: technique`, `package_phase: cross-phase`): reverse-path synchronization command and drift detection technique.
  - `sync-drift-ignore` (`kind: technique`, `package_phase: cross-phase`): inline comment directive suppressing spec drift false-positives.
  - `JUnit XML` (`kind: artifact`, `package_phase: rjm:test`): structured XML test report format consumed by CI gates.
- All 30 cards verified cleanly with `bun scripts/synthesis/quote-check.ts` (31 PASS, 0 FAIL, 0 MISSING).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~25,000 tokens across 10 source files and 10 inventory cards; approximate tokens of output written: ~7,500 tokens across 30 concept cards and this unit report.
