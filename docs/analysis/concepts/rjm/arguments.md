---
package: rjm
name: $ARGUMENTS
slug: arguments
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# $ARGUMENTS

## Definition — verbatim
(used, not defined)

> "- Simple commands: use `$ARGUMENTS`" — .claude/skills/slashcommandcreator/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 102 | used here | Template skeleton placeholder documenting expected command arguments in generated markdown. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 77 | used here | Regex pattern checking for presence of argument placeholders in command prompt body. |
| .claude/skills/slashcommandcreator/SKILL.md | 51 | used here | Design guideline prescribing $ARGUMENTS for simple slash command argument handling. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug, missing-path

## Design notes
A template placeholder variable representing user-supplied arguments inside Claude Code slash command prompt bodies rather than an agent lifecycle concept.
