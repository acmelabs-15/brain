---
package: rjm
name: CriterionStatus
slug: criterionstatus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CriterionStatus

## Definition — verbatim
(used, not defined)

> "CriterionStatus = Literal" — scripts/metrics/kill_criteria.py:294

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 294 | defined here | Type alias defining the tri-state evaluation status for a kill criterion. |

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
CriterionStatus is a Python type alias enumerating status states (ok, approaching, fired) for telemetry reporting rather than a lifecycle concept.
