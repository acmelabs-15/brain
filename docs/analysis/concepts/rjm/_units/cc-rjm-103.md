---
unit: cc-rjm-103
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-103

## Files assigned
- [x] sources/rjm/.claude/skills/ai-agents-research-methodology/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-validation-and-qa/SKILL.md
- [x] sources/rjm/.claude/skills/analysis-provenance/SKILL.md
- [x] sources/rjm/.claude/skills/analysis-provenance/scripts/check_provenance.py
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md
- [x] sources/rjm/pyproject.toml
- [x] sources/rjm/scripts/ci/_main_binding.py
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-research-methodology-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-validation-and-qa-skill-md.md
- [x] docs/analysis/inventory/rjm/pyproject-toml.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-measurement-discipline-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-analysis-provenance-scripts-check-provenance-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-analysis-provenance-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-ci--main-binding-py.md

## Outputs produced
- docs/analysis/concepts/rjm/cross-model-disagreement.md (1926 bytes)
- docs/analysis/concepts/rjm/testing-rigor.md (1933 bytes)
- docs/analysis/concepts/rjm/positive-test.md (1584 bytes)
- docs/analysis/concepts/rjm/negative-test.md (1608 bytes)
- docs/analysis/concepts/rjm/edge-tests.md (1588 bytes)
- docs/analysis/concepts/rjm/cli-contract.md (1654 bytes)
- docs/analysis/concepts/rjm/coverage-proof.md (1516 bytes)
- docs/analysis/concepts/rjm/coverage-theater.md (1695 bytes)
- docs/analysis/concepts/rjm/safe-push-transport.md (1861 bytes)
- docs/analysis/concepts/rjm/smoke.md (1859 bytes)
- docs/analysis/concepts/rjm/windows-path.md (1854 bytes)
- docs/analysis/concepts/rjm/runtime-contract-tests.md (1897 bytes)
- docs/analysis/concepts/rjm/negative-controls.md (2050 bytes)
- docs/analysis/concepts/rjm/threshold-detectors.md (1842 bytes)
- docs/analysis/concepts/rjm/file-set-sensitivity.md (1730 bytes)
- docs/analysis/concepts/rjm/coverage-target-form.md (1712 bytes)
- docs/analysis/concepts/rjm/happy-path-only-test-suite.md (1638 bytes)
- docs/analysis/concepts/rjm/silent-default-for-missing-signal.md (1739 bytes)
- docs/analysis/concepts/rjm/upstream.md (1999 bytes)
- docs/analysis/concepts/rjm/local.md (2201 bytes)
- docs/analysis/concepts/rjm/vendor.md (1946 bytes)
- docs/analysis/concepts/rjm/provenancecategory.md (1399 bytes)
- docs/analysis/concepts/rjm/provenanceresult.md (1414 bytes)
- docs/analysis/concepts/rjm/target-resolution.md (1541 bytes)
- docs/analysis/concepts/rjm/directory-analysis.md (1602 bytes)
- docs/analysis/concepts/rjm/package-manifest-analysis.md (1616 bytes)
- docs/analysis/concepts/rjm/file-header-analysis.md (1586 bytes)
- docs/analysis/concepts/rjm/provenance-determination.md (1664 bytes)
- docs/analysis/concepts/rjm/upstream-indicators.md (1558 bytes)
- docs/analysis/concepts/rjm/local-indicators.md (1568 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-103.md (5280 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (30 PASS, 0 FAIL)
- bun scripts/synthesis/memo.ts stamp-unit cc-rjm-103 --model "Gemini 3.8 Flash" --effort high, exit code 0 (30 cards stamped, 38 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-103 authored and stamped.
- Concepts cover testing governance, test execution categories, and QA anti-patterns from `ai-agents-validation-and-qa` and `pyproject.toml` (`testing-rigor`, `positive-test`, `negative-test`, `edge-tests`, `cli-contract`, `coverage-proof`, `coverage-theater`, `safe-push-transport`, `smoke`, `windows-path`, `runtime-contract-tests`, `negative-controls`, `threshold-detectors`, `file-set-sensitivity`, `coverage-target-form`, `happy-path-only-test-suite`, `silent-default-for-missing-signal`), deliberation principles from `ai-agents-research-methodology` (`cross-model-disagreement`), and the code ownership taxonomy and 5-step detection workflow from `analysis-provenance` (`upstream`, `local`, `vendor`, `provenancecategory`, `provenanceresult`, `target-resolution`, `directory-analysis`, `package-manifest-analysis`, `file-header-analysis`, `provenance-determination`, `upstream-indicators`, `local-indicators`).
- `provenancecategory` and `provenanceresult` are classified as `kind: name-only` per D-023 as Python implementation types rather than agent lifecycle concepts.
- All 30 cards pass byte-exact quotation verification via `quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~72,000 tokens across 7 source files and 7 citing inventory cards; approximate tokens of output written: ~17,500 tokens across 30 concept cards and this unit report.
