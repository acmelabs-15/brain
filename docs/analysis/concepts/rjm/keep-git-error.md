---
package: rjm
name: KEEP_GIT_ERROR
slug: keep-git-error
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_GIT_ERROR

## Definition — verbatim
(used, not defined)

> "KEEP_GIT_ERROR = \"git inspection failed\"" — scripts/maintenance/worktree_report.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 22 | defined here | Retention reason constant applied when git inspection encounters an error. |

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
A retention reason constant identifier in `worktree_report.py` failing safe on git inspection errors rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
