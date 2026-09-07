---
package: rjm
name: lazy continuation
slug: lazy-continuation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# lazy continuation

## Definition — verbatim
(used, not defined)

> "continue one is a lazy continuation and does not close the item holding" — .claude/skills/fix-markdown-fences/SKILL.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 132 | used here | Explains that a line continuing a link definition or paragraph is a lazy continuation and does not close the containing item. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 578 | used here | Handled in Rule 6 where a lazy continuation keeps its container open. |

## Consumes
Unindented or lightly indented paragraph line

## Produces
Continuation of an open container without closing delimiters

## When applied
When parsing multi-line paragraphs or link definitions inside list items or blockquotes without full container indentation.

## Sub-concepts
none

## Part of
list-item

## Implementation status
defects: doc-drift, other, script-bug

## Design notes
A CommonMark rule allowing lines of a paragraph or block to omit container markers/indentation while continuing the open container. The rjm state machine specifically tracks lazy continuations to avoid prematurely closing containers, which would cause subsequent code fences to be placed at the wrong indentation tier.
