---
package: rjm
name: checks_common.py
slug: checks-common-py
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

# checks_common.py

## Definition — verbatim
(used, not defined)

> "``scripts/validation/checks_common.py``'s ``_resolve_default_base_ref``" — scripts/validation/check_adr_links.py:269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 269 | used here | Cited as the common validation utility script whose base ref resolution candidates are mirrored. |

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
`checks_common.py` is a repository validation utility script file name providing shared verification helpers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
