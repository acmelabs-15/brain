---
package: rjm
name: fix_fences.py
slug: fix-fences-py
kind: name-only
package_phase: none
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

# fix_fences.py

## Definition — verbatim
(used, not defined)

> "`fix_fences.py` runs it." — .claude/skills/fix-markdown-fences/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/SKILL.md | 53 | used here | Cited as the execution script that runs the state machine for markdown fence detection and automated repair. |

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
defects: doc-drift, other

## Design notes
`fix_fences.py` is the file name of a script in the fix-markdown-fences skill rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
