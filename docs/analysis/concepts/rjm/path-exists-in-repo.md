---
package: rjm
name: path_exists_in_repo
slug: path-exists-in-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# path_exists_in_repo

## Definition — verbatim
(used, not defined)

> "def path_exists_in_repo(repo_root: Path, rel_path: str) -> bool:" — scripts/validation/tracked_paths.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 17 | used here | Imported from tracked_paths to verify repo-relative paths in skill documentation. |
| scripts/validation/tracked_paths.py | 172 | defined here | Returns whether a relative path is tracked in the git repository index snapshot. |

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
A repository-tracked path existence helper in `scripts/validation/tracked_paths.py`, classified as `name-only` per D-023.
