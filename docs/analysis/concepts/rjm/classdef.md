---
package: rjm
name: ClassDef
slug: classdef
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ClassDef

## Definition — verbatim
(used, not defined)

> "another function. Nested classes (``ClassDef`` enclosing ``test_*``) are" — scripts/validation/check_nested_tests.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 86 | used here | Python AST node type for classes, specifically exempted from nested test checks because pytest collects them. |

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
`ClassDef` is a Python standard library AST node class referenced in docstrings as an exempted test enclosing container rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
