---
package: rjm
name: independent-thinker agent
slug: independent-thinker-agent
kind: role
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

# independent-thinker agent

## Definition — verbatim
(used, not defined)

> "independent-thinker agent evolves to formal evaluator role" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 84 | used here | Noted as evolving into the formal evaluator role within the quality gate architecture. |

## Consumes
Work outputs, plans, or specifications requiring unconstrained evaluation.

## Produces
Critical assessment and objective evaluation unburdened by generator assumptions.

## When applied
Prior to ADR-010 formalization, applied for critical review; subsequently formalized into the evaluator role.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An agent persona designed to critique outputs and provide unvarnished feedback, serving as the historical precursor to the formalized critic/evaluator role in ADR-010's evaluator-optimizer loop.
