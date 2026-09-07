---
package: rjm
name: CLEAN
slug: clean
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# CLEAN

## Definition — verbatim
(used, not defined)

> "CLEAN = \"clean\"" — scripts/maintenance/_gc_stale.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 84 | defined here | Constant defining the clean state indicator returned when an orphaned worktree index matches HEAD. |

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
`CLEAN` is a Python string constant indicating clean index status in worktree maintenance diagnostics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
