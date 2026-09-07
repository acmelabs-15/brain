---
package: rjm
name: Thresholdout
slug: thresholdout
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

# Thresholdout

## Definition — verbatim
> "`Thresholdout` is the noise-and-threshold mechanism that spends a differential-privacy budget;" — .agents/architecture/ADR-087-held-out-validated-improvement.md:732-733

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 672 | used here | Evaluated as a candidate reusable holdout mechanism unadopted due to uncalibrated noise parameters. |

## Consumes
Empirical distribution of held-out evaluation set sizes, noise scale parameters, and a differential-privacy budget.

## Produces
Perturbed threshold comparison answers that preserve generalization validity under adaptive queries.

## When applied
Considered in reusable holdout designs when an optimizer sequentially queries a held-out evaluation set without resetting the split.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented (unadopted alternative in ADR-087; citing inventory card records defects: missing-path, doc-drift, internal-contradiction)

## Design notes
A formal reusable holdout mechanism from differential privacy that perturbs and thresholds queries against a held-out dataset, allowing many more adaptive queries than a naive sample budget. In rjm's evaluation architecture, it was considered but left unadopted in favor of a conservative consultation count cap because setting valid noise parameters requires extensive empirical calibration across varying evaluation set sizes.
