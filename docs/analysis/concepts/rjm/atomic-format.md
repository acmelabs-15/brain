---
package: rjm
name: atomic format
slug: atomic-format
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# atomic format

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
`atomic format` is a repository skill file format rule enforcing one skill per file per ADR-017 rather than an operational software lifecycle concept, classified as `kind: name-only` per D-023.
