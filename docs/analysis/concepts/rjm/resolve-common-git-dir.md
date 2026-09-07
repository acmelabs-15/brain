---
package: rjm
name: resolve_common_git_dir
slug: resolve-common-git-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# resolve_common_git_dir

## Definition — verbatim
(used, not defined)

> "def resolve_common_git_dir(worktree_root: Path) -> Path:" — scripts/maintenance/repair_packed_refs.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 47 | defined here | Function resolving the common git directory for standard repositories and linked worktrees. |

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
A git directory resolution utility function identifier in `repair_packed_refs.py` rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
