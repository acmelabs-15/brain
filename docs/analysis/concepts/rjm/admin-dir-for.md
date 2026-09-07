---
package: rjm
name: admin_dir_for
slug: admin-dir-for
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# admin_dir_for

## Definition — verbatim
(used, not defined)

> "def admin_dir_for(worktree_path: str, run_git: GitRunner, repo_dir: str) -> Path | None:" — scripts/maintenance/_gc_stale.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 24 | defined here | Function locating the .git/worktrees/<name> admin directory backing a given worktree path by inspecting candidate gitdir files. |

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
`admin_dir_for` is a Python function in maintenance scripts locating git worktree admin directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
