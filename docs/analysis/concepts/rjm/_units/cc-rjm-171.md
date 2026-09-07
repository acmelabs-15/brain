---
unit: cc-rjm-171
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-171

## Files assigned
- [x] sources/rjm/.claude/skills/programming-advisor/SKILL.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md
- [x] docs/analysis/inventory/rjm/claude-skills-programming-advisor-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-prompt-engineering-multi-turn-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-prompt-engineering-single-turn-md.md

## Outputs produced
- docs/analysis/concepts/rjm/extend.md (1524 bytes)
- docs/analysis/concepts/rjm/security-sensitive-carve-out.md (1838 bytes)
- docs/analysis/concepts/rjm/external-solutions.md (893 bytes)
- docs/analysis/concepts/rjm/comparison-table.md (1524 bytes)
- docs/analysis/concepts/rjm/strategic-build-buy-partner-defer.md (1571 bytes)
- docs/analysis/concepts/rjm/recommendation-framework.md (1527 bytes)
- docs/analysis/concepts/rjm/integration-planning.md (1538 bytes)
- docs/analysis/concepts/rjm/cost-analysis.md (1527 bytes)
- docs/analysis/concepts/rjm/multi-year-tco.md (1510 bytes)
- docs/analysis/concepts/rjm/tactical-cost-note.md (1405 bytes)
- docs/analysis/concepts/rjm/hidden-costs.md (1449 bytes)
- docs/analysis/concepts/rjm/red-flags.md (1382 bytes)
- docs/analysis/concepts/rjm/multi-turn-prompts.md (1742 bytes)
- docs/analysis/concepts/rjm/cot.md (1573 bytes)
- docs/analysis/concepts/rjm/plan-and-solve.md (1966 bytes)
- docs/analysis/concepts/rjm/re2.md (1709 bytes)
- docs/analysis/concepts/rjm/meta-principle.md (1659 bytes)
- docs/analysis/concepts/rjm/self-refine.md (1925 bytes)
- docs/analysis/concepts/rjm/iterative-critique.md (1585 bytes)
- docs/analysis/concepts/rjm/format-strictness.md (1845 bytes)
- docs/analysis/concepts/rjm/quote-extraction.md (1860 bytes)
- docs/analysis/concepts/rjm/joint-verification.md (1753 bytes)
- docs/analysis/concepts/rjm/factscore.md (1234 bytes)
- docs/analysis/concepts/rjm/cove.md (1759 bytes)
- docs/analysis/concepts/rjm/joint-cove.md (1633 bytes)
- docs/analysis/concepts/rjm/universal-self-consistency.md (1559 bytes)
- docs/analysis/concepts/rjm/greedy-decoding.md (1596 bytes)
- docs/analysis/concepts/rjm/multi-chain-reasoning.md (1692 bytes)
- docs/analysis/concepts/rjm/complexity-weighted-voting.md (1666 bytes)
- docs/analysis/concepts/rjm/usc.md (1601 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-171.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/extend.md docs/analysis/concepts/rjm/security-sensitive-carve-out.md docs/analysis/concepts/rjm/external-solutions.md docs/analysis/concepts/rjm/comparison-table.md docs/analysis/concepts/rjm/strategic-build-buy-partner-defer.md docs/analysis/concepts/rjm/recommendation-framework.md docs/analysis/concepts/rjm/integration-planning.md docs/analysis/concepts/rjm/cost-analysis.md docs/analysis/concepts/rjm/multi-year-tco.md docs/analysis/concepts/rjm/tactical-cost-note.md docs/analysis/concepts/rjm/hidden-costs.md docs/analysis/concepts/rjm/red-flags.md docs/analysis/concepts/rjm/multi-turn-prompts.md docs/analysis/concepts/rjm/cot.md docs/analysis/concepts/rjm/plan-and-solve.md docs/analysis/concepts/rjm/re2.md docs/analysis/concepts/rjm/meta-principle.md docs/analysis/concepts/rjm/self-refine.md docs/analysis/concepts/rjm/iterative-critique.md docs/analysis/concepts/rjm/format-strictness.md docs/analysis/concepts/rjm/quote-extraction.md docs/analysis/concepts/rjm/joint-verification.md docs/analysis/concepts/rjm/factscore.md docs/analysis/concepts/rjm/cove.md docs/analysis/concepts/rjm/joint-cove.md docs/analysis/concepts/rjm/universal-self-consistency.md docs/analysis/concepts/rjm/greedy-decoding.md docs/analysis/concepts/rjm/multi-chain-reasoning.md docs/analysis/concepts/rjm/complexity-weighted-voting.md docs/analysis/concepts/rjm/usc.md` (exit code 0, 45 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-171 authors 30 concept cards across two primary functional areas:
  1. Solution evaluation and wheel detection from `programming-advisor` (`extend`, `security-sensitive-carve-out`, `external-solutions`, `comparison-table`, `strategic-build-buy-partner-defer`, `recommendation-framework`, `integration-planning`, `cost-analysis`, `multi-year-tco`, `tactical-cost-note`, `hidden-costs`, `red-flags`).
  2. Multi-turn and iterative prompt engineering methods from `prompt-engineer` references (`multi-turn-prompts`, `cot`, `plan-and-solve`, `re2`, `meta-principle`, `self-refine`, `iterative-critique`, `format-strictness`, `quote-extraction`, `joint-verification`, `factscore`, `cove`, `joint-cove`, `universal-self-consistency`, `greedy-decoding`, `multi-chain-reasoning`, `complexity-weighted-voting`, `usc`).
- All 36 occurrences recorded in `facts/cc-rjm-171.txt` are faithfully mapped to the respective Where used tables.
- Concepts representing section headings (`external-solutions`) or academic benchmark metrics (`factscore`) were assigned `kind: name-only` per D-023.
- All citing inventory cards report clean implementations (`Defects: none`), which is accurately reflected in each card's `Implementation status`.
- All 30 cards verified with `bun scripts/synthesis/quote-check.ts` resulting in 45 PASS, 0 FAIL, 0 MISSING across 30 cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~32,000 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
