---
package: rjm
name: _BACKTICK_SPAN
slug: backtick-span
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

# _BACKTICK_SPAN

## Definition — verbatim
(used, not defined)

> "_BACKTICK_SPAN = re.compile(" — scripts/validation/citation_anchors.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/citation_anchors.py | 46 | defined here | Compiled regular expression extracting backtick code spans from Markdown prose lines. |

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
`_BACKTICK_SPAN` is a compiled regular expression constant identifier in `citation_anchors.py` extracting inline code spans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
