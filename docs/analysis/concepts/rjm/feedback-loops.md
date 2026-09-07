---
package: rjm
name: Feedback loops
slug: feedback-loops
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Feedback loops

## Definition — verbatim
> "Output feeds back as input, amplifying or dampening" — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 17 | defined here | Core concepts table entry defining feedback loops in systems thinking. |

## Consumes
Decision proposals that alter system dynamics, incentives, or process structures.

## Produces
Identification of self-reinforcing (amplifying) or stabilizing (dampening) cycles created or broken by the decision.

## When applied
During Challenge (Steps 5-6) when evaluating second-order system consequences.

## Sub-concepts
none

## Part of
strategic-thinking-systems-thinking

## Implementation status
defects: missing-path

## Design notes
A core systems thinking pattern in decision critique that forces evaluators to inspect circular causality, uncovering how a decision's consequences loop back to amplify the original problem or dampen intended benefits.
