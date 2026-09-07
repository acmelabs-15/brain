---
package: rjm
name: FULL_SUITE
slug: full-suite
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FULL_SUITE

## Definition — verbatim
(used, not defined)

> "FULL_SUITE = \"FULL_SUITE\"" — scripts/test_selection/select_tests.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 30 | defined here | Constant string sentinel signaling to test runners that the full pytest test suite must be executed. |

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
`FULL_SUITE` is a string constant identifier in `scripts/test_selection/select_tests.py` signaling fallback execution of all tests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
