---
unit: inv-rjm-143
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-143

## Files assigned
[x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py

## Outputs produced
docs/analysis/inventory/rjm/claude-skills-prose-self-check-scripts-prose-lint-py.md (17696 bytes)

## Scripts executed
sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py sources/rjm/.claude/skills/prose-self-check/SKILL.md, 0
sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py sources/rjm/.claude/skills/prose-self-check/SKILL.md --json, 0
sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py nonexistent_file.md, 2
sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py sources/rjm/.claude/skills/prose-self-check/SKILL.md --rules nonexistent_rules.md, 2
sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py, python3 sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py -, 1
tests/skills/prose-self-check/, uv run --with pytest --with pytest-timeout --with markdown-it-py pytest sources/rjm/tests/skills/prose-self-check/, 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Assigned file `.claude/skills/prose-self-check/scripts/prose_lint.py` is Part 2 of the `prose-self-check` skill family (`inv-rjm-143`). Part 1 is `burstiness.py` (`inv-rjm-142`); the skill definition `SKILL.md` is handled in a separate unit.
- `prose_lint.py` shares a massive (~520 line) CommonMark block and list container parser (`_ListContainers`) that is duplicated byte-for-byte in `.claude/skills/fix-markdown-fences/scripts/fix_fences.py` (`inv-rjm-119`).
- The script automatically resolves repository voice rules from candidate paths or via `.claude/.claude-plugin/plugin.json`, loading 19 banned vocabulary terms from `sources/rjm/.claude/rules/voice.md`.
- Regression and unit test suite at `sources/rjm/tests/skills/prose-self-check/` was executed using pytest (250 tests passed).

## Blocked or uncertain
none

## Time and size
Source read: 65128 bytes (~16282 tokens) for `prose_lint.py`, plus 12884 bytes (~3220 tokens) for `SKILL.md` context.
Output written: 1 inventory card (17696 bytes) and 1 unit report (~2.1 KB).
