---
package: rjm
name: _CITATION
slug: citation
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

# _CITATION

## Definition — verbatim
(used, not defined)

> "_CITATION = re.compile(" — scripts/validation/citation_anchors.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/citation_anchors.py | 40 | defined here | Compiled regular expression matching file path line citations (`path:N` or `path:N-M`). |

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
`_CITATION` is a compiled regular expression constant identifier in `citation_anchors.py` matching code citation patterns rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
