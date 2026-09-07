---
package: rjm
name: StyleConfig
slug: styleconfig
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# StyleConfig

## Definition — verbatim
(used, not defined)

> "class StyleConfig:" — .claude/skills/style-enforcement/scripts/check_style.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/scripts/check_style.py | 56 | defined here | Python dataclass encapsulating parsed style rules for a specific file glob pattern. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
StyleConfig is an internal Python dataclass representing parsed .editorconfig settings for a file pattern rather than an operational lifecycle concept.
