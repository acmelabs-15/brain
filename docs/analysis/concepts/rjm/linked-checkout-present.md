---
package: rjm
name: linked_checkout_present
slug: linked-checkout-present
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# linked_checkout_present

## Definition — verbatim
(used, not defined)

> "def linked_checkout_present(path: str) -> bool:" — scripts/maintenance/_gc_stale.py:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 166 | used here | Verified prior to removal to ensure the directory is still the specific registered linked worktree. |
| scripts/maintenance/_gc_stale.py | 212 | defined here | Function verifying that a path holds a live linked checkout referencing this entry's admin directory. |

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
Identity verification function checking that a path contains a live linked checkout pointing back to its admin directory, classified as name-only per D-023.
