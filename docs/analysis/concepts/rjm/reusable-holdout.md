---
package: rjm
name: reusable holdout
slug: reusable-holdout
kind: reference
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

# reusable holdout

## Definition — verbatim
(used, not defined)

> "Dwork's reusable holdout (arXiv:1506.02629) assumes the analyst reaches the holdout only through the mechanism, and that assumption is exactly what does not hold here." — .agents/architecture/ADR-087-held-out-validated-improvement.md:407-409

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 407 | used here | Cited as foundational academic prior art for adaptive data analysis and repeated querying against validation sets. |

## Consumes
Academic literature on adaptive data analysis (Dwork et al., 2015).

## Produces
Theoretical framework informing consultation budgeting and information leakage constraints.

## When applied
Referenced when designing consultation budgets and assessing optimizer access boundaries.

## Sub-concepts
none

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Foundational theory from Dwork et al. on preserving statistical validity in adaptive data analysis. ADR-087 uses it as a benchmark to assess whether rjm's local filesystem execution model maintains the black-box interaction assumptions required for theoretical generalization guarantees.
