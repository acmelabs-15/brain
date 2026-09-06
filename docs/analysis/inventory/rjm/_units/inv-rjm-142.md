---
unit: inv-rjm-142
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-142

## Files assigned
[x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py

## Outputs produced
docs/analysis/inventory/rjm/claude-skills-prose-self-check-scripts-burstiness-py.md (10307 bytes)

## Scripts executed
sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py sources/rjm/.claude/skills/prose-self-check/SKILL.md, 0
sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py sources/rjm/.claude/skills/prose-self-check/SKILL.md --json, 0
sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py nonexistent.txt, 2
sources/rjm/.claude/skills/prose-self-check/tests/test_burstiness.py, uv run --with pytest --with pytest-timeout pytest sources/rjm/.claude/skills/prose-self-check/tests/test_burstiness.py, 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Assigned file `.claude/skills/prose-self-check/scripts/burstiness.py` is Part 1 of the `prose-self-check` skill family (`inv-rjm-142`). The primary skill body (`SKILL.md`) and the main linting script (`prose_lint.py`) are covered in separate units.
- `burstiness.py` is referenced as the Layer 3 helper in `SKILL.md` (lines 52, 120, 224, 242) for burstiness (sentence-length variation) and concreteness heuristics.
- Behavioral test suite at `sources/rjm/.claude/skills/prose-self-check/tests/test_burstiness.py` was executed using pytest (10 passed).

## Blocked or uncertain
none

## Time and size
Source read: 5394 bytes (~1350 tokens) for `burstiness.py`, plus 12884 bytes (~3220 tokens) for `SKILL.md` context and 4456 bytes (~1110 tokens) for `test_burstiness.py`.
Output written: 1 inventory card (10307 bytes) and 1 unit report (~1.7 KB).
