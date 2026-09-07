---
package: rjm
name: KEEP_MAIN
slug: keep-main
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_MAIN

## Definition — verbatim
(used, not defined)

> "KEEP_MAIN = \"main-or-current worktree\"" — scripts/maintenance/worktree_report.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 16 | defined here | Retention reason constant identifying the main or current git worktree. |

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
A retention reason constant identifier in `worktree_report.py` protecting the primary repository worktree rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
