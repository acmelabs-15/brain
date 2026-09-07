---
package: rjm
name: is_git_repository
slug: is-git-repository
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_git_repository

## Definition — verbatim
(used, not defined)

> "def is_git_repository() -> bool:" — scripts/normalize_line_endings.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 32 | defined here | Defines helper function verifying whether the script is running inside a valid Git working tree. |

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
A Python predicate function identifier checking for Git repository presence rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
