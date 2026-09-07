---
package: rjm
name: _current_branch
slug: current-branch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _current_branch

## Definition — verbatim
(used, not defined)

> "def _current_branch(repo_root: Path) -> str | None:" — scripts/validation/check_push_lock_before_commit.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 92 | defined here | Private helper function returning the current git branch name via git branch --show-current. |

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
`_current_branch` is a Python helper function identifier querying the current branch name from git rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
