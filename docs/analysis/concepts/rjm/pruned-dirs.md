---
package: rjm
name: PRUNED_DIRS
slug: pruned-dirs
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# PRUNED_DIRS

## Definition — verbatim
(used, not defined)

> "PRUNED_DIRS = frozenset(" — scripts/validation/check_shipped_skill_routes.py:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 200 | defined here | Constant frozenset of directory names pruned during filesystem traversal. |

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
A constant identifier specifying directory names excluded during markdown routing traversal rather than an agent lifecycle concept.
