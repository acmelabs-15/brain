---
package: rjm
name: ORDERED_KINDS
slug: ordered-kinds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ORDERED_KINDS

## Definition — verbatim
(used, not defined)

> "ORDERED_KINDS: Final[tuple[KillCriterion, ...]] = (" — scripts/metrics/kill_criteria.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 80 | defined here | Constant tuple specifying the display order of kill criteria in rollup reports. |

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
ORDERED_KINDS is a constant tuple establishing deterministic report ordering for kill criteria telemetry rather than an independent lifecycle concept.
