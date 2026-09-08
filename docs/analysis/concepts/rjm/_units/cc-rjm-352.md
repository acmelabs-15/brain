---
unit: cc-rjm-352
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-352

## Files assigned
- [x] sources/rjm/scripts/validation/checks_spec.py
- [x] sources/rjm/scripts/validation/checks_tooling.py
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-spec-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-tooling-py.md

## Outputs produced
- docs/analysis/concepts/rjm/validate-skill-memory-references.md (1052 bytes)
- docs/analysis/concepts/rjm/validate-sync-registry.md (1011 bytes)
- docs/analysis/concepts/rjm/validate-agent-catalog.md (988 bytes)
- docs/analysis/concepts/rjm/validate-canonical-citations.md (1037 bytes)
- docs/analysis/concepts/rjm/validate-orchestrator-citations.md (1068 bytes)
- docs/analysis/concepts/rjm/validate-spec-contradiction.md (1035 bytes)
- docs/analysis/concepts/rjm/model-pin-backlog-prefix.md (988 bytes)
- docs/analysis/concepts/rjm/model-pin-backlog-sample.md (1001 bytes)
- docs/analysis/concepts/rjm/print-model-pin-report.md (1016 bytes)
- docs/analysis/concepts/rjm/validate-model-pins.md (999 bytes)
- docs/analysis/concepts/rjm/markdownlint-cli2-package.md (1034 bytes)
- docs/analysis/concepts/rjm/markdownlint-target-batch-limit.md (1016 bytes)
- docs/analysis/concepts/rjm/markdownlint-command-length-limit.md (1061 bytes)
- docs/analysis/concepts/rjm/linted-count-pattern.md (1023 bytes)
- docs/analysis/concepts/rjm/require-script.md (965 bytes)
- docs/analysis/concepts/rjm/find-latest-session-log.md (1024 bytes)
- docs/analysis/concepts/rjm/prepr-session-command.md (981 bytes)
- docs/analysis/concepts/rjm/changed-session-paths.md (1023 bytes)
- docs/analysis/concepts/rjm/validate-markdown-lint.md (1074 bytes)
- docs/analysis/concepts/rjm/markdown-lint-command.md (977 bytes)
- docs/analysis/concepts/rjm/windows-command-length.md (1016 bytes)
- docs/analysis/concepts/rjm/markdown-lint-target-batches.md (1024 bytes)
- docs/analysis/concepts/rjm/report-markdown-lint-failure.md (1074 bytes)
- docs/analysis/concepts/rjm/linted-file-count.md (981 bytes)
- docs/analysis/concepts/rjm/report-selection.md (1026 bytes)
- docs/analysis/concepts/rjm/print-capped.md (971 bytes)
- docs/analysis/concepts/rjm/markdown-lint-targets.md (1026 bytes)
- docs/analysis/concepts/rjm/yaml-style-targets.md (1000 bytes)
- docs/analysis/concepts/rjm/validate-workflow-yaml.md (1036 bytes)
- docs/analysis/concepts/rjm/validate-yaml-style.md (1019 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-352.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/validate-skill-memory-references.md docs/analysis/concepts/rjm/validate-sync-registry.md docs/analysis/concepts/rjm/validate-agent-catalog.md docs/analysis/concepts/rjm/validate-canonical-citations.md docs/analysis/concepts/rjm/validate-orchestrator-citations.md docs/analysis/concepts/rjm/validate-spec-contradiction.md docs/analysis/concepts/rjm/model-pin-backlog-prefix.md docs/analysis/concepts/rjm/model-pin-backlog-sample.md docs/analysis/concepts/rjm/print-model-pin-report.md docs/analysis/concepts/rjm/validate-model-pins.md docs/analysis/concepts/rjm/markdownlint-cli2-package.md docs/analysis/concepts/rjm/markdownlint-target-batch-limit.md docs/analysis/concepts/rjm/markdownlint-command-length-limit.md docs/analysis/concepts/rjm/linted-count-pattern.md docs/analysis/concepts/rjm/require-script.md docs/analysis/concepts/rjm/find-latest-session-log.md docs/analysis/concepts/rjm/prepr-session-command.md docs/analysis/concepts/rjm/changed-session-paths.md docs/analysis/concepts/rjm/validate-markdown-lint.md docs/analysis/concepts/rjm/markdown-lint-command.md docs/analysis/concepts/rjm/windows-command-length.md docs/analysis/concepts/rjm/markdown-lint-target-batches.md docs/analysis/concepts/rjm/report-markdown-lint-failure.md docs/analysis/concepts/rjm/linted-file-count.md docs/analysis/concepts/rjm/report-selection.md docs/analysis/concepts/rjm/print-capped.md docs/analysis/concepts/rjm/markdown-lint-targets.md docs/analysis/concepts/rjm/yaml-style-targets.md docs/analysis/concepts/rjm/validate-workflow-yaml.md docs/analysis/concepts/rjm/validate-yaml-style.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-352 completes 30 concept cards spanning pre-PR specification gates, model-pin reporting, session log validation, markdownlint execution batching, and external tool validations:
  1. Specification and consistency validation gates (`validate-skill-memory-references`, `validate-sync-registry`, `validate-agent-catalog`, `validate-canonical-citations`, `validate-orchestrator-citations`, `validate-spec-contradiction`, `validate-model-pins`) and model-pin reporting helpers (`model-pin-backlog-prefix`, `model-pin-backlog-sample`, `print-model-pin-report`) in `scripts/validation/checks_spec.py`.
  2. External tooling validation gates, command batching, session log parsing, and output formatting (`markdownlint-cli2-package`, `markdownlint-target-batch-limit`, `markdownlint-command-length-limit`, `linted-count-pattern`, `require-script`, `find-latest-session-log`, `prepr-session-command`, `changed-session-paths`, `validate-markdown-lint`, `markdown-lint-command`, `windows-command-length`, `markdown-lint-target-batches`, `report-markdown-lint-failure`, `linted-file-count`, `report-selection`, `print-capped`, `markdown-lint-targets`, `yaml-style-targets`, `validate-workflow-yaml`, `validate-yaml-style`) in `scripts/validation/checks_tooling.py`.
- Concepts representing Python validation functions, helper routines, regex patterns, or package/batch constants are classified as `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-352.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: script-bug, exit-code-mismatch` for `checks_spec.py`; `defects: doc-drift, other, exit-code-mismatch` for `checks_tooling.py`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
