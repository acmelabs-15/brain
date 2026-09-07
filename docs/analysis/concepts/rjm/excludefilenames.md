---
package: rjm
name: excludeFilenames
slug: excludefilenames
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# excludeFilenames

## Definition — verbatim
(used, not defined)

> "set via templates/platforms/copilot-cli.yaml artifacts.skills.excludeFilenames." — scripts/validation/check_copilot_routing_exclusions.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 5 | used here | Configuration key in copilot-cli.yaml defining canonical skills excluded from public distribution. |

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
A YAML configuration key identifier (`excludeFilenames`) in platform configuration defining excluded skills, classified as `name-only` per D-023.
