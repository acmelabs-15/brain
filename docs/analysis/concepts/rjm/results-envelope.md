---
package: rjm
name: results envelope
slug: results-envelope
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

# results envelope

## Definition — verbatim
> "A results envelope cannot delete the refusal" — .agents/architecture/ADR-087-held-out-validated-improvement.md:313

## Also called — verbatim
`extraction-provenance envelope` — .agents/architecture/ADR-087-held-out-validated-improvement.md:602

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 313 | defined here | Structured metadata wrapper surrounding task evaluation outputs carrying corpus identity and extraction provenance. |

## Consumes
Raw scorer execution verdicts and environment metadata.

## Produces
JSON formatted evaluation results file (`base.json`, `cand.json`) containing task outcomes and provenance headers.

## When applied
Produced during evaluation extraction (`optimize-artifact.py extract`) and consumed by `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
declared-corpora

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The metadata container format wrapping raw evaluation task-to-verdict mappings. It carries essential provenance information—such as corpus identifiers, fixture set hashes, and model configurations—enabling the gate to verify execution authenticity and prevent invalid cross-corpus comparisons.
