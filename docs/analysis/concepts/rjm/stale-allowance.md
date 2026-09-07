---
package: rjm
name: stale-allowance
slug: stale-allowance
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# stale-allowance

## Definition — verbatim
(used, not defined)

> "\"stale-allowance\"," — scripts/validation/check_adr_links.py:903

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 903 | defined here | Violation kind string literal assigned to findings where baseline allowances are no longer needed. |

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
`stale-allowance` is a finding category identifier in `check_adr_links.py` signaling obsolete baseline exemption entries rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
