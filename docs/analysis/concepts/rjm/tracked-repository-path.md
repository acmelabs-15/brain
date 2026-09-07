---
package: rjm
name: tracked_repository_path
slug: tracked-repository-path
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# tracked_repository_path

## Definition — verbatim
(used, not defined)

> "def tracked_repository_path(path: Path) -> tuple[Path, Path] | None:" — scripts/testing/mutation_workspace_git.py:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 195 | defined here | Function verifying whether a path is tracked by git and returning the repo root and relative path tuple. |

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
tracked_repository_path is a Python function identifier verifying git tracking status of file paths rather than a lifecycle concept.
