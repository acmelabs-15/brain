---
package: rjm
name: FunctionDef
slug: functiondef
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FunctionDef

## Definition — verbatim
(used, not defined)

> "Discriminator: a ``test_*`` function with any enclosing ``FunctionDef`` in the" — scripts/validation/check_nested_tests.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 11 | used here | Standard library Python AST node type inspected to identify enclosing synchronous function bodies. |

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
`FunctionDef` is a Python standard library AST class referenced in `check_nested_tests.py` docstrings and visitor methods rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
