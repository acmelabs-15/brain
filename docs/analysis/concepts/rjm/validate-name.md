---
package: rjm
name: _validate_name
slug: validate-name
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _validate_name

## Definition — verbatim
(used, not defined)

> "def _validate_name(name: str) -> bool:" — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:21

## Also called — verbatim
`validate_name` — scripts/validation/skill_frontmatter.py:270

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 21 | defined here | Function enforcing character restrictions on command names to prevent directory traversal. |
| scripts/validation/skill_frontmatter.py | 270 | defined here | Function checking that frontmatter skill name matches valid format conventions. |

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
defects: doc-drift, exit-code-mismatch, cross-file-contradiction

## Design notes
An internal Python function identifier validating string format and preventing path traversal rather than an agent lifecycle concept.
