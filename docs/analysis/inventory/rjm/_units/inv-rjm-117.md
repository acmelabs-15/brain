---
unit: inv-rjm-117
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-117

## Files assigned
- [x] sources/rjm/.claude/skills/doc-accuracy/scripts/pr_snapshot.py
- [x] sources/rjm/.claude/skills/doc-accuracy/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-doc-accuracy-scripts-pr-snapshot-py.md (9800 bytes)
- docs/analysis/inventory/rjm/claude-skills-doc-accuracy-skill-md.md (15492 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-117.md (1934 bytes)

## Scripts executed
- .claude/skills/doc-accuracy/scripts/pr_snapshot.py, `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/pr_snapshot.py --help`, exit code 0
- .claude/skills/doc-accuracy/scripts/doc_accuracy.py, `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/doc-accuracy/scripts/pr_snapshot.py` is bundled in the `doc-accuracy` skill directory alongside `doc_accuracy.py` (covered in unit inv-rjm-116), but is omitted from the scripts table in `SKILL.md` (documented as `doc-drift` defect in both cards). It implements an immutable snapshot mechanism for reviewing PRs by fetching head and base commit SHAs into an isolated bare repository and worktree while stripping git environment variables to prevent injection.

## Blocked or uncertain
none

## Time and size
Source read: 30,923 bytes (669 lines pr_snapshot.py + 263 lines SKILL.md), ~7,700 tokens. Output written: 26,742 bytes across 2 inventory cards and 1 unit report (~6,680 tokens).
