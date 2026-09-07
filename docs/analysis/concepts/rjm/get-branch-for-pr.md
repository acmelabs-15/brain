---
package: rjm
name: get_branch_for_pr
slug: get-branch-for-pr
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_branch_for_pr

## Definition — verbatim
(used, not defined)

> "def get_branch_for_pr(mapping: PRBranchMapping, pr_number: int) -> str | None:" — scripts/pr_branch_mapping.py:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 226 | defined here | Lookup function returning the branch name associated with a specific PR number. |

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
defects: orphan

## Design notes
`get_branch_for_pr` is a Python function identifier querying branch names by PR number from mapping state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
