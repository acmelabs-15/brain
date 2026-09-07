---
unit: cc-rjm-74
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-74

## Files assigned
- [x] sources/rjm/.claude/agents/milestone-planner.md
- [x] sources/rjm/.claude/agents/negotiation.md
- [x] sources/rjm/.claude/agents/orchestrator.md
- [x] sources/rjm/.claude/agents/skillbook.md
- [x] sources/rjm/.claude/skills/negotiation/SKILL.md
- [x] sources/rjm/.claude/skills/negotiation/references/skills.md
- [x] sources/rjm/src/claude/orchestrator.md
- [x] sources/rjm/templates/agents/architect.shared.md
- [x] sources/rjm/templates/agents/milestone-planner.shared.md
- [x] sources/rjm/templates/agents/negotiation.shared.md
- [x] sources/rjm/templates/agents/orchestrator.shared.md
- [x] sources/rjm/templates/agents/skillbook.shared.md
- [x] docs/analysis/inventory/rjm/claude-agents-milestone-planner-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-milestone-planner-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-skillbook-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-skillbook-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-negotiation-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-negotiation-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-architect-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-negotiation-references-skills-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-negotiation-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-orchestrator-md.md
- [x] docs/analysis/inventory/rjm/src-claude-orchestrator-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-orchestrator-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/milestone-structure.md (1764 bytes)
- docs/analysis/concepts/rjm/vertical-slice.md (1393 bytes)
- docs/analysis/concepts/rjm/exit-criteria.md (1273 bytes)
- docs/analysis/concepts/rjm/dependency-graph.md (1469 bytes)
- docs/analysis/concepts/rjm/exit-criteria-rules.md (1389 bytes)
- docs/analysis/concepts/rjm/risk-documentation.md (1539 bytes)
- docs/analysis/concepts/rjm/sizing-and-sequencing.md (1464 bytes)
- docs/analysis/concepts/rjm/plan-template.md (1430 bytes)
- docs/analysis/concepts/rjm/anti-patterns-to-reject.md (1454 bytes)
- docs/analysis/concepts/rjm/deal-intelligence-specialist.md (1529 bytes)
- docs/analysis/concepts/rjm/strategic-knowledge-available.md (1334 bytes)
- docs/analysis/concepts/rjm/radar.md (1770 bytes)
- docs/analysis/concepts/rjm/read-decode.md (1276 bytes)
- docs/analysis/concepts/rjm/analyze-map-the-zone.md (1268 bytes)
- docs/analysis/concepts/rjm/zopa.md (1767 bytes)
- docs/analysis/concepts/rjm/batna.md (1683 bytes)
- docs/analysis/concepts/rjm/information-asymmetry.md (1367 bytes)
- docs/analysis/concepts/rjm/value-gap.md (1426 bytes)
- docs/analysis/concepts/rjm/design-counter.md (1139 bytes)
- docs/analysis/concepts/rjm/pcp-framing.md (1607 bytes)
- docs/analysis/concepts/rjm/invisible-disadvantage-check.md (1643 bytes)
- docs/analysis/concepts/rjm/project-deal.md (1392 bytes)
- docs/analysis/concepts/rjm/draft-for-approval.md (1287 bytes)
- docs/analysis/concepts/rjm/time-as-leverage.md (1458 bytes)
- docs/analysis/concepts/rjm/detecting-manipulation-patterns.md (1437 bytes)
- docs/analysis/concepts/rjm/thinking-trigger.md (1613 bytes)
- docs/analysis/concepts/rjm/target-recon.md (1547 bytes)
- docs/analysis/concepts/rjm/triage-first.md (1500 bytes)
- docs/analysis/concepts/rjm/never-delegate-blind.md (1704 bytes)
- docs/analysis/concepts/rjm/never-skip-synthesis.md (1731 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-74.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/milestone-structure.md docs/analysis/concepts/rjm/vertical-slice.md docs/analysis/concepts/rjm/exit-criteria.md docs/analysis/concepts/rjm/dependency-graph.md docs/analysis/concepts/rjm/exit-criteria-rules.md docs/analysis/concepts/rjm/risk-documentation.md docs/analysis/concepts/rjm/sizing-and-sequencing.md docs/analysis/concepts/rjm/plan-template.md docs/analysis/concepts/rjm/anti-patterns-to-reject.md docs/analysis/concepts/rjm/deal-intelligence-specialist.md docs/analysis/concepts/rjm/strategic-knowledge-available.md docs/analysis/concepts/rjm/radar.md docs/analysis/concepts/rjm/read-decode.md docs/analysis/concepts/rjm/analyze-map-the-zone.md docs/analysis/concepts/rjm/zopa.md docs/analysis/concepts/rjm/batna.md docs/analysis/concepts/rjm/information-asymmetry.md docs/analysis/concepts/rjm/value-gap.md docs/analysis/concepts/rjm/design-counter.md docs/analysis/concepts/rjm/pcp-framing.md docs/analysis/concepts/rjm/invisible-disadvantage-check.md docs/analysis/concepts/rjm/project-deal.md docs/analysis/concepts/rjm/draft-for-approval.md docs/analysis/concepts/rjm/time-as-leverage.md docs/analysis/concepts/rjm/detecting-manipulation-patterns.md docs/analysis/concepts/rjm/thinking-trigger.md docs/analysis/concepts/rjm/target-recon.md docs/analysis/concepts/rjm/triage-first.md docs/analysis/concepts/rjm/never-delegate-blind.md docs/analysis/concepts/rjm/never-skip-synthesis.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-74 completes all 30 concept cards across three core functional subsystems in package `rjm`:
  1. Milestone planning methodology from `milestone-planner` (`milestone-structure`, `vertical-slice`, `exit-criteria`, `dependency-graph`, `exit-criteria-rules`, `risk-documentation`, `sizing-and-sequencing`, `plan-template`).
  2. Deal intelligence and negotiation strategy from `negotiation` (`deal-intelligence-specialist`, `radar`, `read-decode`, `analyze-map-the-zone`, `zopa`, `batna`, `information-asymmetry`, `value-gap`, `design-counter`, `pcp-framing`, `invisible-disadvantage-check`, `project-deal`, `draft-for-approval`, `time-as-leverage`, `detecting-manipulation-patterns`).
  3. Core multi-agent orchestration invariants from `orchestrator` (`thinking-trigger`, `target-recon`, `triage-first`, `never-delegate-blind`, `never-skip-synthesis`).
- Non-lifecycle document section headings (`anti-patterns-to-reject`, `strategic-knowledge-available`) were authored with `kind: name-only` and `(used, not defined)` per METHOD.md R6 and D-023.
- All 69 occurrences across 12 source files and 12 citing inventory cards documented in `facts/cc-rjm-74.txt` are faithfully mapped as rows in the respective `Where used` tables.
- Defect classifications from inventory cards (`defects: missing-path`, `defects: doc-drift`, `defects: orphan`) were accurately reflected in the `Implementation status` fields.
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 12 source files and 12 inventory cards; approximate tokens of output written: ~16,000 tokens across 30 concept cards and this unit report.
