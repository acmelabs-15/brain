---
package: rjm
name: Worktree
slug: worktree
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_parse.py, sha256: 8b5b2db80218fb22c500b43624d6423f421e0ca1cf3b6e6e7a9091f19296bdad}
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Worktree

## Definition — verbatim
(used, not defined)

> "class Worktree:" — scripts/maintenance/worktree_report.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 2 | used here | Referenced in module docstring describing parsing of porcelain output into Worktree records. |
| scripts/maintenance/_gc_reasons.py | 43 | used here | Imported from worktree_report for type annotations in stale entry explanation functions. |
| scripts/maintenance/_gc_stale.py | 19 | used here | Imported from worktree_report for typing worktree evaluation helpers. |
| scripts/maintenance/gc_worktrees.py | 101 | used here | Imported and utilized across garbage collection decision and reporting pipelines. |
| scripts/maintenance/worktree_report.py | 42 | defined here | Dataclass definition representing a single registered git worktree parsed from porcelain output. |

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
`Worktree` is a Python dataclass identifier representing parsed git worktree porcelain records in maintenance scripts rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
