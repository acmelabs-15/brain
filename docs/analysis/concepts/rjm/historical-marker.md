---
package: rjm
name: HISTORICAL_MARKER
slug: historical-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# HISTORICAL_MARKER

## Definition — verbatim
(used, not defined)

> "HISTORICAL_MARKER = \"push-lock-historical\"" — scripts/validation/check_push_lock_paths.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 51 | defined here | Constant defining the marker string token ("push-lock-historical") used to exempt historical blocks from validation. |
| scripts/validation/check_worktree_recipes.py | 108 | defined here | Constant defining the marker string token ("worktree-recipe-historical") used to exempt historical worktree recipes from validation. |

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
defects: exit-code-mismatch

## Design notes
`HISTORICAL_MARKER` is a Python constant identifier across validation scripts defining historical exclusion marker tokens rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
