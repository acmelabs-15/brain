---
package: rjm
name: rubric score
slug: rubric-score
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

# rubric score

## Definition — verbatim
(used, not defined)

> "ADR-010 caps an evaluator-optimizer loop at three iterations and terminates on a rubric score of 70% or above." — .agents/architecture/ADR-087-held-out-validated-improvement.md:81-82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 82 | used here | Quantitative quality metric cited from ADR-010 used as a termination threshold in evaluator-optimizer loops. |

## Consumes
Authored artifacts, evaluation criteria rubrics, and automated judge scoring inputs.

## Produces
Composite numerical scores assessing artifact quality against weighted rubric dimensions.

## When applied
Applied during automated evaluator-optimizer iterations to determine whether an artifact meets the quality bar to terminate the optimization loop.

## Sub-concepts
none

## Part of
evaluator-optimizer

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The rubric score is a quantitative evaluation artifact in rjm representing an artifact's performance across defined scoring dimensions. It provides the empirical metric used by evaluator-optimizer loops to determine whether an artifact has achieved acceptable quality or requires further iteration.
