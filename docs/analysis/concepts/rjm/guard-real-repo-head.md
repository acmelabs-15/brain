---
package: rjm
name: _guard_real_repo_head
slug: guard-real-repo-head
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _guard_real_repo_head

## Definition — verbatim
(used, not defined)

> "root ``conftest.py`` ``_guard_real_repo_head`` fixture, issue #3109). The" — scripts/validation/check_push_lock_before_commit.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 7 | used here | Cited in module docstring as the root conftest.py test fixture reading live git repository state. |

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
`_guard_real_repo_head` is an internal pytest fixture identifier in root conftest.py rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
