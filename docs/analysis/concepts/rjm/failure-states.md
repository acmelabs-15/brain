---
package: rjm
name: _FAILURE_STATES
slug: failure-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _FAILURE_STATES

## Definition — verbatim
(used, not defined)

> "_FAILURE_STATES = {" — scripts/pr_maintenance_rollup.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 10 | defined here | Constant set defining failing status check conclusions and states. |

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
`_FAILURE_STATES` is an internal Python set constant defining failing status check conclusions in PR maintenance scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
