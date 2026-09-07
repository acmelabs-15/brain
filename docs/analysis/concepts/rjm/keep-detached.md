---
package: rjm
name: KEEP_DETACHED
slug: keep-detached
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_DETACHED

## Definition — verbatim
(used, not defined)

> "KEEP_DETACHED = \"detached HEAD (no branch to evaluate)\"" — scripts/maintenance/worktree_report.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 20 | defined here | Retention reason constant identifying worktrees with a detached HEAD. |

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
A retention reason constant identifier in `worktree_report.py` protecting detached HEAD checkouts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
