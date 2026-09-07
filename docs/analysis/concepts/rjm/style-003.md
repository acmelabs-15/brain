---
package: rjm
name: STYLE-003
slug: style-003
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

# STYLE-003

## Definition — verbatim
> "Rule: STYLE-003" — .claude/skills/style-enforcement/SKILL.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/scripts/check_style.py | 307 | defined here | Implemented in check_charset to detect incorrect UTF-8 BOM presence or absence. |
| .claude/skills/style-enforcement/SKILL.md | 116 | defined here | Defined as a warning-level rule verifying file character encoding and BOM requirements. |

## Consumes
Target file bytes and `.editorconfig` `charset` setting.

## Produces
Style violation diagnostics for incorrect character encodings or unexpected Byte Order Marks.

## When applied
During file scanning in style-enforcement execution or pre-submission gates in the build phase.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
STYLE-003 verifies file character encoding and BOM presence against editorconfig rules to prevent encoding corruption across compilers and runtime environments.
