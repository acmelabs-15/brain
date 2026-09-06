---
unit: inv-rjm-112
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-112

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-cva-analysis-skill-md.md (14021 bytes)

## Scripts executed
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py .claude/skills/cva-analysis/SKILL.md, exit 0
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py nonexistent.md, exit 1
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py <invalid-1x1-matrix>, exit 10
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py <valid-2x2-matrix>, exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/cva-analysis` is partitioned across three units: inv-rjm-110 (references: `coplien-multi-paradigm-design.md`, `gof-pattern-selection.md`, `matrix-building-examples.md`, `multidimensional-cva.md`, `pattern-mapping-guide.md`), inv-rjm-111 (reference `SKILL_SPEC.md` and script `validate-cva-matrix.py`), and inv-rjm-112 (the main `SKILL.md`).
- `SKILL.md` serves as the primary skill definition orchestrating the 5-phase CVA workflow, integrating with the script in `inv-rjm-111` and the reference guides in `inv-rjm-110`.
- In `invoked_by`, `cva-analysis` is invoked conditionally during PRD specification by `.claude/skills/spec-generator/references/spec-prior-art-schema.md:193`, during code review by `.claude/skills/review/references/architect.md:49`, and referenced as an anti-scope boundary by `.claude/skills/software-engineering-library/SKILL.md:4`.

## Blocked or uncertain
none

## Time and size
Approx 4,800 tokens of source read; approx 3,500 tokens of output written.
