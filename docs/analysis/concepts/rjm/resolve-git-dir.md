---
package: rjm
name: _resolve_git_dir
slug: resolve-git-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolve_git_dir

## Definition — verbatim
(used, not defined)

> "def _resolve_git_dir(git_marker: Path, worktree_root: Path) -> Path:" — scripts/maintenance/repair_packed_refs.py:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 167 | defined here | Internal helper function parsing git directory paths from directories or `.git` pointer files. |

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
An internal utility function identifier in `repair_packed_refs.py` for parsing `.git` pointers rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
