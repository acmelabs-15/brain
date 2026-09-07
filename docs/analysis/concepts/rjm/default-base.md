---
package: rjm
name: _DEFAULT_BASE
slug: default-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DEFAULT_BASE

## Definition — verbatim
(used, not defined)

> "_DEFAULT_BASE = \"origin/main\"" — scripts/maintenance/gc_worktrees.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 105 | defined here | Constant defining the default upstream Git base ref for merge ancestry checks. |

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
_DEFAULT_BASE is a configuration constant in gc_worktrees.py specifying the fallback Git base branch rather than an SDLC lifecycle concept, classified as name-only per D-023.
