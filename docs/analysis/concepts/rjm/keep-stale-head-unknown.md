---
package: rjm
name: KEEP_STALE_HEAD_UNKNOWN
slug: keep-stale-head-unknown
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# KEEP_STALE_HEAD_UNKNOWN

## Definition — verbatim
(used, not defined)

> "KEEP_STALE_HEAD_UNKNOWN = (" — scripts/maintenance/worktree_report.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 40 | used here | Imported from worktree_report and emitted in head warnings when git cannot establish whether a ref contains HEAD. |
| scripts/maintenance/worktree_report.py | 26 | defined here | Constant string describing a stale worktree whose HEAD reachability cannot be determined by git. |

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
`KEEP_STALE_HEAD_UNKNOWN` is a Python string constant identifier in `worktree_report.py` describing indeterminable HEAD reachability rather than a lifecycle concept, classified as `kind: name-only` per D-023.
