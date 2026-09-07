---
package: rjm
name: Evaluation rubric
slug: evaluation-rubric
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evaluation rubric

## Definition — verbatim
> "Completeness (25%), Correctness (25%), Clarity (25%), Actionability (25%)" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 46 | defines | Defined as the standard 4-dimension scoring rubric for evaluating agent outputs. |

## Consumes
Candidate artifacts across specification or implementation phases.

## Produces
Numerical quality scores (0-25 per dimension, 0-100% total) and targeted feedback.

## When applied
Applied during each evaluation step of the evaluator-optimizer loop.

## Sub-concepts
completeness, correctness, clarity, actionability

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift

## Design notes
A standardized four-dimensional assessment rubric (Completeness, Correctness, Clarity, Actionability, each weighted at 25%) used by evaluator agents to objectively quantify artifact quality and generate structured improvement guidance.
