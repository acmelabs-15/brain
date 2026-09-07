---
package: rjm
name: Issue #2761
slug: issue-2761
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
  - {path: scripts/maintenance/_gc_parse.py, sha256: 8b5b2db80218fb22c500b43624d6423f421e0ca1cf3b6e6e7a9091f19296bdad}
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Issue #2761

## Definition — verbatim
(used, not defined)

> "Issue #2761 recorded 113 worktrees totalling 10.6G on one machine, which" — scripts/maintenance/gc_worktrees.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 15 | used here | Cited in module docstring regarding worktree accumulation starving the markdown LSP. |
| scripts/maintenance/_gc_parse.py | 22 | used here | Cited in module docstring regarding worktree accumulation starving the markdown LSP. |
| scripts/maintenance/_gc_reasons.py | 17 | used here | Cited in module docstring regarding worktree accumulation starving the markdown LSP. |
| scripts/maintenance/gc_worktrees.py | 6 | used here | Cited in tool docstring describing worktree accumulation problem starving markdown LSP. |

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
Issue #2761 is a GitHub issue tracking identifier for worktree accumulation starvation rather than a lifecycle concept.
