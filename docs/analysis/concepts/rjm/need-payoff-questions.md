---
package: rjm
name: Need-payoff questions
slug: need-payoff-questions
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/spin-selling.md, sha256: a92d32c272420a6c4bf96953b82293b68eb44b02b9aaca01eff33813081d9d10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Need-payoff questions

## Definition — verbatim
> "Need-payoff questions. Ask the buyer to state the value of a solution in their own words." — .claude/skills/business-strategy/references/spin-selling.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/spin-selling.md | 23 | defined here | Final stage of SPIN questioning guiding the buyer to describe the positive value of solving the problem. |

## Consumes
Consequence sizing and urgency established through implication questioning.

## Produces
Buyer-authored value justification and internal business case for proceeding with a solution.

## When applied
Applied after the problem's cost is fully realized, immediately prior to demonstrating solution capabilities.

## Sub-concepts
none

## Part of
spin-selling

## Implementation status
clean

## Design notes
Need-payoff questions guide the buyer to describe the specific payoff of solving their problem in their own language. In rjm, this ensures the buyer assumes ownership of the internal business case, equipping them to champion and defend the spend across internal committees.
