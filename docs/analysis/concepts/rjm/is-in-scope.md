---
package: rjm
name: is_in_scope
slug: is-in-scope
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_in_scope

## Definition — verbatim
(used, not defined)

> "def is_in_scope(rel_path: str) -> bool:" — scripts/validation/check_doc_interpreter_portability.py:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 233 | defined here | Predicate returning whether a file path contains instructions subject to doc interpreter gating. |

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
A Python predicate function in `check_doc_interpreter_portability.py` determining whether a file path is gated, classified as name-only per D-023.
