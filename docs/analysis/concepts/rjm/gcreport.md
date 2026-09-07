---
package: rjm
name: GcReport
slug: gcreport
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GcReport

## Definition — verbatim
(used, not defined)

> "class GcReport:" — scripts/maintenance/worktree_report.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 26 | used here | Imported as type annotation for plan report inputs in apply_removals and _refuses_to_mutate. |
| scripts/maintenance/gc_worktrees.py | 100 | used here | Imported to instantiate and format worktree garbage collection report results. |
| scripts/maintenance/worktree_report.py | 80 | defined here | Dataclass representing a complete garbage collection plan across all repository worktrees. |

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
Dataclass identifier representing the collected garbage-collection plan across all worktrees, classified as name-only per D-023.
