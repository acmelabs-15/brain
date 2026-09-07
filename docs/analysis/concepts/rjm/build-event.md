---
package: rjm
name: build_event
slug: build-event
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_event

## Definition — verbatim
(used, not defined)

> "Build a kill-criteria event dict." — scripts/metrics/kill_criteria.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 132 | defined here | Function constructing structured event dictionaries for kill criteria telemetry. |

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
build_event is an internal helper function constructing JSONL-serializable event dictionaries rather than a lifecycle concept.
