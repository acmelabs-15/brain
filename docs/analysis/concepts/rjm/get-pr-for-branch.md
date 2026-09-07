---
package: rjm
name: get_pr_for_branch
slug: get-pr-for-branch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_pr_for_branch

## Definition — verbatim
(used, not defined)

> "def get_pr_for_branch(mapping: PRBranchMapping, branch_name: str) -> int | None:" — scripts/pr_branch_mapping.py:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 240 | defined here | Lookup function returning the PR number associated with a specific git branch name. |

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
`get_pr_for_branch` is a Python function identifier querying PR numbers by branch name from mapping state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
