---
package: rjm
name: verify_git_refs
slug: verify-git-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# verify_git_refs

## Definition — verbatim
(used, not defined)

> "def verify_git_refs(worktree_root: Path) -> None:" — scripts/maintenance/repair_packed_refs.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 76 | defined here | Function validating that git can parse repository references using `git for-each-ref`. |

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
A validation helper function identifier in `repair_packed_refs.py` that verifies git reference readability rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
