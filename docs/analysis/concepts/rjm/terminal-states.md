---
package: rjm
name: TERMINAL_STATES
slug: terminal-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TERMINAL_STATES

## Definition — verbatim
(used, not defined)

> "TERMINAL_STATES = frozenset({\"CLOSED\", \"MERGED\"})" — scripts/validation/active_plan_closeout.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 18 | defined here | Frozenset constant specifying GitHub issue and pull request states indicating completed or closed lifecycle status. |

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
`TERMINAL_STATES` is a Python module constant in `active_plan_closeout.py` defining terminal GitHub issue states rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
