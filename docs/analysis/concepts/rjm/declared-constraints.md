---
package: rjm
name: declared_constraints
slug: declared-constraints
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# declared_constraints

## Definition — verbatim
(used, not defined)

> "def declared_constraints(pyproject: Path) -> dict[str, SpecifierSet]:" — scripts/validation/check_ci_dependency_pins.py:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 154 | defined here | Function returning canonical package names mapped to combined specifier sets from pyproject.toml. |

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
A Python function identifier in `check_ci_dependency_pins.py` that parses and merges dependency specifiers from pyproject.toml, classified as `name-only` per D-023.
