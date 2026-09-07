---
package: rjm
name: git_hook_policy.py
slug: git-hook-policy-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# git_hook_policy.py

## Definition — verbatim
(used, not defined)

> "``scripts/validation/git_hook_policy.py``. Not every ``SKIP_*`` name there is" — scripts/validation/check_push_lock_before_commit.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 47 | used here | Cited in docstring as the validation script governing git hook bypass policies and exceptions. |

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
`git_hook_policy.py` is the filename of a validation script establishing hook bypass policies rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
