---
package: rjm
name: _same_line_segment
slug: same-line-segment
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/citation_anchors.py, sha256: 9165c77d0218b1888a3f3efb6db925e7236f33a16b75c3b12419edad1a1ae50c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _same_line_segment

## Definition — verbatim
(used, not defined)

> "def _same_line_segment(line: str, matches: list[re.Match[str]], index: int) -> str:" — scripts/validation/citation_anchors.py:296

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/citation_anchors.py | 296 | defined here | Function that returns the slice of the citation line owned by one citation, splitting gaps between adjacent citations at midpoint without bisecting tokens. |

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
A helper function identifier in citation_anchors.py, classified as name-only per D-023.
