---
package: rjm
name: raw HTML block
slug: raw-html-block
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

# raw HTML block

## Definition — verbatim
(used, not defined)

> "A raw HTML block swallows a" — .claude/skills/fix-markdown-fences/SKILL.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 144 | used here | Documented as a known destructive parser gap where raw HTML swallows subsequent fences. |

## Consumes
HTML tag or element syntax

## Produces
Raw HTML block in markdown rendering

## When applied
When markdown contains raw HTML elements matching CommonMark block types 1 through 7.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A CommonMark block element beginning with HTML tags. In rjm, raw HTML blocks represent a known destructive edge case in the `fix_fences.py` scanner, which does not implement full HTML block parsing (types 1-7), potentially causing automated repair to append spurious closing fences to balanced documents.
