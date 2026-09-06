---
unit: inv-rjm-159
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-159

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/external-skill-source-adaptation.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/iteration-guide.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/modularity-guidelines.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/multi-lens-framework.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/output-structure.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/overview-and-triggers.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/phase0-triage.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/phase1-analysis-deep-dive.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/phase2-specification-deep-dive.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/phase3-generation-deep-dive.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-external-skill-source-adaptation-md.md (3947 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-iteration-guide-md.md (3775 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-modularity-guidelines-md.md (3842 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-multi-lens-framework-md.md (5786 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-output-structure-md.md (3374 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-overview-and-triggers-md.md (3422 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-phase0-triage-md.md (3825 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-phase1-analysis-deep-dive-md.md (3787 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-phase2-specification-deep-dive-md.md (2681 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-references-phase3-generation-deep-dive-md.md (2897 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-159.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-159` is Part 2 of `.claude/skills/skillforge/` covering 10 references: `external-skill-source-adaptation.md`, `iteration-guide.md`, `modularity-guidelines.md`, `multi-lens-framework.md`, `output-structure.md`, `overview-and-triggers.md`, `phase0-triage.md`, `phase1-analysis-deep-dive.md`, `phase2-specification-deep-dive.md`, and `phase3-generation-deep-dive.md` (49,659 total source bytes).
- Context file `.claude/skills/skillforge/SKILL.md` was read in full prior to writing deliverables.
- Lifecycle role: skillforge serves as the meta-skill authoring and orchestration engine for `rjm`, providing a 4-phase generative pipeline preceded by a mandatory Phase 0 triage step.
- Defect notes:
  - `iteration-guide.md`: omitted from `SKILL.md` References table, though recorded in `.claude/skills/skillforge/TRANSFORMATION_NOTES.md:215` as an upstream v5.x addition.
  - `modularity-guidelines.md`: omitted from `SKILL.md` References table, though called by `scripts/skill_modularity_audit.py:8` and recorded in `TRANSFORMATION_NOTES.md:246`.
  - `modularity-guidelines.md:50-55`: documents an asymmetry in `_score_modularity` where cutting toward the floor is not penalized, tracking issue #4327.
- Cross-skill linkages:
  - `multi-lens-framework.md` is invoked as a core reference by the review skill (`.claude/skills/review/references/architect.md:51`).
  - `phase0-triage.md` suggests `SkillComposer` for multi-domain requests.
- Duplication ledger: None of this unit's 10 files appear in `docs/analysis/manifest/rjm-duplicates.md` (no exact aliases, no variant pairs; no divergence cards required).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,415 tokens (49,659 bytes across 10 assigned files) plus context file `SKILL.md` (16,036 bytes, ~4,000 tokens).
- Approximate tokens of output written: ~9,330 tokens (37,336 bytes across 10 inventory cards and 1 unit report).
