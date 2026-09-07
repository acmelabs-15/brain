---
package: rjm
name: read_shebang
slug: read-shebang
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# read_shebang

## Definition — verbatim
(used, not defined)

> "def read_shebang(path: Path) -> str | None:" — scripts/maintenance/repair_worktree_venv.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 105 | defined here | Function reading the first-line shebang from launcher script files. |

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
A file parsing utility function identifier in `repair_worktree_venv.py` reading launcher shebang headers rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
