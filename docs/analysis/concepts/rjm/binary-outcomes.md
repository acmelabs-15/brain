---
package: rjm
name: Binary outcomes
slug: binary-outcomes
kind: pattern
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

# Binary outcomes

## Definition — verbatim
> "Pass/fail with no structured feedback for improvement" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 27 | used here | Identified as an insufficient review pattern providing only pass/fail verdicts without actionable feedback. |

## Consumes
Evaluation requests on generated outputs.

## Produces
Simple pass/fail verdicts lacking diagnostic guidance.

## When applied
Legacy reviews prior to the adoption of rubric-based evaluator-optimizer loops.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A simplistic evaluation pattern that collapses assessment into a binary pass/fail decision. ADR-010 replaces binary outcomes with multi-dimensional weighted scoring and structured feedback directives to guide effective artifact regeneration.
