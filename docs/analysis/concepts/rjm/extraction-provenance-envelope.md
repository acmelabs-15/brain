---
package: rjm
name: extraction-provenance envelope
slug: extraction-provenance-envelope
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# extraction-provenance envelope

## Definition — verbatim
> "extraction-provenance envelope (schema, extractor version, input digest, results digest, upstream scorer identity, group, split fingerprint)" — .agents/architecture/ADR-087-held-out-validated-improvement.md:602-603

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 602 | defined here | Defined as the provenance metadata envelope stamped by extract onto each results file. |

## Consumes
Evaluation execution reports, extractor version, input digest, results digest, upstream scorer identity, group assignment, and split fingerprint.

## Produces
Tamper-evident metadata envelope bound directly to evaluation results files.

## When applied
When `extract` produces evaluation results from raw execution logs before gating comparisons.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (implemented in extract per ADR-087 #3436; citing inventory card records missing-path, doc-drift, internal-contradiction)

## Design notes
A metadata envelope stamped into evaluation results files that records the schema, extractor version, input digest, results digest, upstream scorer identity, group, and split fingerprint. It ensures that compared results files originate from the same extraction contract and evaluate identical task universes, preventing mismatched or synthetic evaluation comparisons from being accepted by gating rules.
