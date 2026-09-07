---
package: rjm
name: authenticated provenance
slug: authenticated-provenance
kind: technique
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

# authenticated provenance

## Definition — verbatim
(used, not defined)

> "authenticated provenance, which this design does not have and does not claim." — .agents/architecture/ADR-087-held-out-validated-improvement.md:358

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 358 | used here | Identified as the missing cryptographic binding mechanism required to prevent adversarial tampering with split files. |

## Consumes
Cryptographic signing keys and trusted evaluator execution environments.

## Produces
Tamper-proof attestation binding artifacts, task definitions, and evaluation results.

## When applied
Recognized as a future requirement (Open Requirement 2) for establishing adversarial security boundaries.

## Sub-concepts
none

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The architectural boundary between cooperative discipline and cryptographic enforcement. ADR-087 explicitly notes that without authenticated provenance produced by a trusted controller, an adversarial optimizer with local disk access can bypass checks; the current system defends against accidental errors by cooperating optimizers.
