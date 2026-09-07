---
package: rjm
name: _remote_merged_branches
slug: remote-merged-branches
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _remote_merged_branches

## Definition — verbatim
(used, not defined)

> "def _remote_merged_branches(repo: str, base_ref: str) -> list[str]:" — scripts/maintenance/detect_unlanded_commits.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 44 | defined here | Helper function returning remote branches that are not ancestors of base_ref. |

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
defects: doc-drift, orphan

## Design notes
_remote_merged_branches is a private helper function querying remote Git branches rather than an SDLC lifecycle concept, classified as name-only per D-023.
