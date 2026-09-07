---
unit: cc-rjm-207
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-207

## Files assigned
- [x] sources/rjm/.claude/skills/slo-designer/SKILL.md
- [x] sources/rjm/.claude/skills/slo-designer/references/slo-design-patterns.md
- [x] sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py
- [x] sources/rjm/.claude/skills/slo-designer/scripts/generate_slo_document.py
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-references-slo-design-patterns-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-scripts-calculate-error-budget-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-scripts-generate-slo-document-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-skill-md.md

## Outputs produced
- docs/analysis/concepts/rjm/multi-window-alert-strategy.md (1342 bytes)
- docs/analysis/concepts/rjm/errorbudget.md (991 bytes)
- docs/analysis/concepts/rjm/period-minutes.md (975 bytes)
- docs/analysis/concepts/rjm/calculate-error-budget.md (991 bytes)
- docs/analysis/concepts/rjm/calculate-burn-rates.md (1017 bytes)
- docs/analysis/concepts/rjm/format-text-output.md (1019 bytes)
- docs/analysis/concepts/rjm/format-markdown-output.md (1037 bytes)
- docs/analysis/concepts/rjm/sli.md (1523 bytes)
- docs/analysis/concepts/rjm/slo.md (1542 bytes)
- docs/analysis/concepts/rjm/alertconfig.md (922 bytes)
- docs/analysis/concepts/rjm/sloconfig.md (975 bytes)
- docs/analysis/concepts/rjm/calculate-error-budget-minutes.md (1096 bytes)
- docs/analysis/concepts/rjm/format-downtime.md (958 bytes)
- docs/analysis/concepts/rjm/parse-yaml-config.md (979 bytes)
- docs/analysis/concepts/rjm/generate-sli-section.md (978 bytes)
- docs/analysis/concepts/rjm/generate-slo-section.md (984 bytes)
- docs/analysis/concepts/rjm/generate-error-budget-section.md (1028 bytes)
- docs/analysis/concepts/rjm/generate-alerting-section.md (1044 bytes)
- docs/analysis/concepts/rjm/generate-default-alerting-section.md (1044 bytes)
- docs/analysis/concepts/rjm/generate-slo-document.md (1007 bytes)
- docs/analysis/concepts/rjm/create-sample-config.md (975 bytes)
- docs/analysis/concepts/rjm/sla.md (1335 bytes)
- docs/analysis/concepts/rjm/burn-rate.md (1244 bytes)
- docs/analysis/concepts/rjm/sli-definition.md (1245 bytes)
- docs/analysis/concepts/rjm/slo-targets.md (1272 bytes)
- docs/analysis/concepts/rjm/alerting.md (1265 bytes)
- docs/analysis/concepts/rjm/question-framework.md (1339 bytes)
- docs/analysis/concepts/rjm/slo-target-guidelines.md (1369 bytes)
- docs/analysis/concepts/rjm/error-budget-table.md (1316 bytes)
- docs/analysis/concepts/rjm/burn-rate-alerting.md (1312 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-207.md (4070 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/multi-window-alert-strategy.md ...`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit originate from the `slo-designer` skill and its associated references and Python scripts.
- Multiple code identifiers from `calculate_error_budget.py` and `generate_slo_document.py` (classes, constants, and helper functions) were classified as `kind: name-only` per D-023.
- Key SRE lifecycle concepts (`SLI`, `SLO`, `SLA`, `Burn Rate`, `Multi-Window Alert Strategy`) are cross-referenced with Google SRE methodology and related rjm skills (`chaos-experiment`, `threat-modeling`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~8,500 tokens across 30 concept cards and this unit report.
