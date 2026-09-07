---
package: rjm
name: _lock_directory
slug: lock-directory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _lock_directory

## Definition — verbatim
(used, not defined)

> "def _lock_directory() -> Path:" — scripts/validation/check_push_lock_before_commit.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 82 | defined here | Private helper function returning the canonical filesystem directory for push lock files. |

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
`_lock_directory` is a Python helper function identifier resolving the local push lock storage path rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
