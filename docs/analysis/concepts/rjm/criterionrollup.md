---
package: rjm
name: CriterionRollup
slug: criterionrollup
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CriterionRollup

## Definition — verbatim
(used, not defined)

> "Trailing-window tally for one kill criterion." — scripts/metrics/kill_criteria.py:299

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 298 | defined here | Dataclass representing the rollup statistics and status for a single kill criterion. |

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
CriterionRollup is an internal data class holding aggregated telemetry counts and status for a kill criterion rather than a lifecycle concept.
