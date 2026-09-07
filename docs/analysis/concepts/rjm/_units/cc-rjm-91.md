---
unit: cc-rjm-91
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-91

## Files assigned
- [x] sources/rjm/.claude/skills/adr-generator/SKILL.md
- [x] sources/rjm/.claude/skills/adr-generator/references/adr-templates-catalog.md
- [x] sources/rjm/.claude/skills/adr-generator/references/quality-checklist.md
- [x] sources/rjm/.claude/skills/adr-review/references/agent-prompts.md
- [x] sources/rjm/.claude/skills/adr-review/references/artifacts.md
- [x] sources/rjm/.claude/skills/adr-review/references/debate-protocol.md
- [x] sources/rjm/docs/agent-governance.md
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-adr-templates-catalog-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-quality-checklist-md.md
- [x] docs/analysis/inventory/rjm/docs-agent-governance-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-references-agent-prompts-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-references-artifacts-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-references-debate-protocol-md.md

## Outputs produced
- docs/analysis/concepts/rjm/adr-quality-checklist.md (1445 bytes)
- docs/analysis/concepts/rjm/adr-update-generation.md (1306 bytes)
- docs/analysis/concepts/rjm/business-case.md (1545 bytes)
- docs/analysis/concepts/rjm/check-adr-uniqueness-py.md (1088 bytes)
- docs/analysis/concepts/rjm/content-quality.md (1362 bytes)
- docs/analysis/concepts/rjm/debate-log.md (1304 bytes)
- docs/analysis/concepts/rjm/decision-drivers.md (1327 bytes)
- docs/analysis/concepts/rjm/discussion.md (1316 bytes)
- docs/analysis/concepts/rjm/dummy-alternatives.md (1352 bytes)
- docs/analysis/concepts/rjm/governance.md (1578 bytes)
- docs/analysis/concepts/rjm/lifecycle-frontmatter.md (1399 bytes)
- docs/analysis/concepts/rjm/more-information.md (1335 bytes)
- docs/analysis/concepts/rjm/paulo-merson.md (1463 bytes)
- docs/analysis/concepts/rjm/phase-0-related-work-research.md (1360 bytes)
- docs/analysis/concepts/rjm/phase-1-independent-review.md (1421 bytes)
- docs/analysis/concepts/rjm/phase-g1-gather.md (1312 bytes)
- docs/analysis/concepts/rjm/phase-g2-research.md (1339 bytes)
- docs/analysis/concepts/rjm/phase-g3-generate.md (1352 bytes)
- docs/analysis/concepts/rjm/phase-g4-validate.md (1302 bytes)
- docs/analysis/concepts/rjm/phase-g4.md (1358 bytes)
- docs/analysis/concepts/rjm/phase-g5-save.md (1242 bytes)
- docs/analysis/concepts/rjm/prologue.md (1348 bytes)
- docs/analysis/concepts/rjm/pros-and-cons-of-the-options.md (1372 bytes)
- docs/analysis/concepts/rjm/scope-analysis.md (1317 bytes)
- docs/analysis/concepts/rjm/scope-split-recommendation.md (1347 bytes)
- docs/analysis/concepts/rjm/solution.md (1205 bytes)
- docs/analysis/concepts/rjm/start-definition-of-ready.md (1404 bytes)
- docs/analysis/concepts/rjm/structural-completeness.md (1308 bytes)
- docs/analysis/concepts/rjm/updated-adr.md (1247 bytes)
- docs/analysis/concepts/rjm/zimmermann-review-questions.md (1424 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-91.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (32 PASS, 0 FAIL, 0 MISSING across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 3 of the 30 concept cards in unit cc-rjm-91 were previously authored (`business-case`, `paulo-merson`, `decision-drivers`). Their Where used tables and definition citations were verified against `facts/cc-rjm-91.txt`.
- The remaining 27 concept cards were authored in this session, completing all 30 concept cards:
  - ADR template sections: `pros-and-cons-of-the-options`, `more-information`, `prologue`, `discussion`, `solution` (`kind: template`, `package_phase: rjm:spec`).
  - ADR generation phases: `phase-g1-gather`, `phase-g2-research`, `phase-g3-generate`, `phase-g4-validate`, `phase-g5-save`, `phase-g4` (`kind: phase`, `package_phase: rjm:spec`).
  - Validation checklists and quality gates: `adr-quality-checklist`, `structural-completeness`, `content-quality`, `start-definition-of-ready`, `zimmermann-review-questions` (`kind: checklist`/`gate`).
  - Multi-agent review protocol and techniques: `phase-0-related-work-research`, `phase-1-independent-review`, `scope-analysis`, `adr-update-generation` (`kind: phase`/`technique`, `package_phase: rjm:review`).
  - Review artifacts and outcomes: `debate-log`, `updated-adr`, `scope-split-recommendation`, `lifecycle-frontmatter` (`kind: artifact`).
  - Cross-phase governance and design patterns: `governance`, `dummy-alternatives` (`kind: pattern`).
  - Script identifiers: `check-adr-uniqueness-py` authored with `kind: name-only` per D-023.
- All 32 occurrences specified in `facts/cc-rjm-91.txt` are included as rows in the respective `Where used` tables.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (32 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 27 authored concept cards and this unit report.
