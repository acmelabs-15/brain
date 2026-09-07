---
package: rjm
name: pass-to-fail
slug: pass-to-fail
kind: gate
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

# pass-to-fail

## Definition — verbatim
> "Any pass-to-fail transition refuses the edit, whatever the aggregate did." — .agents/architecture/ADR-087-held-out-validated-improvement.md:268-269

## Also called — verbatim
`discordant_loss` — scripts/eval/optimize-artifact.py:2450

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 268 | defined here | Defines the zero-regression criterion where any task transitioning from pass to fail causes immediate refusal. |

## Consumes
Task outcomes from baseline (pass) and candidate (fail).

## Produces
Regression count and triggers non-negotiable candidate rejection.

## When applied
Evaluated during every candidate gating comparison in `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
discordant-pairs

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An uncompromising quality gate that rejects candidate changes whenever even a single previously-passing task fails, even if aggregate scores increase. This codifies the non-regression principle from ADR-057.
