---
package: rjm
name: load_excluded_skill_names
slug: load-excluded-skill-names
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_excluded_skill_names

## Definition — verbatim
(used, not defined)

> "def load_excluded_skill_names(repo_root: Path) -> set[str]:" — scripts/validation/check_copilot_routing_exclusions.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 43 | defined here | Helper function that parses `copilot-cli.yaml` to extract excluded canonical skill names. |

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
A Python validation helper function in `check_copilot_routing_exclusions.py` loading excluded skill names from platform configuration, classified as name-only per D-023.
