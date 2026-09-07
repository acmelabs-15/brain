---
package: rjm
name: _gc_reasons
slug: gc-reasons
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _gc_reasons

## Definition — verbatim
(used, not defined)

> "from scripts.maintenance import _gc_reasons, _gc_stale" — scripts/maintenance/_gc_apply.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 25 | used here | Imported to call reflog_only_work safety validation before worktree removal. |

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
Python module import identifier for the maintenance reasons evaluator, classified as name-only per D-023.
