---
unit: inv-rjm-160
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-160

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/phase4-synthesis-deep-dive.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/regression-questions.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/script-integration-framework.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-phase4-synthesis-deep-dive-md.md (5600 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-regression-questions-md.md (8111 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-script-integration-framework-md.md (11086 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-160.md (1750 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- SkillForge (`.claude/skills/skillforge/`) is partitioned across multiple units; this unit (part 3, inv-rjm-160) covers three deep dive reference manuals: Phase 4 Synthesis, Regression Questions, and Script Integration Framework.
- The reference files directly link across units to `synthesis-protocol.md`, `script-patterns-catalog.md`, `evolution-scoring.md`, and the skillforge validation scripts (`validate-skill.py`).
- `script-integration-framework.md` contains illustrative bash and python invocation examples tagged with a vendor-portability comment (`vendor-portability-exec: example invocations only; scripts referenced here are illustrative and do not exist in this repository`), confirming they are templates rather than shipped repo scripts.

## Blocked or uncertain
none

## Time and size
Approximate source read: 31,303 bytes (~7,825 tokens) across assigned files plus 16,036 bytes (~4,000 tokens) for skillforge context SKILL.md. Approximate output written: 26,547 bytes (~6,635 tokens) across 3 inventory cards and 1 unit report.
