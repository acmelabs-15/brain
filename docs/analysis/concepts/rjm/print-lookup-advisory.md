---
package: rjm
name: _print_lookup_advisory
slug: print-lookup-advisory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _print_lookup_advisory

## Definition — verbatim
(used, not defined)

> "def _print_lookup_advisory(issue_number: int, message: str) -> None:" — scripts/validation/active_plan_closeout.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 93 | defined here | Helper function printing advisory warning messages when an issue lookup cannot inspect an issue. |

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
`_print_lookup_advisory` is a private Python helper function that prints advisory warning messages when an issue lookup fails rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
