---
package: rjm
name: ScoreEvidence
slug: scoreevidence
kind: artifact
package_phase: rjm:Test
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

# ScoreEvidence

## Definition — verbatim
> "A score plus the extraction provenance that produced it." — scripts/eval/_optimizer_core.py:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 148 | defined here | Dataclass pairing a numerical score value with extraction provenance metadata mapping. |

## Consumes
Evaluation execution results and extractor provenance metadata.

## Produces
An immutable record binding a numeric performance metric to its source extraction envelope and corpus hash.

## When applied
Emitted when normalizing raw evaluation runner outputs into standard optimizer score envelopes.

## Sub-concepts
none

## Part of
gate

## Implementation status
clean

## Design notes
`ScoreEvidence` pairs an evaluation score value with its provenance metadata in rjm's gating engine. By requiring provenance alongside metrics, it ensures that candidate scores cannot be fabricated or disconnected from the exact test run and corpus revision that produced them.
