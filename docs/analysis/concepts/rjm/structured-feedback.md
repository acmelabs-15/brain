---
package: rjm
name: Structured feedback
slug: structured-feedback
kind: artifact
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

# Structured feedback

## Definition — verbatim
> "Evaluator returns scores + specific improvement suggestions" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 47 | defines | Established as the required output format for evaluator feedback in the loop. |

## Consumes
Candidate output and evaluation rubric scores.

## Produces
Specific improvement suggestions and dimensional scores passed to the generator.

## When applied
When an artifact undergoes review in an evaluation cycle.

## Sub-concepts
none

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift

## Design notes
Formatted diagnostic feedback delivered by an evaluator agent detailing specific deficiencies across rubric dimensions and giving actionable directives to guide the generator's next iteration.
