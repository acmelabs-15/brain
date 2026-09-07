---
package: rjm
name: tamper-evident
slug: tamper-evident
kind: pattern
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

# tamper-evident

## Definition — verbatim
> "The split is fingerprinted over the seed, the full task-id set, and the group ratios." — .agents/architecture/ADR-087-held-out-validated-improvement.md:165-166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 163 | defined here | Section heading defining the requirement that evaluation task splits cannot be silently redrawn or altered. |

## Consumes
Evaluation task universe identifiers, random seed, and partition ratios.

## Produces
Cryptographic split fingerprint (`split_fingerprint`) recorded in `split.json`.

## When applied
Computed during initial split generation and verified before every decision computation in `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An integrity design pattern that binds evaluation split configuration (seed, task identifiers, partition ratios) into a cryptographic fingerprint stored in `split.json`. Any modification, task addition, or redraw changes the fingerprint and causes the gating tool to refuse execution, preventing accidental or intentional split shopping.
