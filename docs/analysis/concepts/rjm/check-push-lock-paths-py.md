---
package: rjm
name: check_push_lock_paths.py
slug: check-push-lock-paths-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_push_lock_paths.py

## Definition — verbatim
(used, not defined)

> "``check_push_lock_paths.py``:" — scripts/validation/check_push_lock_before_commit.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 23 | used here | Cited in docstring alongside push-lock.md as the authority establishing the canonical lock path format. |
| scripts/validation/check_worktree_recipes.py | 53 | used here | Cited in docstring as precedent for retrospective and archive path exclusion carve-outs. |

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
`check_push_lock_paths.py` is the filename of a validation gate script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
