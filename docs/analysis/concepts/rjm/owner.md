---
package: rjm
name: owner
slug: owner
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# owner

## Definition — verbatim
(used, not defined)

> "owner" — scripts/eval/examples/example-overlap-pairs.json:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-overlap-pairs.json | 12 | defined here | Key designating the target skill expected to answer a test prompt in pairwise overlap evaluation. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 12 | defined here | Key designating the target skill expected to answer a test prompt in Issue #1949 overlap evaluation. |
| scripts/eval/software_engineering_library_activation_gate.py | 31 | defined here | Constant identifying the agent role responsible for the activation gate state and restoration PRs. |

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
defects: orphan

## Design notes
owner is a metadata field and constant designating agent or skill ownership rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
