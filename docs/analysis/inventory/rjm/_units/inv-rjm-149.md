---
unit: inv-rjm-149
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-149

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/retrospective/scripts/run_retrospective.py` — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py` — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/retrospective/SKILL.md` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-retrospective-scripts-run-retrospective-py.md` — 10337 bytes
- `docs/analysis/inventory/rjm/claude-skills-retrospective-scripts-score-atomicity-py.md` — 6970 bytes
- `docs/analysis/inventory/rjm/claude-skills-retrospective-skill-md.md` — 14483 bytes

## Scripts executed
- `.claude/skills/retrospective/scripts/score_atomicity.py`: `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py "The caching strategy was effective"` — exit code 1
- `.claude/skills/retrospective/scripts/score_atomicity.py`: `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py "Always run lint before commit to prevent 50% of CI failures"` — exit code 0
- `.claude/skills/retrospective/scripts/score_atomicity.py`: `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py ""` — exit code 2
- `.claude/skills/retrospective/scripts/run_retrospective.py`: `python3 sources/rjm/.claude/skills/retrospective/scripts/run_retrospective.py --project-dir /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17 --output /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17/test-retro.md --scope "2026-09-05-test" --learning "Always run lint before commit to prevent 50% of CI failures"` — exit code 0
- `.claude/skills/retrospective/scripts/extract_evidence.py`: `python3 sources/rjm/.claude/skills/retrospective/scripts/extract_evidence.py --scope "2026-09-05" --project-dir /Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-10/.agents/worker_17` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit completes part 2 of the `.claude/skills/retrospective` skill family (part 1 covers references and `extract_evidence.py` under unit `inv-rjm-148`).
- The skill replaces the earlier monolithic 46KB `retrospective` agent prompt (`.claude/agents/retrospective.md`), modularizing execution into Python utility scripts and reference rubrics.
- An internal documentation contradiction was identified in `SKILL.md`: line 25 states the Stop hook was deleted in #3349, but lines 53 and 182 still refer to auto-retro skeletons produced by the Stop hook and the Stop hook calling this skill.

## Blocked or uncertain
none

## Time and size
- Source read: 38129 bytes (~9532 tokens) across 3 files (plus inspection of references and sibling scripts)
- Output written: 31790 bytes (~7947 tokens) across 3 inventory cards
