---
package: rjm
name: WINDOW_DAYS
slug: window-days
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# WINDOW_DAYS

## Definition — verbatim
(used, not defined)

> "WINDOW_DAYS: Final[int] = 30" — scripts/metrics/kill_criteria.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 90 | defined here | Constant defining the 30-day trailing rollover window for kill-criteria evaluation. |

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
WINDOW_DAYS is an integer constant defining the trailing time window for metric aggregation rather than a standalone lifecycle concept.
