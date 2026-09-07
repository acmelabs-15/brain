---
package: rjm
name: is_historical_path
slug: is-historical-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_historical_path

## Definition — verbatim
(used, not defined)

> "def is_historical_path(path: str) -> bool:" — scripts/validation/check_adr_links.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 196 | defined here | Helper function returning whether a path sits in a history-only root that is never repaired. |
| scripts/validation/stale_script_refs.py | 68 | defined here | Helper function determining whether a documentation path belongs to an exempt historical directory. |

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
defects: doc-drift, missing-path

## Design notes
`is_historical_path` is a Python helper function identifier in repository validation scripts filtering out historical directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
