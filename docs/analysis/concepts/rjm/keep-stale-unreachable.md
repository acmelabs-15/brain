---
package: rjm
name: KEEP_STALE_UNREACHABLE
slug: keep-stale-unreachable
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KEEP_STALE_UNREACHABLE

## Definition — verbatim
(used, not defined)

> "working tree gone and no ref contains its HEAD" — scripts/maintenance/worktree_report.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 42 | used here | Imported from worktree_report and formatted into a warning when a stale worktree's HEAD is unreachable from any ref. |
| scripts/maintenance/worktree_report.py | 25 | defined here | Constant string defining retention reason when a working tree is gone and no ref contains its HEAD. |

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
`KEEP_STALE_UNREACHABLE` is a Python constant identifier in `worktree_report.py` describing unreferenced HEAD state rather than a lifecycle concept, classified as `kind: name-only` per D-023.
