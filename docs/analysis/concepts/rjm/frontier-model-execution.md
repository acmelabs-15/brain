---
package: rjm
name: Frontier-Model Execution
slug: frontier-model-execution
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Frontier-Model Execution

## Definition — verbatim
> "This project's instructions assume a top-tier thinking frontier model runs them. Its dominant failure mode is over-thinking, not incapability." — .agents/governance/agent-design-principles.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 9 | defined here | Core operating assumption establishing that instruction guardrails are designed to constrain capability down rather than scaffold weaker models up. |

## Consumes
Frontier LLM capabilities, reasoning models, and agent instruction prompt architectures.

## Produces
Lean, constraint-focused agent instructions that prune unnecessary overthinking without bloated scaffolding.

## When applied
Foundational assumption applied across all agent designs, prompt instructions, and guardrail definitions.

## Sub-concepts
constrain-that-capability-down, scaffold-a-weaker-model-up, calibrated-envelope, calibrated-floor

## Part of
none

## Implementation status
defects: other

## Design notes
The central architectural premise of rjm's prompt design. By assuming execution by a capable frontier reasoning model whose primary defect is overthinking, instructions avoid defensive hand-holding and scaffolding, keeping prompts token-efficient and focused on negative constraints.
