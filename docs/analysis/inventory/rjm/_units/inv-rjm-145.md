---
unit: inv-rjm-145
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-145

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/quality-grades/references/code-qualities.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/quality-grades/references/kiss-principle.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/quality-grades/references/solid-principles.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/quality-grades/scripts/check_grade_changes.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/quality-grades/scripts/grade_domains.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/quality-grades/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-quality-grades-references-code-qualities-md.md (4892 bytes)
- docs/analysis/inventory/rjm/claude-skills-quality-grades-references-kiss-principle-md.md (3854 bytes)
- docs/analysis/inventory/rjm/claude-skills-quality-grades-references-solid-principles-md.md (4658 bytes)
- docs/analysis/inventory/rjm/claude-skills-quality-grades-scripts-check-grade-changes-py.md (5885 bytes)
- docs/analysis/inventory/rjm/claude-skills-quality-grades-scripts-grade-domains-py.md (9069 bytes)
- docs/analysis/inventory/rjm/claude-skills-quality-grades-skill-md.md (8338 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-145.md

## Scripts executed
- .claude/skills/quality-grades/scripts/grade_domains.py, `python3 .claude/skills/quality-grades/scripts/grade_domains.py --top-n 3`, exit code: 0
- .claude/skills/quality-grades/scripts/grade_domains.py, `python3 .claude/skills/quality-grades/scripts/grade_domains.py --repo-root /tmp`, exit code: 2
- .claude/skills/quality-grades/scripts/check_grade_changes.py, `python3 .claude/skills/quality-grades/scripts/check_grade_changes.py --grades-file /tmp/test-grades.json --threshold 60`, exit code: 0
- .claude/skills/quality-grades/scripts/check_grade_changes.py, `python3 .claude/skills/quality-grades/scripts/check_grade_changes.py --grades-file /tmp/test-grades.json --threshold 70`, exit code: 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `quality-grades` is closely paired with the `quality-auditor` agent (`.claude/agents/quality-auditor.md`) and is called by `.claude/commands/test.md` (Step 6) to synthesize test gate verdicts into an overall quality score.
- Contrasts with `code-qualities-assessment` (`.claude/skills/code-qualities-assessment/SKILL.md`), which evaluates code maintainability at the method/class/module level, whereas `quality-grades` grades across architectural domains (agents, skills, scripts, tests, docs, workflows).
- All three reference files (`code-qualities.md`, `kiss-principle.md`, `solid-principles.md`) cite upstream paths in `wiki/concepts/Design Principles/...` that do not exist in `sources/rjm/`.
- `grade_domains.py` documents exit code 1 for script errors, but code only explicitly returns 0 or 2 in `main()`.

## Blocked or uncertain
none

## Time and size
Source: 34,119 bytes (~8,530 tokens). Output: ~38,500 bytes (~9,625 tokens).
