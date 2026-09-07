---
package: rjm
name: emit_event
slug: emit-event
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# emit_event

## Definition — verbatim
(used, not defined)

> "Append one kill-criteria event to the metrics file." — scripts/metrics/kill_criteria.py:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 178 | defined here | Function appending structured kill criteria events to the JSONL telemetry file. |

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
emit_event is an internal telemetry function persisting kill criteria events to disk with file locking rather than a lifecycle concept.
