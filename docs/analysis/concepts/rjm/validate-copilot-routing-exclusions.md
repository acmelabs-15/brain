---
package: rjm
name: validate_copilot_routing_exclusions
slug: validate-copilot-routing-exclusions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_copilot_routing_exclusions

## Definition — verbatim
(used, not defined)

> "def validate_copilot_routing_exclusions(repo_root: Path) -> bool:" — scripts/validation/check_copilot_routing_exclusions.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 81 | defined here | Primary entrypoint function returning True when shipped Copilot skills contain no routing to excluded skills. |
| scripts/validation/checks_copilot.py | 11 | defined here | Wrapper function delegating to `check_copilot_routing_exclusions` while catching missing template errors. |

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
A Python validation function in `check_copilot_routing_exclusions.py` and `checks_copilot.py` verifying Copilot skills do not route to excluded skills, classified as name-only per D-023.
