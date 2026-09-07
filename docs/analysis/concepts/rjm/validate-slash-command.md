---
package: rjm
name: validate_slash_command
slug: validate-slash-command
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: scripts/modules/slash_command_validator.py, sha256: b2263f8d242bd1a006e15dc1725c0c36f2c7cb7e03811acdb2b400ee50a5b957}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_slash_command

## Definition — verbatim
(used, not defined)

> "def validate_slash_command(" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 158 | defined here | Core validation function orchestrating frontmatter, arguments, security, length, and lint checks. |
| scripts/modules/slash_command_validator.py | 56 | used here | Imported and invoked to validate repository slash command files during test runs. |

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
defects: doc-drift, internal-contradiction, script-bug, exit-code-mismatch

## Design notes
A Python validation function identifier validating slash command definitions rather than an agent lifecycle concept.
