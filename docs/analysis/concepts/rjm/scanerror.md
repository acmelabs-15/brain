---
package: rjm
name: ScanError
slug: scanerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ScanError

## Definition — verbatim
(used, not defined)

> "class ScanError(Exception):" — scripts/validation/check_doc_interpreter_portability.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 136 | defined here | Exception raised when the validator cannot inspect an in-scope tracked file. |
| scripts/validation/check_duplicate_test_helpers.py | 38 | defined here | Exception raised when the gate cannot inspect its declared test corpus. |
| scripts/validation/check_subprocess_encoding.py | 1645 | defined here | Exception raised when the gate cannot inspect its declared source corpus. |
| scripts/validation/check_unreachable_code.py | 33 | defined here | Exception raised when the gate cannot inspect its declared source corpus. |

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
A Python exception class raised across validation scripts when file corpus inspection fails, classified as name-only per D-023.
