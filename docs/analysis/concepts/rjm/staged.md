---
package: rjm
name: STAGED
slug: staged
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# STAGED

## Definition — verbatim
(used, not defined)

> "STAGED = \"staged\"" — scripts/maintenance/_gc_stale.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 83 | defined here | Constant defining the staged state indicator returned when an orphaned worktree index contains staged content. |

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
`STAGED` is a Python string constant indicating staged uncommitted changes in a worktree index rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
