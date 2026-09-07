---
package: rjm
name: ModuleNotFoundError
slug: modulenotfounderror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ModuleNotFoundError

## Definition — verbatim
(used, not defined)

> "ModuleNotFoundError: No module named 'yaml'" — scripts/validation/check_doc_interpreter_portability.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 12 | used here | Quoted in docstring example showing the error that occurs when invoking unportable scripts. |

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
A built-in Python exception cited in `check_doc_interpreter_portability.py` docstrings to demonstrate execution failure on clean checkouts, classified as name-only per D-023.
