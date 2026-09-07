---
package: rjm
name: evaluator-optimizer loop
slug: evaluator-optimizer-loop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# evaluator-optimizer loop

## Definition — verbatim
> "All significant outputs MUST pass through a formalized evaluator-optimizer loop." — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 42 | defines | Mandated as the required quality mechanism for all significant agent outputs. |
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 81 | used here | Cited as capping iterations at three and terminating on a rubric score of 70% or above. |

## Consumes
Artifact drafts, evaluation rubrics, and iteration count state.

## Produces
Accepted artifacts scoring >= 70% or escalation to human review after 3 iterations.

## When applied
Enforced on all significant outputs including PRDs, specs, and code implementations.

## Sub-concepts
evaluation-rubric, regeneration-limit, termination-criteria, loop-protocol

## Part of
evaluator-optimizer-pattern

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
The concrete execution loop implementing the evaluator-optimizer pattern. It pairs an independent evaluator with the generator, evaluates output against a 4-part rubric, directs regeneration on scores below 70%, and strictly caps execution at 3 iterations to prevent runaway token expenditure.
