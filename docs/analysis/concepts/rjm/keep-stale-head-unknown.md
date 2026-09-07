---
package: rjm
name: KEEP_STALE_HEAD_UNKNOWN
slug: keep-stale-head-unknown
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
