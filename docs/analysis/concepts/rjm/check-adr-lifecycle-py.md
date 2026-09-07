---
package: rjm
name: check_adr_lifecycle.py
slug: check-adr-lifecycle-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_adr_lifecycle.py

## Definition — verbatim
(used, not defined)

> "Kin to ``check_adr_lifecycle.py``'s own corpus sentinel" — scripts/validation/check_adr_links.py:953

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 124 | used here | Cited in comment as a consumer requiring non-prose block masking to avoid false status heading matches. |
| scripts/validation/check_adr_links.py | 953 | used here | Cited in docstring comparing corpus presence sentinels between ADR link and lifecycle checkers. |

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
`check_adr_lifecycle.py` is the file name of a python validation script enforcing ADR lifecycle state transitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
