---
package: rjm
name: _MAX_LIST_PAD
slug: max-list-pad
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

# _MAX_LIST_PAD

## Definition — verbatim
(used, not defined)

> "_MAX_LIST_PAD = 4" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 305 | defined here | Constant defining the maximum 4-space list item padding threshold beyond which content is parsed as indented code. |

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
defects: other, script-bug

## Design notes
`_MAX_LIST_PAD` is an integer constant identifier in `fix_fences.py` establishing list item padding boundaries rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
