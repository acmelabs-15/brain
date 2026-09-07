---
package: rjm
name: _commit_count_not_in_base
slug: commit-count-not-in-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _commit_count_not_in_base

## Definition — verbatim
(used, not defined)

> "def _commit_count_not_in_base(branch: str, base_ref: str, repo: str) -> int:" — scripts/maintenance/detect_unlanded_commits.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 65 | defined here | Helper counting commits reachable from branch that are not in base_ref. |

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
_commit_count_not_in_base is a private helper executing git rev-list to count unlanded commits rather than an SDLC lifecycle concept, classified as name-only per D-023.
