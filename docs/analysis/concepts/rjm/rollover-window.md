---
package: rjm
name: rollover window
slug: rollover-window
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# rollover window

## Definition — verbatim
(used, not defined)

> "used only for the 30-day rollover window, not" — scripts/metrics/kill_criteria.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 30 | defined here, used here | Documented in event specification as the 30-day trailing window used for kill-criteria event aggregation and rollups. |

## Consumes
Timestamps on append-only telemetry events in `.agents/metrics/drift-events.jsonl`.

## Produces
Bounded event set for trailing window aggregation and kill-criteria evaluation.

## When applied
Applied during weekly rollup reporting or automated health checks via `count_events_in_window`.

## Sub-concepts
none

## Part of
kill-criteria

## Implementation status
clean

## Design notes
A 30-day trailing sliding window pattern used in rjm kill-criteria evaluation to assess telemetry breach thresholds over a rolling operational timeframe rather than accumulated project history.
