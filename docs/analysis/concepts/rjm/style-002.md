---
package: rjm
name: STYLE-002
slug: style-002
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STYLE-002

## Definition — verbatim
> "Rule: STYLE-002" — .claude/skills/style-enforcement/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/scripts/check_style.py | 271 | defined here | Implemented in check_indentation to detect tab/space mismatches against indent_style. |
| .claude/skills/style-enforcement/SKILL.md | 106 | defined here | Defined as a warning-level rule checking indentation style (tabs vs spaces) and sizes. |

## Consumes
Target file content and `.editorconfig` `indent_style` / `indent_size` settings.

## Produces
Style violation diagnostics identifying lines with incorrect indentation characters or sizes.

## When applied
During file scanning in style-enforcement execution or pre-submission gates in the build phase.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
STYLE-002 validates indentation characters and sizes against configuration to maintain uniform visual formatting and prevent mixed indentation issues.
