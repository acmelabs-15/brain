---
package: rjm
name: _GIT_COMMIT_PATTERN
slug: git-commit-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _GIT_COMMIT_PATTERN

## Definition — verbatim
(used, not defined)

> "_GIT_COMMIT_PATTERN" — scripts/hook_utilities/utilities.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 21 | defined here | Compiled regular expression matching git commit and git ci command invocations. |

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
A module-level compiled regular expression constant identifying git commit CLI commands, classified as name-only per D-023.
