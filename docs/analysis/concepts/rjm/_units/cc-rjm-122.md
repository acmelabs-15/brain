---
unit: cc-rjm-122
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-122

## Files assigned
- [x] sources/rjm/.claude/skills/code-qualities-assessment/README.md
- [x] sources/rjm/.claude/skills/code-qualities-assessment/references/calibration-examples.md
- [x] sources/rjm/.claude/skills/code-qualities-assessment/scripts/assess.py
- [x] sources/rjm/.claude/skills/code-qualities-assessment/templates/.qualityrc.json
- [x] sources/rjm/.codeql/scripts/invoke_codeql_scan.py
- [x] sources/rjm/.codeql/scripts/test_codeql_config.py
- [x] sources/rjm/.codeql/scripts/test_codeql_rollout.py
- [x] docs/analysis/inventory/rjm/claude-skills-code-qualities-assessment-readme-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-code-qualities-assessment-references-calibration-examples-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-code-qualities-assessment-scripts-assess-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-code-qualities-assessment-templates--qualityrc-json.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-invoke-codeql-scan-py.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-test-codeql-config-py.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-test-codeql-rollout-py.md

## Outputs produced
- docs/analysis/concepts/rjm/ci-mode.md (2726 bytes)
- docs/analysis/concepts/rjm/qualityrc-json.md (1588 bytes)
- docs/analysis/concepts/rjm/thresholds.md (2466 bytes)
- docs/analysis/concepts/rjm/ci-cd-pipeline.md (1290 bytes)
- docs/analysis/concepts/rjm/cohesion-examples.md (1388 bytes)
- docs/analysis/concepts/rjm/perfect-cohesion.md (1372 bytes)
- docs/analysis/concepts/rjm/good-cohesion.md (1416 bytes)
- docs/analysis/concepts/rjm/weak-cohesion.md (1377 bytes)
- docs/analysis/concepts/rjm/no-cohesion.md (1378 bytes)
- docs/analysis/concepts/rjm/coupling-examples.md (1398 bytes)
- docs/analysis/concepts/rjm/minimal-coupling.md (1383 bytes)
- docs/analysis/concepts/rjm/loose-coupling.md (1378 bytes)
- docs/analysis/concepts/rjm/moderate-coupling.md (1398 bytes)
- docs/analysis/concepts/rjm/tight-coupling.md (1411 bytes)
- docs/analysis/concepts/rjm/encapsulation-examples.md (1429 bytes)
- docs/analysis/concepts/rjm/perfect-encapsulation.md (1420 bytes)
- docs/analysis/concepts/rjm/good-encapsulation.md (1387 bytes)
- docs/analysis/concepts/rjm/weak-encapsulation.md (1377 bytes)
- docs/analysis/concepts/rjm/no-encapsulation.md (1371 bytes)
- docs/analysis/concepts/rjm/testability-examples.md (1424 bytes)
- docs/analysis/concepts/rjm/perfect-testability.md (1403 bytes)
- docs/analysis/concepts/rjm/good-testability.md (1399 bytes)
- docs/analysis/concepts/rjm/moderate-testability.md (1396 bytes)
- docs/analysis/concepts/rjm/hard-to-test.md (1381 bytes)
- docs/analysis/concepts/rjm/non-redundancy-examples.md (1451 bytes)
- docs/analysis/concepts/rjm/zero-duplication.md (1409 bytes)
- docs/analysis/concepts/rjm/minimal-duplication.md (1429 bytes)
- docs/analysis/concepts/rjm/moderate-duplication.md (1445 bytes)
- docs/analysis/concepts/rjm/pervasive-duplication.md (1443 bytes)
- docs/analysis/concepts/rjm/language-specific-adaptations.md (1496 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-122.md (5531 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (30 PASS, 0 FAIL)
- bun scripts/synthesis/memo.ts stamp-unit cc-rjm-122 --model "Gemini 3.8 Flash" --effort high, exit code 0 (30 cards stamped, 36 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-122 authored and stamped.
- Concepts encompass automated CI script execution modes (`ci-mode`), quality configuration files and gates (`qualityrc-json`, `thresholds`, `ci-cd-pipeline`), and calibration reference headings and score calibration tiers for code maintainability across five dimensions:
  - Cohesion: `cohesion-examples`, `perfect-cohesion` (10/10), `good-cohesion` (7/10), `weak-cohesion` (4/10), `no-cohesion` (1/10).
  - Coupling: `coupling-examples`, `minimal-coupling` (10/10), `loose-coupling` (7/10), `moderate-coupling` (4/10), `tight-coupling` (1/10).
  - Encapsulation: `encapsulation-examples`, `perfect-encapsulation` (10/10), `good-encapsulation` (7/10), `weak-encapsulation` (4/10), `no-encapsulation` (1/10).
  - Testability: `testability-examples`, `perfect-testability` (10/10), `good-testability` (7/10), `moderate-testability` (4/10), `hard-to-test` (1/10).
  - Non-redundancy: `non-redundancy-examples`, `zero-duplication` (10/10), `minimal-duplication` (7/10), `moderate-duplication` (4/10), `pervasive-duplication` (1/10).
  - Cross-cutting: `language-specific-adaptations`.
- Section headings, calibration labels, and configuration file names were assigned `kind: name-only` with `(used, not defined)` and their defining usage quoted per instruction 2 and D-023.
- All 30 cards pass byte-exact quotation verification via `quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~110,000 tokens across 7 source files and 7 citing inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
