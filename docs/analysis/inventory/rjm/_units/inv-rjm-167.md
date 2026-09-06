---
unit: inv-rjm-167
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-167

## Files assigned
- [x] sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py
- [x] sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py
- [x] sources/rjm/.claude/skills/slashcommandcreator/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-scripts-new-slash-command-py.md (8839 bytes)
- docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-scripts-validate-slash-command-py.md (12556 bytes)
- docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-skill-md.md (14180 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-167.md

## Scripts executed
- `.claude/skills/slashcommandcreator/scripts/new_slash_command.py`: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py --name test-cmd`, exit code 0
- `.claude/skills/slashcommandcreator/scripts/new_slash_command.py`: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py --name test-cmd --description "test desc"`, exit code 2
- `.claude/skills/slashcommandcreator/scripts/validate_slash_command.py`: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py sources/rjm/.claude/skills/slashcommandcreator`, exit code 2
- `.claude/skills/slashcommandcreator/scripts/validate_slash_command.py`: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py --path sources/rjm/.claude/commands/plan.md --skip-lint`, exit code 0
- `.claude/skills/slashcommandcreator/scripts/validate_slash_command.py`: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py --path sources/rjm/.claude/commands/CLAUDE.md --skip-lint`, exit code 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/slashcommandcreator` is invoked downstream by `.claude/skills/book-to-skill/SKILL.md` (unit inv-rjm-91) and referenced by `.claude/skills/skillforge/SKILL.md` (unit inv-rjm-164) as the dedicated router target for slash command creation tasks.
- The 200-line ceiling rule and decision matrix between slash commands and skills defined in `SKILL.md:167-182` and checked in `validate_slash_command.py:127-135` is actively violated in `rjm`'s own repository by commands such as `pr-autofix.md` (1179 lines) and `spec.md` (398 lines).
- The description validation regex in `validate_slash_command.py:59` (`r"^(Use when|Generate|Research|Invoke|Create|Analyze|Review|Search)"`) excludes "Execute", causing all core lifecycle commands in `sources/rjm/.claude/commands/` (`spec.md`, `plan.md`, `build.md`, `test.md`, `ship.md`) to trigger warnings during validation.
- The reference target `.serena/memories/slashcommand-best-practices.md` cited in `SKILL.md:272` does not exist on disk in the pinned `sources/rjm` checkout.
- Significant documentation drift was discovered in `SKILL.md:256` and `SKILL.md:265`: `new_slash_command.py` is documented with a non-existent `--description` flag (causing exit code 2), and `validate_slash_command.py` is documented with a positional `<skill-dir>` argument rather than the required `--path` parameter (causing exit code 2).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,550 tokens (22,165 bytes across 3 assigned files).
Approximate tokens of output written: ~9,600 tokens (38,500 bytes across 3 cards and unit report).
