---
package: rjm
name: _project_repo_identity
slug: project-repo-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _project_repo_identity

## Definition — verbatim
(used, not defined)

> "def _project_repo_identity(" — scripts/hook_utilities/guards.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/guards.py | 79 | defined here | Resolves and caches whether the current checkout is project, consumer, or unknown. |

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
A private helper function determining and caching the repository identity classification, classified as name-only per D-023.
