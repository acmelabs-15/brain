---
package: rjm
name: split_destination
slug: split-destination
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# split_destination

## Definition — verbatim
(used, not defined)

> "def split_destination(raw: str) -> str:" — scripts/validation/check_adr_links.py:391

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 391 | defined here | Helper function extracting the cleaned path portion of a markdown link destination by stripping titles, angles, and anchors. |

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
`split_destination` is a Python helper function identifier in `check_adr_links.py` parsing link destination paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
