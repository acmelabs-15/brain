---
package: rjm
name: reflog_only_work
slug: reflog-only-work
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# reflog_only_work

## Definition — verbatim
(used, not defined)

> "def reflog_only_work(worktree_path: str, main_path: str, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_reasons.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 144 | used here | Called immediately before candidate worktree deletion to prevent orphaning commits anchored only in reflogs. |
| scripts/maintenance/_gc_reasons.py | 113 | defined here | Diagnostic function checking whether removing a healthy worktree would orphan commits anchored only by its reflog. |

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
Diagnostic function identifier checking whether a worktree deletion would destroy commits anchored only by reflogs, classified as name-only per D-023.
