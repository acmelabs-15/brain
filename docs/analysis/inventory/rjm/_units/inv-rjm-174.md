---
unit: inv-rjm-174
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-174

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/steering-matcher/get_applicable_steering.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/steering-matcher/scripts/get_applicable_steering.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/steering-matcher/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/steering-matcher/steering-matcher.skill`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/stuck-detection/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/stuck-detection/stuck_detection.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-steering-matcher-get-applicable-steering-py.md` (5383 bytes)
- `docs/analysis/inventory/rjm/claude-skills-steering-matcher-scripts-get-applicable-steering-py.md` (5134 bytes)
- `docs/analysis/inventory/rjm/claude-skills-steering-matcher-skill-md.md` (6066 bytes)
- `docs/analysis/inventory/rjm/claude-skills-steering-matcher-steering-matcher-skill.md` (2322 bytes)
- `docs/analysis/inventory/rjm/claude-skills-stuck-detection-skill-md.md` (5289 bytes)
- `docs/analysis/inventory/rjm/claude-skills-stuck-detection-stuck-detection-py.md` (5342 bytes)

## Scripts executed
- `.claude/skills/steering-matcher/get_applicable_steering.py`: `python3 .claude/skills/steering-matcher/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering" --json`, exit code: 0
- `.claude/skills/steering-matcher/scripts/get_applicable_steering.py`: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"`, exit code: 0
- `.claude/skills/stuck-detection/stuck_detection.py`: `python3 .claude/skills/stuck-detection/stuck_detection.py --history /tmp/test_stuck_history.json check "This is a test response text that needs to be more than fifty characters long to pass the minimum text length."`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-174 covers two orchestrator runtime enhancement skills: `steering-matcher` (dynamic glob-based steering context injection) and `stuck-detection` (lexical Jaccard similarity loop detection).
- Duplication and divergence:
  - `steering-matcher` has duplicate script implementations: `.claude/skills/steering-matcher/get_applicable_steering.py` and `.claude/skills/steering-matcher/scripts/get_applicable_steering.py`. The `scripts/` variant uses `fnmatch.translate` with raw string placeholder replacements that fail on null-byte placeholders and Python 3.12 `\z` regex suffix, causing it to return `[]` when matching files. The root variant uses custom string replacement and works correctly, but emits PascalCase keys (`Name`, `Path`, etc.) rather than the snake_case keys expected by `SKILL.md`.
  - `.claude/skills/steering-matcher/steering-matcher.skill` is an auto-generated metadata stub declaring SKILL.md as its source of truth, but references a non-existent regeneration script `./scripts/gen-skills.ps1`.
  - `steering-matcher/SKILL.md` cites test directory `.claude/skills/steering-matcher/tests/`, but tests reside at `tests/skills/steering-matcher/test_get_applicable_steering.py`.
- `stuck-detection`:
  - Fully self-contained, stdlib-only guard that cleanly separates internal control signals (`<stuck-detection>` XML nudge tags) from end-user output.
  - Sibling cross-references: referenced by `ai-agents-debugging-playbook/SKILL.md:77` as an investigation pattern for looping agents.

## Blocked or uncertain
none

## Time and size
Source read: 34,013 bytes (~8,500 tokens). Output written: ~30,000 bytes (~7,500 tokens).
