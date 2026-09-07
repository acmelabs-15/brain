---
package: rjm
name: _is_plain_branch_name
slug: is-plain-branch-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_plain_branch_name

## Definition — verbatim
(used, not defined)

> "def _is_plain_branch_name(name: str) -> bool:" — scripts/scope_pr_base.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/scope_pr_base.py | 40 | defined here | Predicate validating that a resolved base branch name is an ordinary branch name without revision syntax. |

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
`_is_plain_branch_name` is an internal validation function in scope gate branch resolution rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
