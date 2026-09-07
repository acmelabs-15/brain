---
package: rjm
name: GENERATED_ROOTS
slug: generated-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GENERATED_ROOTS

## Definition — verbatim
(used, not defined)

> "GENERATED_ROOTS: tuple[str, ...] = (" — scripts/validation/check_doc_interpreter_portability.py:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 171 | defined here | Constant tuple specifying directory roots for generated files excluded from scanning. |

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
A Python tuple constant in `check_doc_interpreter_portability.py` defining generated file directory paths excluded from scope, classified as name-only per D-023.
