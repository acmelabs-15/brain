---
package: rjm
name: _win_lock_positions
slug: win-lock-positions
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _win_lock_positions

## Definition — verbatim
(used, not defined)

> "_win_lock_positions: dict[int, int] = {}" — scripts/hook_utilities/utilities.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 63 | defined here | Module dictionary tracking file offsets during Windows file locking. |

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
A private module-level dictionary identifier tracking file offsets for Windows locking restoration rather than a lifecycle concept.
