---
package: rjm
name: slash command
slug: slash-command
kind: artifact
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

# slash command

## Definition — verbatim
> "Create new slash command with frontmatter template." — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 2 | defined here | Docstring describing the script purpose of scaffolding new slash commands. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 2 | defined here | Docstring describing the script purpose of validating slash command quality gates. |
| .claude/skills/slashcommandcreator/SKILL.md | 3 | used here | Skill frontmatter description identifying slash commands as the target prompt automation artifact. |

## Consumes
User prompt automation requirements, frontmatter metadata (description, argument-hint, allowed-tools).

## Produces
An executable command definition markdown file under `.claude/commands/[namespace]/[name].md` or `.claude/commands/[name].md`.

## When applied
When user requests reusable prompt automation or wants to convert repetitive workflows into documented commands under 200 lines.

## Sub-concepts
frontmatter, arguments

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug, missing-path

## Design notes
Lightweight prompt-automation artifacts executed via Claude Code CLI syntax (`/<command>`), designed for quick user invocation of bounded workflows under 200 lines without complex multi-agent coordination.
