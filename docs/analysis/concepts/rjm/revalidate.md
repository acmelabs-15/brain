---
package: rjm
name: revalidate
slug: revalidate
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# revalidate

## Definition — verbatim
(used, not defined)

> "before its own removal, and the first failure stops the run. ``revalidate`` is" — scripts/maintenance/_gc_apply.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 10 | defined here | Documented required callback argument in apply_removals used to re-read repository state and obtain a fresh GC plan. |

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
Callback parameter identifier representing fresh GC plan re-computation before applying worktree removals, classified as name-only per D-023.
