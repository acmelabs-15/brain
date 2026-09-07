---
package: rjm
name: lock_path_for_branch
slug: lock-path-for-branch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# lock_path_for_branch

## Definition — verbatim
(used, not defined)

> "def lock_path_for_branch(branch: str, lock_directory: Path | None = None) -> Path:" — scripts/validation/check_push_lock_before_commit.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 106 | defined here | Helper function returning the canonical push-lock file path for a branch by slugifying branch name slashes. |

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
`lock_path_for_branch` is a Python helper function identifier resolving canonical lock paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
