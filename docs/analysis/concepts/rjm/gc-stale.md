---
package: rjm
name: _gc_stale
slug: gc-stale
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _gc_stale

## Definition — verbatim
(used, not defined)

> "from scripts.maintenance import _gc_reasons, _gc_stale" — scripts/maintenance/_gc_apply.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 25 | used here | Imported to invoke in_progress_operation and linked_checkout_present safety probes. |
| scripts/maintenance/_gc_reasons.py | 31 | used here | Imported under type checking and runtime fallback to inspect stale admin directories. |

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
Python module import identifier for the stale worktree entry diagnostic probes, classified as name-only per D-023.
