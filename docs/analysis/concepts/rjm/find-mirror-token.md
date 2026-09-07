---
package: rjm
name: _find_mirror_token
slug: find-mirror-token
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _find_mirror_token

## Definition — verbatim
(used, not defined)

> "def _find_mirror_token(text: str) -> str | None:" — scripts/validation/check_canonical_citations.py:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 169 | defined here | Searches text for the presence of configured mirror-claim indicator tokens. |

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
`_find_mirror_token` is an internal Python helper function identifier in `check_canonical_citations.py` locating mirror-claim keywords in text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
