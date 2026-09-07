---
package: rjm
name: BLOCK_MESSAGE
slug: block-message
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BLOCK_MESSAGE

## Definition — verbatim
(used, not defined)

> "BLOCK_MESSAGE = (" — scripts/validation/check_push_lock_before_commit.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 73 | defined here | Constant string template emitted to stderr when a commit is blocked by an in-flight branch push lock. |

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
`BLOCK_MESSAGE` is a Python string template constant identifier in `check_push_lock_before_commit.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
