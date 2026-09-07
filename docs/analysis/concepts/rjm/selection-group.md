---
package: rjm
name: selection group
slug: selection-group
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

# selection group

## Definition — verbatim
> "The accept decision reads the selection group and nothing else." — .agents/architecture/ADR-087-held-out-validated-improvement.md:154

## Also called — verbatim
`sel` — .agents/architecture/ADR-087-held-out-validated-improvement.md:191

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 152 | defined here | Defined as the held-out partition of evaluation tasks read exclusively by the accept decision gate. |

## Consumes
Evaluation task universe, split configuration, and baseline results.

## Produces
Held-out evaluation task subset used to calculate gate decisions and p-values.

## When applied
Created during evaluation dataset splitting and queried by `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
decision-group

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The primary held-out validation group used to gate candidate patches in the evaluator-optimizer loop. Repeated queries against the selection group count as selection events that exhaust a pre-allocated consultation budget, protecting against adaptive overfitting and false improvements.
