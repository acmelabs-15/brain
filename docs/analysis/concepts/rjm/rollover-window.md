---
package: rjm
name: rollover window
slug: rollover-window
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
