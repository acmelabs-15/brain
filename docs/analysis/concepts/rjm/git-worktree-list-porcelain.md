---
package: rjm
name: git worktree list --porcelain
slug: git-worktree-list-porcelain
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# git worktree list --porcelain

## Definition — verbatim
(used, not defined)

> "Read ``git worktree list --porcelain`` into ``Worktree`` records." — scripts/maintenance/_gc_parse.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 2 | used here | Cited in module docstring as the porcelain command providing stable worktree records. |

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
Git command porcelain invocation string parsed into structured worktree records rather than a lifecycle concept, classified as name-only per D-023.
