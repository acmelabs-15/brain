---
package: rjm
name: has_dynamic_import
slug: has-dynamic-import
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_dynamic_import

## Definition — verbatim
(used, not defined)

> "def has_dynamic_import(path: Path) -> bool:" — scripts/test_selection/select_tests.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 85 | defined here | AST inspection function detecting whether a source file contains dynamic imports that require full-suite execution. |

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
`has_dynamic_import` is a Python function identifier in `scripts/test_selection/select_tests.py` performing AST analysis to spot unmapped dynamic imports rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
