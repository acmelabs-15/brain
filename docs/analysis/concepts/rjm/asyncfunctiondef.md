---
package: rjm
name: AsyncFunctionDef
slug: asyncfunctiondef
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# AsyncFunctionDef

## Definition — verbatim
(used, not defined)

> "def _visit_function(self, node: ast.FunctionDef | ast.AsyncFunctionDef) -> None:" — scripts/validation/check_nested_tests.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 40 | used here | Python AST node type denoting asynchronous function definitions evaluated for nested test methods. |

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
`AsyncFunctionDef` is a Python standard library AST class inspected by `check_nested_tests.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
