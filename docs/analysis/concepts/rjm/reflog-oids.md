---
package: rjm
name: reflog_oids
slug: reflog-oids
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# reflog_oids

## Definition — verbatim
(used, not defined)

> "def reflog_oids(admin: Path) -> list[str] | None:" — scripts/maintenance/_gc_anchors.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 27 | defined here | Function extracting every non-null object ID named across a worktree's reflogs. |

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
Reflog parsing function collecting anchor object IDs from a worktree admin directory, classified as name-only per D-023.
