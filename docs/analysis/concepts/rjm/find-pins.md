---
package: rjm
name: find_pins
slug: find-pins
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_pins

## Definition — verbatim
(used, not defined)

> "def find_pins(root: Path) -> list[Pin]:" — scripts/validation/check_ci_dependency_pins.py:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 189 | defined here | Function returning every pkg==version literal under the scan root. |

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
A Python function identifier in `check_ci_dependency_pins.py` that scans YAML files for package pin literals, classified as `name-only` per D-023.
