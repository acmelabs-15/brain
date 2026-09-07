---
package: rjm
name: check_adr_lifecycle.py
slug: check-adr-lifecycle-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
