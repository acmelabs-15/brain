---
package: rjm
name: STYLE-004
slug: style-004
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

# STYLE-004

## Definition — verbatim
> "Rule: STYLE-004" — .claude/skills/style-enforcement/SKILL.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/scripts/check_style.py | 343 | defined here | Implemented in check_trailing_whitespace to detect trailing whitespace characters on lines. |
| .claude/skills/style-enforcement/SKILL.md | 126 | defined here | Defined as an info-level rule detecting trailing whitespace when trim_trailing_whitespace is true. |

## Consumes
Target file content and `.editorconfig` `trim_trailing_whitespace` setting.

## Produces
Style violation diagnostics identifying lines with superfluous trailing whitespace.

## When applied
During file scanning in style-enforcement execution or pre-submission gates in the build phase.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
STYLE-004 flags trailing whitespace to keep git diffs clean and prevent unnecessary line modifications in shared source code repositories.
