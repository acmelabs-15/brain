---
package: rjm
name: tiered model routing strategy
slug: tiered-model-routing-strategy
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tiered model routing strategy

## Definition — verbatim
> "Adopt an **evidence-aware, tiered model routing strategy** that routes AI review requests to specialized models" — .agents/architecture/ADR-021-model-routing-strategy.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 54 | defined here | Core decision adopting specialized model routing across prompt types, evidence availability, and escalation triggers. |

## Consumes
Prompt type (JSON extraction, code review, security, synthesis), context mode (full, partial, summary), and confidence triggers.

## Produces
Target model routing selection and execution plan for Copilot CLI review tasks.

## When applied
Applied when dispatching AI review requests to Copilot CLI or LLM backends in GitHub Actions workflows.

## Sub-concepts
evidence-sufficiency-principle

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path

## Design notes
A dispatching technique that maps distinct review tasks to specialized language models based on capability, cost, and evidence availability. By assigning strict JSON extraction to lightweight models and reserving deep reasoning models for security gates and borderline escalations, the architecture optimizes operational costs while preventing false passes caused by model mismatch or missing context.
