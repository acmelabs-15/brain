---
package: rjm
name: _RESERVED_BRANCH_NAMES
slug: reserved-branch-names
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _RESERVED_BRANCH_NAMES

## Definition — verbatim
(used, not defined)

> "_RESERVED_BRANCH_NAMES = frozenset(" — scripts/scope_pr_base.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/scope_pr_base.py | 37 | defined here | Frozenset of git special ref names rejected as plain branch names to prevent silent resolution to origin/HEAD. |

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
`_RESERVED_BRANCH_NAMES` is a constant collection of reserved git ref names in scope gate tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
