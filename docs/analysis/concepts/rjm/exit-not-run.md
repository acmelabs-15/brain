---
package: rjm
name: EXIT_NOT_RUN
slug: exit-not-run
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXIT_NOT_RUN

## Definition — verbatim
(used, not defined)

> "EXIT_NOT_RUN = 1" — scripts/validation/assert_smoke_ran.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_smoke_ran.py | 42 | defined here | Exit code constant indicating smoke tests were skipped or fewer tests collected than expected. |

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
`EXIT_NOT_RUN` is an exit code constant (1) returned by `assert_smoke_ran.py` when smoke tests were skipped or not collected rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
