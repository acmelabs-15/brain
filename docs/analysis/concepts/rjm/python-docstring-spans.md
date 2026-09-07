---
package: rjm
name: _python_docstring_spans
slug: python-docstring-spans
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _python_docstring_spans

## Definition — verbatim
(used, not defined)

> "def _python_docstring_spans(text: str) -> set[tuple[int, int, int, int]]:" — scripts/validation/check_skill_portability.py:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 118 | defined here | Function that extracts line and column spans of docstrings from Python source code AST. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier in `check_skill_portability.py`, classified as name-only per D-023.
