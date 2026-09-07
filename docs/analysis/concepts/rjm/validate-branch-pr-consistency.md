---
package: rjm
name: validate_branch_pr_consistency
slug: validate-branch-pr-consistency
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_branch_pr_consistency

## Definition — verbatim
(used, not defined)

> "def validate_branch_pr_consistency(" — scripts/pr_branch_mapping.py:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 254 | defined here | Validation function verifying whether the active git branch matches the PR context recorded in the current session. |

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
`validate_branch_pr_consistency` is a Python function identifier validating git branch alignment with session context rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
