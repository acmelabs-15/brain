---
unit: inv-rjm-126
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-126

## Files assigned
- [x] sources/rjm/.claude/skills/merge-resolver/SKILL.md (16520 bytes, 321 lines)

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-merge-resolver-skill-md.md (17166 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-126.md

## Scripts executed
- `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py`, `python3 sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py --pr-number 123 --branch-name "fix/test" --dry-run`, exit code 0
- `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`, `python3 sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py --cwd sources/rjm`, exit code 0
- `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`, `python3 sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py --cwd sources/rjm --json`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/merge-resolver` was split into two inventory units: `inv-rjm-125` covered `references/strategies.md`, `scripts/CLAUDE.md`, `scripts/resolve_pr_conflicts.py`, and `scripts/verify_no_conflict_markers.py`. This unit (`inv-rjm-126`) covered `SKILL.md`.
- Related agent `.claude/agents/merge-resolver.md` was inventoried under `inv-rjm-68` (`claude-agents-merge-resolver-md.md`) and platform agent template `templates/agents/merge-resolver.shared.md` is assigned to `inv-rjm-318`.
- The append-only session preservation rule (`Rename, never content-merge`) is a critical cross-cutting lifecycle pattern originating from incident PR #4856 (`.agents/retrospective/2026-08-10-pr-4856-session-log-collision.md`) that applies across all agent workflows producing evidence logs.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4130 tokens (16520 bytes of source SKILL.md; plus referenced scripts and configs examined). Approximate tokens of output written: ~4300 tokens (17166 bytes of card; unit report).
