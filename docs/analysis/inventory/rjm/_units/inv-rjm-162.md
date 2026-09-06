---
unit: inv-rjm-162
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-162

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/references/synthesis-protocol.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/scripts/_constants.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/scripts/check_docs_safety.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/scripts/discover_skills.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/skillforge/scripts/frontmatter.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-skillforge-references-synthesis-protocol-md.md` (10710 bytes)
- `docs/analysis/inventory/rjm/claude-skills-skillforge-scripts--constants-py.md` (5673 bytes)
- `docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-check-docs-safety-py.md` (4817 bytes)
- `docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-discover-skills-py.md` (8546 bytes)
- `docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-frontmatter-py.md` (3316 bytes)

## Scripts executed
- `.claude/skills/skillforge/scripts/_constants.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/_constants.py`, exit code 0
- `.claude/skills/skillforge/scripts/check_docs_safety.py`, `python3 scripts/check_docs_safety.py`, exit code 0
- `.claude/skills/skillforge/scripts/check_docs_safety.py`, `python3 scripts/check_docs_safety.py SKILL.md references/script-integration-framework.md`, exit code 0
- `.claude/skills/skillforge/scripts/check_docs_safety.py`, `python3 scripts/check_docs_safety.py nonexistent.md`, exit code 2
- `.claude/skills/skillforge/scripts/discover_skills.py`, `python3 scripts/discover_skills.py --help`, exit code 0
- `.claude/skills/skillforge/scripts/discover_skills.py`, `python3 scripts/discover_skills.py`, exit code 0
- `.claude/skills/skillforge/scripts/frontmatter.py`, `python3 sources/rjm/.claude/skills/skillforge/scripts/frontmatter.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-162 covers part 5 of `.claude/skills/skillforge`, consisting of 1 reference document (`synthesis-protocol.md`) and 4 Python utility and validation scripts (`_constants.py`, `check_docs_safety.py`, `discover_skills.py`, `frontmatter.py`).
- Prior context from `.claude/skills/skillforge/SKILL.md` was read in full prior to authoring cards.
- Architectural insights:
  - `synthesis-protocol.md`: Establishes the multi-perspective quality gate for Phase 4 of SkillForge. It details 3 evaluative lenses (Design, Audience, Evolution), weighted scoring, a 5-round iteration loop with escalating criteria, and an in-depth trade-off analysis between shared context and forked context (`context: fork`).
  - `_constants.py`: Canonical source of truth for skill schema validation rules across the repository (e.g. `DESCRIPTION_MAX_LENGTH = 1024`, `NAME_MAX_LENGTH = 64`, `VALID_AGENT_TYPES`, `VALID_HOOK_EVENTS`). Explicitly ties to repository architecture decision `ADR-080` (justification for bare model alias pin) and size limits.
  - `check_docs_safety.py`: Lightweight security gate scanning markdown documentation for unquoted command interpolations (`$TOOL_INPUT`, `$TOOL_OUTPUT`) to prevent command injection vulnerabilities in lifecycle hook command definitions.
  - `discover_skills.py`: Ecosystem scanner for Phase 0 triage that discovers, parses, and indexes skills across custom directories, superpowers caches, and marketplaces, grouping them into 19 domain categories with cached JSON index persistence. Contains origin metadata indicating extraction from `skillrecommender`.
  - `frontmatter.py`: Minimalist frontmatter utility parsing `size-exception: true` declarations, imported by both local audit scripts (`skill_modularity_audit.py`) and root CI validation (`scripts/validation/skill_size.py`).
- Defects observed:
  - `doc-drift` in `synthesis-protocol.md:17` specifying a 3-agent panel, whereas `SKILL.md:190-192` and `phase4-synthesis-deep-dive.md` specify 3-4 agents (including a Script and Automation agent).
  - `doc-drift` in `synthesis-protocol.md:29` citing `Model: Opus 4.6`, conflicting with repo model alias constraints.
  - `doc-drift` in `discover_skills.py:5` claiming to be part of the `skillrecommender` skill.
  - `missing-path` in `discover_skills.py:79-100` hardcoding four external plugin/marketplace directory paths that are absent in fresh or standard environments.
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,270 tokens (41,080 bytes across 5 assigned files, plus 16,036 bytes of contextual `SKILL.md`); approximate tokens of output written: ~9,125 tokens (33,062 bytes across 5 inventory cards, plus ~3,500 bytes for this unit report).
