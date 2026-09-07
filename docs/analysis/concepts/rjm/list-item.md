---
package: rjm
name: list item
slug: list-item
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# list item

## Definition — verbatim
(used, not defined)

> "spaces are counted from the innermost open list item, not from column zero," — .claude/skills/fix-markdown-fences/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 110 | used here | Used as the reference container from which relative indentation for nested child blocks is computed. |

## Consumes
Bullet marker or ordered number delimiter

## Produces
Block container in markdown structure

## When applied
When parsing ordered or unordered markdown lists and tracking nested block boundaries.

## Sub-concepts
content-column

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A structural container element in CommonMark markdown initiated by a bullet or numerical marker. The rjm fence repair logic models list item boundaries, content columns, and lazy continuations to ensure embedded code blocks are accurately attributed to the correct container depth.
