---
package: rjm
name: report_events
slug: report-events
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# report_events

## Definition — verbatim
(used, not defined)

> "Produce the weekly rollup from the events file." — scripts/metrics/kill_criteria.py:475

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 470 | defined here | Function generating rollup markdown reporting and evaluating whether any kill criterion has fired. |

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
report_events is an evaluation and reporting function returning rollup markdown and fired status rather than a lifecycle concept.
