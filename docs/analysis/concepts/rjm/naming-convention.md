---
package: rjm
name: naming convention
slug: naming-convention
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# naming convention

## Definition — verbatim
(used, not defined)

> "Validate skill files follow atomic format and naming convention." — scripts/validate_skill_format.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 2 | used here | Module docstring states script validates that skill files follow atomic format and naming convention. |

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
defects: script-bug, orphan

## Design notes
`naming convention` in `validate_skill_format.py` refers to the skill file naming constraint requiring `{domain}-{description}` format rather than an operational software lifecycle concept, classified as `kind: name-only` per D-023.
