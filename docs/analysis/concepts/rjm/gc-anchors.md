---
package: rjm
name: _gc_anchors
slug: gc-anchors
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _gc_anchors

## Definition — verbatim
(used, not defined)

> "from scripts.maintenance import _gc_anchors" — scripts/maintenance/_gc_stale.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 17 | used here | Internal module imported for worktree garbage collection anchor analysis. |

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
_gc_anchors is an internal Python maintenance module identifier imported in _gc_stale.py rather than a lifecycle concept, classified as name-only per D-023.
