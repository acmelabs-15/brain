---
unit: inv-rjm-165
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-165

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-validate-skill-py.md (13961 bytes)
- docs/analysis/inventory/rjm/claude-skills-skillforge-skill-md.md (18002 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-165.md

## Scripts executed
- `.claude/skills/skillforge/scripts/validate-skill.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py sources/rjm/.claude/skills/skillforge`, exit code 1 (fails on own repo skill due to fallback parser parsing boolean as string)
- `.claude/skills/skillforge/scripts/validate-skill.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py`, exit code 1 (prints usage message)
- `.claude/skills/skillforge/scripts/validate-skill.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py ~/.claude/skills/my-skill/`, exit code 1 (crashes with unhandled ValueError: Path traversal detected)
- `.claude/skills/skillforge/scripts/quick_validate.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/quick_validate.py sources/rjm/.claude/skills/skillforge`, exit code 0 (passes on skillforge)
- `.claude/skills/skillforge/scripts/package_skill.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/package_skill.py --help`, exit code 0
- `.claude/skills/skillforge/scripts/triage_skill_request.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/triage_skill_request.py --help`, exit code 0
- `.claude/skills/skillforge/scripts/discover_skills.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/discover_skills.py --help`, exit code 0
- `.claude/skills/skillforge/scripts/init_skill.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/init_skill.py --help`, exit code 0
- `.claude/skills/skillforge/scripts/skill_modularity_audit.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/skill_modularity_audit.py --help`, exit code 0
- `.claude/skills/skillforge/scripts/check_docs_safety.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/check_docs_safety.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-165` completes part 8 of `.claude/skills/skillforge` (`SKILL.md` and `scripts/validate-skill.py`). Sibling units `inv-rjm-158` through `inv-rjm-164` cover parts 1–7 (the 19 references under `references/`, assets/templates, and other companion scripts `_constants.py`, `frontmatter.py`, `check_docs_safety.py`, `discover_skills.py`, `init_skill.py`, `package_skill.py`, `quick_validate.py`, `skill_modularity_audit.py`, `triage_skill_request.py`).
- Major implementation defect discovered in `validate-skill.py`:
  - The fallback YAML parser `_parse_frontmatter_fallback` (used when PyYAML is not installed, which is true in standard Python 3 environments) stores all scalar values as strings. It does not parse YAML booleans (`true`/`false`), causing `user-invocable: true` in `SKILL.md` to be parsed as a string. Consequently, `validate_frontmatter` fails with `user-invocable must be a boolean (got str)` and exits 1 when run against `sources/rjm/.claude/skills/skillforge` and other skills with `user-invocable: true`.
  - Furthermore, `_parse_frontmatter_fallback` fails to parse list items (`- item`), resulting in `allowed-tools` being evaluated as an empty string, which then triggers a warning for unknown tool `['']`.
  - In `validate-skill.py:28`, `SkillValidator.__init__` raises an unhandled `ValueError` on path traversal, causing the documented example `python validate-skill.py ~/.claude/skills/my-skill/` to crash with an unhandled exception rather than returning a structured error.
- Duplication ledger:
  - Neither file appears in `docs/analysis/manifest/rjm-duplicates.md`. No divergence cards are required.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,800 tokens (47,272 bytes across `validate-skill.py` and `SKILL.md`).
- Approximate tokens of output written: ~8,000 tokens (31,963 bytes across 2 inventory cards + unit report).
