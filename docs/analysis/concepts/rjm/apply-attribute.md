---
package: rjm
name: _apply_attribute
slug: apply-attribute
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_parse.py, sha256: 8b5b2db80218fb22c500b43624d6423f421e0ca1cf3b6e6e7a9091f19296bdad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _apply_attribute

## Definition — verbatim
(used, not defined)

> "def _apply_attribute(worktree: Worktree, line: str) -> None:" — scripts/maintenance/_gc_parse.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 35 | defined here | Private helper function parsing individual git porcelain attribute lines and applying them to a Worktree record. |

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
clean

## Design notes
`_apply_attribute` is an internal Python helper function identifier in `_gc_parse.py` for porcelain attribute parsing rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
