---
package: rjm
name: _NAMED_ESCAPES
slug: named-escapes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/diff_line_scope.py, sha256: 2acbbeda2f56a2d40dde6d3d9499acc048748b1547e9622623ddf65f3c05cc17}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _NAMED_ESCAPES

## Definition — verbatim
(used, not defined)

> "_NAMED_ESCAPES = {" — scripts/ci/diff_line_scope.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diff_line_scope.py | 73 | defined here | Constant dictionary mapping single-letter git C-style escapes to their decoded characters. |

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
`_NAMED_ESCAPES` is an internal Python dictionary identifier in `diff_line_scope.py` mapping git C-style escape characters to their decoded string equivalents rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
