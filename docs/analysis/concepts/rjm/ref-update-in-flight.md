---
package: rjm
name: _ref_update_in_flight
slug: ref-update-in-flight
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _ref_update_in_flight

## Definition — verbatim
(used, not defined)

> "def _ref_update_in_flight(admin: Path) -> str | None:" — scripts/maintenance/_gc_stale.py:355

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 355 | defined here | Helper function probing for in-flight per-worktree ref lock files under the admin refs directory. |

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
`_ref_update_in_flight` is a Python helper function in maintenance diagnostics checking for active per-worktree ref locks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
