---
package: rjm
name: validate_frontmatter
slug: validate-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_frontmatter

## Definition — verbatim
(used, not defined)

> "def validate_frontmatter(self):" — .claude/skills/skillforge/scripts/validate-skill.py:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/validate-skill.py | 161 | defined here | Validates YAML frontmatter fields against SkillForge quality standards in SkillValidator. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 41 | defined here | Validates YAML frontmatter block and checks for argument hints in slash command markdown files. |

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
defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug

## Design notes
validate_frontmatter is a Python function and method identifier across skill validation scripts in rjm that parses and verifies YAML frontmatter attributes, classified as name-only per D-023.
