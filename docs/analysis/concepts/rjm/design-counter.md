---
package: rjm
name: Design, Counter
slug: design-counter
kind: phase
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Design, Counter

## Definition — verbatim
> "Apply PCP framing to every counter:" — .claude/agents/negotiation.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 105 | defined here | Step 3 of RADAR, formulating counter-proposals using PCP framing. |

## Consumes
Mapped ZOPA, BATNA, and quantified value gaps from Step 2.

## Produces
Strategic counter-proposal structure formatted through Perception, Context, and Permission lenses.

## When applied
Applied during Step 3 of the RADAR analysis workflow.

## Sub-concepts
pcp-framing

## Part of
radar

## Implementation status
clean

## Design notes
Design, Counter is Step 3 of the RADAR negotiation process, dedicated to crafting persuasive counter-proposals. Rather than responding with naked numbers, it applies behavioral framing techniques to reshape the counterpart's perspective and establish favorable reference standards.
