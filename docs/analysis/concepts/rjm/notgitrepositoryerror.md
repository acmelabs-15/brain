---
package: rjm
name: NotGitRepositoryError
slug: notgitrepositoryerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# NotGitRepositoryError

## Definition — verbatim
(used, not defined)

> "class NotGitRepositoryError(RuntimeError):" — scripts/validation/check_git_hook_health.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 89 | defined here | Exception raised when the checked directory is not inside a git work tree. |
| scripts/validation/check_repo_health.py | 155 | defined here | Exception raised when the checked path is outside a git repository. |

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
NotGitRepositoryError is a Python exception class identifier raised when a path is not a git repository rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
