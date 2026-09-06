---
unit: inv-rjm-146
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-146

## Files assigned
- [x] `.claude/skills/reflect/references/decision-tree-and-examples.md`
- [x] `.claude/skills/reflect/references/integration-and-design.md`
- [x] `.claude/skills/reflect/references/phase2-signal-detection.md`
- [x] `.claude/skills/reflect/references/phase3-4-propose-persist.md`
- [x] `.claude/skills/reflect/references/triggers.md`
- [x] `.claude/skills/reflect/SKILL.md`
- [x] `.claude/skills/reflect/templates/skill-observations-template.md`
- [x] `.claude/skills/requirements-interview/references/mental-models-circle-of-competence.md`
- [x] `.claude/skills/requirements-interview/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-reflect-references-decision-tree-and-examples-md.md` (4353 bytes)
- `docs/analysis/inventory/rjm/claude-skills-reflect-references-integration-and-design-md.md` (5045 bytes)
- `docs/analysis/inventory/rjm/claude-skills-reflect-references-phase2-signal-detection-md.md` (3069 bytes)
- `docs/analysis/inventory/rjm/claude-skills-reflect-references-phase3-4-propose-persist-md.md` (3383 bytes)
- `docs/analysis/inventory/rjm/claude-skills-reflect-references-triggers-md.md` (2973 bytes)
- `docs/analysis/inventory/rjm/claude-skills-reflect-skill-md.md` (4707 bytes)
- `docs/analysis/inventory/rjm/claude-skills-reflect-templates-skill-observations-template-md.md` (3232 bytes)
- `docs/analysis/inventory/rjm/claude-skills-requirements-interview-references-mental-models-circle-of-competence-md.md` (4790 bytes)
- `docs/analysis/inventory/rjm/claude-skills-requirements-interview-skill-md.md` (5835 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/reflect/templates/skill-observations-template.md` is an orphaned template in the repository (never loaded or cited by `reflect/SKILL.md` or any other file in scope).
- `.claude/skills/reflect/references/phase3-4-propose-persist.md` cites `python -m memory_enhancement verify`, which points into `scripts/memory_enhancement/`, an excluded directory under METHOD §1.2.
- `.claude/skills/requirements-interview/SKILL.md` directly models Matt Pocock's grill-me pattern from `aihero.dev` and GitHub, connecting rjm's specification workflow to external prior art.
- Downstream handoff from `requirements-interview` targets `spec-generator` and the specification artifact suite (`.agents/specs/requirements/REQ-NNN`, `DESIGN-NNN`, `TASK-NNN`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,400 tokens (41,606 bytes across 9 files).
Approximate tokens of output written: ~9,350 tokens (37,387 bytes across 9 inventory cards).
