---
package: rjm
name: _PROCESS_GONE
slug: process-gone
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/worktree_occupancy.py, sha256: 0ff4bf8d3dfd4fae6383856d75f39edb13a00db14774e72b8e6bb4c38f23396c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _PROCESS_GONE

## Definition — verbatim
(used, not defined)

> "_PROCESS_GONE = frozenset({errno.ENOENT, errno.ESRCH})" — scripts/maintenance/worktree_occupancy.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_occupancy.py | 40 | defined here | Set of OS errno values indicating a process terminated during inspection. |

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
An internal errno constant set identifier in `worktree_occupancy.py` used to filter vanished processes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
