---
package: rjm
name: Occupancy
slug: occupancy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/worktree_occupancy.py, sha256: 0ff4bf8d3dfd4fae6383856d75f39edb13a00db14774e72b8e6bb4c38f23396c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Occupancy

## Definition — verbatim
(used, not defined)

> "class Occupancy(NamedTuple):" — scripts/maintenance/worktree_occupancy.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 84 | used here | Imported to receive process occupancy scan data for worktree pruning decisions. |
| scripts/maintenance/worktree_occupancy.py | 17 | defined here | NamedTuple holding live-process working directories and unreadable process count. |

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
Occupancy is a Python NamedTuple representing live process working directory scan results rather than an SDLC lifecycle concept, classified as name-only per D-023.
