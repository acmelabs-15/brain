---
package: rjm
name: _DERIVED_EXPRESSION_PREFIXES
slug: derived-expression-prefixes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DERIVED_EXPRESSION_PREFIXES

## Definition — verbatim
(used, not defined)

> "_DERIVED_EXPRESSION_PREFIXES: tuple[str, ...] = (" — scripts/validate_workflows.py:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 323 | defined here | Tuple constant of expression prefixes whose security depends on value origin, resolved via taint analysis during workflow validation. |

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
`_DERIVED_EXPRESSION_PREFIXES` is an internal Python constant in `validate_workflows.py` enumerating context prefixes resolved via taint tracking rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
