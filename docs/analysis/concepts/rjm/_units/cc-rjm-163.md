---
unit: cc-rjm-163
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-163

## Files assigned
- [x] sources/rjm/.claude/skills/planner/SKILL.md
- [x] sources/rjm/.claude/skills/planner/references/DEVELOPMENT.md
- [x] sources/rjm/.claude/skills/planner/references/explainers-and-intents.md
- [x] sources/rjm/.claude/skills/planner/references/hybrid-memory-architecture.md
- [x] sources/rjm/.claude/skills/planner/references/mental-models-galls-law.md
- [x] sources/rjm/.claude/skills/planner/references/strategy-ooda-loop.md
- [x] sources/rjm/.claude/skills/planner/resources/default-conventions.md

## Outputs produced
- docs/analysis/concepts/rjm/default-conventions-md.md (888 bytes)
- docs/analysis/concepts/rjm/four-tier-priority-hierarchy.md (1117 bytes)
- docs/analysis/concepts/rjm/user-specified.md (1185 bytes)
- docs/analysis/concepts/rjm/doc-derived.md (1173 bytes)
- docs/analysis/concepts/rjm/default-derived.md (1195 bytes)
- docs/analysis/concepts/rjm/assumption.md (1177 bytes)
- docs/analysis/concepts/rjm/sync-verification.md (1024 bytes)
- docs/analysis/concepts/rjm/explainers-and-intents.md (1084 bytes)
- docs/analysis/concepts/rjm/intent.md (992 bytes)
- docs/analysis/concepts/rjm/intent-to-prototype.md (1148 bytes)
- docs/analysis/concepts/rjm/intent-to-experiment.md (1132 bytes)
- docs/analysis/concepts/rjm/intent-to-ship.md (1095 bytes)
- docs/analysis/concepts/rjm/intent-to-deprecate.md (1125 bytes)
- docs/analysis/concepts/rjm/intent-to-remove.md (1102 bytes)
- docs/analysis/concepts/rjm/fast-track.md (1015 bytes)
- docs/analysis/concepts/rjm/hybrid-memory-architecture.md (1120 bytes)
- docs/analysis/concepts/rjm/storage-selection.md (1069 bytes)
- docs/analysis/concepts/rjm/hybrid-retrieval-cascade.md (1249 bytes)
- docs/analysis/concepts/rjm/composite-score.md (1105 bytes)
- docs/analysis/concepts/rjm/memory-decay-tiers.md (1213 bytes)
- docs/analysis/concepts/rjm/decision-extraction.md (1219 bytes)
- docs/analysis/concepts/rjm/pre-flight-checkpoints.md (1099 bytes)
- docs/analysis/concepts/rjm/planning-verification-questions.md (1145 bytes)
- docs/analysis/concepts/rjm/red-flags-in-plans.md (1067 bytes)
- docs/analysis/concepts/rjm/planning-phase-as-ooda.md (1076 bytes)
- docs/analysis/concepts/rjm/execution-phase-as-ooda.md (1082 bytes)
- docs/analysis/concepts/rjm/default-conventions.md (1193 bytes)
- docs/analysis/concepts/rjm/priority-hierarchy.md (1050 bytes)
- docs/analysis/concepts/rjm/severity-levels.md (1034 bytes)
- docs/analysis/concepts/rjm/should-fix.md (876 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-163.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-163 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-163 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-163.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
