---
package: rjm
name: Import-graph test selection
slug: import-graph-test-selection
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/__init__.py, sha256: 6966c08c6bbac856a1b0bc5721a1127b0ad255953ee70d4d336e86037dc5add6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
