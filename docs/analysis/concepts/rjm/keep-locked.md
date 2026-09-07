---
package: rjm
name: KEEP_LOCKED
slug: keep-locked
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_LOCKED

## Definition — verbatim
(used, not defined)

> "KEEP_LOCKED = \"locked\"" — scripts/maintenance/worktree_report.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 18 | defined here | Retention reason constant identifying an explicitly locked git worktree. |

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
A retention reason constant identifier in `worktree_report.py` honoring git worktree locks rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
