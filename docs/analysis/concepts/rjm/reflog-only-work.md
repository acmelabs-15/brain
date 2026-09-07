---
package: rjm
name: reflog_only_work
slug: reflog-only-work
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reflog_only_work

## Definition — verbatim
(used, not defined)

> "def reflog_only_work(worktree_path: str, main_path: str, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_reasons.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 144 | used here | Called immediately before candidate worktree deletion to prevent orphaning commits anchored only in reflogs. |
| scripts/maintenance/_gc_reasons.py | 113 | defined here | Diagnostic function checking whether removing a healthy worktree would orphan commits anchored only by its reflog. |

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
Diagnostic function identifier checking whether a worktree deletion would destroy commits anchored only by reflogs, classified as name-only per D-023.
