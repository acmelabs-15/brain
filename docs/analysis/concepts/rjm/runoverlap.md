---
package: rjm
name: RunOverlap
slug: runoverlap
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RunOverlap

## Definition — verbatim
(used, not defined)

> "class RunOverlap:" — .github/scripts/measure_workflow_coalescing.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/measure_workflow_coalescing.py | 97 | defined here | Dataclass representing temporal overlap between two workflow runs in the same concurrency group. |

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
defects: doc-drift, orphan

## Design notes
A dataclass modeling overlapping workflow runs during coalescing measurement rather than an independent lifecycle concept.
