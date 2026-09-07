---
package: rjm
name: _refuses_to_mutate
slug: refuses-to-mutate
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

# _refuses_to_mutate

## Definition — verbatim
(used, not defined)

> "def _refuses_to_mutate(report: GcReport, errors: list[str], label: str) -> bool:" — scripts/maintenance/_gc_apply.py:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 209 | defined here | Safety guard function checking whether unreadable /proc or unevaluated worktrees preclude mutations. |

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
Safety check function identifying blocking conditions that forbid applying worktree garbage collection mutations, classified as name-only per D-023.
