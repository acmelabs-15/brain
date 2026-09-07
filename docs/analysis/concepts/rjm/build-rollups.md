---
package: rjm
name: build_rollups
slug: build-rollups
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_rollups

## Definition — verbatim
(used, not defined)

> "Turn per-kind counts into ordered rollups with status." — scripts/metrics/kill_criteria.py:399

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 398 | defined here | Function transforming per-kind counts into ordered CriterionRollup objects with status labels. |

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
build_rollups is a helper function mapping per-criterion counts to status-annotated rollup records rather than a lifecycle concept.
