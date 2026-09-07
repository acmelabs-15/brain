---
package: rjm
name: KEEP_BARE
slug: keep-bare
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_BARE

## Definition — verbatim
(used, not defined)

> "KEEP_BARE = \"bare worktree\"" — scripts/maintenance/worktree_report.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 17 | defined here | Retention reason constant identifying a bare repository worktree. |

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
A retention reason constant identifier in `worktree_report.py` preserving bare repository trees rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
