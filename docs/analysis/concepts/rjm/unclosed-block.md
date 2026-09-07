---
package: rjm
name: unclosed_block
slug: unclosed-block
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# unclosed_block

## Definition — verbatim
(used, not defined)

> "the file ends with a block still open." — .claude/skills/fix-markdown-fences/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 869 | defined here | Constant string defining the defect identifier for files that terminate with an open fence. |
| .claude/skills/fix-markdown-fences/SKILL.md | 65 | defined here | Report section describing the defect kind where a file ends while a fenced block remains open. |

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
defects: script-bug, doc-drift, other

## Design notes
`unclosed_block` is a defect classification label used by the fence repair utility to identify files that terminate before closing an open code fence rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
