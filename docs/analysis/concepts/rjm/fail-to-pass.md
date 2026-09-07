---
package: rjm
name: fail-to-pass
slug: fail-to-pass
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

# fail-to-pass

## Definition — verbatim
> "The decision counts discordant pairs: tasks that went fail-to-pass and tasks that went pass-to-fail." — .agents/architecture/ADR-087-held-out-validated-improvement.md:267-268

## Also called — verbatim
`discordant_gain` — scripts/eval/optimize-artifact.py:2449

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 267 | defined here | Defined as evaluation tasks where the candidate succeeded after the baseline failed (performance gain). |

## Consumes
Task outcomes from baseline (fail) and candidate (pass).

## Produces
Positive improvement count for gating evaluation.

## When applied
Measured during candidate evaluation comparison in `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
discordant-pairs

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The metric representing positive task improvements achieved by an artifact edit. It constitutes the numerator in paired statistical evaluation against baseline performance.
