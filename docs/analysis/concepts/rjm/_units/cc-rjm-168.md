---
unit: cc-rjm-168
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-168

## Files assigned
- [x] sources/rjm/.claude/skills/planner/SKILL.md
- [x] sources/rjm/.claude/skills/pre-mortem/SKILL.md
- [x] sources/rjm/.claude/skills/pre-mortem/references/mental-models-galls-law.md
- [x] sources/rjm/.claude/skills/pre-mortem/references/strategy-ooda-loop.md
- [x] sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py
- [x] sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md
- [x] sources/rjm/.claude/skills/programming-advisor/references/bitter-lesson-llms.md
- [x] sources/rjm/scripts/validation/validate_design_review.py
- [x] docs/analysis/inventory/rjm/claude-skills-planner-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-pre-mortem-references-mental-models-galls-law-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-pre-mortem-references-strategy-ooda-loop-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-pre-mortem-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-pre-mortem-scripts-pre-mortem-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-design-review-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-pre-mortem-templates-risk-inventory-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-bitter-lesson-llms-md.md

## Outputs produced
- docs/analysis/concepts/rjm/temporal-contamination.md (1041 bytes)
- docs/analysis/concepts/rjm/phase-3-independent-analysis.md (1894 bytes)
- docs/analysis/concepts/rjm/phase-5-review-and-mitigate.md (1923 bytes)
- docs/analysis/concepts/rjm/simplest-working-version.md (1645 bytes)
- docs/analysis/concepts/rjm/phase-1-project-brief.md (1491 bytes)
- docs/analysis/concepts/rjm/phase-2-failure-announcement.md (1497 bytes)
- docs/analysis/concepts/rjm/phase-4-round-robin-collection.md (1583 bytes)
- docs/analysis/concepts/rjm/prospective-hindsight.md (1756 bytes)
- docs/analysis/concepts/rjm/valid-categories.md (969 bytes)
- docs/analysis/concepts/rjm/valid-statuses.md (1226 bytes)
- docs/analysis/concepts/rjm/parse-risk-entry.md (986 bytes)
- docs/analysis/concepts/rjm/validate-inventory.md (1023 bytes)
- docs/analysis/concepts/rjm/pre-mortem-risk-inventory.md (1860 bytes)
- docs/analysis/concepts/rjm/project-context.md (958 bytes)
- docs/analysis/concepts/rjm/risk-summary.md (929 bytes)
- docs/analysis/concepts/rjm/critical-risks.md (1007 bytes)
- docs/analysis/concepts/rjm/high-risks.md (942 bytes)
- docs/analysis/concepts/rjm/medium-risks.md (933 bytes)
- docs/analysis/concepts/rjm/low-risks.md (922 bytes)
- docs/analysis/concepts/rjm/action-items.md (960 bytes)
- docs/analysis/concepts/rjm/review-schedule.md (943 bytes)
- docs/analysis/concepts/rjm/the-bitter-lesson-of-building-with-llms.md (1809 bytes)
- docs/analysis/concepts/rjm/core-principle.md (982 bytes)
- docs/analysis/concepts/rjm/prompt-scaffolding.md (1500 bytes)
- docs/analysis/concepts/rjm/retrieval-architecture.md (1521 bytes)
- docs/analysis/concepts/rjm/rag.md (1521 bytes)
- docs/analysis/concepts/rjm/hardcoded-domain-knowledge.md (1551 bytes)
- docs/analysis/concepts/rjm/evaluation-strategy.md (1494 bytes)
- docs/analysis/concepts/rjm/mythos-ready-system-architecture.md (1634 bytes)
- docs/analysis/concepts/rjm/outcome-specs.md (1525 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-168.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/temporal-contamination.md docs/analysis/concepts/rjm/phase-3-independent-analysis.md docs/analysis/concepts/rjm/phase-5-review-and-mitigate.md docs/analysis/concepts/rjm/simplest-working-version.md docs/analysis/concepts/rjm/phase-1-project-brief.md docs/analysis/concepts/rjm/phase-2-failure-announcement.md docs/analysis/concepts/rjm/phase-4-round-robin-collection.md docs/analysis/concepts/rjm/prospective-hindsight.md docs/analysis/concepts/rjm/valid-categories.md docs/analysis/concepts/rjm/valid-statuses.md docs/analysis/concepts/rjm/parse-risk-entry.md docs/analysis/concepts/rjm/validate-inventory.md docs/analysis/concepts/rjm/pre-mortem-risk-inventory.md docs/analysis/concepts/rjm/project-context.md docs/analysis/concepts/rjm/risk-summary.md docs/analysis/concepts/rjm/critical-risks.md docs/analysis/concepts/rjm/high-risks.md docs/analysis/concepts/rjm/medium-risks.md docs/analysis/concepts/rjm/low-risks.md docs/analysis/concepts/rjm/action-items.md docs/analysis/concepts/rjm/review-schedule.md docs/analysis/concepts/rjm/the-bitter-lesson-of-building-with-llms.md docs/analysis/concepts/rjm/core-principle.md docs/analysis/concepts/rjm/prompt-scaffolding.md docs/analysis/concepts/rjm/retrieval-architecture.md docs/analysis/concepts/rjm/rag.md docs/analysis/concepts/rjm/hardcoded-domain-knowledge.md docs/analysis/concepts/rjm/evaluation-strategy.md docs/analysis/concepts/rjm/mythos-ready-system-architecture.md docs/analysis/concepts/rjm/outcome-specs.md` (exit code 0, 33 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-168 produces 30 concept cards across three main thematic areas in rjm:
  1. Planning & comment hygiene: `temporal-contamination` from `.claude/skills/planner/SKILL.md` (classified as `kind: name-only` referencing the specification document `resources/temporal-contamination.md`).
  2. Pre-mortem facilitation and risk analysis: the complete five-phase pre-mortem process (`phase-1-project-brief`, `phase-2-failure-announcement`, `phase-3-independent-analysis`, `phase-4-round-robin-collection`, `phase-5-review-and-mitigate`), the cognitive foundation (`prospective-hindsight`), Gall's Law architectural detection (`simplest-working-version`), code constants/helpers in validation scripts (`valid-categories`, `valid-statuses`, `parse-risk-entry`, `validate-inventory`), the primary output artifact (`pre-mortem-risk-inventory`), and its template section headings (`project-context`, `risk-summary`, `critical-risks`, `high-risks`, `medium-risks`, `low-risks`, `action-items`, `review-schedule`).
  3. AI architecture & the Bitter Lesson: principles and architectural layers from `bitter-lesson-llms.md` (`the-bitter-lesson-of-building-with-llms`, `core-principle`, `prompt-scaffolding`, `retrieval-architecture`, `rag`, `hardcoded-domain-knowledge`, `evaluation-strategy`, `mythos-ready-system-architecture`, `outcome-specs`).
- All 40 occurrences listed in `facts/cc-rjm-168.txt` are faithfully mapped in the cards' Where used tables.
- Non-lifecycle concepts representing script identifiers, file names, or template section headings were authored with `kind: name-only` and `package_phase: none` per D-023.
- Defects from citing inventory cards were systematically propagated into `Implementation status` (`defects: missing-path, doc-drift`, `defects: missing-path, exit-code-mismatch`, `defects: exit-code-mismatch, other`, `defects: orphan, internal-contradiction, doc-drift`, and `defects: missing-path`).
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` with 33 PASS and 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
