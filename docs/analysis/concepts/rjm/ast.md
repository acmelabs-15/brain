---
package: rjm
name: AST
slug: ast
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# AST

## Definition — verbatim
(used, not defined)

> "AST ancestor chain. Nested *classes* (``TestSomething.TestInner``) are collected" — scripts/validation/check_nested_tests.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 12 | used here | Refers to Python Abstract Syntax Tree structures walked to detect nested test function declarations. |

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
`AST` (Abstract Syntax Tree) is a standard Python parsing structure referenced in validation tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
