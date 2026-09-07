---
package: rjm
name: setext
slug: setext
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

# setext

## Definition — verbatim
(used, not defined)

> "corrupt none of eleven. And a setext `===`" — .claude/skills/fix-markdown-fences/SKILL.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 167 | used here | Cited in discussing destructive edge cases involving setext underlines directly under list items. |

## Consumes
Paragraph text followed by setext underline (`=` or `-`)

## Produces
Level 1 or Level 2 heading in markdown AST

## When applied
When heading text is underlined with `=` or `-` runs.

## Sub-concepts
setext-underline

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A CommonMark heading format where text is followed by an underline of `=` or `-` characters. The rjm parser distinguishes setext underlines from thematic breaks and paragraph text, documenting specific edge cases when setext underlines follow list items.
