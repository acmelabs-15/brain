---
package: rjm
name: EXCLUDED_PREFIXES
slug: excluded-prefixes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXCLUDED_PREFIXES

## Definition — verbatim
(used, not defined)

> "EXCLUDED_PREFIXES = (" — scripts/validation/check_push_lock_paths.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 54 | defined here | Constant tuple specifying directory path prefixes exempt from push-lock prescription validation. |
| scripts/validation/check_worktree_recipes.py | 94 | defined here | Constant tuple specifying directory path prefixes exempt from worktree prescription checking. |

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
`EXCLUDED_PREFIXES` is a Python constant tuple identifier in validation scripts defining path prefixes exempt from prescription scans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
