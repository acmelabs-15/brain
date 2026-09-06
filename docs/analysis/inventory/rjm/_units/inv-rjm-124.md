---
unit: inv-rjm-124
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-124

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/golden-principles/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-golden-principles-skill-md.md` (11239 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-124.md` (2414 bytes)

## Scripts executed
- `.claude/skills/golden-principles/scripts/scan_principles.py`: `python3 .claude/skills/golden-principles/scripts/scan_principles.py --directory .claude/skills/golden-principles`, exit code 0
- `.claude/skills/golden-principles/scripts/scan_principles.py`: `python3 .claude/skills/golden-principles/scripts/scan_principles.py --rules nonexistent`, exit code 1
- `.claude/skills/golden-principles/scripts/scan_principles.py`: `python3 .claude/skills/golden-principles/scripts/scan_principles.py --directory .claude/skills`, exit code 10

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/golden-principles/SKILL.md` is part 2 of the golden-principles skill; part 1 was assigned in unit `inv-rjm-123` covering references (`references/design-*.md`) and scripts (`scripts/scan_principles*.py`).
- No exact duplicates or variant pairs appear in `docs/analysis/manifest/rjm-duplicates.md` for this file.
- The skill is in scope via `.claude/skills/review/SKILL.md:100` where `/review` chains `Skill(skill="golden-principles")` as local review axis 2, and via `docs/workflow-commands.md:166`.
- Upstream governance definitions are maintained in `.agents/governance/golden-principles.md` (defining GP-001 through GP-008). The scanner enforces GP-001, GP-003, GP-004, GP-005, and GP-006, while GP-002, GP-007, and GP-008 are delegated to git hooks and taste-lints.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~1,500 tokens (5,739 bytes in assigned SKILL.md, plus contextual reads of related scripts and references).
Approximate output written: ~3,100 tokens across 1 inventory card and 1 unit report.
