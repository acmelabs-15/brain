---
unit: cc-rjm-217
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-217

## Files assigned
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-schemas.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-step0-gates.md
- [x] sources/rjm/.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-prior-art-schema-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-schemas-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-references-spec-step0-gates-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-scripts-validate-spec-frontmatter-py.md

## Outputs produced
- docs/analysis/concepts/rjm/co-change-checklist.md (1758 bytes)
- docs/analysis/concepts/rjm/analyst-review.md (1616 bytes)
- docs/analysis/concepts/rjm/binary-drift-checks.md (1804 bytes)
- docs/analysis/concepts/rjm/prior-art-constraints-elicitation.md (1608 bytes)
- docs/analysis/concepts/rjm/spec-schemas.md (835 bytes)
- docs/analysis/concepts/rjm/3-tier-specification-layer.md (1474 bytes)
- docs/analysis/concepts/rjm/requirement-schema.md (1396 bytes)
- docs/analysis/concepts/rjm/design-schema.md (1386 bytes)
- docs/analysis/concepts/rjm/task-schema.md (1347 bytes)
- docs/analysis/concepts/rjm/ears-compliance.md (1231 bytes)
- docs/analysis/concepts/rjm/ontology-trace.md (1329 bytes)
- docs/analysis/concepts/rjm/complexity-definitions.md (1289 bytes)
- docs/analysis/concepts/rjm/traceability-matrix.md (1407 bytes)
- docs/analysis/concepts/rjm/no-orphan-requirements.md (1254 bytes)
- docs/analysis/concepts/rjm/no-orphan-designs.md (1214 bytes)
- docs/analysis/concepts/rjm/backward-traceability.md (1298 bytes)
- docs/analysis/concepts/rjm/status-consistency.md (1268 bytes)
- docs/analysis/concepts/rjm/step-0-gate-logic.md (1377 bytes)
- docs/analysis/concepts/rjm/pass-criteria.md (1204 bytes)
- docs/analysis/concepts/rjm/aspirational-test.md (1301 bytes)
- docs/analysis/concepts/rjm/specificity-test.md (1307 bytes)
- docs/analysis/concepts/rjm/speculative-test.md (1295 bytes)
- docs/analysis/concepts/rjm/canonical-hedge-phrase-list.md (1296 bytes)
- docs/analysis/concepts/rjm/script-and-state-resolution.md (1391 bytes)
- docs/analysis/concepts/rjm/auto-mode-behavior.md (1452 bytes)
- docs/analysis/concepts/rjm/kill-criteria-for-the-gate-itself.md (1459 bytes)
- docs/analysis/concepts/rjm/tally-instruction.md (1241 bytes)
- docs/analysis/concepts/rjm/canonical-spec-schema-enums.md (1407 bytes)
- docs/analysis/concepts/rjm/specvalidation.md (891 bytes)
- docs/analysis/concepts/rjm/validate-fields.md (960 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-217.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/co-change-checklist.md docs/analysis/concepts/rjm/analyst-review.md docs/analysis/concepts/rjm/binary-drift-checks.md docs/analysis/concepts/rjm/prior-art-constraints-elicitation.md docs/analysis/concepts/rjm/spec-schemas.md docs/analysis/concepts/rjm/3-tier-specification-layer.md docs/analysis/concepts/rjm/requirement-schema.md docs/analysis/concepts/rjm/design-schema.md docs/analysis/concepts/rjm/task-schema.md docs/analysis/concepts/rjm/ears-compliance.md docs/analysis/concepts/rjm/ontology-trace.md docs/analysis/concepts/rjm/complexity-definitions.md docs/analysis/concepts/rjm/traceability-matrix.md docs/analysis/concepts/rjm/no-orphan-requirements.md docs/analysis/concepts/rjm/no-orphan-designs.md docs/analysis/concepts/rjm/backward-traceability.md docs/analysis/concepts/rjm/status-consistency.md docs/analysis/concepts/rjm/step-0-gate-logic.md docs/analysis/concepts/rjm/pass-criteria.md docs/analysis/concepts/rjm/aspirational-test.md docs/analysis/concepts/rjm/specificity-test.md docs/analysis/concepts/rjm/speculative-test.md docs/analysis/concepts/rjm/canonical-hedge-phrase-list.md docs/analysis/concepts/rjm/script-and-state-resolution.md docs/analysis/concepts/rjm/auto-mode-behavior.md docs/analysis/concepts/rjm/kill-criteria-for-the-gate-itself.md docs/analysis/concepts/rjm/tally-instruction.md docs/analysis/concepts/rjm/canonical-spec-schema-enums.md docs/analysis/concepts/rjm/specvalidation.md docs/analysis/concepts/rjm/validate-fields.md` (exit code 0, 50 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-217 covers 30 concepts spanning the `/spec` lifecycle command pipeline:
  1. Spec pipeline gates and checklists: `Co-change checklist`, `Analyst review`, `binary drift checks`, `Prior Art / Constraints elicitation`.
  2. 3-tier specification hierarchy and schemas: `spec-schemas`, `3-tier specification layer`, `Requirement Schema`, `Design Schema`, `Task Schema`, `EARS Compliance`, `Ontology Trace`, `Complexity Definitions`.
  3. Traceability matrix and consistency rules: `Traceability Matrix`, `No Orphan Requirements`, `No Orphan Designs`, `Backward Traceability`, `Status Consistency`.
  4. Step 0 First Principles gate logic and operational tests: `Step 0 gate logic`, `Pass criteria`, `aspirational test`, `specificity test`, `speculative test`, `Canonical hedge phrase list`, `Script and state resolution`, `Auto-mode behavior`, `Kill criteria for the gate itself`, `Tally instruction`.
  5. Frontmatter validation contracts and implementation: `canonical spec schema enums`, `SpecValidation`, `validate_fields`.
- All 30 occurrences across 4 source files listed in `facts/cc-rjm-217.txt` are included as rows in `Where used` tables.
- All 30 cards pass `quote-check.ts` with 0 failures (50/50 citations verified).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~13,000 tokens across 30 concept cards and 1 unit report.
