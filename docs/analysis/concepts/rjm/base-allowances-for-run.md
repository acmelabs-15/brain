---
package: rjm
name: base_allowances_for_run
slug: base-allowances-for-run
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# base_allowances_for_run

## Definition — verbatim
(used, not defined)

> "def base_allowances_for_run(" — scripts/validation/check_adr_links.py:356

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 356 | defined here | Function resolving baseline entries at the base ref to establish the ratchet threshold for the validation run. |

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
`base_allowances_for_run` is a Python helper function identifier in `check_adr_links.py` configuring ratchet thresholds for validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
