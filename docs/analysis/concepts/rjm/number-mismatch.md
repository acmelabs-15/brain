---
package: rjm
name: number-mismatch
slug: number-mismatch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# number-mismatch

## Definition — verbatim
(used, not defined)

> "``number-mismatch``" — scripts/validation/check_adr_links.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 8 | used here | Baseline comment explaining that keyed allowances must include the violation kind so number-mismatch is not masked. |
| scripts/validation/check_adr_links.py | 41 | defined here | Violation class docstring defining links where link text names an ADR number different from the target filename. |

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
`number-mismatch` is a link validator violation class identifier in check_adr_links.py rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
