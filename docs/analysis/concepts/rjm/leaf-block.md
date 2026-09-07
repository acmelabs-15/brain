---
package: rjm
name: leaf block
slug: leaf-block
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

# leaf block

## Definition — verbatim
(used, not defined)

> "leaf block and so keeps its meaning at any indent, and" — .claude/skills/fix-markdown-fences/SKILL.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 128 | used here | Cited in explaining that link reference definition continuations belong to the same leaf block. |

## Consumes
Markdown source lines

## Produces
Terminal block element in document AST

## When applied
When parsing atomic markdown elements that do not contain other blocks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
In CommonMark terminology, a leaf block is a fundamental structural block (such as a paragraph, heading, or code fence) that cannot contain child blocks. The package tracks leaf block boundaries to accurately resolve container closures and continuation lines.
