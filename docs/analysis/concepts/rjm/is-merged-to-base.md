---
package: rjm
name: is_merged_to_base
slug: is-merged-to-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_merged_to_base

## Definition — verbatim
(used, not defined)

> "def is_merged_to_base(path: str, base_ref: str) -> bool:" — scripts/maintenance/gc_worktrees.py:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 165 | defined here | Helper executing git merge-base --is-ancestor to verify branch integration with base_ref. |

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
is_merged_to_base is a Python helper testing merge ancestry of a worktree against a base branch rather than an SDLC lifecycle concept, classified as name-only per D-023.
