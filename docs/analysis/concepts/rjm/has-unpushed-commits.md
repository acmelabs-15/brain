---
package: rjm
name: has_unpushed_commits
slug: has-unpushed-commits
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_unpushed_commits

## Definition — verbatim
(used, not defined)

> "def has_unpushed_commits(path: str) -> bool:" — scripts/maintenance/gc_worktrees.py:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 151 | defined here | Helper running git log to detect local commits not present on remote tracking branches. |

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
has_unpushed_commits is a Python helper checking for unpushed Git commits in a worktree rather than an SDLC lifecycle concept, classified as name-only per D-023.
