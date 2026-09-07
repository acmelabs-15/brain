---
package: rjm
name: fired
slug: fired
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fired

## Definition — verbatim
(used, not defined)

> "status: ``fired`` when ``count >= threshold``, ``approaching`` when" — scripts/metrics/kill_criteria.py:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 305 | defined here | Status state indicating a kill criterion count has reached its threshold, triggering rollback. |

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
fired is a telemetry status state indicating that a kill criterion has fired and mandated a design rollback rather than an independent lifecycle concept.
