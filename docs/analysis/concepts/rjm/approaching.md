---
package: rjm
name: approaching
slug: approaching
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# approaching

## Definition — verbatim
(used, not defined)

> "status: ``fired`` when ``count >= threshold``, ``approaching`` when" — scripts/metrics/kill_criteria.py:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 305 | defined here | Status state indicating a kill criterion is one event away from reaching its firing threshold. |

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
approaching is a status value in kill criteria telemetry evaluation indicating an approaching rollback limit rather than an independent lifecycle concept.
