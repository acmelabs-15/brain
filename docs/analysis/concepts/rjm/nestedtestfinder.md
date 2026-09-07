---
package: rjm
name: _NestedTestFinder
slug: nestedtestfinder
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _NestedTestFinder

## Definition — verbatim
(used, not defined)

> "class _NestedTestFinder(ast.NodeVisitor):" — scripts/validation/check_nested_tests.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 33 | defined here | AST visitor subclass traversing Python syntax trees to identify test functions nested inside other functions. |

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
`_NestedTestFinder` is an internal Python class in `check_nested_tests.py` that implements AST node traversal rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
