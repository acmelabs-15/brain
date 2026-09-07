---
package: rjm
name: admin_dir_from_marker
slug: admin-dir-from-marker
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# admin_dir_from_marker

## Definition — verbatim
(used, not defined)

> "def admin_dir_from_marker(path: str) -> Path | None:" — scripts/maintenance/_gc_stale.py:300

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 300 | defined here | Fast lookup function resolving a worktree's admin directory directly by reading its .git marker file without subprocess execution. |

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
`admin_dir_from_marker` is a Python helper function in maintenance diagnostics resolving admin directories from checkout marker files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
