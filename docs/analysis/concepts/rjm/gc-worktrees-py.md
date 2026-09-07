---
package: rjm
name: gc_worktrees.py
slug: gc-worktrees-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/worktree_occupancy.py, sha256: 0ff4bf8d3dfd4fae6383856d75f39edb13a00db14774e72b8e6bb4c38f23396c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gc_worktrees.py

## Definition — verbatim
(used, not defined)

> "  uv run python scripts/maintenance/gc_worktrees.py" — scripts/maintenance/gc_worktrees.py:27

## Also called — verbatim
`scripts/maintenance/gc_worktrees.py` — scripts/README.md:223

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 27 | defined here | Maintenance CLI script entry point for inspecting and pruning stale worktrees. |
| scripts/maintenance/worktree_occupancy.py | 4 | used here | Referenced as the companion module separating git logic from process inspection. |
| scripts/README.md | 223 | used here | Documented in retained scripts table for reporting or removing stale worktrees. |

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
gc_worktrees.py is a Python maintenance script for cleaning up stale git worktrees rather than an SDLC lifecycle concept, classified as name-only per D-023.
