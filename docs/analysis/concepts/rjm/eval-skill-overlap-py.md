---
package: rjm
name: eval-skill-overlap.py
slug: eval-skill-overlap-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-skill-overlap.py

## Definition — verbatim
> "| `eval-skill-overlap.py` | Pairwise skill redundancy detection (DISTINCT / OVERLAP / SUBSUMED) for catalog pruning. | Complementary |" — scripts/eval/README.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-overlap-pairs.json | 2 | used here | Comment header referencing the script for pairwise skill overlap evaluation. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 2 | used here | Comment header providing sample CLI command invocation for evaluating candidate overlapping pairs. |
| scripts/eval/README.md | 92 | defined here | Script catalog entry defining the purpose of pairwise skill redundancy detection and catalog pruning. |

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
defects: missing-path, doc-drift, script-bug, orphan

## Design notes
eval-skill-overlap.py is a Python evaluation script filename rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
