---
package: rjm
name: RoutingViolation
slug: routingviolation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# RoutingViolation

## Definition — verbatim
(used, not defined)

> "class RoutingViolation:" — scripts/validation/check_copilot_routing_exclusions.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 30 | defined here | Dataclass representing a detected reference to an excluded skill in shipped Copilot files. |

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
A Python dataclass identifier in `check_copilot_routing_exclusions.py` capturing excluded skill routing violations, classified as `name-only` per D-023.
