---
package: rjm
name: validate_allowed_tools
slug: validate-allowed-tools
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_allowed_tools

## Definition — verbatim
(used, not defined)

> "def validate_allowed_tools(self):" — .claude/skills/skillforge/scripts/validate-skill.py:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/validate-skill.py | 323 | defined here | Validates that allowed-tools entries conform to permitted tool naming and syntax in SkillValidator. |
| scripts/validation/skill_frontmatter.py | 334 | defined here | Validates frontmatter allowed-tools entries against known Claude Code tools and parameter syntax. |

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
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, script-bug

## Design notes
validate_allowed_tools is a Python function identifier in skill validation scripts that audits the allowed-tools frontmatter field against permitted tool lists, classified as name-only per D-023.
