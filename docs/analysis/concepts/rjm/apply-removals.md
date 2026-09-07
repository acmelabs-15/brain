---
package: rjm
name: apply_removals
slug: apply-removals
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# apply_removals

## Definition — verbatim
(used, not defined)

> "def apply_removals(" — scripts/maintenance/_gc_apply.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 34 | defined here | Function executing verified garbage collection deletions after revalidating every candidate. |

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
Function identifier executing worktree removal candidates after multi-layer revalidation, classified as name-only per D-023.
