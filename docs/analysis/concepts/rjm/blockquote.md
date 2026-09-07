---
package: rjm
name: blockquote
slug: blockquote
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

# blockquote

## Definition — verbatim
(used, not defined)

> "documents containing raw HTML blocks. A blockquote prefix is never stripped," — .claude/skills/fix-markdown-fences/SKILL.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 151 | used here | Documented as an unhandled container prefix causing divergence in fence visibility and paragraph interruption. |

## Consumes
`>` marker lines

## Produces
Blockquote container in markdown

## When applied
When parsing text prefixed with `>` characters.

## Sub-concepts
block-quote

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A markdown container block initiated with `>`. In `fix_fences.py`, blockquote prefixes are not stripped during fence scanning, which causes fences inside blockquotes to be missed and blockquotes interrupting paragraphs to potentially trigger false unclosed fence repairs.
