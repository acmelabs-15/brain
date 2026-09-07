---
package: rjm
name: ActivePlanWarning
slug: activeplanwarning
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ActivePlanWarning

## Definition — verbatim
(used, not defined)

> "class ActivePlanWarning:" — scripts/validation/active_plan_closeout.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 27 | defined here | Frozen dataclass representing an active plan whose referenced tracking issues are all closed, providing warning formatting. |

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
`ActivePlanWarning` is a Python dataclass identifier in `active_plan_closeout.py` encapsulating plan closeout diagnostic warnings rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
