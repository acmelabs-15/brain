---
unit: cc-rjm-164
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-164

## Files assigned
- [x] sources/rjm/.claude/skills/planner/SKILL.md
- [x] sources/rjm/.claude/skills/planner/resources/default-conventions.md
- [x] sources/rjm/.claude/skills/planner/resources/diff-format.md
- [x] sources/rjm/.claude/skills/planner/resources/plan-format.md
- [x] sources/rjm/.claude/skills/planner/scripts/planner.py
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/refactoring.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/scripts/validation/citation_anchors.py

## Outputs produced
- docs/analysis/concepts/rjm/suggestion.md (1130 bytes)
- docs/analysis/concepts/rjm/structural-conventions.md (1076 bytes)
- docs/analysis/concepts/rjm/god-object.md (1088 bytes)
- docs/analysis/concepts/rjm/god-function.md (1080 bytes)
- docs/analysis/concepts/rjm/duplicate-logic.md (1115 bytes)
- docs/analysis/concepts/rjm/dead-code.md (1245 bytes)
- docs/analysis/concepts/rjm/inconsistent-error-handling.md (1175 bytes)
- docs/analysis/concepts/rjm/file-organization-conventions.md (1118 bytes)
- docs/analysis/concepts/rjm/test-organization.md (1098 bytes)
- docs/analysis/concepts/rjm/file-creation.md (1079 bytes)
- docs/analysis/concepts/rjm/testing-conventions.md (1058 bytes)
- docs/analysis/concepts/rjm/modernization-conventions.md (1094 bytes)
- docs/analysis/concepts/rjm/version-constraint-violation.md (1176 bytes)
- docs/analysis/concepts/rjm/modernization-opportunity.md (1161 bytes)
- docs/analysis/concepts/rjm/unified-diff-format-for-plan-code-changes.md (1163 bytes)
- docs/analysis/concepts/rjm/two-layer-location-strategy.md (1082 bytes)
- docs/analysis/concepts/rjm/prose-scope-hints.md (1032 bytes)
- docs/analysis/concepts/rjm/function-context-in-line.md (1089 bytes)
- docs/analysis/concepts/rjm/context-lines.md (1141 bytes)
- docs/analysis/concepts/rjm/comment-placement.md (1022 bytes)
- docs/analysis/concepts/rjm/location-directives-forbidden.md (1101 bytes)
- docs/analysis/concepts/rjm/diff-format-decision.md (1041 bytes)
- docs/analysis/concepts/rjm/plan-format.md (1121 bytes)
- docs/analysis/concepts/rjm/planning-context.md (1016 bytes)
- docs/analysis/concepts/rjm/reasoning-chain.md (1077 bytes)
- docs/analysis/concepts/rjm/rejected-alternatives.md (1180 bytes)
- docs/analysis/concepts/rjm/constraints-assumptions.md (1069 bytes)
- docs/analysis/concepts/rjm/known-risks.md (1110 bytes)
- docs/analysis/concepts/rjm/anchor-requirement.md (1368 bytes)
- docs/analysis/concepts/rjm/invisible-knowledge.md (1034 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-164.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-164 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-164 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-164.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
