---
package: rjm
name: null control
slug: null-control
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

# null control

## Definition — verbatim
(used, not defined)

> "2026-07-27 two runs of the same agent were gated against each other and read as a null control." — .agents/architecture/ADR-087-held-out-validated-improvement.md:296-297

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 297 | used here | An experimental control run comparing an unchanged artifact against itself to measure baseline evaluator noise. |

## Consumes
Identical artifact evaluated across multiple runs with identical configurations.

## Produces
Empirical measurement of judge variance and false-positive rate under the null hypothesis.

## When applied
Conducted during evaluation harness calibration and recommended when validating non-deterministic LLM evaluators.

## Sub-concepts
none

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A critical empirical validation technique where an unchanged artifact is evaluated against itself to measure judge noise. In ADR-087, a null control revealed that LLM evaluator variance caused false-positive ACCEPT decisions on byte-identical prompts, demonstrating the necessity of McNemar exact testing and consultation budgeting.
