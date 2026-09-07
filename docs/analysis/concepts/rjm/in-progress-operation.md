---
package: rjm
name: in_progress_operation
slug: in-progress-operation
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# in_progress_operation

## Definition — verbatim
(used, not defined)

> "def in_progress_operation(path: str) -> str | None:" — scripts/maintenance/_gc_stale.py:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 162 | used here | Checked during removal loop to ensure no active git operation began since plan generation. |
| scripts/maintenance/_gc_stale.py | 319 | defined here | Probe identifying in-flight git operations such as merges, rebases, bisects, or ref updates. |

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
Probe function identifier detecting in-flight git operations within a worktree admin directory, classified as name-only per D-023.
