---
package: rjm
name: info string
slug: info-string
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

# info string

## Definition — verbatim
(used, not defined)

> "A backtick opening fence whose info string contains a backtick is not a" — .claude/skills/fix-markdown-fences/SKILL.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 105 | used here | Cited in fence parsing rules stating that an opening backtick fence whose info string contains a backtick does not constitute a valid fence. |

## Consumes
Opening fence marker

## Produces
Language identifier or metadata token for the fenced code block

## When applied
When parsing fenced code block opening delimiters in markdown documentation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
In CommonMark markdown grammar, the info string is the text immediately following the opening code fence delimiter. The rjm fence scanner enforces specific syntactic constraints on info strings (rejecting backticks within backtick-fenced info strings) to avoid parsing malformed lines as code blocks.
