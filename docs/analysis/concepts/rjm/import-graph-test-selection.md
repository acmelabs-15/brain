---
package: rjm
name: Import-graph test selection
slug: import-graph-test-selection
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# Import-graph test selection

## Definition — verbatim
> "Import-graph test selection." — scripts/test_selection/__init__.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/__init__.py | 1 | defined here | Package docstring heading defining the import-graph test selection architecture. |

## Consumes
Set of changed Python source files and repository module import graph.

## Produces
Targeted subset of pytest test files that transitively import the changed sources.

## When applied
Applied during test selection to run only tests affected by Python source diffs, falling back to full suite on any uncertainty.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Import-graph test selection is a testing optimization technique in rjm that accelerates test execution by mapping changed Python source files to transitively dependent pytest files via AST dependency traversal. It maintains test safety through conservative fallback semantics that run the entire test suite whenever non-Python files change, unmapped dynamic imports appear, or AST parsing fails.
