---
package: rjm
name: _head_moved_since
slug: head-moved-since
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _head_moved_since

## Definition — verbatim
(used, not defined)

> "def _head_moved_since(path: str, expected: str | None, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_apply.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 192 | defined here | Helper comparing current worktree HEAD commit against expected commit recorded during recheck. |

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
Internal helper function detecting HEAD commit movement since previous recheck, classified as name-only per D-023.
