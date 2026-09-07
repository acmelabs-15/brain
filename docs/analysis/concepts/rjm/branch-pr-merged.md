---
package: rjm
name: _branch_pr_merged
slug: branch-pr-merged
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _branch_pr_merged

## Definition — verbatim
(used, not defined)

> "def _branch_pr_merged(branch: str) -> bool:" — scripts/maintenance/detect_unlanded_commits.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 75 | defined here | Helper querying GitHub CLI to check if the PR for a given branch was merged. |

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
_branch_pr_merged is a private helper querying the GitHub API for PR merge status rather than an SDLC lifecycle concept, classified as name-only per D-023.
