---
package: rjm
name: _get_current_branch
slug: get-current-branch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _get_current_branch

## Definition — verbatim
(used, not defined)

> "def _get_current_branch() -> str | None:" — scripts/pr_branch_mapping.py:351

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 351 | defined here | Helper function executing git commands to resolve the active branch name. |

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
`_get_current_branch` is an internal Python utility function identifier in `pr_branch_mapping.py` resolving the active git branch name rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
