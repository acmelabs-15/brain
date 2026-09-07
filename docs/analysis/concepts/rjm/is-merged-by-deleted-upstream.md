---
package: rjm
name: is_merged_by_deleted_upstream
slug: is-merged-by-deleted-upstream
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# is_merged_by_deleted_upstream

## Definition — verbatim
(used, not defined)

> "def is_merged_by_deleted_upstream(" — scripts/maintenance/_gc_remote.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 53 | defined here | Function checking whether a local branch's upstream tracking branch has been deleted on the remote origin. |

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
`is_merged_by_deleted_upstream` is a Python function in maintenance scripts checking remote branch deletion status rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
