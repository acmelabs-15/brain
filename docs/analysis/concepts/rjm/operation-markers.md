---
package: rjm
name: _OPERATION_MARKERS
slug: operation-markers
kind: name-only
package_phase: cross-phase
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

# _OPERATION_MARKERS

## Definition — verbatim
(used, not defined)

> "_OPERATION_MARKERS: tuple[tuple[str, str], ...] = (" — scripts/maintenance/_gc_stale.py:287

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 287 | defined here | Constant table mapping git lock and state marker file names to human-readable explanations of active operations. |

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
`_OPERATION_MARKERS` is a Python constant tuple mapping git operation markers to warning descriptions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
