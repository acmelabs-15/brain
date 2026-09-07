---
package: rjm
name: active_plan_warnings
slug: active-plan-warnings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# active_plan_warnings

## Definition — verbatim
(used, not defined)

> "def active_plan_warnings(" — scripts/validation/active_plan_closeout.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 49 | defined here | Scans active execution plans in .agents/plans/active/ and queries issue states to identify plans needing closeout. |

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
`active_plan_warnings` is a Python function identifier in `active_plan_closeout.py` discovering active plans whose tracking issues have closed rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
