---
unit: cc-rjm-117
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-117

## Files assigned
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/SKILL.md
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py
- [x] sources/rjm/.claude/skills/programming-advisor/references/pricing-data.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-references-skill-spec-xml.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-calculate-tco-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-pricing-data-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-check-reassessment-triggers-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-score-decision-py.md

## Outputs produced
- docs/analysis/concepts/rjm/risk-dimension.md (1438 bytes)
- docs/analysis/concepts/rjm/adr-requirements.md (1496 bytes)
- docs/analysis/concepts/rjm/reassessment-plan.md (1669 bytes)
- docs/analysis/concepts/rjm/check-reassessment-triggers-py.md (1025 bytes)
- docs/analysis/concepts/rjm/score-vendor-py.md (992 bytes)
- docs/analysis/concepts/rjm/total-cost-of-ownership.md (1997 bytes)
- docs/analysis/concepts/rjm/build-buy-partner.md (1493 bytes)
- docs/analysis/concepts/rjm/tcoresult.md (977 bytes)
- docs/analysis/concepts/rjm/npv-build.md (982 bytes)
- docs/analysis/concepts/rjm/npv-buy.md (993 bytes)
- docs/analysis/concepts/rjm/npv-partner.md (990 bytes)
- docs/analysis/concepts/rjm/irr-build.md (985 bytes)
- docs/analysis/concepts/rjm/breakeven-years.md (1022 bytes)
- docs/analysis/concepts/rjm/net-present-value.md (1531 bytes)
- docs/analysis/concepts/rjm/internal-rate-of-return.md (1398 bytes)
- docs/analysis/concepts/rjm/break-even-point.md (1464 bytes)
- docs/analysis/concepts/rjm/sensitivity-analysis.md (2010 bytes)
- docs/analysis/concepts/rjm/simple-mode.md (1354 bytes)
- docs/analysis/concepts/rjm/realistic-mode.md (1501 bytes)
- docs/analysis/concepts/rjm/assumption-drift.md (1776 bytes)
- docs/analysis/concepts/rjm/driftanalysis.md (1046 bytes)
- docs/analysis/concepts/rjm/strategic-priority.md (1407 bytes)
- docs/analysis/concepts/rjm/vendor-viability.md (1374 bytes)
- docs/analysis/concepts/rjm/team-capacity.md (1414 bytes)
- docs/analysis/concepts/rjm/competitive-dynamics.md (1425 bytes)
- docs/analysis/concepts/rjm/regulatory-changes.md (1398 bytes)
- docs/analysis/concepts/rjm/technology-disruption.md (1513 bytes)
- docs/analysis/concepts/rjm/customer-demand-signal.md (1429 bytes)
- docs/analysis/concepts/rjm/weighted-decision-scores.md (1445 bytes)
- docs/analysis/concepts/rjm/decisionscore.md (998 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-117.md (6815 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/risk-dimension.md docs/analysis/concepts/rjm/adr-requirements.md docs/analysis/concepts/rjm/reassessment-plan.md docs/analysis/concepts/rjm/check-reassessment-triggers-py.md docs/analysis/concepts/rjm/score-vendor-py.md docs/analysis/concepts/rjm/total-cost-of-ownership.md docs/analysis/concepts/rjm/build-buy-partner.md docs/analysis/concepts/rjm/tcoresult.md docs/analysis/concepts/rjm/npv-build.md docs/analysis/concepts/rjm/npv-buy.md docs/analysis/concepts/rjm/npv-partner.md docs/analysis/concepts/rjm/irr-build.md docs/analysis/concepts/rjm/breakeven-years.md docs/analysis/concepts/rjm/net-present-value.md docs/analysis/concepts/rjm/internal-rate-of-return.md docs/analysis/concepts/rjm/break-even-point.md docs/analysis/concepts/rjm/sensitivity-analysis.md docs/analysis/concepts/rjm/simple-mode.md docs/analysis/concepts/rjm/realistic-mode.md docs/analysis/concepts/rjm/assumption-drift.md docs/analysis/concepts/rjm/driftanalysis.md docs/analysis/concepts/rjm/strategic-priority.md docs/analysis/concepts/rjm/vendor-viability.md docs/analysis/concepts/rjm/team-capacity.md docs/analysis/concepts/rjm/competitive-dynamics.md docs/analysis/concepts/rjm/regulatory-changes.md docs/analysis/concepts/rjm/technology-disruption.md docs/analysis/concepts/rjm/customer-demand-signal.md docs/analysis/concepts/rjm/weighted-decision-scores.md docs/analysis/concepts/rjm/decisionscore.md` (exit code 0, 34 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-117 authors 30 concept cards mapping across the buy-vs-build-framework and programming-advisor skills:
  1. Strategic sourcing evaluation frameworks and schemas: `risk-dimension`, `adr-requirements`, `reassessment-plan`, and `build-buy-partner`.
  2. Financial and quantitative TCO modeling techniques: `total-cost-of-ownership`, `net-present-value`, `internal-rate-of-return`, `break-even-point`, `sensitivity-analysis`, `weighted-decision-scores`, `simple-mode`, and `realistic-mode`.
  3. Continuous reassessment triggers and drift surveillance gates: `assumption-drift`, `strategic-priority`, `vendor-viability`, `team-capacity`, `competitive-dynamics`, `regulatory-changes`, `technology-disruption`, and `customer-demand-signal`.
  4. Code-level identifiers, script filenames, and dataclass entities authored as `kind: name-only` per D-023: `check-reassessment-triggers-py`, `score-vendor-py`, `tcoresult`, `npv-build`, `npv-buy`, `npv-partner`, `irr-build`, `breakeven-years`, `driftanalysis`, and `decisionscore`.
- All 35 occurrences listed in `facts/cc-rjm-117.txt` are faithfully mapped to `Where used` rows.
- Citing inventory defect fields were mapped to `Implementation status` on all cards (`clean` or defects: `doc-drift`, `exit-code-mismatch`, `missing-doc`, `missing-path`, `script-bug`), preserving separation between design intent and implementation flaws per R5.
- All 30 concept cards pass `quote-check.ts` with 0 failures (34 PASS, 0 FAIL, 0 MISSING).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
