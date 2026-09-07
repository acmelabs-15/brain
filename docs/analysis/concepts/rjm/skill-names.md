---
package: rjm
name: skill_names
slug: skill-names
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# skill_names

## Definition — verbatim
(used, not defined)

> "def skill_names(root: Path) -> set[str]:" — scripts/validation/check_shipped_skill_routes.py:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 312 | defined here | Discovers skill directory names containing a valid SKILL.md under a given root. |

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
A Python helper function in `scripts/validation/check_shipped_skill_routes.py` that enumerates skill directories containing SKILL.md, classified as `name-only` per D-023.
