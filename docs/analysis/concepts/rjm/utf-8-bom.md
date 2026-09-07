---
package: rjm
name: UTF-8 BOM
slug: utf-8-bom
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

# UTF-8 BOM

## Definition — verbatim
(used, not defined)

> "as is a UTF-8 BOM and the presence or absence of a trailing newline" — .claude/skills/fix-markdown-fences/SKILL.md:281

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 281 | used here | Documented as an edge case preserved during file reading and fence repair. |

## Consumes
Byte order mark `\xef\xbb\xbf`

## Produces
Byte-exact file encoding preservation

## When applied
When reading and writing markdown files that carry an initial UTF-8 byte order mark.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
The Unicode byte order mark (`\xef\xbb\xbf`) occurring at the beginning of UTF-8 encoded files. The rjm fence repair script specifically preserves the presence or absence of the BOM upon file rewriting to prevent unexpected binary diffs.
