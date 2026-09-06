---
unit: inv-rjm-176
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-176

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py` (41729 bytes, 1129 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/taste-lints/SKILL.md` (3956 bytes, 126 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-taste-lints-skill-md.md` (11231 bytes)
- `docs/analysis/inventory/rjm/claude-skills-taste-lints-scripts-taste-lints-py.md` (13850 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-176.md`

## Scripts executed
- `.claude/skills/taste-lints/scripts/taste_lints.py`: `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py sources/rjm/.claude/skills/taste-lints/SKILL.md` (exit 0)
- `.claude/skills/taste-lints/scripts/taste_lints.py`: `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py` (exit 10)
- `.claude/skills/taste-lints/scripts/taste_lints.py`: `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py --format json sources/rjm/.claude/skills/taste-lints/SKILL.md` (exit 0)
- `.claude/skills/taste-lints/scripts/taste_lints.py`: `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py --rules foo sources/rjm/.claude/skills/taste-lints/SKILL.md` (exit 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `taste-lints` is explicitly invoked by `/build` (`.claude/commands/build.md:68`) and is declared as part of `/review` (`.claude/commands/ship.md:113`).
- The script `taste_lints.py` defines suppression conventions (`# taste-lint: ignore <rule>`) and path segment exemptions (`FILE_SIZE_EXEMPT_SEGMENTS` for `.agents/memory`, `.agents/analysis/eval-artifacts`, and `.agents/sessions`) widely referenced across rjm scripts.
- The `AGENT_REMEDIATION` pattern turns static analysis into agent prompt injection; this pattern should be considered in Phase 3 concordance and Phase 4/5 lifecycle specifications.

## Blocked or uncertain
none

## Time and size
Source read: 45,685 bytes (~11,421 tokens); output written: ~26,500 bytes (~6,625 tokens).
