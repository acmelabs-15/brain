---
package: rjm
name: IssueStateLookup
slug: issuestatelookup
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# IssueStateLookup

## Definition — verbatim
(used, not defined)

> "IssueStateLookup = Callable[[int], str | None]" — scripts/validation/active_plan_closeout.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 41 | defined here | Type alias defining the callable signature for issue state lookup functions querying GitHub issue statuses. |

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
`IssueStateLookup` is a Python type alias in `active_plan_closeout.py` defining a callable contract for issue state resolution rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
