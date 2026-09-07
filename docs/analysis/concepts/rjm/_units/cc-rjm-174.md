---
unit: cc-rjm-174
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-174

## Files assigned
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/workflow.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-prompt-engineering-single-turn-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-workflow-md.md

## Outputs produced
- docs/analysis/concepts/rjm/pre-work-context-analysis.md (1697 bytes)
- docs/analysis/concepts/rjm/emphasis-hierarchy.md (1430 bytes)
- docs/analysis/concepts/rjm/embedded-verification.md (1449 bytes)
- docs/analysis/concepts/rjm/thinking-tags.md (1547 bytes)
- docs/analysis/concepts/rjm/instructive-tag-naming.md (1549 bytes)
- docs/analysis/concepts/rjm/completeness-checkpoint-tags.md (1434 bytes)
- docs/analysis/concepts/rjm/tabular-reasoning-structure.md (1478 bytes)
- docs/analysis/concepts/rjm/tab-cot.md (1461 bytes)
- docs/analysis/concepts/rjm/directional-stimulus-prompting.md (1676 bytes)
- docs/analysis/concepts/rjm/the-stop-escalation-pattern.md (1603 bytes)
- docs/analysis/concepts/rjm/numbered-rule-priority.md (1444 bytes)
- docs/analysis/concepts/rjm/reward-penalty-framing.md (1568 bytes)
- docs/analysis/concepts/rjm/ux-justified-defaults.md (1567 bytes)
- docs/analysis/concepts/rjm/rogue-actions.md (1473 bytes)
- docs/analysis/concepts/rjm/premature-disengagement.md (1530 bytes)
- docs/analysis/concepts/rjm/incoherent-objects.md (1712 bytes)
- docs/analysis/concepts/rjm/the-hedging-spiral.md (1709 bytes)
- docs/analysis/concepts/rjm/the-everything-is-critical-problem.md (1718 bytes)
- docs/analysis/concepts/rjm/vague-behavioral-instructions.md (1460 bytes)
- docs/analysis/concepts/rjm/the-implicit-category-trap.md (1764 bytes)
- docs/analysis/concepts/rjm/the-soft-attention-trap.md (1599 bytes)
- docs/analysis/concepts/rjm/the-negative-instruction-trap.md (1724 bytes)
- docs/analysis/concepts/rjm/empty-input-handling.md (1480 bytes)
- docs/analysis/concepts/rjm/automatic-generation-of-invalid-demonstrations.md (1743 bytes)
- docs/analysis/concepts/rjm/forbidden-output-phrases-pattern.md (1562 bytes)
- docs/analysis/concepts/rjm/complexity-based-example-selection.md (1590 bytes)
- docs/analysis/concepts/rjm/diversity-based-example-selection.md (1588 bytes)
- docs/analysis/concepts/rjm/zero-shot-cot.md (1479 bytes)
- docs/analysis/concepts/rjm/zero-shot-ps.md (1699 bytes)
- docs/analysis/concepts/rjm/chain-of-thought.md (1671 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-174.md (5481 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/pre-work-context-analysis.md ...`, exit code 0 (63 PASS, 0 FAIL across 30 cards)
- scripts/synthesis/coverage.ts, `bun scripts/synthesis/coverage.ts`, exit code 1 (0 orphan cards, 0 empty required sections; 6398 concepts without card and 1381 unregenerated index entries for orchestrator run milestone)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to cc-rjm-174 were absent prior to this unit and have been newly authored under `docs/analysis/concepts/rjm/`.
- The concepts encompass research-backed prompt engineering patterns, techniques, reasoning architectures, and anti-patterns defined in `.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md` and verified in `.claude/skills/prompt-engineer/references/workflow.md`:
  - Reasoning structures & architectures: `chain-of-thought`, `zero-shot-cot`, `zero-shot-ps`, `tabular-reasoning-structure`, `tab-cot`.
  - Example design & selection: `complexity-based-example-selection`, `diversity-based-example-selection`, `incoherent-objects`, `automatic-generation-of-invalid-demonstrations`.
  - Output control & XML formatting: `thinking-tags`, `instructive-tag-naming`, `completeness-checkpoint-tags`, `empty-input-handling`, `forbidden-output-phrases-pattern`, `directional-stimulus-prompting`.
  - Behavioral shaping & priority resolution: `pre-work-context-analysis`, `emphasis-hierarchy`, `the-stop-escalation-pattern`, `numbered-rule-priority`, `reward-penalty-framing`, `ux-justified-defaults`.
  - Agent overthinking failure modes: `rogue-actions`, `premature-disengagement`.
  - Verification techniques: `embedded-verification`.
  - Prompt anti-patterns: `the-hedging-spiral`, `the-everything-is-critical-problem`, `vague-behavioral-instructions`, `the-implicit-category-trap`, `the-soft-attention-trap`, `the-negative-instruction-trap` (several cross-referenced in workflow.md Phase 4.3).
- All 35 recorded occurrences across both source files were mapped exactly to rows in the cards' `Where used` tables.
- Verification via `quote-check.ts` confirmed 63 PASS, 0 FAIL across all 30 concept cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~24,200 tokens across 2 source files and 2 inventory cards; approximate tokens of output written: ~14,000 tokens across 30 concept cards and this unit report.
