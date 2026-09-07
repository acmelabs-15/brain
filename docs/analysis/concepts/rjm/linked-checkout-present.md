---
package: rjm
name: linked_checkout_present
slug: linked-checkout-present
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# linked_checkout_present

## Definition — verbatim
(used, not defined)

> "def linked_checkout_present(path: str) -> bool:" — scripts/maintenance/_gc_stale.py:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 166 | used here | Verified prior to removal to ensure the directory is still the specific registered linked worktree. |
| scripts/maintenance/_gc_stale.py | 212 | defined here | Function verifying that a path holds a live linked checkout referencing this entry's admin directory. |

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
Identity verification function checking that a path contains a live linked checkout pointing back to its admin directory, classified as name-only per D-023.
