---
package: rjm
name: memory-enhancement
slug: memory-enhancement
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# memory-enhancement

## Definition — verbatim
(used, not defined)

> "memory-enhancement" — scripts/eval/examples/example-overlap-pairs.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-overlap-pairs.json | 4 | used here | Named as an evaluated skill in pairwise overlap evaluation against curating-memories. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 4 | used here | Named as an evaluated skill in Issue #1949 pairwise overlap evaluation. |

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
out-of-scope

## Design notes
An excluded memory maintenance skill responsible for reinforcement passes, confidence updating, and citation validity tracking on memory entries, referenced in skill overlap evaluation fixtures.
