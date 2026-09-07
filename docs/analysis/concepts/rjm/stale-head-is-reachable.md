---
package: rjm
name: stale_head_is_reachable
slug: stale-head-is-reachable
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stale_head_is_reachable

## Definition — verbatim
(used, not defined)

> "def stale_head_is_reachable(head: str | None, run_git: Callable[..., str]) -> bool | None:" — scripts/maintenance/_gc_reasons.py:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 217 | defined here | Tri-state predicate checking via git for-each-ref --contains whether any ref contains a stale worktree's HEAD commit. |

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
`stale_head_is_reachable` is a Python function identifier evaluating ref containment for detached HEAD commits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
