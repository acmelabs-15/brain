---
package: rjm
name: is_declared
slug: is-declared
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_declared

## Definition — verbatim
(used, not defined)

> "def is_declared(lines: list[str], index: int) -> bool:" — scripts/validation/check_doc_interpreter_portability.py:242

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 242 | defined here | Predicate determining whether an offense carries a line-scoped declaration marker. |

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
A Python predicate function in `check_doc_interpreter_portability.py` checking for line-scoped opt-out markers, classified as name-only per D-023.
