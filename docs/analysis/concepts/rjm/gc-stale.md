---
package: rjm
name: _gc_stale
slug: gc-stale
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

# _gc_stale

## Definition — verbatim
(used, not defined)

> "from scripts.maintenance import _gc_reasons, _gc_stale" — scripts/maintenance/_gc_apply.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 25 | used here | Imported to invoke in_progress_operation and linked_checkout_present safety probes. |
| scripts/maintenance/_gc_reasons.py | 31 | used here | Imported under type checking and runtime fallback to inspect stale admin directories. |

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
Python module import identifier for the stale worktree entry diagnostic probes, classified as name-only per D-023.
