---
unit: inv-rjm-121
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-121

## Files assigned
- [x] sources/rjm/.claude/skills/git-advanced-workflows/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-git-advanced-workflows-skill-md.md (11681 bytes)

## Scripts executed
- scripts/maintenance/repair_worktree_venv.py, `python3 scripts/maintenance/repair_worktree_venv.py --check`, exit 0
- scripts/maintenance/repair_worktree_venv.py, `python3 scripts/maintenance/repair_worktree_venv.py --help`, exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/git-advanced-workflows/SKILL.md` is an uninvoked guidance document ("passive context territory" per `evals/skill-triage.md:114`) providing developer workflow instructions for rebasing, cherry-picking, automated git bisect, worktrees, and reflog recovery.
- It directly references `scripts/maintenance/repair_worktree_venv.py` to fix stale interpreter shebangs in `.venv` launchers after moving worktrees, as well as `uv.lock` for frozen dependency reproduction. Both referenced repository paths exist and were verified.

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~4800 tokens (SKILL.md 6463 bytes plus referenced maintenance script 12725 bytes).
Approximate output tokens written: ~2950 tokens (card 11681 bytes plus unit report).
