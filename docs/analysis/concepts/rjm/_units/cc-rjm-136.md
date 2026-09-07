---
unit: cc-rjm-136
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-136

## Files assigned
- [x] sources/rjm/.claude/skills/cva-analysis/SKILL.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/SKILL.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/references/cynefin-deep-dive.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/references/domain-transitions.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/scripts/classify.py
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/llm_classification/cache.py
- [x] docs/analysis/inventory/rjm/claude-skills-cva-analysis-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-cynefin-deep-dive-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-domain-transitions-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-scripts-classify-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification-cache-py.md

## Outputs produced
- docs/analysis/concepts/rjm/adr-stub.md (1659 bytes)
- docs/analysis/concepts/rjm/any-domain-to-chaotic.md (1628 bytes)
- docs/analysis/concepts/rjm/best-practice.md (1914 bytes)
- docs/analysis/concepts/rjm/chaotic-to-complex.md (1642 bytes)
- docs/analysis/concepts/rjm/chaotic.md (2585 bytes)
- docs/analysis/concepts/rjm/clear-to-complicated.md (1623 bytes)
- docs/analysis/concepts/rjm/clear.md (2914 bytes)
- docs/analysis/concepts/rjm/clockwise.md (1759 bytes)
- docs/analysis/concepts/rjm/complacency.md (1776 bytes)
- docs/analysis/concepts/rjm/complex-to-complicated.md (1623 bytes)
- docs/analysis/concepts/rjm/complicated-to-clear.md (1619 bytes)
- docs/analysis/concepts/rjm/complicated-to-complex.md (1647 bytes)
- docs/analysis/concepts/rjm/confusion.md (2379 bytes)
- docs/analysis/concepts/rjm/counter-clockwise.md (1796 bytes)
- docs/analysis/concepts/rjm/disorder.md (1659 bytes)
- docs/analysis/concepts/rjm/disruption.md (2178 bytes)
- docs/analysis/concepts/rjm/domain-transitions.md (1731 bytes)
- docs/analysis/concepts/rjm/emergent-practice.md (1982 bytes)
- docs/analysis/concepts/rjm/good-practices.md (1693 bytes)
- docs/analysis/concepts/rjm/multidimensional-variability.md (1758 bytes)
- docs/analysis/concepts/rjm/natural-evolution.md (2188 bytes)
- docs/analysis/concepts/rjm/novel-practice.md (1972 bytes)
- docs/analysis/concepts/rjm/obvious.md (1603 bytes)
- docs/analysis/concepts/rjm/phase-3-build-cva-matrix.md (1750 bytes)
- docs/analysis/concepts/rjm/phase-4-map-to-patterns.md (1685 bytes)
- docs/analysis/concepts/rjm/phase-5-validation-and-handoff.md (1788 bytes)
- docs/analysis/concepts/rjm/safe-to-fail-experiments.md (2077 bytes)
- docs/analysis/concepts/rjm/the-cliff-edge.md (2150 bytes)
- docs/analysis/concepts/rjm/tiered-depth-levels.md (1565 bytes)
- docs/analysis/concepts/rjm/validate-cva-matrix-py.md (1400 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-136.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/phase-3-build-cva-matrix.md docs/analysis/concepts/rjm/phase-4-map-to-patterns.md docs/analysis/concepts/rjm/phase-5-validation-and-handoff.md docs/analysis/concepts/rjm/multidimensional-variability.md docs/analysis/concepts/rjm/adr-stub.md docs/analysis/concepts/rjm/validate-cva-matrix-py.md docs/analysis/concepts/rjm/tiered-depth-levels.md docs/analysis/concepts/rjm/clear.md docs/analysis/concepts/rjm/chaotic.md docs/analysis/concepts/rjm/obvious.md docs/analysis/concepts/rjm/confusion.md docs/analysis/concepts/rjm/disorder.md docs/analysis/concepts/rjm/best-practice.md docs/analysis/concepts/rjm/good-practices.md docs/analysis/concepts/rjm/emergent-practice.md docs/analysis/concepts/rjm/novel-practice.md docs/analysis/concepts/rjm/safe-to-fail-experiments.md docs/analysis/concepts/rjm/natural-evolution.md docs/analysis/concepts/rjm/disruption.md docs/analysis/concepts/rjm/the-cliff-edge.md docs/analysis/concepts/rjm/complacency.md docs/analysis/concepts/rjm/domain-transitions.md docs/analysis/concepts/rjm/clockwise.md docs/analysis/concepts/rjm/chaotic-to-complex.md docs/analysis/concepts/rjm/complex-to-complicated.md docs/analysis/concepts/rjm/complicated-to-clear.md docs/analysis/concepts/rjm/counter-clockwise.md docs/analysis/concepts/rjm/clear-to-complicated.md docs/analysis/concepts/rjm/complicated-to-complex.md docs/analysis/concepts/rjm/any-domain-to-chaotic.md` (exit code 0, 41 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-136 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 card(s) stamped, 46 input(s))

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-136 covers 30 concepts spanning two distinct sub-domains in the rjm package:
  1. Commonality Variability Analysis (`phase-3-build-cva-matrix`, `phase-4-map-to-patterns`, `phase-5-validation-and-handoff`, `multidimensional-variability`, `adr-stub`, `validate-cva-matrix-py`, `tiered-depth-levels`): Systematic derivation of abstractions from multi-case requirements based on Coplien's Multi-Paradigm Design. Script file `validate-cva-matrix-py` is cataloged with `kind: name-only` per D-023.
  2. Cynefin Framework and Domain Transitions (`clear`, `chaotic`, `obvious`, `confusion`, `disorder`, `best-practice`, `good-practices`, `emergent-practice`, `novel-practice`, `safe-to-fail-experiments`, `natural-evolution`, `disruption`, `the-cliff-edge`, `complacency`, `domain-transitions`, `clockwise`, `chaotic-to-complex`, `complex-to-complicated`, `complicated-to-clear`, `counter-clockwise`, `clear-to-complicated`, `complicated-to-complex`, `any-domain-to-chaotic`): Epistemological framework categorizing problem contexts and cognitive strategies, including natural clockwise evolutionary dynamics, disruptive counter-clockwise shifts, and the catastrophic "cliff edge" of complacency dropping from Clear to Chaotic.
- All 46 occurrences specified in `facts/cc-rjm-136.txt` across the 30 concepts are fully documented in the `Where used` tables.
- Defect annotations from inventory cards (`defects: doc-drift`, `defects: missing-path`, `defects: unimplemented-feature`) were propagated to `Implementation status`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (41 PASS, 0 FAIL).
- All 30 cards have been stamped with `memo.ts stamp-unit`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 unit report.
