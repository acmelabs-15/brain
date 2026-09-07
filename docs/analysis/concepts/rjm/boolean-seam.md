---
package: rjm
name: boolean seam
slug: boolean-seam
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

# boolean seam

## Definition — verbatim
> "The boolean seam discards information the scorers already produce. An edit that lifts every held-out task from 0.50 to 0.99 without crossing the threshold is invisible to this decision." — .agents/architecture/ADR-087-held-out-validated-improvement.md:550-552

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 550 | defined here | Architectural interface abstraction that maps diverse scorer outputs to binary task pass/fail booleans. |

## Consumes
Task evaluation outputs from heterogeneous evaluators (pytest, LLM judges, rubrics).

## Produces
Standardized dictionary mapping task IDs to boolean pass/fail values.

## When applied
Applied across all evaluation adapters in `_optimizer_adapters.py` and `cmd_extract` when preparing inputs for `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The architectural boundary between evaluators and the gating mechanism. By reducing all evaluator outputs to a simple dictionary mapping task ID to boolean pass/fail, the seam decouples the gate from specific evaluation frameworks at the cost of discarding continuous score distributions.
