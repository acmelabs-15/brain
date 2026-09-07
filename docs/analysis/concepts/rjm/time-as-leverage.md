---
package: rjm
name: Time as Leverage
slug: time-as-leverage
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Time as Leverage

## Definition — verbatim
> "- You control response cadence. Do not match urgency you did not create." — .claude/agents/negotiation.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 166 | defined here | Tactical principles governing response cadence, deliberate silence, and resisting artificial deadlines. |
| templates/agents/negotiation.shared.md | 171 | defined here | Shared template behavioral guidelines on controlling time and cadence during negotiation. |

## Consumes
Counterpart communications, external timing pressures, and negotiation deadlines.

## Produces
Cadence control strategies, intentional pause recommendations, and deadline verification rules.

## When applied
Applied when formulating negotiation communication timelines and responding to counterpart deadlines.

## Sub-concepts
none

## Part of
negotiation

## Implementation status
clean

## Design notes
Time as Leverage embodies the tactical principle that controlling response cadence shapes bargaining power. By rejecting urgency created by counterparts, utilizing strategic silence after countering, and setting deadlines for internal decisions, rjm agents protect users from hasty concessions.
