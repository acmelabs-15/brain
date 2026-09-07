---
package: rjm
name: worktree_ref_oids
slug: worktree-ref-oids
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_anchors.py, sha256: 5fc8d66c8c261d72b266e12530edb85d80ec424089f4c38cd9c7d55d0f2e5b2a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# worktree_ref_oids

## Definition — verbatim
(used, not defined)

> "def worktree_ref_oids(admin: Path) -> list[str] | None:" — scripts/maintenance/_gc_anchors.py:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 164 | defined here | Function discovering all object IDs referenced by refs in a worktree admin directory. |

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
Inspection helper function collecting object IDs anchored under a worktree's refs directory, classified as name-only per D-023.
