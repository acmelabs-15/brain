---
package: rjm
name: TOP_LEVEL_KEEP
slug: top-level-keep
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/restructure_memories.py, sha256: 6afb99a67dca2706ea92372b1468fabea9aa75087d238398671098e5e754af11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TOP_LEVEL_KEEP

## Definition — verbatim
(used, not defined)

> "TOP_LEVEL_KEEP = {" — scripts/restructure_memories.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 19 | defined here | Set constant defining special memory files that must remain at the top level of the memories directory. |

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
defects: script-bug

## Design notes
`TOP_LEVEL_KEEP` is a Python set constant identifier listing memory files retained at top level rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
