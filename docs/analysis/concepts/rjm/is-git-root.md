---
package: rjm
name: _is_git_root
slug: is-git-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_git_root

## Definition — verbatim
(used, not defined)

> "def _is_git_root(repo_root: Path) -> bool:" — scripts/validation/check_duplicate_test_helpers.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 47 | defined here | Helper function determining whether a directory is the top level of a git repository via rev-parse. |

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
_is_git_root is an internal Python helper function identifier verifying git repository root paths rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
