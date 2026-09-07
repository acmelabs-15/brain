---
package: rjm
name: SPIN Selling
slug: spin-selling
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/spin-selling.md, sha256: a92d32c272420a6c4bf96953b82293b68eb44b02b9aaca01eff33813081d9d10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SPIN Selling

## Definition — verbatim
> "# SPIN Selling" — .claude/skills/business-strategy/references/spin-selling.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/spin-selling.md | 1 | defines | Reference guide detailing Neil Rackham's consultative questioning sequence for high-value B2B enterprise sales. |
| .claude/skills/business-strategy/SKILL.md | 27 | used here | Decision router trigger citing SPIN Selling by name to bypass general triage for named sales methodology. |

## Consumes
High-value, multi-stakeholder enterprise sales opportunities and complex customer operational environments.

## Produces
Structured questioning sequence across Situation, Problem, Implication, and Need-Payoff questions.

## When applied
Applied when selling high-value, multi-stakeholder B2B products where wrong purchases are costly and consultative discovery is required.

## Sub-concepts
situation-questions, problem-questions, implication-questions, need-payoff-questions

## Part of
business-strategy

## Implementation status
clean in .claude/skills/business-strategy/references/spin-selling.md; defects: missing-path in .claude/skills/business-strategy/SKILL.md

## Design notes
SPIN Selling represents rjm's enterprise sales methodology derived from Neil Rackham's empirical research. For complex B2B products with multiple stakeholders, it replaces aggressive pitching with a structured four-stage question hierarchy (Situation, Problem, Implication, Need-Payoff), guiding buyers to articulate the commercial severity of their problems and construct their own justification for purchase.
