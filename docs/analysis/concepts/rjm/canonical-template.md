---
package: rjm
name: CANONICAL_TEMPLATE
slug: canonical-template
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CANONICAL_TEMPLATE

## Definition — verbatim
(used, not defined)

> "CANONICAL_TEMPLATE = '\"$HOME/src/scratch/locks/push-lock-<slug>.lock\"'" — scripts/validation/check_push_lock_paths.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 50 | defined here | Constant defining the canonical lock path pattern string displayed in validation failure messages. |

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
`CANONICAL_TEMPLATE` is a Python string constant identifier in `check_push_lock_paths.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
