---
package: rjm
name: has_uncommitted_changes
slug: has-uncommitted-changes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_uncommitted_changes

## Definition — verbatim
(used, not defined)

> "def has_uncommitted_changes(path: str) -> bool:" — scripts/maintenance/gc_worktrees.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 146 | defined here | Helper querying git status porcelain to detect uncommitted staged or unstaged changes. |

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
has_uncommitted_changes is a Python helper querying git status to check worktree cleanliness rather than an SDLC lifecycle concept, classified as name-only per D-023.
