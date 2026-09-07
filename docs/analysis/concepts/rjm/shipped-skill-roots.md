---
package: rjm
name: SHIPPED_SKILL_ROOTS
slug: shipped-skill-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SHIPPED_SKILL_ROOTS

## Definition — verbatim
(used, not defined)

> "SHIPPED_SKILL_ROOTS: tuple[str, ...] = (" — scripts/validation/check_colocated_skill_tests.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 23 | defined here | Constant tuple defining directory roots that ship to customers via plugin installation. |

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
A Python constant tuple identifier in `check_colocated_skill_tests.py` declaring customer-shipped skill directory roots, classified as `name-only` per D-023.
