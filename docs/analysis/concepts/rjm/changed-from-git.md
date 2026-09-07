---
package: rjm
name: changed_from_git
slug: changed-from-git
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# changed_from_git

## Definition — verbatim
(used, not defined)

> "def changed_from_git(repo_root: Path, base: str) -> list[str] | None:" — scripts/test_selection/select_tests.py:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 167 | defined here | Helper function invoking git diff to obtain the list of files modified on the current branch compared to base. |

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
`changed_from_git` is a Python function identifier in `scripts/test_selection/select_tests.py` resolving branch changes via git diff subprocess invocation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
