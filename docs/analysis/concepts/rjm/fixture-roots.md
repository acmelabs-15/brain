---
package: rjm
name: FIXTURE_ROOTS
slug: fixture-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FIXTURE_ROOTS

## Definition — verbatim
(used, not defined)

> "FIXTURE_ROOTS: tuple[str, ...] = (\"tests/\",)" — scripts/validation/check_doc_interpreter_portability.py:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 181 | defined here | Constant tuple defining test fixture directories exempted from portability violation checks. |

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
A Python tuple constant in `check_doc_interpreter_portability.py` identifying test fixture paths excluded from validation scope, classified as name-only per D-023.
