---
package: rjm
name: FENCE_END
slug: fence-end
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FENCE_END

## Definition — verbatim
> "FENCE_END = \"<!-- SLOW_UPDATE_END -->\"" — scripts/eval/_optimizer_core.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 78 | defined here | Constant string marking the end of protected document sections that optimizer patches cannot modify. |

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
`FENCE_END` is a marker constant in `_optimizer_core.py` delimiting the end of protected sections against automated patching, classified as `name-only` per D-023.
