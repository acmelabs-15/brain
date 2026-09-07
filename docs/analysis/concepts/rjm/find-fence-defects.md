---
package: rjm
name: find_fence_defects
slug: find-fence-defects
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_fence_defects

## Definition — verbatim
(used, not defined)

> "def find_fence_defects(content: str) -> list[Defect]:" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1022

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 1022 | defined here | Core scanning function parsing markdown text and returning all fence defects in file order. |

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
defects: script-bug, other

## Design notes
`find_fence_defects` is a Python function identifier in `fix_fences.py` that parses text to detect malformed fences rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
