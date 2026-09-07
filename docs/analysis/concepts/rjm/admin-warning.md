---
package: rjm
name: _admin_warning
slug: admin-warning
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _admin_warning

## Definition — verbatim
(used, not defined)

> "def _admin_warning(admin: Path, main_path: str) -> str:" — scripts/maintenance/_gc_reasons.py:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 180 | defined here | Private helper generating a warning and rescue commands for commits anchored exclusively in a worktree's admin reflog or local refs. |

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
`_admin_warning` is an internal Python function identifier formatting rescue commands for reflog-anchored commits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
