---
package: rjm
name: count_events_in_window
slug: count-events-in-window
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_events_in_window

## Definition — verbatim
(used, not defined)

> "Tally events per kind within the trailing window." — scripts/metrics/kill_criteria.py:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 371 | defined here | Function tallying events per kill criterion kind within the trailing time window. |

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
count_events_in_window is a helper function aggregating event counts over a trailing window rather than a lifecycle concept.
