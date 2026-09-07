---
package: rjm
name: Loop Protocol
slug: loop-protocol
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

# Loop Protocol

## Definition — verbatim
> "Loop Protocol" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 97 | defines | Defines the operational 5-step execution sequence governing generator-evaluator interaction and iteration limits. |

## Consumes
Candidate work outputs and rubric evaluation scores.

## Produces
An ACCEPT decision, a regeneration directive with structured feedback, or an escalation package to human users.

## When applied
Applied when reviewing significant outputs (PRD/Spec, code implementation) through the evaluator-optimizer quality gate.

## Sub-concepts
- evaluation-rubric
- structured-feedback
- regeneration-limit
- termination-criteria

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift

## Design notes
A structured 5-step operational protocol orchestrating the generator and evaluator agents through iterative refinement, bounding iterations to 3 and establishing explicit thresholds for acceptance or escalation.
