---
package: rjm
name: Clarity
slug: clarity
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

# Clarity

## Definition — verbatim
> "Unambiguous language" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 46 | defines | Defined as a 25% weighted dimension in the evaluation rubric assessing unambiguous language. |

## Consumes
Artifact prose, specification text, and documentation.

## Produces
Assessment scores evaluating readability and absence of ambiguity.

## When applied
During rubric evaluation of specifications, PRDs, and documentation.

## Sub-concepts
none

## Part of
evaluation-rubric

## Implementation status
defects: doc-drift

## Design notes
A quality criterion in the ADR-010 evaluation rubric measuring whether text is written in precise, unambiguous language that can be understood and acted upon without misinterpretation.
